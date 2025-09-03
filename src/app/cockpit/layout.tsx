export default function CockpitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="cockpit-layout">
      {children}
    </div>
  );
} 