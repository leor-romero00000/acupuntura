import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onBack: () => void;
  titleOverride?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onBack,
  titleOverride,
}) => {
  const showBackButton = currentScreen !== 'inicio';

  return (
    <header
      id="app-header"
      className="sticky top-0 z-30 w-full border-b border-emerald-950/10 bg-white/95 backdrop-blur-md transition-shadow"
    >
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          {showBackButton ? (
            <button
              id="header-back-button"
              onClick={onBack}
              type="button"
              className="group flex h-11 items-center gap-1.5 rounded-lg border border-emerald-900/15 bg-emerald-50/70 px-3.5 text-sm font-semibold text-emerald-900 shadow-xs transition-all hover:bg-emerald-100 hover:text-emerald-950 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              aria-label="Volver a la pantalla anterior"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Atrás</span>
            </button>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900 text-white shadow-xs">
              <Sparkles className="h-5 w-5 text-emerald-300" />
            </div>
          )}

          <div>
            <h1 className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight leading-tight">
              {titleOverride || 'Guía de Acupuntura'}
            </h1>
            <p className="text-xs text-emerald-800/80 font-medium">
              {currentScreen === 'inicio' && 'Manual práctico e interactivo'}
              {currentScreen === 'seleccion' && '¿Qué te está molestando?'}
              {currentScreen === 'resultado' && 'Tratamiento y recomendaciones'}
              {currentScreen === 'favoritos' && 'Tus temas guardados'}
              {currentScreen === 'especialista' && 'Guía de seguridad y criterio'}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100/90 px-3 py-1 text-xs font-semibold text-emerald-900 border border-emerald-200">
            Contenido 100% traducido
          </span>
        </div>
      </div>
    </header>
  );
};
