import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSettingsToggle: () => void;
}

const SearchBar = ({ onSearch, onSettingsToggle }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (query === "/settings") {
      onSettingsToggle();
      setQuery("");
    }
  }, [query, onSettingsToggle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 300);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`search-glow bg-search-dark border border-search-gray/30 rounded-lg overflow-hidden transition-all duration-300 ${isTyping ? "scale-105" : ""}`}
        >
          <div className="flex items-center">
            <Icon name="Search" className="ml-4 text-search-gray" size={20} />
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Найти всё, везде, на любом языке..."
              className="w-full px-4 py-4 bg-transparent text-white placeholder-search-gray focus:outline-none text-lg"
              autoComplete="off"
              spellCheck="false"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mr-2 p-2 text-search-gray hover:text-white transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            )}
            <button
              type="submit"
              className="mr-4 p-2 bg-search-red hover:bg-search-red-light rounded-md transition-colors"
              disabled={!query.trim()}
            >
              <Icon name="ArrowRight" className="text-white" size={16} />
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4 text-center text-sm text-search-gray">
        <span>Поиск без границ и цензуры • </span>
        <span className="text-search-red">
          Введите "/settings" для настроек
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
