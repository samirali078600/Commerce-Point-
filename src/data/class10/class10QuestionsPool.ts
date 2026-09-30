import { MCQOption } from '../../types';

export interface PoolMCQ {
  question: string;
  options: MCQOption[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  answerKey: string;
}

export interface PoolSubjective {
  question: string;
  answerKey: string;
  marks: number;
}

export interface SubjectPool {
  mcqs: PoolMCQ[];
  short: PoolSubjective[];
  long: PoolSubjective[];
}

// =========================================================================
// 1. CLASS 10 MATHEMATICS QUESTION POOL
// =========================================================================
export const CLASS10_MATHS_POOL: SubjectPool = {
  mcqs: [
    {
      question: 'यदि दो संख्याओं का म०स० (HCF) 15 तथा ल०स० (LCM) 105 है, और एक संख्या 5 है, तो दूसरी संख्या क्या होगी?',
      options: [
        { id: 'A', text: '75' },
        { id: 'B', text: '225' },
        { id: 'C', text: '315' },
        { id: 'D', text: '525' }
      ],
      correctOption: 'C',
      answerKey: 'सूत्र: पहली संख्या × दूसरी संख्या = HCF × LCM => दूसरी संख्या = (15 × 105) / 5 = 315.'
    },
    {
      question: 'संख्या √3 एक कैसी संख्या है?',
      options: [
        { id: 'A', text: 'परिमेय संख्या' },
        { id: 'B', text: 'अपरिमेय संख्या' },
        { id: 'C', text: 'पूर्णांक संख्या' },
        { id: 'D', text: 'प्राकृत संख्या' }
      ],
      correctOption: 'B',
      answerKey: '√3 एक अपरिमेय संख्या है क्योंकि इसे p/q के रूप में व्यक्त नहीं किया जा सकता।'
    },
    {
      question: 'द्विघात बहुपद ax² + bx + c के शून्यकों का योगफल (α + β) क्या होता है?',
      options: [
        { id: 'A', text: 'c / a' },
        { id: 'B', text: '-b / a' },
        { id: 'C', text: 'b / a' },
        { id: 'D', text: '-c / a' }
      ],
      correctOption: 'B',
      answerKey: 'शून्यकों का योगफल α + β = -b/a होता है।'
    },
    {
      question: 'रैखिक समीकरण युग्म a1x + b1y + c1 = 0 और a2x + b2y + c2 = 0 में यदि a1/a2 ≠ b1/b2 हो, तो आलेखीय रेखाएं कैसी होंगी?',
      options: [
        { id: 'A', text: 'प्रतिच्छेदी रेखाएं (केवल एक हल)' },
        { id: 'B', text: 'समांतर रेखाएं (कोई हल नहीं)' },
        { id: 'C', text: 'संपाती रेखाएं (अपरिमित रूप से अनेक हल)' },
        { id: 'D', text: 'इनमें से कोई नहीं' }
      ],
      correctOption: 'A',
      answerKey: 'जब a1/a2 ≠ b1/b2 हो, तो दोनों रेखाएं एक बिंदु पर प्रतिच्छेद करती हैं तथा अद्वितीय हल होता है।'
    },
    {
      question: 'द्विघात समीकरण ax² + bx + c = 0 के मूल वास्तविक और समान होंगे यदि विविक्तकर D का मान हो:',
      options: [
        { id: 'A', text: 'D > 0' },
        { id: 'B', text: 'D = 0' },
        { id: 'C', text: 'D < 0' },
        { id: 'D', text: 'D ≤ 0' }
      ],
      correctOption: 'B',
      answerKey: 'जब D = b² - 4ac = 0 हो, तो द्विघात समीकरण के दोनों मूल वास्तविक और समान (-b/2a) होते हैं।'
    },
    {
      question: 'समांतर श्रेढ़ी (AP): 2, 7, 12, ... का 10वाँ पद क्या होगा?',
      options: [
        { id: 'A', text: '45' },
        { id: 'B', text: '47' },
        { id: 'C', text: '49' },
        { id: 'D', text: '50' }
      ],
      correctOption: 'B',
      answerKey: 'यहाँ a = 2, d = 7 - 2 = 5. an = a + (n-1)d => a10 = 2 + (10-1)×5 = 2 + 45 = 47.'
    },
    {
      question: 'मूल बिंदु (Origin) के निर्देशांक क्या होते हैं?',
      options: [
        { id: 'A', text: '(0, 0)' },
        { id: 'B', text: '(1, 1)' },
        { id: 'C', text: '(0, 1)' },
        { id: 'D', text: '(1, 0)' }
      ],
      correctOption: 'A',
      answerKey: 'मूल बिंदु के निर्देशांक हमेशा (0, 0) होते हैं।'
    },
    {
      question: 'बिंदु P(x, y) की मूल बिंदु से दूरी क्या होगी?',
      options: [
        { id: 'A', text: '√(x² - y²)' },
        { id: 'B', text: '√(x² + y²)' },
        { id: 'C', text: 'x² + y²' },
        { id: 'D', text: 'x + y' }
      ],
      correctOption: 'B',
      answerKey: 'मूल बिंदु (0, 0) से किसी बिंदु P(x, y) की दूरी √(x² + y²) होती है।'
    },
    {
      question: 'यदि sin θ = 3/5 हो, तो cos θ का मान क्या होगा?',
      options: [
        { id: 'A', text: '4/5' },
        { id: 'B', text: '5/4' },
        { id: 'C', text: '3/4' },
        { id: 'D', text: '4/3' }
      ],
      correctOption: 'A',
      answerKey: 'cos θ = √(1 - sin²θ) = √(1 - 9/25) = √(16/25) = 4/5.'
    },
    {
      question: 'tan 45° का मान निम्नलिखित में से किसके बराबर है?',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '1/√3' },
        { id: 'C', text: '1' },
        { id: 'D', text: '√3' }
      ],
      correctOption: 'C',
      answerKey: 'मान सारणी के अनुसार tan 45° = 1 होता है।'
    },
    {
      question: 'sin² 63° + sin² 27° का मान क्या होगा?',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '1' },
        { id: 'C', text: '2' },
        { id: 'D', text: '-1' }
      ],
      correctOption: 'B',
      answerKey: 'sin 27° = cos(90° - 27°) = cos 63°. अतः sin² 63° + cos² 63° = 1.'
    },
    {
      question: 'वृत्त के बाह्य बिंदु से वृत्त पर कितनी स्पर्श रेखाएं खींची जा सकती हैं?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: 'अनंत' }
      ],
      correctOption: 'B',
      answerKey: 'वृत्त के किसी बाह्य बिंदु से वृत्त पर केवल दो स्पर्श रेखाएं खींची जा सकती हैं और दोनों की लंबाइयां समान होती हैं।'
    },
    {
      question: 'त्रिज्यखंड का क्षेत्रफल ज्ञात करने का सूत्र क्या है (जहाँ कोण θ तथा त्रिज्या r है)?',
      options: [
        { id: 'A', text: '(θ / 360°) × 2πr' },
        { id: 'B', text: '(θ / 360°) × πr²' },
        { id: 'C', text: '(θ / 180°) × πr²' },
        { id: 'D', text: 'πr²h' }
      ],
      correctOption: 'B',
      answerKey: 'त्रिज्यखंड का क्षेत्रफल = (θ/360°) × πr².'
    },
    {
      question: 'माध्य, माध्यक और बहुलक के बीच सही आनुभविक संबंध कौन-सा है?',
      options: [
        { id: 'A', text: 'बहुलक = 3 माध्यक - 2 माध्य' },
        { id: 'B', text: 'माध्य = 3 माध्यक - 2 बहुलक' },
        { id: 'C', text: 'माध्यक = 3 बहुलक - 2 माध्य' },
        { id: 'D', text: 'बहुलक = 2 माध्यक - 3 माध्य' }
      ],
      correctOption: 'A',
      answerKey: 'मानक आनुभविक सूत्र: बहुलक = 3 माध्यक - 2 माध्य (Mode = 3 Median - 2 Mean).'
    },
    {
      question: 'किसी असंभव घटना (Impossible event) की प्रायिकता क्या होती है?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '0' },
        { id: 'C', text: '0.5' },
        { id: 'D', text: '-1' }
      ],
      correctOption: 'B',
      answerKey: 'असंभव घटना की प्रायिकता हमेशा 0 होती है, जबकि निश्चित घटना की प्रायिकता 1 होती है।'
    },
    {
      question: 'एक वृत्त की परिधि 44 सेमी है, तो वृत्त का व्यास क्या होगा?',
      options: [
        { id: 'A', text: '7 सेमी' },
        { id: 'B', text: '14 सेमी' },
        { id: 'C', text: '21 सेमी' },
        { id: 'D', text: '28 सेमी' }
      ],
      correctOption: 'B',
      answerKey: '2πr = 44 => 2 × (22/7) × r = 44 => r = 7 सेमी। अतः व्यास d = 2r = 14 सेमी।'
    }
  ],
  short: [
    {
      question: 'यूक्लिड विभाजन एल्गोरिद्म का प्रयोग करके 135 और 225 का म०स० (HCF) ज्ञात कीजिए।',
      answerKey: '225 = 135 × 1 + 90\n135 = 90 × 1 + 45\n90 = 45 × 2 + 0\nअंतिम अशून्य शेषफल 45 है, अतः HCF(135, 225) = 45.',
      marks: 2
    },
    {
      question: 'द्विघात बहुपद x² - 2x - 8 के शून्यक ज्ञात कीजिए तथा शून्यकों और गुणांकों के संबंध की सत्यता की जांच कीजिए।',
      answerKey: 'x² - 4x + 2x - 8 = 0 => x(x - 4) + 2(x - 4) = 0 => (x - 4)(x + 2) = 0.\nशून्यक α = 4 तथा β = -2 हैं।\nजांच: α + β = 4 + (-2) = 2 = -(-2)/1 = -b/a.\nαβ = 4 × (-2) = -8 = c/a.',
      marks: 2
    },
    {
      question: 'बिंदुओं A(2, 3) और B(4, 1) के बीच की दूरी ज्ञात कीजिए।',
      answerKey: 'दूरी सूत्र d = √[(x2 - x1)² + (y2 - y1)²]\n= √[(4 - 2)² + (1 - 3)²] = √[(2)² + (-2)²] = √(4 + 4) = √8 = 2√2 मात्रक।',
      marks: 2
    },
    {
      question: 'सिद्ध कीजिए कि: (1 + tan²θ) × cos²θ = 1.',
      answerKey: 'LHS = (1 + tan²θ) × cos²θ\nहम जानते हैं कि 1 + tan²θ = sec²θ.\n= sec²θ × cos²θ = (1 / cos²θ) × cos²θ = 1 = RHS. इति सिद्धम्।',
      marks: 2
    },
    {
      question: 'एक थैले में 3 लाल और 5 काली गेंदें हैं। इस थैले में से एक गेंद यादृच्छया निकाली जाती है। इसकी प्रायिकता क्या है कि गेंद लाल हो?',
      answerKey: 'कुल गेंदों की संख्या n(S) = 3 + 5 = 8.\nलाल गेंदों की संख्या n(E) = 3.\nप्रायिकता P(लाल) = n(E) / n(S) = 3/8.',
      marks: 2
    }
  ],
  long: [
    {
      question: 'सिद्ध कीजिए कि √5 एक अपरिमेय संख्या है।',
      answerKey: 'माना कि √5 एक परिमेय संख्या है, जिसे p/q (जहाँ p और q सह-अभाज्य पूर्णांक हैं तथा q ≠ 0) के रूप में लिखा जा सकता है।\n√5 = p/q => 5q² = p² ... (समीकरण 1)\nइसका अर्थ है कि 5, p² को विभाजित करता है, अतः प्रमेय अनुसार 5, p को भी विभाजित करेगा।\nमाना p = 5m. समीकरण 1 में रखने पर: 5q² = (5m)² = 25m² => q² = 5m².\nइसका अर्थ है कि 5, q² को विभाजित करता है, अतः 5, q को भी विभाजित करेगा।\nअतः p और q दोनों का उभयनिष्ठ गुणनखंड 5 है, जो हमारी इस मान्यता का विरोध करता है कि p और q सह-अभाज्य हैं।\nअतः हमारी कल्पना गलत है, √5 एक अपरिमेय संख्या है। इति सिद्धम्।',
      marks: 5
    },
    {
      question: 'थेल्स प्रमेय (आधारभूत आनुपातिकता प्रमेय) को लिखकर सिद्ध कीजिए।',
      answerKey: 'कथन: यदि किसी त्रिभुज की एक भुजा के समांतर अन्य दो भुजाओं को भिन्न-भिन्न बिंदुओं पर प्रतिच्छेद करने के लिए एक रेखा खींची जाए, तो ये अन्य दो भुजाएं एक ही अनुपात में विभाजित हो जाती हैं।\nउपपत्ति:\nमाना △ABC में भुजा BC के समांतर DE रेखा खींची गई जो AB को D तथा AC को E पर काटती है।\nरचना: BE और CD को मिलाया तथा DM ⊥ AC और EN ⊥ AB खींचा।\nar(△ADE) = 1/2 × AD × EN\nar(△BDE) = 1/2 × DB × EN\nअतः ar(△ADE) / ar(△BDE) = AD / DB ... (1)\nइसी प्रकार ar(△ADE) / ar(△DEC) = AE / EC ... (2)\nचूँकि △BDE और △DEC एक ही आधार DE और समांतर रेखाओं BC और DE के बीच स्थित हैं, अतः ar(△BDE) = ar(△DEC).\nसमीकरण (1) और (2) से: AD / DB = AE / EC. इति सिद्धम्।',
      marks: 5
    }
  ]
};

