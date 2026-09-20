import { OxfordChapter } from './types';

export const CHAPTERS_1_TO_5: OxfordChapter[] = [
  {
    id: 'oxford-ch-1',
    chapterNumber: 1,
    heading: 'Use of Am, Is and Are',
    hindiHeading: 'Am, Is और Are का प्रयोग',
    pageNo: 9,
    description: 'वर्तमान काल में कर्ता (Subject) की स्थिति, गुण, स्वभाव या पद दर्शाने के लिए Am, Is और Are का प्रयोग होता है।',
    rules: [
      {
        title: 'Basic Structure (सामान्य नियम)',
        formula: 'Subject + am / is / are + Complement (Adjective / Noun)',
        explanationHindi: 'जब वर्तमान काल में किसी वाक्य के अंत में "हूँ", "हैं", "हो", या "है" मुख्य क्रिया के रूप में रहता है, तब Subject के अनुसार Am, Is या Are का प्रयोग होता है।',
        explanationEnglish: 'When the main verb in present tense is "am", "is" or "are", they are used according to the person and number of the Subject.',
        examples: [
          { hindi: 'मैं खुश हूँ।', english: 'I am happy.', note: 'I के साथ am का प्रयोग होता है।' },
          { hindi: 'हमलोग तैयार हैं।', english: 'We are ready.', note: 'We (1st person plural) के साथ are आता है।' },
          { hindi: 'तुम ईमानदार हो।', english: 'You are honest.', note: 'You (2nd person) के साथ are आता है।' },
          { hindi: 'वह चालाक है।', english: 'He is clever.', note: 'He/She (3rd person singular) के साथ is आता है।' },
          { hindi: 'वे लोग दयालु हैं।', english: 'They are kind.', note: 'They (3rd person plural) के साथ are आता है।' }
        ]
      },
      {
        title: 'Negative Sentences (नकारात्मक वाक्य)',
        formula: 'Subject + am / is / are + not + Complement',
        explanationHindi: 'नकारात्मक वाक्यों में Am/Is/Are के तुरंत बाद "not" लगाया जाता है।',
        explanationEnglish: 'In negative sentences, place "not" immediately after am, is, or are.',
        examples: [
          { hindi: 'मैं बुरा नहीं हूँ।', english: 'I am not bad.' },
          { hindi: 'वह निर्दोष नहीं है।', english: 'He is not innocent.' },
          { hindi: 'वे लोग बेईमान नहीं हैं।', english: 'They are not dishonest.' }
        ]
      },
      {
        title: 'Interrogative Sentences (प्रश्नवाचक वाक्य)',
        formula: 'Am / Is / Are + Subject + Complement?',
        explanationHindi: 'जब वाक्य क्या से शुरू हो, तो Am/Is/Are को कर्ता से पहले रखा जाता है। अंत में प्रश्नवाचक चिह्न (?) अवश्य लगता है।',
        explanationEnglish: 'When the question begins with "Kya" (Yes/No questions), am/is/are comes before the subject.',
        examples: [
          { hindi: 'क्या आप भूखे हैं?', english: 'Are you hungry?' },
          { hindi: 'क्या वह डरपोक है?', english: 'Is he timid?' },
          { hindi: 'क्या वे लोग मेहनती हैं?', english: 'Are they laborious?' }
        ]
      },
      {
        title: 'WH-Questions (Why / How / What)',
        formula: 'Why / How / What / Where + am / is / are + Subject + (not) + Complement?',
        explanationHindi: 'जब वाक्य के बीच में क्यों, कैसे, कहाँ, क्या आदि शब्द आते हैं, तब सबसे पहले उस Question word को लिखते हैं, फिर am/is/are लगाते हैं।',
        explanationEnglish: 'Put question word first, followed by am/is/are, then subject and complement.',
        examples: [
          { hindi: 'आप कैसे बेईमान हैं?', english: 'How are you dishonest?' },
          { hindi: 'वह क्यों उदास है?', english: 'Why is he sad?' },
          { hindi: 'तुम उपस्थित क्यों नहीं हो?', english: 'Why are you not present?' }
        ]
      },
      {
        title: 'Special Note on Permanent Nature (स्थायी स्वभाव)',
        explanationHindi: 'जब किसी वस्तु या व्यक्ति के स्वाभाविक गुण या स्थायी स्वभाव की बात होती है, तब भी am/is/are का प्रयोग होता है, भले ही हिंदी में "होता है", "रहता है" या "लगता है" आए।',
        explanationEnglish: 'Expressing intrinsic nature, condition or universal qualities also uses am/is/are.',
        examples: [
          { hindi: 'दूध मीठा होता है।', english: 'Milk is sweet.', note: 'दूध का स्वाभाविक गुण।' },
          { hindi: 'गाय सीधी होती है।', english: 'The cow is gentle.', note: 'पूरी जाति का बोध कराने पर singular noun से पहले "The"।' },
          { hindi: 'बच्चे नटखट होते हैं।', english: 'Children are naughty.', note: 'Plural indefinite noun में The नहीं लगता।' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v1-1', word: 'Laborious', hindiMeaning: 'मेहनती / परिश्रमी', pronunciation: 'लेबोरियस', partOfSpeech: 'Adjective', exampleSentence: 'Ram is a laborious student.' },
      { id: 'v1-2', word: 'Timid', hindiMeaning: 'डरपोक', pronunciation: 'टिमिड', partOfSpeech: 'Adjective', exampleSentence: 'The rabbit is a timid animal.' },
      { id: 'v1-3', word: 'Innocent', hindiMeaning: 'निर्दोष / बेकसूर', pronunciation: 'इनोसेंट', partOfSpeech: 'Adjective', exampleSentence: 'He is completely innocent.' },
      { id: 'v1-4', word: 'Guilty', hindiMeaning: 'दोषी / अपराधी', pronunciation: 'गिल्टी', partOfSpeech: 'Adjective', exampleSentence: 'The thief is guilty.' },
      { id: 'v1-5', word: 'Gentle', hindiMeaning: 'नेक / विनम्र / सीधा', pronunciation: 'जेंटल', partOfSpeech: 'Adjective', exampleSentence: 'My grandfather is very gentle.' },
      { id: 'v1-6', word: 'Faithful', hindiMeaning: 'वफादार', pronunciation: 'फेथफुल', partOfSpeech: 'Adjective', exampleSentence: 'The dog is a faithful animal.' },
      { id: 'v1-7', word: 'Dishonest', hindiMeaning: 'बेईमान', pronunciation: 'डिसऑनेस्ट', partOfSpeech: 'Adjective', exampleSentence: 'He is not dishonest.' },
      { id: 'v1-8', word: 'Courageous', hindiMeaning: 'साहसी / वीर', pronunciation: 'करेजस', partOfSpeech: 'Adjective', exampleSentence: 'Our soldiers are courageous.' },
      { id: 'v1-9', word: 'Cruel', hindiMeaning: 'क्रूर / निर्दयी', pronunciation: 'क्रूअल', partOfSpeech: 'Adjective', exampleSentence: 'The hunter is cruel.' },
      { id: 'v1-10', word: 'Pleased', hindiMeaning: 'प्रसन्न / संतुष्ट', pronunciation: 'प्लीज्ड', partOfSpeech: 'Adjective', exampleSentence: 'The teacher is pleased with you.' }
    ],
    exercises: [
      {
        id: 'ex-1-1',
        exerciseNumber: 1,
        title: 'Exercise 1: Affirmative Sentences (सकारात्मक अनुवाद)',
        category: 'affirmative',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate the following sentences into English:',
        sentences: [
          { id: 's-1-1', hindi: 'मैं खुश हूँ।', english: 'I am happy.', hint: 'Use am' },
          { id: 's-1-2', hindi: 'हमलोग तैयार हैं।', english: 'We are ready.', hint: 'Use are' },
          { id: 's-1-3', hindi: 'तुम बुद्धिमान हो।', english: 'You are wise.' },
          { id: 's-1-4', hindi: 'आप लोग ईमानदार हैं।', english: 'You are honest.' },
          { id: 's-1-5', hindi: 'वह सुंदर है। (स्त्री)', english: 'She is beautiful.' },
          { id: 's-1-6', hindi: 'वे लोग नेक और दयालु हैं।', english: 'They are gentle and kind.' },
          { id: 's-1-7', hindi: 'राम और श्याम परिश्रमी हैं।', english: 'Ram and Shyam are laborious.' },
          { id: 's-1-8', hindi: 'दूध सफेद होता है।', english: 'Milk is white.' },
          { id: 's-1-9', hindi: 'साँप डरावना होता है।', english: 'A snake is fearful.' },
          { id: 's-1-10', hindi: 'बच्चे सच्चे और सरल होते हैं।', english: 'Children are simple and truthful.' }
        ]
      },
      {
        id: 'ex-1-2',
        exerciseNumber: 2,
        title: 'Exercise 2: Negative Sentences (नकारात्मक अनुवाद)',
        category: 'negative',
        instructionsHindi: 'निम्नलिखित नकारात्मक वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate the following negative sentences into English:',
        sentences: [
          { id: 's-1-11', hindi: 'मैं भूखा नहीं हूँ।', english: 'I am not hungry.' },
          { id: 's-1-12', hindi: 'हमलोग कमजोर नहीं हैं।', english: 'We are not weak.' },
          { id: 's-1-13', hindi: 'वह घमंडी नहीं है।', english: 'He is not proud.' },
          { id: 's-1-14', hindi: 'वे लोग दोषी नहीं हैं।', english: 'They are not guilty.' },
          { id: 's-1-15', hindi: 'सोना काला नहीं होता है।', english: 'Gold is not black.' },
          { id: 's-1-16', hindi: 'मनुष्य अमर नहीं होता है।', english: 'Man is not mortal. / Man is mortal (human).' },
          { id: 's-1-17', hindi: 'साधु बेईमान नहीं होते हैं।', english: 'Saints are not dishonest.' }
        ]
      },
      {
        id: 'ex-1-3',
        exerciseNumber: 3,
        title: 'Exercise 3: Interrogative & WH Questions (प्रश्नवाचक अनुवाद)',
        category: 'interrogative',
        instructionsHindi: 'निम्नलिखित प्रश्नवाचक वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English (Questions):',
        sentences: [
          { id: 's-1-18', hindi: 'क्या आप थके हैं?', english: 'Are you tired?' },
          { id: 's-1-19', hindi: 'क्या वह डरपोक नहीं है?', english: 'Is he not timid?' },
          { id: 's-1-20', hindi: 'क्या दूध मीठा होता है?', english: 'Is milk sweet?' },
          { id: 's-1-21', hindi: 'आप क्यों उदास हैं?', english: 'Why are you sad?' },
          { id: 's-1-22', hindi: 'वह कैसे दयालु है?', english: 'How is he kind?' },
          { id: 's-1-23', hindi: 'वे लोग क्यों तैयार नहीं हैं?', english: 'Why are they not ready?' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "दूध मीठा होता है।"',
        options: ['Milk has sweet.', 'Milk is sweet.', 'The milk is sweets.', 'Milk sweet is.'],
        answer: 'Milk is sweet.',
        explanation: 'Uncountable nouns representing natural qualities do not take article "the" when speaking in general, and use "is".'
      },
      {
        question: 'Which is correct: "तुम और वह दोषी हो।"',
        options: ['You and he are guilty.', 'You and him is guilty.', 'He and you is guilty.', 'You and he is guilty.'],
        answer: 'You and he are guilty.',
        explanation: 'Compound subject connected by "and" takes plural verb "are".'
      }
    ]
  },
  {
    id: 'oxford-ch-2',
    chapterNumber: 2,
    heading: 'Use of Was and Were',
    hindiHeading: 'Was और Were का प्रयोग',
    pageNo: 20,
    description: 'भूतकाल में किसी व्यक्ति या वस्तु की दशा, पद या स्थिति दर्शाने के लिए Was और Were का प्रयोग होता है।',
    rules: [
      {
        title: 'Basic Structure (सामान्य नियम)',
        formula: 'Subject + was / were + Complement',
        explanationHindi: 'जब भूतकाल में किसी वाक्य के अंत में "था", "थी", "थे" मुख्य क्रिया के रूप में रहता है, तब Subject के अनुसार Was या Were का प्रयोग होता है।',
        explanationEnglish: 'In the past tense, "was" is used with I, He, She, It, and Singular Nouns. "Were" is used with We, You, They, and Plural Nouns.',
        examples: [
          { hindi: 'मैं तैयार था।', english: 'I was ready.', note: 'I के साथ was आता है।' },
          { hindi: 'हमलोग उपस्थित थे।', english: 'We were present.' },
          { hindi: 'आप व्यस्त थे।', english: 'You were busy.' },
          { hindi: 'वह निर्दोष था।', english: 'He was innocent.' },
          { hindi: 'लड़के भूखे थे।', english: 'The boys were hungry.' }
        ]
      },
      {
        title: 'Negative & Interrogative Rules',
        formula: 'Neg: Subject + was/were + not + Complement | Interrog: Was/Were + Subject + Complement?',
        explanationHindi: 'Negative में Was/Were के बाद not लगाते हैं। Interrogative में Was/Were को वाक्य के शुरू में रखा जाता है।',
        explanationEnglish: 'Negative: add "not" after was/were. Interrogative: start with was/were followed by subject.',
        examples: [
          { hindi: 'मैं दोषी नहीं था।', english: 'I was not guilty.' },
          { hindi: 'क्या वे लोग उपस्थित थे?', english: 'Were they present?' },
          { hindi: 'वह क्यों नाराज था?', english: 'Why was he angry?' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v2-1', word: 'Absent', hindiMeaning: 'अनुपस्थित', pronunciation: 'एब्सेंट', partOfSpeech: 'Adjective', exampleSentence: 'He was absent yesterday.' },
      { id: 'v2-2', word: 'Present', hindiMeaning: 'उपस्थित', pronunciation: 'प्रेजेंट', partOfSpeech: 'Adjective', exampleSentence: 'All students were present.' },
      { id: 'v2-3', word: 'Angry', hindiMeaning: 'नाराज / क्रोधित', pronunciation: 'एंग्री', partOfSpeech: 'Adjective', exampleSentence: 'Why were you angry?' },
      { id: 'v2-4', word: 'Famous', hindiMeaning: 'प्रसिद्ध / विख्यात', pronunciation: 'फेमस', partOfSpeech: 'Adjective', exampleSentence: 'He was a famous poet.' },
      { id: 'v2-5', word: 'Thirsty', hindiMeaning: 'प्यासा', pronunciation: 'थर्स्टी', partOfSpeech: 'Adjective', exampleSentence: 'The crow was thirsty.' },
      { id: 'v2-6', word: 'Helpless', hindiMeaning: 'लाचार / असहाय', pronunciation: 'हेल्पलेस', partOfSpeech: 'Adjective', exampleSentence: 'The poor beggar was helpless.' },
      { id: 'v2-7', word: 'Satisfied', hindiMeaning: 'संतुष्ट', pronunciation: 'सेटिस्फाइड', partOfSpeech: 'Adjective', exampleSentence: 'The king was satisfied.' }
    ],
    exercises: [
      {
        id: 'ex-2-1',
        exerciseNumber: 1,
        title: 'Exercise: Was and Were Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-2-1', hindi: 'मैं बीमार था।', english: 'I was ill.' },
          { id: 's-2-2', hindi: 'हमलोग बहुत खुश थे।', english: 'We were very happy.' },
          { id: 's-2-3', hindi: 'वे लोग किसान थे।', english: 'They were farmers.' },
          { id: 's-2-4', hindi: 'वह लड़का आलसी नहीं था।', english: 'That boy was not lazy.' },
          { id: 's-2-5', hindi: 'क्या आप कल अनुपस्थित थे?', english: 'Were you absent yesterday?' },
          { id: 's-2-6', hindi: 'वह इतना उदास क्यों था?', english: 'Why was he so sad?' },
          { id: 's-2-7', hindi: 'राजा दयालु और न्यायप्रिय था।', english: 'The king was kind and just.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Select the correct translation: "वे लोग कल अनुपस्थित थे।"',
        options: ['They were absent yesterday.', 'They was absent yesterday.', 'They are absent yesterday.', 'They had absent yesterday.'],
        answer: 'They were absent yesterday.',
        explanation: 'Plural subject "They" in past tense requires "were".'
      }
    ]
  },
  {
    id: 'oxford-ch-3',
    chapterNumber: 3,
    heading: 'Use of Shall Be and Will Be',
    hindiHeading: 'Shall Be और Will Be का प्रयोग',
    pageNo: 26,
    description: 'भविष्यत काल में किसी स्थिति, पद या गुण के बने रहने का बोध कराने के लिए Shall be और Will be का प्रयोग होता है।',
    rules: [
      {
        title: 'Basic Structure (सामान्य नियम)',
        formula: 'Subject + shall be / will be + Complement',
        explanationHindi: 'जब भविष्य में किसी वाक्य के अंत में "रहूँगा", "बनेगा", "हूँगा", "होगे" आदि मुख्य क्रिया के रूप में हो, तब I और We के साथ Shall be तथा अन्य Subjects (You, He, She, They) के साथ Will be का प्रयोग होता है। (आधुनिक अंग्रेजी में सभी के साथ Will be सामान्य है, पर पारंपरिक नियमों में I/We के साथ Shall be)।',
        explanationEnglish: 'Traditionally, use "shall be" with I/We and "will be" with all other subjects. To express determination or promise, the usage is reversed.',
        examples: [
          { hindi: 'मैं खुश रहूँगा।', english: 'I shall be happy.' },
          { hindi: 'हमलोग उपस्थित रहेंगे।', english: 'We shall be present.' },
          { hindi: 'वह एक डॉक्टर बनेगा।', english: 'He will be a doctor.' },
          { hindi: 'वे लोग सतर्क रहेंगे।', english: 'They will be alert.' }
        ]
      },
      {
        title: 'Negative & Interrogative Rules',
        formula: 'Neg: Subject + shall/will + not + be + Complement | Interrog: Shall/Will + Subject + be + Complement?',
        explanationHindi: 'Negative में "not" को shall/will और be के बीच में रखा जाता है।',
        explanationEnglish: 'In negative sentences, place "not" between shall/will and "be".',
        examples: [
          { hindi: 'मैं उदास नहीं रहूँगा।', english: 'I shall not be sad.' },
          { hindi: 'वह लापरवाह नहीं रहेगा।', english: 'He will not be careless.' },
          { hindi: 'क्या आप तैयार रहेंगे?', english: 'Will you be ready?' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v3-1', word: 'Careless', hindiMeaning: 'लापरवाह / असावधान', pronunciation: 'केयरलेस', partOfSpeech: 'Adjective', exampleSentence: 'Do not be careless.' },
      { id: 'v3-2', word: 'Alert', hindiMeaning: 'सतर्क / चौकस', pronunciation: 'अलर्ट', partOfSpeech: 'Adjective', exampleSentence: 'The guards will be alert.' },
      { id: 'v3-3', word: 'Successful', hindiMeaning: 'सफल', pronunciation: 'सक्सेसफुल', partOfSpeech: 'Adjective', exampleSentence: 'You will be successful.' },
      { id: 'v3-4', word: 'Leader', hindiMeaning: 'नेता', pronunciation: 'लीडर', partOfSpeech: 'Noun', exampleSentence: 'He will be a great leader.' },
      { id: 'v3-5', word: 'Officer', hindiMeaning: 'अधिकारी', pronunciation: 'ऑफिसर', partOfSpeech: 'Noun', exampleSentence: 'She will be an IAS officer.' }
    ],
    exercises: [
      {
        id: 'ex-3-1',
        exerciseNumber: 1,
        title: 'Exercise: Shall Be and Will Be Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-3-1', hindi: 'मैं एक शिक्षक बनूँगा।', english: 'I shall be a teacher.' },
          { id: 's-3-2', hindi: 'हमलोग अमीर बनेंगे।', english: 'We shall be rich.' },
          { id: 's-3-3', hindi: 'आप एक सफल व्यक्ति होंगे।', english: 'You will be a successful person.' },
          { id: 's-3-4', hindi: 'वह परेशान नहीं रहेगा।', english: 'He will not be troubled.' },
          { id: 's-3-5', hindi: 'क्या वे लोग भूखे रहेंगे?', english: 'Will they be hungry?' },
          { id: 's-3-6', hindi: 'तुम उपस्थित क्यों नहीं रहोगे?', english: 'Why will you not be present?' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "हमलोग तैयार रहेंगे।"',
        options: ['We shall be ready.', 'We will ready.', 'We are be ready.', 'We were ready.'],
        answer: 'We shall be ready.',
        explanation: 'We takes "shall be" in standard translation grammar.'
      }
    ]
  },
  {
    id: 'oxford-ch-4',
    chapterNumber: 4,
    heading: 'Use of A, An and The',
    hindiHeading: 'Articles: A, An और The का प्रयोग',
    pageNo: 34,
    description: 'अंग्रेजी में Articles (उपपद) A, An (Indefinite) और The (Definite) का सटीक प्रयोग एवं नियम।',
    rules: [
      {
        title: 'Use of A and An (Indefinite Articles)',
        formula: 'A + Consonant Sound | An + Vowel Sound',
        explanationHindi: 'A या An का प्रयोग Singular Countable Noun से पहले होता है। चयन अंग्रेजी वर्ण (letter) से नहीं, बल्कि उच्चारण की प्रथम ध्वनि (Sound) पर निर्भर करता है। अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ की ध्वनि से शुरू होने वाले शब्दों से पहले "an" तथा क से ज्ञ की व्यंजन ध्वनि से शुरू होने वाले शब्दों से पहले "a" लगता है।',
        explanationEnglish: 'Use "an" before words starting with a vowel sound (not just vowel letters). Use "a" before words starting with a consonant sound.',
        examples: [
          { hindi: 'यह एक सेब है।', english: 'This is an apple.', note: 'Apple: "ऐ" ध्वनि -> An' },
          { hindi: 'वह एक ईमानदार आदमी है।', english: 'He is an honest man.', note: 'Honest: "ऑ" ध्वनि (H silent) -> An' },
          { hindi: 'यह एक विश्वविद्यालय है।', english: 'This is a university.', note: 'University: "यू / य" व्यंजन ध्वनि -> A' },
          { hindi: 'वह एक यूरोपीय नागरिक है।', english: 'He is a European.', note: 'European: "य" व्यंजन ध्वनि -> A' },
          { hindi: 'वह एक एस.डी.ओ. है।', english: 'He is an S.D.O.', note: 'S.D.O.: "एस (ए)" ध्वनि -> An' }
        ]
      },
      {
        title: 'Use of The (Definite Article)',
        formula: 'The + Particular Noun / Unique Object / Superlative',
        explanationHindi: '"The" का प्रयोग किसी निश्चित व्यक्ति/वस्तु, दिशाओं, नदियों, महासागरों, प्रसिद्ध ऐतिहासिक इमारतों, धार्मिक ग्रंथों, तथा Superlative Degree से पहले होता है।',
        explanationEnglish: 'Use "the" when speaking of a particular thing, unique heavenly bodies, rivers, holy books, and superlatives.',
        examples: [
          { hindi: 'सूरज पूर्व में उगता है।', english: 'The sun rises in the east.' },
          { hindi: 'गंगा एक पवित्र नदी है।', english: 'The Ganga is a holy river.' },
          { hindi: 'यह वही किताब है जो मुझे चाहिए।', english: 'This is the book which I need.' },
          { hindi: 'वह कक्षा का सबसे लंबा लड़का है।', english: 'He is the tallest boy in the class.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v4-1', word: 'Heir', hindiMeaning: 'उत्तराधिकारी', pronunciation: 'एयर', partOfSpeech: 'Noun', exampleSentence: 'He is an heir to the throne.' },
      { id: 'v4-2', word: 'Honourable', hindiMeaning: 'आदरणीय / माननीय', pronunciation: 'ऑनरेबल', partOfSpeech: 'Adjective', exampleSentence: 'He is an honourable gentleman.' },
      { id: 'v4-3', word: 'Unique', hindiMeaning: 'अनोखा / अद्वितीय', pronunciation: 'यूनिक', partOfSpeech: 'Adjective', exampleSentence: 'This is a unique idea.' },
      { id: 'v4-4', word: 'Holy', hindiMeaning: 'पवित्र / पावन', pronunciation: 'होली', partOfSpeech: 'Adjective', exampleSentence: 'The Gita is a holy book.' },
      { id: 'v4-5', word: 'Continent', hindiMeaning: 'महाद्वीप', pronunciation: 'कॉन्टिनेंट', partOfSpeech: 'Noun', exampleSentence: 'Asia is a continent.' }
    ],
    exercises: [
      {
        id: 'ex-4-1',
        exerciseNumber: 1,
        title: 'Exercise: A, An and The Translation Practice',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का सही Articles का प्रयोग कर अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English using appropriate articles:',
        sentences: [
          { id: 's-4-1', hindi: 'यह एक छाता है।', english: 'This is an umbrella.' },
          { id: 's-4-2', hindi: 'वह एक बी.ए. पास लड़का है।', english: 'He is a B.A.' },
          { id: 's-4-3', hindi: 'वह एक एम.ए. है।', english: 'He is an M.A.' },
          { id: 's-4-4', hindi: 'गाय एक उपयोगी जानवर है।', english: 'The cow is a useful animal. / A cow is a useful animal.' },
          { id: 's-4-5', hindi: 'रामायण एक पवित्र ग्रंथ है।', english: 'The Ramayana is a holy scripture.' },
          { id: 's-4-6', hindi: 'पानी गंदा है। (निश्चित पानी)', english: 'The water is dirty.' },
          { id: 's-4-7', hindi: 'वह एक घंटे में आएगा।', english: 'He will come in an hour.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Which article goes with "European lady"?',
        options: ['a', 'an', 'the', 'no article'],
        answer: 'a',
        explanation: 'European begins with the consonant sound /j/ ("य"), so it takes "a".'
      },
      {
        question: 'Fill in the blank: "He is _____ honest officer."',
        options: ['a', 'an', 'the', 'some'],
        answer: 'an',
        explanation: 'Honest begins with a silent "h" and vowel sound "ऑ", requiring "an".'
      }
    ]
  },
  {
    id: 'oxford-ch-5',
    chapterNumber: 5,
    heading: 'Use of This, That, These and Those',
    hindiHeading: 'This, That, These और Those का प्रयोग',
    pageNo: 51,
    description: 'संकेतवाचक सर्वनाम एवं विशेषण (Demonstrative Pronouns & Adjectives) का सटीक प्रयोग।',
    rules: [
      {
        title: 'Demonstrative Pronoun vs Demonstrative Adjective',
        formula: 'This / That + is + Noun (Pronoun) | This / That + Noun + is (Adjective)',
        explanationHindi: 'This (यह) और These (ये / ये सब) निकट की वस्तु/व्यक्ति के लिए; That (वह) और Those (वे / वे सब) दूर की वस्तु/व्यक्ति के लिए प्रयुक्त होते हैं। जब इनके तुरंत बाद Noun आ जाए तो ये Demonstrative Adjective कहलाते हैं।',
        explanationEnglish: 'Use "this" (singular) and "these" (plural) for things near in space or time. Use "that" (singular) and "those" (plural) for distant things.',
        examples: [
          { hindi: 'यह एक कलम है।', english: 'This is a pen.', note: 'Demonstrative Pronoun' },
          { hindi: 'यह कलम लाल है।', english: 'This pen is red.', note: 'Demonstrative Adjective' },
          { hindi: 'वे किताबें पुरानी हैं।', english: 'Those books are old.' },
          { hindi: 'ये बच्चे होशियार हैं।', english: 'These children are smart.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v5-1', word: 'Near', hindiMeaning: 'समीप / निकट', pronunciation: 'नियर', partOfSpeech: 'Preposition / Adjective', exampleSentence: 'The school is near my house.' },
      { id: 'v5-2', word: 'Distant', hindiMeaning: 'दूर / दूरस्थ', pronunciation: 'डिस्टेंट', partOfSpeech: 'Adjective', exampleSentence: 'We saw distant mountains.' },
      { id: 'v5-3', word: 'Rotten', hindiMeaning: 'सड़ा हुआ', pronunciation: 'रॉटन', partOfSpeech: 'Adjective', exampleSentence: 'Those apples are rotten.' },
      { id: 'v5-4', word: 'Ripe', hindiMeaning: 'पका हुआ', pronunciation: 'राइप', partOfSpeech: 'Adjective', exampleSentence: 'These mangoes are ripe and sweet.' }
    ],
    exercises: [
      {
        id: 'ex-5-1',
        exerciseNumber: 1,
        title: 'Exercise: Demonstratives Translation Practice',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-5-1', hindi: 'यह एक गाय है।', english: 'This is a cow.' },
          { id: 's-5-2', hindi: 'यह गाय काली है।', english: 'This cow is black.' },
          { id: 's-5-3', hindi: 'वह एक पेड़ है।', english: 'That is a tree.' },
          { id: 's-5-4', hindi: 'वह पेड़ हरा है।', english: 'That tree is green.' },
          { id: 's-5-5', hindi: 'ये कलमें मेरी हैं।', english: 'These pens are mine.' },
          { id: 's-5-6', hindi: 'वे सेब सड़े हुए हैं।', english: 'Those apples are rotten.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "यह घोड़ा तेज है।"',
        options: ['This horse is fast.', 'This is horse fast.', 'That horse is fast.', 'These horses is fast.'],
        answer: 'This horse is fast.',
        explanation: '"This horse" acts as the subject with singular verb "is".'
      }
    ]
  }
];
