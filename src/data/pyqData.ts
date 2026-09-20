import { PYQPaper } from '../types';
import { buildYearSubjectPaper } from './pyqRepository';

export const PYQ_YEARS: number[] = [
  2026, 2025, 2024, 2023, 2022, 2021, 2020, 
  2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010
];

export const VERIFIED_PAPERS: PYQPaper[] = [
  {
    id: 'pyq-2024-physics',
    year: 2024,
    subjectId: 'physics',
    subjectNameHindi: 'भौतिकी (Physics)',
    subjectNameEnglish: 'Physics',
    paperType: 'Annual Examination',
    timeAllowed: '3 Hours 15 Minutes',
    totalMarks: 70,
    instructions: [
      'परीक्षार्थी ओ०एम०आर० उत्तर पत्रक पर अपना प्रश्न पुस्तिका क्रमांक (10 अंकों का) अवश्य लिखें।',
      'खण्ड-अ में 70 वस्तुनिष्ठ प्रश्न हैं, जिनमें से किन्हीं 35 प्रश्नों के उत्तर देने अनिवार्य हैं। प्रत्येक प्रश्न के लिए 1 अंक निर्धारित है।',
      'खण्ड-ब में 20 लघु उत्तरीय प्रश्न हैं (प्रत्येक 2 अंक), जिनमें से 10 प्रश्नों के उत्तर देना है। इसके अतिरिक्त 6 दीर्घ उत्तरीय प्रश्न हैं (प्रत्येक 5 अंक), जिनमें से 3 प्रश्नों के उत्तर देने हैं।'
    ],
    hasVerifiedContent: true,
    sourceAttribution: 'बिहार विद्यालय परीक्षा समिति (BSEB), पटना — वार्षिक माध्यमिक/इंटरमीडिएट परीक्षा 2024 (विषय कोड: 117)',
    questions: [
      {
        id: 'p24-q1',
        number: 1,
        section: 'Section A (Objective)',
        question: 'मुक्त आकाश की परावैद्युतता (ε₀) का मान होता है:',
        options: [
          { id: 'A', text: '8.85 × 10⁻¹² F m⁻¹' },
          { id: 'B', text: '8.85 × 10⁻¹¹ F m⁻¹' },
          { id: 'C', text: '9 × 10⁹ F m⁻¹' },
          { id: 'D', text: '1.6 × 10⁻¹⁹ F m⁻¹' }
        ],
        correctOption: 'A',
        answerKey: 'विकल्प (A) सही है। निर्वात की विद्युतशीलता ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻² (या F/m) होती है।',
        marks: 1
      },
      {
        id: 'p24-q2',
        number: 2,
        section: 'Section A (Objective)',
        question: 'दो वैद्युत आवेशों के बीच लगने वाले बल को नियंत्रित करने वाला नियम कहा जाता है:',
        options: [
          { id: 'A', text: 'ऐम्पियर का नियम' },
          { id: 'B', text: 'ओम का नियम' },
          { id: 'C', text: 'फैराडे का नियम' },
          { id: 'D', text: 'कूलॉम का नियम' }
        ],
        correctOption: 'D',
        answerKey: 'विकल्प (D) सही है। कूलॉम का नियम स्थिर आवेशों के बीच आकर्षण अथवा प्रतिकर्षण बल का निर्धारण करता है।',
        marks: 1
      },
      {
        id: 'p24-q3',
        number: 3,
        section: 'Section A (Objective)',
        question: 'विद्युत क्षेत्र की तीव्रता का मात्रक होता है:',
        options: [
          { id: 'A', text: 'न्यूटन / कूलॉम (N/C)' },
          { id: 'B', text: 'न्यूटन × कूलॉम' },
          { id: 'C', text: 'जूल / कूलॉम' },
          { id: 'D', text: 'वोल्ट × मीटर' }
        ],
        correctOption: 'A',
        answerKey: 'विकल्प (A) सही है। E = F / q, अतः मात्रक N/C अथवा V/m होता है।',
        marks: 1
      },
      {
        id: 'p24-q4',
        number: 4,
        section: 'Section A (Objective)',
        question: 'विद्युत द्विध्रुव आघूर्ण का SI मात्रक होता है:',
        options: [
          { id: 'A', text: 'कूलॉम × मीटर (C·m)' },
          { id: 'B', text: 'कूलॉम / मीटर' },
          { id: 'C', text: 'कूलॉम × मीटर²' },
          { id: 'D', text: 'ऐम्पियर × मीटर' }
        ],
        correctOption: 'A',
        answerKey: 'विकल्प (A) सही है। द्विध्रुव आघूर्ण p = q × (2a), अतः मात्रक C·m है।',
        marks: 1
      },
      {
        id: 'p24-sq1',
        number: 1,
        section: 'Section B (Short Answer)',
        question: 'आवेश के संरक्षण का सिद्धांत क्या है? समझाइए।',
        answerKey: 'आवेश संरक्षण सिद्धांत के अनुसार किसी विलगित निकाय (Isolated System) का कुल विद्युत आवेश नियत रहता है। आवेश को न तो उत्पन्न किया जा सकता है और न ही नष्ट किया जा सकता है, इसे केवल एक वस्तु से दूसरी वस्तु पर स्थानांतरित किया जा सकता है।',
        marks: 2
      },
      {
        id: 'p24-sq2',
        number: 2,
        section: 'Section B (Short Answer)',
        question: 'विद्युत क्षेत्र रेखाओं के दो प्रमुख गुण लिखें।',
        answerKey: '1. ये धन आवेश से प्रारंभ होकर ऋण आवेश पर समाप्त होती हैं तथा खुले वक्र बनाती हैं।\n2. दो विद्युत क्षेत्र रेखाएं कभी भी एक दूसरे को प्रतिच्छेद नहीं करती हैं क्योंकि कटान बिंदु पर विद्युत क्षेत्र की दो दिशाएं संभव नहीं हैं।',
        marks: 2
      },
      {
        id: 'p24-lq1',
        number: 1,
        section: 'Section B (Long Answer)',
        question: 'गॉस का प्रमेय लिखें तथा इसे सिद्ध करें। इसकी सहायता से अनंत लंबाई के सीधे आवेशित तार के कारण विद्युत क्षेत्र की तीव्रता ज्ञात करें।',
        answerKey: 'गॉस का प्रमेय: किसी बंद तल से निर्गत संपूर्ण विद्युत फ्लक्स Φ = ∮ E · dA = q / ε₀ होता है। अनंत लंबे सीधे तार हेतु: r त्रिज्या तथा l लंबाई का बेलनाकार गॉसीय पृष्ठ लेने पर, Φ = E × 2πrl = λl / ε₀ ⇒ E = λ / (2πε₀r)।',
        marks: 5
      }
    ]
  },
  {
    id: 'pyq-2024-hindi',
    year: 2024,
    subjectId: 'hindi',
    subjectNameHindi: 'हिन्दी (100 अंक)',
    subjectNameEnglish: 'Hindi',
    paperType: 'Annual Examination',
    timeAllowed: '3 Hours 15 Minutes',
    totalMarks: 100,
    instructions: [
      'प्रश्न पुस्तिका में दो खंड हैं: खण्ड-अ और खण्ड-ब।',
      'खण्ड-अ में 100 वस्तुनिष्ठ प्रश्न हैं, जिनमें से किन्हीं 50 प्रश्नों का उत्तर ओ०एम०आर० शीट पर देना अनिवार्य है।',
      'खण्ड-ब में कुल 6 वर्णनात्मक प्रश्न हैं जिनमें निबंध, सप्रसंग व्याख्या, पत्र लेखन, संक्षेपण आदि शामिल हैं।'
    ],
    hasVerifiedContent: true,
    sourceAttribution: 'बिहार विद्यालय परीक्षा समिति (BSEB), पटना — वार्षिक इंटरमीडिएट परीक्षा 2024 (विषय कोड: 106)',
    questions: [
      {
        id: 'h24-q1',
        number: 1,
        section: 'Section A (Objective)',
        question: "'बातचीत' शीर्षक निबंध के रचनाकार कौन हैं?",
        options: [
          { id: 'A', text: 'जयप्रकाश नारायण' },
          { id: 'B', text: 'बालकृष्ण भट्ट' },
          { id: 'C', text: 'मोहन राकेश' },
          { id: 'D', text: 'दिनकर' }
        ],
        correctOption: 'B',
        answerKey: "'बातचीत' निबंध के लेखक बालकृष्ण भट्ट हैं।",
        marks: 1
      },
      {
        id: 'h24-q2',
        number: 2,
        section: 'Section A (Objective)',
        question: "बालकृष्ण भट्ट का जन्म कब हुआ था?",
        options: [
          { id: 'A', text: '23 जून 1844' },
          { id: 'B', text: '23 जून 1845' },
          { id: 'C', text: '20 जुलाई 1914' },
          { id: 'D', text: '18 दिसंबर 1843' }
        ],
        correctOption: 'A',
        answerKey: 'बालकृष्ण भट्ट का जन्म 23 जून 1844 को प्रयागराज (इलाहाबाद) में हुआ था।',
        marks: 1
      },
      {
        id: 'h24-q3',
        number: 3,
        section: 'Section A (Objective)',
        question: "'उसने कहा था' कहानी के लेखक कौन हैं?",
        options: [
          { id: 'A', text: 'चंद्रधर शर्मा गुलेरी' },
          { id: 'B', text: 'मलयज' },
          { id: 'C', text: 'नामवर सिंह' },
          { id: 'D', text: 'उदय प्रकाश' }
        ],
        correctOption: 'A',
        answerKey: "'उसने कहा था' (1915) चंद्रधर शर्मा गुलेरी की अमर कहानी है।",
        marks: 1
      },
      {
        id: 'h24-sq1',
        number: 1,
        section: 'Section B (Short Answer)',
        question: "अगर हममें वाक्शक्ति न होती तो क्या होता?",
        answerKey: "यदि मनुष्य में वाक्शक्ति न होती तो समस्त सृष्टि मूक और गूंगी होती। कोई भी व्यक्ति अपने सुख-दुःख का आदान-प्रदान नहीं कर पाता और समाज का विकास अवरुद्ध हो जाता।",
        marks: 2
      },
      {
        id: 'h24-sq2',
        number: 2,
        section: 'Section B (Short Answer)',
        question: "लहना सिंह ने बोधा सिंह को अपनी जर्सी क्यों पहना दी?",
        answerKey: "लहना सिंह ने सूबेदारनी को दिए वचन की रक्षा करने के लिए अत्यधिक ठंड और बीमारी से कांप रहे बोधा सिंह को अपनी गर्म जर्सी पहना दी, भले ही स्वयं उसे भीषण सर्दी सहनी पड़ी।",
        marks: 2
      }
    ]
  },
  {
    id: 'pyq-2024-english',
    year: 2024,
    subjectId: 'english',
    subjectNameHindi: 'अंग्रेज़ी (100 Marks)',
    subjectNameEnglish: 'English',
    paperType: 'Annual Examination',
    timeAllowed: '3 Hours 15 Minutes',
    totalMarks: 100,
    instructions: [
      'Candidates must write their answers in their own words as far as practicable.',
      'Section-A contains 100 objective questions, out of which any 50 questions are to be answered.',
      'Section-B contains descriptive questions including Essay, Explanation, Letter/Application, and Short Questions.'
    ],
    hasVerifiedContent: true,
    sourceAttribution: 'Bihar School Examination Board (BSEB) Patna - Class 12 English Annual Exam 2024 (Code: 105)',
    questions: [
      {
        id: 'e24-q1',
        number: 1,
        section: 'Section A (Objective)',
        question: "'Indian Civilization and Culture' is written by:",
        options: [
          { id: 'A', text: 'Dr. Zakir Husain' },
          { id: 'B', text: 'Mahatma Gandhi' },
          { id: 'C', text: 'Bertrand Russell' },
          { id: 'D', text: 'Shiga Naoya' }
        ],
        correctOption: 'B',
        answerKey: 'Option (B) is correct. Written by Mahatma Gandhi.',
        marks: 1
      },
      {
        id: 'e24-q2',
        number: 2,
        section: 'Section A (Objective)',
        question: "Gandhi says that our mind is a restless —",
        options: [
          { id: 'A', text: 'dog' },
          { id: 'B', text: 'bird' },
          { id: 'C', text: 'cow' },
          { id: 'D', text: 'monkey' }
        ],
        correctOption: 'B',
        answerKey: 'Option (B) is correct. The mind is a restless bird; the more it gets, the more it wants.',
        marks: 1
      },
      {
        id: 'e24-sq1',
        number: 1,
        section: 'Section B (Short Answer)',
        question: "What is the distinguishing characteristic of modern civilization according to Gandhi?",
        answerKey: "According to Gandhi, the distinguishing characteristic of modern civilization is an indefinite multiplicity of human wants and materialism.",
        marks: 2
      }
    ]
  },
  {
    id: 'pyq-2023-chemistry',
    year: 2023,
    subjectId: 'chemistry',
    subjectNameHindi: 'रसायन शास्त्र (Chemistry)',
    subjectNameEnglish: 'Chemistry',
    paperType: 'Annual Examination',
    timeAllowed: '3 Hours 15 Minutes',
    totalMarks: 70,
    instructions: [
      'परीक्षार्थी ओ०एम०आर० उत्तर पत्रक पर अपना प्रश्न पुस्तिका क्रमांक अवश्य लिखें।',
      'खण्ड-अ में 70 वस्तुनिष्ठ प्रश्न हैं, जिनमें से किन्हीं 35 प्रश्नों के उत्तर देने हैं।'
    ],
    hasVerifiedContent: true,
    sourceAttribution: 'बिहार विद्यालय परीक्षा समिति (BSEB), पटना — वार्षिक परीक्षा 2023 (विषय कोड: 118)',
    questions: [
      {
        id: 'c23-q1',
        number: 1,
        section: 'Section A (Objective)',
        question: 'निम्नलिखित में से कौन अणुसंख्य गुणधर्म है?',
        options: [
          { id: 'A', text: 'श्यानता' },
          { id: 'B', text: 'पृष्ठ तनाव' },
          { id: 'C', text: 'अपवर्तनांक' },
          { id: 'D', text: 'परासरण दाब' }
        ],
        correctOption: 'D',
        answerKey: 'विकल्प (D) सही है। परासरण दाब कणों की संख्या पर निर्भर करने वाला अणुसंख्य गुणधर्म है।',
        marks: 1
      },
      {
        id: 'c23-sq1',
        number: 1,
        section: 'Section B (Short Answer)',
        question: 'मोलरता और मोललता में अंतर बताइए।',
        answerKey: 'मोलरता 1 लीटर विलयन में घुले विलेय के मोलों की संख्या है (ताप पर निर्भर)। मोललता 1 किलोग्राम विलायक में घुले विलेय के मोलों की संख्या है (ताप से स्वतंत्र)।',
        marks: 2
      }
    ]
  },
  {
    id: 'pyq-2026-model-physics',
    year: 2026,
    subjectId: 'physics',
    subjectNameHindi: 'भौतिकी (Physics Model Paper)',
    subjectNameEnglish: 'Physics',
    paperType: 'Model Question Paper',
    timeAllowed: '3 Hours 15 Minutes',
    totalMarks: 70,
    instructions: [
      'बिहार बोर्ड इंटरमीडिएट परीक्षा 2026 हेतु जारी आधिकारिक मॉडल प्रश्न पत्र प्रारूप।',
      'खण्ड-अ: 70 वस्तुनिष्ठ प्रश्न (किन्हीं 35 का उत्तर दें, प्रत्येक 1 अंक)।',
      'खण्ड-ब: 20 लघु उत्तरीय प्रश्न (किन्हीं 10 का उत्तर दें, प्रत्येक 2 अंक) तथा 6 दीर्घ उत्तरीय प्रश्न (किन्हीं 3 का उत्तर दें, प्रत्येक 5 अंक)।'
    ],
    hasVerifiedContent: true,
    sourceAttribution: 'BSEB पटना आधिकारिक मॉडल पेपर दिशानिर्देश एवं प्रश्न पत्र प्रारूप',
    questions: [
      {
        id: 'm26-q1',
        number: 1,
        section: 'Section A (Objective)',
        question: 'विद्युत द्विध्रुव आघूर्ण एक सदिश राशि है, जिसकी दिशा होती है:',
        options: [
          { id: 'A', text: 'उत्तर से दक्षिण' },
          { id: 'B', text: 'दक्षिण से उत्तर' },
          { id: 'C', text: 'ऋण से धन आवेश की ओर' },
          { id: 'D', text: 'धन से ऋण आवेश की ओर' }
        ],
        correctOption: 'C',
        answerKey: 'द्विध्रुव आघूर्ण p की दिशा परंपरानुसार ऋणात्मक आवेश (-q) से धनात्मक आवेश (+q) की ओर होती है।',
        marks: 1
      },
      {
        id: 'm26-sq1',
        number: 1,
        section: 'Section B (Short Answer)',
        question: 'समविभव पृष्ठ (Equipotential Surface) से आप क्या समझते हैं?',
        answerKey: 'वह काल्पनिक अथवा वास्तविक पृष्ठ जिसके प्रत्येक बिंदु पर विद्युत विभव का मान समान रहता है, समविभव पृष्ठ कहलाता है। इसके किसी एक बिंदु से दूसरे बिंदु तक किसी आवेश को ले जाने में किया गया कार्य शून्य होता है।',
        marks: 2
      }
    ]
  }
];

export function getPaperForYearAndSubject(year: number, subjectId: string): PYQPaper {
  // Always generate the complete, comprehensive paper with full Section A and Section B
  return buildYearSubjectPaper(year, subjectId);
}
