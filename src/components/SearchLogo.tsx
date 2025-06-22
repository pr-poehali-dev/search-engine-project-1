const SearchLogo = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-search-red to-search-red-light rounded-full flex items-center justify-center mr-4">
          <div className="w-6 h-6 bg-search-black rounded-full border-2 border-search-red"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-200">
          Doc<span className="text-search-red">tus</span>
        </h1>
      </div>
      <p className="text-search-gray text-lg">
        Глобальный поиск без ограничений
      </p>
    </div>
  );
};

export default SearchLogo;
