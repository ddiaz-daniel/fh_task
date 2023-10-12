import { UserSelectionProvider } from "@/components/user-context";

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