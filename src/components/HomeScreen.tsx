import React from 'react';
import { ArrowRight, UserCheck, Sparkles, BookOpen, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Disclaimer } from './Disclaimer';
import { ABOUT_ACUPUNCTURE_INTRO } from '../data/acupunctureData';

interface HomeScreenProps {
  onStart: () => void;
  onGoToSpecialist: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStart,
  onGoToSpecialist,
}) => {
  return (
    <div id="pantalla-inicio" className="flex flex-col min-h-full pb-28 pt-2">
      {/* Top Welcome Card */}
      <div className="rounded-3xl border border-emerald-950/10 bg-white p-6 sm:p-8 shadow-xs text-center relative overflow-hidden">
        {/* Soft decorative background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-100/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-50/60 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-lg">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-white shadow-md">
            <HeartPulse className="h-7 w-7 text-emerald-300" />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-semibold text-emerald-900 border border-emerald-200/80 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            Guía Práctica del Ebook
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight leading-snug">
            Guía Interactiva de Acupuntura
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-700 font-normal leading-relaxed">
            En vez de leer un documento extenso buscando qué te puede servir, dime qué molestia tienes y te mostraré de inmediato la sección que necesitas.
          </p>
        </div>
      </div>

      {/* Brief educational snippet from the Ebook introduction */}
      <div className="mt-6 rounded-2xl border border-emerald-950/10 bg-white/80 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-base mb-2">
          <BookOpen className="h-5 w-5 text-emerald-700" />
          <h3>{ABOUT_ACUPUNCTURE_INTRO.title}</h3>
        </div>
        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          {ABOUT_ACUPUNCTURE_INTRO.intro}
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-emerald-900/10">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-700 mt-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-stone-700">
              8 capítulos organizados por dolencia
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-700 mt-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-stone-700">
              Criterios de higiene y seguridad clínica
            </span>
          </div>
        </div>
      </div>

      {/* Main Action Block - Positioned in the lower half for comfortable thumb reach */}
      <div className="mt-8 rounded-2xl border border-emerald-950/10 bg-white p-6 sm:p-7 shadow-xs text-center">
        <div className="max-w-md mx-auto space-y-4">
          <button
            id="btn-empezar-consulta"
            type="button"
            onClick={onStart}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-900 py-4 px-6 text-lg font-bold text-white shadow-md transition-all hover:bg-emerald-950 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-700/30 min-h-[58px]"
          >
            <span>Empezar</span>
            <ArrowRight className="h-5 w-5 text-emerald-300 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Small link directly below the Empezar button */}
          <button
            id="link-como-elegir-especialista"
            type="button"
            onClick={onGoToSpecialist}
            className="group inline-flex items-center gap-2 rounded-xl py-2 px-3 text-sm font-semibold text-emerald-800 hover:text-emerald-950 hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          >
            <UserCheck className="h-4 w-4 text-emerald-700" />
            <span className="underline decoration-emerald-700/40 underline-offset-4 group-hover:decoration-emerald-900">
              Cómo elegir un buen especialista
            </span>
          </button>
        </div>
      </div>

      {/* Mandatory Medical Disclaimer at foot */}
      <div className="mt-6">
        <Disclaimer id="disclaimer-inicio" />
      </div>
    </div>
  );
};
