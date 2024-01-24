export const Navbar = () => {
  return (
    <nav className="bg-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="riot.svg" alt="Logo Riot Games" className="h-8 w-14" />
          <div className="h-6 bg-white w-0.5"></div>
          <img src="logo.svg" alt="Logo Valorant" className="h-8 w-12" />
        </div>

        <div className="flex space-x-8 text-tra">
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Game
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Champions
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              News
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Patch Notes
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Discover
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Esports
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Universe
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Shop
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="#"
              className="text-white text-xs font-bold hover:text-gray-500 uppercase"
            >
              Support
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <img
            src="logo.svg"
            alt="Avatar do Usuário"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-white text-xs font-bold ml-2">
            Nome do Usuário
          </span>
        </div>
      </div>
    </nav>
  );
};
