export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen ">
      {/* <main className="flex min-h-screen flex-col items-center justify-between "> */}
      {children}
    </main>
  );
}
