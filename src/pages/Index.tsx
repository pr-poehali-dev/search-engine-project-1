import { useState } from "react";
import SearchLogo from "@/components/SearchLogo";
import SearchBar from "@/components/SearchBar";
import SettingsModal from "@/components/SettingsModal";

const Index = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSearch = (query: string) => {
    // В реальном приложении здесь был бы API вызов
    console.log("Поиск:", query);
    // Показать результаты поиска
  };

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="min-h-screen bg-search-black flex flex-col">
      {/* Основной контент */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto w-full">
          <SearchLogo />
          <SearchBar
            onSearch={handleSearch}
            onSettingsToggle={handleSettingsToggle}
          />
        </div>
      </div>

      {/* Футер */}
      <footer className="p-4 text-center text-search-gray text-sm border-t border-search-gray/10">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-search-red transition-colors">
            О проекте
          </a>
          <a href="#" className="hover:text-search-red transition-colors">
            Конфиденциальность
          </a>
          <a href="#" className="hover:text-search-red transition-colors">
            API
          </a>
          <a href="#" className="hover:text-search-red transition-colors">
            Обратная связь
          </a>
        </div>
        <div className="mt-2 text-xs">
          Поиск без границ • Создано для свободного доступа к информации
        </div>
      </footer>

      {/* Модальное окно настроек */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export default Index;
