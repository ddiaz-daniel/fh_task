import { UserSelectionProvider } from "@/components/context/user-context";

export default function FirstTaskLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <UserSelectionProvider>
        <section>
            {children}
        </section>
    </UserSelectionProvider>;
}