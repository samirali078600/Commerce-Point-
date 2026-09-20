import { OxfordChapter } from './types';

export const CHAPTERS_6_TO_10: OxfordChapter[] = [
  {
    id: 'oxford-ch-6',
    chapterNumber: 6,
    heading: 'Possessive Case of Nouns, Possessive Adjectives & Possessive Pronouns',
    hindiHeading: 'Possessive Case, Adjectives और Pronouns (अधिकार कारक)',
    pageNo: 54,
    description: 'स्वामित्व या संबंध दर्शाने के लिए Apostrophe (\'s), "of", Possessive Adjectives (my, your, our, his, her, their) और Possessive Pronouns (mine, yours, ours, hers, theirs) का प्रयोग।',
    rules: [
      {
        title: 'Possessive Case with Apostrophe (\'s)',
        formula: 'Living Noun + \'s | Plural ending in s + \' | Non-living: "of" + Noun',
        explanationHindi: 'सजीव संज्ञाओं (Living beings) के साथ अधिकार दर्शाने के लिए \'s लगाते हैं। यदि बहुवचन संज्ञा के अंत में पहले से "s" हो तो केवल apostrophe (\') लगाया जाता है। निर्जीव वस्तुओं के साथ \'s के बदले "of" का प्रयोग होता है (जैसे The leg of the chair, न कि the chair\'s leg)।',
        explanationEnglish: 'Use \'s with singular living nouns, apostrophe (\') with plurals ending in s, and "of" with non-living things.',
        examples: [
          { hindi: 'राम की किताब', english: 'Ram\'s book' },
          { hindi: 'लड़कों का स्कूल', english: 'Boys\' school' },
          { hindi: 'बच्चों के खिलौने', english: 'Children\'s toys' },
          { hindi: 'इस मेज के पैर', english: 'The legs of this table' }
        ]
      },
      {
        title: 'Possessive Adjectives vs Possessive Pronouns',
        formula: 'Possessive Adj + Noun (My book) vs Noun + is + Possessive Pronoun (The book is mine)',
        explanationHindi: 'My, our, your, his, her, their के बाद हमेशा Noun आता है (Possessive Adjectives)। Mine, ours, yours, hers, theirs के बाद Noun नहीं आता (Possessive Pronouns)।',
        explanationEnglish: 'Possessive adjectives qualify nouns (my car). Possessive pronouns stand alone replacing noun phrases (The car is mine).',
        examples: [
          { hindi: 'यह मेरी कलम है।', english: 'This is my pen.' },
          { hindi: 'यह कलम मेरी है।', english: 'This pen is mine.' },
          { hindi: 'वह तुम्हारा घर है।', english: 'That is your house.' },
          { hindi: 'वह घर तुम्हारा है।', english: 'That house is yours.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v6-1', word: 'Belongings', hindiMeaning: 'सामान / संपत्ति', pronunciation: 'बिलॉन्गिंग्स', partOfSpeech: 'Noun', exampleSentence: 'Take care of your belongings.' },
      { id: 'v6-2', word: 'Property', hindiMeaning: 'जायदाद / संपत्ति', pronunciation: 'प्रॉपर्टी', partOfSpeech: 'Noun', exampleSentence: 'This land is our property.' },
      { id: 'v6-3', word: 'Ownership', hindiMeaning: 'स्वामित्व / मालिकाना हक', pronunciation: 'ओनरशिप', partOfSpeech: 'Noun', exampleSentence: 'He claimed ownership of the house.' }
    ],
    exercises: [
      {
        id: 'ex-6-1',
        exerciseNumber: 1,
        title: 'Exercise: Possessives Translation',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-6-1', hindi: 'यह सोहन की गाय है।', english: 'This is Sohan\'s cow.' },
          { id: 's-6-2', hindi: 'यह गाय सोहन की है।', english: 'This cow is Sohan\'s.' },
          { id: 's-6-3', hindi: 'यह पुस्तक मेरी है और वह तुम्हारी।', english: 'This book is mine and that is yours.' },
          { id: 's-6-4', hindi: 'कुर्सी का एक पाया टूटा हुआ है।', english: 'A leg of the chair is broken.' },
          { id: 's-6-5', hindi: 'लड़कियों का छात्रावास यहाँ है।', english: 'The girls\' hostel is here.' },
          { id: 's-6-6', hindi: 'उनका विचार बहुत सुंदर था।', english: 'Their idea was very fine.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Choose correct translation: "यह कलम मेरी है।"',
        options: ['This pen is mine.', 'This is my pen.', 'This pen is my.', 'This pen is me.'],
        answer: 'This pen is mine.',
        explanation: 'When possessive pronoun stands alone at the end, use "mine".'
      }
    ]
  },
  {
    id: 'oxford-ch-7',
    chapterNumber: 7,
    heading: 'Use of Verb “To Have”',
    hindiHeading: 'Verb "To Have" का प्रयोग (Have, Has, Had)',
    pageNo: 69,
    description: 'पास होना, रखना या अधिकार/संबंध व्यक्त करने के लिए Have, Has (Present) और Had (Past) का प्रयोग।',
    rules: [
      {
        title: 'Present Tense: Have / Has',
        formula: 'I / We / You / They + have | He / She / It / Singular + has',
        explanationHindi: 'पास है, रखता है, या संबंध (जैसे दो भाई हैं, चार टांगें हैं) दर्शाने के लिए Has/Have का प्रयोग होता है। 3rd person singular के साथ "has" तथा बाकी सभी के साथ "have" आता है।',
        explanationEnglish: 'Have/Has denote possession, ownership, relationship, or characteristics in the present tense.',
        examples: [
          { hindi: 'मेरे पास एक लाल कलम है।', english: 'I have a red pen.' },
          { hindi: 'उसके पास पर्याप्त समय है।', english: 'He has enough time.' },
          { hindi: 'गाय के दो सींग होते हैं।', english: 'The cow has two horns.' },
          { hindi: 'हमारे पास कोई शिकायत नहीं है।', english: 'We have no complaint.' }
        ]
      },
      {
        title: 'Past Tense: Had',
        formula: 'Subject + had + Noun',
        explanationHindi: 'भूतकाल में किसी वस्तु का पास होना या संबंध दर्शाने के लिए सभी subjects के साथ Had का प्रयोग होता है।',
        explanationEnglish: 'Had is used for all persons and numbers in the past tense.',
        examples: [
          { hindi: 'मेरे पास एक पुरानी कार थी।', english: 'I had an old car.' },
          { hindi: 'उनके पास बहुत धन था।', english: 'They had plenty of wealth.' }
        ]
      },
      {
        title: 'Negative Sentences: "No" vs "Not"',
        explanationHindi: 'संख्या या indefinite article (a, an, any, two, three) होने पर "not" का प्रयोग होता है (have not a pen / do not have a pen)। बिना संख्या/article के सीधे "no" का प्रयोग होता है (have no pen / have no milk)।',
        explanationEnglish: 'Use "no" directly before bare nouns (have no money); use "not" with articles or numerals (have not a car / do not have a car).',
        examples: [
          { hindi: 'मेरे पास पैसे नहीं हैं।', english: 'I have no money.' },
          { hindi: 'मेरे पास एक कलम नहीं है।', english: 'I have not a pen. / I do not have a pen.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v7-1', word: 'Patience', hindiMeaning: 'धैर्य / सब्र', pronunciation: 'पेशेंस', partOfSpeech: 'Noun', exampleSentence: 'He has great patience.' },
      { id: 'v7-2', word: 'Confidence', hindiMeaning: 'आत्मविश्वास', pronunciation: 'कॉन्फिडेंस', partOfSpeech: 'Noun', exampleSentence: 'She has full confidence.' },
      { id: 'v7-3', word: 'Wealth', hindiMeaning: 'दौलत / संपत्ति', pronunciation: 'वेल्थ', partOfSpeech: 'Noun', exampleSentence: 'They had immense wealth.' },
      { id: 'v7-4', word: 'Courage', hindiMeaning: 'साहस / हिम्मत', pronunciation: 'करेज', partOfSpeech: 'Noun', exampleSentence: 'The soldier has courage.' }
    ],
    exercises: [
      {
        id: 'ex-7-1',
        exerciseNumber: 1,
        title: 'Exercise: Have, Has and Had',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-7-1', hindi: 'मेरे पास एक कीमती घड़ी है।', english: 'I have a costly watch.' },
          { id: 's-7-2', hindi: 'हमलोगों के पास कई दोस्त हैं।', english: 'We have many friends.' },
          { id: 's-7-3', hindi: 'उसके पास धैर्य नहीं है।', english: 'He has no patience.' },
          { id: 's-7-4', hindi: 'क्या आपके पास कोई फालतू कलम है?', english: 'Have you a spare pen? / Do you have a spare pen?' },
          { id: 's-7-5', hindi: 'राजा के पास कई हाथी थे।', english: 'The king had many elephants.' },
          { id: 's-7-6', hindi: 'तुम्हारे पास पर्याप्त समय क्यों नहीं था?', english: 'Why had you not enough time?' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "मेरे पास समय नहीं है।"',
        options: ['I have no time.', 'I have not time.', 'I am no time.', 'I had no time.'],
        answer: 'I have no time.',
        explanation: 'Before an uncountable noun without article, use "have no".'
      }
    ]
  },
  {
    id: 'oxford-ch-8',
    chapterNumber: 8,
    heading: 'Use of Infinitive with Verb “To Have”',
    hindiHeading: 'Have/Has/Had + Infinitive (to + V1) का प्रयोग',
    pageNo: 77,
    description: 'मजबूरी, अनिवार्यता, कर्तव्य या बाध्यता (Compulsion, Obligation, Duty) दर्शाने के लिए has to, have to और had to का प्रयोग।',
    rules: [
      {
        title: 'Present Compulsion / Obligation',
        formula: 'Subject + have to / has to + Verb (1st form)',
        explanationHindi: 'जब वर्तमान काल में किसी वाक्य के अंत में "पड़ता है", "पड़ती है", "होता है", या "ना है / नी है / ने हैं" रहे, जिससे किसी अनिवार्यता या मजबूरी का बोध हो, तब has to / have to + V1 का प्रयोग करते हैं।',
        explanationEnglish: 'Use have to / has to + base verb to express obligation, necessity or compulsion in the present.',
        examples: [
          { hindi: 'मुझे रोज पैदल जाना पड़ता है।', english: 'I have to go on foot every day.' },
          { hindi: 'उसे कड़ी मेहनत करनी पड़ती है।', english: 'He has to work hard.' },
          { hindi: 'मुझे आज दिल्ली जाना है।', english: 'I have to go to Delhi today.' },
          { hindi: 'हमलोगों को कर (tax) चुकाना पड़ता है।', english: 'We have to pay taxes.' }
        ]
      },
      {
        title: 'Past Compulsion: Had to',
        formula: 'Subject + had to + Verb (1st form)',
        explanationHindi: 'भूतकाल में किसी मजबूरी या अनिवार्यता ("पड़ा", "पड़ता था", "ना था") के लिए सभी कर्ताओं के साथ "had to + V1" का प्रयोग होता है।',
        explanationEnglish: 'Use had to + base verb to express past compulsion or necessity.',
        examples: [
          { hindi: 'मुझे झूठ बोलना पड़ा।', english: 'I had to tell a lie.' },
          { hindi: 'उसे अपनी पुरानी साइकिल बेचनी पड़ी।', english: 'He had to sell his old bicycle.' }
        ]
      },
      {
        title: 'Future Compulsion: Shall have to / Will have to',
        formula: 'Subject + shall have to / will have to + V1',
        explanationHindi: 'भविष्य की मजबूरी ("पड़ेगा", "पड़ेगी", "होगा") के लिए will have to / shall have to + V1 का प्रयोग होता है।',
        explanationEnglish: 'Express future compulsion with will have to / shall have to + V1.',
        examples: [
          { hindi: 'तुम्हें यह काम करना पड़ेगा।', english: 'You will have to do this work.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v8-1', word: 'Compulsion', hindiMeaning: 'मजबूरी / बाध्यता', pronunciation: 'कम्पल्शन', partOfSpeech: 'Noun', exampleSentence: 'He worked under compulsion.' },
      { id: 'v8-2', word: 'Obligation', hindiMeaning: 'दायित्व / कर्तव्य', pronunciation: 'ऑब्लिगेशन', partOfSpeech: 'Noun', exampleSentence: 'It is a moral obligation.' },
      { id: 'v8-3', word: 'Apologize', hindiMeaning: 'माफी माँगना', pronunciation: 'अपोलोजाइज', partOfSpeech: 'Verb', exampleSentence: 'You will have to apologize.' }
    ],
    exercises: [
      {
        id: 'ex-8-1',
        exerciseNumber: 1,
        title: 'Exercise: Infinitive with To Have Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-8-1', hindi: 'मुझे रोज सुबह जल्दी उठना पड़ता है।', english: 'I have to get up early in the morning every day.' },
          { id: 's-8-2', hindi: 'उसे खाना खुद पकाना पड़ता है।', english: 'He has to cook food himself.' },
          { id: 's-8-3', hindi: 'हमें नियमों का पालन करना पड़ता है।', english: 'We have to obey the rules.' },
          { id: 's-8-4', hindi: 'मुझे डॉक्टर के पास जाना पड़ा।', english: 'I had to go to the doctor.' },
          { id: 's-8-5', hindi: 'उन्हें जुर्माना देना पड़ा।', english: 'They had to pay the fine.' },
          { id: 's-8-6', hindi: 'तुम्हें सच बोलना पड़ेगा।', english: 'You will have to speak the truth.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "मुझे वहाँ जाना पड़ा।"',
        options: ['I had to go there.', 'I have to go there.', 'I must go there.', 'I went to there.'],
        answer: 'I had to go there.',
        explanation: 'Past obligation / necessity uses "had to + V1".'
      }
    ]
  },
  {
    id: 'oxford-ch-9',
    chapterNumber: 9,
    heading: 'Use of Infinitive with Verb “To Be”',
    hindiHeading: 'Am/Is/Are/Was/Were + Infinitive (to + V1) का प्रयोग',
    pageNo: 87,
    description: 'नियोजित कार्यक्रम, योजना या इरादा (Pre-planned Program, Intention or Scheduled Action) दर्शाने के लिए am/is/are/was/were + to + V1 का प्रयोग।',
    rules: [
      {
        title: 'Present Planned Action: am/is/are + to + V1',
        formula: 'Subject + am / is / are + to + Verb (1st form)',
        explanationHindi: 'जब वाक्य के अंत में "वाला हूँ", "को हूँ", "ने वाला है" रहे, जिससे यह पता चले कि कोई काम पूर्वनिर्धारित योजना के अनुसार होने वाला है, तब am/is/are + to + V1 का प्रयोग होता है।',
        explanationEnglish: 'Used to express a planned program or an action that is about to take place according to a schedule.',
        examples: [
          { hindi: 'मैं जाने वाला हूँ। (मैं जाने को हूँ।)', english: 'I am to go.' },
          { hindi: 'गाड़ी आने वाली है।', english: 'The train is to come.' },
          { hindi: 'प्रधानमंत्री कल पटना आने वाले हैं।', english: 'The Prime Minister is to visit Patna tomorrow.' }
        ]
      },
      {
        title: 'Imminent Action: "about to + V1"',
        formula: 'Subject + am / is / are + about to + V1',
        explanationHindi: 'जब काम बिल्कुल तुरंत ही होने वाला हो ("ही वाला हूँ"), तब "about to + V1" का प्रयोग होता है।',
        explanationEnglish: 'Use "about to + V1" when the action is on the verge of happening immediately.',
        examples: [
          { hindi: 'मैं सोने ही वाला हूँ।', english: 'I am about to sleep.' },
          { hindi: 'रोगी मरने ही वाला है।', english: 'The patient is about to die.' }
        ]
      },
      {
        title: 'Past Planned Action: was / were + to + V1',
        formula: 'Subject + was / were + to + V1 / was / were + about to + V1',
        explanationHindi: 'भूतकाल में किसी योजना ("जाने वाला था") के लिए was/were + to + V1 का प्रयोग होता है।',
        explanationEnglish: 'Denotes past planned action or imminent past action.',
        examples: [
          { hindi: 'गाड़ी खुलने ही वाली थी कि मैं स्टेशन पहुँचा।', english: 'The train was about to start when I reached the station.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v9-1', word: 'Imminent', hindiMeaning: 'आसन्न / तुरंत होने वाला', pronunciation: 'इमिनेंट', partOfSpeech: 'Adjective', exampleSentence: 'Danger is imminent.' },
      { id: 'v9-2', word: 'Schedule', hindiMeaning: 'समय सारणी / योजना', pronunciation: 'शेड्यूल', partOfSpeech: 'Noun / Verb', exampleSentence: 'The meeting is scheduled for 10 AM.' },
      { id: 'v9-3', word: 'Intention', hindiMeaning: 'इरादा / मंशा', pronunciation: 'इंटेंशन', partOfSpeech: 'Noun', exampleSentence: 'He has good intentions.' }
    ],
    exercises: [
      {
        id: 'ex-9-1',
        exerciseNumber: 1,
        title: 'Exercise: Infinitive with To Be Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-9-1', hindi: 'मैं एक नया व्यापार शुरू करने वाला हूँ।', english: 'I am to start a new business.' },
          { id: 's-9-2', hindi: 'वह शादी करने को है।', english: 'He is to marry.' },
          { id: 's-9-3', hindi: 'वर्षा होने ही वाली है।', english: 'It is about to rain.' },
          { id: 's-9-4', hindi: 'सूर्य अस्त होने ही वाला था।', english: 'The sun was about to set.' },
          { id: 's-9-5', hindi: 'हमलोग मैच खेलने वाले थे।', english: 'We were to play a match.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "वर्षा होने ही वाली है।"',
        options: ['It is about to rain.', 'It rains.', 'It is raining now.', 'Rain is about to come.'],
        answer: 'It is about to rain.',
        explanation: 'Imminent weather event uses introductory "It" + is about to rain.'
      }
    ]
  },
  {
    id: 'oxford-ch-10',
    chapterNumber: 10,
    heading: 'The Tense',
    hindiHeading: 'The Tense (काल के सभी भेद एवं नियम)',
    pageNo: 95,
    description: 'Tense के तीन मुख्य रूप: Present, Past और Future तथा उनके चार-चार उपभेद (Indefinite, Continuous, Perfect, Perfect Continuous) का संपूर्ण अध्ययन एवं अनुवाद नियम।',
    rules: [
      {
        title: 'Simple Present Tense (Present Indefinite)',
        formula: 'Affirmative: Sub + V1 / V5 (s/es) | Neg: Sub + do / does + not + V1',
        explanationHindi: 'जब वाक्य के अंत में "ता हूँ", "ती है", "ते हैं" रहे। 3rd person singular (He/She/It/Ram) के साथ क्रिया में s या es (V5) लगता है। I, We, You, They तथा बहुवचन के साथ V1 आता है। Negative व Interrogative में do/does + V1 का प्रयोग होता है।',
        explanationEnglish: 'Expresses habitual action, routine, universal truth. He/She/It takes V-s/es; I/We/You/They take V1.',
        examples: [
          { hindi: 'मैं रोज स्कूल जाता हूँ।', english: 'I go to school every day.' },
          { hindi: 'सूरज पूर्व में उगता है।', english: 'The sun rises in the east.' },
          { hindi: 'वह चाय नहीं पीती है।', english: 'She does not take tea.' },
          { hindi: 'क्या तुम अंग्रेजी बोलते हो?', english: 'Do you speak English?' }
        ]
      },
      {
        title: 'Present Continuous Tense (Imperfect)',
        formula: 'Subject + am / is / are + V4 (V + ing)',
        explanationHindi: 'जब वर्तमान काल में कार्य जारी हो ("रहा हूँ", "रही है", "रहे हैं")।',
        explanationEnglish: 'Expresses action in progress at the time of speaking.',
        examples: [
          { hindi: 'हवा बह रही है।', english: 'The wind is blowing.' },
          { hindi: 'बच्चे मैदान में खेल रहे हैं।', english: 'Children are playing in the ground.' }
        ]
      },
      {
        title: 'Present Perfect Tense',
        formula: 'Subject + have / has + V3 (Past Participle)',
        explanationHindi: 'जब कार्य अभी-अभी समाप्त हुआ हो ("चुका हूँ", "लिया है", "दिया है")।',
        explanationEnglish: 'Expresses an action that has just been completed with present relevance.',
        examples: [
          { hindi: 'मैंने अपना काम पूरा कर लिया है।', english: 'I have finished my work.' },
          { hindi: 'गाड़ी स्टेशन से खुल चुकी है।', english: 'The train has left the station.' }
        ]
      },
      {
        title: 'Present Perfect Continuous Tense',
        formula: 'Subject + have / has + been + V4 + since / for + Time',
        explanationHindi: 'जब कोई कार्य भूतकाल में शुरू होकर वर्तमान में भी जारी हो ("रहा है" + समय)। निश्चित समय (Point of Time: 2 बजे, सोमवार, 2020) के लिए "Since" तथा समयावधि (Period of Time: 2 घंटे, 4 दिन) के लिए "For" लगता है।',
        explanationEnglish: 'Action started in past and continuing. Use "since" for point of time, "for" for duration.',
        examples: [
          { hindi: 'वह दो घंटे से पढ़ रहा है।', english: 'He has been reading for two hours.' },
          { hindi: 'सुबह से वर्षा हो रही है।', english: 'It has been raining since morning.' }
        ]
      },
      {
        title: 'Past Indefinite Tense (Simple Past)',
        formula: 'Affirmative: Subject + V2 | Neg/Interrog: Subject + did not + V1',
        explanationHindi: 'जब कोई कार्य भूतकाल में समाप्त हुआ ("गया", "खाया", "पढ़ा", "आया")। Affirmative में क्रिया का दूसरा रूप (V2) आता है, तथा Did लगने पर V1 हो जाता है।',
        explanationEnglish: 'Affirmative takes V2. Negative and interrogative take "did + V1".',
        examples: [
          { hindi: 'उसने मुझे एक पत्र लिखा।', english: 'He wrote a letter to me.' },
          { hindi: 'मैंने उसे नहीं देखा।', english: 'I did not see him.' }
        ]
      },
      {
        title: 'Past Continuous & Past Perfect',
        formula: 'Past Cont: was/were + V4 | Past Perf: had + V3',
        explanationHindi: 'Past Perfect में यदि भूतकाल में दो कार्य हुए हों, तो पहले समाप्त होने वाले कार्य में Had + V3 तथा बाद में होने वाले कार्य में Simple Past (V2) आता है। (Doctor ke aane se pehle rogi mar chuka tha -> The patient had died before the doctor came).',
        explanationEnglish: 'When two actions occurred in past: 1st action: Had + V3; 2nd action: Simple Past (V2).',
        examples: [
          { hindi: 'डॉक्टर के आने के पहले रोगी मर चुका था।', english: 'The patient had died before the doctor came.' },
          { hindi: 'स्टेशन पहुँचने से पहले ट्रेन खुल चुकी थी।', english: 'The train had started before I reached the station.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v10-1', word: 'Habitual', hindiMeaning: 'आदत संबंधी / अभ्यस्त', pronunciation: 'हैबिचुअल', partOfSpeech: 'Adjective', exampleSentence: 'He is a habitual latecomer.' },
      { id: 'v10-2', word: 'Universal Truth', hindiMeaning: 'सार्वभौमिक सत्य', pronunciation: 'यूनिवर्सल ट्रुथ', partOfSpeech: 'Noun Phrase', exampleSentence: 'The earth moves round the sun is a universal truth.' },
      { id: 'v10-3', word: 'Disappear', hindiMeaning: 'गायब हो जाना', pronunciation: 'डिसअपियर', partOfSpeech: 'Verb', exampleSentence: 'The thief disappeared in the dark.' },
      { id: 'v10-4', word: 'Revolve', hindiMeaning: 'परिक्रमा करना', pronunciation: 'रिवॉल्व', partOfSpeech: 'Verb', exampleSentence: 'Planets revolve around the sun.' }
    ],
    exercises: [
      {
        id: 'ex-10-1',
        exerciseNumber: 1,
        title: 'Exercise: Simple Present & Present Continuous',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-10-1', hindi: 'वह रोज शाम को टहलता है।', english: 'He walks in the evening every day.' },
          { id: 's-10-2', hindi: 'क्या आप अंग्रेजी अखबार पढ़ते हैं?', english: 'Do you read English newspapers?' },
          { id: 's-10-3', hindi: 'वे लोग नदी में तैर रहे हैं।', english: 'They are swimming in the river.' },
          { id: 's-10-4', hindi: 'सूरज पश्चिम में डूबता है।', english: 'The sun sets in the west.' },
          { id: 's-10-5', hindi: 'तुम अपना समय क्यों बर्बाद कर रहे हो?', english: 'Why are you wasting your time?' }
        ]
      },
      {
        id: 'ex-10-2',
        exerciseNumber: 2,
        title: 'Exercise: Perfect & Past Tense Mastery',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-10-6', hindi: 'उसने अपना गृहकार्य कर लिया है।', english: 'He has done his homework.' },
          { id: 's-10-7', hindi: 'मैं सुबह सात बजे से पढ़ रहा हूँ।', english: 'I have been reading since 7 AM.' },
          { id: 's-10-8', hindi: 'कल उसने मुझे एक सुंदर उपहार दिया।', english: 'He gave me a beautiful gift yesterday.' },
          { id: 's-10-9', hindi: 'मेरे स्टेशन पहुँचने से पहले गाड़ी खुल चुकी थी।', english: 'The train had started before I reached the station.' },
          { id: 's-10-10', hindi: 'घंटी बजने से पहले शिक्षक कक्षा में आ चुके थे।', english: 'The teacher had entered the classroom before the bell rang.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Identify the correct translation: "वह दो घंटे से मेरा इंतजार कर रहा है।"',
        options: ['He has been waiting for me for two hours.', 'He is waiting for me since two hours.', 'He was waiting for me for two hours.', 'He had waited for two hours.'],
        answer: 'He has been waiting for me for two hours.',
        explanation: 'Duration "two hours" takes "for" with Present Perfect Continuous "has been waiting".'
      },
      {
        question: 'What is the rule when two past actions occur consecutively?',
        options: ['Earlier action takes Had + V3, later action takes V2.', 'Both take V2.', 'Both take Had + V3.', 'Earlier action takes was/were + V4.'],
        answer: 'Earlier action takes Had + V3, later action takes V2.',
        explanation: 'The earlier completed action is in Past Perfect (Had + V3) and the subsequent one in Simple Past (V2).'
      }
    ]
  }
];
