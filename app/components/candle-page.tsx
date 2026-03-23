"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Candle from "./candle";
import { supabase } from "../lib/supabase";

const images = ["/800.jpg", "/800 (1).jpg", "/800 (2).jpg"];

type Icon = "candle" | "finger";

export default function CandlePage() {
  const [icons, setIcons] = useState<Icon[][]>([[], [], []]);

  // Load existing icons from Supabase on mount
  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("icons")
        .select("image_index, icon_type")
        .order("created_at", { ascending: true });

      if (data) {
        const grouped: Icon[][] = [[], [], []];
        for (const row of data) {
          if (row.image_index >= 0 && row.image_index <= 2) {
            grouped[row.image_index].push(row.icon_type as Icon);
          }
        }
        setIcons(grouped);
      }
    }
    load();
  }, []);

  async function addCandle(index: number) {
    setIcons((prev) =>
      prev.map((arr, i) => (i === index ? [...arr, "candle"] : arr)),
    );
    await supabase
      .from("icons")
      .insert({ image_index: index, icon_type: "candle" });
  }

  async function addFinger(index: number) {
    setIcons((prev) =>
      prev.map((arr, i) => (i === index ? [...arr, "finger"] : arr)),
    );
    await supabase
      .from("icons")
      .insert({ image_index: index, icon_type: "finger" });
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 px-4 py-10 font-sans text-zinc-100">
      <h1 className="mb-8 text-4xl font-bold">O que conta é o jogo</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        {images.map((src, i) => {
          const candleCount = icons[i].filter((ic) => ic === "candle").length;
          const fingerCount = icons[i].filter((ic) => ic === "finger").length;

          return (
            <div key={src} className="flex flex-col items-center gap-4">
              {/* Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-zinc-800 shadow-lg shadow-black/40">
                <Image
                  src={src}
                  alt={`Foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => addCandle(i)}
                  className="flex cursor-pointer items-center gap-2 text-4xl rounded-full border border-amber-700/50 bg-amber-900/30 px-5 py-2.5 font-medium text-amber-200 transition-all hover:scale-105 hover:bg-amber-800/40 active:scale-95"
                >
                  🕯️
                </button>
                <button
                  onClick={() => addFinger(i)}
                  className="flex cursor-pointer items-center gap-2 text-4xl rounded-full border border-red-700/50 bg-red-900/30 px-5 py-2.5 font-medium text-red-200 transition-all hover:scale-105 hover:bg-red-800/40 active:scale-95"
                >
                  🖕
                </button>
              </div>

              {/* Counts */}
              <div className="flex gap-4">
                {candleCount > 0 && (
                  <span className="text-xs text-zinc-500">
                    {candleCount} {candleCount === 1 ? "vela" : "velas"}
                  </span>
                )}
                {fingerCount > 0 && (
                  <span className="text-xs text-zinc-500">
                    {fingerCount} 🖕
                  </span>
                )}
              </div>

              {/* Icons row – candles and fingers together in click order */}
              {icons[i].length > 0 && (
                <div
                  className={`flex max-w-full flex-wrap items-end justify-center gap-1 w-full  ${i === 1 ? "border-x-2 border-pink-400 px-2" : ""}`}
                >
                  {icons[i].map((ic, j) =>
                    ic === "candle" ? (
                      <Candle key={j} />
                    ) : (
                      <span key={j} className="text-2xl">
                        🖕
                      </span>
                    ),
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
