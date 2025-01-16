"use client";

// Next Imports
import Image from "next/image";
import Link from "next/link";
import { FaRandom } from "react-icons/fa";

// CSS
import "@/app/css/globals.css";
import "./navbar.css";

// React Imports
import { useState, useEffect } from "react";
import React from "react";

// Components
import MobileNavbar from "@/components/shared/MobileNav";

// Extra imports

// Icons
import {
  faShield,
  faGamepad,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingsIcon from "@mui/icons-material/Settings";
import LinkIcon from "@mui/icons-material/Link";

export default function Ebaron() {
  const [showGamesLink, setShowGamesLink] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = new URL(window.location.href);
      const domain = currentUrl.origin;

      setShowGamesLink(
        domain === "https://hypackel-geqtchcagq-uk.a.run.app" ||
          domain === "https://hypackel.com" ||
          domain === "https://hypackel-630100498932.us-east4.run.app/" ||
          domain === "http://localhost:3000"
      );

      // Set the localhost flag
      setIsLocalhost(domain === "http://localhost:3000");
    }
  }, []);

  // if (error) re  turn <div>{error.message}</div>;

  return (
    <>
      <div id="fixed-nav-bar" className="fixed-nav-bar">
        <div className="fixed-nav-bar-container">
          <Link className="icon" style={{ wordWrap: "initial" }} href="/">
            <Image
              width={300}
              height={300}
              alt="nav"
              id="HYimg"
              src="/assets/img/app.png"
            />
            {isLocalhost && <span className="local-badge">Local</span>}
          </Link>
        </div>
        <div style={{ color: "#fff" }} className="fixed-nav-bar-right flex flex-row items-center ">
          <Link className="navbar-link" href="/games">
            <FontAwesomeIcon className="navbar-icon" icon={faGamepad} />
            Games
          </Link>

          <Link href="/games/random" className="navbar-link flex items-center flex-row gap-2">
            <FaRandom className="w-4 h-4" /> Random Game
          </Link>

          <Link
            className="navbar-link"
            target="_blank"
            href="https://bit.ly/hypackellinks"
          >
            <LinkIcon className="mb-1" /> Links
          </Link>
        </div>
      </div>
      <header className="header">
        <MobileNavbar />
      </header>
    </>
  );
}
