import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Jake', lastName: 'ADM'};
  return (
    <main className="flex h-screen font-inter">
        <Sidebar user={loggedIn} />
        {children}
    </main>
  );
}
