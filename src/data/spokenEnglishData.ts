export interface SpokenExample {
  english: string;
  hindi: string;
  pronunciationHint?: string;
  tip?: string;
}

export interface RuleAndFormula {
  ruleTitle: string;
  explanationHindi: string;
  formulaOrStructure?: string;
  examples: SpokenExample[];
}

export interface DialogueSpeaker {
  speaker: string;
  textEnglish: string;
  textHindi: string;
}

export interface PracticalDialogue {
  situation: string;
  speakers: DialogueSpeaker[];
}

export interface SpokenVocabulary {
  word: string;
  phonetic: string;
  hindiMeaning: string;
  exampleSentence: string;
  sentenceHindi: string;
}

export interface CommonMistakeFixed {
  wrong: string;
  correct: string;
  whyWrongHindi: string;
}

export interface InteractiveQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SpokenLesson {
  id: string;
  number: number;
  titleHindi: string;
  titleEnglish: string;
  tagline: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  topics: string[];
  deepExplanation: {
    introduction: string;
    rulesAndFormulas: RuleAndFormula[];
    practicalDialogues?: PracticalDialogue[];
    vocabularyList?: SpokenVocabulary[];
    commonMistakesFixed?: CommonMistakeFixed[];
    fluencyTip?: string;
  };
  interactiveQuiz: InteractiveQuizQuestion[];
}

