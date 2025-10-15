import { useEffect, useState } from "react";
import { HomesAPI } from "../api/axios";

import HomeCard from "../components/HomeCard";
import { Link } from "react-router";
import type { Home } from "../types/home";

export default function HomeList() {
  const [homes, setHomes] = useState<Home[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    HomesAPI.list()
      .then(setHomes)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Explore Homes</h1>
          <p className="text-gray-600">Find your perfect stay</p>
        </div>
        <Link
          to="/homes/new"
          className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
        >
          + Add Home
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homes.map((h) => (
          <HomeCard key={h.id} home={h} />
        ))}
      </div>
    </div>
  );
}
