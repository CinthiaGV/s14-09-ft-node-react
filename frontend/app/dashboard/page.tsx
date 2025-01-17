"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // const getInfo = async () => {
  //   const res = await fetch("/api/info", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${session?.user?.token}`,
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
        {/* <button onClick={getInfo}>Get Info</button> */}
      </pre>
    </div>
  );
};
export default Dashboard;
