"use client";

import { useEffect } from "react";


const MainContainer = ({ children }) => {
  useEffect(() => {
    // Get the Navbar element by its id
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");

    const navbarHeight = navbar ? navbar.clientHeight : 0;
    const footerHeight = footer ? footer.clientHeight : 0;
    const main = document.querySelector("main");
    if (main) {
      main.style.marginTop = `${navbarHeight}px`;
      main.style.zIndex = 2;
      // main.style.marginBottom=`${footerHeight}px`
    }
  }, []);
  return (
          <main className="content relative flex flex-col flex-1 h-full">
            {children}
          </main>
  );
};

export default MainContainer;
