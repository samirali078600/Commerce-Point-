import { ChapterStudyMaterial } from '../types';

export const mathsChapter1Material: ChapterStudyMaterial = {
  readContent: {
    source: "NCERT / बिहार स्टेट टेक्स्ट बुक - गणित भाग 1, अध्याय 1 (संबंध एवं फलन)",
    introduction: "संबंध एवं फलन (Relations and Functions) आधुनिक बीजगणित तथा कलन (Calculus) की आधारशिला हैं। कक्षा 12 में संबंधों के प्रकार (स्वतुल्य, सममित, संक्रामक, तुल्यता) तथा फलनों के प्रकार (एकैकी, आच्छादक, द्विआधारी संक्रियाएं) का विशद अध्ययन किया जाता है।",
    sections: [
      {
        heading: "1. संबंधों के प्रकार (Types of Relations)",
        content: "समुच्चय A पर परिभाषित संबंध R:\n• रिक्त संबंध (Empty): R = ∅ ⊂ A × A\n• सार्वत्रिक संबंध (Universal): R = A × A\n• स्वतुल्य संबंध (Reflexive): यदि प्रत्येक a ∈ A के लिए (a, a) ∈ R।\n• सममित संबंध (Symmetric): यदि (a, b) ∈ R ⇒ (b, a) ∈ R (सभी a, b ∈ A के लिए)।\n• संक्रामक संबंध (Transitive): यदि (a, b) ∈ R तथा (b, c) ∈ R ⇒ (a, c) ∈ R।\n• तुल्यता संबंध (Equivalence Relation): जो संबंध स्वतुल्य, सममित तथा संक्रामक तीनों हो।"
      },
      {
        heading: "2. फलनों के प्रकार (Types of Functions)",
        content: "फलन f: X → Y:\n• एकैकी (Injective / One-One): यदि f(x₁) = f(x₂) ⇒ x₁ = x₂।\n• बहु-एक (Many-One): यदि दो भिन्न अवयवों का एक ही प्रतिबिंब हो।\n• आच्छादक (Surjective / Onto): यदि परिसर = सहप्रांत (अर्थात् प्रत्येक y ∈ Y के लिए एक x ∈ X ऐसा है कि f(x) = y)।\n• एकैकी आच्छादी (Bijective): जो एकैकी तथा आच्छादक दोनों हो। केवल एकैकी आच्छादी फलनों का ही प्रतिलोम (Inverse f⁻¹) संभव होता है।"
      }
    ],
    conclusion: "तुल्यता संबंध समुच्चय को असंयुक्त तुल्यता वर्गों (Equivalence classes) में विभाजित करते हैं।"
  },
  mcqs: [
    {
      id: "m1-mcq-1",
      questionNumber: 1,
      question: "यदि f: R → R, f(x) = 2x द्वारा परिभाषित है, तो फलन f है —",
      options: [
        { id: 'A', text: "एकैकी और आच्छादक (Bijective)" },
        { id: 'B', text: "बहु-एक और आच्छादक" },
        { id: 'C', text: "एकैकी परंतु आच्छादक नहीं" },
        { id: 'D', text: "न तो एकैकी न ही आच्छादक" }
      ],
      correctAnswer: 'A',
      explanation: "f(x₁) = f(x₂) ⇒ 2x₁ = 2x₂ ⇒ x₁ = x₂ (एकैकी)। साथ ही प्रत्येक y ∈ R के लिए x = y/2 ∈ R ऐसा है कि f(y/2) = y (आच्छादक)।",
      marks: 1,
      bsebExamYears: [2024, 2023, 2021]
    },
    {
      id: "m1-mcq-2",
      questionNumber: 2,
      question: "यदि A = {1, 2, 3}, तो अवयव (1, 2) को समाहित करने वाले तुल्यता संबंधों की न्यूनतम संख्या क्या है?",
      options: [
        { id: 'A', text: "1" },
        { id: 'B', text: "2" },
        { id: 'C', text: "3" },
        { id: 'D', text: "4" }
      ],
      correctAnswer: 'B',
      explanation: "अवयव (1, 2) को अंतर्विष्ट करने वाले ठीक 2 तुल्यता संबंध संभव हैं।",
      marks: 1,
      bsebExamYears: [2023, 2020, 2018]
    }
  ],
  shortQuestions: [
    {
      id: "m1-sq-1",
      questionNumber: 1,
      question: "तुल्यता संबंध (Equivalence Relation) की परिभाषा दें।",
      answer: "किसी समुच्चय A पर परिभाषित संबंध R एक तुल्यता संबंध कहलाता है यदि वह: (1) स्वतुल्य हो (प्रत्येक a ∈ A के लिए (a, a) ∈ R), (2) सममित हो ((a, b) ∈ R ⇒ (b, a) ∈ R), और (3) संक्रामक हो ((a, b) ∈ R तथा (b, c) ∈ R ⇒ (a, c) ∈ R)।",
      marks: 2,
      bsebExamYears: [2024, 2022, 2019],
      important: true
    }
  ],
  longQuestions: [
    {
      id: "m1-lq-1",
      questionNumber: 1,
      question: "सिद्ध कीजिए कि पूर्णांकों के समुच्चय Z में R = {(a, b) : 2, (a - b) को विभाजित करता है} द्वारा प्रदत्त संबंध एक तुल्यता संबंध है।",
      answer: "1. स्वतुल्य: प्रत्येक a ∈ Z के लिए a - a = 0, जो 2 से विभाज्य है ⇒ (a, a) ∈ R।\n2. सममित: यदि (a, b) ∈ R, तो a - b = 2k ⇒ b - a = -2k = 2(-k), अतः 2, (b - a) को भी विभाजित करता है ⇒ (b, a) ∈ R।\n3. संक्रामक: यदि (a, b) ∈ R तथा (b, c) ∈ R, तो a - b = 2k₁ और b - c = 2k₂। जोड़ने पर: a - c = 2(k₁ + k₂), जो 2 से विभाज्य है ⇒ (a, c) ∈ R।\nचूँकि R स्वतुल्य, सममित तथा संक्रामक तीनों है, अतः R एक तुल्यता संबंध है।",
      marks: 5,
      bsebExamYears: [2024, 2021, 2017],
      important: true
    }
  ],
  importantQuestions: [
    {
      id: "m1-iq-1",
      type: "short",
      question: "एकैकी आच्छादी (Bijective) फलन किसे कहते हैं?",
      answer: "वह फलन जो एकैकी (Injective) और आच्छादक (Surjective) दोनों हो, एकैकी आच्छादी कहलाता है।",
      reason: "BSEB 2 अंक परिभाषा में नियमित पूछा जाता है।",
      source: "बिहार बोर्ड गणित 2024"
    }
  ],
  summary: {
    keyPoints: [
      "संबंध R ⊂ A × B",
      "तुल्यता संबंध = स्वतुल्य + सममित + संक्रामक",
      "एकैकी फलन: f(x₁) = f(x₂) ⇒ x₁ = x₂",
      "आच्छादक फलन: Range = Codomain"
    ],
    quickNotes: "BSEB में संबंध व फलन से 5 से 8 वस्तुनिष्ठ प्रश्न और 1 लघु उत्तरीय प्रश्न अवश्य रहता है।",
    source: "NCERT गणित कक्षा 12"
  },
  formulasAndDefinitions: [
    {
      id: "m1-fd-1",
      title: "तुल्यता संबंध शर्त",
      formulaOrStatement: "(a, a) ∈ R, (a, b) ∈ R ⇒ (b, a) ∈ R, (a, b) ∈ R ∧ (b, c) ∈ R ⇒ (a, c) ∈ R",
      category: "rule"
    }
  ]
};
