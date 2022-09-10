import Page from "@components/layout/Page";
import Hero from "@features/home/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page title="Home" description="Home page for linkedin clone" isHome>
      <Hero></Hero>
    </Page>
  );
};

export default Home;
