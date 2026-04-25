import WorkSidebar from '@/components/layout/work-sidebar';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col lg:flex-row">
      <WorkSidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
