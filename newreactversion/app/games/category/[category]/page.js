"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import AOS from "aos";
import Link from "next/link";
import CloudIcon from "@mui/icons-material/Cloud";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "@/components/GamesPage/GameList.css";

export default function CategoryPage() {
  const params = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = params.category;
  const router = useRouter();
  const titleRefs = useRef([]);
  const [aosDelayEnabled] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });

    fetch("/games.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredGames = data
          .map((game, index) => ({
            ...game,
            imageSrc: game.OnOtherServer
              ? `https://hypackelcloudflare.pages.dev${game.imageSrc}`
              : game.imageSrc,
            originalIndex: index,
          }))
          .filter((game) => {
            return (
              game.tags &&
              typeof game.tags === "string" &&
              game.tags.toLowerCase().includes(category.toLowerCase())
            );
          });
        setGames(filteredGames);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  const addToRecentPlays = useCallback((game) => {
    if (typeof window !== "undefined") {
      const recentPlays = JSON.parse(
        localStorage.getItem("recentPlays") || "[]"
      );
      const updatedRecentPlays = [
        game.name,
        ...recentPlays.filter((name) => name !== game.name),
      ].slice(0, 10);
      localStorage.setItem("recentPlays", JSON.stringify(updatedRecentPlays));
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Link
          className="text-gray-500 hover:text-white pt-3 pb-3 pl-2 pr-2 rounded-sm hover:transition-all hover:duration-200 flex items-center gap-2 w-fit absolute left-4"
          href="/games"
        >
          <ArrowBackIcon /> Back to Games
        </Link>
        <h1
          className="text-3xl font-bold text-center"
          //   data-aos="fade-down"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)} Games
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <br />
       
        <div className="app-list">
          {games.map((game, index) => {
            const aosDelay = aosDelayEnabled
              ? index > 0
                ? `${Math.floor(index / 4) * 100}` // Delay based on row number (4 items per row)
                : undefined
              : undefined;

            return (
              <div key={index} data-aos="fade-up" data-aos-delay={aosDelay}>
                <div className="app-card">
                  <Link
                    href={`/play/${game.originalIndex + 1}`}
                    onClick={() => addToRecentPlays(game)}
                  >
                    {game.OnOtherServer && (
                      <div className="cloud-icon-container">
                        <CloudIcon className="cloud-icon" />
                      </div>
                    )}
                    <div className="image-placeholder loading">
                      <div className="gradient" />
                      <div className="inline-block">
                        <img
                          className="app-image"
                          src={game.imageSrc}
                          alt={game.name}
                          onLoad={(e) => {
                            const parent = e.target.parentElement.parentElement;
                            parent.classList.remove("loading");
                            parent.classList.add("loaded");
                            const gradient = parent.querySelector(".gradient");
                            if (gradient) {
                              gradient.style.display = "none";
                            }
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/image-placeholder.png";
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <h1
                      ref={(el) => (titleRefs.current[index] = el)}
                      className="title gms-title"
                      style={{
                        color: game.broken ? "red" : "var(--text)",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {game.name}
                    </h1>
                    <p className="game-tags-color-switch flex flex-wrap">
                      {game.tags?.split(",").map((tag, i) => (
                        <span
                          key={i}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            router.push(
                              `/games?q=${encodeURIComponent(tag.trim())}`
                            );
                          }}
                          className="bg-black ml-1 mb-2 mr-1 pl-2 pr-2 pt-1 pb-1 rounded-md hover cursor-pointer"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
