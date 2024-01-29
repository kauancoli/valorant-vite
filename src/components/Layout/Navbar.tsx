import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type NavbarItemProps = {
  text: string;
  href: string;
};

const NavbarItem: React.FC<NavbarItemProps> = ({ text, href }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div
      className="cursor-pointer p-2 transition duration-300 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <a
        href={href}
        className="text-white 2xl:text-sm xl:text-xs lg:text-[0.65rem] font-bold hover:text-gray-500 uppercase p-2"
      >
        {text}
      </a>
    </motion.div>
  );
};

export const Navbar = () => {
  return (
    <nav className="bg-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="flex items-center space-x-4 cursor-pointer" href="/">
          <motion.img
            src="riot.svg"
            alt="Logo Riot Games"
            className="2xl:h-8 2xl:w-14 xl:h-7 xl:w-12 lg:h-6 lg:w-10 h-5 w-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            className="h-6 bg-white w-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
          <motion.img
            src="logo.svg"
            alt="Logo Valorant"
            className="h-8 w-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </a>

        <div className="flex 2xl:space-x-8 xl:space-x-2lg:space-x-0">
          <NavbarItem text="Game" href="#" />
          <NavbarItem text="Champions" href="#" />
          <NavbarItem text="News" href="#" />
          <NavbarItem text="Patch Notes" href="#" />
          <NavbarItem text="Discover" href="#" />
          <NavbarItem text="Esports" href="#" />
          <NavbarItem text="Universe" href="#" />
          <NavbarItem text="Shop" href="#" />
          <NavbarItem text="Support" href="#" />
        </div>

        <div className="flex items-center">
          <motion.img
            src="logo.svg"
            alt="Avatar do Usuário"
            className="2xl:h-8 2xl:w-8 xl:h-6 xl:w-6 lg:h-4 lg:w-4 rounded-full transition duration-300 ease-in-out "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.span
            className="text-white text-sm font-bold ml-2 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Kay
          </motion.span>
        </div>
      </div>
    </nav>
  );
};
