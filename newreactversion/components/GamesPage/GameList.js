"use client";

import AOS from "aos";
import Link from "next/link";
import Image from "next/image";
import { FaRandom } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import CloudIcon from "@mui/icons-material/Cloud";
import { useRouter } from "next/navigation";

import "./GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [displayedGames, setDisplayedGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const imageCache = useRef(new Map());
  const [gamesPerPage, setGamesPerPage] = useState(1000000000000000000000);
  const [showSecretCard, setShowSecretCard] = useState(false);
  const scrollTimeout = useRef(null);
  const delayTime = useRef(0);
  const [gamesCount, setGamesCount] = useState(0);
  const [aosDelayEnabled, setAosDelayEnabled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [password, setPassword] = useState("");
  const titleRefs = useRef([]);
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleGameCountClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        setShowPasswordModal(true);
        return 0;
      }
      return newCount;
    });
  };

  useEffect(() => {
    const filteredGames = games.filter((game) => {
      const query = searchQuery.toLowerCase();
      const titleMatch = game.name.toLowerCase().includes(query);
      const tagsMatch = (game.tags ? game.tags.split(",") : []).some((tag) =>
        tag.trim().toLowerCase().includes(query)
      );
      return titleMatch || tagsMatch;
    });

    setShowSecretCard(searchQuery.toLowerCase() === "secret");

    const newGames = filteredGames.slice(0, page * gamesPerPage);
    setDisplayedGames(newGames);

    // Set loading to false if we've loaded all filtered games
    if (newGames.length === filteredGames.length) {
      setLoading(false);
    }

    console.log(
      `Displaying ${newGames.length} games out of ${filteredGames.length} filtered games`
    );
  }, [page, games, searchQuery, gamesPerPage]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAosDelay = localStorage.getItem("GameListAOS");
      setAosDelayEnabled(storedAosDelay === "true");
    }
  }, []);

  useEffect(() => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    titleRefs.current.forEach((titleElement) => {
      if (titleElement) {
        const maxHeight = Number.parseFloat(
          getComputedStyle(titleElement).lineHeight
        );
        if (titleElement.scrollHeight > maxHeight) {
          let fontSize = Number.parseFloat(
            getComputedStyle(titleElement).fontSize
          );
          while (titleElement.scrollHeight > maxHeight && fontSize > 10) {
            fontSize -= 1;
            titleElement.style.fontSize = `${fontSize}px`;
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    if (aosDelayEnabled) {
      AOS.init({ once: true });
    } else {
      AOS.refresh();
    }
  }, [aosDelayEnabled]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/games.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const updatedGames = data.map((game, index) => ({
          ...game,
          imageSrc: game.OnOtherServer
            ? `https://hypackelcloudflare.pages.dev${game.imageSrc}`
            : game.imageSrc,
          url: game.OnOtherServer
            ? `https://hypackelcloudflare.pages.dev${game.url}`
            : game.url,
          originalIndex: index,
        }));

        const sortedGames = updatedGames.sort((a, b) => {
          if (a.broken === b.broken) return 0;
          return a.broken ? 1 : -1;
        });

        setGames(sortedGames);
        setGamesCount(sortedGames.length);
        setDisplayedGames(sortedGames.slice(0, gamesPerPage));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGames();
  }, [gamesPerPage]);

  const loadMoreGames = useCallback(() => {
    // Check if we've loaded all games
    if (displayedGames.length >= games.length) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, delayTime.current);
    delayTime.current *= 2;
  }, [displayedGames.length, games.length]);

  const handleScroll = useCallback(() => {
    // Don't process scroll if all games are loaded
    if (displayedGames.length >= games.length) {
      setLoading(false);
      return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage > 0.8) {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      setLoading(true);

      scrollTimeout.current = setTimeout(() => {
        loadMoreGames();
      }, delayTime.current);
    } else {
      delayTime.current = 500;
      setLoading(false);
    }
  }, [loadMoreGames, displayedGames.length, games.length]);

  const SecretGameCard = () => (
    <div className="app-card secret-card">
      <Link href="/games/random">
        <div className="image-placeholder">
          <Image
            height={1000}
            width={1000}
            className="app-image"
            src="https://thumbs.dreamstime.com/b/present-box-6987017.jpg"
            alt="Secret Game"
          />
        </div>
        <br />
        <h1 className="title gms-title">Easter Egg</h1>
        <p className="game-tags-color-switch">
          <span className="bg-black ml-1 mb-2 mr-1 pl-2 pr-2 pt-1 pb-1 rounded-md hover">
            idk
          </span>
        </p>
      </Link>
    </div>
  );

  const lastGameElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handleScroll();
        }
      });
      if (node) observer.current.observe(node);
    },
    [handleScroll]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      };
    }
  }, [handleScroll]);

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <center>
        <h2
          style={{ fontSize: "16px" }}
          key="idk"
          onClick={handleGameCountClick}
        >
          Games: {gamesCount}
        </h2>
        <br />
        <div className="game-search text-center margin-auto">
          <input
            style={{ margin: "auto", display: "flex", alignItems: "center" }}
            type="text"
            className="searchforapps"
            id="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for games or tags..."
          />
        </div>
      </center>
      <br />
      <h1 className="text-3xl font-extrabold flex justify-center align-center m-auto w-full font-sans">
        All Games
      </h1>
      <br />
      <div className="app-list" id="app-list">
        {showSecretCard && <SecretGameCard />}
        {displayedGames.map((game, index) => {
          const gameLink = `/play/${game.originalIndex + 1}`;
          const isLastGame = index === displayedGames.length - 1;
          const aosDelay = aosDelayEnabled
            ? index > 0
              ? `${index * 100}`
              : undefined
            : undefined;

          return (
            <div
              key={index}
              ref={isLastGame ? lastGameElementRef : null}
              data-aos={aosDelayEnabled && index > 0 ? "fade-up" : undefined}
              data-aos-delay={aosDelay}
            >
              <div className="app-card">
                <Link
                  id="launchgame"
                  href={gameLink}
                  data-justopen="false"
                  data-name={game.name}
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
                        id="app-image"
                        src={game.imageSrc}
                        alt=""
                        onLoad={(e) => {
                          e.target.parentElement.classList.remove("loading");
                          e.target.parentElement.classList.add("loaded");
                          imageCache.current.set(game.imageSrc, true);
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
      {loading && (
        <>
          <br />
          <center>
            <div
              style={{ color: "var(--text)" }}
              className="loading-animation text-center"
            >
              <ScaleLoader
                cssOverride={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                color={"#FE191E"}
              />
              <br />
              Loading...
            </div>
          </center>
        </>
      )}
      <br />
      <div className="flex items-center justify-center">
        <Link
          href="/games/random"
          className="flex items-center rounded-t-full rounded-b-full border-[1px] hover:bg-[#FE191E] hover:border-[#FE191E] hover:text-white transition-all duration-300 py-2 px-5 flex-row gap-2"
        >
          <FaRandom className="w-4 h-4" /> Random Game
        </Link>
      </div>
      <br />
    </>
  );
};

export default GameList;
