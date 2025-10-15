import { useState } from "react";

import { HomesAPI } from "../api/axios";
import { Link, useNavigate } from "react-router";
import type { Home } from "../types/home";

export default function AddHome() {
  const navigate = useNavigate();
  const [home, setHome] = useState<Home>({
    title: "",
    description: "",
    pricePerNight: 0,
    location: "",
    imageUrl: "",
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await HomesAPI.create(home);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/" className="text-gray-500 hover:text-gray-800 block mb-4">
        ← Back to listings
      </Link>
      <h1 className="text-3xl font-bold mb-6">Add New Home</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <input
          value={home.title}
          onChange={(e) => setHome({ ...home, title: e.target.value })}
          placeholder="Title"
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          value={home.description}
          onChange={(e) => setHome({ ...home, description: e.target.value })}
          placeholder="Description"
          className="border p-2 w-full rounded"
          rows={3}
          required
        />
        <input
          type="number"
          value={home.pricePerNight}
          onChange={(e) => setHome({ ...home, pricePerNight: +e.target.value })}
          placeholder="Price per night"
          className="border p-2 w-full rounded"
        />
        <input
          value={home.location}
          onChange={(e) => setHome({ ...home, location: e.target.value })}
          placeholder="Location"
          className="border p-2 w-full rounded"
        />
        <input
          value={home.imageUrl}
          onChange={(e) => setHome({ ...home, imageUrl: e.target.value })}
          placeholder="Image URL"
          className="border p-2 w-full rounded"
        />
        <div className="grid grid-cols-3 gap-3">
          <input
            type="number"
            value={home.guests}
            onChange={(e) => setHome({ ...home, guests: +e.target.value })}
            placeholder="Guests"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={home.bedrooms}
            onChange={(e) => setHome({ ...home, bedrooms: +e.target.value })}
            placeholder="Bedrooms"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={home.bathrooms}
            onChange={(e) => setHome({ ...home, bathrooms: +e.target.value })}
            placeholder="Bathrooms"
            className="border p-2 rounded"
          />
        </div>
        <input
          value={home.amenities.join(", ")}
          onChange={(e) =>
            setHome({
              ...home,
              amenities: e.target.value.split(",").map((x) => x.trim()),
            })
          }
          placeholder="Amenities (comma separated)"
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
        >
          Create
        </button>
      </form>
    </div>
  );
}
