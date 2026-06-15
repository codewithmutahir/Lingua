import type { Lesson } from "@/types/learning";

/** Japanese unit 2 + all lessons for newly added languages. */
export const additionalLessons: Lesson[] = [
  // ── Japanese · Unit 2 ─────────────────────────────────────────────
  {
    id: "japanese-lesson-4",
    languageId: "japanese",
    unitId: "japanese-unit-2",
    title: "How Are You?",
    description: "Ask and answer genki desu ka.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "treasure",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: [
        "Ask お元気ですか?",
        "Answer with 元気です",
      ],
    },
    vocabulary: [
      {
        id: "ja-ogenki",
        term: "お元気ですか?",
        translation: "How are you?",
        pronunciation: "oh-gen-kee dess-kah",
      },
      {
        id: "ja-genki-desu",
        term: "元気です",
        translation: "I'm fine / I'm well",
        pronunciation: "gen-kee dess",
      },
      {
        id: "ja-maa-maa",
        term: "まあまあ",
        translation: "So-so",
        pronunciation: "mah-mah",
      },
    ],
    phrases: [
      {
        id: "ja-phrase-genki",
        text: "元気です、ありがとう。",
        translation: "I'm fine, thank you.",
      },
      {
        id: "ja-phrase-anata-wa",
        text: "あなたは?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "japanese-lesson-4-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn お元気ですか and 元気です.",
      },
      {
        id: "japanese-lesson-4-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to お元気ですか out loud.",
      },
      {
        id: "japanese-lesson-4-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's check in! お元気ですか means how are you? If you're doing great, say 元気です — I'm fine. How are you today? Try answering in Japanese!",
      systemContext:
        "You are a Japanese teacher teaching only お元気ですか, 元気です, まあまあ, and あなたは. Be warm and encouraging. Mostly English with Japanese phrases. One or two sentences max per turn.",
      focusAreas: ["お元気ですか", "元気です", "まあまあ", "あなたは"],
    },
  },
  {
    id: "japanese-lesson-5",
    languageId: "japanese",
    unitId: "japanese-unit-2",
    title: "Numbers 1–5",
    description: "Count from ichi to go.",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Japanese.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "ja-ichi", term: "一 (Ichi)", translation: "One", pronunciation: "ee-chee" },
      { id: "ja-ni", term: "二 (Ni)", translation: "Two", pronunciation: "nee" },
      { id: "ja-san", term: "三 (San)", translation: "Three", pronunciation: "sahn" },
      { id: "ja-yon", term: "四 (Yon)", translation: "Four", pronunciation: "yohn" },
      { id: "ja-go", term: "五 (Go)", translation: "Five", pronunciation: "goh" },
    ],
    phrases: [
      {
        id: "ja-phrase-count",
        text: "一、二、三…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "japanese-lesson-5-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers ichi through go.",
      },
      {
        id: "japanese-lesson-5-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "japanese-lesson-5-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in Japanese! One is ichi, two is ni. Let's go together: ichi, ni, san. Your turn!",
      systemContext:
        "You are an energetic Japanese teacher covering only numbers 1–5 (ichi, ni, san, yon, go). Speak mostly English, teach one number at a time, and encourage repetition. Do not teach other topics.",
      focusAreas: ["ichi", "ni", "san", "yon", "go", "counting aloud"],
    },
  },

  // ── Korean · Unit 1 ─────────────────────────────────────────────
  {
    id: "korean-lesson-1",
    languageId: "korean",
    unitId: "korean-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first Korean greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in Korean.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Recognize formal vs informal greetings",
      ],
    },
    vocabulary: [
      {
        id: "ko-annyeonghaseyo",
        term: "안녕하세요",
        translation: "Hello (formal)",
        pronunciation: "ahn-nyung-hah-seh-yo",
        example: "안녕하세요, 잘 지내세요?",
      },
      {
        id: "ko-annyeong",
        term: "안녕",
        translation: "Hi / Bye (informal)",
        pronunciation: "ahn-nyung",
      },
      {
        id: "ko-annyeonghi-gaseyo",
        term: "안녕히 가세요",
        translation: "Goodbye (to someone leaving)",
        pronunciation: "ahn-nyung-hee gah-seh-yo",
      },
    ],
    phrases: [
      {
        id: "ko-phrase-hello",
        text: "안녕하세요! 잘 지내세요?",
        translation: "Hello! How have you been?",
      },
      {
        id: "ko-phrase-bye",
        text: "안녕히 가세요.",
        translation: "Goodbye. (when they leave)",
      },
    ],
    activities: [
      {
        id: "korean-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "korean-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "korean-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Annyeonghaseyo! Welcome to Korean. 안녕하세요 is hello — you'll use it every day. Can you try saying it with me?",
      systemContext:
        "You are a warm Korean teacher. The student is a beginner on the Hello & Goodbye lesson. Only teach 안녕하세요, 안녕, 안녕히 가세요. Speak mostly in English, introduce Korean slowly with translations, and keep replies to one or two short sentences.",
      focusAreas: ["안녕하세요", "안녕", "안녕히 가세요", "formal vs informal"],
    },
  },
  {
    id: "korean-lesson-2",
    languageId: "korean",
    unitId: "korean-unit-1",
    title: "Please & Thank You",
    description: "Be polite with 주세요 and 감사합니다.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in Korean.",
      outcomes: ["Say please and thank you", "Respond when someone thanks you"],
    },
    vocabulary: [
      {
        id: "ko-juseyo",
        term: "주세요",
        translation: "Please (give me)",
        pronunciation: "joo-seh-yo",
      },
      {
        id: "ko-gamsahamnida",
        term: "감사합니다",
        translation: "Thank you",
        pronunciation: "gahm-sah-hahm-nee-dah",
      },
      {
        id: "ko-cheongmaneyo",
        term: "천만에요",
        translation: "You're welcome",
        pronunciation: "chun-mah-neh-yo",
      },
    ],
    phrases: [
      {
        id: "ko-phrase-thanks",
        text: "정말 감사합니다.",
        translation: "Thank you very much.",
      },
      {
        id: "ko-phrase-cafe",
        text: "커피 주세요.",
        translation: "A coffee, please.",
        context: "Ordering at a café",
      },
    ],
    activities: [
      {
        id: "korean-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn 주세요, 감사합니다, and 천만에요.",
      },
      {
        id: "korean-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in Korean.",
      },
      {
        id: "korean-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a café.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Today we're learning 주세요 and 감사합니다 — you'll use these constantly in Korea. 주세요 means please give me. Try saying 커피 주세요!",
      systemContext:
        "You are a friendly Korean teacher helping a beginner with polite expressions only: 주세요, 감사합니다, 천만에요. Use short English explanations, add Korean words with translations, and ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["주세요", "감사합니다", "천만에요", "café ordering"],
    },
  },
  {
    id: "korean-lesson-3",
    languageId: "korean",
    unitId: "korean-unit-1",
    title: "Numbers 1–5",
    description: "Count from 하나 to 다섯.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Korean.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "ko-hana", term: "하나", translation: "One", pronunciation: "hah-nah" },
      { id: "ko-dul", term: "둘", translation: "Two", pronunciation: "dool" },
      { id: "ko-set", term: "셋", translation: "Three", pronunciation: "seht" },
      { id: "ko-net", term: "넷", translation: "Four", pronunciation: "neht" },
      { id: "ko-daseot", term: "다섯", translation: "Five", pronunciation: "dah-suht" },
    ],
    phrases: [
      {
        id: "ko-phrase-count",
        text: "하나, 둘, 셋…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "korean-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers 하나 through 다섯.",
      },
      {
        id: "korean-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "korean-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in Korean! One is 하나, two is 둘. I'll start: 하나, 둘, 셋. Your turn!",
      systemContext:
        "You are an energetic Korean teacher covering only numbers 1–5 (하나, 둘, 셋, 넷, 다섯). Speak mostly English, teach one number at a time, and encourage repetition. Do not teach other topics.",
      focusAreas: ["하나", "둘", "셋", "넷", "다섯", "counting aloud"],
    },
  },
  {
    id: "korean-lesson-4",
    languageId: "korean",
    unitId: "korean-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in Korean.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: ["Say your name with 제 이름은", "Ask 이름이 뭐예요?"],
    },
    vocabulary: [
      {
        id: "ko-je-ireumeun",
        term: "제 이름은",
        translation: "My name is",
        pronunciation: "jeh ee-reu-mun",
      },
      {
        id: "ko-ireumi-mwoyeyo",
        term: "이름이 뭐예요?",
        translation: "What's your name?",
        pronunciation: "ee-reu-mee mwo-yeh-yo",
      },
    ],
    phrases: [
      {
        id: "ko-phrase-intro",
        text: "제 이름은 민수예요. 만나서 반가워요.",
        translation: "My name is Minsu. Nice to meet you.",
      },
      {
        id: "ko-phrase-and-you",
        text: "그쪽은요?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "korean-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn 제 이름은 and 이름이 뭐예요?",
      },
      {
        id: "korean-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "korean-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? Say 제 이름은, then your name, then 예요. What's your name? Try the full phrase!",
      systemContext:
        "You are a Korean teacher focused on introductions: 제 이름은, 이름이 뭐예요?, 만나서 반가워요. Keep it conversational, mostly English, one or two sentences per reply.",
      focusAreas: ["제 이름은", "이름이 뭐예요?", "만나서 반가워요"],
    },
  },
  {
    id: "korean-lesson-5",
    languageId: "korean",
    unitId: "korean-unit-2",
    title: "How Are You?",
    description: "Ask and answer 잘 지내세요?",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: ["Ask 잘 지내세요?", "Answer with 네, 잘 지내요"],
    },
    vocabulary: [
      {
        id: "ko-jal-jinaeyo",
        term: "잘 지내세요?",
        translation: "How are you?",
        pronunciation: "jahl jee-neh-seh-yo",
      },
      {
        id: "ko-ne-jal",
        term: "네, 잘 지내요",
        translation: "Yes, I'm doing well",
        pronunciation: "neh jahl jee-neh-yo",
      },
      {
        id: "ko-joayo",
        term: "좋아요",
        translation: "Good / I like it",
        pronunciation: "joh-ah-yo",
      },
    ],
    phrases: [
      {
        id: "ko-phrase-fine",
        text: "네, 잘 지내요. 감사합니다.",
        translation: "Yes, I'm fine. Thank you.",
      },
      {
        id: "ko-phrase-you",
        text: "그쪽은요?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "korean-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn 잘 지내세요? and 네, 잘 지내요.",
      },
      {
        id: "korean-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to 잘 지내세요? out loud.",
      },
      {
        id: "korean-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "잘 지내세요? means how are you? If you're doing well, say 네, 잘 지내요. How are you today? Try answering in Korean!",
      systemContext:
        "You are a Korean teacher teaching only 잘 지내세요?, 네 잘 지내요, 좋아요, 그쪽은요. Be warm and encouraging. Mostly English with Korean phrases. One or two sentences max per turn.",
      focusAreas: ["잘 지내세요?", "네, 잘 지내요", "좋아요", "그쪽은요"],
    },
  },

  // ── Chinese · Unit 1 ──────────────────────────────────────────────
  {
    id: "chinese-lesson-1",
    languageId: "chinese",
    unitId: "chinese-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first Chinese greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in Chinese.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Use 早上好 for good morning",
      ],
    },
    vocabulary: [
      {
        id: "zh-nihao",
        term: "你好",
        translation: "Hello",
        pronunciation: "nee-HOW",
        example: "你好，你好吗？",
      },
      {
        id: "zh-zaijian",
        term: "再见",
        translation: "Goodbye",
        pronunciation: "dzai-JYEN",
      },
      {
        id: "zh-zaoshanghao",
        term: "早上好",
        translation: "Good morning",
        pronunciation: "dzow-shahng-HOW",
      },
    ],
    phrases: [
      {
        id: "zh-phrase-hello",
        text: "你好！你好吗？",
        translation: "Hello! How are you?",
      },
      {
        id: "zh-phrase-bye",
        text: "再见，明天见。",
        translation: "Goodbye, see you tomorrow.",
      },
    ],
    activities: [
      {
        id: "chinese-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "chinese-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "chinese-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Nǐ hǎo! 你好 means hello in Chinese — you'll hear it everywhere. Can you try saying 你好 with me?",
      systemContext:
        "You are a warm Chinese teacher using Simplified characters. The student is a beginner on the Hello & Goodbye lesson. Only teach 你好, 再见, 早上好. Speak mostly in English, introduce Chinese slowly with pinyin, and keep replies to one or two short sentences.",
      focusAreas: ["你好", "再见", "早上好", "pinyin pronunciation"],
    },
  },
  {
    id: "chinese-lesson-2",
    languageId: "chinese",
    unitId: "chinese-unit-1",
    title: "Please & Thank You",
    description: "Be polite with 请 and 谢谢.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in Chinese.",
      outcomes: ["Say please and thank you", "Respond with 不客气"],
    },
    vocabulary: [
      {
        id: "zh-qing",
        term: "请",
        translation: "Please",
        pronunciation: "ching",
      },
      {
        id: "zh-xiexie",
        term: "谢谢",
        translation: "Thank you",
        pronunciation: "shye-shye",
      },
      {
        id: "zh-bukeqi",
        term: "不客气",
        translation: "You're welcome",
        pronunciation: "boo-keh-chee",
      },
    ],
    phrases: [
      {
        id: "zh-phrase-thanks",
        text: "非常感谢。",
        translation: "Thank you very much.",
      },
      {
        id: "zh-phrase-tea",
        text: "请给我一杯茶。",
        translation: "Please give me a cup of tea.",
        context: "Ordering at a teahouse",
      },
    ],
    activities: [
      {
        id: "chinese-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn 请, 谢谢, and 不客气.",
      },
      {
        id: "chinese-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in Chinese.",
      },
      {
        id: "chinese-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a teahouse.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Today we're learning 请 and 谢谢 — essential polite words. 请 means please. Try saying 请给我一杯茶!",
      systemContext:
        "You are a friendly Chinese teacher using Simplified characters. Cover only 请, 谢谢, 不客气. Use short English explanations with pinyin, ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["请", "谢谢", "不客气", "ordering politely"],
    },
  },
  {
    id: "chinese-lesson-3",
    languageId: "chinese",
    unitId: "chinese-unit-1",
    title: "Numbers 1–5",
    description: "Count from 一 to 五.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Chinese.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "zh-yi", term: "一", translation: "One", pronunciation: "ee" },
      { id: "zh-er", term: "二", translation: "Two", pronunciation: "ar" },
      { id: "zh-san", term: "三", translation: "Three", pronunciation: "sahn" },
      { id: "zh-si", term: "四", translation: "Four", pronunciation: "suh" },
      { id: "zh-wu", term: "五", translation: "Five", pronunciation: "woo" },
    ],
    phrases: [
      {
        id: "zh-phrase-count",
        text: "一、二、三…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "chinese-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers 一 through 五.",
      },
      {
        id: "chinese-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "chinese-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in Chinese! 一 is one, 二 is two. Together: 一, 二, 三. Your turn!",
      systemContext:
        "You are an energetic Chinese teacher covering only numbers 1–5 (一, 二, 三, 四, 五) in Simplified characters. Speak mostly English with pinyin, teach one number at a time. Do not teach other topics.",
      focusAreas: ["一", "二", "三", "四", "五", "counting aloud"],
    },
  },
  {
    id: "chinese-lesson-4",
    languageId: "chinese",
    unitId: "chinese-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in Chinese.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: ["Say 我叫…", "Ask 你叫什么名字？"],
    },
    vocabulary: [
      {
        id: "zh-wojiao",
        term: "我叫",
        translation: "My name is / I'm called",
        pronunciation: "waw jee-ow",
      },
      {
        id: "zh-nijiaoshenme",
        term: "你叫什么名字？",
        translation: "What's your name?",
        pronunciation: "nee jee-ow shun-muh ming-dz",
      },
    ],
    phrases: [
      {
        id: "zh-phrase-intro",
        text: "我叫小明。很高兴认识你。",
        translation: "My name is Xiaoming. Nice to meet you.",
      },
      {
        id: "zh-phrase-nice",
        text: "很高兴认识你。",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "chinese-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn 我叫 and 你叫什么名字？",
      },
      {
        id: "chinese-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "chinese-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? 我叫 means my name is — then say your name. What's your name? Try 我叫 and your name!",
      systemContext:
        "You are a Chinese teacher using Simplified characters. Focus on 我叫, 你叫什么名字?, 很高兴认识你. Mostly English with pinyin, one or two sentences per reply.",
      focusAreas: ["我叫", "你叫什么名字？", "很高兴认识你"],
    },
  },
  {
    id: "chinese-lesson-5",
    languageId: "chinese",
    unitId: "chinese-unit-2",
    title: "How Are You?",
    description: "Ask and answer 你好吗？",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: ["Ask 你好吗？", "Answer with 我很好"],
    },
    vocabulary: [
      {
        id: "zh-nihaoma",
        term: "你好吗？",
        translation: "How are you?",
        pronunciation: "nee-how-mah",
      },
      {
        id: "zh-wohenhao",
        term: "我很好",
        translation: "I'm very well",
        pronunciation: "waw hun-how",
      },
      {
        id: "zh-haikeyi",
        term: "还可以",
        translation: "Not bad / okay",
        pronunciation: "hi keh-ee",
      },
    ],
    phrases: [
      {
        id: "zh-phrase-fine",
        text: "我很好，谢谢。",
        translation: "I'm fine, thank you.",
      },
      {
        id: "zh-phrase-you",
        text: "你呢？",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "chinese-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn 你好吗？ and 我很好.",
      },
      {
        id: "chinese-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to 你好吗？ out loud.",
      },
      {
        id: "chinese-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "你好吗？ means how are you? If you're doing great, say 我很好. How are you today? Try answering in Chinese!",
      systemContext:
        "You are a Chinese teacher using Simplified characters. Teach only 你好吗?, 我很好, 还可以, 你呢. Warm and encouraging. Mostly English with pinyin. One or two sentences max per turn.",
      focusAreas: ["你好吗？", "我很好", "还可以", "你呢"],
    },
  },

  // ── Russian · Unit 1 ──────────────────────────────────────────────
  {
    id: "russian-lesson-1",
    languageId: "russian",
    unitId: "russian-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first Russian greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in Russian.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Recognize formal vs informal greetings",
      ],
    },
    vocabulary: [
      {
        id: "ru-privet",
        term: "Привет",
        translation: "Hi (informal)",
        pronunciation: "pree-VYET",
        example: "Привет, как дела?",
      },
      {
        id: "ru-zdravstvuyte",
        term: "Здравствуйте",
        translation: "Hello (formal)",
        pronunciation: "ZDRAH-stvooy-tyeh",
      },
      {
        id: "ru-do-svidaniya",
        term: "До свидания",
        translation: "Goodbye",
        pronunciation: "dah svee-DAH-nyah",
      },
    ],
    phrases: [
      {
        id: "ru-phrase-hello",
        text: "Привет! Как дела?",
        translation: "Hi! How are you?",
      },
      {
        id: "ru-phrase-bye",
        text: "До свидания, увидимся!",
        translation: "Goodbye, see you!",
      },
    ],
    activities: [
      {
        id: "russian-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "russian-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "russian-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Privet! Привет is an informal hello in Russian. The formal version is Здравствуйте. Can you try saying привет?",
      systemContext:
        "You are a warm Russian teacher. The student is a beginner on the Hello & Goodbye lesson. Only teach привет, здравствуйте, до свидания. Speak mostly in English, introduce Russian slowly, and keep replies to one or two short sentences.",
      focusAreas: ["привет", "здравствуйте", "до свидания", "formal vs informal"],
    },
  },
  {
    id: "russian-lesson-2",
    languageId: "russian",
    unitId: "russian-unit-1",
    title: "Please & Thank You",
    description: "Be polite with пожалуйста and спасибо.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in Russian.",
      outcomes: ["Say please and thank you", "Respond with не за что"],
    },
    vocabulary: [
      {
        id: "ru-pozhaluysta",
        term: "Пожалуйста",
        translation: "Please / You're welcome",
        pronunciation: "pah-ZHAH-loo-stah",
      },
      {
        id: "ru-spasibo",
        term: "Спасибо",
        translation: "Thank you",
        pronunciation: "spah-SEE-bah",
      },
      {
        id: "ru-ne-za-chto",
        term: "Не за что",
        translation: "You're welcome",
        pronunciation: "nyeh zah SHTOH",
      },
    ],
    phrases: [
      {
        id: "ru-phrase-thanks",
        text: "Большое спасибо.",
        translation: "Thank you very much.",
      },
      {
        id: "ru-phrase-tea",
        text: "Чай, пожалуйста.",
        translation: "Tea, please.",
        context: "Ordering at a café",
      },
    ],
    activities: [
      {
        id: "russian-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn пожалуйста, спасибо, and не за что.",
      },
      {
        id: "russian-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in Russian.",
      },
      {
        id: "russian-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a café.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Spasibo means thank you — you'll use it all the time! And пожалуйста is please. Try saying чай, пожалуйста!",
      systemContext:
        "You are a friendly Russian teacher covering only пожалуйста, спасибо, не за что. Short English explanations, ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["пожалуйста", "спасибо", "не за что", "café ordering"],
    },
  },
  {
    id: "russian-lesson-3",
    languageId: "russian",
    unitId: "russian-unit-1",
    title: "Numbers 1–5",
    description: "Count from один to пять.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Russian.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "ru-odin", term: "Один", translation: "One", pronunciation: "ah-DEEN" },
      { id: "ru-dva", term: "Два", translation: "Two", pronunciation: "dvah" },
      { id: "ru-tri", term: "Три", translation: "Three", pronunciation: "tree" },
      { id: "ru-chetyre", term: "Четыре", translation: "Four", pronunciation: "cheh-TIH-ryeh" },
      { id: "ru-pyat", term: "Пять", translation: "Five", pronunciation: "pyaht" },
    ],
    phrases: [
      {
        id: "ru-phrase-count",
        text: "Один, два, три…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "russian-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers один through пять.",
      },
      {
        id: "russian-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "russian-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in Russian! One is один, two is два. Together: один, два, три. Your turn!",
      systemContext:
        "You are an energetic Russian teacher covering only numbers 1–5 (один, два, три, четыре, пять). Speak mostly English, teach one number at a time. Do not teach other topics.",
      focusAreas: ["один", "два", "три", "четыре", "пять", "counting aloud"],
    },
  },
  {
    id: "russian-lesson-4",
    languageId: "russian",
    unitId: "russian-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in Russian.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: ["Say меня зовут…", "Ask как вас зовут?"],
    },
    vocabulary: [
      {
        id: "ru-menya-zovut",
        term: "Меня зовут",
        translation: "My name is",
        pronunciation: "MYEH-nyah zah-VOOT",
      },
      {
        id: "ru-kak-vas-zovut",
        term: "Как вас зовут?",
        translation: "What's your name?",
        pronunciation: "kahk vahs zah-VOOT",
      },
    ],
    phrases: [
      {
        id: "ru-phrase-intro",
        text: "Меня зовут Анна. Приятно познакомиться.",
        translation: "My name is Anna. Nice to meet you.",
      },
      {
        id: "ru-phrase-nice",
        text: "Приятно познакомиться.",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "russian-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn меня зовут and как вас зовут?",
      },
      {
        id: "russian-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "russian-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? Меня зовут means my name is — then say your name. What's your name? Try the full phrase!",
      systemContext:
        "You are a Russian teacher focused on меня зовут, как вас зовут?, приятно познакомиться. Mostly English, one or two sentences per reply.",
      focusAreas: ["меня зовут", "как вас зовут?", "приятно познакомиться"],
    },
  },
  {
    id: "russian-lesson-5",
    languageId: "russian",
    unitId: "russian-unit-2",
    title: "How Are You?",
    description: "Ask and answer как дела?",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: ["Ask как дела?", "Answer with хорошо"],
    },
    vocabulary: [
      {
        id: "ru-kak-dela",
        term: "Как дела?",
        translation: "How are you?",
        pronunciation: "kahk dee-LAH",
      },
      {
        id: "ru-khorosho",
        term: "Хорошо",
        translation: "Good / fine",
        pronunciation: "hah-rah-SHOH",
      },
      {
        id: "ru-neplokho",
        term: "Неплохо",
        translation: "Not bad",
        pronunciation: "nyeh-PLOH-hah",
      },
    ],
    phrases: [
      {
        id: "ru-phrase-fine",
        text: "Хорошо, спасибо.",
        translation: "Fine, thank you.",
      },
      {
        id: "ru-phrase-you",
        text: "А у тебя?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "russian-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn как дела? and хорошо.",
      },
      {
        id: "russian-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to как дела? out loud.",
      },
      {
        id: "russian-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Как дела? means how are you? If you're doing well, say хорошо. How are you today? Try answering in Russian!",
      systemContext:
        "You are a Russian teacher teaching only как дела?, хорошо, неплохо, а у тебя. Warm and encouraging. Mostly English. One or two sentences max per turn.",
      focusAreas: ["как дела?", "хорошо", "неплохо", "а у тебя"],
    },
  },

  // ── German · Unit 1 ───────────────────────────────────────────────
  {
    id: "german-lesson-1",
    languageId: "german",
    unitId: "german-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first German greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in German.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Use guten Morgen for good morning",
      ],
    },
    vocabulary: [
      {
        id: "de-hallo",
        term: "Hallo",
        translation: "Hello",
        pronunciation: "HAH-loh",
        example: "Hallo, wie geht's?",
      },
      {
        id: "de-auf-wiedersehen",
        term: "Auf Wiedersehen",
        translation: "Goodbye",
        pronunciation: "owf VEE-der-zay-en",
      },
      {
        id: "de-guten-morgen",
        term: "Guten Morgen",
        translation: "Good morning",
        pronunciation: "GOO-ten MOR-gen",
      },
    ],
    phrases: [
      {
        id: "de-phrase-hello",
        text: "Hallo! Wie geht's?",
        translation: "Hello! How are you?",
      },
      {
        id: "de-phrase-bye",
        text: "Auf Wiedersehen, bis morgen!",
        translation: "Goodbye, see you tomorrow!",
      },
    ],
    activities: [
      {
        id: "german-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "german-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "german-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Hallo! That's hello in German — easy, right? Guten Morgen is good morning. Can you try saying hallo?",
      systemContext:
        "You are a warm German teacher. The student is a beginner on the Hello & Goodbye lesson. Only teach hallo, auf Wiedersehen, guten Morgen. Speak mostly in English, introduce German slowly, and keep replies to one or two short sentences.",
      focusAreas: ["hallo", "auf Wiedersehen", "guten Morgen"],
    },
  },
  {
    id: "german-lesson-2",
    languageId: "german",
    unitId: "german-unit-1",
    title: "Please & Thank You",
    description: "Be polite with bitte and danke.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in German.",
      outcomes: ["Say please and thank you", "Respond with bitte schön"],
    },
    vocabulary: [
      {
        id: "de-bitte",
        term: "Bitte",
        translation: "Please / You're welcome",
        pronunciation: "BIT-tuh",
      },
      {
        id: "de-danke",
        term: "Danke",
        translation: "Thank you",
        pronunciation: "DAHN-kuh",
      },
      {
        id: "de-bitte-schoen",
        term: "Bitte schön",
        translation: "You're welcome",
        pronunciation: "BIT-tuh shurn",
      },
    ],
    phrases: [
      {
        id: "de-phrase-thanks",
        text: "Danke schön.",
        translation: "Thank you very much.",
      },
      {
        id: "de-phrase-coffee",
        text: "Einen Kaffee, bitte.",
        translation: "A coffee, please.",
        context: "Ordering at a café",
      },
    ],
    activities: [
      {
        id: "german-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn bitte, danke, and bitte schön.",
      },
      {
        id: "german-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in German.",
      },
      {
        id: "german-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a café.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Danke means thank you! And bitte is please — or you're welcome. Try saying einen Kaffee, bitte!",
      systemContext:
        "You are a friendly German teacher covering only bitte, danke, bitte schön. Short English explanations, ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["bitte", "danke", "bitte schön", "café ordering"],
    },
  },
  {
    id: "german-lesson-3",
    languageId: "german",
    unitId: "german-unit-1",
    title: "Numbers 1–5",
    description: "Count from eins to fünf.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in German.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "de-eins", term: "Eins", translation: "One", pronunciation: "ines" },
      { id: "de-zwei", term: "Zwei", translation: "Two", pronunciation: "tsvy" },
      { id: "de-drei", term: "Drei", translation: "Three", pronunciation: "dry" },
      { id: "de-vier", term: "Vier", translation: "Four", pronunciation: "feer" },
      { id: "de-fuenf", term: "Fünf", translation: "Five", pronunciation: "fuenf" },
    ],
    phrases: [
      {
        id: "de-phrase-count",
        text: "Eins, zwei, drei…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "german-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers eins through fünf.",
      },
      {
        id: "german-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "german-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in German! Eins is one, zwei is two. Together: eins, zwei, drei. Your turn!",
      systemContext:
        "You are an energetic German teacher covering only numbers 1–5 (eins, zwei, drei, vier, fünf). Speak mostly English, teach one number at a time. Do not teach other topics.",
      focusAreas: ["eins", "zwei", "drei", "vier", "fünf", "counting aloud"],
    },
  },
  {
    id: "german-lesson-4",
    languageId: "german",
    unitId: "german-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in German.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: ["Say ich heiße…", "Ask wie heißt du?"],
    },
    vocabulary: [
      {
        id: "de-ich-heisse",
        term: "Ich heiße",
        translation: "My name is / I'm called",
        pronunciation: "ikh HI-suh",
      },
      {
        id: "de-wie-heisst-du",
        term: "Wie heißt du?",
        translation: "What's your name?",
        pronunciation: "vee HIST doo",
      },
    ],
    phrases: [
      {
        id: "de-phrase-intro",
        text: "Ich heiße Anna. Freut mich.",
        translation: "My name is Anna. Nice to meet you.",
      },
      {
        id: "de-phrase-nice",
        text: "Freut mich.",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "german-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn ich heiße and wie heißt du?",
      },
      {
        id: "german-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "german-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? Ich heiße means my name is — then say your name. What's your name? Try the full phrase!",
      systemContext:
        "You are a German teacher focused on ich heiße, wie heißt du?, freut mich. Mostly English, one or two sentences per reply.",
      focusAreas: ["ich heiße", "wie heißt du?", "freut mich"],
    },
  },
  {
    id: "german-lesson-5",
    languageId: "german",
    unitId: "german-unit-2",
    title: "How Are You?",
    description: "Ask and answer wie geht's?",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: ["Ask wie geht's?", "Answer with gut"],
    },
    vocabulary: [
      {
        id: "de-wie-gehts",
        term: "Wie geht's?",
        translation: "How are you?",
        pronunciation: "vee gayts",
      },
      {
        id: "de-gut",
        term: "Gut",
        translation: "Good / fine",
        pronunciation: "goot",
      },
      {
        id: "de-nicht-schlecht",
        term: "Nicht schlecht",
        translation: "Not bad",
        pronunciation: "nikht shlekt",
      },
    ],
    phrases: [
      {
        id: "de-phrase-fine",
        text: "Mir geht's gut, danke.",
        translation: "I'm fine, thank you.",
      },
      {
        id: "de-phrase-you",
        text: "Und dir?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "german-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn wie geht's? and gut.",
      },
      {
        id: "german-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to wie geht's? out loud.",
      },
      {
        id: "german-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Wie geht's? means how are you? If you're doing well, say mir geht's gut. How are you today? Try answering in German!",
      systemContext:
        "You are a German teacher teaching only wie geht's?, gut, nicht schlecht, und dir. Warm and encouraging. Mostly English. One or two sentences max per turn.",
      focusAreas: ["wie geht's?", "gut", "nicht schlecht", "und dir"],
    },
  },

  // ── Italian · Unit 1 ──────────────────────────────────────────────
  {
    id: "italian-lesson-1",
    languageId: "italian",
    unitId: "italian-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first Italian greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in Italian.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Use buongiorno for good morning",
      ],
    },
    vocabulary: [
      {
        id: "it-ciao",
        term: "Ciao",
        translation: "Hi / Bye (informal)",
        pronunciation: "CHOW",
        example: "Ciao, come stai?",
      },
      {
        id: "it-arrivederci",
        term: "Arrivederci",
        translation: "Goodbye",
        pronunciation: "ah-ree-veh-DER-chee",
      },
      {
        id: "it-buongiorno",
        term: "Buongiorno",
        translation: "Good morning / Good day",
        pronunciation: "bwohn-JOR-noh",
      },
    ],
    phrases: [
      {
        id: "it-phrase-hello",
        text: "Ciao! Come stai?",
        translation: "Hi! How are you?",
      },
      {
        id: "it-phrase-bye",
        text: "Arrivederci, a domani!",
        translation: "Goodbye, see you tomorrow!",
      },
    ],
    activities: [
      {
        id: "italian-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "italian-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "italian-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ciao! That's hello — and goodbye — in Italian. Buongiorno is good morning. Can you try saying ciao?",
      systemContext:
        "You are a warm Italian teacher. The student is a beginner on the Hello & Goodbye lesson. Only teach ciao, arrivederci, buongiorno. Speak mostly in English, introduce Italian slowly, and keep replies to one or two short sentences.",
      focusAreas: ["ciao", "arrivederci", "buongiorno"],
    },
  },
  {
    id: "italian-lesson-2",
    languageId: "italian",
    unitId: "italian-unit-1",
    title: "Please & Thank You",
    description: "Be polite with per favore and grazie.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in Italian.",
      outcomes: ["Say please and thank you", "Respond with prego"],
    },
    vocabulary: [
      {
        id: "it-per-favore",
        term: "Per favore",
        translation: "Please",
        pronunciation: "pehr fah-VOH-reh",
      },
      {
        id: "it-grazie",
        term: "Grazie",
        translation: "Thank you",
        pronunciation: "GRAH-tsee-eh",
      },
      {
        id: "it-prego",
        term: "Prego",
        translation: "You're welcome",
        pronunciation: "PREH-goh",
      },
    ],
    phrases: [
      {
        id: "it-phrase-thanks",
        text: "Grazie mille.",
        translation: "Thank you very much.",
      },
      {
        id: "it-phrase-coffee",
        text: "Un caffè, per favore.",
        translation: "A coffee, please.",
        context: "Ordering at a café",
      },
    ],
    activities: [
      {
        id: "italian-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn per favore, grazie, and prego.",
      },
      {
        id: "italian-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in Italian.",
      },
      {
        id: "italian-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a café.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Grazie means thank you! And per favore is please. Try saying un caffè, per favore!",
      systemContext:
        "You are a friendly Italian teacher covering only per favore, grazie, prego. Short English explanations, ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["per favore", "grazie", "prego", "café ordering"],
    },
  },
  {
    id: "italian-lesson-3",
    languageId: "italian",
    unitId: "italian-unit-1",
    title: "Numbers 1–5",
    description: "Count from uno to cinque.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Italian.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "it-uno", term: "Uno", translation: "One", pronunciation: "OO-noh" },
      { id: "it-due", term: "Due", translation: "Two", pronunciation: "DOO-eh" },
      { id: "it-tre", term: "Tre", translation: "Three", pronunciation: "treh" },
      { id: "it-quattro", term: "Quattro", translation: "Four", pronunciation: "KWAH-troh" },
      { id: "it-cinque", term: "Cinque", translation: "Five", pronunciation: "CHEEN-kweh" },
    ],
    phrases: [
      {
        id: "it-phrase-count",
        text: "Uno, due, tre…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "italian-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers uno through cinque.",
      },
      {
        id: "italian-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "italian-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in Italian! Uno is one, due is two. Together: uno, due, tre. Your turn!",
      systemContext:
        "You are an energetic Italian teacher covering only numbers 1–5 (uno, due, tre, quattro, cinque). Speak mostly English, teach one number at a time. Do not teach other topics.",
      focusAreas: ["uno", "due", "tre", "quattro", "cinque", "counting aloud"],
    },
  },
  {
    id: "italian-lesson-4",
    languageId: "italian",
    unitId: "italian-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in Italian.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: ["Say mi chiamo…", "Ask come ti chiami?"],
    },
    vocabulary: [
      {
        id: "it-mi-chiamo",
        term: "Mi chiamo",
        translation: "My name is",
        pronunciation: "mee kee-AH-moh",
      },
      {
        id: "it-come-ti-chiami",
        term: "Come ti chiami?",
        translation: "What's your name?",
        pronunciation: "KOH-meh tee kee-AH-mee",
      },
    ],
    phrases: [
      {
        id: "it-phrase-intro",
        text: "Mi chiamo Marco. Piacere.",
        translation: "My name is Marco. Nice to meet you.",
      },
      {
        id: "it-phrase-nice",
        text: "Piacere.",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "italian-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn mi chiamo and come ti chiami?",
      },
      {
        id: "italian-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "italian-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? Mi chiamo means my name is — then say your name. What's your name? Try the full phrase!",
      systemContext:
        "You are an Italian teacher focused on mi chiamo, come ti chiami?, piacere. Mostly English, one or two sentences per reply.",
      focusAreas: ["mi chiamo", "come ti chiami?", "piacere"],
    },
  },
  {
    id: "italian-lesson-5",
    languageId: "italian",
    unitId: "italian-unit-2",
    title: "How Are You?",
    description: "Ask and answer come stai?",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: ["Ask come stai?", "Answer with bene"],
    },
    vocabulary: [
      {
        id: "it-come-stai",
        term: "Come stai?",
        translation: "How are you?",
        pronunciation: "KOH-meh stye",
      },
      {
        id: "it-bene",
        term: "Bene",
        translation: "Well / fine",
        pronunciation: "BEH-neh",
      },
      {
        id: "it-cosi-cosi",
        term: "Così così",
        translation: "So-so",
        pronunciation: "koh-zee koh-zee",
      },
    ],
    phrases: [
      {
        id: "it-phrase-fine",
        text: "Sto bene, grazie.",
        translation: "I'm fine, thank you.",
      },
      {
        id: "it-phrase-you",
        text: "E tu?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "italian-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn come stai? and bene.",
      },
      {
        id: "italian-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to come stai? out loud.",
      },
      {
        id: "italian-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Come stai? means how are you? If you're doing well, say sto bene. How are you today? Try answering in Italian!",
      systemContext:
        "You are an Italian teacher teaching only come stai?, bene, così così, e tu. Warm and encouraging. Mostly English. One or two sentences max per turn.",
      focusAreas: ["come stai?", "bene", "così così", "e tu"],
    },
  },

  // ── Portuguese (Brazil) · Unit 1 ──────────────────────────────────
  {
    id: "portuguese-lesson-1",
    languageId: "portuguese",
    unitId: "portuguese-unit-1",
    title: "Hello & Goodbye",
    description: "Learn your first Brazilian Portuguese greetings.",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "palace",
    goal: {
      summary: "Greet someone and say goodbye in Brazilian Portuguese.",
      outcomes: [
        "Say hello and goodbye in common situations",
        "Use bom dia for good morning",
      ],
    },
    vocabulary: [
      {
        id: "pt-ola",
        term: "Olá",
        translation: "Hello",
        pronunciation: "oh-LAH",
        example: "Olá, tudo bem?",
      },
      {
        id: "pt-tchau",
        term: "Tchau",
        translation: "Bye",
        pronunciation: "chow",
      },
      {
        id: "pt-bom-dia",
        term: "Bom dia",
        translation: "Good morning",
        pronunciation: "bohm JEE-ah",
      },
    ],
    phrases: [
      {
        id: "pt-phrase-hello",
        text: "Olá! Tudo bem?",
        translation: "Hello! How are you?",
      },
      {
        id: "pt-phrase-bye",
        text: "Tchau, até amanhã!",
        translation: "Bye, see you tomorrow!",
      },
    ],
    activities: [
      {
        id: "portuguese-lesson-1-vocab",
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Tap each card to hear and memorize the greeting.",
      },
      {
        id: "portuguese-lesson-1-phrases",
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: "portuguese-lesson-1-ai",
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: "Practice greetings in a short conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Olá! That's hello in Brazilian Portuguese. Bom dia is good morning. Can you try saying olá?",
      systemContext:
        "You are a warm Brazilian Portuguese teacher. The student is a beginner on the Hello & Goodbye lesson. Only teach olá, tchau, bom dia. Speak mostly in English, introduce Portuguese slowly, and keep replies to one or two short sentences.",
      focusAreas: ["olá", "tchau", "bom dia"],
    },
  },
  {
    id: "portuguese-lesson-2",
    languageId: "portuguese",
    unitId: "portuguese-unit-1",
    title: "Please & Thank You",
    description: "Be polite with por favor and obrigado/a.",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    imageKey: "treasure",
    goal: {
      summary: "Use basic polite expressions in Brazilian Portuguese.",
      outcomes: ["Say please and thank you", "Respond with de nada"],
    },
    vocabulary: [
      {
        id: "pt-por-favor",
        term: "Por favor",
        translation: "Please",
        pronunciation: "por fah-VOR",
      },
      {
        id: "pt-obrigado",
        term: "Obrigado / Obrigada",
        translation: "Thank you",
        pronunciation: "oh-bree-GAH-doo / oh-bree-GAH-dah",
      },
      {
        id: "pt-de-nada",
        term: "De nada",
        translation: "You're welcome",
        pronunciation: "dee NAH-dah",
      },
    ],
    phrases: [
      {
        id: "pt-phrase-thanks",
        text: "Muito obrigado.",
        translation: "Thank you very much.",
      },
      {
        id: "pt-phrase-juice",
        text: "Um suco, por favor.",
        translation: "A juice, please.",
        context: "Ordering at a lanchonete",
      },
    ],
    activities: [
      {
        id: "portuguese-lesson-2-vocab",
        type: "vocabulary",
        title: "Polite words",
        instruction: "Learn por favor, obrigado/a, and de nada.",
      },
      {
        id: "portuguese-lesson-2-speaking",
        type: "speaking",
        title: "Say it out loud",
        instruction: "Order a drink politely in Portuguese.",
      },
      {
        id: "portuguese-lesson-2-ai",
        type: "ai_teacher",
        title: "AI teacher practice",
        instruction: "Role-play ordering at a snack bar.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Obrigado or obrigada means thank you — men say obrigado, women say obrigada. Por favor is please. Try um suco, por favor!",
      systemContext:
        "You are a friendly Brazilian Portuguese teacher covering only por favor, obrigado/obrigada, de nada. Explain gender briefly. Short English explanations, ask the student to repeat. Stay on this lesson only.",
      focusAreas: ["por favor", "obrigado/obrigada", "de nada", "ordering"],
    },
  },
  {
    id: "portuguese-lesson-3",
    languageId: "portuguese",
    unitId: "portuguese-unit-1",
    title: "Numbers 1–5",
    description: "Count from um to cinco.",
    order: 3,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Count from one to five in Brazilian Portuguese.",
      outcomes: ["Say numbers 1–5", "Use numbers in simple phrases"],
    },
    vocabulary: [
      { id: "pt-um", term: "Um", translation: "One", pronunciation: "oom" },
      { id: "pt-dois", term: "Dois", translation: "Two", pronunciation: "doysh" },
      { id: "pt-tres", term: "Três", translation: "Three", pronunciation: "trehs" },
      { id: "pt-quatro", term: "Quatro", translation: "Four", pronunciation: "KWAH-troh" },
      { id: "pt-cinco", term: "Cinco", translation: "Five", pronunciation: "SEEN-koo" },
    ],
    phrases: [
      {
        id: "pt-phrase-count",
        text: "Um, dois, três…",
        translation: "One, two, three…",
      },
    ],
    activities: [
      {
        id: "portuguese-lesson-3-vocab",
        type: "vocabulary",
        title: "Learn to count",
        instruction: "Practice numbers um through cinco.",
      },
      {
        id: "portuguese-lesson-3-listening",
        type: "listening",
        title: "Listen and repeat",
        instruction: "Hear each number and say it back.",
      },
      {
        id: "portuguese-lesson-3-ai",
        type: "ai_teacher",
        title: "Count with your teacher",
        instruction: "Count together and use numbers in a sentence.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Let's count in Portuguese! Um is one, dois is two. Together: um, dois, três. Your turn!",
      systemContext:
        "You are an energetic Brazilian Portuguese teacher covering only numbers 1–5 (um, dois, três, quatro, cinco). Speak mostly English, teach one number at a time. Do not teach other topics.",
      focusAreas: ["um", "dois", "três", "quatro", "cinco", "counting aloud"],
    },
  },
  {
    id: "portuguese-lesson-4",
    languageId: "portuguese",
    unitId: "portuguese-unit-2",
    title: "My Name Is…",
    description: "Introduce yourself in Brazilian Portuguese.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: "treasure",
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      outcomes: ["Say me chamo…", "Ask como você se chama?"],
    },
    vocabulary: [
      {
        id: "pt-me-chamo",
        term: "Me chamo",
        translation: "My name is / I'm called",
        pronunciation: "mee SHAH-moo",
      },
      {
        id: "pt-como-se-chama",
        term: "Como você se chama?",
        translation: "What's your name?",
        pronunciation: "KOH-moo voh-SEH see SHAH-mah",
      },
    ],
    phrases: [
      {
        id: "pt-phrase-intro",
        text: "Me chamo Ana. Prazer em conhecê-lo.",
        translation: "My name is Ana. Nice to meet you.",
      },
      {
        id: "pt-phrase-nice",
        text: "Prazer.",
        translation: "Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "portuguese-lesson-4-vocab",
        type: "vocabulary",
        title: "Introduction words",
        instruction: "Learn me chamo and como você se chama?",
      },
      {
        id: "portuguese-lesson-4-phrases",
        type: "phrases",
        title: "Introduce yourself",
        instruction: "Practice a full introduction.",
      },
      {
        id: "portuguese-lesson-4-ai",
        type: "ai_teacher",
        title: "Meet your teacher",
        instruction: "Have a short introduction conversation.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Ready to introduce yourself? Me chamo means my name is — then say your name. What's your name? Try the full phrase!",
      systemContext:
        "You are a Brazilian Portuguese teacher focused on me chamo, como você se chama?, prazer. Mostly English, one or two sentences per reply.",
      focusAreas: ["me chamo", "como você se chama?", "prazer"],
    },
  },
  {
    id: "portuguese-lesson-5",
    languageId: "portuguese",
    unitId: "portuguese-unit-2",
    title: "How Are You?",
    description: "Ask and answer tudo bem?",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 6,
    imageKey: "palace",
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      outcomes: ["Ask tudo bem?", "Answer with estou bem"],
    },
    vocabulary: [
      {
        id: "pt-tudo-bem",
        term: "Tudo bem?",
        translation: "How are you? / Everything good?",
        pronunciation: "TOO-doo baym",
      },
      {
        id: "pt-estou-bem",
        term: "Estou bem",
        translation: "I'm fine",
        pronunciation: "ehs-TOH baym",
      },
      {
        id: "pt-mais-ou-menos",
        term: "Mais ou menos",
        translation: "So-so",
        pronunciation: "myce oh MEH-noosh",
      },
    ],
    phrases: [
      {
        id: "pt-phrase-fine",
        text: "Estou bem, obrigado.",
        translation: "I'm fine, thank you.",
      },
      {
        id: "pt-phrase-you",
        text: "E você?",
        translation: "And you?",
      },
    ],
    activities: [
      {
        id: "portuguese-lesson-5-vocab",
        type: "vocabulary",
        title: "Feelings words",
        instruction: "Learn tudo bem? and estou bem.",
      },
      {
        id: "portuguese-lesson-5-speaking",
        type: "speaking",
        title: "Answer the question",
        instruction: "Respond to tudo bem? out loud.",
      },
      {
        id: "portuguese-lesson-5-ai",
        type: "ai_teacher",
        title: "Check in conversation",
        instruction: "Chat about how you're doing today.",
      },
    ],
    aiTeacher: {
      kickoff:
        "Tudo bem? is how Brazilians ask how you're doing — literally everything good? If you're fine, say estou bem. How are you today? Try answering in Portuguese!",
      systemContext:
        "You are a Brazilian Portuguese teacher teaching only tudo bem?, estou bem, mais ou menos, e você. Warm and encouraging. Mostly English. One or two sentences max per turn.",
      focusAreas: ["tudo bem?", "estou bem", "mais ou menos", "e você"],
    },
  },
];
