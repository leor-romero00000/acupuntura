import React from 'react';
import {
  Activity,
  Brain,
  Moon,
  ShieldAlert,
  Flame,
  Zap,
  Scale,
  Sparkles,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { AcupunctureTopic } from '../types';
import { TOPICS_DATA } from '../data/acupunctureData';

interface CategoryScreenProps {
  onSelectTopic: (topic: AcupunctureTopic) => void;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = ({
  onSelectTopic,
}) => {
  const getIcon = (name: AcupunctureTopic['iconName']) => {
    const iconClass = 'h-6 w-6 text-orange-800 flex-shrink-0';
    switch (name) {
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'Brain':
        return <Brain className={iconClass} />;
      case 'Moon':
        return <Moon className={iconClass} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'Flame':
        return <Flame className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'Scale':
        return <Scale className={iconClass} />;
      case 'Sparkles':
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div id="pantalla-que-te-molesta" className="flex flex-col min-h-full pb-28 pt-2">
      {/* Section Header */}
      <div className="mb-6 rounded-2xl border border-orange-950/10 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2.5 text-orange-900 font-bold text-xs uppercase tracking-wider mb-1">
          <HelpCircle className="h-4 w-4 text-orange-700" />
          <span>Selección guiada</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-orange-950 tracking-tight">
          ¿Qué te está molestando?
        </h2>
        <p className="mt-1.5 text-sm sm:text-base text-stone-700">
          Elige la molestia que deseas tratar para acceder de inmediato al capítulo traducido del ebook.
        </p>
      </div>

      {/* Grid of 8 Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {TOPICS_DATA.map((topic) => (
          <button
            key={topic.id}
            id={`card-tema-${topic.id}`}
            type="button"
            onClick={() => onSelectTopic(topic)}
            className="group flex items-start justify-between rounded-2xl border border-orange-950/10 bg-white p-4 sm:p-5 text-left shadow-xs transition-all duration-150 hover:border-orange-700/40 hover:bg-orange-50/40 hover:shadow-sm active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-700/30 min-h-[96px]"
            aria-label={`Ver información sobre ${topic.title}`}
          >
            <div className="flex items-start gap-3.5 pr-2">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100/70 group-hover:bg-orange-200/80 transition-colors">
                {getIcon(topic.iconName)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-orange-950 leading-snug group-hover:text-orange-900">
                  {topic.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                  {topic.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-stone-400 group-hover:text-orange-800 transition-colors mt-1">
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
