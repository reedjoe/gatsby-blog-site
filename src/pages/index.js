import React from "react";
import Layout from "../components/layout/Layout"
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/js/all.js';

import './styles.css';
import './parallax.css';

export default function Home() {
  const [offset, setOffset] = useState(0);
  const docHeight = document.documentElement.clientHeight;
  const docWidth = document.documentElement.clientWidth;

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  function CalcXOffset(initialXOffset) {
    let xOffset = offset * 0.9 - (docHeight * (initialXOffset + 0.2));
    return xOffset < docWidth * 0.05 ? xOffset : docWidth * 0.05;
  }
  function CalcYSpacing(num) {
    return docWidth > 600 ? num * 40 : num * 20;
  }

  return (
    <div>
       <Layout isFullWidth>
       <div className="App">
      <section className="hero">
        <img
          src="https://picsum.photos/id/1/800/600"
          alt="test"
          className="parallax"
          style={{
            filter: `blur(4px)`,
            transform: `translateY(${offset * 0.5}px)`
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">BlogSite</h1>
          <h2 className="sub-headline">A Gatsby Blog Site</h2>
        </div>
      </section>
      <div className="code-wrapper" style={{position: "relative"}}>
      <div
          className="parallax-code"
          style={{
            top: `${CalcYSpacing(0)}px`,
            transform: `translateX(${CalcXOffset(0.1)}px)`
          }}
        >using System;</div>
        <div
          className="parallax-code"
          style={{
            top: `${CalcYSpacing(1)}px`,
            transform: `translateX(${CalcXOffset(0.2)}px)`
          }}
        >using System.Linq;</div>
        <div
          className="parallax-code"
          style={{
            top: `${CalcYSpacing(2)}px`,
            transform: `translateX(${CalcXOffset(0.3)}px)`
          }}
        >using System.Collections.Generic;</div>
        <div
          className="parallax-code"
          style={{
            top: `${CalcYSpacing(3)}px`,
            transform: `translateX(${CalcXOffset(0.4)}px)`
          }}
        >using System.ComponentModel.DataAnnotations;</div>
        <div
          className="parallax-code"
          style={{
            top: `${CalcYSpacing(4)}px`,
            transform: `translateX(${CalcXOffset(0.5)}px)`
          }}
        >using Microsoft.EntityFrameworkCore;</div>
        <div
          className="parallax-code"
          style={{
            top: `${CalcYSpacing(5)}px`,
            transform: `translateX(${CalcXOffset(0.6)}px)`
          }}
        >using Microsoft.Extensions.DependencyInjection;</div>

      </div>
      <section className="overflow" />
    </div>
       </Layout>
     </div>
    
  );
}