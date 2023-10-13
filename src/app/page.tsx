import PageHeader from "@/components/ui/page-header";
import Head from "next/head";
import Dashboard from "@/components/dashboard";


export default function Home() {
  return (
    <>
      <Head>
        <title>FH Task</title>
        <meta name="description" content="Task FH OOE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col bg-darkBlue-900">
        <PageHeader />
        <Dashboard />
      </main>

    </>
  );
}
