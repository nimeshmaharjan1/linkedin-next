import Image from "next/image";
import React, { useEffect, useState } from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import HeaderLink from "@components/ui/HeaderLink";
import { useTheme } from "next-themes";
import ThemeToggler from "@components/ui/ThemeToggler";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
      <section className="left | flex items-center space-x-2 w-full max-w-xs">
        {isMounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image src="/logo/dark-feed.png" width={45} height={45}></Image>
            ) : (
              <Image src="/logo/light-feed.svg" width={45} height={45}></Image>
            )}
          </>
        )}
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded-w-full">
          <SearchRoundedIcon />
          <input
            placeholder="Search"
            type="text"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </section>
      <section className="right | flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} label="Home" isFeed isActive />
        <HeaderLink Icon={GroupIcon} label="My Network" isFeed />
        <HeaderLink Icon={BusinessCenterIcon} label="Jobs" isFeed isHidden />
        <HeaderLink Icon={ChatIcon} label="Messaging" isFeed />
        <HeaderLink Icon={NotificationsIcon} label="Notifications" isFeed />
        <HeaderLink Icon={Avatar} label="Me" isFeed avatar isHidden />
        <HeaderLink Icon={AppsOutlinedIcon} label="Work" isFeed isHidden />
        <ThemeToggler></ThemeToggler>
      </section>
    </header>
  );
};

export default Header;
