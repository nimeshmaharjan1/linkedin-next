import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    setCurrentTheme(
      theme === "system" ? (systemTheme as string) : (theme as string)
    );
  }, [theme]);

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  if (!isMounted) return null;

  if (currentTheme === "dark") {
    return (
      <LightModeIcon
        className="w-8 h-8 text-yellow-500 "
        role="button"
        onClick={() => changeTheme("light")}
      />
    );
  } else {
    return (
      <DarkModeIcon
        className="w-8 h-8 text-gray-900 "
        role="button"
        onClick={() => changeTheme("dark")}
      />
    );
  }
};

export default ThemeToggler;
