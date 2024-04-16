import MenuComponent from "../menuComponent/menuComponent";

const NavBar: React.FC = () => {
  return (
    <nav className="h-10">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MenuComponent />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
