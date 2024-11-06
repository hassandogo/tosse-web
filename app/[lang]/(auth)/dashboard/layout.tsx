import { Header, Sidebar, Footer } from "@/components/auth/dashboard/global"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    );
}