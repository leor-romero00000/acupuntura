import React from 'react';
import { Home, Bookmark, UserCheck } from 'lucide-react';
import { ScreenId } from '../types';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  favoritesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  favoritesCount,
}) => {
  const navItems = [
    {
      id: 'inicio' as ScreenId,
      label: 'Inicio',
      icon: Home,
      screenTarget: 'inicio' as ScreenId,
      isActive: currentScreen === 'inicio' || currentScreen === 'seleccion' || currentScreen === 'resultado',
    },
    {
      id: 'favoritos' as ScreenId,
      label: 'Favoritos',
      icon: Bookmark,
      screenTarget: 'favoritos' as ScreenId,
      isActive: currentScreen === 'favoritos',
      badge: favoritesCount > 0 ? favoritesCount : null,
    },
    {
      id: 'especialista' as ScreenId,
      label: 'Especialista',
      icon: UserCheck,
      screenTarget: 'especialista' as ScreenId,
      isActive: currentScreen === 'especialista',
    },
  ];

  return (
    <nav
      id="bottom-navigation-bar"
      aria-label="Navegación principal de la aplicación"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-orange-950/10 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto flex h-20 max-w-md items-center justify-around px-3 sm:px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;

          return (
            <button
              key={item.id}
              id={`nav-button-${item.id}`}
              type="button"
              onClick={() => onNavigate(item.screenTarget)}
              className={`relative flex flex-1 flex-col items-center justify-center py-2 min-h-[52px] rounded-xl transition-all duration-200 active:scale-95 focus:outline-none ${
                active
                  ? 'text-orange-950 font-bold'
                  : 'text-stone-500 hover:text-orange-900 font-medium'
              }`}
              aria-current={active ? 'page' : undefined}
              aria-label={`Ir a ${item.label}`}
            >
              <div
                className={`relative flex items-center justify-center rounded-xl p-1.5 transition-colors ${
                  active ? 'bg-orange-100/90 text-orange-950' : 'bg-transparent'
                }`}
              >
                <Icon className={`h-6 w-6 ${active ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {item.badge !== null && item.badge !== undefined && (
                  <span
                    id="favorites-count-badge"
                    className="absolute -top-1.5 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-700 px-1.5 text-[11px] font-bold text-white shadow-xs"
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="mt-1 text-xs tracking-tight">{item.label}</span>
              {active && (
                <span className="absolute bottom-1 h-1 w-8 rounded-full bg-orange-800" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
