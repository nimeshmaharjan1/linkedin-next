import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="my-2 flex items-center space-x-1 text-indigo-500">
        <ViewInArIcon className="h-8 w-8 flex-shrink-0 mr-1" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
          Tuza
        </span>
      </a>
    </Link>
  );
};

export default Logo;
