import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { MANDATORY_DISCLAIMER } from '../data/acupunctureData';

interface DisclaimerProps {
  id?: string;
  className?: string;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({
  id = 'disclaimer-nota-medica',
  className = '',
}) => {
  return (
    <aside
      id={id}
      aria-label="Aviso médico importante"
      className={`rounded-xl border border-orange-900/10 bg-orange-50/70 p-4 text-orange-950/80 transition-colors ${className}`}
    >
      <div className="flex items-start gap-3">
        <ShieldAlert
          className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-700"
          aria-hidden="true"
        />
        <div className="text-xs sm:text-sm leading-relaxed text-orange-900/90 font-medium">
          <strong className="font-semibold block text-orange-950 mb-0.5">
            Nota de responsabilidad médica:
          </strong>
          {MANDATORY_DISCLAIMER}
        </div>
      </div>
    </aside>
  );
};
