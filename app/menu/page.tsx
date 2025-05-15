import React from 'react';
import { menuData, MenuItem } from '../data/menu';

const PRIMARY_SECTIONS = [
  'breakfast',
  'lunch',
  'all_timers',
  'evening_specials',
];

const formatSectionTitle = (title: string) => {
  return title
    .replace(/_/g, ' ')
    .replace(/\b(\w)/g, (c) => c.toUpperCase());
};

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  if (item.items) {
    return (
      <div className="mb-2">
        <h3 className="text-base font-semibold mb-1 text-primary-purple">
          {item.name}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
          {item.items.map((subItem: MenuItem, index: number) => (
            <MenuItemComponent key={index} item={subItem} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center px-3 py-1.5 rounded-lg hover:bg-purple-light/10 text-sm transition-colors duration-200">
      <div className="flex-1">
        <span className="font-medium text-foreground">
          {item.name}
        </span>
        {(item.weight || item.quantity) && (
          <span className="ml-2 text-xs text-foreground/60">
            {item.weight && <span>{item.weight}</span>}
            {item.weight && item.quantity && <span> • </span>}
            {item.quantity && <span>{item.quantity}</span>}
          </span>
        )}
      </div>
      <span className="ml-2 text-sm font-semibold text-primary-coral whitespace-nowrap">
        {item.price !== undefined ? `₹${item.price.toFixed(2)}` : 'TBD'}
      </span>
    </div>
  );
};

const SubsectionComponent = ({ item }: { item: MenuItem }) => (
  <div className="mb-3 bg-gradient-to-br from-purple-light/40 to-pink-light/30 border border-primary-purple/20 rounded-lg p-3 shadow-md">
    <MenuItemComponent item={item} />
  </div>
);

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background py-6 px-2 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-1 text-gradient">
          Sri Venkatesa Vidash Virundhu
        </h1>
        <p className="text-center text-base mb-6 text-foreground/80">
          Food for Soul's Delight
        </p>
        {/* Main Menu Sections */}
        {Object.entries(menuData).map(([section, data]) => {
          if ('timing' in data && data.items.length > 0) {
            const isPrimary = PRIMARY_SECTIONS.includes(section);
            return (
              <div key={section} className="mb-8">
                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 ${
                  isPrimary 
                    ? 'border-l-8 border-primary-purple bg-gradient-to-r from-purple-light/20 to-transparent px-4 py-3 rounded-r-lg shadow-sm' 
                    : ''
                }`}>
                  <h2 className={`font-bold ${
                    isPrimary 
                      ? 'text-2xl text-primary-purple' 
                      : 'text-lg text-primary-purple'
                  }`}>
                    {formatSectionTitle(section)}
                  </h2>
                  {data.timing && (
                    <span className="text-xs text-foreground/60 mt-1 sm:mt-0 bg-purple-light/10 px-2 py-1 rounded">
                      {data.timing}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                  {data.items.map((item: MenuItem, index: number) => (
                    item.items ? (
                      <SubsectionComponent key={index} item={item} />
                    ) : (
                      <MenuItemComponent key={index} item={item} />
                    )
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
        {/* Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {['fitness_foods', 'hot_drinks', 'cold_drinks', 'milkshakes', 'desserts'].map((section) => {
            const items = menuData[section as keyof typeof menuData] as MenuItem[];
            if (items.length > 0) {
              return (
                <div key={section} className="mb-2 bg-gradient-to-br from-purple-light/5 to-pink-light/5 rounded-lg p-4 shadow-sm">
                  <h2 className="text-base font-semibold mb-2 text-primary-purple">
                    {formatSectionTitle(section)}
                  </h2>
                  <div className="grid grid-cols-1 gap-y-1">
                    {items.map((item: MenuItem, index: number) => (
                      <MenuItemComponent key={index} item={item} />
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
} 