import { useState } from "react";
import Icon from "@/components/ui/icon";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const [settings, setSettings] = useState({
    language: "auto",
    safeSearch: false,
    region: "global",
    resultsPerPage: 10,
    darkMode: true,
  });

  if (!isOpen) return null;

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-search-dark border border-search-gray/30 rounded-lg p-6 w-full max-w-md mx-4 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Настройки поиска</h2>
          <button
            onClick={onClose}
            className="p-2 text-search-gray hover:text-white transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-search-gray mb-2">
              Язык поиска
            </label>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange("language", e.target.value)}
              className="w-full p-2 bg-search-black border border-search-gray/30 rounded text-white focus:border-search-red focus:outline-none"
            >
              <option value="auto">Автоопределение</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-search-gray mb-2">
              Регион
            </label>
            <select
              value={settings.region}
              onChange={(e) => handleSettingChange("region", e.target.value)}
              className="w-full p-2 bg-search-black border border-search-gray/30 rounded text-white focus:border-search-red focus:outline-none"
            >
              <option value="global">Весь мир</option>
              <option value="ru">Россия</option>
              <option value="us">США</option>
              <option value="eu">Европа</option>
              <option value="asia">Азия</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-search-gray mb-2">
              Результатов на странице
            </label>
            <select
              value={settings.resultsPerPage}
              onChange={(e) =>
                handleSettingChange("resultsPerPage", parseInt(e.target.value))
              }
              className="w-full p-2 bg-search-black border border-search-gray/30 rounded text-white focus:border-search-red focus:outline-none"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-search-gray">
              Безопасный поиск
            </span>
            <button
              onClick={() =>
                handleSettingChange("safeSearch", !settings.safeSearch)
              }
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.safeSearch ? "bg-search-red" : "bg-search-gray"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.safeSearch ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-search-gray hover:text-white transition-colors"
          >
            Отмена
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-search-red hover:bg-search-red-light text-white rounded transition-colors"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