// =========================================================================
// 2. CLASS 10 SCIENCE QUESTION POOL
// =========================================================================
export const CLASS10_SCIENCE_POOL: SubjectPool = {
  mcqs: [
    {
      question: 'रासायनिक अभिक्रिया Fe + CuSO4 → FeSO4 + Cu किस प्रकार की अभिक्रिया का उदाहरण है?',
      options: [
        { id: 'A', text: 'संयोजन अभिक्रिया' },
        { id: 'B', text: 'विस्थापन अभिक्रिया' },
        { id: 'C', text: 'द्विविस्थापन अभिक्रिया' },
        { id: 'D', text: 'वियोजन अभिक्रिया' }
      ],
      correctOption: 'B',
      answerKey: 'आयरन (Fe) कॉपर (Cu) से अधिक क्रियाशील है, अतः वह कॉपर सल्फेट से कॉपर को विस्थापित कर देता है। यह विस्थापन अभिक्रिया है।'
    },
    {
      question: 'शुद्ध जल का pH मान कितना होता है?',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '7' },
        { id: 'C', text: '14' },
        { id: 'D', text: '1' }
      ],
      correctOption: 'B',
      answerKey: 'उदासीन विलयन तथा शुद्ध जल का pH मान ठीक 7 होता है।'
    },
    {
      question: 'कमरे के ताप पर द्रव अवस्था में रहने वाली एकमात्र अधातु कौन-सी है?',
      options: [
        { id: 'A', text: 'पारा (Mercury)' },
        { id: 'B', text: 'ब्रोमीन (Bromine)' },
        { id: 'C', text: 'आयोडीन' },
        { id: 'D', text: 'क्लोरीन' }
      ],
      correctOption: 'B',
      answerKey: 'ब्रोमीन (Br) कमरे के ताप पर द्रव अवस्था में पाई जाने वाली अधातु है (पारा धातु है)।'
    },
    {
      question: 'बेकिंग सोडा (खाने का सोडा) का रासायनिक सूत्र क्या है?',
      options: [
        { id: 'A', text: 'Na2CO3.10H2O' },
        { id: 'B', text: 'NaHCO3' },
        { id: 'C', text: 'Ca(OH)2' },
        { id: 'D', text: 'CaOCl2' }
      ],
      correctOption: 'B',
      answerKey: 'सोडियम हाइड्रोजन कार्बोनेट (NaHCO3) को बेकिंग सोडा कहा जाता है।'
    },
    {
      question: 'प्रकाश संश्लेषण प्रक्रिया के लिए आवश्यक सूर्य के प्रकाश को कौन अवशोषित करता है?',
      options: [
        { id: 'A', text: 'क्लोरोफिल (पर्णहरित)' },
        { id: 'B', text: 'जल' },
        { id: 'C', text: 'रंध्र' },
        { id: 'D', text: 'ऑक्सीजन' }
      ],
      correctOption: 'A',
      answerKey: 'पत्तियों में उपस्थित हरा वर्णक क्लोरोफिल सूर्य के प्रकाश ऊर्जा को अवशोषित करता है।'
    },
    {
      question: 'मनुष्य के वृक्क (Kidney) की रचनात्मक एवं क्रियात्मक इकाई क्या कहलाती है?',
      options: [
        { id: 'A', text: 'न्यूरॉन' },
        { id: 'B', text: 'नेफ्रॉन (वृक्काणु)' },
        { id: 'C', text: 'ग्लोमेरुलस' },
        { id: 'D', text: 'मूत्रवाहिनी' }
      ],
      correctOption: 'B',
      answerKey: 'वृक्क की क्रियात्मक इकाई नेफ्रॉन (वृक्काणु) है, जो रक्त को छानकर मूत्र निर्माण करती है।'
    },
    {
      question: 'पादप में जाइलम (Xylem) किसके परिवहन के लिए उत्तरदायी होता है?',
      options: [
        { id: 'A', text: 'जल का वहन' },
        { id: 'B', text: 'भोजन का वहन' },
        { id: 'C', text: 'अमीनो अम्ल का वहन' },
        { id: 'D', text: 'ऑक्सीजन का वहन' }
      ],
      correctOption: 'A',
      answerKey: 'जाइलम ऊतक जड़ों से जल एवं खनिज लवणों का ऊपर पत्तियों तक संवहन करता है।'
    },
    {
      question: 'मानव शरीर में मास्टर ग्रंथि (Master Gland) किसे कहा जाता है?',
      options: [
        { id: 'A', text: 'थायरॉइड ग्रंथि' },
        { id: 'B', text: 'पिट्यूटरी (पीयूष) ग्रंथि' },
        { id: 'C', text: 'अग्न्याशय' },
        { id: 'D', text: 'अधिवृक्क' }
      ],
      correctOption: 'B',
      answerKey: 'पीयूष ग्रंथि शरीर की अन्य अंतःस्रावी ग्रंथियों का नियंत्रण करती है, इसलिए इसे मास्टर ग्रंथि कहते हैं।'
    },
    {
      question: 'आनुवंशिकी का जनक (Father of Genetics) किसे कहा जाता है?',
      options: [
        { id: 'A', text: 'चार्ल्स डार्विन' },
        { id: 'B', text: 'ग्रेगर जॉन मेंडल' },
        { id: 'C', text: 'लैमार्क' },
        { id: 'D', text: 'रॉबर्ट हुक' }
      ],
      correctOption: 'B',
      answerKey: 'ग्रेगर जॉन मेंडल ने मटर के पौधे पर संकरण प्रयोग कर आनुवंशिकता के बुनियादी नियमों की खोज की।'
    },
    {
      question: 'दाढ़ी बनाने (हजामत) के लिए किस दर्पण का उपयोग किया जाता है?',
      options: [
        { id: 'A', text: 'उत्तल दर्पण' },
        { id: 'B', text: 'अवतल दर्पण' },
        { id: 'C', text: 'समतल दर्पण' },
        { id: 'D', text: 'उभयोत्तल' }
      ],
      correctOption: 'B',
      answerKey: 'अवतल दर्पण चेहरे को सीधा, बड़ा और आभासी दिखाता है जब चेहरा ध्रुव और फोकस के बीच हो।'
    },
    {
      question: 'लेंस की क्षमता (Power of Lens) का SI मात्रक क्या होता है?',
      options: [
        { id: 'A', text: 'मीटर' },
        { id: 'B', text: 'डायोप्टर (D)' },
        { id: 'C', text: 'सेंटीमीटर' },
        { id: 'D', text: 'ल्यूमेन' }
      ],
      correctOption: 'B',
      answerKey: 'लेंस की क्षमता P = 1/f (मीटर में) का SI मात्रक डायोप्टर (m⁻¹ या D) होता है।'
    },
    {
      question: 'विद्युत प्रतिरोध (Resistance) का SI मात्रक क्या है?',
      options: [
        { id: 'A', text: 'एम्पीयर' },
        { id: 'B', text: 'वोल्ट' },
        { id: 'C', text: 'ओम (Ω)' },
        { id: 'D', text: 'वाट' }
      ],
      correctOption: 'C',
      answerKey: 'जर्मन भौतिकविद् जॉर्ज साइमन ओम के सम्मान में प्रतिरोध का SI मात्रक ओम (Ω) रखा गया।'
    },
    {
      question: 'विद्युत धारा उत्पन्न करने वाली युक्ति को क्या कहते हैं?',
      options: [
        { id: 'A', text: 'जनित्र (Generator / Dynamo)' },
        { id: 'B', text: 'गैल्वेनोमीटर' },
        { id: 'C', text: 'एमीटर' },
        { id: 'D', text: 'मोटर' }
      ],
      correctOption: 'A',
      answerKey: 'विद्युत जनित्र (डायनेमो) यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित कर धारा उत्पन्न करता है।'
    },
    {
      question: 'ओजोन परत का मुख्य रूप से अवक्षय (Depletion) किसके कारण हो रहा है?',
      options: [
        { id: 'A', text: 'कार्बन डाइऑक्साइड' },
        { id: 'B', text: 'क्लोरोफ्लोरोकार्बन (CFCs)' },
        { id: 'C', text: 'मीथेन' },
        { id: 'D', text: 'नाइट्रोजन' }
      ],
      correctOption: 'B',
      answerKey: 'रेफ्रिजरेटर और एसी से निकलने वाली CFC गैसें समताप मंडल में ओजोन (O3) परत को नष्ट करती हैं।'
    }
  ],
  short: [
    {
      question: 'उदासीनीकरण अभिक्रिया (Neutralization Reaction) क्या है? एक उदाहरण दीजिए।',
      answerKey: 'जब अम्ल और क्षारक परस्पर अभिक्रिया करके लवण तथा जल बनाते हैं, तो इस प्रक्रिया को उदासीनीकरण कहते हैं।\nउदाहरण: HCl + NaOH → NaCl + H2O.',
      marks: 2
    },
    {
      question: 'ओम का नियम (Ohm’s Law) लिखिए।',
      answerKey: 'नियम: यदि किसी चालक तार की भौतिक अवस्था (जैसे ताप) स्थिर रहे, तो चालक के सिरों के बीच का विभवांतर (V) उसमें प्रवाहित होने वाली विद्युत धारा (I) के समानुपाती होता है।\nV ∝ I => V = IR (जहाँ R चालक का प्रतिरोध है)।',
      marks: 2
    },
    {
      question: 'प्रकाश के अपवर्तन के दो नियम लिखिए।',
      answerKey: '1. आपतित किरण, अपवर्तित किरण तथा आपतन बिंदु पर अभिलंब तीनों एक ही तल में होते हैं।\n2. किन्हीं दो माध्यमों और एक ही रंग के प्रकाश के लिए आपतन कोण की ज्या (sin i) तथा अपवर्तन कोण की ज्या (sin r) का अनुपात स्थिर होता है (स्नेल का नियम: sin i / sin r = μ).',
      marks: 2
    },
    {
      question: 'स्वपोषी पोषण एवं विषमपोषी पोषण में कोई दो अंतर बताइए।',
      answerKey: '1. स्वपोषी जीव (जैसे हरे पौधे) अपना भोजन अकार्बनिक पदार्थों (CO2, जल, सूर्य प्रकाश) से स्वयं बनाते हैं, जबकि विषमपोषी अपने भोजन के लिए अन्य जीवों पर निर्भर रहते हैं।\n2. स्वपोषी में पर्णहरित (क्लोरोफिल) आवश्यक होता है, जबकि विषमपोषी में इसकी आवश्यकता नहीं होती।',
      marks: 2
    }
  ],
  long: [
    {
      question: 'विद्युत मोटर का सिद्धांत, संरचना तथा कार्यविधि का सचित्र वर्णन कीजिए।',
      answerKey: '• सिद्धांत: जब किसी धारावाही कुंडली को चुंबकीय क्षेत्र में रखा जाता है, तो उस पर एक चुंबकीय बल युग्म कार्य करता है जो कुंडली को उसके अक्ष पर घुमाने का प्रयास करता है (फ्लेमिंग का वामहस्त नियम)।\n• मुख्य भाग: आर्मेचर (ABCD कुंडली), स्थायी चुंबक (N-S ध्रुव), विभक्त वलय (कम्यूटेटर), कार्बन ब्रश (B1, B2)।\n• कार्यविधि: जब परिपथ में धारा प्रवाहित की जाती है, तो फ्लेमिंग के वाम-हस्त नियम अनुसार भुजा AB पर नीचे की ओर तथा CD पर ऊपर की ओर बल लगता है, जिससे कुंडली लगातार वामावर्त दिशा में घूर्णन करने लगती है।\n• उपयोग: विद्युत पंखे, मिक्सी, वाशिंग मशीन आदि में।',
      marks: 5
    },
    {
      question: 'मानव पाचन तंत्र का नामांकित चित्र बनाकर आमाशय तथा क्षुद्रांत्र (छोटी आंत) में होने वाली पाचन क्रिया का वर्णन कीजिए।',
      answerKey: '• आमाशय में पाचन: जठर रस में हाइड्रोक्लोरिक अम्ल (HCl) अम्लीय माध्यम बनाता है, पेप्सिन प्रोटीन को तोड़ता है और श्लेष्मा आमाशय की आंतरिक परत की रक्षा करती है।\n• क्षुद्रांत्र में पाचन: यह पाचन तंत्र का सबसे लंबा भाग है जहाँ पूर्ण पाचन होता है। यकृत से निकला पित्त रस वसा का इमल्सीकरण करता है तथा अग्न्याशय से निकला ट्रिप्सिन और लाइपेस प्रोटीन व वसा का पाचन संपन्न करते हैं। पचे हुए भोजन का अवशोषण दीर्घरोम (विली) द्वारा होता है।',
      marks: 5
    }
  ]
};

