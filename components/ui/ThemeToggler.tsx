// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggler: React.FC = () => {
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const spring = {
    type: "string",
    stiffness: 700,
    damping: 30,
  };

  useEffect(() => {
    setIsMounted(true);
    setTheme(theme === "system" ? (systemTheme as string) : (theme as string));
  }, [theme]);

  const changeTheme = () => {
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  if (!isMounted) return null;

  return (
    <div
      className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
        resolvedTheme === "dark" ? "justify-end" : "justify-start"
      }`}
      onClick={() => changeTheme()}
    >
      <span className="absolute left-0">🌜</span>
      <motion.div
        className="w-5 h-5 bg-white rounded-full z-40"
        layout
        transition={spring}
      />

      <span className="absolute right-0.5">🌞</span>
    </div>
  );

  // if (currentTheme === "dark") {
  //   return (
  //     <LightModeIcon
  //       className="w-8 h-8 text-yellow-500 "
  //       role="button"
  //       onClick={() => changeTheme("light")}
  //     />
  //   );
  // } else {
  //   return (
  //     <DarkModeIcon
  //       className="w-8 h-8 text-gray-900 "
  //       role="button"
  //       onClick={() => changeTheme("dark")}
  //     />
  //   );
  // }
};

export default ThemeToggler;
