import Page from "@components/layout/Page";
import Hero from "@features/home/components/Hero";
import type { NextPage } from "next";
import { Provider } from "next-auth/providers";
import { getProviders } from "next-auth/react";
import { useEffect } from "react";

interface Props {
  providers: Provider;
}

const Login: NextPage<Props> = ({ providers }) => {
  useEffect(() => {
    console.log({ providers });
  }, []);
  return (
    <Page title="Login" description="Login page for linkedin clone" isHome>
      <Hero></Hero>
    </Page>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
