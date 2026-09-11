import React from 'react';
import {
  Bookmark,
  BookmarkCheck,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { AcupunctureTopic } from '../types';
import { Disclaimer } from './Disclaimer';

interface ResultScreenProps {
  topic: AcupunctureTopic;
  isFavorite: boolean;
  onToggleFavorite: (topicId: string) => void;
  onBackToSelection: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  topic,
  isFavorite,
  onToggleFavorite,
  onBackToSelection,
}) => {
  return (
    <article id="pantalla-resultado" className="flex flex-col min-h-full pb-32 pt-2">
      {/* Top Header Card: Title and Short 2-3 line Summary */}
      <div className="rounded-3xl border border-emerald-950/10 bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/90 px-3 py-1 text-xs font-bold text-emerald-950 border border-emerald-200">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            Capítulo {topic.chapterNumber} del Ebook
          </span>

          <button
            id="btn-toggle-favorite-top"
            type="button"
            onClick={() => onToggleFavorite(topic.id)}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 ${
              isFavorite
                ? 'bg-emerald-900 text-white'
                : 'bg-emerald-50 text-emerald-900 border border-emerald-900/15 hover:bg-emerald-100'
            }`}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Guardar en mis favoritos'}
          >
            {isFavorite ? (
              <>
                <BookmarkCheck className="h-4 w-4 text-emerald-300" />
                <span>Guardado</span>
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4 text-emerald-700" />
                <span>Guardar</span>
              </>
            )}
          </button>
        </div>

        {/* Problem Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight leading-snug">
          {topic.title}
        </h2>

        {/* Short Summary (2-3 lines) */}
        <div className="mt-4 rounded-2xl bg-emerald-50/70 border border-emerald-900/10 p-4">
          <p className="text-base sm:text-lg text-emerald-950/90 font-medium leading-relaxed">
            {topic.summary}
          </p>
        </div>
      </div>

      {/* Recommended frequency banner */}
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-950/10 bg-white/90 p-4 shadow-xs">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
          <Calendar className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 block">
            Frecuencia orientativa en el libro
          </span>
          <span className="text-sm font-medium text-stone-800">
            {topic.recommendedSessions}
          </span>
        </div>
      </div>

      {/* Key Highlights Section */}
      {topic.keyHighlights && topic.keyHighlights.length > 0 && (
        <div className="mt-4 rounded-2xl border border-emerald-950/10 bg-white p-5 sm:p-6 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-3">
            Puntos anatómicos y enfoque clave
          </h3>
          <ul className="space-y-2.5">
            {topic.keyHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 mt-1 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Full Translated Chapter Content, divided into short and legible paragraphs */}
      <div className="mt-4 rounded-3xl border border-emerald-950/10 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-bold text-emerald-950 mb-4 pb-2 border-b border-emerald-950/10">
          Contenido completo del capítulo
        </h3>

        <div className="space-y-6">
          {topic.sections.map((section, sIndex) => (
            <section key={sIndex} className="space-y-3">
              {section.subtitle && (
                <h4 className="text-base sm:text-lg font-bold text-emerald-900">
                  {section.subtitle}
                </h4>
              )}
              {section.paragraphs.map((p, pIndex) => (
                <p
                  key={pIndex}
                  className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* Action Buttons in Lower Half: Thumb-friendly, large buttons */}
      <div className="mt-6 rounded-2xl border border-emerald-950/10 bg-white p-5 sm:p-6 shadow-xs space-y-3">
        {/* Toggle Favorite button */}
        <button
          id="btn-guardar-favorito-principal"
          type="button"
          onClick={() => onToggleFavorite(topic.id)}
          className={`flex w-full items-center justify-center gap-3 rounded-2xl py-4 px-6 text-base sm:text-lg font-bold transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-700/30 min-h-[56px] ${
            isFavorite
              ? 'bg-emerald-100 text-emerald-950 border border-emerald-300 hover:bg-emerald-200'
              : 'bg-emerald-900 text-white shadow-md hover:bg-emerald-950'
          }`}
          aria-pressed={isFavorite}
        >
          {isFavorite ? (
            <>
              <BookmarkCheck className="h-5 w-5 text-emerald-800" />
              <span>Guardado en mis favoritos (Toca para quitar)</span>
            </>
          ) : (
            <>
              <Bookmark className="h-5 w-5 text-emerald-300" />
              <span>Guardar en mis favoritos</span>
            </>
          )}
        </button>

        {/* Back to choose another topic button */}
        <button
          id="btn-volver-a-elegir-tema"
          type="button"
          onClick={onBackToSelection}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-900/20 bg-emerald-50/70 py-3.5 px-6 text-base font-bold text-emerald-900 transition-all hover:bg-emerald-100 hover:text-emerald-950 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-700/30 min-h-[52px]"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver y elegir otro tema</span>
        </button>
      </div>

      {/* Mandatory Medical Disclaimer at foot of each result screen */}
      <div className="mt-6">
        <Disclaimer id={`disclaimer-resultado-${topic.id}`} />
      </div>
    </article>
  );
};
