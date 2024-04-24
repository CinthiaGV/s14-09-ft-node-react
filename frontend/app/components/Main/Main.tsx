export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <main className="min-h-screen ">
      {/* <main className="flex min-h-screen flex-col items-center justify-between "> */}
=======
    <main className="flex min-h-screen flex-col items-center  justify-between scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
>>>>>>> 2fdf624bdd959c9b6de83d10c8b8339fd7d8a1db
      {children}
    </main>
  );
}
