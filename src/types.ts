export type ScreenId = 'inicio' | 'seleccion' | 'resultado' | 'favoritos' | 'especialista';

export interface TopicSection {
  subtitle?: string;
  paragraphs: string[];
}

export interface AcupunctureTopic {
  id: string;
  title: string;
  shortDescription: string;
  iconName: 'Activity' | 'Brain' | 'Moon' | 'ShieldAlert' | 'Flame' | 'Zap' | 'Scale' | 'Sparkles' | 'HeartPulse';
  summary: string;
  chapterNumber: number;
  sections: TopicSection[];
  keyHighlights: string[];
  recommendedSessions: string;
}

export interface SpecialistSafetyItem {
  title: string;
  description: string;
  icon: string;
}

export interface SpecialistGuideData {
  title: string;
  subtitle: string;
  summary: string;
  whatYouMustKnow: TopicSection[];
  safetyChecklist: SpecialistSafetyItem[];
  questionsToAsk: string[];
}
