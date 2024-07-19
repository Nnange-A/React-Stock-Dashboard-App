import Search from "./Search";

const Header = ({ name }) => {
  return (
    <>
      <div className="xl:px-32 flex flex-col items-center">
        <Search />
        <h1 className="text-5xl text-center">{name}</h1>
      </div>
    </>
  );
};

export default Header;