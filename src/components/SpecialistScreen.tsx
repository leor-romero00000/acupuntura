import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  GraduationCap,
  Sparkles,
  Building2,
  Syringe,
} from 'lucide-react';
import { SPECIALIST_GUIDE } from '../data/acupunctureData';
import { Disclaimer } from './Disclaimer';

export const SpecialistScreen: React.FC = () => {
  const getSafetyIcon = (iconName: string) => {
    const iconClass = 'h-5 w-5 text-orange-800 flex-shrink-0';
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />;
      case 'Building2':
      default:
        return <Building2 className={iconClass} />;
    }
  };

  return (
    <article id="pantalla-especialista" className="flex flex-col min-h-full pb-32 pt-2">
      {/* Header Card */}
      <div className="rounded-3xl border border-orange-950/10 bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 text-orange-900 font-bold text-xs uppercase tracking-wider mb-2">
          <ShieldCheck className="h-4 w-4 text-orange-700" />
          <span>Capítulo 10 y Conclusión del Ebook</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-950 tracking-tight leading-snug">
          {SPECIALIST_GUIDE.title}
        </h2>

        <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
          {SPECIALIST_GUIDE.subtitle}
        </p>

        <div className="mt-4 rounded-2xl bg-orange-50/80 border border-orange-900/10 p-4">
          <p className="text-sm sm:text-base text-orange-950 font-medium leading-relaxed">
            {SPECIALIST_GUIDE.summary}
          </p>
        </div>
      </div>

      {/* Safety Points from the Conclusion: Disposable needles, sterilization, credentials */}
      <div className="mt-5 rounded-3xl border border-orange-950/10 bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-900">
            <Syringe className="h-5 w-5 text-orange-800" />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-orange-950">
            Reglas críticas de seguridad sanitaria
          </h3>
        </div>
        <p className="text-sm text-stone-600 mb-4 leading-relaxed">
          Exigencias indispensables que la conclusión del libro destaca para prevenir infecciones o riesgos a la salud:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {SPECIALIST_GUIDE.safetyChecklist.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-orange-950/10 bg-orange-50/40 p-4 transition-all hover:bg-orange-50/80"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-white p-2 border border-orange-950/10 shadow-xs">
                  {getSafetyIcon(item.icon)}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-orange-950 leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 10 Full Translated Content */}
      <div className="mt-5 rounded-3xl border border-orange-950/10 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-bold text-orange-950 mb-4 pb-2 border-b border-orange-950/10">
          Lo que debes saber para elegir correctamente
        </h3>

        <div className="space-y-6">
          {SPECIALIST_GUIDE.whatYouMustKnow.map((section, sIndex) => (
            <section key={sIndex} className="space-y-3">
              {section.subtitle && (
                <h4 className="text-base sm:text-lg font-bold text-orange-900">
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

      {/* Recommended Questions Checklist */}
      <div className="mt-5 rounded-3xl border border-orange-950/10 bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 text-orange-900 font-bold text-base mb-2">
          <HelpCircle className="h-5 w-5 text-orange-700" />
          <h3 className="text-lg font-bold text-orange-950">
            Preguntas recomendadas para tu primera consulta
          </h3>
        </div>
        <p className="text-sm text-stone-600 mb-4 leading-relaxed">
          No dudes en hacer estas preguntas antes de comenzar cualquier sesión:
        </p>

        <ul className="space-y-3">
          {SPECIALIST_GUIDE.questionsToAsk.map((question, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-xl border border-orange-900/10 bg-orange-50/50 p-3.5 text-sm sm:text-base text-stone-800"
            >
              <CheckCircle2 className="h-4 w-4 text-orange-700 mt-1 flex-shrink-0" />
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Safety Alert Note */}
      <div className="mt-5 rounded-2xl border border-amber-900/20 bg-amber-50/80 p-4 text-amber-950">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed text-amber-950">
            <strong className="block font-bold mb-0.5">Precaución indispensable:</strong>
            Si un practicante no utiliza agujas desechables de paquete sellado o no desinfecta el área con alcohol, no permitas la sesión. La higiene es la máxima garantía en la acupuntura.
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6">
        <Disclaimer id="disclaimer-especialista" />
      </div>
    </article>
  );
};
