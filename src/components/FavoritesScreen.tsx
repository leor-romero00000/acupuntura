import React from 'react';
import { Bookmark, BookmarkX, ArrowRight, Sparkles, PlusCircle } from 'lucide-react';
import { AcupunctureTopic } from '../types';

interface FavoritesScreenProps {
  favoriteTopics: AcupunctureTopic[];
  onSelectTopic: (topic: AcupunctureTopic) => void;
  onRemoveFavorite: (topicId: string) => void;
  onExploreTopics: () => void;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  favoriteTopics,
  onSelectTopic,
  onRemoveFavorite,
  onExploreTopics,
}) => {
  return (
    <div id="pantalla-mis-favoritos" className="flex flex-col min-h-full pb-28 pt-2">
      {/* Header */}
      <div className="mb-6 rounded-2xl border border-emerald-950/10 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-1">
          <Bookmark className="h-4 w-4 text-emerald-700" />
          <span>Acceso rápido</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-emerald-950 tracking-tight">
          Mis favoritos
        </h2>
        <p className="mt-1.5 text-sm sm:text-base text-stone-700">
          Los capítulos y temas que guardaste para consultarlos de forma inmediata sin tener que buscar otra vez.
        </p>
      </div>

      {/* Empty State */}
      {favoriteTopics.length === 0 ? (
        <div
          id="favoritos-estado-vacio"
          className="rounded-3xl border border-emerald-950/10 bg-white p-8 text-center shadow-xs"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 mb-4 border border-emerald-100">
            <Bookmark className="h-8 w-8 stroke-[1.5]" />
          </div>

          <h3 className="text-lg font-bold text-emerald-950">
            Aún no has guardado ningún tema
          </h3>

          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-sm mx-auto leading-relaxed">
            Aquí aparecerán los temas que guardes. Cuando estés leyendo sobre alguna molestia o dolor que te interese, pulsa el botón{' '}
            <strong className="text-emerald-900 font-semibold">"Guardar en mis favoritos"</strong> para tenerla siempre a mano.
          </p>

          <div className="mt-6 pt-4 border-t border-emerald-900/10 max-w-xs mx-auto">
            <button
              id="btn-explorar-desde-favoritos"
              type="button"
              onClick={onExploreTopics}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-900 py-3.5 px-5 text-sm sm:text-base font-bold text-white shadow-xs transition-all hover:bg-emerald-950 active:scale-[0.98] min-h-[48px]"
            >
              <PlusCircle className="h-4 w-4 text-emerald-300" />
              <span>Ver temas disponibles</span>
            </button>
          </div>
        </div>
      ) : (
        /* Populated Favorites List */
        <div className="space-y-3.5">
          {favoriteTopics.map((topic) => (
            <div
              key={topic.id}
              id={`item-favorito-${topic.id}`}
              className="group rounded-2xl border border-emerald-950/10 bg-white p-4 sm:p-5 shadow-xs transition-all hover:border-emerald-700/40 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100/90 px-2 py-0.5 text-[11px] font-semibold text-emerald-900">
                      <Sparkles className="h-3 w-3 text-emerald-700" />
                      Capítulo {topic.chapterNumber}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-emerald-950 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {topic.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveFavorite(topic.id)}
                  title="Quitar de favoritos"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-stone-400 hover:text-red-700 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20 flex-shrink-0"
                  aria-label={`Quitar ${topic.title} de favoritos`}
                >
                  <BookmarkX className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-emerald-950/5 flex items-center justify-between">
                <span className="text-xs text-stone-600">
                  {topic.recommendedSessions}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectTopic(topic)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3.5 py-2 text-xs sm:text-sm font-bold text-emerald-900 hover:bg-emerald-100 hover:text-emerald-950 transition-colors focus:outline-none"
                >
                  <span>Abrir capítulo</span>
                  <ArrowRight className="h-4 w-4 text-emerald-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
