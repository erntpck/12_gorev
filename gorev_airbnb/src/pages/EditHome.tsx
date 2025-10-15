import { useState, useEffect } from "react";

import { HomesAPI } from "../api/axios";
import type { Home } from "../types/home";
import { Link, useNavigate, useParams } from "react-router";

export default function EditHome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState<Home | null>(null);

  useEffect(() => {
    if (id) HomesAPI.get(id).then(setHome);
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id && home) {
      await HomesAPI.update(id, home);
      navigate(`/homes/${id}`);
    }
  };

  if (!home) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link
        to={`/homes/${id}`}
        className="text-gray-500 hover:text-gray-800 block mb-4"
      >
        ← Back to details
      </Link>
      <h1 className="text-3xl font-bold mb-6">Edit Home</h1>

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
          className="border p-2 w-full rounded"
        />
        <input
          value={home.location}
          onChange={(e) => setHome({ ...home, location: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <input
          value={home.imageUrl}
          onChange={(e) => setHome({ ...home, imageUrl: e.target.value })}
          className="border p-2 w-full rounded"
        />
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
