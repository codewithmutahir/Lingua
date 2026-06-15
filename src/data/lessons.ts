import type { Lesson } from "@/types/learning";

import { additionalLessons } from "./additional-lessons";
import { unit3Lessons } from "./unit3-lessons";

export const lessons: Lesson[] = [
  // ── Spanish · Unit 1 ──────────────────────────────────────────────
  {
    id: "spanish-lesson-1",
    languageId: "spanish",
    unitId: "spanish-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first Spanish greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in Spanish.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Recognize formal vs informal greetings",
      ],
    },
    vocabulary: [
      {
        id: "es-hola",
        term: "Hola",
        translation: "Hello",
        pronunciation: "OH-lah",
        example: "Hola, ¿cómo estás?",
      },
      {
        id: "es-adios",
        term: "Adiós",
        translation: "Goodbye",
        pronunciation: "ah-DYOHS",
      },
      {
        id: "es-buenos-dias",
        term: "Buenos días",
        translation: "Good morning",
        pronunciation: "BWEH-nohs DEE-ahs",
      },
    ],
    phrases: [
      {
        id: "es-phrase-hola",
        text: "¡Hola! ¿Cómo estás?",
        translation: "Hello! How are you?",
      },
      {
        id: "es-phrase-adios",
        text: "Adiós, hasta luego.",
        translation: "Goodbye, see you later.",
      },
    ],
    activities: [
      {
        id: "spanish-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "spanish-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "spanish-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Hey there! I'm so glad you're here. Today we're learning Spanish greetings — super useful stuff. Let's start with hola, which means hello. Can you try saying hola?",
      systemContext:
        "You are a warm, encouraging Spanish teacher. The student is a beginner on the Hello & Goodbye lesson. Only teach Spanish greetings (hola, adiós, buenos días). Speak mostly in English, introduce Spanish words slowly with translations, and keep replies to one or two short sentences.",
      focusAreas: ["hola", "adiós", "buenos días", "formal vs informal tone"],
    },
  },
  {
    id: "spanish-lesson-2",
    languageId: "spanish",
    unitId: "spanish-unit-1",
    title: "Please & Thank You",
    description: "Be polite with por favor and gracias.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in Spanish.",
      outcomes: [
        "Say please and thank you",
        "Respond when someone thanks you",
      ],
    },
    vocabulary: [
      {
        id: "es-por-favor",
        term: "Por favor",
        translation: "Please",
        pronunciation: "por fah-VOR",
      },
      {
        id: "es-gracias",
        term: "Gracias",
        translation: "Thank you",
        pronunciation: "GRAH-syahs",
      },
      {
        id: "es-de-nada",
        term: "De nada",
        translation: "You're welcome",
        pronunciation: "deh NAH-dah",
      },
    ],
    phrases: [
      {
        id: "es-phrase-gracias",
        text: "Muchas gracias.",
        translation: "Thank you very much.",
      },
      {
        id: "es-phrase-cafe",
        text: "Un café, por favor.",
        translation: "A coffee, please.",
        context: "Ordering at a café",
      },
    ],
    activities: [
      {
        id: "spanish-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn por favor, gracias, and de nada.",
      },
      {
        id: "spanish-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in Spanish.",
      },
      {
        id: "spanish-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a café.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Nice work getting this far! Today we're covering por favor and gracias — you'll use these every day. Por favor means please. Try saying it with me: por favor.",
      systemContext:
        "You are a friendly Spanish teacher helping a beginner with polite expressions only: por favor, gracias, de nada. Use short English explanations, add Spanish words with translations, and ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["por favor", "gracias", "de nada", "café ordering"],
    },
  },
  {
    id: "spanish-lesson-3",
    languageId: "spanish",
    unitId: "spanish-unit-1",
    title: "Numbers 1–5",
    description: "Count from uno to cinco.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Spanish.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "es-uno", term: "Uno", translation: "One", pronunciation: "OO-noh" },
      { id: "es-dos", term: "Dos", translation: "Two", pronunciation: "dohs" },
      {
        id: "es-tres",
        term: "Tres",
        translation: "Three",
        pronunciation: "trehs",
      },
      {
        id: "es-cuatro",
        term: "Cuatro",
        translation: "Four",
        pronunciation: "KWAH-troh",
      },
      {
        id: "es-cinco",
        term: "Cinco",
        translation: "Five",
        pronunciation: "SEEN-koh",
      },
    ],
    phrases: [
      {
        id: "es-phrase-count",
        text: "Uno, dos, tres…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "spanish-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers uno through cinco.",
      },
      {
        id: "spanish-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "spanish-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's have some fun with numbers! In Spanish, one is uno. Two is dos. Let's count together — I'll go first: uno, dos, tres. Your turn!",
      systemContext:
        "You are an energetic Spanish teacher covering only numbers 1–5 (uno, dos, tres, cuatro, cinco). Speak mostly English, teach one number at a time, and encourage repetition. Do not teach other topics.",
      focusAreas: ["uno", "dos", "tres", "cuatro", "cinco", "counting aloud"],
    },
  },
  // ── Spanish · Unit 2 ──────────────────────────────────────────────
  {
    id: "spanish-lesson-4",
    languageId: "spanish",
    unitId: "spanish-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in Spanish.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: [
        "Say your name with me llamo",
        "Ask ¿Cómo te llamas?",
      ],
    },
    vocabulary: [
      {
        id: "es-me-llamo",
        term: "Me llamo",
        translation: "My name is",
        pronunciation: "meh YAH-moh",
      },
      {
        id: "es-como-te-llamas",
        term: "¿Cómo te llamas?",
        translation: "What's your name?",
        pronunciation: "KOH-moh teh YAH-mahs",
      },
    ],
    phrases: [
      {
        id: "es-phrase-intro",
        text: "Me llamo Ana. ¿Y tú?",
        translation: "My name is Ana. And you?",
      },
      {
        id: "es-phrase-nice",
        text: "Mucho gusto.",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "spanish-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn me llamo and cómo te llamas.",
      },
      {
        id: "spanish-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "spanish-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? In Spanish you'd say me llamo, then your name. So me llamo means my name is. What's your name? Try saying me llamo and your name!",
      systemContext:
        "You are a Spanish teacher focused on introductions: me llamo, ¿cómo te llamas?, mucho gusto. Keep it conversational, mostly English, one or two sentences per reply. Ask the student to repeat and try again gently.",
      focusAreas: ["me llamo", "¿cómo te llamas?", "mucho gusto"],
    },
  },
  {
    id: "spanish-lesson-5",
    languageId: "spanish",
    unitId: "spanish-unit-2",
    title: "How Are You?",
    description: "Ask and answer cómo estás.",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: [
        "Ask ¿Cómo estás?",
        "Answer with bien, gracias",
      ],
    },
    vocabulary: [
      {
        id: "es-como-estas",
        term: "¿Cómo estás?",
        translation: "How are you?",
        pronunciation: "KOH-moh ehs-TAHS",
      },
      {
        id: "es-bien",
        term: "Bien",
        translation: "Well / fine",
        pronunciation: "byehn",
      },
      {
        id: "es-mal",
        term: "Mal",
        translation: "Bad / not well",
        pronunciation: "mahl",
      },
    ],
    phrases: [
      {
        id: "es-phrase-bien-gracias",
        text: "Estoy bien, gracias.",
        translation: "I'm fine, thank you.",
      },
      {
        id: "es-phrase-y-tu",
        text: "¿Y tú?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "spanish-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn cómo estás, bien, and mal.",
      },
      {
        id: "spanish-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to ¿Cómo estás? out loud.",
      },
      {
        id: "spanish-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's check in! ¿Cómo estás? means how are you? If you're doing great, you can say estoy bien — I'm fine. How are you feeling today? Try answering in Spanish!",
      systemContext:
        "You are a Spanish teacher teaching only cómo estás, bien, mal, estoy bien gracias, and ¿y tú?. Be warm and encouraging. Mostly English with Spanish phrases. One or two sentences max per turn.",
      focusAreas: ["¿cómo estás?", "bien", "mal", "estoy bien, gracias"],
    },
  },
  // ── French · Unit 1 ───────────────────────────────────────────────
  {
    id: "french-lesson-1",
    languageId: "french",
    unitId: "french-unit-1",
    title: "Bonjour!",
    description: "Your first French greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet people in French during the day.",
      outcomes: ["Say bonjour and bonsoir", "Use au revoir to say goodbye"],
    },
    vocabulary: [
      {
        id: "fr-bonjour",
        term: "Bonjour",
        translation: "Hello / Good day",
        pronunciation: "bon-ZHOOR",
      },
      {
        id: "fr-bonsoir",
        term: "Bonsoir",
        translation: "Good evening",
        pronunciation: "bon-SWAHR",
      },
      {
        id: "fr-au-revoir",
        term: "Au revoir",
        translation: "Goodbye",
        pronunciation: "oh ruh-VWAHR",
      },
    ],
    phrases: [
      {
        id: "fr-phrase-bonjour",
        text: "Bonjour, madame.",
        translation: "Hello, ma'am.",
      },
      {
        id: "fr-phrase-revoir",
        text: "Au revoir et bonne journée!",
        translation: "Goodbye and have a nice day!",
      },
    ],
    activities: [
      {
        id: "french-lesson-1-vocab",
        type: "vocabulary",
        title: "French greetings",
        instruction: "Learn bonjour, bonsoir, and au revoir.",
      },
      {
        id: "french-lesson-1-phrases",
        type: "phrases",
        title: "Practice aloud",
        instruction: "Repeat each greeting phrase.",
      },
      {
        id: "french-lesson-1-ai",
        type: "ai_teacher",
        title: "AI teacher chat",
        instruction: "Practice greetings with your teacher.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Bonjour! Welcome to your first French lesson. Bonjour means hello or good day — you'll hear it everywhere in France. Can you say bonjour with me?",
      systemContext:
        "You are a friendly French teacher for beginners. Teach only bonjour, bonsoir, au revoir. Speak mostly English, introduce French slowly, keep replies short and encouraging. Do not switch languages or topics.",
      focusAreas: ["bonjour", "bonsoir", "au revoir", "daytime vs evening"],
    },
  },
  {
    id: "french-lesson-2",
    languageId: "french",
    unitId: "french-unit-1",
    title: "Merci & S'il vous plaît",
    description: "Polite French for everyday moments.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Say thank you and please in French.",
      outcomes: ["Use merci and s'il vous plaît", "Say you're welcome with je vous en prie"],
    },
    vocabulary: [
      {
        id: "fr-merci",
        term: "Merci",
        translation: "Thank you",
        pronunciation: "mehr-SEE",
      },
      {
        id: "fr-svp",
        term: "S'il vous plaît",
        translation: "Please (formal)",
        pronunciation: "seel voo PLEH",
      },
      {
        id: "fr-en-prie",
        term: "Je vous en prie",
        translation: "You're welcome",
        pronunciation: "zhuh voo zahn PREE",
      },
    ],
    phrases: [
      {
        id: "fr-phrase-merci",
        text: "Merci beaucoup.",
        translation: "Thank you very much.",
      },
      {
        id: "fr-phrase-baguette",
        text: "Une baguette, s'il vous plaît.",
        translation: "A baguette, please.",
        context: "Ordering at a café",
      },
    ],
    activities: [
      {
        id: "french-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite French",
        instruction: "Study merci and s'il vous plaît.",
      },
      {
        id: "french-lesson-2-speaking",
        type: "speaking",
        title: "Order politely",
        instruction: "Ask for something at a shop.",
      },
      {
        id: "french-lesson-2-ai",
        type: "ai_teacher",
        title: "Bakery role-play",
        instruction: "Practice ordering with your AI teacher.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Polite French goes a long way! Merci means thank you — super easy, right? And s'il vous plaît is please. Let's try ordering une baguette, s'il vous plaît.",
      systemContext:
        "You are a French teacher covering merci, s'il vous plaît, je vous en prie only. Mostly English, short replies, ask student to repeat. Bakery ordering context is fine but stay on these phrases.",
      focusAreas: ["merci", "s'il vous plaît", "je vous en prie", "bakery"],
    },
  },
  // ── French · Unit 2 ───────────────────────────────────────────────
  {
    id: "french-lesson-3",
    languageId: "french",
    unitId: "french-unit-2",
    title: "Where Is…?",
    description: "Ask for directions with où est.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "palace",
    goal: {
      summary: "Ask where something is located.",
      outcomes: ["Use où est…?", "Understand simple location words"],
    },
    vocabulary: [
      {
        id: "fr-ou-est",
        term: "Où est…?",
        translation: "Where is…?",
        pronunciation: "oo eh",
      },
      {
        id: "fr-la-gare",
        term: "La gare",
        translation: "The train station",
        pronunciation: "lah GAHR",
      },
      {
        id: "fr-le-cafe",
        term: "Le café",
        translation: "The café",
        pronunciation: "luh ka-FAY",
      },
    ],
    phrases: [
      {
        id: "fr-phrase-gare",
        text: "Où est la gare?",
        translation: "Where is the train station?",
      },
      {
        id: "fr-phrase-cafe",
        text: "Le café est là-bas.",
        translation: "The café is over there.",
      },
    ],
    activities: [
      {
        id: "french-lesson-3-vocab",
        type: "vocabulary",
        title: "Places in town",
        instruction: "Learn où est, la gare, and le café.",
      },
      {
        id: "french-lesson-3-listening",
        type: "listening",
        title: "Find your way",
        instruction: "Listen and identify the place being asked about.",
      },
      {
        id: "french-lesson-3-ai",
        type: "ai_teacher",
        title: "Ask for directions",
        instruction: "Practice asking où est…? in conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Imagine you're in Paris and you need the train station. You'd ask: Où est la gare? That means where is the train station? Try asking me where the café is!",
      systemContext:
        "You are a French teacher for the Where Is lesson. Focus on où est, la gare, le café, là-bas. English explanations, short replies, encourage the student to ask questions in French.",
      focusAreas: ["où est", "la gare", "le café", "là-bas"],
    },
  },
  {
    id: "french-lesson-4",
    languageId: "french",
    unitId: "french-unit-2",
    title: "I'd Like…",
    description: "Order food with je voudrais.",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Order something at a café using je voudrais.",
      outcomes: ["Say je voudrais…", "Order a drink or snack politely"],
    },
    vocabulary: [
      {
        id: "fr-je-voudrais",
        term: "Je voudrais",
        translation: "I would like",
        pronunciation: "zhuh voo-DRAY",
      },
      {
        id: "fr-un-cafe",
        term: "Un café",
        translation: "A coffee",
        pronunciation: "uhn ka-FAY",
      },
      {
        id: "fr-laddition",
        term: "L'addition",
        translation: "The bill / check",
        pronunciation: "lah-dee-SYON",
      },
    ],
    phrases: [
      {
        id: "fr-phrase-order",
        text: "Je voudrais un café, s'il vous plaît.",
        translation: "I would like a coffee, please.",
      },
      {
        id: "fr-phrase-bill",
        text: "L'addition, s'il vous plaît.",
        translation: "The check, please.",
      },
    ],
    activities: [
      {
        id: "french-lesson-4-vocab",
        type: "vocabulary",
        title: "Ordering words",
        instruction: "Learn je voudrais and un café.",
      },
      {
        id: "french-lesson-4-speaking",
        type: "speaking",
        title: "Place your order",
        instruction: "Order a coffee at a French café.",
      },
      {
        id: "french-lesson-4-ai",
        type: "ai_teacher",
        title: "Café conversation",
        instruction: "Role-play ordering with your teacher.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Time for a café stop! Je voudrais means I'd like — perfect for ordering. So je voudrais un café is I'd like a coffee. What would you like to order today?",
      systemContext:
        "You are a French teacher for café ordering: je voudrais, un café, l'addition, s'il vous plaît. Role-play a waiter gently. English + French phrases, stay on lesson vocabulary only.",
      focusAreas: ["je voudrais", "un café", "l'addition", "ordering politely"],
    },
  },
  // ── Japanese · Unit 1 ─────────────────────────────────────────────
  {
    id: "japanese-lesson-1",
    languageId: "japanese",
    unitId: "japanese-unit-1",
    title: "Hello in Japanese",
    description: "Learn konnichiwa and basic greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone politely in Japanese.",
      outcomes: [
        "Say konnichiwa and ohayō",
        "Use sayōnara to say goodbye",
      ],
    },
    vocabulary: [
      {
        id: "ja-konnichiwa",
        term: "Konnichiwa",
        translation: "Hello (daytime)",
        pronunciation: "kohn-nee-chee-wah",
      },
      {
        id: "ja-ohayo",
        term: "Ohayō",
        translation: "Good morning",
        pronunciation: "oh-hah-YOH",
      },
      {
        id: "ja-sayonara",
        term: "Sayōnara",
        translation: "Goodbye",
        pronunciation: "sah-yoh-NAH-rah",
      },
    ],
    phrases: [
      {
        id: "ja-phrase-konnichiwa",
        text: "Konnichiwa!",
        translation: "Hello!",
      },
      {
        id: "ja-phrase-ohayo",
        text: "Ohayō gozaimasu.",
        translation: "Good morning. (polite)",
      },
    ],
    activities: [
      {
        id: "japanese-lesson-1-vocab",
        type: "vocabulary",
        title: "Japanese greetings",
        instruction: "Learn konnichiwa, ohayō, and sayōnara.",
      },
      {
        id: "japanese-lesson-1-phrases",
        type: "phrases",
        title: "Say it clearly",
        instruction: "Practice each greeting out loud.",
      },
      {
        id: "japanese-lesson-1-ai",
        type: "ai_teacher",
        title: "Greet your teacher",
        instruction: "Start a lesson with a Japanese greeting.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Konnichiwa! That means hello in Japanese — you'll use it during the day. Let's try it together: konnichiwa! How did that feel? Give it another go!",
      systemContext:
        "You are a warm Japanese teacher for beginners. Teach only konnichiwa, ohayō, sayōnara, ohayō gozaimasu. Mostly English, introduce Japanese slowly with pronunciation tips. One or two sentences per reply.",
      focusAreas: ["konnichiwa", "ohayō", "sayōnara", "polite morning greeting"],
    },
  },
  {
    id: "japanese-lesson-2",
    languageId: "japanese",
    unitId: "japanese-unit-1",
    title: "Thank You & Sorry",
    description: "Master arigatō and sumimasen.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Express thanks and apologize politely.",
      outcomes: ["Say arigatō and arigatō gozaimasu", "Use sumimasen to apologize or get attention"],
    },
    vocabulary: [
      {
        id: "ja-arigato",
        term: "Arigatō",
        translation: "Thank you",
        pronunciation: "ah-ree-GAH-toh",
      },
      {
        id: "ja-arigato-gozaimasu",
        term: "Arigatō gozaimasu",
        translation: "Thank you (polite)",
        pronunciation: "ah-ree-GAH-toh goh-ZAH-ee-mahs",
      },
      {
        id: "ja-sumimasen",
        term: "Sumimasen",
        translation: "Excuse me / Sorry",
        pronunciation: "soo-mee-MAH-sen",
      },
    ],
    phrases: [
      {
        id: "ja-phrase-thanks",
        text: "Arigatō gozaimasu.",
        translation: "Thank you very much.",
      },
      {
        id: "ja-phrase-sorry",
        text: "Sumimasen, chotto matte kudasai.",
        translation: "Excuse me, please wait a moment.",
      },
    ],
    activities: [
      {
        id: "japanese-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite expressions",
        instruction: "Learn arigatō and sumimasen.",
      },
      {
        id: "japanese-lesson-2-speaking",
        type: "speaking",
        title: "Say thank you",
        instruction: "Thank someone in Japanese.",
      },
      {
        id: "japanese-lesson-2-ai",
        type: "ai_teacher",
        title: "Polite practice",
        instruction: "Use arigatō and sumimasen in conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Arigatō is thank you — you'll hear it all the time in Japan! The polite form is arigatō gozaimasu. And sumimasen means excuse me or sorry. Try saying arigatō gozaimasu!",
      systemContext:
        "You are a Japanese teacher covering arigatō, arigatō gozaimasu, sumimasen only. Explain politeness levels simply in English. Short encouraging replies, ask for repetition.",
      focusAreas: ["arigatō", "arigatō gozaimasu", "sumimasen", "politeness"],
    },
  },
  {
    id: "japanese-lesson-3",
    languageId: "japanese",
    unitId: "japanese-unit-1",
    title: "My Name Is…",
    description: "Introduce yourself with watashi wa.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "palace",
    goal: {
      summary: "Introduce yourself in Japanese.",
      outcomes: [
        "Say watashi wa … desu",
        "Ask someone's name with onamae wa",
      ],
    },
    vocabulary: [
      {
        id: "ja-watashi-wa",
        term: "Watashi wa",
        translation: "I am / As for me",
        pronunciation: "wah-TAH-shee wah",
      },
      {
        id: "ja-desu",
        term: "Desu",
        translation: "Am / is (polite)",
        pronunciation: "dess",
      },
      {
        id: "ja-onamae",
        term: "Onamae wa?",
        translation: "What's your name?",
        pronunciation: "oh-nah-MAH-eh wah",
      },
    ],
    phrases: [
      {
        id: "ja-phrase-name",
        text: "Watashi wa Yuki desu.",
        translation: "I am Yuki.",
      },
      {
        id: "ja-phrase-nice-meet",
        text: "Hajimemashite.",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "japanese-lesson-3-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn watashi wa, desu, and onamae wa.",
      },
      {
        id: "japanese-lesson-3-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Say your name using watashi wa … desu.",
      },
      {
        id: "japanese-lesson-3-ai",
        type: "ai_teacher",
        title: "First meeting",
        instruction: "Introduce yourself to your AI teacher.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's introduce ourselves! Watashi wa means as for me, and desu makes it polite. So watashi wa [your name] desu means I am [your name]. What's your name? Try the full phrase!",
      systemContext:
        "You are a Japanese teacher for introductions: watashi wa, desu, onamae wa, hajimemashite. Mostly English, teach structure step by step, encourage full sentence attempts. Stay on this lesson.",
      focusAreas: ["watashi wa … desu", "onamae wa?", "hajimemashite"],
    },
  },
  ...additionalLessons,
  ...unit3Lessons,
];

export function getLessonsByUnitId(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByLanguageId(languageId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getFirstLessonForLanguage(languageId: string): Lesson | undefined {
  return getLessonsByLanguageId(languageId)[0];
}
