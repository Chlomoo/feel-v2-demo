// Feel Authentication - Configuration NextAuth.js 2025
// Configuration complète pour l'authentification Feel

import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  
  providers: [
    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    
    // Apple Sign In
    AppleProvider({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!,
    }),
  ],
  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        
        // Récupérer le profil utilisateur
        const profile = await prisma.profile.findUnique({
          where: { userId: user.id },
          include: {
            praticien: true,
            directeur: true,
            assistante: true
          }
        });
        
        if (profile) {
          token.profile = {
            id: profile.id,
            profession: profile.profession,
            status: profile.status,
            firstName: profile.firstName,
            lastName: profile.lastName
          };
        }
      }
      
      return token;
    },
    
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.profile = token.profile as any;
      }
      
      return session;
    },
    
    async signIn({ user, account, profile }) {
      // Vérifier si l'utilisateur a un profil Feel
      const existingProfile = await prisma.profile.findUnique({
        where: { userId: user.id }
      });
      
      if (!existingProfile) {
        // Créer un profil de base si l'utilisateur n'en a pas
        await prisma.profile.create({
          data: {
            userId: user.id,
            firstName: user.name?.split(' ')[0] || '',
            lastName: user.name?.split(' ').slice(1).join(' ') || '',
            profession: 'PRATICIEN', // Par défaut
            status: 'PENDING'
          }
        });
      }
      
      return true;
    }
  },
  
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      if (isNewUser) {
        // Créer une notification de bienvenue
        await prisma.notification.create({
          data: {
            userId: user.id,
            type: 'SYSTEM_ALERT',
            title: 'Bienvenue sur Feel !',
            message: 'Votre compte a été créé avec succès. Complétez votre profil pour commencer.'
          }
        });
      }
      
      // Mettre à jour la date de dernière connexion
      await prisma.profile.updateMany({
        where: { userId: user.id },
        data: { lastLoginAt: new Date() }
      });
    }
  }
};

// Types pour TypeScript
export type FeelUser = {
  id: string;
  email: string;
  name?: string;
  image?: string;
  profile?: {
    id: string;
    profession: 'PRATICIEN' | 'DIRECTEUR' | 'ASSISTANTE';
    status: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'SUSPENDED';
    firstName: string;
    lastName: string;
  };
};

declare module "next-auth" {
  interface Session {
    user: FeelUser;
  }
  
  interface User extends FeelUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    profile?: {
      id: string;
      profession: string;
      status: string;
      firstName: string;
      lastName: string;
    };
  }
} 