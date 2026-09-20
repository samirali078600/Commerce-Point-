import { OxfordChapter } from './types';

export const CHAPTERS_11_TO_16: OxfordChapter[] = [
  {
    id: 'oxford-ch-11',
    chapterNumber: 11,
    heading: 'The Future Tense & Future Time',
    hindiHeading: 'भविष्यत काल एवं भावी समय (Future Time Reference)',
    pageNo: 176,
    description: 'अंग्रेजी में भविष्य की घटनाओं को व्यक्त करने के चार तरीके: Simple Future (shall/will), Future Continuous, Future Perfect, Future Perfect Continuous, तथा Present Tense द्वारा Future Time का बोध (Conditional Clauses)।',
    rules: [
      {
        title: 'Simple Future (Shall / Will)',
        formula: 'Subject + shall / will + V1',
        explanationHindi: 'सामान्य भविष्य ("गा", "गे", "गी") के लिए I/We के साथ shall, बाकी के साथ will। दृढ़ संकल्प, धमकी या प्रतिज्ञा में उल्टा प्रयोग होता है (I will kill him / You shall obey me)।',
        explanationEnglish: 'Use shall with I/We and will with others for normal future actions. Reverse to express determination, promise or threat.',
        examples: [
          { hindi: 'मैं कल तुमसे मिलूँगा।', english: 'I shall meet you tomorrow.' },
          { hindi: 'वह परीक्षा में प्रथम आएगा।', english: 'He will stand first in the examination.' }
        ]
      },
      {
        title: 'Conditional Sentences with Future Time (शर्त वाले वाक्य)',
        formula: 'If / When + Simple Present, Simple Future (shall/will + V1)',
        explanationHindi: 'जब भविष्य के दो कार्य एक-दूसरे पर निर्भर हों (शर्त हो), तो "यदि/जब" वाले उपवाक्य (Subordinate Clause) में Simple Present Tense का प्रयोग होता है, और मुख्य वाक्य (Main Clause) में Simple Future Tense आता है। दोनों में will/shall लगाना गलत होता है।',
        explanationEnglish: 'In conditional sentences referring to future, the if-clause uses Simple Present, while the main clause uses Simple Future.',
        examples: [
          { hindi: 'यदि वह आएगा, तो मैं उसकी मदद करूँगा।', english: 'If he comes, I shall help him.', note: 'Never say: "If he will come..."' },
          { hindi: 'जब वर्षा रुकेगी, हमलोग खेलेंगे।', english: 'When the rain stops, we shall play.' }
        ]
      },
      {
        title: 'Future Continuous & Future Perfect',
        formula: 'Fut Cont: will/shall be + V4 | Fut Perf: will/shall have + V3 + by/before',
        explanationHindi: 'Future Perfect में कार्य भविष्य में किसी दिए गए समय तक समाप्त हो चुका होगा ("तक" के लिए "by" लगता है, जैसे by tomorrow, by 5 PM)।',
        explanationEnglish: 'Future Perfect expresses an action completed before a specified future time point using "by".',
        examples: [
          { hindi: 'वह इस समय पढ़ रहा होगा।', english: 'He will be reading at this time.' },
          { hindi: 'शाम 5 बजे तक वह पहुँच चुका होगा।', english: 'He will have arrived by 5 PM.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v11-1', word: 'Determination', hindiMeaning: 'दृढ़ निश्चय / संकल्प', pronunciation: 'डिटरमिनेशन', partOfSpeech: 'Noun', exampleSentence: 'She showed great determination.' },
      { id: 'v11-2', word: 'Conditional', hindiMeaning: 'शर्त संबंधी', pronunciation: 'कंडीशनल', partOfSpeech: 'Adjective', exampleSentence: 'This is a conditional clause.' },
      { id: 'v11-3', word: 'Promise', hindiMeaning: 'वादा / वचन देना', pronunciation: 'प्रॉमिस', partOfSpeech: 'Noun / Verb', exampleSentence: 'I promise I will help you.' }
    ],
    exercises: [
      {
        id: 'ex-11-1',
        exerciseNumber: 1,
        title: 'Exercise: Future Tense & Conditionals',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-11-1', hindi: 'हमलोग अगले वर्ष परीक्षा देंगे।', english: 'We shall take the examination next year.' },
          { id: 's-11-2', hindi: 'यदि तुम मेहनत करोगे, तो तुम पास हो जाओगे।', english: 'If you work hard, you will pass.' },
          { id: 's-11-3', hindi: 'जब वह मुझे बुलाएगा, मैं जाऊँगा।', english: 'When he calls me, I shall go.' },
          { id: 's-11-4', hindi: 'सोमवार तक वह यह काम पूरा कर चुका होगा।', english: 'He will have completed this work by Monday.' },
          { id: 's-11-5', hindi: 'मैं अवश्य उसकी सहायता करूँगा।', english: 'I will surely help him.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Which sentence is grammatically correct?',
        options: ['If he comes, I will help him.', 'If he will come, I will help him.', 'If he came, I will help him.', 'If he is coming, I will helped him.'],
        answer: 'If he comes, I will help him.',
        explanation: 'In conditional future statements, the conditional clause takes Simple Present.'
      }
    ]
  },
  {
    id: 'oxford-ch-12',
    chapterNumber: 12,
    heading: 'Adjectives of Quantity and Number',
    hindiHeading: 'परिमाण एवं संख्यावाचक विशेषण (Little, Few, Much, Many, Some, Any)',
    pageNo: 193,
    description: 'Little (न के बराबर), A little (थोड़ा/सकारात्मक), Few (नगण्य संख्या), A few (कुछ संख्या), Much (मात्रा), Many (संख्या) आदि का शुद्ध उपयोग।',
    rules: [
      {
        title: 'Little, A Little, The Little (Uncountable Noun के लिए)',
        formula: 'Little = Negative (ना के बराबर) | A Little = Positive (थोड़ा) | The Little = जो थोड़ा सा सब',
        explanationHindi: 'Uncountable Noun (जैसे milk, water, money) की मात्रा दर्शाने के लिए Little परिवार का प्रयोग होता है। "Little" का अर्थ नकारात्मक (न के बराबर) होता है। "A little" का अर्थ काम चलाऊ थोड़ा सा है।',
        explanationEnglish: 'Use Little/A Little/The Little for uncountable quantities. Little denotes virtually nothing; A little denotes a small positive amount.',
        examples: [
          { hindi: 'गिलास में न के बराबर दूध है।', english: 'There is little milk in the glass.' },
          { hindi: 'उसके पास थोड़ा सा दूध है। (सकारात्मक)', english: 'He has a little milk.' },
          { hindi: 'जो थोड़ा दूध था, बिल्ली पी गई।', english: 'The cat drank the little milk there was.' }
        ]
      },
      {
        title: 'Few, A Few, The Few (Countable Plural Noun के लिए)',
        formula: 'Few = Negative | A Few = Positive | The Few = जो कुछ सब',
        explanationHindi: 'संख्या (Countable Nouns) के लिए Few का प्रयोग होता है। Few = न के बराबर, A few = कुछ/थोड़े, The few = जो कुछ संख्या में थे।',
        explanationEnglish: 'Use Few/A Few/The Few with plural countable nouns.',
        examples: [
          { hindi: 'उसके बहुत कम (न के बराबर) दोस्त हैं।', english: 'He has few friends.' },
          { hindi: 'मेरे पास कुछ अच्छी किताबें हैं।', english: 'I have a few good books.' }
        ]
      },
      {
        title: 'Much vs Many & Some vs Any',
        formula: 'Much + Uncountable | Many + Countable Plural | Some (Affirmative) | Any (Negative/Interrogative)',
        explanationHindi: 'मात्रा के लिए Much, संख्या के लिए Many। सकारात्मक वाक्यों में Some, तथा नकारात्मक और सामान्य प्रश्नवाचक में Any का प्रयोग होता है।',
        explanationEnglish: 'Much with uncountables, Many with countables. Some in positive assertions, Any in negative and questions.',
        examples: [
          { hindi: 'उसके पास बहुत पैसे हैं।', english: 'He has much money.' },
          { hindi: 'मेरे पास कोई कलम नहीं है।', english: 'I do not have any pen.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v12-1', word: 'Quantity', hindiMeaning: 'मात्रा / परिमाण', pronunciation: 'क्वांटिटी', partOfSpeech: 'Noun', exampleSentence: 'A small quantity of salt is enough.' },
      { id: 'v12-2', word: 'Scarce', hindiMeaning: 'दुर्लभ / कम', pronunciation: 'स्केयर्स', partOfSpeech: 'Adjective', exampleSentence: 'Water is scarce in the desert.' },
      { id: 'v12-3', word: 'Abundant', hindiMeaning: 'प्रचुर / बहुतायत', pronunciation: 'अबंडेंट', partOfSpeech: 'Adjective', exampleSentence: 'We have abundant food.' }
    ],
    exercises: [
      {
        id: 'ex-12-1',
        exerciseNumber: 1,
        title: 'Exercise: Quantity & Number Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-12-1', hindi: 'मेरे पास न के बराबर पैसे हैं।', english: 'I have little money.' },
          { id: 's-12-2', hindi: 'उसके पास कुछ पुस्तकें हैं।', english: 'He has a few books.' },
          { id: 's-12-3', hindi: 'क्या तुम्हारे पास कोई सवाल है?', english: 'Do you have any questions?' },
          { id: 's-12-4', hindi: 'सभा में बहुत से लोग उपस्थित थे।', english: 'Many people were present at the meeting.' },
          { id: 's-12-5', hindi: 'मुझे थोड़ा आराम चाहिए।', english: 'I need a little rest.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Choose correct word: "There is _____ water in the pot, he cannot quench his thirst."',
        options: ['little', 'a little', 'few', 'a few'],
        answer: 'little',
        explanation: 'Water is uncountable and since he cannot quench his thirst, the quantity is negative ("little").'
      }
    ]
  },
  {
    id: 'oxford-ch-13',
    chapterNumber: 13,
    heading: 'Some More Hints on Interrogative Sentences',
    hindiHeading: 'प्रश्नवाचक वाक्यों के विशेष नियम एवं संकेत',
    pageNo: 196,
    description: 'विभिन्न प्रकार के प्रश्न: Who, Whom, Whose, Which, What, How many, How much, Preposition वाले प्रश्न और Indirect Questions की सही बनावट।',
    rules: [
      {
        title: 'Subjective "Who" vs Objective "Whom"',
        formula: 'Who + Verb (Direct subject) vs Whom + Auxiliary + Subject + Verb?',
        explanationHindi: 'जब "कौन" स्वयं कर्ता (Subject) का काम करे, तो "Who" के बाद साधारण वाक्य की तरह सीधी क्रिया आती है (जैसे Who broke the glass? न कि Who did break the glass?)। जब किसे/किसको पूछा जाए, तो Whom + Helping Verb + Subject आता है।',
        explanationEnglish: 'When "Who" acts as subject, it takes verb directly without do/does/did in affirmative question style.',
        examples: [
          { hindi: 'तुम्हें अंग्रेजी कौन पढ़ाता है?', english: 'Who teaches you English?' },
          { hindi: 'यह शीशा किसने तोड़ा?', english: 'Who broke this glass?' },
          { hindi: 'तुम किसे ढूंढ रहे हो?', english: 'Whom are you looking for?' }
        ]
      },
      {
        title: 'Prepositions with Interrogative Words',
        formula: 'Preposition + Whom/Which... or Wh... + Preposition at end',
        explanationHindi: 'आधुनिक बोलचाल में Preposition को वाक्य के अंत में रखा जाता है।',
        explanationEnglish: 'In modern usage, prepositions often go to the end of the interrogative sentence.',
        examples: [
          { hindi: 'तुम किसके बारे में बात कर रहे हो?', english: 'What are you talking about? / Whom are you talking about?' },
          { hindi: 'तुम किस स्कूल में पढ़ते हो?', english: 'Which school do you study in?' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v13-1', word: 'Interrogative', hindiMeaning: 'प्रश्नवाचक', pronunciation: 'इंटेरोगेटिव', partOfSpeech: 'Adjective', exampleSentence: 'Form an interrogative sentence.' },
      { id: 'v13-2', word: 'Direct Question', hindiMeaning: 'सीधा प्रश्न', pronunciation: 'डायरेक्ट क्वेश्चन', partOfSpeech: 'Noun', exampleSentence: 'Ask a direct question.' }
    ],
    exercises: [
      {
        id: 'ex-13-1',
        exerciseNumber: 1,
        title: 'Exercise: Special Interrogative Questions',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित प्रश्नों का अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-13-1', hindi: 'यहाँ कौन आया था?', english: 'Who came here?' },
          { id: 's-13-2', hindi: 'तुम्हें यह किसने बताया?', english: 'Who told you this?' },
          { id: 's-13-3', hindi: 'तुम किस शहर से आते हो?', english: 'Which city do you come from?' },
          { id: 's-13-4', hindi: 'तुम्हें कितने पैसे चाहिए?', english: 'How much money do you need?' },
          { id: 's-13-5', hindi: 'कक्षा में कितने छात्र उपस्थित हैं?', english: 'How many students are present in the class?' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "यह दरवाजा किसने खोला?"',
        options: ['Who opened this door?', 'Who did open this door?', 'Whom opened this door?', 'Who has open this door?'],
        answer: 'Who opened this door?',
        explanation: 'Who as subject takes past verb "opened" directly.'
      }
    ]
  },
  {
    id: 'oxford-ch-14',
    chapterNumber: 14,
    heading: 'Question Tags',
    hindiHeading: 'Question Tags (अनुप्रश्न / पुछल्ले प्रश्न)',
    pageNo: 205,
    description: 'कथन के अंत में श्रोता से पुष्टि (confirmation) प्राप्त करने हेतु जोड़े जाने वाले लघु प्रश्न।',
    rules: [
      {
        title: 'Golden Rules of Question Tags',
        formula: 'Positive Statement -> Negative Tag (Auxiliary + n\'t + Pronoun?) | Negative Statement -> Positive Tag (Auxiliary + Pronoun?)',
        explanationHindi: '1. यदि मुख्य वाक्य सकारात्मक (Positive) है, तो Tag नकारात्मक (Negative) होगा।\n2. यदि मुख्य वाक्य नकारात्मक है, तो Tag सकारात्मक होगा।\n3. Tag में हमेशा Pronoun का प्रयोग होता है (Noun का नहीं)।\n4. हमेशा संक्षिप्त रूप (Contraction) जैसे aren\'t, isn\'t, don\'t, won\'t आदि का प्रयोग होता है।\n5. "I am" का Question Tag "aren\'t I?" होता है (am not I कभी नहीं होता)।',
        explanationEnglish: 'Positive sentence takes negative tag; negative sentence takes positive tag. Always use contractive negative forms and personal pronouns. "I am" takes "aren\'t I?".',
        examples: [
          { hindi: 'तुम एक छात्र हो, है न?', english: 'You are a student, aren\'t you?' },
          { hindi: 'वह बेईमान नहीं है, है क्या?', english: 'He is not dishonest, is he?' },
          { hindi: 'मैं सही हूँ, है न?', english: 'I am right, aren\'t I?' },
          { hindi: 'राम ने तुम्हारी मदद की, है न?', english: 'Ram helped you, didn\'t he?' },
          { hindi: 'वे लोग नहीं आएंगे, आएंगे क्या?', english: 'They will not come, will they?' }
        ]
      },
      {
        title: 'Imperative Sentences and Let\'s Tags',
        formula: 'Let\'s / Let us -> shall we? | Imperative order/request -> will you? / won\'t you?',
        explanationHindi: 'Let\'s वाले वाक्यों का tag हमेशा "shall we?" होता है। आदेश या आग्रह वाले वाक्यों का tag सामान्यतः "will you?" या "won\'t you?" होता है।',
        explanationEnglish: 'Sentences beginning with "Let us / Let\'s" take "shall we?". Imperatives take "will you?".',
        examples: [
          { hindi: 'आओ, हमलोग टहलें, चलें न?', english: 'Let\'s have a walk, shall we?' },
          { hindi: 'दरवाजा बंद करो, करोगे न?', english: 'Shut the door, will you?' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v14-1', word: 'Confirmation', hindiMeaning: 'पुष्टि / समर्थन', pronunciation: 'कन्फर्मेशन', partOfSpeech: 'Noun', exampleSentence: 'He asked for confirmation.' },
      { id: 'v14-2', word: 'Contracted Form', hindiMeaning: 'संक्षिप्त रूप', pronunciation: 'कॉन्ट्रैक्टेड फॉर्म', partOfSpeech: 'Noun', exampleSentence: '"Isn\'t" is a contracted form.' }
    ],
    exercises: [
      {
        id: 'ex-14-1',
        exerciseNumber: 1,
        title: 'Exercise: Complete the Question Tags',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का सही Question Tag के साथ अनुवाद करें:',
        instructionsEnglish: 'Translate into English with appropriate Question Tag:',
        sentences: [
          { id: 's-14-1', hindi: 'आप एक डॉक्टर हैं, है न?', english: 'You are a doctor, aren\'t you?' },
          { id: 's-14-2', hindi: 'वह आज खुश नहीं है, है क्या?', english: 'She is not happy today, is she?' },
          { id: 's-14-3', hindi: 'वे लोग सच बोलते हैं, है न?', english: 'They speak the truth, don\'t they?' },
          { id: 's-14-4', hindi: 'हमलोग मैच जीत गए, है न?', english: 'We won the match, didn\'t we?' },
          { id: 's-14-5', hindi: 'चलो साथ खाना खाएं, खाओगे न?', english: 'Let us eat together, shall we?' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'What is the correct tag for: "I am late, ______?"',
        options: ['aren\'t I?', 'am not I?', 'isn\'t I?', 'don\'t I?'],
        answer: 'aren\'t I?',
        explanation: 'In standard English, the question tag for "I am" is always "aren\'t I?".'
      }
    ]
  },
  {
    id: 'oxford-ch-15',
    chapterNumber: 15,
    heading: 'Introductory “There”',
    hindiHeading: 'Introductory "There" का प्रयोग (प्रारंभिक There)',
    pageNo: 220,
    description: 'जब किसी वाक्य में कर्ता का अस्तित्व (Existence) दर्शाना हो या कर्ता अनिर्दिष्ट हो, तो "There" का प्रयोग एक काल्पनिक कर्ता के रूप में होता है।',
    rules: [
      {
        title: 'Basic Concept of Introductory "There"',
        formula: 'There + is / are / was / were + Real Subject (Noun) + (Place / Time)',
        explanationHindi: 'जब किसी वस्तु या व्यक्ति के कहीं होने या न होने की स्थिति बताई जाए, और क्रिया के बाद आने वाला Noun ही वास्तविक Subject हो, तब वाक्य "There" से शुरू होता है। Verb का चयन There के अनुसार नहीं, बल्कि उसके बाद आने वाले Real Subject के Number के अनुसार होता है।',
        explanationEnglish: 'Use introductory "there" to declare existence. The verb agrees with the following real subject, not with "there".',
        examples: [
          { hindi: 'एक राजा था।', english: 'There was a king.', note: 'King singular है, अतः was।' },
          { hindi: 'दो लड़के थे।', english: 'There were two boys.', note: 'Two boys plural है, अतः were।' },
          { hindi: 'कक्षा में चालीस छात्र हैं।', english: 'There are forty students in the class.' },
          { hindi: 'कुएं में पानी नहीं है।', english: 'There is no water in the well.' }
        ]
      },
      {
        title: 'Tense variations with There',
        explanationHindi: 'There will be (होगा), There must be (अवश्य होना चाहिए), There seems to be (लगता है कि है) आदि में भी There का प्रयोग होता है।',
        explanationEnglish: 'There can be used with modal verbs and future tense.',
        examples: [
          { hindi: 'वहाँ शांति होगी।', english: 'There will be peace there.' },
          { hindi: 'कोई न कोई समस्या जरूर होगी।', english: 'There must be some problem.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v15-1', word: 'Existence', hindiMeaning: 'अस्तित्व / मौजूदगी', pronunciation: 'एग्जिस्टेन्स', partOfSpeech: 'Noun', exampleSentence: 'We accept the existence of truth.' },
      { id: 'v15-2', word: 'Crowd', hindiMeaning: 'भीड़', pronunciation: 'क्राउड', partOfSpeech: 'Noun', exampleSentence: 'There was a large crowd.' },
      { id: 'v15-3', word: 'Shortage', hindiMeaning: 'कमी / किल्लत', pronunciation: 'शॉर्टेज', partOfSpeech: 'Noun', exampleSentence: 'There is a shortage of clean water.' }
    ],
    exercises: [
      {
        id: 'ex-15-1',
        exerciseNumber: 1,
        title: 'Exercise: Introductory There Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-15-1', hindi: 'एक गाँव में एक बूढ़ा किसान रहता था।', english: 'There lived an old farmer in a village.' },
          { id: 's-15-2', hindi: 'पेड़ पर कई पक्षी हैं।', english: 'There are many birds on the tree.' },
          { id: 's-15-3', hindi: 'इस चाय में चीनी नहीं है।', english: 'There is no sugar in this tea.' },
          { id: 's-15-4', hindi: 'क्या उस कमरे में कोई है?', english: 'Is there anyone in that room?' },
          { id: 's-15-5', hindi: 'नदी के किनारे एक मंदिर था।', english: 'There was a temple on the bank of the river.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Choose correct verb: "There _____ many cows in the field."',
        options: ['are', 'is', 'was', 'has'],
        answer: 'are',
        explanation: 'The real subject "many cows" is plural, so use "are".'
      }
    ]
  },
  {
    id: 'oxford-ch-16',
    chapterNumber: 16,
    heading: 'Introductory “It”',
    hindiHeading: 'Introductory "It" का प्रयोग (समय, मौसम, दूरी व दिन)',
    pageNo: 228,
    description: 'समय (Time), दिन (Day), तारीख (Date), महीना (Month), वर्ष (Year), मौसम (Weather), प्राकृतिक घटना एवं निर्जीव/छोटे जीवों के लिए Introductory "It" का प्रयोग।',
    rules: [
      {
        title: 'Usage of Introductory "It"',
        formula: 'It + is / was + Time / Day / Date / Weather / Distance',
        explanationHindi: 'जब वाक्य में समय बताना हो (जैसे 4 बजे हैं, सवा चार, साढ़े चार, पौने चार), दिन (आज सोमवार है), महीना, मौसम (ठंड है, गर्मी है, वर्षा हो रही है), तब वाक्य की शुरुआत "It" से होती है। इसे Impersonal "It" भी कहते हैं।',
        explanationEnglish: 'Use introductory "It" to denote time, weather, day, date, distance, and atmospheric conditions.',
        examples: [
          { hindi: 'चार बजे हैं।', english: 'It is four o\'clock.' },
          { hindi: 'सवा चार बजे हैं।', english: 'It is a quarter past four.' },
          { hindi: 'साढ़े चार बजे हैं।', english: 'It is half past four.' },
          { hindi: 'पौने पांच बजे हैं।', english: 'It is a quarter to five.' },
          { hindi: 'आज सोमवार है।', english: 'It is Monday today.' },
          { hindi: 'बहुत तेज हवा चल रही है।', english: 'It is blowing hard.' },
          { hindi: 'मुसलाधार बारिश हो रही है।', english: 'It is raining cats and dogs. / It is raining heavily.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'v16-1', word: 'Quarter past', hindiMeaning: 'सवा (15 मिनट अधिक)', pronunciation: 'क्वार्टर पास्ट', partOfSpeech: 'Phrase', exampleSentence: 'It is a quarter past ten.' },
      { id: 'v16-2', word: 'Quarter to', hindiMeaning: 'पौने (15 मिनट कम)', pronunciation: 'क्वार्टर टू', partOfSpeech: 'Phrase', exampleSentence: 'It is a quarter to six.' },
      { id: 'v16-3', word: 'Pleasant', hindiMeaning: 'सुहावना / मनभावन', pronunciation: 'प्लेजेंट', partOfSpeech: 'Adjective', exampleSentence: 'It is a pleasant morning.' }
    ],
    exercises: [
      {
        id: 'ex-16-1',
        exerciseNumber: 1,
        title: 'Exercise: Introductory It Translations',
        category: 'mixed',
        instructionsHindi: 'निम्नलिखित वाक्यों का अंग्रेजी में अनुवाद करें:',
        instructionsEnglish: 'Translate into English:',
        sentences: [
          { id: 's-16-1', hindi: 'अभी आठ बजे हैं।', english: 'It is eight o\'clock now.' },
          { id: 's-16-2', hindi: 'आज बहुत अधिक गर्मी है।', english: 'It is very hot today.' },
          { id: 's-16-3', hindi: 'कल बहुत ठंड थी।', english: 'It was very cold yesterday.' },
          { id: 's-16-4', hindi: 'शाम हो गई है।', english: 'It is evening.' },
          { id: 's-16-5', hindi: 'वहाँ पहुँचना आसान नहीं है।', english: 'It is not easy to reach there.' }
        ]
      }
    ],
    practiceQuiz: [
      {
        question: 'Translate: "साढ़े सात बजे हैं।"',
        options: ['It is half past seven.', 'It is quarter past seven.', 'It is half to seven.', 'It is seven and half.'],
        answer: 'It is half past seven.',
        explanation: '30 minutes past the hour is expressed as "half past".'
      }
    ]
  }
];
