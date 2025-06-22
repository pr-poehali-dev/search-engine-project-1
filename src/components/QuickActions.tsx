import Icon from "@/components/ui/icon";

const QuickActions = () => {
  const actions = [
    { icon: "Image", label: "Изображения", filter: "images" },
    { icon: "Video", label: "Видео", filter: "videos" },
    { icon: "FileText", label: "Новости", filter: "news" },
    { icon: "Book", label: "Книги", filter: "books" },
    { icon: "Map", label: "Карты", filter: "maps" },
    { icon: "ShoppingCart", label: "Покупки", filter: "shopping" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in">
      {actions.map((action, index) => (
        <button
          key={action.filter}
          className="flex items-center space-x-2 px-4 py-2 bg-search-dark hover:bg-search-gray/20 border border-search-gray/30 rounded-lg transition-all duration-200 hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Icon
            name={action.icon as any}
            size={16}
            className="text-search-red"
          />
          <span className="text-sm text-search-gray hover:text-white transition-colors">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
