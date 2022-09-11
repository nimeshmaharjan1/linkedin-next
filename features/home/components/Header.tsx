import Image from "next/image";
import React from "react";
import HeaderLink from "@components/ui/HeaderLink";

import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { signIn } from "next-auth/react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="flex justify-between md:justify-around items-center py-4 container mx-auto px-4">
          <div className="left | relative w-36 h-10">
            <Image
              src="/logo/linkedin.svg"
              layout="fill"
              objectFit="contain"
              priority
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
              <button
                className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
