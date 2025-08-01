import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`);
        // console.log("response:", res);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user)
    return (
      <div className="text-center py-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-3 border-green-700 m-auto"></div>
        <p className="mt-2 text-gray-600">Loading dashboard...</p>
      </div>
    );

  return (
    <div className=" mt-10">
      <h2 className="text-center text-2xl font-semibold pb-2 text-green-800">
        Dashboard
      </h2>
      <div className="m-auto shadow-sm shadow-gray-400  p-8 sm:w-11/12 md:w-1/2">
        <p>
          <strong>Intern Name:</strong> {user.name}
        </p>
        <p>
          <strong>Referral Code:</strong> {user.referralCode}
        </p>
        <p>
          <strong>Total Donations Raised :</strong> Rs.{user.totalDonations}
        </p>

        <h3 className="text-xl font-semibold text-green-800 ">Rewards</h3>
        <ul className="px-6 py-2">
          {user.rewards.map((r, idx) => (
            <li key={idx} className="list-disc">
              {r.title}- {r.description}
            </li>
          ))}
        </ul>

        <div>
          <button className="bg-green-700 my-4 text-white rounded p-2 ">
            <Link to="/leaderboard">View Leader Board</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
