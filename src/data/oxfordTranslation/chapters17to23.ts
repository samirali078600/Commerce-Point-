import { OxfordChapter } from './types';

export const CHAPTERS_17_TO_23: OxfordChapter[] = [
  {
    id: 'oxford-ch-17',
    chapterNumber: 17,
    heading: 'Use of Can, May, Should, Must & Ought',
    hindiHeading: 'Modals: Can, May, Should, Must और Ought to का प्रयोग',
    pageNo: 232,
    description: 'क्षमता (Ability), अनुमति (Permission), संभावना (Possibility), कर्तव्य (Duty), नैतिक दायित्व (Moral Obligation) और अनिवार्यता के लिए Modals का प्रयोग।',
    rules: [
      {
        title: 'Can vs May',
        formula: 'Can + V1 (Ability / Informal) | May + V1 (Permission / Possibility / Wish)',
        explanationHindi: 'Can का प्रयोग शारीरिक/मानसिक क्षमता (Power, Ability) व्यक्त करने के लिए होता है। May का प्रयोग औपचारिक अनुमति माँगने/देने, संभावना (Possibility), या शुभकामना (Wish/Blessing) के लिए होता है।',
        explanationEnglish: 'Use Can for ability and strength. Use May for formal permission, likelihood, and benediction/prayer.',
        examples: [
          { hindi: 'मैं इस नदी को तैरकर पार कर सकता हूँ।', english: 'I can swim across this river.', note: 'Ability / Capacity' },
          { hindi: 'क्या मैं अंदर आ सकता हूँ, श्रीमान?', english: 'May I come in, sir?', note: 'Formal Permission' },
          { hindi: 'आज वर्षा हो सकती है।', english: 'It may rain today.', note: 'Possibility' },
          { hindi: 'भगवान आपका भला करे!', english: 'May God bless you!' }
        ]
      },
      {
        title: 'Should, Must & Ought to',
        formula: 'Should + V1 (General Advice) | Must + V1 (Compulsion / Strong Advice) | Ought to + V1 (Moral Duty)',
        explanationHindi: 'Should = सामान्य सलाह या कर्तव्य ("चाहिए")। Must = पक्की अनिवार्यता या निश्चितता ("अवश्य/जरूर चाहिए")। Ought to = नैतिक या सामाजिक कर्तव्य (माता-पिता का आदर, देश प्रेम)।',
        explanationEnglish: 'Should gives general advice. Must expresses urgent necessity. Ought to expresses moral duty or social responsibility.',
        examples: [
          { hindi: 'तुम्हें नियमित रूप से पढ़ना चाहिए।', english: 'You should read regularly.' },
          { hindi: 'हमें अपने माता-पिता की आज्ञा माननी चाहिए।', english: 'We ought to obey our parents.' },
          { hindi: 'तुम्हें दवा समय पर अवश्य लेनी चाहिए।', english: 'You must take medicine on time.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v17-1', word: 'Capacity', hindiMeaning: 'क्षमता / सामर्थ्य', pronunciation: 'कैपेसिटी', partOfSpeech: 'Noun', exampleSentence: 'He has the capacity to lead.' },
      { id: 'v17-2', word: 'Permission', hindiMeaning: 'अनुमति / आज्ञा', pronunciation: 'परमिशन', partOfSpeech: 'Noun', exampleSentence: 'Ask for permission first.' },
      { id: 'v17-3', word: 'Moral Duty', hindiMeaning: 'नैतिक कर्तव्य', pronunciation: 'मोरल ड्यूटी', partOfSpeech: 'Noun Phrase', exampleSentence: 'Serving elders is our moral duty.' },
      { id: 'v17-4', word: 'Obligatory', hindiMeaning: 'अनिवार्य / बाध्यकारी', pronunciation: 'ऑब्लिगेटरी', partOfSpeech: 'Adjective', exampleSentence: 'Wearing a helmet is obligatory.' }
    ],
    exercises: [
      {
        id: 'ex-17-1',
        exerciseNumber: 1,
        title: 'Exercise: Modal Auxiliaries Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English using suitable modals:',
        sentences: [
          { id: 's-17-1', hindi: 'तुम धाराप्रवाह अंग्रेजी बोल सकते हो।', english: 'You can speak English fluently.' },
          { id: 's-17-2', hindi: 'क्या मैं आपकी कलम ले सकता हूँ?', english: 'May I take your pen?' },
          { id: 's-17-3', hindi: 'हमें अपने देश से प्रेम करना चाहिए।', english: 'We ought to love our country.' },
          { id: 's-17-4', hindi: 'छात्रों को नियमों का अवश्य पालन करना चाहिए।', english: 'Students must follow the rules.' },
          { id: 's-17-5', hindi: 'वह इस भारी बक्से को नहीं उठा सकता है।', english: 'He cannot lift this heavy box.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "हमें अपने बड़ों का आदर करना चाहिए।" (Moral Duty)',
        options: ['We ought to respect our elders.', 'We can respect our elders.', 'We may respect our elders.', 'We must to respect our elders.'],
        answer: 'We ought to respect our elders.',
        explanation: 'Moral obligations towards elders are best expressed with "ought to".'
      }
    ]
  },
  {
    id: 'oxford-ch-18',
    chapterNumber: 18,
    heading: 'Forms of Subjects',
    hindiHeading: 'Forms of Subjects (कर्ता के विभिन्न रूप एवं प्रकार)',
    pageNo: 237,
    description: 'कर्ता (Subject) के विभिन्न रूप: Noun, Pronoun, Gerund (V+ing), Infinitive (To + V1), Phrase तथा Clause जब Subject का कार्य करते हैं।',
    rules: [
      {
        title: 'Gerund and Infinitive as Subject',
        formula: 'Walking is... (Gerund) | To walk is... (Infinitive)',
        explanationHindi: 'जब किसी क्रिया (Verb) को संज्ञा (Noun) के रूप में वाक्य का Subject बनाया जाता है, तब वह या तो Gerund (V-ing) के रूप में आता है या Infinitive (To + V1) के रूप में। दोनों का अर्थ एक ही होता है।',
        explanationEnglish: 'Both Gerund (verb+ing) and Infinitive (to+verb) can function as the subject of a sentence.',
        examples: [
          { hindi: 'टहलना स्वास्थ्य के लिए लाभदायक है।', english: 'Walking is good for health. / To walk is good for health.' },
          { hindi: 'धूम्रपान करना हानिकारक है।', english: 'Smoking is injurious to health.' },
          { hindi: 'तैरना एक अच्छा व्यायाम है।', english: 'Swimming is a good exercise.' },
          { hindi: 'झूठ बोलना पाप है।', english: 'To tell a lie is a sin. / Telling a lie is a sin.' }
        ]
      },
      {
        title: 'Noun Clauses as Subject',
        formula: 'That / What / How + Clause + Verb',
        explanationHindi: 'कभी-कभी पूरा एक उपवाक्य (Clause) ही वाक्य का कर्ता बन जाता है।',
        explanationEnglish: 'A noun clause can serve as the complete grammatical subject.',
        examples: [
          { hindi: 'वह ईमानदार है, यह सभी जानते हैं।', english: 'That he is honest is known to all.' },
          { hindi: 'उसने क्या कहा, सच नहीं है।', english: 'What he said is not true.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v18-1', word: 'Injurious', hindiMeaning: 'हानिकारक / नुकसानदेह', pronunciation: 'इंजूरियस', partOfSpeech: 'Adjective', exampleSentence: 'Smoking is injurious to health.' },
      { id: 'v18-2', word: 'Sin', hindiMeaning: 'पाप / गुनाह', pronunciation: 'सिन', partOfSpeech: 'Noun', exampleSentence: 'To deceive others is a sin.' },
      { id: 'v18-3', word: 'Exercise', hindiMeaning: 'व्यायाम / कसरत', pronunciation: 'एक्सरसाइज', partOfSpeech: 'Noun', exampleSentence: 'Swimming is a great exercise.' }
    ],
    exercises: [
      {
        id: 'ex-18-1',
        exerciseNumber: 1,
        title: 'Exercise: Gerund & Infinitive as Subject',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-18-1', hindi: 'सुबह में टहलना एक अच्छी आदत है।', english: 'Walking in the morning is a good habit.' },
          { id: 's-18-2', hindi: 'अंग्रेजी सीखना आसान है।', english: 'Learning English is easy. / To learn English is easy.' },
          { id: 's-18-3', hindi: 'गलती करना मनुष्य का स्वभाव है।', english: 'To err is human.' },
          { id: 's-18-4', hindi: 'दूसरों की मदद करना हमारा कर्तव्य है।', english: 'Helping others is our duty.' },
          { id: 's-18-5', hindi: 'वह निर्दोष है, यह स्पष्ट है।', english: 'That he is innocent is obvious.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Complete the famous proverb: "To err is human, to forgive is ______."',
        options: ['divine', 'good', 'kind', 'nature'],
        answer: 'divine',
        explanation: '"To err is human, to forgive divine" is a classical proverb using infinitives as subjects.'
      }
    ]
  },
  {
    id: 'oxford-ch-19',
    chapterNumber: 19,
    heading: 'Voice',
    hindiHeading: 'Voice (Active Voice एवं Passive Voice के रूपांतरण नियम)',
    pageNo: 251,
    description: 'Active Voice से Passive Voice बनाने के सामान्य एवं विशेष नियम: Object को Subject बनाना, Helping Verb + V3 (Past Participle), और "by" + Agent का प्रयोग।',
    rules: [
      {
        title: 'General Formula of Passive Voice',
        formula: 'Passive Subject + Appropriate Auxiliary Verb + V3 + by + Passive Object',
        explanationHindi: '1. Active Voice के Object को Passive Voice का Subject बनाया जाता है।\n2. Tense और नए Subject के अनुसार Helping Verb का प्रयोग होता है।\n3. Passive Voice में मुख्य क्रिया का हमेशा तीसरा रूप (V3) ही आता है।\n4. कर्ता से पहले प्रायः "by" लगाया जाता है (परंतु कुछ verbs के साथ at, with, to आदि लगते हैं, जैसे surprised at, known to, pleased with)।',
        explanationEnglish: 'The object of the active verb becomes the subject of the passive verb. The verb is in past participle (V3) preceded by a form of "be".',
        examples: [
          { hindi: 'राम एक पत्र लिखता है।', english: 'Ram writes a letter. -> A letter is written by Ram.' },
          { hindi: 'उसने मुझे बुलाया।', english: 'He called me. -> I was called by him.' },
          { hindi: 'वे लोग क्रिकेट खेल रहे हैं।', english: 'They are playing cricket. -> Cricket is being played by them.' },
          { hindi: 'मैंने काम समाप्त कर लिया है।', english: 'I have finished the work. -> The work has been finished by me.' }
        ]
      },
      {
        title: 'Imperative Sentences in Passive Voice',
        formula: 'Order: Let + Object + be + V3 | Advice: Object + should be + V3 | Request: You are requested to + V1',
        explanationHindi: 'आदेश वाले वाक्यों में "Let + Object + be + V3" लगाते हैं। सलाह में "should be + V3" तथा प्रार्थना में "You are requested to" का प्रयोग होता है।',
        explanationEnglish: 'Commands use "Let + Obj + be + V3". Advice uses "should be + V3". Requests use "You are requested to".',
        examples: [
          { hindi: 'दरवाजा खोलो।', english: 'Open the door. -> Let the door be opened.' },
          { hindi: 'गरीबों की मदद करो।', english: 'Help the poor. -> The poor should be helped.' },
          { hindi: 'कृपया यहाँ बैठिए।', english: 'Please sit here. -> You are requested to sit here.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v19-1', word: 'Active', hindiMeaning: 'सक्रिय / प्रत्यक्ष', pronunciation: 'एक्टिव', partOfSpeech: 'Adjective', exampleSentence: 'The active subject performs the action.' },
      { id: 'v19-2', word: 'Passive', hindiMeaning: 'कर्मवाच्य / निष्क्रिय', pronunciation: 'पैसिव', partOfSpeech: 'Adjective', exampleSentence: 'Change the voice to passive.' },
      { id: 'v19-3', word: 'Agent', hindiMeaning: 'कर्ता / कार्य करने वाला', pronunciation: 'एजेंट', partOfSpeech: 'Noun', exampleSentence: 'The agent is preceded by "by".' }
    ],
    exercises: [
      {
        id: 'ex-19-1',
        exerciseNumber: 1,
        title: 'Exercise: Active into Passive Translation',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का Passive Voice में अनुवाद करें:',
        instructionsEnglish: 'Translate into English in Passive Voice:',
        sentences: [
          { id: 's-19-1', hindi: 'एक पत्र लिखा जा रहा है।', english: 'A letter is being written.' },
          { id: 's-19-2', hindi: 'सड़क की मरम्मत की जा चुकी है।', english: 'The road has been repaired.' },
          { id: 's-19-3', hindi: 'उसे दंडित किया गया।', english: 'He was punished.' },
          { id: 's-19-4', hindi: 'अंग्रेजी पूरी दुनिया में बोली जाती है।', english: 'English is spoken all over the world.' },
          { id: 's-19-5', hindi: 'यह काम तुरंत किया जाना चाहिए।', english: 'This work should be done immediately.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Change into Passive: "The cat killed the mouse."',
        options: ['The mouse was killed by the cat.', 'The mouse is killed by the cat.', 'The mouse had killed by the cat.', 'The cat was killed by the mouse.'],
        answer: 'The mouse was killed by the cat.',
        explanation: 'Simple Past changes to was/were + V3 (was killed by the cat).'
      }
    ]
  },
  {
    id: 'oxford-ch-20',
    chapterNumber: 20,
    heading: 'Direct & Indirect Speech / Narration',
    hindiHeading: 'Direct और Indirect Speech (प्रत्यक्ष एवं अप्रत्यक्ष कथन)',
    pageNo: 268,
    description: 'वक्ता के कथन को ज्यों का त्यों (Direct) या अपने शब्दों में (Indirect) कहना। SON/123 नियम, Change of Tense, और Change of other words (this -> that, now -> then, today -> that day)।',
    rules: [
      {
        title: 'Golden Rule of Person Change (SON Formula)',
        formula: 'S (Subject) -> 1st Person | O (Object) -> 2nd Person | N (No change) -> 3rd Person',
        explanationHindi: '1. 1st Person (I, we, my, our) Reporting Verb के Subject के अनुसार बदलता है।\n2. 2nd Person (you, your) Reporting Verb के Object के अनुसार बदलता है।\n3. 3rd Person (he, she, it, they, name) में कोई परिवर्तन नहीं होता (No change)।',
        explanationEnglish: 'First person changes according to the Subject of the reporting verb; second person according to the Object; third person undergoes No change (SON/123).',
        examples: [
          { hindi: 'उसने मुझसे कहा, "मैं तुम्हारा मित्र हूँ।"', english: 'He said to me, "I am your friend." -> He told me that he was my friend.' },
          { hindi: 'राम ने कहा, "वह ईमानदार है।"', english: 'Ram said, "He is honest." -> Ram said that he was honest.' }
        ]
      },
      {
        title: 'Change of Tense Rules',
        explanationHindi: 'यदि Reporting Verb Past Tense (said / told) में हो, तो Reported Speech का Tense बदल जाता है:\n- Simple Present -> Simple Past\n- Present Continuous -> Past Continuous\n- Present Perfect -> Past Perfect\n- Simple Past -> Past Perfect\n- can -> could, may -> might, will/shall -> would/should.\n*अपवाद: Universal Truth (सार्वभौमिक सत्य) का Tense कभी नहीं बदलता (The teacher said, "The earth is round" -> The teacher said that the earth is round).',
        explanationEnglish: 'Past reporting verb triggers backshifting of tenses, except for universal truths and historical facts.',
        examples: [
          { hindi: 'शिक्षक ने कहा, "सूर्य पूर्व में उगता है।"', english: 'The teacher said that the sun rises in the east.', note: 'Universal Truth - Tense remains present.' },
          { hindi: 'उसने कहा, "मैं आज व्यस्त हूँ।"', english: 'He said that he was busy that day.', note: 'today -> that day' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v20-1', word: 'Narration', hindiMeaning: 'कथन / बयान', pronunciation: 'नरेशन', partOfSpeech: 'Noun', exampleSentence: 'We studied direct and indirect narration.' },
      { id: 'v20-2', word: 'Reporting Verb', hindiMeaning: 'परिचयात्मक क्रिया (Said/Told)', pronunciation: 'रिपोर्टिंग वर्ब', partOfSpeech: 'Noun', exampleSentence: '"Said" is the reporting verb.' },
      { id: 'v20-3', word: 'Universal Truth', hindiMeaning: 'सार्वभौमिक अटल सत्य', pronunciation: 'यूनिवर्सल ट्रुथ', partOfSpeech: 'Noun Phrase', exampleSentence: 'A universal truth does not change tense.' }
    ],
    exercises: [
      {
        id: 'ex-20-1',
        exerciseNumber: 1,
        title: 'Exercise: Direct to Indirect Narration',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों को Indirect Speech में बदलें:',
        instructionsEnglish: 'Turn into Indirect Speech:',
        sentences: [
          { id: 's-20-1', hindi: 'उसने कहा, "मैं एक डॉक्टर हूँ।"', english: 'He said that he was a doctor.' },
          { id: 's-20-2', hindi: 'सीता ने मुझसे कहा, "मैं तुम्हारी मदद करूँगी।"', english: 'Sita told me that she would help me.' },
          { id: 's-20-3', hindi: 'पिताजी ने कहा, "ईमानदारी सबसे अच्छी नीति है।"', english: 'Father said that honesty is the best policy.' },
          { id: 's-20-4', hindi: 'उसने मुझसे पूछा, "तुम्हारा नाम क्या है?"', english: 'He asked me what my name was.' },
          { id: 's-20-5', hindi: 'शिक्षक ने छात्रों से कहा, "कड़ी मेहनत करो।"', english: 'The teacher advised the students to work hard.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Change into Indirect: He said, "The earth is round."',
        options: ['He said that the earth is round.', 'He said that the earth was round.', 'He told that the earth is round.', 'He said the earth had been round.'],
        answer: 'He said that the earth is round.',
        explanation: 'Universal truths do not change tense in indirect speech.'
      }
    ]
  },
  {
    id: 'oxford-ch-21',
    chapterNumber: 21,
    heading: 'Short Forms for Spoken & Written English',
    hindiHeading: 'संक्षिप्त रूप (Short Forms & Contractions for Spoken English)',
    pageNo: 286,
    description: 'दैनिक बोलचाल एवं लिखित अंग्रेजी में प्रयुक्त संकुचन रूप (Contractions) जैसे I\'m, don\'t, haven\'t, won\'t, can\'t, shan\'t, gotta, wanna, आदि का सही उपयोग।',
    rules: [
      {
        title: 'Standard English Contractions',
        formula: 'Word + Apostrophe (\') + Shortened form',
        explanationHindi: 'अंग्रेजी बोलने और लिखने में प्रवाह (Fluency) लाने के लिए शब्दों को संकुचित किया जाता है। जैसे:\n- I am -> I\'m\n- We are -> We\'re\n- Do not -> Don\'t\n- Does not -> Doesn\'t\n- Did not -> Didn\'t\n- Will not -> Won\'t\n- Shall not -> Shan\'t\n- Cannot -> Can\'t\n- Would / Had -> \'d (I\'d like / He\'d gone)',
        explanationEnglish: 'Contractions combine words by omitting letters and substituting an apostrophe. Essential for natural rhythm and spoken fluency.',
        examples: [
          { hindi: 'मैं तैयार हूँ। (Spoken)', english: 'I\'m ready.' },
          { hindi: 'वह यहाँ नहीं आएगी।', english: 'She won\'t come here.' },
          { hindi: 'मेरे पास समय नहीं है।', english: 'I haven\'t any time.' },
          { hindi: 'वह नहीं जा सका।', english: 'He couldn\'t go.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v21-1', word: 'Contraction', hindiMeaning: 'संकुचन / संक्षिप्त रूप', pronunciation: 'कॉन्ट्रैक्शन', partOfSpeech: 'Noun', exampleSentence: '"Won\'t" is the contraction of will not.' },
      { id: 'v21-2', word: 'Fluency', hindiMeaning: 'प्रवाह / बोलने में गति', pronunciation: 'फ्लूएंसी', partOfSpeech: 'Noun', exampleSentence: 'Contractions improve conversational fluency.' },
      { id: 'v21-3', word: 'Pronunciation', hindiMeaning: 'उच्चारण', pronunciation: 'प्रोनन्सिएशन', partOfSpeech: 'Noun', exampleSentence: 'Practice proper English pronunciation.' }
    ],
    exercises: [
      {
        id: 'ex-21-1',
        exerciseNumber: 1,
        title: 'Exercise: Spoken Short Forms Practice',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों को संक्षिप्त रूपों का प्रयोग कर अनुवाद करें:',
        instructionsEnglish: 'Translate into English using contractions:',
        sentences: [
          { id: 's-21-1', hindi: 'मैं आज नहीं आ रहा हूँ।', english: 'I\'m not coming today.' },
          { id: 's-21-2', hindi: 'उसे चिंता करने की जरूरत नहीं है।', english: 'He doesn\'t need to worry.' },
          { id: 's-21-3', hindi: 'वे लोग मैच नहीं हारेंगे।', english: 'They won\'t lose the match.' },
          { id: 's-21-4', hindi: 'क्या आपने उसे नहीं देखा?', english: 'Haven\'t you seen him? / Didn\'t you see him?' },
          { id: 's-21-5', hindi: 'चलो अब घर चलें।', english: 'Let\'s go home now.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'What is the standard spoken contraction of "will not"?',
        options: ['won\'t', 'willn\'t', 'wont', 'win\'t'],
        answer: 'won\'t',
        explanation: 'Will + not contracts irregularly to "won\'t".'
      }
    ]
  },
  {
    id: 'oxford-ch-22',
    chapterNumber: 22,
    heading: 'Exercises for Revision',
    hindiHeading: 'व्यापक पुनरावृत्ति अभ्यास (Comprehensive Revision Exercises)',
    pageNo: 288,
    description: 'सभी पूर्व अध्यायों के मिले-जुले वाक्यों का समग्र पुनरावृत्ति अभ्यास (Am/Is/Are, Tense, Voice, Modals, There/It, Narration, Prepositions)।',
    rules: [
      {
        title: 'Revision Principles (पुनरावृत्ति के सूत्र)',
        formula: 'Analyze Tense -> Identify Subject & Object -> Choose Correct Verb Form & Preposition',
        explanationHindi: 'किसी भी मिश्रित वाक्य का अनुवाद करते समय:\n1. सबसे पहले वाक्य के काल (Tense) और भाव (Mood/Modals) को पहचानें।\n2. कर्ता (Subject), कर्म (Object) और मुख्य क्रिया (Verb) को अलग करें।\n3. Articles (A, An, The) और Preposition की शुद्धता की जाँच करें।',
        explanationEnglish: 'Follow systematic grammatical decomposition before translating complex integrated sentences.',
        examples: [
          { hindi: 'भारत एक महान देश है और हम इसके नागरिक हैं।', english: 'India is a great country and we are its citizens.' },
          { hindi: 'जब तक तुम परिश्रम नहीं करोगे, तुम सफल नहीं हो सकते।', english: 'Unless you work hard, you cannot succeed.' },
          { hindi: 'वहाँ एक पुराना बरगद का पेड़ था जिसके नीचे बच्चे खेलते थे।', english: 'There was an old banyan tree under which children used to play.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v22-1', word: 'Comprehensive', hindiMeaning: 'व्यापक / सर्वांगीण', pronunciation: 'कॉम्प्रिहेंसिव', partOfSpeech: 'Adjective', exampleSentence: 'This is a comprehensive guide.' },
      { id: 'v22-2', word: 'Perseverance', hindiMeaning: 'दृढ़ता / लगन', pronunciation: 'पर्सिवियरेंस', partOfSpeech: 'Noun', exampleSentence: 'Perseverance leads to success.' },
      { id: 'v22-3', word: 'Patriotism', hindiMeaning: 'देशभक्ति', pronunciation: 'पैट्रियॉटिज्म', partOfSpeech: 'Noun', exampleSentence: 'We must show patriotism.' }
    ],
    exercises: [
      {
        id: 'ex-22-1',
        exerciseNumber: 1,
        title: 'Master Revision Exercise (मिश्रित अनुवाद परीक्षा)',
        category: 'revision',
        instructionsHindi: 'निम्नलिखित मिश्रित वाक्यों का शुद्ध अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-22-1', hindi: 'ईमानदारी सबसे बड़ा गुण है और यह सदैव सम्मान दिलाती है।', english: 'Honesty is the greatest virtue and it always brings respect.' },
          { id: 's-22-2', hindi: 'यदि तुम नियमित अध्ययन करोगे, तो बोर्ड परीक्षा में सर्वोच्च अंक प्राप्त करोगे।', english: 'If you study regularly, you will secure top marks in the board examination.' },
          { id: 's-22-3', hindi: 'हमारे गाँव में एक सुंदर पुस्तकालय है जहाँ सैकड़ों पुस्तकें हैं।', english: 'There is a beautiful library in our village where there are hundreds of books.' },
          { id: 's-22-4', hindi: 'डॉक्टर के पहुँचने से पूर्व रोगी की स्थिति में सुधार हो चुका था।', english: 'The patient\'s condition had improved before the doctor arrived.' },
          { id: 's-22-5', hindi: 'हमें अपने राष्ट्र के विकास के लिए मिलकर काम करना चाहिए।', english: 'We ought to work together for the development of our nation.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "जब तक तुम परिश्रम नहीं करोगे, सफल नहीं होगे।"',
        options: ['Unless you work hard, you will not succeed.', 'Until you work hard, you will not succeed.', 'If you do not work hard, you will succeed.', 'Unless you do not work hard, you will fail.'],
        answer: 'Unless you work hard, you will not succeed.',
        explanation: '"Unless" already contains negative meaning (if not), so the clause does not take another "not".'
      }
    ]
  },
  {
    id: 'oxford-ch-23',
    chapterNumber: 23,
    heading: 'Verb Forms',
    hindiHeading: 'Verb Forms (क्रिया के पांचों रूप: V1, V2, V3, V4, V5)',
    pageNo: 312,
    description: 'क्रिया के रूपों की विस्तृत तालिका: Present (V1), Past (V2), Past Participle (V3), Present Participle / -ing (V4), और 3rd Person Singular / -s/-es (V5) हिंदी अर्थ के साथ।',
    rules: [
      {
        title: 'The Five Forms of English Verbs',
        formula: 'V1 (Base) -> V2 (Past) -> V3 (Past Participle) -> V4 (V1+ing) -> V5 (V1+s/es)',
        explanationHindi: 'अंग्रेजी में क्रियाओं के दो वर्ग होते हैं:\n1. Regular Verbs: जिनके V2 और V3 में -ed या -d जुड़ता है (जैसे play -> played -> played, work -> worked -> worked).\n2. Irregular Verbs: जिनके रूप बदलते हैं (जैसे go -> went -> gone, write -> wrote -> written, cut -> cut -> cut).',
        explanationEnglish: 'Verbs are classified as regular (forming past with -ed) or irregular (undergoing vowel changes or retaining base forms).',
        examples: [
          { hindi: 'Go (जाना)', english: 'go (V1) | went (V2) | gone (V3) | going (V4) | goes (V5)' },
          { hindi: 'Write (लिखना)', english: 'write (V1) | wrote (V2) | written (V3) | writing (V4) | writes (V5)' },
          { hindi: 'Speak (बोलना)', english: 'speak (V1) | spoke (V2) | spoken (V3) | speaking (V4) | speaks (V5)' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v23-1', word: 'Base Form', hindiMeaning: 'मूल रूप (V1)', pronunciation: 'बेस फॉर्म', partOfSpeech: 'Noun', exampleSentence: 'The base form is used with modal verbs.' },
      { id: 'v23-2', word: 'Past Participle', hindiMeaning: 'भूतकालिक कृदंत (V3)', pronunciation: 'पास्ट पार्टिसिपल', partOfSpeech: 'Noun', exampleSentence: 'Past participle is used in all perfect tenses and passive voice.' }
    ],
    exercises: [
      {
        id: 'ex-23-1',
        exerciseNumber: 1,
        title: 'Exercise: Verb Forms Usage in Sentences',
        category: 'mixed',
        instructionsHindi: 'उचित Verb Form का प्रयोग कर अनुवाद करें:',
        instructionsEnglish: 'Translate into English with correct verb forms:',
        sentences: [
          { id: 's-23-1', hindi: 'उसने अपना पाठ याद कर लिया है। (Learn - V3)', english: 'He has learnt (learned) his lesson.' },
          { id: 's-23-2', hindi: 'पक्षी आकाश में उड़ रहे हैं। (Fly - V4)', english: 'The birds are flying in the sky.' },
          { id: 's-23-3', hindi: 'कल उसने मुझे एक पुस्तक दी। (Give - V2)', english: 'He gave me a book yesterday.' },
          { id: 's-23-4', hindi: 'सूरज पूर्व में निकलता है। (Rise - V5)', english: 'The sun rises in the east.' },
          { id: 's-23-5', hindi: 'शीशा बच्चे द्वारा तोड़ा गया। (Break - V3)', english: 'The glass was broken by the child.' }
        ]
      }
    ],
    verbForms: [
      { v1: 'arise', v2: 'arose', v3: 'arisen', v4: 'arising', v5: 'arises', hindiMeaning: 'उठना / उत्पन्न होना' },
      { v1: 'awake', v2: 'awoke', v3: 'awoken', v4: 'awaking', v5: 'awakes', hindiMeaning: 'जागना / जगाना' },
      { v1: 'be (am/is/are)', v2: 'was / were', v3: 'been', v4: 'being', v5: 'is', hindiMeaning: 'होना / रहना' },
      { v1: 'bear', v2: 'bore', v3: 'born / borne', v4: 'bearing', v5: 'bears', hindiMeaning: 'जन्म देना / सहन करना' },
      { v1: 'beat', v2: 'beat', v3: 'beaten', v4: 'beating', v5: 'beats', hindiMeaning: 'पीटना' },
      { v1: 'become', v2: 'became', v3: 'become', v4: 'becoming', v5: 'becomes', hindiMeaning: 'होना / बनना' },
      { v1: 'begin', v2: 'began', v3: 'begun', v4: 'beginning', v5: 'begins', hindiMeaning: 'शुरू करना' },
      { v1: 'bite', v2: 'bit', v3: 'bitten', v4: 'biting', v5: 'bites', hindiMeaning: 'दाँत से काटना' },
      { v1: 'blow', v2: 'blew', v3: 'blown', v4: 'blowing', v5: 'blows', hindiMeaning: 'हवा बहना' },
      { v1: 'break', v2: 'broke', v3: 'broken', v4: 'breaking', v5: 'breaks', hindiMeaning: 'तोड़ना' },
      { v1: 'bring', v2: 'brought', v3: 'brought', v4: 'bringing', v5: 'brings', hindiMeaning: 'लाना' },
      { v1: 'build', v2: 'built', v3: 'built', v4: 'building', v5: 'builds', hindiMeaning: 'निर्माण करना' },
      { v1: 'burn', v2: 'burnt / burned', v3: 'burnt / burned', v4: 'burning', v5: 'burns', hindiMeaning: 'जलना / जलाना' },
      { v1: 'buy', v2: 'bought', v3: 'bought', v4: 'buying', v5: 'buys', hindiMeaning: 'खरीदना' },
      { v1: 'catch', v2: 'caught', v3: 'caught', v4: 'catching', v5: 'catches', hindiMeaning: 'पकड़ना' },
      { v1: 'choose', v2: 'chose', v3: 'chosen', v4: 'choosing', v5: 'chooses', hindiMeaning: 'चुनना' },
      { v1: 'come', v2: 'came', v3: 'come', v4: 'coming', v5: 'comes', hindiMeaning: 'आना' },
      { v1: 'cost', v2: 'cost', v3: 'cost', v4: 'costing', v5: 'costs', hindiMeaning: 'मूल्य होना' },
      { v1: 'cut', v2: 'cut', v3: 'cut', v4: 'cutting', v5: 'cuts', hindiMeaning: 'काटना' },
      { v1: 'do', v2: 'did', v3: 'done', v4: 'doing', v5: 'does', hindiMeaning: 'करना' },
      { v1: 'draw', v2: 'drew', v3: 'drawn', v4: 'drawing', v5: 'draws', hindiMeaning: 'खींचना / चित्र बनाना' },
      { v1: 'drink', v2: 'drank', v3: 'drunk', v4: 'drinking', v5: 'drinks', hindiMeaning: 'पीना' },
      { v1: 'drive', v2: 'drove', v3: 'driven', v4: 'driving', v5: 'drives', hindiMeaning: 'गाड़ी चलाना' },
      { v1: 'eat', v2: 'ate', v3: 'eaten', v4: 'eating', v5: 'eats', hindiMeaning: 'खाना' },
      { v1: 'fall', v2: 'fell', v3: 'fallen', v4: 'falling', v5: 'falls', hindiMeaning: 'गिरना' },
      { v1: 'feel', v2: 'felt', v3: 'felt', v4: 'feeling', v5: 'feels', hindiMeaning: 'महसूस करना' },
      { v1: 'fight', v2: 'fought', v3: 'fought', v4: 'fighting', v5: 'fights', hindiMeaning: 'लड़ना' },
      { v1: 'find', v2: 'found', v3: 'found', v4: 'finding', v5: 'finds', hindiMeaning: 'पाना / खोजना' },
      { v1: 'fly', v2: 'flew', v3: 'flown', v4: 'flying', v5: 'flies', hindiMeaning: 'उड़ना' },
      { v1: 'forget', v2: 'forgot', v3: 'forgotten', v4: 'forgetting', v5: 'forgets', hindiMeaning: 'भूलना' },
      { v1: 'freeze', v2: 'froze', v3: 'frozen', v4: 'freezing', v5: 'freezes', hindiMeaning: 'जमना / जमाना' },
      { v1: 'get', v2: 'got', v3: 'got / gotten', v4: 'getting', v5: 'gets', hindiMeaning: 'पाना / हासिल करना' },
      { v1: 'give', v2: 'gave', v3: 'given', v4: 'giving', v5: 'gives', hindiMeaning: 'देना' },
      { v1: 'go', v2: 'went', v3: 'gone', v4: 'going', v5: 'goes', hindiMeaning: 'जाना' },
      { v1: 'grow', v2: 'grew', v3: 'grown', v4: 'growing', v5: 'grows', hindiMeaning: 'उगना / बढ़ना' },
      { v1: 'hang', v2: 'hung / hanged', v3: 'hung / hanged', v4: 'hanging', v5: 'hangs', hindiMeaning: 'लटकाना / फाँसी देना' },
      { v1: 'have', v2: 'had', v3: 'had', v4: 'having', v5: 'has', hindiMeaning: 'रखना / पास होना' },
      { v1: 'hear', v2: 'heard', v3: 'heard', v4: 'hearing', v5: 'hears', hindiMeaning: 'सुनना' },
      { v1: 'hide', v2: 'hid', v3: 'hidden', v4: 'hiding', v5: 'hides', hindiMeaning: 'छिपाना / छिपना' },
      { v1: 'hit', v2: 'hit', v3: 'hit', v4: 'hitting', v5: 'hits', hindiMeaning: 'चोट मारना' },
      { v1: 'hold', v2: 'held', v3: 'held', v4: 'holding', v5: 'holds', hindiMeaning: 'पकड़े रहना' },
      { v1: 'hurt', v2: 'hurt', v3: 'hurt', v4: 'hurting', v5: 'hurts', hindiMeaning: 'चोट पहुँचाना' },
      { v1: 'keep', v2: 'kept', v3: 'kept', v4: 'keeping', v5: 'keeps', hindiMeaning: 'रखना' },
      { v1: 'know', v2: 'knew', v3: 'known', v4: 'knowing', v5: 'knows', hindiMeaning: 'जानना' },
      { v1: 'lead', v2: 'led', v3: 'led', v4: 'leading', v5: 'leads', hindiMeaning: 'मार्गदर्शन करना' },
      { v1: 'learn', v2: 'learnt / learned', v3: 'learnt / learned', v4: 'learning', v5: 'learns', hindiMeaning: 'सीखना' },
      { v1: 'leave', v2: 'left', v3: 'left', v4: 'leaving', v5: 'leaves', hindiMeaning: 'छोड़ना / रवाना होना' },
      { v1: 'lend', v2: 'lent', v3: 'lent', v4: 'lending', v5: 'lends', hindiMeaning: 'उधार देना' },
      { v1: 'let', v2: 'let', v3: 'let', v4: 'letting', v5: 'lets', hindiMeaning: 'अनुमति देना' },
      { v1: 'lie', v2: 'lay', v3: 'lain', v4: 'lying', v5: 'lies', hindiMeaning: 'लेटना' },
      { v1: 'lose', v2: 'lost', v3: 'lost', v4: 'losing', v5: 'loses', hindiMeaning: 'खोना / हारना' },
      { v1: 'make', v2: 'made', v3: 'made', v4: 'making', v5: 'makes', hindiMeaning: 'बनाना' },
      { v1: 'meet', v2: 'met', v3: 'met', v4: 'meeting', v5: 'meets', hindiMeaning: 'मिलना' },
      { v1: 'pay', v2: 'paid', v3: 'paid', v4: 'paying', v5: 'pays', hindiMeaning: 'चुकाना' },
      { v1: 'put', v2: 'put', v3: 'put', v4: 'putting', v5: 'puts', hindiMeaning: 'रखना' },
      { v1: 'read', v2: 'read (रेड)', v3: 'read (रेड)', v4: 'reading', v5: 'reads', hindiMeaning: 'पढ़ना' },
      { v1: 'ride', v2: 'rode', v3: 'ridden', v4: 'riding', v5: 'rides', hindiMeaning: 'सवारी करना' },
      { v1: 'ring', v2: 'rang', v3: 'rung', v4: 'ringing', v5: 'rings', hindiMeaning: 'घंटी बजाना' },
      { v1: 'rise', v2: 'rose', v3: 'risen', v4: 'rising', v5: 'rises', hindiMeaning: 'उगना / उठना' },
      { v1: 'run', v2: 'ran', v3: 'run', v4: 'running', v5: 'runs', hindiMeaning: 'दौड़ना' },
      { v1: 'say', v2: 'said', v3: 'said', v4: 'saying', v5: 'says', hindiMeaning: 'कहना' },
      { v1: 'see', v2: 'saw', v3: 'seen', v4: 'seeing', v5: 'sees', hindiMeaning: 'देखना' },
      { v1: 'sell', v2: 'sold', v3: 'sold', v4: 'selling', v5: 'sells', hindiMeaning: 'बेचना' },
      { v1: 'send', v2: 'sent', v3: 'sent', v4: 'sending', v5: 'sends', hindiMeaning: 'भेजना' },
      { v1: 'shine', v2: 'shone', v3: 'shone', v4: 'shining', v5: 'shines', hindiMeaning: 'चमकना' },
      { v1: 'shoot', v2: 'shot', v3: 'shot', v4: 'shooting', v5: 'shoots', hindiMeaning: 'गोली मारना' },
      { v1: 'shut', v2: 'shut', v3: 'shut', v4: 'shutting', v5: 'shuts', hindiMeaning: 'बंद करना' },
      { v1: 'sing', v2: 'sang', v3: 'sung', v4: 'singing', v5: 'sings', hindiMeaning: 'गाना' },
      { v1: 'sit', v2: 'sat', v3: 'sat', v4: 'sitting', v5: 'sits', hindiMeaning: 'बैठना' },
      { v1: 'sleep', v2: 'slept', v3: 'slept', v4: 'sleeping', v5: 'sleeps', hindiMeaning: 'सोना' },
      { v1: 'speak', v2: 'spoke', v3: 'spoken', v4: 'speaking', v5: 'speaks', hindiMeaning: 'बोलना' },
      { v1: 'spend', v2: 'spent', v3: 'spent', v4: 'spending', v5: 'spends', hindiMeaning: 'खर्च करना / बिताना' },
      { v1: 'stand', v2: 'stood', v3: 'stood', v4: 'standing', v5: 'stands', hindiMeaning: 'खड़ा होना' },
      { v1: 'steal', v2: 'stole', v3: 'stolen', v4: 'stealing', v5: 'steals', hindiMeaning: 'चुराना' },
      { v1: 'swim', v2: 'swam', v3: 'swum', v4: 'swimming', v5: 'swims', hindiMeaning: 'तैरना' },
      { v1: 'take', v2: 'took', v3: 'taken', v4: 'taking', v5: 'takes', hindiMeaning: 'लेना' },
      { v1: 'teach', v2: 'taught', v3: 'taught', v4: 'teaching', v5: 'teaches', hindiMeaning: 'पढ़ाना / सिखाना' },
      { v1: 'tell', v2: 'told', v3: 'told', v4: 'telling', v5: 'tells', hindiMeaning: 'बताना / कहना' },
      { v1: 'think', v2: 'thought', v3: 'thought', v4: 'thinking', v5: 'thinks', hindiMeaning: 'सोचना' },
      { v1: 'throw', v2: 'threw', v3: 'thrown', v4: 'throwing', v5: 'throws', hindiMeaning: 'फेंकना' },
      { v1: 'understand', v2: 'understood', v3: 'understood', v4: 'understanding', v5: 'understands', hindiMeaning: 'समझना' },
      { v1: 'wake', v2: 'woke', v3: 'woken', v4: 'waking', v5: 'wakes', hindiMeaning: 'जागना' },
      { v1: 'wear', v2: 'wore', v3: 'worn', v4: 'wearing', v5: 'wears', hindiMeaning: 'पहनना' },
      { v1: 'win', v2: 'won', v3: 'won', v4: 'winning', v5: 'wins', hindiMeaning: 'जीतना' },
      { v1: 'write', v2: 'wrote', v3: 'written', v4: 'writing', v5: 'writes', hindiMeaning: 'लिखना' }
    ],
    practiceQuiz: [
      {
        question: 'What is the V3 (Past Participle) form of the verb "write"?',
        options: ['written', 'wrote', 'writing', 'writes'],
        answer: 'written',
        explanation: 'write -> wrote (V2) -> written (V3).'
      }
    ]
  }
];
