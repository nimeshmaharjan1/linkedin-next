const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6">
      <div className="container mx-auto text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          Base Code
        </span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
