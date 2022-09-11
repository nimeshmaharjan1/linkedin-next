interface Props {
  Icon: any;
  label: string;
  avatar?: boolean;
  isFeed?: boolean;
  isActive?: boolean;
  isHidden?: boolean;
}

const HeaderLink: React.FC<Props> = ({
  Icon,
  label,
  avatar,
  isFeed,
  isActive,
  isHidden,
}) => {
  return (
    <div
      className={`${
        isHidden && "hidden md:inline-flex"
      } cursor-pointer flex flex-col justify-center items-center ${
        isFeed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1"
          : "text-gray-500 hover:text-gray-700"
      } ${isActive && "!text-black dark:!text-white"}`}
    >
      {avatar ? <Icon className="!h-7 !w-7 lg:!-mb-1" /> : <Icon />}
      <h4
        className={`text-sm ${
          isFeed && "hidden lg:flex justify-center w-full mx-auto"
        }`}
      >
        {label}
      </h4>
      {isActive && (
        <span className="hidden md:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full"></span>
      )}
    </div>
  );
};

export default HeaderLink;
