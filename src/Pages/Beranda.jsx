import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";
import TopRatingFilm from "../Components/TopRatingFilm";
import FilmTrending from "../Components/FilmTrending";
import RilisBaru from "../Components/RilisBaru";
import Footer from "../Components/Footer";


import "./cssPages/styleBeranda.css"

function Beranda ({onLogout}) {
const user = JSON.parse(localStorage.getItem("user"));
useEffect(() => {
        document.body.classList.add("berandapage");
    
        return () => {
          document.body.classList.remove("berandapage");
        };
      }, []);

return (
    <>
    <div className="beranda">
      <div className="navbar">
          <Navbar user={user} onLogout={onLogout}/>
      </div>
      <div className="hero">
          <Hero />
      </div>
      <div className="kotakfilm">
        <div className="melanjutkantontonfilm">
            <p>Melanjutkan Tonton Film</p>
            <MelanjutkanTontonFilm />
        </div>
        <div className="tempatfilm1">
            <p>Top Rating Film Dan Series Hari Ini</p>
            <TopRatingFilm />
        </div>
        <div className="tempatfilm2">
            <p>Film Trending</p>
            <FilmTrending />
        </div>
        <div className="tempatfilm3">
            <p>Rilis Baru</p>
            <RilisBaru />
        </div>
      </div>
      <div className="footer">
            <Footer />
        </div>
    </div>
    </>
    )
};

export default Beranda;