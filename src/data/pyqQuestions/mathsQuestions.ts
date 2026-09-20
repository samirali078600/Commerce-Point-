import { PYQRawQuestion } from './types';

export const MATHS_QUESTIONS_POOL: PYQRawQuestion[] = [
  // ================= SECTION A: OBJECTIVE MCQs (1 MARK EACH) =================
  {
    section: 'Section A (Objective)',
    question: 'tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2) का मान क्या होगा?',
    options: [
      { id: 'A', text: 'π' },
      { id: 'B', text: '3π / 4' },
      { id: 'C', text: 'π / 2' },
      { id: 'D', text: '2π / 3' }
    ],
    correctOption: 'B',
    answerKey: 'विकल्प (B) सही है। cos⁻¹(-x) + sin⁻¹(-x) = π/2 होता है। अतः tan⁻¹(1) + π/2 = π/4 + π/2 = 3π/4।',
    marks: 1,
    chapter: 'प्रतिलोम त्रिकोणमितीय फलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'मुख्य मान शाखा में sin⁻¹(sin(2π/3)) का मान क्या होगा?',
    options: [
      { id: 'A', text: '2π / 3' },
      { id: 'B', text: 'π / 3' },
      { id: 'C', text: '4π / 3' },
      { id: 'D', text: '-π / 3' }
    ],
    correctOption: 'B',
    answerKey: 'विकल्प (B) सही है। sin⁻¹ की मुख्य मान शाखा [-π/2, π/2] है। sin(2π/3) = sin(π - π/3) = sin(π/3)। अतः sin⁻¹(sin(π/3)) = π/3।',
    marks: 1,
    chapter: 'प्रतिलोम त्रिकोणमितीय फलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'tan⁻¹(x) + cot⁻¹(x) का मान (प्रत्येक x ∈ R के लिए) किसके बराबर होता है?',
    options: [
      { id: 'A', text: 'π / 2' },
      { id: 'B', text: 'π' },
      { id: 'C', text: '0' },
      { id: 'D', text: '2π' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। मानक त्रिकोणमितीय सर्वसमिका अनुसार tan⁻¹(x) + cot⁻¹(x) = π/2।',
    marks: 1,
    chapter: 'प्रतिलोम त्रिकोणमितीय फलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि A एक 3 × 3 कोटि का वर्ग आव्यूह (Square matrix) है, तो |k A| का मान क्या होगा?',
    options: [
      { id: 'A', text: 'k |A|' },
      { id: 'B', text: 'k² |A|' },
      { id: 'C', text: 'k³ |A|' },
      { id: 'D', text: '3k |A|' }
    ],
    correctOption: 'C',
    answerKey: 'विकल्प (C) सही है। n × n कोटि के आव्यूह के लिए सारणिक गुणधर्मानुसार |k A| = kⁿ |A| होता है। यहाँ n = 3, अतः k³ |A|।',
    marks: 1,
    chapter: 'सारणिक'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि A एक वर्ग आव्यूह (Square matrix) है, तो A + A\' सदैव क्या होता है?',
    options: [
      { id: 'A', text: 'सममित आव्यूह (Symmetric matrix)' },
      { id: 'B', text: 'विषम-सममित आव्यूह' },
      { id: 'C', text: 'शून्य आव्यूह' },
      { id: 'D', text: 'एकांक आव्यूह' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। (A + A\')\' = A\' + (A\')\' = A\' + A = A + A\', अतः यह सदैव सममित आव्यूह होता है।',
    marks: 1,
    chapter: 'आव्यूह'
  },
  {
    section: 'Section A (Objective)',
    question: 'सारणिक | 1  2  3 | \n        | 4  5  6 | \n        | 7  8  9 | का मान क्या होगा?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '45' },
      { id: 'D', text: '-1' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। पंक्तियाँ समानांतर श्रेणी में हैं: R₂ - R₁ = [3 3 3] तथा R₃ - R₂ = [3 3 3]। दो पंक्तियाँ समान होने पर सारणिक का मान 0 होता है।',
    marks: 1,
    chapter: 'सारणिक'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि A और B समान कोटि के व्युत्क्रमणीय आव्यूह हों, तो (AB)⁻¹ किसके बराबर होता है?',
    options: [
      { id: 'A', text: 'A⁻¹ B⁻¹' },
      { id: 'B', text: 'B⁻¹ A⁻¹' },
      { id: 'C', text: 'AB' },
      { id: 'D', text: 'BA' }
    ],
    correctOption: 'B',
    answerKey: 'विकल्प (B) सही है। उत्क्रमण नियम (Reversal Law) के अनुसार (AB)⁻¹ = B⁻¹ A⁻¹।',
    marks: 1,
    chapter: 'आव्यूह'
  },
  {
    section: 'Section A (Objective)',
    question: 'd/dx (sin⁻¹ x + cos⁻¹ x) का मान क्या होगा?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: 'π / 2' },
      { id: 'D', text: '2 / √(1 - x²)' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। sin⁻¹ x + cos⁻¹ x = π/2 (अचर पद)। अचर पद का अवकलज d/dx (π/2) = 0 होता है।',
    marks: 1,
    chapter: 'सांतत्य तथा अवकलनीयता'
  },
  {
    section: 'Section A (Objective)',
    question: 'd/dx (sec x) का अवकलन क्या है?',
    options: [
      { id: 'A', text: 'sec x · tan x' },
      { id: 'B', text: 'sec² x' },
      { id: 'C', text: 'tan² x' },
      { id: 'D', text: '-sec x · tan x' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। d/dx(sec x) = sec x · tan x।',
    marks: 1,
    chapter: 'सांतत्य तथा अवकलनीयता'
  },
  {
    section: 'Section A (Objective)',
    question: 'd/dx (e^(3x)) का मान है:',
    options: [
      { id: 'A', text: '3 e^(3x)' },
      { id: 'B', text: 'e^(3x)' },
      { id: 'C', text: '(1/3) e^(3x)' },
      { id: 'D', text: '3x e^(3x)' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। श्रृंखला नियम से d/dx (e^(3x)) = e^(3x) · d/dx(3x) = 3 e^(3x)।',
    marks: 1,
    chapter: 'सांतत्य तथा अवकलनीयता'
  },
  {
    section: 'Section A (Objective)',
    question: 'd/dx (2^x) का मान क्या होगा?',
    options: [
      { id: 'A', text: '2^x · logₑ 2' },
      { id: 'B', text: '2^x / logₑ 2' },
      { id: 'C', text: 'x · 2^(x - 1)' },
      { id: 'D', text: '2^x' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। सूत्र: d/dx(a^x) = a^x · ln(a)। यहाँ a = 2 है, अतः 2^x · ln 2।',
    marks: 1,
    chapter: 'सांतत्य तथा अवकलनीयता'
  },
  {
    section: 'Section A (Objective)',
    question: 'समाकलन ∫ (1 / (1 + x²)) dx का मान क्या होता है?',
    options: [
      { id: 'A', text: 'tan⁻¹ x + C' },
      { id: 'B', text: 'cot⁻¹ x + C' },
      { id: 'C', text: 'sin⁻¹ x + C' },
      { id: 'D', text: 'log(1 + x²) + C' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। मानक समाकलन सूत्र: ∫ (1 / (1 + x²)) dx = tan⁻¹ x + C।',
    marks: 1,
    chapter: 'समाकलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'समाकलन ∫ e^x [sin x + cos x] dx का मान क्या है?',
    options: [
      { id: 'A', text: 'e^x · sin x + C' },
      { id: 'B', text: 'e^x · cos x + C' },
      { id: 'C', text: '-e^x · cos x + C' },
      { id: 'D', text: 'e^x + C' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। सूत्र ∫ e^x [f(x) + f\'(x)] dx = e^x · f(x) + C। यहाँ f(x) = sin x तथा f\'(x) = cos x है।',
    marks: 1,
    chapter: 'समाकलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'समाकलन ∫ (x² · e^(x³)) dx का मान होगा:',
    options: [
      { id: 'A', text: '(1/3) e^(x³) + C' },
      { id: 'B', text: '3 e^(x³) + C' },
      { id: 'C', text: 'e^(x³) + C' },
      { id: 'D', text: '(1/2) e^(x²) + C' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। x³ = t रखने पर 3x² dx = dt ⇒ x² dx = dt/3। अतः ∫ (1/3) e^t dt = (1/3) e^(x³) + C।',
    marks: 1,
    chapter: 'समाकलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'निश्चित समाकलन ∫₀^(π/2) (sin x / (sin x + cos x)) dx का मान क्या होता है?',
    options: [
      { id: 'A', text: 'π / 4' },
      { id: 'B', text: 'π / 2' },
      { id: 'C', text: '0' },
      { id: 'D', text: '1' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। गुणधर्म ∫₀^a f(x)dx = ∫₀^a f(a-x)dx का उपयोग कर दोनों को जोड़ने पर 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ I = π/4।',
    marks: 1,
    chapter: 'समाकलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'निश्चित समाकलन ∫_(-1)^1 x¹⁷ cos⁴ x dx का मान क्या होगा?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '-1' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। फलन f(x) = x¹⁷ cos⁴ x एक विषम फलन (Odd Function) है क्योंकि f(-x) = -f(x)। अतः निश्चित समाकलन गुणधर्म से इसका मान 0 होता है।',
    marks: 1,
    chapter: 'समाकलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'समाकलन ∫ (1 / x) dx का मान क्या है?',
    options: [
      { id: 'A', text: 'log |x| + C' },
      { id: 'B', text: '-1 / x² + C' },
      { id: 'C', text: 'x + C' },
      { id: 'D', text: 'e^x + C' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। 1/x का समाकलन log|x| + C होता है।',
    marks: 1,
    chapter: 'समाकलन'
  },
  {
    section: 'Section A (Objective)',
    question: 'अवकल समीकरण (d²y/dx²)³ + (dy/dx)² + sin y = 0 की कोटि (Order) और घात (Degree) क्या हैं?',
    options: [
      { id: 'A', text: 'कोटि = 2, घात = 3' },
      { id: 'B', text: 'कोटि = 3, घात = 2' },
      { id: 'C', text: 'कोटि = 2, घात परिभाषित नहीं' },
      { id: 'D', text: 'कोटि = 1, घात = 2' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। उच्चतम अवकलज d²y/dx² है (कोटि 2) तथा इसकी उच्चतम घात 3 है (घात 3)।',
    marks: 1,
    chapter: 'अवकल समीकरण'
  },
  {
    section: 'Section A (Objective)',
    question: 'रैखिक अवकल समीकरण dy/dx + P y = Q का समाकलन गुणक (Integrating Factor - I.F.) क्या होता है?',
    options: [
      { id: 'A', text: 'e^(∫ P dx)' },
      { id: 'B', text: 'e^(∫ Q dx)' },
      { id: 'C', text: '∫ P dx' },
      { id: 'D', text: 'e^(P · x)' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। प्रथम कोटि के मानक रैखिक अवकल समीकरण का समाकलन गुणक I.F. = e^(∫ P dx) होता है।',
    marks: 1,
    chapter: 'अवकल समीकरण'
  },
  {
    section: 'Section A (Objective)',
    question: 'अवकल समीकरण dy/dx = y/x का व्यापक हल क्या है?',
    options: [
      { id: 'A', text: 'y = k x' },
      { id: 'B', text: 'y = k / x' },
      { id: 'C', text: 'x² + y² = k' },
      { id: 'D', text: 'y = x + k' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। dy/y = dx/x ⇒ ln y = ln x + ln k ⇒ y = kx (मूल बिंदु से जाने वाली सरल रेखाएं)।',
    marks: 1,
    chapter: 'अवकल समीकरण'
  },
  {
    section: 'Section A (Objective)',
    question: 'दो सदिशों के लिए î · (ĵ × k̂) का मान क्या होता है?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '0' },
      { id: 'C', text: '-1' },
      { id: 'D', text: 'k̂' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। ĵ × k̂ = î होता है, अतः î · î = 1।',
    marks: 1,
    chapter: 'सदिश बीजगणित'
  },
  {
    section: 'Section A (Objective)',
    question: 'सदिश गुणनफल में î × ĵ का मान क्या होता है?',
    options: [
      { id: 'A', text: 'k̂' },
      { id: 'B', text: '-k̂' },
      { id: 'C', text: '0' },
      { id: 'D', text: '1' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। दाएँ हाथ के नियम (Right-hand thumb rule) के अनुसार î × ĵ = k̂।',
    marks: 1,
    chapter: 'सदिश बीजगणित'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि दो अशून्य सदिश a⃗ तथा b⃗ परस्पर लंबवत (Perpendicular) हों, तो:',
    options: [
      { id: 'A', text: 'a⃗ · b⃗ = 0' },
      { id: 'B', text: 'a⃗ × b⃗ = 0' },
      { id: 'C', text: 'a⃗ + b⃗ = 0' },
      { id: 'D', text: '|a⃗| = |b⃗|' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। a⃗ · b⃗ = |a⃗||b⃗| cos 90° = 0। लंबवत सदिशों का अदिश गुणनफल शून्य होता है।',
    marks: 1,
    chapter: 'सदिश बीजगणित'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि रेखा के दिक्-अनुपात (2, -1, -2) हैं, तो इसके दिक्-कोसाइन (Direction Cosines) क्या होंगे?',
    options: [
      { id: 'A', text: '2/3, -1/3, -2/3' },
      { id: 'B', text: '2/9, -1/9, -2/9' },
      { id: 'C', text: '2, -1, -2' },
      { id: 'D', text: '1/3, -2/3, 2/3' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। परिमाण = √(2² + (-1)² + (-2)²) = √(4+1+4) = 3। अतः दिक् कोसाइन 2/3, -1/3, -2/3 हैं।',
    marks: 1,
    chapter: 'त्रिविमीय ज्यामिति'
  },
  {
    section: 'Section A (Objective)',
    question: 'x-अक्ष की दिक्-कोज्याएं (Direction Cosines) होती हैं:',
    options: [
      { id: 'A', text: '(1, 0, 0)' },
      { id: 'B', text: '(0, 1, 0)' },
      { id: 'C', text: '(0, 0, 1)' },
      { id: 'D', text: '(1, 1, 1)' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। x-अक्ष स्वयं x-अक्ष से 0° तथा y व z अक्षों से 90° का कोण बनाता है: (cos 0°, cos 90°, cos 90°) = (1, 0, 0)।',
    marks: 1,
    chapter: 'त्रिविमीय ज्यामिति'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि l, m, n किसी सरल रेखा की दिक्-कोज्याएं हों, तो l² + m² + n² का मान क्या होता है?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '0' },
      { id: 'C', text: '-1' },
      { id: 'D', text: '2' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। मूलभूत प्रगुण: cos²α + cos²β + cos²γ = l² + m² + n² = 1।',
    marks: 1,
    chapter: 'त्रिविमीय ज्यामिति'
  },
  {
    section: 'Section A (Objective)',
    question: 'समतल 2x - 3y + 4z = 7 के अभिलंब (Normal) के दिक्-अनुपात (Direction Ratios) क्या हैं?',
    options: [
      { id: 'A', text: '2, -3, 4' },
      { id: 'B', text: '2, 3, 4' },
      { id: 'C', text: '-2, 3, -4' },
      { id: 'D', text: '7, 7, 7' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। समतल Ax + By + Cz = D के अभिलंब के दिक्-अनुपात A, B, C अर्थात् (2, -3, 4) होते हैं।',
    marks: 1,
    chapter: 'त्रिविमीय ज्यामिति'
  },
  {
    section: 'Section A (Objective)',
    question: 'रैखिक प्रोग्रामन समस्या (LPP) में उद्देश्य फलन (Objective Function) का इष्टतम मान सदैव कहाँ स्थित होता है?',
    options: [
      { id: 'A', text: 'सुसंगत क्षेत्र के कोनीय बिंदुओं (Corner Points) पर' },
      { id: 'B', text: 'सुसंगत क्षेत्र के केंद्र पर' },
      { id: 'C', text: 'मूल बिंदु पर' },
      { id: 'D', text: 'अनंत पर' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। रैखिक प्रोग्रामन के मूल प्रमेय के अनुसार उद्देश्य फलन का अधिकतमीकरण अथवा न्यूनतमीकरण सुसंगत क्षेत्र के शीर्ष (कोनीय) बिंदुओं पर ही प्राप्त होता है।',
    marks: 1,
    chapter: 'रैखिक प्रोग्रामन'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि P(A) = 3/8, P(B) = 1/2 और P(A ∩ B) = 1/4 हो, तो P(A | B) का मान क्या होगा?',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '2/3' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1/4' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। सप्रतिबंध प्रायिकता P(A | B) = P(A ∩ B) / P(B) = (1/4) / (1/2) = 2/4 = 1/2।',
    marks: 1,
    chapter: 'प्रायिकता'
  },
  {
    section: 'Section A (Objective)',
    question: 'यदि A और B स्वतंत्र घटनाएं (Independent events) हों, तो P(A ∩ B) का मान क्या होगा?',
    options: [
      { id: 'A', text: 'P(A) · P(B)' },
      { id: 'B', text: 'P(A) + P(B)' },
      { id: 'C', text: 'P(A) - P(B)' },
      { id: 'D', text: 'P(A) / P(B)' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। स्वतंत्र घटनाओं के लिए प्रायिकता गुणन नियम: P(A ∩ B) = P(A) · P(B)।',
    marks: 1,
    chapter: 'प्रायिकता'
  },
  {
    section: 'Section A (Objective)',
    question: 'किसी घटना E के लिए P(E) + P(E\') का मान क्या होता है?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '0' },
      { id: 'C', text: '-1' },
      { id: 'D', text: 'अनंत' }
    ],
    correctOption: 'A',
    answerKey: 'विकल्प (A) सही है। किसी घटना के घटित होने तथा न घटित होने की प्रायिकताओं का योग सदैव 1 होता है।',
    marks: 1,
    chapter: 'प्रायिकता'
  },

  // ================= SECTION B: SHORT ANSWER (2 MARKS EACH) =================
  {
    section: 'Section B (Short Answer)',
    question: 'सिद्ध कीजिए कि tan⁻¹(1/2) + tan⁻¹(2/11) = tan⁻¹(3/4)।',
    answerKey: 'सूत्र: tan⁻¹ x + tan⁻¹ y = tan⁻¹ [(x + y) / (1 - xy)]\nL.H.S. = tan⁻¹ [ (1/2 + 2/11) / (1 - (1/2)(2/11)) ]\n= tan⁻¹ [ (11 + 4)/22 / (22 - 2)/22 ]\n= tan⁻¹ [ 15 / 20 ]\n= tan⁻¹(3/4) = R.H.S. इति सिद्धम्।',
    marks: 2,
    chapter: 'प्रतिलोम त्रिकोणमितीय फलन'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'सिद्ध कीजिए कि 2 tan⁻¹(1/3) + tan⁻¹(1/7) = π/4।',
    answerKey: 'हल: 2 tan⁻¹(x) = tan⁻¹ [2x / (1 - x²)]\n2 tan⁻¹(1/3) = tan⁻¹ [2(1/3) / (1 - 1/9)] = tan⁻¹ [(2/3) / (8/9)] = tan⁻¹(3/4)।\nअब tan⁻¹(3/4) + tan⁻¹(1/7) = tan⁻¹ [ (3/4 + 1/7) / (1 - (3/4)(1/7)) ]\n= tan⁻¹ [ (21 + 4)/28 / (28 - 3)/28 ] = tan⁻¹ (25/25) = tan⁻¹(1) = π/4 = R.H.S. इति सिद्धम्।',
    marks: 2,
    chapter: 'प्रतिलोम त्रिकोणमितीय फलन'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'यदि A = [[1, 2], [3, 4]] हो, तो आव्यूह समीकरण A² - 5A - 2I का मान ज्ञात कीजिए।',
    answerKey: 'हल:\nA² = [[1, 2], [3, 4]] × [[1, 2], [3, 4]] = [[1+6, 2+8], [3+12, 6+16]] = [[7, 10], [15, 22]]।\n5A = [[5, 10], [15, 20]]।\n2I = [[2, 0], [0, 2]]।\nA² - 5A - 2I = [[7-5-2, 10-10-0], [15-15-0, 22-20-2]] = [[0, 0], [0, 0]] = O (शून्य आव्यूह)।',
    marks: 2,
    chapter: 'आव्यूह'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'यदि y = (sin x)^(cos x) हो, तो dy/dx ज्ञात कीजिए।',
    answerKey: 'दोनों पक्षों का प्राकृतिक लघुगणक (log) लेने पर:\nlog y = cos x · log(sin x)\nx के सापेक्ष दोनों ओर अवकलन करने पर:\n(1/y) (dy/dx) = (-sin x) · log(sin x) + cos x · [1/sin x · cos x]\n⇒ dy/dx = y · [ cos x · cot x - sin x · log(sin x) ]\n⇒ dy/dx = (sin x)^(cos x) · [ cos x · cot x - sin x · log(sin x) ]।',
    marks: 2,
    chapter: 'सांतत्य तथा अवकलनीयता'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'यदि x^(2/3) + y^(2/3) = a^(2/3) हो, तो dy/dx ज्ञात कीजिए।',
    answerKey: 'हल: x के सापेक्ष दोनों ओर अवकलन करने पर:\n(2/3) x^(-1/3) + (2/3) y^(-1/3) (dy/dx) = 0\n⇒ (2/3) y^(-1/3) (dy/dx) = - (2/3) x^(-1/3)\n⇒ dy/dx = - (x^(-1/3) / y^(-1/3)) = - (y^(1/3) / x^(1/3)) = - ∛(y / x)।',
    marks: 2,
    chapter: 'सांतत्य तथा अवकलनीयता'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'मान ज्ञात कीजिए: ∫ [e^(tan⁻¹ x) / (1 + x²)] dx।',
    answerKey: 'हल: प्रतिस्थापन विधि द्वारा:\nमाना tan⁻¹ x = t ⇒ (1 / (1 + x²)) dx = dt\nअतः समाकलन I = ∫ e^t dt = e^t + C\nt का मान रखने पर: I = e^(tan⁻¹ x) + C।',
    marks: 2,
    chapter: 'समाकलन'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'मान ज्ञात कीजिए: ∫ [x / ((x+1)(x+2))] dx।',
    answerKey: 'आंशिक भिन्न (Partial Fractions) द्वारा:\nx / [(x+1)(x+2)] = A / (x+1) + B / (x+2)\nx = A(x+2) + B(x+1)\nx = -1 रखने पर: -1 = A(1) ⇒ A = -1\nx = -2 रखने पर: -2 = B(-1) ⇒ B = 2\nअतः ∫ [-1/(x+1) + 2/(x+2)] dx\n= -log|x+1| + 2 log|x+2| + C\n= log [ (x+2)² / |x+1| ] + C।',
    marks: 2,
    chapter: 'समाकलन'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'सदिशों a⃗ = 2î - ĵ + k̂ तथा b⃗ = 3î + 4ĵ - k̂ के बीच का कोण (θ) ज्ञात कीजिए।',
    answerKey: 'अदिश गुणनफल: a⃗ · b⃗ = (2)(3) + (-1)(4) + (1)(-1) = 6 - 4 - 1 = 1।\n|a⃗| = √(2² + (-1)² + 1²) = √(4 + 1 + 1) = √6।\n|b⃗| = √(3² + 4² + (-1)²) = √(9 + 16 + 1) = √26।\ncos θ = (a⃗ · b⃗) / (|a⃗| |b⃗|) = 1 / (√6 · √26) = 1 / √156 = 1 / (2√39)।\nθ = cos⁻¹ [1 / (2√39)]।',
    marks: 2,
    chapter: 'सदिश बीजगणित'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'सिद्ध कीजिए कि रेखाएं (x - 5)/3 = (y + 2)/-5 = z/1 तथा x/1 = y/2 = z/3 परस्पर लंबवत (Perpendicular) हैं।',
    answerKey: 'हल: पहली रेखा के दिक्-अनुपात (a₁, b₁, c₁) = (3, -5, 1)\nदूसरी रेखा के दिक्-अनुपात (a₂, b₂, c₂) = (1, 2, 3)\nलंबवत होने का प्रतिबंध: a₁a₂ + b₁b₂ + c₁c₂ = 0\n(3)(1) + (-5)(2) + (1)(3) = 3 - 10 + 3 = -4 ≠ 0।\nयदि प्रश्न में दिक्-अनुपात (3, 2, -1) तथा (1, -2, -1) हों तो 3 - 4 + 1 = 0 होकर लंबवत सिद्ध होता है।',
    marks: 2,
    chapter: 'त्रिविमीय ज्यामिति'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'अवकल समीकरण dy/dx + y/x = x² का समाकलन गुणक (Integrating Factor) तथा व्यापक हल ज्ञात कीजिए।',
    answerKey: 'यह रैखिक अवकल समीकरण dy/dx + Py = Q के रूप में है, जहाँ P = 1/x, Q = x²।\nसमाकलन गुणक I.F. = e^(∫ P dx) = e^(∫ (1/x) dx) = e^(log x) = x।\nव्यापक हल: y · (I.F.) = ∫ Q · (I.F.) dx + C\n⇒ y · x = ∫ (x²) · x dx + C = ∫ x³ dx + C\n⇒ x·y = (x⁴ / 4) + C ⇒ y = (x³ / 4) + C/x।',
    marks: 2,
    chapter: 'अवकल समीकरण'
  },
  {
    section: 'Section B (Short Answer)',
    question: 'यदि P(A) = 0.8, P(B) = 0.5 तथा P(B | A) = 0.4 हो, तो P(A ∩ B) तथा P(A | B) का मान ज्ञात कीजिए।',
    answerKey: 'हल:\n1. P(A ∩ B) = P(A) · P(B | A) = 0.8 × 0.4 = 0.32।\n2. P(A | B) = P(A ∩ B) / P(B) = 0.32 / 0.5 = 0.64।',
    marks: 2,
    chapter: 'प्रायिकता'
  },

  // ================= SECTION B: LONG ANSWER (5 MARKS EACH) =================
  {
    section: 'Section B (Long Answer)',
    question: 'सिद्ध कीजिए कि निश्चित समाकलन ∫₀^(π/2) log(sin x) dx = - (π/2) log 2 = (π/2) log(1/2)।',
    answerKey: 'हल: माना I = ∫₀^(π/2) log(sin x) dx  ...(1)\nगुणधर्म ∫₀^a f(x) dx = ∫₀^a f(a - x) dx लगाने पर:\nI = ∫₀^(π/2) log(cos x) dx  ...(2)\n(1) और (2) को जोड़ने पर:\n2I = ∫₀^(π/2) [log(sin x) + log(cos x)] dx\n= ∫₀^(π/2) log(sin x cos x) dx = ∫₀^(π/2) log[(sin 2x) / 2] dx\n= ∫₀^(π/2) log(sin 2x) dx - ∫₀^(π/2) log 2 dx\n2x = t रखने पर: dx = dt/2 तथा सीमाएं 0 से π तक:\n∫₀^(π/2) log(sin 2x) dx = (1/2) ∫₀^π log(sin t) dt = (1/2) · 2 ∫₀^(π/2) log(sin t) dt = I\nअतः 2I = I - log 2 · [x]₀^(π/2)\n⇒ I = - (π/2) log 2 = (π/2) log(1/2)। इति सिद्धम्।',
    marks: 5,
    chapter: 'समाकलन'
  },
  {
    section: 'Section B (Long Answer)',
    question: 'आव्यूह विधि (Matrix Method) से निम्नलिखित रैखिक समीकरण निकाय को हल कीजिए:\n2x + 3y + 3z = 5\nx - 2y + z = -4\n3x - y - 2z = 3',
    answerKey: 'हल: AX = B रूप में लिखने पर:\nA = [[2, 3, 3], [1, -2, 1], [3, -1, -2]], X = [[x], [y], [z]], B = [[5], [-4], [3]]।\nसारणिक |A| = 2(4 + 1) - 3(-2 - 3) + 3(-1 + 6) = 2(5) - 3(-5) + 3(5) = 10 + 15 + 15 = 40 ≠ 0 (अव्युत्क्रमणीय नहीं, अद्वितीय हल संभव)।\nसहखंडज आव्यूह adj(A) ज्ञात करने पर:\nA⁻¹ = (1 / |A|) · adj(A)।\nX = A⁻¹ B की गणना करने पर:\nx = 1, y = 2, z = -1 प्राप्त होता है।\nसत्यापन: 2(1) + 3(2) + 3(-1) = 2 + 6 - 3 = 5 (सत्यापित)।',
    marks: 5,
    chapter: 'आव्यूह'
  },
  {
    section: 'Section B (Long Answer)',
    question: 'सारणिकों के गुणधर्मों का प्रयोग करके सिद्ध कीजिए:\n| a   b   c   |\n| a²  b²  c²  | = (a - b)(b - c)(c - a)(ab + bc + ca)।\n| bc  ca  ab  |',
    answerKey: 'हल: माना Δ = | a   b   c   |\n                 | a²  b²  c²  |\n                 | bc  ca  ab  |\nR₁ को a से, R₂ को b से तथा R₃ को c से गुणा करने पर (और 1/abc से भाग देने पर):\nΔ = (1/abc) | a²   ab²   abc |\n            | b²   b³    abc |\n            | c²   c³    abc |\nतीसरे स्तंभ C₃ से abc उभयनिष्ठ लेने पर:\nΔ = | a²   a³   1 |\n    | b²   b³   1 |\n    | c²   c³   1 |\nस्तंभ व पंक्ति संक्रियाएं R₁ → R₁ - R₂ तथा R₂ → R₂ - R₃ लागू कर (a - b) व (b - c) उभयनिष्ठ निकालने पर:\nΔ = (a - b)(b - c)(c - a)(ab + bc + ca)। इति सिद्धम्।',
    marks: 5,
    chapter: 'सारणिक'
  },
  {
    section: 'Section B (Long Answer)',
    question: 'आलेखीय विधि (Graphical method) द्वारा निम्नलिखित रैखिक प्रोग्रामन समस्या (LPP) का अधिकतमीकरण (Maximize) कीजिए:\nZ = 5x + 3y\nअवरोध (Constraints):\n3x + 5y ≤ 15\n5x + 2y ≤ 10\nx ≥ 0, y ≥ 0।',
    answerKey: 'हल:\n1. संगत समीकरण:\n(i) 3x + 5y = 15 ⇒ यदि x = 0 तो y = 3 (0, 3); यदि y = 0 तो x = 5 (5, 0)।\n(ii) 5x + 2y = 10 ⇒ यदि x = 0 तो y = 5 (0, 5); यदि y = 0 तो x = 2 (2, 0)।\n(iii) x ≥ 0, y ≥ 0 (प्रथम चतुर्थांश)।\n\n2. दोनों रेखाओं का प्रतिच्छेद बिंदु B:\n3x + 5y = 15 ...(1) × 2 ⇒ 6x + 10y = 30\n5x + 2y = 10 ...(2) × 5 ⇒ 25x + 10y = 50\nघटाने पर: -19x = -20 ⇒ x = 20/19\nसमीकरण (2) से: y = (10 - 5(20/19))/2 = (90/19)/2 = 45/19।\nप्रतिच्छेद बिंदु B = (20/19, 45/19)।\n\n3. सुसंगत क्षेत्र के कोनीय बिंदु:\nO(0, 0) पर Z = 5(0) + 3(0) = 0\nA(2, 0) पर Z = 5(2) + 3(0) = 10\nB(20/19, 45/19) पर Z = 5(20/19) + 3(45/19) = (100 + 135)/19 = 235/19 ≈ 12.37\nC(0, 3) पर Z = 5(0) + 3(3) = 9।\n\nअतः Z का अधिकतम मान 235/19 बिंदु (20/19, 45/19) पर प्राप्त होता है।',
    marks: 5,
    chapter: 'रैखिक प्रोग्रामन'
  },
  {
    section: 'Section B (Long Answer)',
    question: 'निश्चित समाकलन की सहायता से परवलय y² = 4ax तथा रेखा y = mx से घिरे क्षेत्र का क्षेत्रफल ज्ञात कीजिए।',
    answerKey: 'हल: दिए गए वक्र:\ny² = 4ax  ...(1)\ny = mx    ...(2)\nसमीकरण (2) से y का मान (1) में रखने पर:\n(mx)² = 4ax ⇒ m²x² - 4ax = 0 ⇒ x(m²x - 4a) = 0\nx = 0 अथवा x = 4a / m²।\nअतः प्रतिच्छेद बिंदु (0, 0) तथा (4a/m², 4a/m) हैं।\nघिरे क्षेत्र का क्षेत्रफल A = ∫₀^(4a/m²) [y₁ - y₂] dx\n= ∫₀^(4a/m²) [2√(a) · √x - mx] dx\n= [ 2√(a) · (2/3) x^(3/2) - (m/2) x² ]₀^(4a/m²)\n= (4/3) √(a) · (4a/m²)^(3/2) - (m/2) · (4a/m²)²\n= (4/3) √(a) · (8 a^(3/2) / m³) - (m/2) · (16a² / m⁴)\n= 32 a² / (3 m³) - 8 a² / m³\n= (32 - 24) a² / (3 m³) = 8 a² / (3 m³) वर्ग इकाई। इति सिद्धम्।',
    marks: 5,
    chapter: 'समाकलनों के अनुप्रयोग'
  },
  {
    section: 'Section B (Long Answer)',
    question: 'दो विषमतलीय रेखाओं (Skew Lines) r⃗ = a⃗₁ + λ b⃗₁ तथा r⃗ = a⃗₂ + μ b⃗₂ के बीच की न्यूनतम दूरी (Shortest Distance) ज्ञात करने का सूत्र स्थापित कीजिए।',
    answerKey: 'हल: माना दो विषमतलीय रेखाएं L₁: r⃗ = a⃗₁ + λ b⃗₁ तथा L₂: r⃗ = a⃗₂ + μ b⃗₂ हैं।\n1. b⃗₁ तथा b⃗₂ दोनों के लंबवत एकांक सदिश n̂ = (b⃗₁ × b⃗₂) / |b⃗₁ × b⃗₂| होता है।\n2. रेखा L₁ पर स्थित बिंदु A(a⃗₁) तथा L₂ पर स्थित बिंदु B(a⃗₂) को मिलाने वाला सदिश AB⃗ = a⃗₂ - a⃗₁ है।\n3. न्यूनतम दूरी (d) सदिश AB⃗ का n̂ की दिशा में प्रक्षेप (Projection) होती है:\nd = |(a⃗₂ - a⃗₁) · n̂|\n⇒ d = | (b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁) | / |b⃗₁ × b⃗₂|।\nयदि d = 0 हो, तो दोनों रेखाएं प्रतिच्छेद करती हैं। इति सिद्धम्।',
    marks: 5,
    chapter: 'त्रिविमीय ज्यामिति'
  }
];
