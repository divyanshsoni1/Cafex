"use client";

import { useEffect, useState } from "react";

interface CurrentSpecial {
  name: string;
  price: string;
  description: string;
}

interface Cafe {
  id: string | number;
  name: string;
  imageUrl: string;
  rating: number | string;
  totalReviews: number;
  distanceKm: number | string;
  city: string;
  state: string;
  currentSpecial: CurrentSpecial | string | null;
  tags: string[] | string;
}

export default function CafeGridClientWrapper() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCafes() {
      try {
        const response = await fetch("/api/cafes");
        if (!response.ok) throw new Error("Failed to pull matching data");
        const json = await response.json();

        if (json.success) {
          setCafes(json.data);
        } else {
          throw new Error(json.error || "Failed database query configuration");
        }
      } catch (err: any) {
        console.error("Frontend fetching error:", err);
        setError(err.message || "Could not retrieve cafe list");
      } finally {
        setLoading(false);
      }
    }
    loadCafes();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-neutral-500 font-medium animate-pulse text-sm">
          Brewing your café data...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-sm font-medium text-red-600 bg-red-50/60 border border-red-100 rounded-2xl max-w-xl mx-auto">
        ⚠️ {error}
      </div>
    );
  }

  if (cafes.length === 0) {
    return (
      <div className="text-center py-16 text-sm font-medium text-neutral-400 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
        No active cafes registered inside your database workspace yet.
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cafes.map((cafe) => {
        // Defensive transformation handling strings or objects out of Postgres
        const parsedTags: string[] =
          typeof cafe.tags === "string" ?
            JSON.parse(cafe.tags)
          : cafe.tags || [];

        const parsedSpecial: CurrentSpecial | null =
          typeof cafe.currentSpecial === "string" ?
            JSON.parse(cafe.currentSpecial)
          : cafe.currentSpecial;

        return (
          <article
            key={cafe.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image Section Wrapper */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 relative">
              <img
                src={
                  cafe.imageUrl ||
                  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                }
                alt={cafe.name}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-semibold text-neutral-800 border border-neutral-100 flex items-center gap-1">
                📍 {Number(cafe.distanceKm).toFixed(1)} km away
              </div>
            </div>

            {/* Content Details Block */}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-800 transition-colors">
                    {cafe.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    {cafe.city}, {cafe.state}
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-bold text-amber-900 border border-amber-100/50">
                  ★ {Number(cafe.rating).toFixed(1)}
                  <span className="text-neutral-400 font-normal">
                    ({cafe.totalReviews})
                  </span>
                </div>
              </div>

              {/* Horizontal pill tag collections */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {parsedTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-neutral-100 rounded-md px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contextual Conditional Special Content Layer */}
              <div className="mt-auto pt-4 border-t border-neutral-100">
                {parsedSpecial ?
                  <div className="rounded-xl bg-amber-50/70 border border-amber-600/10 p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                        Today's Special
                      </span>
                      <span className="text-xs font-extrabold text-neutral-900 bg-white shadow-sm border px-1.5 py-0.5 rounded-md">
                        {parsedSpecial.price}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-neutral-800 line-clamp-1">
                      {parsedSpecial.name}
                    </p>
                    <p className="text-xs text-neutral-500 line-clamp-2 mt-0.5 font-normal leading-normal">
                      {parsedSpecial.description}
                    </p>
                  </div>
                : <div className="text-center py-2 text-xs font-medium text-neutral-400 bg-neutral-50 rounded-xl border border-dashed border-neutral-200">
                    No specials active today • View standard menu
                  </div>
                }
              </div>

              <button className="mt-4 w-full rounded-xl bg-neutral-50 border border-neutral-200 py-2 text-center text-sm font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">
                View Full Menu
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
