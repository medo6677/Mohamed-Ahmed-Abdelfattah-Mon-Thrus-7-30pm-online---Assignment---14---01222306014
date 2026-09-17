import React from "react";
import Hero from "../features/home/Hero";
import Articles from "../features/home/Articles";
import Explore from "../features/home/Explore";
import New from "../features/home/New";
import Subscibe from "../features/home/Subscibe";

export default function Home() {
  return (
    <>
      <Hero />
      <Articles />
      <Explore />
      <New />
      <Subscibe />
    </>
  );
}
