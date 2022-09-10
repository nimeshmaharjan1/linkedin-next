import HeaderLink from "@components/ui/HeaderLink";
import Image from "next/image";
import Logo from "../ui/Logo";
import ThemeToggler from "../ui/ThemeToggler";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

interface Props {
  isHome: boolean;
}

const Header: React.FC<Props> = ({ isHome }) => {
  return (
    <>
      {isHome ? (
        <header>
          <div className="flex justify-between md:justify-around items-center py-4 container mx-auto px-4">
            <div className="left | relative w-36 h-10">
              <Image
                src="/logo/linkedin.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="right | flex items-center sm:divide-x divide-gray-300">
              <div className="nav-links | hidden sm:flex space-x-8 pr-4">
                {/* <HeaderLink Icon={HomeRoundedIcon} label="Home" /> */}
                <HeaderLink Icon={ExploreIcon} label="Explore" />
                <HeaderLink Icon={GroupIcon} label="People" />
                <HeaderLink Icon={BusinessCenterIcon} label="Jobs" />
                <HeaderLink Icon={ChatIcon} label="Messaging" />
                {/* <HeaderLink Icon={NotificationsIcon} label="Notifications" />
              <HeaderLink Icon={AppsOutlinedIcon} label="Work" /> */}
              </div>
              <div className="pl-4">
                <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1 5 transition-all hover:border-2">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="wrapper | sticky top-0 left-0 right-0 h-15 shadow-md dark:border-gray-700 dark:shadow-gray-900 dark:bg-black">
          <div className="px-4 container mx-auto sm:px-6 py-4 flex justify-between items-center">
            <Logo />
            <ThemeToggler></ThemeToggler>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
