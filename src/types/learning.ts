/** Supported lesson activity types shown in the lesson flow. */
export type ActivityType =
  | "vocabulary"
  | "phrases"
  | "listening"
  | "speaking"
  | "ai_teacher";

export type Language = {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  /** Circular flag image URL. */
  flagEmoji: string;
  description: string;
  /** Formatted learner count shown on the language picker (e.g. "28.4M"). */
  learnerCount?: string;
  /** Whether the language appears in the Popular section. */
  isPopular?: boolean;
};

export type Unit = {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  /** Asset key for unit artwork (e.g. palace, treasure). */
  imageKey?: string;
};

export type VocabularyItem = {
  id: string;
  term: string;
  translation: string;
  pronunciation?: string;
  example?: string;
};

export type Phrase = {
  id: string;
  text: string;
  translation: string;
  context?: string;
};

export type LessonGoal = {
  summary: string;
  outcomes: string[];
};

/** Prompts for future Stream Vision Agent / audio AI teacher sessions. */
export type AITeacherPrompt = {
  /** Opening line when the lesson session starts. */
  kickoff: string;
  /** Background context the agent should stay within. */
  systemContext: string;
  /** Topics the teacher should focus on during the lesson. */
  focusAreas: string[];
};

export type LessonActivity = {
  id: string;
  type: ActivityType;
  title: string;
  instruction: string;
};

export type Lesson = {
  id: string;
  languageId: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  estimatedMinutes: number;
  imageKey?: string;
  goal: LessonGoal;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: LessonActivity[];
  aiTeacher: AITeacherPrompt;
};
