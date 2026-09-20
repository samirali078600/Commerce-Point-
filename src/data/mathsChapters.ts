import { ChapterStudyMaterial } from '../types';
import { mathsChapter1Material } from './chapterDataMaths';

export const mathsChapter2Material: ChapterStudyMaterial = {
  readContent: {
    source: "NCERT / BSTBPC गणित कक्षा 12, भाग 1, अध्याय 2",
    introduction: "प्रतिलोम त्रिकोणमितीय फलन (Inverse Trigonometric Functions) कलन (Calculus) और त्रिकोणमिति का अत्यंत महत्वपूर्ण भाग हैं। चूंकि त्रिकोणमितीय फलन आवर्ती होते हैं, इसलिए उनके प्रतिलोम फलन को परिभाषित करने के लिए उनके प्रांत (Domain) को मुख्य मान शाखा (Principal Value Branch) में प्रतिबंधित किया जाता है।",
    sections: [
      {
        heading: "1. मुख्य मान शाखाएं (Principal Value Branches)",
        content: "फलन | प्रांत (Domain) | मुख्य मान परिसर (Range)\n----------------------------------------------------\nsin⁻¹x | [-1, 1] | [-π/2, π/2]\ncos⁻¹x | [-1, 1] | [0, π]\ntan⁻¹x | R | (-π/2, π/2)\ncot⁻¹x | R | (0, π)\nsec⁻¹x | R - (-1, 1) | [0, π] - {π/2}\ncosec⁻¹x | R - (-1, 1) | [-π/2, π/2] - {0}"
      },
      {
        heading: "2. महत्वपूर्ण गुणधर्म एवं सूत्र",
        content: "1. sin⁻¹(-x) = -sin⁻¹x,  tan⁻¹(-x) = -tan⁻¹x,  cosec⁻¹(-x) = -cosec⁻¹x\n2. cos⁻¹(-x) = π - cos⁻¹x,  sec⁻¹(-x) = π - sec⁻¹x,  cot⁻¹(-x) = π - cot⁻¹x\n\n3. पूरक संबंध (Complementary Relations):\n   sin⁻¹x + cos⁻¹x = π/2  (जहाँ x ∈ [-1, 1])\n   tan⁻¹x + cot⁻¹x = π/2  (जहाँ x ∈ R)\n   sec⁻¹x + cosec⁻¹x = π/2  (जहाँ |x| ≥ 1)\n\n4. tan⁻¹ के योग सूत्र:\n   tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y) / (1 - xy)]  (यदि xy < 1)\n   2 tan⁻¹x = tan⁻¹[2x / (1 - x²)] = sin⁻¹[2x / (1 + x²)] = cos⁻¹[(1 - x²) / (1 + x²)]"
      }
    ],
    conclusion: "प्रतिलोम त्रिकोणमितीय फलन अवकलन, समाकलन एवं उच्च गणितीय समीकरणों को हल करने में आधारभूत उपकरण हैं।"
  },
  mcqs: [
    {
      id: "m2-mcq-1",
      questionNumber: 1,
      question: "sin⁻¹(1/2) का मुख्य मान क्या है?",
      options: [
        { id: 'A', text: "π/3" },
        { id: 'B', text: "π/6" },
        { id: 'C', text: "π/4" },
        { id: 'D', text: "π/2" }
      ],
      correctAnswer: 'B',
      explanation: "चूँकि sin(π/6) = 1/2 और π/6 ∈ [-π/2, π/2], अतः मुख्य मान π/6 है।",
      marks: 1,
      bsebExamYears: [2024, 2023, 2021]
    },
    {
      id: "m2-mcq-2",
      questionNumber: 2,
      question: "sin⁻¹x + cos⁻¹x का मान किसके बराबर होता है?",
      options: [
        { id: 'A', text: "π" },
        { id: 'B', text: "π/2" },
        { id: 'C', text: "0" },
        { id: 'D', text: "2π" }
      ],
      correctAnswer: 'B',
      explanation: "मानक सर्वसमिका: sin⁻¹x + cos⁻¹x = π/2 (प्रत्येक x ∈ [-1, 1] के लिए)।",
      marks: 1,
      bsebExamYears: [2024, 2022, 2020, 2018]
    },
    {
      id: "m2-mcq-3",
      questionNumber: 3,
      question: "cos⁻¹(-1/2) का मुख्य मान है —",
      options: [
        { id: 'A', text: "-π/3" },
        { id: 'B', text: "π/3" },
        { id: 'C', text: "2π/3" },
        { id: 'D', text: "4π/3" }
      ],
      correctAnswer: 'C',
      explanation: "cos⁻¹(-x) = π - cos⁻¹(x) = π - π/3 = 2π/3 ∈ [0, π]।",
      marks: 1,
      bsebExamYears: [2023, 2021, 2019]
    }
  ],
  shortQuestions: [
    {
      id: "m2-sq-1",
      questionNumber: 1,
      question: "सिद्ध कीजिए कि: 2 tan⁻¹(1/3) + tan⁻¹(1/7) = π/4.",
      answer: "सूत्र: 2 tan⁻¹x = tan⁻¹[2x / (1 - x²)]\n=> 2 tan⁻¹(1/3) = tan⁻¹[(2/3) / (1 - 1/9)] = tan⁻¹[(2/3) / (8/9)] = tan⁻¹(3/4)\nअब: tan⁻¹(3/4) + tan⁻¹(1/7) = tan⁻¹[(3/4 + 1/7) / (1 - (3/4)(1/7))]\n= tan⁻¹[(25/28) / (25/28)] = tan⁻¹(1) = π/4 (इति सिद्धम्)।",
      marks: 2,
      bsebExamYears: [2024, 2022, 2019],
      important: true
    }
  ],
  longQuestions: [
    {
      id: "m2-lq-1",
      questionNumber: 1,
      question: "समीकरण को हल कीजिए: tan⁻¹[(x - 1)/(x - 2)] + tan⁻¹[(x + 1)/(x + 2)] = π/4.",
      answer: "सूत्र tan⁻¹A + tan⁻¹B = tan⁻¹[(A + B) / (1 - AB)] लागू करने पर:\ntan⁻¹ [ {(x - 1)/(x - 2) + (x + 1)/(x + 2)} / {1 - ((x - 1)(x + 1))/((x - 2)(x + 2))} ] = π/4\nदोनों ओर tan लेने पर:\n[ (x - 1)(x + 2) + (x + 1)(x - 2) ] / [ (x² - 4) - (x² - 1) ] = tan(π/4) = 1\n=> [ (x² + x - 2) + (x² - x - 2) ] / [ -3 ] = 1\n=> (2x² - 4) / (-3) = 1\n=> 2x² - 4 = -3\n=> 2x² = 1  =>  x² = 1/2  =>  x = ± 1/√2.\nअतः अभीष्ट हल: x = ± 1/√2.",
      marks: 5,
      bsebExamYears: [2024, 2021, 2018],
      important: true
    }
  ],
  importantQuestions: [
    {
      id: "m2-iq-1",
      type: "short",
      question: "tan⁻¹(√3) - sec⁻¹(-2) का मान क्या है?",
      answer: "tan⁻¹(√3) = π/3; sec⁻¹(-2) = π - sec⁻¹(2) = π - π/3 = 2π/3.\nमान = π/3 - 2π/3 = -π/3.",
      reason: "BSEB 1-अंक में बारंबार पूछा जाने वाला प्रश्न।",
      source: "BSEB गणित 2024"
    }
  ],
  summary: {
    keyPoints: [
      "sin⁻¹x की मुख्य मान शाखा: [-π/2, π/2]",
      "cos⁻¹x की मुख्य मान शाखा: [0, π]",
      "tan⁻¹x की मुख्य मान शाखा: (-π/2, π/2)",
      "sin⁻¹x + cos⁻¹x = π/2",
      "tan⁻¹x + cot⁻¹x = π/2"
    ],
    source: "NCERT Class 12 Mathematics"
  },
  formulasAndDefinitions: [
    {
      id: "m2-fd-1",
      title: "त्रिकोणमितीय पूरक संबंध",
      formulaOrStatement: "sin⁻¹x + cos⁻¹x = π/2  (|x| ≤ 1)",
      category: "formula"
    },
    {
      id: "m2-fd-2",
      title: "tan⁻¹ का योग सूत्र",
      formulaOrStatement: "tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y) / (1 - xy)]  (xy < 1)",
      category: "formula"
    }
  ]
};