// =========================================================================
// 3. CLASS 10 SOCIAL SCIENCE QUESTION POOL
// =========================================================================
export const CLASS10_SOCIAL_SCIENCE_POOL: SubjectPool = {
  mcqs: [
    {
      question: 'इटली के एकीकरण का मसीहा किसे कहा जाता है?',
      options: [
        { id: 'A', text: 'नेपोलियन' },
        { id: 'B', text: 'मेजिनी (Mazzini)' },
        { id: 'C', text: 'बिस्मार्क' },
        { id: 'D', text: 'काउंट कावूर' }
      ],
      correctOption: 'B',
      answerKey: 'जोसेफ मेजिनी ने "यंग इटली" की स्थापना की और उन्हें इटली के एकीकरण का मसीहा कहा जाता है।'
    },
    {
      question: 'जलियांवाला बाग हत्याकांड किस तिथि को हुआ था?',
      options: [
        { id: 'A', text: '13 अप्रैल 1919' },
        { id: 'B', text: '14 अप्रैल 1920' },
        { id: 'C', text: '1 मई 1919' },
        { id: 'D', text: '15 अगस्त 1919' }
      ],
      correctOption: 'A',
      answerKey: 'अमृतसर के जलियांवाला बाग में 13 अप्रैल 1919 (बैसाखी के दिन) जनरल डायर ने निहत्थी भीड़ पर गोलियां चलवाई थीं।'
    },
    {
      question: 'गांधीजी ने सविनय अवज्ञा आंदोलन की शुरुआत किस प्रसिद्ध यात्रा से की थी?',
      options: [
        { id: 'A', text: 'चंपारण सत्याग्रह' },
        { id: 'B', text: 'दांडी यात्रा (नमक सत्याग्रह)' },
        { id: 'C', text: 'खेड़ा सत्याग्रह' },
        { id: 'D', text: 'अहमदाबाद मिल हड़ताल' }
      ],
      correctOption: 'B',
      answerKey: '12 मार्च 1930 को साबरमती से दांडी पहुंचकर 6 अप्रैल 1930 को नमक कानून तोड़कर सविनय अवज्ञा आंदोलन प्रारंभ किया।'
    },
    {
      question: 'काली मृदा (Black Soil) का दूसरा लोकप्रिय नाम क्या है?',
      options: [
        { id: 'A', text: 'बलुई मृदा' },
        { id: 'B', text: 'रेगुर मृदा (Regur Soil)' },
        { id: 'C', text: 'लाल मृदा' },
        { id: 'D', text: 'लैटेराइट' }
      ],
      correctOption: 'B',
      answerKey: 'काली मिट्टी को रेगुर मिट्टी कहते हैं, जो कपास की खेती के लिए सर्वोत्तम मानी जाती है।'
    },
    {
      question: 'भारत का सबसे बड़ा लौह-अयस्क उत्पादक राज्य कौन-सा है?',
      options: [
        { id: 'A', text: 'कर्नाटक' },
        { id: 'B', text: 'ओडिशा' },
        { id: 'C', text: 'झारखंड' },
        { id: 'D', text: 'गोवा' }
      ],
      correctOption: 'B',
      answerKey: 'वर्तमान में भारत में सर्वाधिक लौह-अयस्क का उत्पादन ओडिशा राज्य में होता है।'
    },
    {
      question: 'बिहार का शोक (Sorrow of Bihar) किस नदी को कहा जाता है?',
      options: [
        { id: 'A', text: 'गंगा नदी' },
        { id: 'B', text: 'कोसी नदी' },
        { id: 'C', text: 'गंडक नदी' },
        { id: 'D', text: 'सोन नदी' }
      ],
      correctOption: 'B',
      answerKey: 'कोसी नदी अपने मार्ग परिवर्तन और भयंकर बाढ़ के कारण "बिहार का शोक" कही जाती है।'
    },
    {
      question: 'भारतीय संविधान में त्रिस्तरीय पंचायती राज व्यवस्था किस संविधान संशोधन द्वारा लागू की गई?',
      options: [
        { id: 'A', text: '42वां संशोधन' },
        { id: 'B', text: '73वां संविधान संशोधन' },
        { id: 'C', text: '74वां संशोधन' },
        { id: 'D', text: '44वां संशोधन' }
      ],
      correctOption: 'B',
      answerKey: '73वें संविधान संशोधन (1992) द्वारा पंचायती राज संस्थाओं को संवैधानिक दर्जा दिया गया।'
    },
    {
      question: 'भारत में उपभोक्ता संरक्षण अधिनियम (COPRA) कब पारित हुआ था?',
      options: [
        { id: 'A', text: '1980 में' },
        { id: 'B', text: '1986 में' },
        { id: 'C', text: '1991 में' },
        { id: 'D', text: '2005 में' }
      ],
      correctOption: 'B',
      answerKey: 'उपभोक्ताओं के अधिकारों की रक्षा हेतु 1986 में संसद द्वारा उपभोक्ता संरक्षण अधिनियम पारित हुआ।'
    }
  ],
  short: [
    {
      question: 'असहयोग आंदोलन प्रथम जन-आंदोलन था। कैसे? संक्षेप में स्पष्ट कीजिए।',
      answerKey: 'गांधीजी के नेतृत्व में 1920 में शुरू हुए असहयोग आंदोलन में पहली बार किसान, मजदूर, छात्र, महिलाएं और व्यापारी वर्ग एक साथ सड़कों पर उतरे। विदेशी वस्तुओं का बहिष्कार और सरकारी स्कूलों-न्यायालयों का त्याग व्यापक स्तर पर किया गया, जिससे यह प्रथम राष्ट्रव्यापी जन-आंदोलन बना।',
      marks: 2
    },
    {
      question: 'संसाधन नियोजन (Resource Planning) क्या है और यह क्यों आवश्यक है?',
      answerKey: 'संसाधनों के विवेकपूर्ण, मितव्ययी और सुनियोजित उपयोग की तकनीक को संसाधन नियोजन कहते हैं। भारत जैसे विशाल देश में संसाधनों का वितरण असमान है तथा भविष्य की पीढ़ियों हेतु सतत विकास के लिए नियोजन अनिवार्य है।',
      marks: 2
    },
    {
      question: 'धर्मनिरपेक्ष राज्य (Secular State) से आप क्या समझते हैं?',
      answerKey: 'धर्मनिरपेक्ष राज्य वह राज्य है जिसका अपना कोई आधिकारिक राजकीय धर्म नहीं होता। यहाँ सभी धर्मों के नागरिकों को समान अधिकार, धार्मिक स्वतंत्रता तथा राज्य द्वारा किसी धर्म के आधार पर कोई भेदभाव नहीं किया जाता।',
      marks: 2
    },
    {
      question: 'वस्तु विनिमय प्रणाली (Barter System) की दो मुख्य कठिनाइयां लिखिए।',
      answerKey: '1. आवश्यकताओं के दोहरे संयोग का अभाव (दोनों पक्षों की परस्पर जरूरतों का मेल न खाना)।\n2. मूल्य के सामान्य मापक का अभाव (किसी वस्तु का सटीक मूल्य निर्धारण न हो पाना)।',
      marks: 2
    }
  ],
  long: [
    {
      question: 'भारतीय स्वतंत्रता संग्राम में महात्मा गांधी के योगदान का सविस्तार वर्णन कीजिए।',
      answerKey: '• सत्याग्रह और अहिंसा का प्रयोग: चंपारण (1917), अहमदाबाद मिल मजदूर और खेड़ा में प्रारंभिक सफल प्रयोग।\n• प्रमुख जन आंदोलन: 1920 का असहयोग आंदोलन, 1930 का सविस्तार दांडी मार्च और सविनय अवज्ञा आंदोलन, तथा 1942 का "करो या मरो" के नारे के साथ भारत छोड़ो आंदोलन।\n• सामाजिक सुधार: अस्पृश्यता निवारण, खादी और चरखा प्रचार, हिंदू-मुस्लिम एकता तथा महिला सशक्तिकरण।\n• परिणाम: गांधीजी के इन अहिंसक आंदोलनों ने ब्रिटिश साम्राज्य की नींव हिला दी और 15 अगस्त 1947 को देश आजाद हुआ।',
      marks: 5
    }
  ]
};

