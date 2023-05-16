import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="h-[100vh] sm:h-[86vh] bg-gradient-to-r from-slate-300 to-white bg-cover bg-center flex flex-col items-center gap-14">
      <p className="text-5xl sm:text-6xl pt-16 px-3 text-center italic font-serif">Weather forecast in real time!</p>
      <div className="flex flex-col items-center gap-5">
        <p className="text-xl">Enter the location bellow:</p>
       <SearchBar/>
      </div>
    </div>
  );
};

export default Home;
