import { Link } from "react-router";
import type { Home } from "../types/home";

export default function HomeCard({ home }: { home: Home }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={home.imageUrl}
        alt={home.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{home.title}</h2>
        <p className="text-gray-500">{home.location}</p>

        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>👥 {home.guests}</span>
          <span>🛏 {home.bedrooms}</span>
          <span>🛁 {home.bathrooms}</span>
        </div>

        <p className="text-rose-600 font-bold mt-2">
          ${home.pricePerNight}/night
        </p>

        <Link
          to={`/homes/${home.id}`}
          className="mt-3 inline-block bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
