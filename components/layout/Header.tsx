import { getProviders, signIn } from "next-auth/react";
import { Provider } from "next-auth/providers";

import FeedHeader from "@features/feed/components/Header";
import HomeHeader from "@features/home/Header";
interface Props {
  isHome: boolean;
  providers?: Provider;
}

const Header: React.FC<Props> = ({ isHome, providers }) => {
  return <>{isHome ? <HomeHeader /> : <FeedHeader />}</>;
};

export default Header;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
