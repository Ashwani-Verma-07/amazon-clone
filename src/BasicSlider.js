import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import "./BasicSlider.css";
//Images
///https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg
const a =
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";
const w = "https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg";
const b = "https://m.media-amazon.com/images/I/610NTFOyhAL._SX3000_.jpg";
const c = "https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg";
const d = "https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg";
const e = "https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg";
const f = "https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg";
const g = "https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg";
function BasicSlider() {
  return (
    <div>
      {" "}
      <div className="b__slider">
        <HeroSlider
          height={"100vh"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 10,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          <Slide
            background={{
              backgroundImageSrc: a,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: w,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: b,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: c,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: d,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: e,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: f,
            }}
          />
          <Slide
            background={{
              backgroundImageSrc: g,
            }}
          />
        </HeroSlider>
      </div>
    </div>
  );
}

export default BasicSlider;
