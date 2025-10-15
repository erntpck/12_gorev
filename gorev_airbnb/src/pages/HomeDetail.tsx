import { useEffect, useState } from "react";

import { HomesAPI } from "../api/axios";
import type { Home } from "../types/home";
import { Link, useNavigate, useParams } from "react-router";

export default function HomeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState<Home | null>(null);

  useEffect(() => {
    if (id) HomesAPI.get(id).then(setHome);
  }, [id]);

  if (!home) return <p className="text-center mt-10">Loading...</p>;

  const handleDelete = async () => {
    await HomesAPI.remove(home.id!);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-gray-500 hover:text-gray-800 mb-4 block">
        ← Back to listings
      </Link>

      <img
        src={home.imageUrl}
        alt={home.title}
        className="w-full h-72 object-cover rounded-lg mb-4"
      />

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{home.title}</h1>
        <div className="flex gap-3">
          <Link to={`/homes/${home.id}/edit`} className="text-blue-600">
            ✏️
          </Link>
          <button onClick={handleDelete} className="text-red-600">
            🗑️
          </button>
        </div>
      </div>

      <p className="text-gray-500">{home.location}</p>

      <div className="flex gap-6 text-gray-700 mt-4">
        <span>👥 {home.guests} Guests</span>
        <span>🛏 {home.bedrooms} Beds</span>
        <span>🛁 {home.bathrooms} Baths</span>
      </div>

      <h2 className="mt-6 font-semibold">About this place</h2>
      <p className="text-gray-600 mb-4">{home.description}</p>

      <h3 className="font-semibold mb-2">Amenities</h3>
      <ul className="flex flex-wrap gap-3 text-gray-700">
        {home.amenities.map((a) => (
          <li key={a} className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-2xl font-bold">${home.pricePerNight}/night</p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded">
          Reserve
        </button>
      </div>
    </div>
  );
}
