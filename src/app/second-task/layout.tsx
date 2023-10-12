import { CountriesFilterProvider } from "@/components/context/countries-context";

export default function SecondTaskLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CountriesFilterProvider>
            <section>
                {children}
            </section>
        </CountriesFilterProvider>);
}