// =========================================================================
// 4. CLASS 10 HINDI QUESTION POOL
// =========================================================================
export const CLASS10_HINDI_POOL: SubjectPool = {
  mcqs: [
    {
      question: "'श्रम विभाजन और जाति प्रथा' पाठ के लेखक कौन हैं?",
      options: [
        { id: 'A', text: 'महात्मा गांधी' },
        { id: 'B', text: 'डॉ. भीमराव अम्बेडकर' },
        { id: 'C', text: 'मैक्समूलर' },
        { id: 'D', text: 'हजारी प्रसाद द्विवेदी' }
      ],
      correctOption: 'B',
      answerKey: 'डॉ. भीमराव अम्बेडकर ने अपने विख्यात भाषण "Annihilation of Caste" के आधार पर यह निबंध लिखा।'
    },
    {
      question: "'विष के दाँत' कहानी में मदन किसका बेटा था?",
      options: [
        { id: 'A', text: 'सेन साहब का' },
        { id: 'B', text: 'गिरधरलाल का' },
        { id: 'C', text: 'सोफर का' },
        { id: 'D', text: 'मुखर्जी साहब का' }
      ],
      correctOption: 'B',
      answerKey: 'मदन सेन साहब के कारखाने में काम करने वाले साधारण किरानी गिरधरलाल का स्वाभिमानी बेटा था।'
    },
    {
      question: "'बहादुर' कहानी में बहादुर कहाँ का रहने वाला था?",
      options: [
        { id: 'A', text: 'बिहार' },
        { id: 'B', text: 'नेपाल' },
        { id: 'C', text: 'भूटान' },
        { id: 'D', text: 'उत्तर प्रदेश' }
      ],
      correctOption: 'B',
      answerKey: 'बहादुर (दिलबहादुर) नेपाल और बिहार की सीमा पर बसे एक पहाड़ी गांव का रहने वाला बालक था।'
    },
    {
      question: "'सिंहासन खाली करो कि जनता आती है' किस प्रसिद्ध कविता की पंक्ति है?",
      options: [
        { id: 'A', text: 'भारतमाता' },
        { id: 'B', text: 'जनतंत्र का जन्म' },
        { id: 'C', text: 'स्वदेशी' },
        { id: 'D', text: 'हिरोशिमा' }
      ],
      correctOption: 'B',
      answerKey: 'राष्ट्रकवि रामधारी सिंह दिनकर द्वारा रचित ओजस्वी कविता "जनतंत्र का जन्म" की यह अमर पंक्ति है।'
    },
    {
      question: "'दही वाली मंगम्मा' कहानी किस भाषा से अनूदित है?",
      options: [
        { id: 'A', text: 'तमिल' },
        { id: 'B', text: 'कन्नड़' },
        { id: 'C', text: 'उड़िया' },
        { id: 'D', text: 'तेलुगु' }
      ],
      correctOption: 'B',
      answerKey: 'यह प्रसिद्ध कन्नड़ कथाकार श्रीनिवास (मास्ती वेंकटेश अय्यंगार) की कहानी है।'
    },
    {
      question: "'माँ' कहानी में कौन जन्म से ही पागल और गूँगी थी?",
      options: [
        { id: 'A', text: 'कमू' },
        { id: 'B', text: 'मंगू' },
        { id: 'C', text: 'कुसुम' },
        { id: 'D', text: 'पाप्पाति' }
      ],
      correctOption: 'B',
      answerKey: 'ईश्वर पेटलीकर की कहानी "माँ" में मंगू जन्म से ही पागल और गूँगी लड़की थी जिसकी माँ उसकी सेवा में समर्पित थी।'
    }
  ],
  short: [
    {
      question: 'जाति प्रथा भारत में बेरोजगारी का एक प्रमुख और प्रत्यक्ष कारण कैसे बनी हुई है?',
      answerKey: 'जाति प्रथा व्यक्ति को उसकी इच्छा या कार्यकुशलता के अनुसार पेशा चुनने की अनुमति नहीं देती, बल्कि जन्म के आधार पर पैतृक पेशा थोप देती है। आधुनिक युग में उद्योग-धंधों में तकनीकी परिवर्तन होने पर जब व्यक्ति को पेशा बदलने की छूट नहीं मिलती, तो वह भुखमरी व बेरोजगारी का शिकार हो जाता है।',
      marks: 2
    },
    {
      question: 'खोखा (कासू) किन मामलों में अपवाद था?',
      answerKey: 'सेन साहब की पांच पुत्रियों के बाद बुढ़ापे की अंतिम उम्मीद के रूप में खोखा का जन्म हुआ था। इसलिए वह घर के सभी कायदे-कानूनों, अनुशासन तथा माता-पिता के लाड़-प्यार के मामलों में पूरी तरह अपवाद था।',
      marks: 2
    },
    {
      question: 'कवि रसखान ने माली और मालिन किन्हें कहा है और क्यों?',
      answerKey: 'कवि रसखान ने प्रेम रूपी वाटिका के माली और मालिन भगवान श्रीकृष्ण और श्री राधिका को कहा है, क्योंकि जिस प्रकार माली और मालिन बगीचे को सींचकर संवारते हैं, उसी प्रकार राधा-कृष्ण प्रेम वाटिका के मूल आधार और संरक्षक हैं।',
      marks: 2
    }
  ],
  long: [
    {
      question: "'बहादुर' कहानी का सारांश अपने शब्दों में लिखिए।",
      answerKey: 'बहादुर एक 12-13 वर्ष का नेपाली बालक था जो मां की मार से तंग आकर घर छोड़कर शहर आ जाता है। लेखक अमरकांत के घर वह घरेलू नौकर के रूप में आता है और अपनी निष्ठा, हँसमुख स्वभाव तथा अथक परिश्रम से सबका दिल जीत लेता है। परंतु कुछ दिनों बाद घर की मालकिन निर्मला और उसका बेटा किशोर उस पर छोटी-छोटी बातों पर हाथ उठाने लगते हैं। एक दिन रिश्तेदारों द्वारा झूठी चोरी का आरोप लगाए जाने पर बहादुर का आत्मसम्मान आहत होता है और वह बिना कुछ लिए चुपचाप घर छोड़कर चला जाता है। उसके जाने के बाद पूरा परिवार पछतावे की आग में जलता है। कहानी मानवीय संवेदना और घरेलू नौकरों के प्रति संवेदनशीलता का संदेश देती है।',
      marks: 5
    }
  ]
};