export const SPOKEN_ENGLISH_LESSONS: SpokenLesson[] = [
  // ================= LESSON 1 =================
  {
    id: 'lesson-1-foundations-phonetics',
    number: 1,
    titleHindi: 'ध्वनि, उच्चारण और बातचीत की शुरुआत',
    titleEnglish: 'Phonetics, Pronunciation & Courteous Greetings',
    tagline: 'अंग्रेजी की सही आवाज़, मूक अक्षर (Silent Letters) और बुनियादी शिष्टाचार',
    level: 'Beginner',
    durationMinutes: 25,
    topics: [
      'अंग्रेजी में 44 ध्वनियां (44 Phonemes)',
      'साइलेंट लेटर्स के अचूक नियम (K, B, W, L, G, H, P)',
      '\'The\' का सही उच्चारण: \'दा\' कब और \'दी\' कब?',
      'अभिवादन (Greetings) एवं शिष्टाचार के जादुई शब्द'
    ],
    deepExplanation: {
      introduction: 'अंग्रेजी बोलते समय सबसे पहली रुकावट सही उच्चारण (Pronunciation) और हिचकिचाहट होती है। अंग्रेजी में 26 अक्षर (Letters) होते हैं लेकिन उनसे 44 प्रकार की ध्वनियाँ (Sounds) निकलती हैं। इसलिए जैसा लिखा होता है, हमेशा वैसा ही नहीं बोला जाता। इस पाठ में हम उच्चारण के गुप्त नियम और दैनिक बातचीत के शुरुआती शिष्टाचार सीखेंगे ताकि आपकी शुरुआत ही आत्मविश्वास से हो।',
      rulesAndFormulas: [
        {
          ruleTitle: 'नियम 1: Silent Letters (मूक अक्षर) के 5 महत्वपूर्ण नियम',
          explanationHindi: 'अंग्रेजी में कई अक्षरों को लिखा जाता है लेकिन बोला नहीं जाता। इन्हें पहचानना बहुत आसान है:',
          formulaOrStructure: 'K + N = K silent | M + B = B silent | W + R = W silent | L + K/M/F = L silent',
          examples: [
            { english: 'Knight / Knowledge / Knee', hindi: 'नाइट / नॉलेज / नी (K का उच्चारण नहीं होता)', pronunciationHint: 'ना-इट, नॉ-लेज, नी', tip: 'जब भी N से ठीक पहले K आये, तो K चुप रहता है।' },
            { english: 'Doubt / Debt / Comb / Thumb', hindi: 'डाउट / डेट / कोम / थम (B का उच्चारण नहीं होता)', pronunciationHint: 'डा-उट, डेट, कोम, थम', tip: 'M के बाद या T से पहले B अक्सर साइलेंट रहता है।' },
            { english: 'Wrong / Write / Wrap', hindi: 'रॉन्ग / राइट / रैप (W का उच्चारण नहीं होता)', pronunciationHint: 'रॉन्ग, राइट, रैप', tip: 'जब R से ठीक पहले W आये तो W नहीं बोलते।' },
            { english: 'Half / Talk / Walk / Calm', hindi: 'हाफ / टॉक / वॉक / काम (L का उच्चारण नहीं होता)', pronunciationHint: 'हाफ, टॉक, वॉक, काम', tip: 'K, M, F, D से पहले आने वाला L साइलेंट रहता है।' }
          ]
        },
        {
          ruleTitle: 'नियम 2: \'THE\' को \'दा\' बोलें या \'दी\'?',
          explanationHindi: 'अक्सर लोग भ्रमित रहते हैं कि \'THE\' को कब "दा" (Duh) और कब "दी" (Thee) कहना चाहिए:',
          formulaOrStructure: 'Vowel Sound (स्वर ध्वनि: अ, आ, इ, ई, ए, ओ) से पहले = "दी" (Thee) | Consonant Sound (व्यंजन) से पहले = "दा" (Duh)',
          examples: [
            { english: 'The Apple / The Elephant / The Earth', hindi: 'दी एप्पल / दी एलिफेंट / दी अर्थ', pronunciationHint: 'दी', tip: 'Vowel ध्वनि (A, E, I, O, U) से शब्द शुरू हो तो \'दी\' बोलें।' },
            { english: 'The Book / The Pen / The Teacher', hindi: 'दा बुक / दा पेन / दा टीचर', pronunciationHint: 'दा', tip: 'Consonant ध्वनि से शब्द शुरू हो तो \'दा\' बोलें।' },
            { english: 'The End of the movie', hindi: 'दी एंड (क्योंकि End स्वर ध्वनि \'ए\' से शुरू होता है)', pronunciationHint: 'दी एंड', tip: 'फिल्मों के अंत में हमेशा "दी एंड" ही बोला जाता है।' }
          ]
        },
        {
          ruleTitle: 'नियम 3: दिन के समय के अनुसार सही Greeting',
          explanationHindi: 'अंग्रेजी में समय के अनुसार सही अभिवादन करना आत्मविश्वास और अच्छे शिष्टाचार की पहचान है:',
          formulaOrStructure: 'सुबह से दोपहर 12 बजे तक: Good Morning | दोपहर 12 से शाम 5 बजे तक: Good Afternoon | शाम 5 बजे से रात तक मिलने पर: Good Evening | रात को विदा लेते समय: Good Night',
          examples: [
            { english: 'Good morning, Sir! How are you today?', hindi: 'शुभ प्रभात, सर! आज आप कैसे हैं?', pronunciationHint: 'गुड मॉर्निंग, सर! हाउ आर यू टुडे?' },
            { english: 'Good afternoon, everyone! Welcome to the class.', hindi: 'शुभ दोपहर, आप सभी का कक्षा में स्वागत है।', pronunciationHint: 'गुड आफ्टरनून, एवरीवन!' },
            { english: 'Good evening! It is nice to see you.', hindi: 'शुभ संध्या! आपसे मिलकर अच्छा लगा। (रात में 8 या 9 बजे भी मिलने पर Good Evening ही कहा जाता है)', pronunciationHint: 'गुड ईवनिंग!' },
            { english: 'Good night, take care! See you tomorrow.', hindi: 'शुभ रात्रि, अपना ध्यान रखें! कल मिलते हैं। (Good Night केवल अंतिम विदाई पर बोला जाता है)', pronunciationHint: 'गुड नाइट, टेक केयर!' }
          ]
        },
        {
          ruleTitle: 'नियम 4: 6 जादुई शिष्टाचार शब्द (The 6 Magic Polite Words)',
          explanationHindi: 'किसी भी बात को मधुर और प्रभावशाली बनाने के लिए इन 6 शब्दों का सही उपयोग करें:',
          examples: [
            { english: 'Please', hindi: 'कृपया (अनुरोध करने पर)', tip: 'वाक्य: "Could you please pass me the pen?"' },
            { english: 'Thank you / Thanks a lot', hindi: 'धन्यवाद / बहुत-बहुत धन्यवाद', tip: 'उत्तर: "You are welcome!" या "My pleasure!"' },
            { english: 'Excuse me', hindi: 'माफ कीजिए (किसी का ध्यान आकर्षित करने या रास्ते से हटने का निवेदन करने हेतु)', tip: 'वाक्य: "Excuse me, what is the time?"' },
            { english: 'Pardon / Beg your pardon', hindi: 'क्षमा करें, क्या आप दोबारा कह सकते हैं? (जब किसी की बात सुनाई न दे)', tip: 'यह "What? What?" कहने से 100 गुना ज्यादा विनम्र है।' },
            { english: 'After you', hindi: 'पहले आप (दरवाजे में प्रवेश करते समय या लाइन में शिष्टाचार दिखाने पर)', tip: 'वाक्य: "Please go ahead, after you!"' },
            { english: 'Never mind / It does not matter', hindi: 'कोई बात नहीं, चिंता मत कीजिए', tip: 'जब कोई माफी मांगे और बात छोटी हो तो कहें: "Never mind, it\'s okay!"' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'सुबह कॉलेज या कोचिंग में शिक्षक एवं सहपाठी से पहली मुलाकात',
          speakers: [
            { speaker: 'Rahul (Student)', textEnglish: 'Good morning, sir! May I come in?', textHindi: 'शुभ प्रभात, सर! क्या मैं अंदर आ सकता हूँ?' },
            { speaker: 'Teacher', textEnglish: 'Good morning, Rahul! Yes, please come in and take your seat.', textHindi: 'शुभ प्रभात, राहुल! हाँ, कृपया अंदर आओ और अपनी सीट पर बैठो।' },
            { speaker: 'Rahul', textEnglish: 'Thank you very much, sir.', textHindi: 'आपका बहुत-बहुत धन्यवाद, सर।' },
            { speaker: 'Amit (Friend)', textEnglish: 'Hey Rahul, how is it going?', textHindi: 'अरे राहुल, सब कैसा चल रहा है?' },
            { speaker: 'Rahul', textEnglish: 'Everything is great, Amit! What about you?', textHindi: 'सब बहुत बढ़िया है, अमित! तुम्हारा क्या हाल है?' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Courteous', phonetic: 'ˈkɜː.ti.əs (कर्टीअस)', hindiMeaning: 'विनम्र / शिष्ट', exampleSentence: 'She is always very courteous to her elders.', sentenceHindi: 'वह अपने बड़ों के प्रति हमेशा बहुत विनम्र रहती है।' },
        { word: 'Hesitation', phonetic: 'ˌhez.ɪˈteɪ.ʃən (हेज़िटैशन)', hindiMeaning: 'हिचकिचाहट / संकोच', exampleSentence: 'Speak English without any hesitation.', sentenceHindi: 'बिना किसी संकोच के अंग्रेजी बोलें।' },
        { word: 'Pronunciation', phonetic: 'prəˌnʌn.siˈeɪ.ʃən (प्रनन्सिएशन)', hindiMeaning: 'उच्चारण (प्रोनाउंसिएशन नहीं)', exampleSentence: 'Correct pronunciation makes you sound fluent.', sentenceHindi: 'सही उच्चारण आपको धाराप्रवाह बनाता है।' },
        { word: 'Grateful', phonetic: 'ˈɡreɪt.fəl (ग्रेटफुल)', hindiMeaning: 'आभारी / कृतज्ञ', exampleSentence: 'I am extremely grateful for your help.', sentenceHindi: 'मैं आपकी मदद के लिए अत्यंत आभारी हूँ।' }
      ],
      commonMistakesFixed: [
        { wrong: 'Pronounciation (प्रोनाउंसिएशन बोलना)', correct: 'Pronunciation (प्रनन्सिएशन)', whyWrongHindi: 'Pronounce में \'noun\' होता है लेकिन Pronunciation की स्पेलिंग और उच्चारण में \'nun\' (नन) होता है।' },
        { wrong: 'Good night, sir! (शाम 8 बजे मिलने पर)', correct: 'Good evening, sir!', whyWrongHindi: 'रात में चाहे कितने भी बजे मिलें, मिलते समय Good Evening ही बोलते हैं। Good Night सिर्फ सोने जाते समय या अंतिम विदा लेते समय बोलते हैं।' },
        { wrong: 'What? What did you say? (बात समझ न आने पर)', correct: 'Pardon me? / Could you please repeat that?', whyWrongHindi: 'What कहना असभ्य लगता है, Pardon कहना अत्यंत शिष्ट और सम्मानीय है।' }
      ],
      fluencyTip: '🎯 Golden Rule 1: रोजाना शीशे (Mirror) के सामने खड़े होकर 2 मिनट तक Silent Letter वाले शब्दों को ज़ोर से बोलें: Knight, Doubt, Calm, Walk, Knowledge। अपनी आवाज़ खुद सुनने से जीभ की झिझक खत्म होती है।'
    },
    interactiveQuiz: [
      {
        question: 'रात को 8:30 बजे यदि आप किसी कार्यक्रम या दावत में किसी से मिलते हैं, तो सही अभिवादन क्या होगा?',
        options: ['Good night!', 'Good evening!', 'Good afternoon!', 'Sweet dreams!'],
        correctIndex: 1,
        explanation: 'रात में किसी से मिलते समय हमेशा "Good evening!" कहा जाता है। "Good night!" केवल विदा लेते समय या सोने जाते समय कहा जाता है।'
      },
      {
        question: 'निम्नलिखित में से किस शब्द में \'B\' अक्षर साइलेंट (मूक) है?',
        options: ['Ball', 'Doubt', 'Table', 'Bread'],
        correctIndex: 1,
        explanation: 'Doubt में B अक्षर मूक (Silent) होता है, इसे केवल \'डाउट\' उच्चारित किया जाता है।'
      },
      {
        question: 'यदि आपको सामने वाले की बात ठीक से सुनाई न दे, तो सबसे शिष्ट (Polite) तरीका क्या है?',
        options: ['What?', 'Speak loudly!', 'Pardon me?', 'Say again!'],
        correctIndex: 2,
        explanation: '"Pardon me?" या "I beg your pardon?" अंग्रेजी में सबसे शिष्ट और पेशेवर तरीका है।'
      }
    ]
  },

  // ================= LESSON 2 =================
  {
    id: 'lesson-2-self-introduction',
    number: 2,
    titleHindi: 'आत्म-परिचय और बातचीत शुरू करना',
    titleEnglish: 'Self-Introduction & Conversation Starters',
    tagline: '7-चरणीय मास्टर फॉर्मूला: कहीं भी बिना झिझक अपना परिचय देना सीखें',
    level: 'Beginner',
    durationMinutes: 30,
    topics: [
      '7-स्टेप सेल्फ-इंट्रोडक्शन मास्टर फॉर्मूला',
      'परीक्षा/इंटरव्यू बनाम दोस्तों में परिचय का अंतर',
      'अजनबियों से बात शुरू करने के 5 आइसब्रेकर वाक्य',
      'नाम और पता पूछने के आधुनिक और विनम्र तरीके'
    ],
    deepExplanation: {
      introduction: 'चाहे स्कूल/कॉलेज का पहला दिन हो, बोर्ड प्रैक्टिकल का वाइवा (Viva) हो, जॉब इंटरव्यू हो या किसी नए व्यक्ति से मिलना हो—"Tell me something about yourself" पहला सवाल होता है। 90% छात्र "Myself..." से शुरू करने की भयंकर भूल करते हैं। इस पाठ में हम सीखेंगे कि कैसे एक आत्मविश्वास से भरा, प्रभावी 30-सेकंड का परिचय दिया जाए।',
      rulesAndFormulas: [
        {
          ruleTitle: '7-चरणीय सेल्फ-इंट्रोडक्शन फॉर्मूला (The 7-Step Formula)',
          explanationHindi: 'अपना परिचय हमेशा इसी क्रम में दें, कभी कोई बिंदु नहीं छूटेगा:',
          formulaOrStructure: 'Step 1: Greeting ➔ Step 2: Name ➔ Step 3: Location ➔ Step 4: Qualification ➔ Step 5: Family ➔ Step 6: Hobbies ➔ Step 7: Closing',
          examples: [
            { english: 'Step 1 (Greeting): Good morning / afternoon respected sir and my dear friends.', hindi: 'आदरणीय सर एवं मेरे प्यारे मित्रों, शुभ प्रभात।' },
            { english: 'Step 2 (Name): My name is Samir Ali. (OR: I am Samir Ali.)', hindi: 'मेरा नाम समीर अली है। (कदापि "Myself Samir" न कहें)', tip: 'Myself एक Reflexive Pronoun है, यह कभी भी Subject नहीं बन सकता।' },
            { english: 'Step 3 (Location): I belong to Patna, Bihar. (OR: I am basically from Gaya, but currently living in Patna.)', hindi: 'मैं पटना, बिहार का रहने वाला हूँ। (मूल रूप से गया से हूँ लेकिन वर्तमान में पटना में रहता हूँ।)' },
            { english: 'Step 4 (Qualification): Currently, I am a Class 12 student in Commerce / Science stream at BSEB.', hindi: 'वर्तमान में, मैं बिहार बोर्ड से 12वीं कक्षा का वाणिज्य/विज्ञान का छात्र हूँ।' },
            { english: 'Step 5 (Family brief): In my family, apart from my parents, I have an elder brother and a younger sister.', hindi: 'मेरे परिवार में, मेरे माता-पिता के अलावा, मेरा एक बड़ा भाई और एक छोटी बहन है।' },
            { english: 'Step 6 (Hobbies): In my free time, I enjoy reading books and playing cricket.', hindi: 'खाली समय में, मुझे पुस्तकें पढ़ना और क्रिकेट खेलना पसंद है।' },
            { english: 'Step 7 (Closing): That is all about me. Thank you very much for this wonderful opportunity!', hindi: 'यह सब मेरे बारे में था। इस शानदार अवसर के लिए आपका बहुत-बहुत धन्यवाद!' }
          ]
        },
        {
          ruleTitle: 'नियम 2: किसी से बातचीत शुरू करने के 5 जादुई वाक्य (Icebreakers)',
          explanationHindi: 'यदि आप किसी नए व्यक्ति या सहपाठी से बात शुरू करना चाहते हैं:',
          examples: [
            { english: 'Excuse me, is this seat taken?', hindi: 'माफ कीजिए, क्या यह सीट खाली है?', tip: 'क्लास, बस या ट्रेन में बात शुरू करने का सबसे आसान तरीका।' },
            { english: 'Hello! I am Samir, by the way. What is your name?', hindi: 'नमस्ते! वैसे मेरा नाम समीर है। आपका क्या नाम है?' },
            { english: 'How are you finding today\'s lecture / event?', hindi: 'आज का व्याख्यान/कार्यक्रम आपको कैसा लग रहा है?' },
            { english: 'Nice weather today, isn\'t it?', hindi: 'आज का मौसम बहुत अच्छा है, है ना?' }
          ]
        },
        {
          ruleTitle: 'नियम 3: नाम पूछने का सही तरीका',
          explanationHindi: 'भारतीय अंग्रेजी में अक्सर लोग पूछते हैं: "What is your good name?"—यह व्याकरण की दृष्टि से अशुद्ध है। अंग्रेजी में नाम सिर्फ नाम होता है, "Good name" नहीं:',
          formulaOrStructure: 'अशुद्ध: What is your good name? ❌ ➔ शुद्ध: What is your name, please? / May I know your name? ✅',
          examples: [
            { english: 'May I know your name, please?', hindi: 'क्या मैं कृपया आपका नाम जान सकता हूँ?', pronunciationHint: 'मे आई नो योर नेम, प्लीज?' },
            { english: 'I am sorry, I did not catch your name.', hindi: 'क्षमा करें, मैं आपका नाम ठीक से सुन नहीं पाया।', pronunciationHint: 'आई डिड नॉट कैच योर नेम' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'बोर्ड परीक्षा के प्रैक्टिकल/वाइवा में परीक्षक (Examiner) के समक्ष परिचय',
          speakers: [
            { speaker: 'Examiner', textEnglish: 'Welcome! Please take a seat. Could you introduce yourself briefly?', textHindi: 'स्वागत है! कृपया बैठिए। क्या आप संक्षेप में अपना परिचय दे सकते हैं?' },
            { speaker: 'Student', textEnglish: 'Thank you, sir! Good morning. My name is Rahul Kumar. I am a student of Class 12 Commerce from Patna.', textHindi: 'धन्यवाद, सर! शुभ प्रभात। मेरा नाम राहुल कुमार है। मैं पटना से 12वीं वाणिज्य का छात्र हूँ।' },
            { speaker: 'Examiner', textEnglish: 'Great, Rahul! What is your favorite subject in Commerce?', textHindi: 'बहुत अच्छे, राहुल! वाणिज्य में तुम्हारा पसंदीदा विषय कौन सा है?' },
            { speaker: 'Student', textEnglish: 'Sir, my favorite subject is Accountancy because I really enjoy solving balance sheet problems.', textHindi: 'सर, मेरा पसंदीदा विषय लेखाशास्त्र (Accountancy) है क्योंकि मुझे बैलेंस शीट के प्रश्न हल करना बहुत पसंद है।' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Currently', phonetic: 'ˈkʌr.ənt.li (करंटली)', hindiMeaning: 'वर्तमान में / इस समय', exampleSentence: 'Currently, I am preparing for my board exams.', sentenceHindi: 'वर्तमान में, मैं अपनी बोर्ड परीक्षाओं की तैयारी कर रहा हूँ।' },
        { word: 'Aspiration', phonetic: 'ˌæs.pɪˈreɪ.ʃən (एस्पिरेशन)', hindiMeaning: 'आकांक्षा / बड़ा लक्ष्य', exampleSentence: 'My career aspiration is to become a Chartered Accountant.', sentenceHindi: 'मेरी करियर आकांक्षा एक चार्टर्ड एकाउंटेंट बनने की है।' },
        { word: 'Sibling', phonetic: 'ˈsɪb.lɪŋ (सिबलिंग)', hindiMeaning: 'सगा भाई या बहन', exampleSentence: 'I have two siblings—one brother and one sister.', sentenceHindi: 'मेरे दो सगे भाई-बहन हैं—एक भाई और एक बहन।' }
      ],
      commonMistakesFixed: [
        { wrong: 'Myself Samir Ali.', correct: 'I am Samir Ali. / My name is Samir Ali.', whyWrongHindi: 'Myself कभी भी वाक्य का कर्ता (Subject) नहीं बन सकता। परिचय हमेशा "My name is..." या "I am..." से शुरू करें।' },
        { wrong: 'What is your good name?', correct: 'May I know your name, please? / What is your name?', whyWrongHindi: 'हिंदी में "शुभ नाम" होता है, लेकिन अंग्रेजी में "Good Name" नहीं बोला जाता।' },
        { wrong: 'I belong from Bihar.', correct: 'I belong to Bihar. / I am from Bihar.', whyWrongHindi: 'Belong के साथ हमेशा Preposition \'to\' आता है, \'from\' नहीं।' }
      ],
      fluencyTip: '🎯 Golden Rule 2: अपने परिचय को एक बार फोन के वॉयस रिकॉर्डर में रिकॉर्ड करें और खुद सुनें। ध्यान दें कि क्या आप "Umm...", "Aaa..." ज्यादा बोल रहे हैं? इसे 3 बार दोहराएं जब तक आवाज में स्वाभाविक गति न आ जाए।'
    },
    interactiveQuiz: [
      {
        question: 'अंग्रेजी में अपना परिचय देते समय पहला वाक्य क्या होना चाहिए?',
        options: ['Myself Rohan Sharma.', 'My name is Rohan Sharma.', 'I myself Rohan Sharma.', 'Rohan Sharma is me.'],
        correctIndex: 1,
        explanation: 'अंग्रेजी में कभी भी "Myself Rohan" नहीं कहा जाता। सही रूप "My name is Rohan Sharma" या "I am Rohan Sharma" होता है।'
      },
      {
        question: '"I belong ____ Bihar." रिक्त स्थान में सही Preposition क्या होगा?',
        options: ['from', 'to', 'in', 'at'],
        correctIndex: 1,
        explanation: 'Belong के साथ हमेशा \'to\' लगता है: "I belong to Bihar" या आप कह सकते हैं "I am from Bihar".'
      },
      {
        question: 'किसी से उसका नाम अत्यंत विनम्रतापूर्वक पूछने का सबसे सही वाक्य कौन सा है?',
        options: ['What is your good name?', 'Who are you?', 'May I know your name, please?', 'Tell me your name quickly.'],
        correctIndex: 2,
        explanation: '"May I know your name, please?" सबसे सभ्य और औपचारिक तरीका है।'
      }
    ]
  },

  // ================= LESSON 3 =================
  {
    id: 'lesson-3-tenses-masterclass',
    number: 3,
    titleHindi: 'काल (Tenses) एवं वाक्यों का सटीक प्रयोग',
    titleEnglish: 'Tenses Masterclass for Spoken Fluency',
    tagline: 'स्पोकन इंग्लिश के 4 सबसे महत्वपूर्ण Tenses—बिना किसी भ्रम के फटाफट बोलना सीखें',
    level: 'Intermediate',
    durationMinutes: 35,
    topics: [
      'Present Simple: Do/Does का रहस्य और दैनिक दिनचर्या',
      'Past Simple: Did + V1 का नियम (सबसे बड़ी गलती का समाधान)',
      'Present Continuous vs Stative Verbs ("I am having" क्यों गलत है?)',
      'Present Perfect vs Past Simple में अंतर और 20 दैनिक वाक्य'
    ],
    deepExplanation: {
      introduction: 'किताबों में 12 Tenses सिखाए जाते हैं, लेकिन दैनिक बोलचाल (Spoken English) का 85% काम सिर्फ 4 Tenses से होता है! यदि आप इन चार Tenses पर महारत हासिल कर लें, तो आप किसी भी समय की बात बिना सोचे अंग्रेजी में धाराप्रवाह बोल सकते हैं।',
      rulesAndFormulas: [
        {
          ruleTitle: 'Tense 1: Present Simple (दैनिक आदतें, दिनचर्या और शाश्वत सत्य)',
          explanationHindi: 'जब भी आप अपनी रोजमर्रा की आदत, शौक या सामान्य बात बताते हैं:',
          formulaOrStructure: 'Positive: Subject + V1 / (V1 + s/es) | Negative: Subject + do/does not + V1 | Question: Do/Does + Subject + V1?',
          examples: [
            { english: 'I wake up at 6 AM every morning.', hindi: 'मैं रोज सुबह 6 बजे उठता हूँ।', tip: 'I/You/We/They के साथ V1 (wake), He/She/It के साथ V1+s (wakes)' },
            { english: 'He does not understand English very well.', hindi: 'वह अंग्रेजी बहुत अच्छी तरह नहीं समझता है।', tip: 'Does आने के बाद verb में s/es नहीं लगता।' },
            { english: 'Do you study late at night?', hindi: 'क्या आप देर रात तक पढ़ाई करते हैं?' }
          ]
        },
        {
          ruleTitle: 'Tense 2: Past Simple (कल की बात, बीती हुई घटना या कहानी)',
          explanationHindi: 'यह स्पोकन इंग्लिश का सबसे ज्यादा इस्तेमाल होने वाला Tense है। ध्यान दें: सकारात्मक में Verb की 2nd Form (V2) लगती है, लेकिन Did आते ही Verb 1st Form (V1) में बदल जाती है!',
          formulaOrStructure: 'Positive: Subject + V2 | Negative: Subject + did not + V1 | Question: Did + Subject + V1?',
          examples: [
            { english: 'I went to market yesterday and bought a new pen.', hindi: 'मैं कल बाजार गया और मैंने एक नया पेन खरीदा। (go ➔ went, buy ➔ bought)' },
            { english: 'I did not go to college yesterday.', hindi: 'मैं कल कॉलेज नहीं गया था। (did not went ❌ did not go ✅)', tip: 'Did के साथ कभी भी 2nd form न लगाएं! Did खुद 2nd form है।' },
            { english: 'Did you complete your homework on time?', hindi: 'क्या आपने समय पर अपना गृहकार्य पूरा किया?' }
          ]
        },
        {
          ruleTitle: 'Tense 3: Present Continuous (जो काम अभी चल रहा है)',
          explanationHindi: 'जब कोई काम आपकी आंखों के सामने जारी हो:',
          formulaOrStructure: 'Subject + is / am / are + V1 + ing (V4)',
          examples: [
            { english: 'I am preparing for the upcoming board examinations.', hindi: 'मैं आगामी बोर्ड परीक्षाओं की तैयारी कर रहा हूँ।' },
            { english: 'Why are you laughing at me?', hindi: 'आप मुझ पर क्यों हंस रहे हैं?' },
            { english: 'It is raining outside right now.', hindi: 'अभी बाहर बारिश हो रही है।' }
          ]
        },
        {
          ruleTitle: 'Tense 4: Present Perfect (काम अभी-अभी समाप्त हुआ है, असर बाकी है)',
          explanationHindi: 'जब काम भूतकाल में पूरा हुआ हो लेकिन उसका प्रभाव अभी वर्तमान से जुड़ा हो:',
          formulaOrStructure: 'Subject + has / have + V3 (Past Participle)',
          examples: [
            { english: 'I have already submitted my project.', hindi: 'मैं पहले ही अपना प्रोजेक्ट जमा कर चुका हूँ।' },
            { english: 'Have you ever visited Delhi?', hindi: 'क्या आप कभी दिल्ली गए हैं?' },
            { english: 'She has not arrived yet.', hindi: 'वह अभी तक नहीं पहुंची है।' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'दो दोस्त कल की क्लास और पढ़ाई के बारे में बातचीत कर रहे हैं',
          speakers: [
            { speaker: 'Aman', textEnglish: 'Hey Rohan! Why did you not come to class yesterday?', textHindi: 'अरे रोहन! तुम कल क्लास क्यों नहीं आए थे?' },
            { speaker: 'Rohan', textEnglish: 'Actually, I had a severe headache, so I visited the doctor.', textHindi: 'दरअसल, मुझे बहुत तेज सिरदर्द था, इसलिए मैं डॉक्टर के पास गया था।' },
            { speaker: 'Aman', textEnglish: 'Oh, I see! Did the teacher give any new assignment?', textHindi: 'ओह, अच्छा! क्या शिक्षक ने कोई नया असाइनमेंट दिया?' },
            { speaker: 'Rohan', textEnglish: 'Yes, we have to write an essay on environmental pollution by Friday.', textHindi: 'हाँ, हमें शुक्रवार तक पर्यावरण प्रदूषण पर एक निबंध लिखना है।' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Frequently', phonetic: 'ˈfriː.kwənt.li (फ्रीक्वेंटली)', hindiMeaning: 'बार-बार / अक्सर', exampleSentence: 'He frequently visits the library to study.', sentenceHindi: 'वह पढ़ाई करने अक्सर पुस्तकालय जाता है।' },
        { word: 'Gradually', phonetic: 'ˈɡrædʒ.u.ə.li (ग्रैजुअली)', hindiMeaning: 'धीरे-धीरे', exampleSentence: 'Your spoken English will gradually improve with daily practice.', sentenceHindi: 'रोजाना अभ्यास से आपकी बोलचाल की अंग्रेजी धीरे-धीरे सुधरेगी।' },
        { word: 'Submit', phonetic: 'səbˈmɪt (सबमिट)', hindiMeaning: 'जमा करना / प्रस्तुत करना', exampleSentence: 'Please submit your answer sheet on time.', sentenceHindi: 'कृपया अपनी उत्तर पुस्तिका समय पर जमा करें।' }
      ],
      commonMistakesFixed: [
        { wrong: 'He did not went there.', correct: 'He did not go there.', whyWrongHindi: 'Did के साथ हमेशा Verb की 1st form (go) आती है, 2nd form (went) नहीं।' },
        { wrong: 'I am having two brothers.', correct: 'I have two brothers.', whyWrongHindi: 'अधिकार या रिश्ते दर्शाने वाले \'have\' में ing नहीं लगता। "I am having lunch" सही है (खाना खाने के अर्थ में), लेकिन रिश्तों के लिए "I have" बोलते हैं।' },
        { wrong: 'I have passed 12th in 2023.', correct: 'I passed 12th in 2023.', whyWrongHindi: 'जब वाक्य में बीता हुआ साल या समय (जैसे in 2023, yesterday) दिया हो, तो Past Simple (passed) लगता है, Present Perfect नहीं।' }
      ],
      fluencyTip: '🎯 Golden Rule 3: जब भी कल की कोई बात बताएँ, मन में गांठ बाँध लें—Did के साथ हमेशा V1! जोर से बोलें: "I didn\'t know", "I didn\'t see", "I didn\'t go"।'
    },
    interactiveQuiz: [
      {
        question: 'वाक्य "I did not ______ the movie yesterday." में रिक्त स्थान भरें:',
        options: ['watched', 'watch', 'watching', 'watches'],
        correctIndex: 1,
        explanation: 'Did not के बाद हमेशा Verb की 1st form (V1) \'watch\' आती है।'
      },
      {
        question: 'यदि आपको कहना हो कि मेरे पास एक कार है, तो सही वाक्य क्या होगा?',
        options: ['I am having a car.', 'I have a car.', 'I having car.', 'I has a car.'],
        correctIndex: 1,
        explanation: 'स्वामित्व या पजेशन दर्शाने के लिए "I have a car" सही है। "I am having a car" व्याकरण की दृष्टि से गलत है।'
      },
      {
        question: '"She ______ English very fluently." में सही क्रिया रूप चुनें:',
        options: ['speak', 'speaks', 'speaking', 'is speak'],
        correctIndex: 1,
        explanation: 'He/She/It के साथ Present Simple में Verb में s/es लगता है, अतः \'speaks\' सही है।'
      }
    ]
  },

  // ================= LESSON 4 =================
  {
    id: 'lesson-4-modal-verbs',
    number: 4,
    titleHindi: 'Modal Verbs: भावनाएं एवं विनम्रता व्यक्त करना',
    titleEnglish: 'Modal Verbs: Can, Could, Should, May & Would',
    tagline: 'अंग्रेजी में विनम्र अनुरोध, सलाह, अनुमति और क्षमता दर्शाने की कला',
    level: 'Intermediate',
    durationMinutes: 30,
    topics: [
      'Can vs Could: क्षमता और अत्यंत विनम्र अनुरोध',
      'Should vs Must vs Ought to: "चाहिए" के अलग-अलग स्तर',
      'May vs Might: अनुमति और संभावना (50% vs 20%)',
      'Would you mind... / I would like to... का जादुई प्रयोग'
    ],
    deepExplanation: {
      introduction: 'मोडल वर्ब्स (Modals) अंग्रेजी बोलने की जान हैं। हिंदी में हम "कर सकता हूँ", "चाहिए", "शायद" बोलते हैं। अंग्रेजी में सही मोडल का चुनाव यह तय करता है कि आप विनम्र लग रहे हैं या रूखे। इस पाठ में हम दैनिक जीवन में सबसे ज्यादा इस्तेमाल होने वाले मोडल वर्ब्स को चुटकियों में समझेंगे।',
      rulesAndFormulas: [
        {
          ruleTitle: '1. Can vs Could (अनुरोध में जमीन-आसमान का अंतर)',
          explanationHindi: 'Can का प्रयोग अनौपचारिक दोस्तों में होता है, लेकिन बड़ों, अजनबियों या ऑफिस में हमेशा Could का प्रयोग करें:',
          formulaOrStructure: 'Can you help me? (दोस्तों में) ➔ Could you please help me? (विनम्र व सभ्य)',
          examples: [
            { english: 'Could you please repeat what you just said?', hindi: 'क्या आप कृपया अपनी बात दोहरा सकते हैं?', tip: 'Pardon के साथ यह सबसे पसंदीदा वाक्य है।' },
            { english: 'Could I borrow your notes for one day?', hindi: 'क्या मुझे आपके नोट्स एक दिन के लिए मिल सकते हैं?' },
            { english: 'I can speak three languages fluently.', hindi: 'मैं तीन भाषाएं धाराप्रवाह बोल सकता हूँ। (क्षमता)' }
          ]
        },
        {
          ruleTitle: '2. Should vs Must (सलाह vs अनिवार्यता)',
          explanationHindi: 'Should = सलाह (ऐसा करना चाहिए) | Must = अनिवार्यता (ऐसा अवश्य ही करना चाहिए, नहीं तो नुकसान होगा)',
          formulaOrStructure: 'Subject + should / must + V1',
          examples: [
            { english: 'You should practice speaking English every day.', hindi: 'आपको रोज अंग्रेजी बोलने का अभ्यास करना चाहिए। (सलाह)' },
            { english: 'Students must carry their admit card to the examination hall.', hindi: 'विद्यार्थियों को परीक्षा भवन में एडमिट कार्ड अवश्य साथ ले जाना चाहिए। (अनिवार्यता)' },
            { english: 'You should take some rest now.', hindi: 'आपको अब थोड़ा आराम करना चाहिए।' }
          ]
        },
        {
          ruleTitle: '3. May vs Might (संभावना के स्तर)',
          explanationHindi: 'May = 50% संभावना (शायद होगा) | Might = 20% बहुत कम संभावना (शायद ही होगा)',
          examples: [
            { english: 'It may rain this evening, the sky is cloudy.', hindi: 'आज शाम बारिश हो सकती है, बादल छाए हुए हैं। (50% संभावना)' },
            { english: 'He might come to the party, but he is very busy.', hindi: 'वह शायद ही पार्टी में आए, क्योंकि वह बहुत व्यस्त है। (बहुत कम संभावना)' },
            { english: 'May I come in, sir? (अनुमति हेतु)', hindi: 'क्या मैं अंदर आ सकता हूँ, सर?' }
          ]
        },
        {
          ruleTitle: '4. Would Like To (इच्छा व्यक्त करने का शाही तरीका)',
          explanationHindi: '"I want" (मुझे चाहिए) थोड़ा रूखा लगता है। उसके स्थान पर "I would like to" कहें, यह बहुत परिपक्व और सभ्य लगता है:',
          formulaOrStructure: 'I would like to + V1 (मैं ... करना चाहूँगा)',
          examples: [
            { english: 'I would like to ask a question, sir.', hindi: 'सर, मैं एक प्रश्न पूछना चाहूँगा।' },
            { english: 'Would you like to have some tea or coffee?', hindi: 'क्या आप थोड़ी चाय या कॉफी लेना पसंद करेंगे?' },
            { english: 'Would you mind closing the window?', hindi: 'क्या आप खिड़की बंद करने का कष्ट करेंगे? (Would you mind के बाद V+ing लगता है)' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'कार्यालय/बैंक में अधिकारी से विनम्रतापूर्वक बात करना',
          speakers: [
            { speaker: 'Customer', textEnglish: 'Excuse me, sir. Could you please guide me on how to fill this form?', textHindi: 'माफ कीजिए सर। क्या आप कृपया मुझे बता सकते हैं कि यह फॉर्म कैसे भरना है?' },
            { speaker: 'Officer', textEnglish: 'Sure! You should fill your account details here and sign at the bottom.', textHindi: 'बिल्कुल! आपको यहाँ अपने खाते का विवरण भरना चाहिए और नीचे हस्ताक्षर करने चाहिए।' },
            { speaker: 'Customer', textEnglish: 'Would I need to attach my Aadhaar card copy as well?', textHindi: 'क्या मुझे अपने आधार कार्ड की प्रति भी संलग्न करनी होगी?' },
            { speaker: 'Officer', textEnglish: 'Yes, you must attach a self-attested copy of your Aadhaar card.', textHindi: 'हाँ, आपको अपने आधार कार्ड की एक स्व-हस्ताक्षरित प्रति अवश्य संलग्न करनी होगी।' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Obligation', phonetic: 'ˌɒb.lɪˈɡeɪ.ʃən (ऑब्लिगेशन)', hindiMeaning: 'कर्तव्य / अनिवार्यता', exampleSentence: 'It is our moral obligation to help the needy.', sentenceHindi: 'जरूरतमंदों की मदद करना हमारा नैतिक कर्तव्य है।' },
        { word: 'Permission', phonetic: 'pəˈmɪʃ.ən (पर्मिशन)', hindiMeaning: 'अनुमति / आज्ञा', exampleSentence: 'Always ask for permission before entering.', sentenceHindi: 'प्रवेश करने से पहले हमेशा अनुमति मांगें।' },
        { word: 'Opportunity', phonetic: 'ˌɒp.əˈtʃuː.nə.ti (अपॉर्च्युनिटी)', hindiMeaning: 'अवसर / मौका', exampleSentence: 'Grab every opportunity to practice your spoken English.', sentenceHindi: 'अपनी बोलचाल की अंग्रेजी का अभ्यास करने के हर अवसर का लाभ उठाएं।' }
      ],
      commonMistakesFixed: [
        { wrong: 'I want to say something. (औपचारिक बैठक या कक्षा में)', correct: 'I would like to say something.', whyWrongHindi: '"I want" थोड़ा आक्रामक या आदेश जैसा लगता है। "I would like to" अत्यंत शालीन और सम्मानीय है।' },
        { wrong: 'Can I come in, sir?', correct: 'May I come in, sir?', whyWrongHindi: 'Can शारीरिक क्षमता (Ability) दर्शाता है, जबकि May आज्ञा/अनुमति (Permission) के लिए प्रयुक्त होता है।' },
        { wrong: 'Would you mind to close the door?', correct: 'Would you mind closing the door?', whyWrongHindi: '"Would you mind" के बाद हमेशा Verb + ing आता है, to + V1 नहीं।' }
      ],
      fluencyTip: '🎯 Golden Rule 4: जब भी किसी से मदद मांगनी हो, "Help me" की जगह बोलें: "Could you please help me for a moment?" सामने वाला मुस्कुराकर आपकी मदद करेगा।'
    },
    interactiveQuiz: [
      {
        question: 'कक्षा में शिक्षक से अंदर आने की अनुमति माँगने के लिए सबसे उपयुक्त वाक्य क्या है?',
        options: ['Can I enter the room?', 'May I come in, sir?', 'Will I come inside?', 'Must I come in?'],
        correctIndex: 1,
        explanation: 'औपचारिक अनुमति के लिए "May I come in, sir?" का प्रयोग किया जाता है।'
      },
      {
        question: '"Would you mind ______ the window?" में उपयुक्त क्रिया रूप भरें:',
        options: ['open', 'to open', 'opening', 'opened'],
        correctIndex: 2,
        explanation: '"Would you mind" के बाद हमेशा V-ing का प्रयोग होता है, अतः "opening" सही है।'
      },
      {
        question: 'किसी को डॉक्टर के पास जाने की सामान्य सलाह देने के लिए कौन सा Modal प्रयुक्त होगा?',
        options: ['must', 'should', 'might', 'can'],
        correctIndex: 1,
        explanation: 'सामान्य हितकारी सलाह देने के लिए \'should\' का प्रयोग होता है: "You should see a doctor."'
      }
    ]
  },

  // ================= LESSON 5 =================
  {
    id: 'lesson-5-daily-vocabulary-phrases',
    number: 5,
    titleHindi: 'दैनिक बोलचाल के स्मार्ट Phrases और Phrasal Verbs',
    titleEnglish: 'High-Frequency Vocabulary & Spoken Phrasal Verbs',
    tagline: 'साधारण अंग्रेजी से उठकर स्मार्ट, आधुनिक एवं स्वाभाविक अंग्रेजी बोलना सीखें',
    level: 'Intermediate',
    durationMinutes: 30,
    topics: [
      'सुबह से शाम तक के 10 दैनिक बोलचाल के वाक्यांश',
      'रोजमर्रा के 7 जादुई Phrasal Verbs (Give up, Figure out, Run out of)',
      'Smart Short Forms (Wanna, Gonna, Gotta, Lemme)',
      'बाजार, कॉलेज एवं फोन पर बातचीत के शॉर्टकट फ्रेजेस'
    ],
    deepExplanation: {
      introduction: 'अंग्रेज या धाराप्रवाह बोलने वाले लोग शब्द-दर-शब्द अनुवाद नहीं करते, वे बने-बनाए Phrases और Phrasal Verbs का उपयोग करते हैं। जब आप सामान्य शब्दों की जगह स्मार्ट फ्रेजेस इस्तेमाल करते हैं, तो आपकी अंग्रेजी तुरंत आकर्षक लगने लगती है।',
      rulesAndFormulas: [
        {
          ruleTitle: '7 अति-महत्वपूर्ण Phrasal Verbs जो हर बातचीत में काम आते हैं',
          explanationHindi: 'Phrasal Verb का अर्थ Verb + Preposition से मिलकर बनता है, जिसका एक विशेष अर्थ होता है:',
          examples: [
            { english: 'Figure out (हल निकालना / समझ जाना)', hindi: 'I am trying to figure out this difficult math problem.', tip: 'वाक्य: "Don\'t worry, we will figure it out together."' },
            { english: 'Give up (हार मान लेना / छोड़ देना)', hindi: 'Never give up on your dreams, no matter how hard it gets.', tip: 'वाक्य: "I will never give up."' },
            { english: 'Run out of (कोई चीज समाप्त हो जाना)', hindi: 'We have run out of ink / grocery / balance.', tip: 'जब मोबाइल बैलेंस या पेट्रोल खत्म हो तो कहें: "My phone has run out of battery."' },
            { english: 'Call off (रद्द करना / Cancel करना)', hindi: 'The cricket match was called off due to heavy rain.', tip: 'वाक्य: "They called off the meeting."' },
            { english: 'Catch up (काफी समय बाद मिलकर बातचीत करना)', hindi: 'It was great seeing you! Let us catch up over coffee this weekend.', tip: 'वाक्य: "Let\'s catch up soon!"' },
            { english: 'Put off (टालना / Postpone करना)', hindi: 'Do not put off till tomorrow what you can do today.', tip: 'काम कल पर मत टालो।' },
            { english: 'Look forward to (उत्सुकता से प्रतीक्षा करना)', hindi: 'I look forward to meeting you soon in person.', tip: 'इसके बाद V+ing लगता है।' }
          ]
        },
        {
          ruleTitle: 'स्मार्ट स्पोकन शॉर्ट फॉर्म्स (Smart Spoken Contractions)',
          explanationHindi: 'फिल्मों और बातचीत में धाराप्रवाह बोलने के लिए इन शॉर्ट फॉर्म्स का प्रयोग किया जाता है:',
          formulaOrStructure: 'Want to ➔ Wanna | Going to ➔ Gonna | Got to ➔ Gotta | Let me ➔ Lemme | Don\'t know ➔ Dunno',
          examples: [
            { english: 'I wanna ask you something. (= I want to ask you something)', hindi: 'मैं आपसे कुछ पूछना चाहता हूँ।', pronunciationHint: 'आई वाना आस्क यू समथिंग' },
            { english: 'I am gonna score 90% in board exams. (= I am going to score)', hindi: 'मैं बोर्ड परीक्षा में 90% अंक लाने जा रहा हूँ।', pronunciationHint: 'आई ऍम गना स्कोर' },
            { english: 'I gotta go now, it is getting late. (= I have got to go now)', hindi: 'मुझे अब निकलना होगा, देर हो रही है।', pronunciationHint: 'आई गॉटा गो नाउ' },
            { english: 'Lemme help you with that bag. (= Let me help you)', hindi: 'मुझे उस बैग में आपकी मदद करने दीजिए।', pronunciationHint: 'लेमी हेल्प यू' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'दो दोस्त चाय की दुकान पर भविष्य की योजनाओं पर चर्चा करते हुए',
          speakers: [
            { speaker: 'Vivek', textEnglish: 'Hey buddy, what are you gonna do after Class 12 exams?', textHindi: 'अरे दोस्त, 12वीं की परीक्षा के बाद तुम क्या करने वाले हो?' },
            { speaker: 'Sameer', textEnglish: 'I wanna prepare for CA Foundation and crack it on the first attempt.', textHindi: 'मैं सीए फाउंडेशन की तैयारी करना चाहता हूँ और इसे पहले प्रयास में पास करना चाहता हूँ।' },
            { speaker: 'Vivek', textEnglish: 'That sounds awesome! I know you will figure it out.', textHindi: 'यह बहुत बढ़िया है! मुझे पता है कि तुम रास्ता निकाल लोगे।' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Enthusiastic', phonetic: 'ɪnˌθjuː.ziˈæs.tɪk (इन्थूज़िएस्टिक)', hindiMeaning: 'उत्साही / जोश से भरा हुआ', exampleSentence: 'He is very enthusiastic about learning spoken English.', sentenceHindi: 'वह बोलचाल की अंग्रेजी सीखने के प्रति बहुत उत्साही है।' },
        { word: 'Hesitant', phonetic: 'ˈhez.ɪ.tənt (हेज़िटैन्ट)', hindiMeaning: 'संकोची / झिझकने वाला', exampleSentence: 'Don\'t be hesitant while speaking in public.', sentenceHindi: 'सार्वजनिक रूप से बोलते समय संकोच मत कीजिए।' },
        { word: 'Flawless', phonetic: 'ˈflɔː.ləs (फ्लॉलेस)', hindiMeaning: 'दोषरहित / त्रुटिहीन', exampleSentence: 'With consistent practice, your speech will become flawless.', sentenceHindi: 'लगातार अभ्यास से आपका भाषण दोषरहित हो जाएगा।' }
      ],
      commonMistakesFixed: [
        { wrong: 'I am looking forward to meet you.', correct: 'I am looking forward to meeting you.', whyWrongHindi: '\'Look forward to\' के बाद हमेशा Gerund (V-ing) का उपयोग होता है।' },
        { wrong: 'My phone battery is finished.', correct: 'My phone battery has run out. / My phone is dead.', whyWrongHindi: 'बैटरी खत्म होने पर "run out of battery" या "battery is low/dead" सही मुहावरा है।' }
      ],
      fluencyTip: '🎯 Golden Rule 5: किसी भी बात को टालने के लिए "Later" बोलने की जगह बोलें: "Let\'s call it a day!" या "Let\'s put it off for tomorrow!"'
    },
    interactiveQuiz: [
      {
        question: 'यदि किसी समस्या का हल निकालना या समझ विकसित करना हो, तो किस Phrasal Verb का प्रयोग करेंगे?',
        options: ['Call off', 'Figure out', 'Give up', 'Put off'],
        correctIndex: 1,
        explanation: '\'Figure out\' का अर्थ होता है किसी जटिल बात या समस्या को समझना या समाधान खोजना।'
      },
      {
        question: '"I have got to go now" को स्पोकन इंग्लिश में संक्षेप में कैसे बोला जाता है?',
        options: ['I gotta go now.', 'I wanna go now.', 'I lemme go now.', 'I gonna go now.'],
        correctIndex: 0,
        explanation: '"Got to" का संकुचित रूप "gotta" होता है: "I gotta go now."'
      }
    ]
  },

  // ================= LESSON 6 =================
  {
    id: 'lesson-6-real-world-dialogues',
    number: 6,
    titleHindi: 'वास्तविक परिस्थितियों में बातचीत (Role Play)',
    titleEnglish: 'Real-World Spoken Dialogues & Role Plays',
    tagline: 'बैंक, रेलवे स्टेशन, डॉक्टर के पास और बाजार में आत्मविश्वास से बात करना',
    level: 'Intermediate',
    durationMinutes: 35,
    topics: [
      'सिनेरियो 1: बैंक में खाता खोलना या पूछताछ करना',
      'सिनेरियो 2: रेलवे स्टेशन पर टिकट व प्लेटफॉर्म की जानकारी',
      'सिनेरियो 3: डॉक्टर से अपनी बीमारी व लक्षणों पर चर्चा',
      'सिनेरियो 4: दुकान या बाजार में मोलभाव (Bargaining) करना'
    ],
    deepExplanation: {
      introduction: 'अंग्रेजी सीखने का सबसे व्यावहारिक तरीका है "Role Play"। जब आप वास्तविक परिस्थितियों के पूरे संवाद (Dialogues) पढ़ते हैं और उन्हें जोर से बोलते हैं, तो आपका दिमाग बिना सोचे सही परिस्थिति में सही वाक्य अपने आप बाहर निकालता है।',
      rulesAndFormulas: [
        {
          ruleTitle: 'सिनेरियो 1: बैंक में नया खाता खोलना (At the Bank)',
          explanationHindi: 'बैंक में अक्सर इस्तेमाल होने वाले प्रमुख वाक्य:',
          examples: [
            { english: 'Good morning! I would like to open a new savings account in your branch.', hindi: 'शुभ प्रभात! मैं आपकी शाखा में एक नया बचत खाता खोलना चाहता हूँ।' },
            { english: 'What documents do I need to submit along with the application?', hindi: 'आवेदन के साथ मुझे कौन-से दस्तावेज जमा करने होंगे?' },
            { english: 'Could you please tell me the minimum balance requirement?', hindi: 'क्या आप कृपया मुझे न्यूनतम शेष राशि की आवश्यकता बता सकते हैं?' },
            { english: 'When will I receive my debit card and cheque book?', hindi: 'मुझे मेरा डेबिट कार्ड और चेक बुक कब प्राप्त होगा?' }
          ]
        },
        {
          ruleTitle: 'सिनेरियो 2: रेलवे स्टेशन पर टिकट काउंटर व पूछताछ (At Railway Station)',
          explanationHindi: 'यात्रा के दौरान आवश्यक स्पोकन वाक्य:',
          examples: [
            { english: 'Excuse me, is there any seat available in the Rajdhani Express for tomorrow?', hindi: 'माफ कीजिए, क्या कल के लिए राजधानी एक्सप्रेस में कोई सीट उपलब्ध है?' },
            { english: 'Which platform will the train arrive on?', hindi: 'ट्रेन किस प्लेटफॉर्म पर आएगी?' },
            { english: 'How long is the train delayed by?', hindi: 'ट्रेन कितनी देर से चल रही है?' },
            { english: 'Could you please give me one ticket to New Delhi?', hindi: 'क्या आप मुझे नई दिल्ली के लिए एक टिकट दे सकते हैं?' }
          ]
        },
        {
          ruleTitle: 'सिनेरियो 3: डॉक्टर से परामर्श (At Doctor\'s Clinic)',
          explanationHindi: 'अपनी बीमारी के लक्षण बताने के सटीक वाक्य:',
          examples: [
            { english: 'Good evening doctor, I have been suffering from a fever and sore throat since yesterday.', hindi: 'शुभ संध्या डॉक्टर, मुझे कल से बुखार और गले में खराश हो रही है।' },
            { english: 'I feel extremely weak and dizzy.', hindi: 'मुझे बहुत कमजोरी और चक्कर जैसा महसूस हो रहा है।' },
            { english: 'How many times a day should I take this syrup?', hindi: 'मुझे यह सिरप दिन में कितनी बार लेना चाहिए?' },
            { english: 'Should I take this medicine before or after meals?', hindi: 'क्या मुझे यह दवा भोजन से पहले लेनी चाहिए या बाद में?' }
          ]
        },
        {
          ruleTitle: 'सिनेरियो 4: बाजार में खरीदारी व मोलभाव (Shopping & Bargaining)',
          explanationHindi: 'दुकानदार से बात करने के सहज वाक्य:',
          examples: [
            { english: 'How much does this shirt cost?', hindi: 'इस शर्ट की कीमत कितनी है?' },
            { english: 'It looks a bit expensive. Can you give me some discount?', hindi: 'यह थोड़ी महंगी लग रही है। क्या आप मुझे कुछ छूट दे सकते हैं?' },
            { english: 'Do you have this in a larger size or a different color?', hindi: 'क्या आपके पास यह बड़े साइज या किसी अन्य रंग में है?' },
            { english: 'Do you accept UPI or card payments?', hindi: 'क्या आप यूपीआई या कार्ड से भुगतान स्वीकार करते हैं?' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'पूर्ण संवाद: डॉक्टर और मरीज के बीच बातचीत',
          speakers: [
            { speaker: 'Doctor', textEnglish: 'Hello! Please sit down. What seems to be the problem today?', textHindi: 'नमस्ते! कृपया बैठिए। आज क्या समस्या है?' },
            { speaker: 'Patient', textEnglish: 'Doctor, I have had a severe stomach ache since morning, and I feel nauseous.', textHindi: 'डॉक्टर, मुझे सुबह से पेट में तेज दर्द है और जी मिचला रहा है।' },
            { speaker: 'Doctor', textEnglish: 'Did you eat anything outside yesterday night?', textHindi: 'क्या आपने कल रात बाहर कुछ खाया था?' },
            { speaker: 'Patient', textEnglish: 'Yes doctor, I ate some street food at a wedding party.', textHindi: 'हाँ डॉक्टर, मैंने एक शादी की पार्टी में कुछ स्ट्रीट फूड खाया था।' },
            { speaker: 'Doctor', textEnglish: 'It seems to be a minor food infection. Do not worry. Take these pills twice daily after food, and drink plenty of warm water.', textHindi: 'यह मामूली फूड इन्फेक्शन लग रहा है। चिंता मत कीजिए। खाने के बाद दिन में दो बार ये गोलियाँ लीजिए और भरपूर गुनगुना पानी पीजिए।' },
            { speaker: 'Patient', textEnglish: 'Thank you so much, doctor! I will follow your advice.', textHindi: 'बहुत-बहुत धन्यवाद, डॉक्टर! मैं आपकी सलाह का पालन करूँगा।' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Prescription', phonetic: 'prɪˈskrɪp.ʃən (प्रिस्क्रिप्शन)', hindiMeaning: 'दवा की पर्ची / परामर्श पत्र', exampleSentence: 'The chemist asked for the doctor\'s prescription.', sentenceHindi: 'दवा विक्रेता ने डॉक्टर की पर्ची मांगी।' },
        { word: 'Discount', phonetic: 'ˈdɪs.kaʊnt (डिस्काउंट)', hindiMeaning: 'छूट / बट्टा', exampleSentence: 'Is there any festive discount on this book?', sentenceHindi: 'क्या इस पुस्तक पर कोई त्योहारी छूट है?' },
        { word: 'Symptoms', phonetic: 'ˈsɪmp.təmz (सिम्प्टम्स)', hindiMeaning: 'लक्षण', exampleSentence: 'What are the primary symptoms of dengue?', sentenceHindi: 'डेंगू के प्राथमिक लक्षण क्या हैं?' }
      ],
      commonMistakesFixed: [
        { wrong: 'I have stomach paining.', correct: 'I have a stomach ache. / My stomach hurts.', whyWrongHindi: '"Stomach paining" व्याकरण की दृष्टि से अशुद्ध है। सिरदर्द के लिए headache, पेट दर्द के लिए stomach ache बोलते हैं।' },
        { wrong: 'How much price of this?', correct: 'How much does this cost? / What is the price of this?', whyWrongHindi: '"How much does this cost?" सबसे स्वाभाविक और मानक तरीका है।' }
      ],
      fluencyTip: '🎯 Golden Rule 6: इन चारों संवादों को एक बार अपने किसी मित्र या परिवार के सदस्य के साथ रोल-प्ले करके बोलें। इससे असली बातचीत में जुबान नहीं लड़खड़ाएगी।'
    },
    interactiveQuiz: [
      {
        question: 'यदि किसी वस्तु की कीमत पूछनी हो, तो सबसे सटीक स्पोकन वाक्य क्या होगा?',
        options: ['How much is price?', 'How much does this cost?', 'What rate you giving?', 'Tell cost now.'],
        correctIndex: 1,
        explanation: '"How much does this cost?" या "What is the price of this?" मानक और शुद्ध वाक्य है।'
      },
      {
        question: 'यदि आपको कहना हो कि ट्रेन 30 मिनट लेट है, तो सही वाक्य क्या होगा?',
        options: ['The train is 30 minutes late.', 'The train is delayed by 30 minutes.', 'Both A and B are correct.', 'Train coming slow 30 minutes.'],
        correctIndex: 2,
        explanation: 'दोनों ही वाक्य सही हैं, हालांकि औपचारिक घोषणाओं में "delayed by 30 minutes" का अधिक प्रयोग होता है।'
      }
    ]
  },

  // ================= LESSON 7 =================
  {
    id: 'lesson-7-common-spoken-mistakes',
    number: 7,
    titleHindi: '30 सबसे आम गलतियाँ और उनका सही रूप',
    titleEnglish: 'Top 30 Common Spoken Mistakes & Corrections',
    tagline: 'वे गलतियाँ जो 95% भारतीय छात्र अनजाने में करते हैं—आज ही सुधारें',
    level: 'Advanced',
    durationMinutes: 30,
    topics: [
      'रिश्तों व बातचीत में गलत शब्दों का प्रयोग (Cousin brother, revert back)',
      'Preposition की घातक गलतियाँ (Discuss about, enter into)',
      'Subject-Verb Agreement की त्रुटियाँ (He don\'t know, One of my friend)',
      'शब्दों के गलत अर्थ (According to me vs In my opinion)'
    ],
    deepExplanation: {
      introduction: 'अंग्रेजी सीखते समय हम अपनी मातृभाषा (हिंदी) के नियमों को सीधे अंग्रेजी पर थोप देते हैं, जिसे MTI (Mother Tongue Influence) कहते हैं। परिणामस्वरूप हम ऐसी गलतियाँ करते हैं जो अंग्रेजी में बहुत अजीब लगती हैं। इस पाठ में हम इन 10 सबसे बड़ी गलतियों को जड़ से समाप्त करेंगे।',
      rulesAndFormulas: [
        {
          ruleTitle: 'गलती 1: Cousin Brother / Cousin Sister कहना',
          explanationHindi: 'हिंदी में हम कहते हैं "मेरा चचेरा भाई", इसलिए हम Cousin brother बोल देते हैं। अंग्रेजी में Brother या Sister लगाना बिल्कुल गलत है:',
          formulaOrStructure: 'अशुद्ध: He is my cousin brother. ❌ ➔ शुद्ध: He is my cousin. ✅',
          examples: [
            { english: 'He is my cousin.', hindi: 'वह मेरा चचेरा/ममेरा भाई है। (He से पता चल जाता है कि वह पुरुष है)', tip: 'लड़की हो तो बोलें: "She is my cousin."' }
          ]
        },
        {
          ruleTitle: 'गलती 2: "Discuss about" और "Order for"',
          explanationHindi: 'Discuss का अर्थ ही होता है "किसी विषय पर बातचीत करना"। इसके साथ About नहीं लगाया जाता:',
          formulaOrStructure: 'अशुद्ध: Let us discuss about the problem. ❌ ➔ शुद्ध: Let us discuss the problem. ✅',
          examples: [
            { english: 'Let us discuss this chapter.', hindi: 'आइए इस अध्याय पर चर्चा करें।', tip: 'ठीक इसी तरह "Order for tea" नहीं, "Order tea" सही है।' }
          ]
        },
        {
          ruleTitle: 'गलती 3: "Revert back" और "Return back"',
          explanationHindi: 'Revert और Return में \'Back\' (वापस) का अर्थ पहले से जुड़ा होता है। Back लगाना दोहराव (Redundancy) है:',
          formulaOrStructure: 'अशुद्ध: Please revert back soon. ❌ ➔ शुद्ध: Please revert soon. / Please reply soon. ✅',
          examples: [
            { english: 'I will revert to your message soon.', hindi: 'मैं जल्द ही आपके संदेश का उत्तर दूंगा।' },
            { english: 'When did you return from Delhi?', hindi: 'आप दिल्ली से कब लौटे? (Return back नहीं)' }
          ]
        },
        {
          ruleTitle: 'गलती 4: "One of my friend" कहना',
          explanationHindi: 'जब आप कई दोस्तों में से "एक" की बात कर रहे हैं, तो दोस्त बहुवचन (Friends) में होंगे:',
          formulaOrStructure: 'One of + Plural Noun + Singular Verb: One of my friends is a doctor.',
          examples: [
            { english: 'One of my friends lives in Mumbai.', hindi: 'मेरे दोस्तों में से एक मुंबई में रहता है। (friend नहीं, friends)' }
          ]
        },
        {
          ruleTitle: 'गलती 5: "According to me" का गलत इस्तेमाल',
          explanationHindi: 'अंग्रेजी में "According to" हमेशा तीसरे व्यक्ति या रिपोर्ट के लिए आता है (जैसे According to the report / According to Mahatma Gandhi)। जब आप अपना निजी विचार बताते हैं, तो "In my opinion" या "To my mind" कहना चाहिए:',
          formulaOrStructure: 'अशुद्ध: According to me, this plan is best. ❌ ➔ शुद्ध: In my opinion, this plan is best. ✅',
          examples: [
            { english: 'In my opinion, practice is key to speaking English.', hindi: 'मेरी राय में, अभ्यास ही अंग्रेजी बोलने की कुंजी है।' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'इंटरव्यू में सही शब्दों के चयन का प्रदर्शन',
          speakers: [
            { speaker: 'Interviewer', textEnglish: 'What is your opinion about working in a team?', textHindi: 'टीम में काम करने के बारे में आपकी क्या राय है?' },
            { speaker: 'Candidate', textEnglish: 'In my opinion, teamwork brings diverse ideas and helps us solve complex problems faster.', textHindi: 'मेरी राय में, टीमवर्क विविध विचार लाता है और हमें जटिल समस्याओं को तेजी से हल करने में मदद करता है।' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Redundancy', phonetic: 'rɪˈdʌn.dən.si (रिडन्डन्सी)', hindiMeaning: 'अनावश्यक दोहराव', exampleSentence: 'Avoid redundancy in your writing and speech.', sentenceHindi: 'अपने लेखन और भाषण में अनावश्यक दोहराव से बचें।' },
        { word: 'Perspective', phonetic: 'pəˈspek.tɪv (पर्स्पेक्टिव)', hindiMeaning: 'दृष्टिकोण / नजरिया', exampleSentence: 'From my perspective, hard work always pays off.', sentenceHindi: 'मेरे नजरिए से, कड़ी मेहनत का फल हमेशा मिलता है।' }
      ],
      commonMistakesFixed: [
        { wrong: 'He don\'t know.', correct: 'He doesn\'t know.', whyWrongHindi: 'He, She, It के साथ \'does not\' (doesn\'t) लगता है, \'do not\' नहीं।' },
        { wrong: 'I have given the exam.', correct: 'I have taken the exam. / I have appeared for the exam.', whyWrongHindi: 'हिंदी में छात्र परीक्षा \'देते\' हैं और शिक्षक परीक्षा \'लेते\' हैं, लेकिन अंग्रेजी में इसका ठीक उल्टा होता है! छात्र Take the exam करते हैं और शिक्षक Give/Administer the exam करते हैं।' }
      ],
      fluencyTip: '🎯 Golden Rule 7: आज ही अपनी डायरी में लिख लें: "I took the exam" (मैंने परीक्षा दी) और "He is my cousin" (वह मेरा चचेरा भाई है)।'
    },
    interactiveQuiz: [
      {
        question: '"मेरे दोस्तों में से एक डॉक्टर है" का सही अंग्रेजी अनुवाद क्या होगा?',
        options: ['One of my friend is a doctor.', 'One of my friends is a doctor.', 'One of my friends are a doctor.', 'One my friend is doctor.'],
        correctIndex: 1,
        explanation: '\'One of\' के बाद बहुवचन संज्ञा (friends) तथा एकवचन क्रिया (is) आती है: "One of my friends is a doctor."'
      },
      {
        question: '"विद्यार्थी ने कल परीक्षा दी" का सही वाक्य क्या होगा?',
        options: ['The student gave the exam yesterday.', 'The student took the exam yesterday.', 'The student give exam yesterday.', 'The student pass exam yesterday.'],
        correctIndex: 1,
        explanation: 'अंग्रेजी में छात्र परीक्षा "take" करते हैं, अतः "The student took the exam yesterday" सही है।'
      }
    ]
  },

  // ================= LESSON 8 =================
  {
    id: 'lesson-8-fluency-drills-routine',
    number: 8,
    titleHindi: 'धाराप्रवाह बोलने की तकनीक और 15-मिनट वर्कआउट',
    titleEnglish: 'Fluency Drills, Tongue Twisters & Daily Routine',
    tagline: 'हिंदी से अंग्रेजी अनुवाद की आदत कैसे छुड़ाएं और सीधे अंग्रेजी में सोचना शुरू करें',
    level: 'Advanced',
    durationMinutes: 25,
    topics: [
      '\'Think in English\' तकनीक: मन में हिंदी अनुवाद का चक्रव्यूह कैसे तोड़ें?',
      'JAM तकनीक (Just A Minute: बिना रुके 1 मिनट बोलने का अभ्यास)',
      'जीभ को लचीला बनाने वाले 5 प्रसिद्ध Tongue Twisters',
      'रोजाना 15 मिनट का स्पोकन इंग्लिश डेली रूटीन'
    ],
    deepExplanation: {
      introduction: 'अंग्रेजी बोलते समय सबसे बड़ी समस्या यह होती है कि हम पहले हिंदी में वाक्य सोचते हैं, फिर व्याकरण के नियम याद करते हैं, फिर अनुवाद करते हैं, और फिर बोलने की कोशिश करते हैं। इस प्रक्रिया में 4-5 सेकंड का समय लग जाता है और हम हकलाने या चुप रहने लगते हैं। इस पाठ में हम सीधे अंग्रेजी में सोचने और जीभ की झिझक मिटाने की वैज्ञानिक तकनीकें सीखेंगे।',
      rulesAndFormulas: [
        {
          ruleTitle: 'तकनीक 1: \'Think in English\' के 3 आसान कदम',
          explanationHindi: 'एक दिन में सीधे अंग्रेजी में सोचना संभव नहीं है। इन तीन चरणों का पालन करें:',
          examples: [
            { english: 'Step 1 (Single Words): अपने आस-पास की चीजों को अंग्रेजी में नाम दें—पंखा नहीं \'fan\', खिड़की नहीं \'window\', सड़क नहीं \'street\'।', hindi: 'आसपास की सभी वस्तुओं को केवल अंग्रेजी शब्दों से याद करें।' },
            { english: 'Step 2 (Self Talk in Short Sentences): मन ही मन छोटे वाक्य बनाएं—"I am thirsty, I need some water", "It is getting late, let me hurry up।"', hindi: 'दिनभर जो भी काम करें, उसके छोटे वाक्य मन में दोहराएं।' },
            { english: 'Step 3 (Narration): जो कुछ भी आप देख रहे हैं, उसका आंखों देखा हाल कमेंट्री की तरह बोलें।', hindi: 'जैसे: "A bus is passing by. The weather looks pleasant today."' }
          ]
        },
        {
          ruleTitle: 'तकनीक 2: 1-Minute JAM (Just A Minute Challenge)',
          explanationHindi: 'रोजाना एक आसान विषय चुनें (जैसे My School, My Mother, Bihar Board, My Mobile Phone, Morning Walk) और टाइमर लगाकर 60 सेकंड तक बिना रुके, बिना हिंदी बोले अंग्रेजी में बोलें। व्याकरण की गलती होने पर रुकना नहीं है—फ्लो बनाए रखना है!',
          examples: [
            { english: 'Topic Example: "My Mobile Phone"', hindi: 'बोलने का प्रारूप: "My mobile phone is very useful. I use it for attending online classes, reading study materials, and connecting with my family. It saves my time, but overusing it can be harmful. Therefore, I try to use it productively."' }
          ]
        },
        {
          ruleTitle: 'तकनीक 3: Tongue Twisters (जीभ और होठों की मांसपेशियों का व्यायाम)',
          explanationHindi: 'इन्हें पहले धीरे-धीरे और फिर तेजी से 3-3 बार बोलें ताकि जुबान की लड़खड़ाहट खत्म हो:',
          examples: [
            { english: '1. She sells seashells by the seashore.', hindi: 'शी सेल्ज़ सीशेल्ज़ बाई द सीशोर। (श और स के अंतर को ठीक करने के लिए)', pronunciationHint: 'She (श) vs Sea (स)' },
            { english: '2. I scream, you scream, we all scream for ice cream!', hindi: 'आई स्क्रीम, यू स्क्रीम, वी ऑल स्क्रीम फॉर आइसक्रीम!' },
            { english: '3. Red lorry, yellow lorry, red lorry, yellow lorry.', hindi: 'रेड लॉरी, येलो लॉरी, रेड लॉरी, येलो लॉरी।' },
            { english: '4. Peter Piper picked a peck of pickled peppers.', hindi: 'पीटर पाइपर पिक्ड अ पेक ऑफ पिकल्ड पेपर्स।' }
          ]
        },
        {
          ruleTitle: 'दैनिक 15-मिनट स्पोकन वर्कआउट प्लान (Daily 15-Minute Routine)',
          explanationHindi: 'सफलता का रहस्य निरंतरता है। यदि आप रोजाना केवल 15 मिनट इस तालिका का पालन करें:',
          formulaOrStructure: 'Minute 1-5: Loud Reading (जोर से 1 पैराग्राफ पढ़ना) | Minute 6-10: 1-Minute JAM Speaking | Minute 11-15: 5 New Sentences Practice',
          examples: [
            { english: '5 Mins: Read an English newspaper or English textbook chapter out loud.', hindi: '5 मिनट जोर से पढ़ें ताकि आपके कान और होंठ अभ्यस्त हों।' },
            { english: '5 Mins: Practice JAM on any random topic in front of the mirror.', hindi: '5 मिनट शीशे के सामने किसी भी विषय पर 1 मिनट बिना रुके बोलें।' },
            { english: '5 Mins: Write and speak 5 new sentences using today\'s phrases.', hindi: '5 मिनट नए वाक्यों को जोर से दोहराएं।' }
          ]
        }
      ],
      practicalDialogues: [
        {
          situation: 'एक मिनट का प्रेरणादायक भाषण (Motivation for Fluency)',
          speakers: [
            { speaker: 'Mentor', textEnglish: 'English is not a measure of your intelligence; it is simply a skill. Just like swimming or cycling, you cannot learn it by reading books alone. You have to open your mouth and speak. Do not be afraid of making mistakes. Every mistake is a step forward!', textHindi: 'अंग्रेजी आपकी बुद्धिमत्ता का पैमाना नहीं है; यह केवल एक हुनर (Skill) है। तैराकी या साइकिल चलाने की तरह, आप इसे सिर्फ किताबें पढ़कर नहीं सीख सकते। आपको अपना मुंह खोलकर बोलना होगा। गलतियाँ करने से मत डरिए। हर गलती प्रगति की दिशा में एक कदम है!' }
          ]
        }
      ],
      vocabularyList: [
        { word: 'Consistent', phonetic: 'kənˈsɪs.tənt (कंसिस्टेंट)', hindiMeaning: 'लगातार / निरंतर', exampleSentence: 'Consistent practice is the secret to mastery.', sentenceHindi: 'निरंतर अभ्यास ही दक्षता का रहस्य है।' },
        { word: 'Fluency', phonetic: 'ˈfluː.ən.si (फ्लूएंसी)', hindiMeaning: 'धाराप्रवाहता / सहज प्रवाह', exampleSentence: 'He speaks English with remarkable fluency.', sentenceHindi: 'वह उल्लेखनीय धाराप्रवाहता के साथ अंग्रेजी बोलता है।' },
        { word: 'Articulate', phonetic: 'ɑːˈtɪk.jə.lət (आर्टिक्युलेट)', hindiMeaning: 'स्पष्ट और प्रभावशाली ढंग से विचार व्यक्त करने वाला', exampleSentence: 'She is an articulate speaker who expresses her ideas clearly.', sentenceHindi: 'वह एक स्पष्ट वक्ता हैं जो अपने विचार साफ-साफ व्यक्त करती हैं।' }
      ],
      commonMistakesFixed: [
        { wrong: 'Speaking very fast to sound fluent.', correct: 'Speaking with clarity and natural pauses.', whyWrongHindi: 'धाराप्रवाह होने का मतलब तेज बोलना नहीं है, बल्कि स्पष्ट और बिना अटके अपनी बात समझाना है।' }
      ],
      fluencyTip: '🎯 Final Golden Rule: रोजाना कम से कम एक व्यक्ति से 5 मिनट केवल अंग्रेजी में बात करने का नियम बनाएं। यदि कोई साथी न मिले, तो अपने फोन के वॉयस रिकॉर्डर से बात करें!'
    },
    interactiveQuiz: [
      {
        question: 'धाराप्रवाह अंग्रेजी बोलने के लिए सबसे महत्वपूर्ण मानसिक बदलाव क्या है?',
        options: ['बहुत कठिन शब्द याद करना', 'मन में हिंदी से अनुवाद करना बंद करके सीधे अंग्रेजी में सोचना', 'तेज गति से बोलना', 'हमेशा भारी व्याकरण सोचना'],
        correctIndex: 1,
        explanation: 'अनुवाद करने की आदत छोड़कर सीधे अंग्रेजी में सोचने का अभ्यास ही वास्तविक धाराप्रवाहता लाता है।'
      },
      {
        question: 'Tongue Twisters का मुख्य उद्देश्य क्या है?',
        options: ['कठिन वर्तनी याद करना', 'जीभ और उच्चारण की मांसपेशियों को लचीला और स्पष्ट बनाना', 'परीक्षा में अंक लाना', 'गाना गाना'],
        correctIndex: 1,
        explanation: 'Tongue Twisters बोलने से जीभ की झिझक खत्म होती है और शब्दों का उच्चारण एकदम साफ और स्पष्ट हो जाता है।'
      }
    ]
  }
];
