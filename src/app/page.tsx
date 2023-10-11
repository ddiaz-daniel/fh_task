import PageHeader from "@/components/ui/page-header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elevation Finder</title>
        <meta name="description" content="Task FH OOE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col bg-slate-200">
        <PageHeader />
      </main>

    </>
  );
}
