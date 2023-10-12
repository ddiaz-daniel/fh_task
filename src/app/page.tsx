import Dashboard from "@/components/dashboard";
import PageHeader from "@/components/ui/page-header";

export default function Home() {
  return (
    <>
      <main className="h-screen flex flex-col bg-darkBlue-900">
        <PageHeader />
        <Dashboard />
      </main>

    </>
  );
}
