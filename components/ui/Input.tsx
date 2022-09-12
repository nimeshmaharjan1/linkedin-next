import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const Input = () => {
  const { data: session } = useSession();
  const userImage = session?.user?.image as string;
  return (
    <div className="bg-white dark:bg-[#1D2226] rounded-lg p-3 space-y-3 border border-gray-300 dark:border-none">
      <div className="flex items-center space-x-2">
        <Avatar src={userImage} className="!h-10 !w-10 cursor-pointer"></Avatar>
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-full border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left"
        >
          Start a post
        </motion.div>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-center md:gap-x-10"></div>
    </div>
  );
};
export default Input;