// =========================================================================
// 5. CLASS 10 SANSKRIT QUESTION POOL
// =========================================================================
export const CLASS10_SANSKRIT_POOL: SubjectPool = {
  mcqs: [
    {
      question: "'सत्यमेव जयते नानृतम्' किस उपनिषद् का मूल मंत्र है?",
      options: [
        { id: 'A', text: 'ईशावास्योपनिषद्' },
        { id: 'B', text: 'मुण्डकोपनिषद्' },
        { id: 'C', text: 'कठोपनिषद्' },
        { id: 'D', text: 'श्वेताश्वतरोपनिषद्' }
      ],
      correctOption: 'B',
      answerKey: 'यह प्रसिद्ध मंत्र मुण्डक उपनिषद् से लिया गया है जिसका अर्थ है "सत्य की ही जीत होती है, असत्य की नहीं।"'
    },
    {
      question: "पाटलिपुत्र (पटना) में शरद ऋतु में कौन-सा अत्यंत प्रसिद्ध महोत्सव मनाया जाता था?",
      options: [
        { id: 'A', text: 'दुर्गापूजा' },
        { id: 'B', text: 'कौमुदी महोत्सव' },
        { id: 'C', text: 'छठ पूजा' },
        { id: 'D', text: 'दीपावली' }
      ],
      correctOption: 'B',
      answerKey: 'गुप्त वंश के शासनकाल में शरद ऋतु में कौमुदी महोत्सव अत्यंत धूमधाम से मनाया जाता था।'
    },
    {
      question: "'अलसकथा' पाठ के रचयिता कौन हैं?",
      options: [
        { id: 'A', text: 'कालिदास' },
        { id: 'B', text: 'विद्यापति' },
        { id: 'C', text: 'बाणभट्ट' },
        { id: 'D', text: 'नारायण पंडित' }
      ],
      correctOption: 'B',
      answerKey: 'मैथिल कोकिल महाकवि विद्यापति द्वारा रचित "पुरुषपरीक्षा" ग्रंथ से अलसकथा संकलित है।'
    },
    {
      question: "भारतीय संस्कृति में कुल कितने संस्कार माने गए हैं?",
      options: [
        { id: 'A', text: '12' },
        { id: 'B', text: '16 (षोडश)' },
        { id: 'C', text: '18' },
        { id: 'D', text: '20' }
      ],
      correctOption: 'B',
      answerKey: 'भारतीय जीवन पद्धति में कुल 16 (षोडश संस्काराः) संस्कार निर्धारित हैं।'
    },
    {
      question: "'विदुरनीति' ग्रंथ महाभारत के किस पर्व से संकलित है?",
      options: [
        { id: 'A', text: 'सभा पर्व' },
        { id: 'B', text: 'उद्योग पर्व' },
        { id: 'C', text: 'भीष्म पर्व' },
        { id: 'D', text: 'शांति पर्व' }
      ],
      correctOption: 'B',
      answerKey: 'महात्मा विदुर द्वारा धृतराष्ट्र को दिए गए उपदेश उद्योग पर्व के 33 से 40 अध्याय में संकलित हैं।'
    },
    {
      question: "इंद्र ने ब्राह्मण वेश में कर्ण से दान में क्या माँगा था?",
      options: [
        { id: 'A', text: 'सोना और चांदी' },
        { id: 'B', text: 'कवच और कुण्डल' },
        { id: 'C', text: 'रथ और घोड़े' },
        { id: 'D', text: 'साम्राज्य' }
      ],
      correctOption: 'B',
      answerKey: 'इंद्र ने अर्जुन की रक्षा हेतु कर्ण के जन्मजात अभेद्य कवच और कुण्डल दान स्वरूप मांग लिए।'
    }
  ],
  short: [
    {
      question: "अलसशाला में आग क्यों लगाई गई थी?",
      answerKey: "अलसशाला में कृत्रिम आलस दिखाकर भोजन और वस्त्र पाने वाले धूर्तों की पहचान तथा वास्तविक आलसियों की परीक्षा लेने के लिए नियोगी पुरुषों द्वारा आग लगाई गई थी।",
      marks: 2
    },
    {
      question: "पण्डित किसे कहा जाता है? नीतिश्लोकाः पाठ के आधार पर स्पष्ट कीजिए।",
      answerKey: "जिसके कार्यों में शीत, उष्ण, भय, अनुराग, समृद्धि अथवा असमृद्धि कोई बाधा नहीं पहुँचाती, और जो सभी जीवों के तत्वों को जानने वाला तथा सभी उपायों को जानने वाला है, वही सच्चा पण्डित कहलाता है।",
      marks: 2
    },
    {
      question: "आर्य समाज की स्थापना किसने और कब की? इसके दो मुख्य उद्देश्य लिखिए।",
      answerKey: "आर्य समाज की स्थापना स्वामी दयानंद सरस्वती ने 1875 ईस्वी में मुंबई में की थी। उद्देश्य: 1. वैदिक धर्म की पुनर्स्थापना करना। 2. समाज में व्याप्त मूर्तिपूजा, छुआछूत और बालविवाह का खंडन करना।",
      marks: 2
    }
  ],
  long: [
    {
      question: "'कर्णस्य दानवीरता' पाठ का सारांश अपने शब्दों में लिखिए।",
      answerKey: "महाकवि भास द्वारा रचित 'कर्णभारम्' रूपक पर आधारित इस एकांकी में दानवीर कर्ण की अद्वितीय त्याग भावना का चित्रण है। महाभारत युद्ध में कर्ण कौरव पक्ष का महायोद्धा था जिसके पास जन्मजात रक्षा कवच और कुण्डल थे। देवराज इंद्र ब्राह्मण वेश (शक्र) बनाकर कर्ण के पास आते हैं और भिक्षा मांगते हैं। कर्ण उन्हें हजारों गायें, घोड़े, हाथी, सोना और अपना सिर तक देने की पेशकश करता है, परंतु इंद्र केवल कवच और कुण्डल की मांग करते हैं। कर्ण अपने प्राणों की चिंता किए बिना हंसते हुए अपने शरीर से कवच-कुण्डल काटकर इंद्र को दान कर देता है।",
      marks: 5
    }
  ]
};