export const mathsChapter3Material: ChapterStudyMaterial = {
  readContent: {
    source: "NCERT / BSTBPC गणित कक्षा 12, भाग 1, अध्याय 3",
    introduction: "आव्यूह (Matrix) संख्याओं या फलनों का एक आयताकार विन्यास है। इसका उपयोग रैखिक समीकरण निकायों को हल करने, त्रिविम ज्यामिति, कंप्यूटर ग्राफिक्स और अर्थशास्त्र में व्यापक रूप से किया जाता है।",
    sections: [
      {
        heading: "1. आव्यूह की कोटि एवं प्रकार",
        content: "यदि किसी आव्यूह में m पंक्तियां (rows) और n स्तंभ (columns) हों, तो उसकी कोटि m × n होती है।\n\nप्रमुख प्रकार:\n1. स्तंभ आव्यूह: जिसमें केवल 1 स्तंभ हो (m × 1)।\n2. पंक्ति आव्यूह: जिसमें केवल 1 पंक्ति हो (1 × n)।\n3. वर्ग आव्यूह: जिसमें पंक्तियों और स्तंभों की संख्या समान हो (m = n)।\n4. विकर्ण आव्यूह: वर्ग आव्यूह जिसके विकर्ण के अतिरिक्त सभी अवयव शून्य हों।\n5. तत्समक आव्यूह (I): विकर्ण आव्यूह जिसके सभी विकर्ण अवयव 1 हों।"
      },
      {
        heading: "2. आव्यूह संक्रियाएं (Matrix Operations)",
        content: "1. आव्यूहों का योग: दो समान कोटि के आव्यूहों A और B के संगत अवयवों को जोड़ने पर A + B प्राप्त होता है (क्रमविनिमेय: A + B = B + A)।\n\n2. आव्यूह गुणन (Multiplication): दो आव्यूहों A (m × n) और B (n × p) का गुणन तभी संभव है जब A के स्तंभों की संख्या B की पंक्तियों की संख्या के बराबर हो। परिणामी आव्यूह की कोटि m × p होती है।\n(सामान्यतः AB ≠ BA अर्थात गुणन क्रमविनिमेय नहीं होता)।"
      },
      {
        heading: "3. आव्यूह का परिवर्त (Transpose of a Matrix)",
        content: "आव्यूह A की पंक्तियों को स्तंभों में तथा स्तंभों को पंक्तियों में बदलने पर प्राप्त आव्यूह उसका परिवर्त (A' या Aᵀ) कहलाता है।\n\nगुणधर्म:\n1. (Aᵀ)ᵀ = A\n2. (A + B)ᵀ = Aᵀ + Bᵀ\n3. (AB)ᵀ = Bᵀ Aᵀ (रिवर्सल नियम)\n\nसममित आव्यूह (Symmetric): यदि Aᵀ = A\nविषम-सममित आव्यूह (Skew-Symmetric): यदि Aᵀ = -A (इसके विकर्ण अवयव सदैव शून्य होते हैं)।"
      }
    ],
    conclusion: "आव्यूह बीजगणित आधुनिक कलन और इंजीनियरिंग में बहु-चर विश्लेषण का मुख्य आधार है।"
  },
  mcqs: [
    {
      id: "m3-mcq-1",
      questionNumber: 1,
      question: "यदि A एक वर्ग आव्यूह है, तो A + A' सदैव होगा —",
      options: [
        { id: 'A', text: "सममित आव्यूह" },
        { id: 'B', text: "विषम-सममित आव्यूह" },
        { id: 'C', text: "शून्य आव्यूह" },
        { id: 'D', text: "तत्समक आव्यूह" }
      ],
      correctAnswer: 'A',
      explanation: "(A + A')' = A' + (A')' = A' + A = A + A', अतः यह सदैव सममित आव्यूह (Symmetric Matrix) होता है।",
      marks: 1,
      bsebExamYears: [2024, 2023, 2022]
    },
    {
      id: "m3-mcq-2",
      questionNumber: 2,
      question: "यदि A की कोटि 2 × 3 और B की कोटि 3 × 4 हो, तो आव्यूह AB की कोटि होगी —",
      options: [
        { id: 'A', text: "2 × 3" },
        { id: 'B', text: "3 × 3" },
        { id: 'C', text: "2 × 4" },
        { id: 'D', text: "4 × 2" }
      ],
      correctAnswer: 'C',
      explanation: "कोटि = पंक्तियां (A) × स्तंभ (B) = 2 × 4.",
      marks: 1,
      bsebExamYears: [2024, 2021, 2019]
    }
  ],
  shortQuestions: [
    {
      id: "m3-sq-1",
      questionNumber: 1,
      question: "विषम-सममित आव्यूह (Skew-Symmetric Matrix) को परिभाषित कीजिए और दर्शाइए कि इसके मुख्य विकर्ण के सभी अवयव शून्य होते हैं।",
      answer: "एक वर्ग आव्यूह A = [a_ij] विषम-सममित कहलाता है यदि A' = -A, अर्थात a_ji = -a_ij.\nमुख्य विकर्ण के लिए i = j होता है:\na_ii = -a_ii  =>  2 a_ii = 0  =>  a_ii = 0.\nअतः विषम-सममित आव्यूह के सभी विकर्ण अवयव शून्य होते हैं।",
      marks: 2,
      bsebExamYears: [2024, 2022],
      important: true
    }
  ],
  longQuestions: [
    {
      id: "m3-lq-1",
      questionNumber: 1,
      question: "सिद्ध कीजिए कि किसी भी वर्ग आव्यूह को एक सममित और एक विषम-सममित आव्यूह के योग के रूप में अद्वितीय प्रकार से व्यक्त किया जा सकता है।",
      answer: "माना A एक वर्ग आव्यूह है। हम लिख सकते हैं:\nA = (1/2)(A + A') + (1/2)(A - A') = P + Q\nजहाँ P = (1/2)(A + A') और Q = (1/2)(A - A')\n\n1. P का परिवर्त:\nP' = [(1/2)(A + A')]' = (1/2)(A' + (A')') = (1/2)(A' + A) = P (सममित आव्यूह)\n\n2. Q का परिवर्त:\nQ' = [(1/2)(A - A')]' = (1/2)(A' - A) = - (1/2)(A - A') = -Q (विषम-सममित आव्यूह)\n\nअतः A = P + Q (सममित और विषम-सममित का योग)।\nयह निरूपण अद्वितीय होता है।",
      marks: 5,
      bsebExamYears: [2024, 2021, 2018, 2015],
      important: true
    }
  ],
  importantQuestions: [
    {
      id: "m3-iq-1",
      type: "short",
      question: "यदि A और B समान कोटि के आव्यूह हों, तो (AB)' किसके बराबर होता है?",
      answer: "(AB)' = B' A' (रिवर्सल नियम)।",
      reason: "BSEB 1-अंक का अत्यंत लोकप्रिय प्रश्न।",
      source: "BSEB 2024 गणित"
    }
  ],
  summary: {
    keyPoints: [
      "m × n कोटि का आव्यूह (m पंक्तियाँ, n स्तम्भ)",
      "गुणन की शर्त: पहले के स्तम्भ = दूसरे की पंक्तियाँ",
      "(AB)' = B' A'",
      "सममित आव्यूह: A' = A; विषम-सममित: A' = -A",
      "A = (1/2)(A + A') + (1/2)(A - A')"
    ],
    source: "NCERT Class 12 Mathematics"
  },
  formulasAndDefinitions: [
    {
      id: "m3-fd-1",
      title: "परिवर्त रिवर्सल नियम",
      formulaOrStatement: "(AB)' = B' · A'",
      category: "formula"
    }
  ]
};

export { mathsChapter1Material };
