import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const leaderboardData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/leaderboard`
        );
        // console.log("response:", res);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setBoard(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    leaderboardData();
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-semibold mb-2 text-green-800">
        Leaderboard
      </h2>
      <div className="p-6 shadow-sm shadow-gray-400 m-auto sm:w-11/12 md:w-1/2">
        {loading ? (
          <div className="text-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-3 border-green-700 m-auto"></div>
            <p className="mt-2 text-gray-600">Loading leaderboard...</p>
          </div>
        ) : (
          <table className="w-full border border-gray-500">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Donations</th>
              </tr>
            </thead>
            <tbody>
              {board.map((entry, idx) => (
                <tr key={idx}>
                  <td className="border p-2 text-center">{entry.name}</td>
                  <td className="border p-2 text-center">
                    Rs.{entry.donations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div>
          <button className="bg-green-700 my-4 text-white rounded p-2 ">
            <Link to="/dashboard">Back to Dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