// =========================================================================
// 6. CLASS 10 ENGLISH QUESTION POOL
// =========================================================================
export const CLASS10_ENGLISH_POOL: SubjectPool = {
  mcqs: [
    {
      question: "The author of 'The Pace for Living' is:",
      options: [
        { id: 'A', text: 'Joan Lexau' },
        { id: 'B', text: 'R.C. Hutchinson' },
        { id: 'C', text: 'Mahadevi Varma' },
        { id: 'D', text: 'Toni Morrison' }
      ],
      correctOption: 'B',
      answerKey: 'R.C. Hutchinson illustrates the rapid, frantic pace of contemporary life through the Dublin corn-merchant.'
    },
    {
      question: "In 'Me and the Ecology Bit', the narrator Jim tries to teach people about:",
      options: [
        { id: 'A', text: 'Stock market' },
        { id: 'B', text: 'Preserving ecology and recycling' },
        { id: 'C', text: 'Sports and fitness' },
        { id: 'D', text: 'Modern agriculture' }
      ],
      correctOption: 'B',
      answerKey: 'Jim goes around the neighborhood encouraging composting, saving paper, and protecting the environment.'
    },
    {
      question: "Gillu was the name of a pet:",
      options: [
        { id: 'A', text: 'Parrot' },
        { id: 'B', text: 'Squirrel' },
        { id: 'C', text: 'Mongoose' },
        { id: 'D', text: 'Kitten' }
      ],
      correctOption: 'B',
      answerKey: "In Mahadevi Varma's tender memoir, Gillu is a little squirrel rescued from attacking crows."
    },
    {
      question: "Alexander Aris accepted the Nobel Peace Prize on behalf of:",
      options: [
        { id: 'A', text: 'Mother Teresa' },
        { id: 'B', text: 'Aung San Suu Kyi' },
        { id: 'C', text: 'Nelson Mandela' },
        { id: 'D', text: 'Malala Yousafzai' }
      ],
      correctOption: 'B',
      answerKey: 'Alexander Aris was the son of Burmese pro-democracy leader Aung San Suu Kyi and delivered the speech in Oslo.'
    },
    {
      question: "According to William Cowper in 'God Made the Country', who made the town?",
      options: [
        { id: 'A', text: 'God' },
        { id: 'B', text: 'Man' },
        { id: 'C', text: 'Nature' },
        { id: 'D', text: 'King' }
      ],
      correctOption: 'B',
      answerKey: 'The famous poem opens with: "God made the country, and man made the town."'
    },
    {
      question: "Alexander Pope's poem 'Ode on Solitude' praises:",
      options: [
        { id: 'A', text: 'A noisy urban lifestyle' },
        { id: 'B', text: 'A calm, self-sufficient, and quiet life' },
        { id: 'C', text: 'A soldier courage in battlefield' },
        { id: 'D', text: 'The pursuit of huge gold treasures' }
      ],
      correctOption: 'B',
      answerKey: 'Alexander Pope reflects on the happiness of a contented man who lives peacefully on a few paternal acres.'
    }
  ],
  short: [
    {
      question: "How did Mahadevi Varma nurse the wounded squirrel Gillu back to life?",
      answerKey: "She gently washed the wounds inflicted by crows with Dettol, applied Penicillin ointment, and carefully fed him milk drop by drop through a thin cotton wick until he gained strength.",
      marks: 2
    },
    {
      question: "What according to Satyajit Ray is the primary defect of Indian cinema?",
      answerKey: "According to Ray, Indian films lacked authenticity, visual originality, and emotional maturity, often copying Hollywood musical formulas blindly rather than portraying genuine Indian life.",
      marks: 2
    },
    {
      question: "What is the central moral lesson taught by Leo Tolstoy in 'Little Girls Wiser Than Men'?",
      answerKey: "While grown-up adults indulged in bitter quarrels, the two little girls Malasha and Akoulya forgot their petty fight instantly and played together happily, proving that innocence and forgiveness make children wiser than adults.",
      marks: 2
    }
  ],
  long: [
    {
      question: "Give the central idea and character sketch of Gillu as depicted by Mahadevi Varma.",
      answerKey: "Gillu is a touching portrait of inter-species affection between the narrator and a tiny squirrel. Rescued from the verge of death, Gillu lived in a hanging flower basket near the window. He became an endearing member of the household, sitting near the author's plate during meals, swinging playfully, and curling beside her forehead when she was ill. His lifespan was just two years, but his playful mischief, sparkling bead-like eyes, and quiet demise beneath the Sonjuhi creeper leave a lasting, tender impression on the reader.",
      marks: 5
    }
  ]
};
