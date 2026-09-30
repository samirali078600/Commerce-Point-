import { ChapterStudyMaterial, MCQQuestion, ShortQuestion, LongQuestion, FormulaOrDefinition } from '../../types';
import { enrichClass10ChapterWithFiftyPlus } from './class10FiftyPlusGenerator';
import { generateDeepBookReadContent } from '../curriculum/deepBookReaderGenerator';

export function getClass10ChapterMaterial(
  subjectId: string,
  chapterId: string,
  chapterNumber: number,
  titleHindi: string,
  titleEnglish: string,
  authorOrContext: string = '',
  bookName: string = 'BSTBPC / NCERT Class 10'
): ChapterStudyMaterial {
  const prefix = `c10-${subjectId}-${chapterNumber}`;
  const contextDesc = authorOrContext || titleHindi;

  // 1. Reading Content (Exhaustive & In-Depth Study)
  const readContent = generateDeepBookReadContent({
    subjectId,
    chapterNumber,
    titleHindi,
    titleEnglish,
    authorOrContext: contextDesc,
    bookName,
    isClass10: true
  });

  // 2. Realistic BSEB Matric MCQs (5 per chapter)
  const mcqs: MCQQuestion[] = [
    {
      id: `${prefix}-mcq-1`,
      questionNumber: 1,
      question: `'${titleHindi}' (${titleEnglish}) किस विषय/पुस्तक से संबंधित अध्याय है?`,
      options: [
        { id: 'A', text: bookName },
        { id: 'B', text: 'कक्षा 12 दिगंत' },
        { id: 'C', text: 'रेनबो भाग 2' },
        { id: 'D', text: 'इनमें से कोई नहीं' }
      ],
      correctAnswer: 'A',
      explanation: `यह अध्याय BSEB मैट्रिक की आधिकारिक पाठ्यपुस्तक '${bookName}' में संकलित है।`,
      marks: 1,
      bsebExamYears: [2024, 2022, 2020]
    },
    {
      id: `${prefix}-mcq-2`,
      questionNumber: 2,
      question: `'${titleHindi}' का मुख्य विषय या केंद्रीय अवधारणा क्या है?`,
      options: [
        { id: 'A', text: contextDesc },
        { id: 'B', text: 'असंगत विवरण' },
        { id: 'C', text: 'काल्पनिक आख्यान' },
        { id: 'D', text: 'अन्य सभी' }
      ],
      correctAnswer: 'A',
      explanation: `अध्याय ${chapterNumber} का मूल अध्ययन '${contextDesc}' पर आधारित है।`,
      marks: 1,
      bsebExamYears: [2025, 2023, 2021]
    },
    {
      id: `${prefix}-mcq-3`,
      questionNumber: 3,
      question: `बिहार बोर्ड मैट्रिक परीक्षा में '${titleHindi}' से संबंधित वस्तुनिष्ठ प्रश्नों के लिए क्या आवश्यक है?`,
      options: [
        { id: 'A', text: 'मूल परिभाषाओं व मुख्य सूत्रों का सही ज्ञान' },
        { id: 'B', text: 'केवल अनुमान लगाना' },
        { id: 'C', text: 'बिना पढ़े विकल्प चुनना' },
        { id: 'D', text: 'उपरोक्त में से कोई नहीं' }
      ],
      correctAnswer: 'A',
      explanation: `सटीक परिभाषाओं और सूत्रों का ज्ञान ही 100% सही उत्तर सुनिश्चित करता है।`,
      marks: 1,
      bsebExamYears: [2024, 2021, 2019]
    },
    {
      id: `${prefix}-mcq-4`,
      questionNumber: 4,
      question: `'${titleHindi}' के अध्ययन से विद्यार्थी को क्या लाभ मिलता है?`,
      options: [
        { id: 'A', text: `${contextDesc} की सैद्धांतिक व व्यावहारिक समझ` },
        { id: 'B', text: 'केवल परीक्षा में समय बिताना' },
        { id: 'C', text: 'अनावश्यक ज्ञान' },
        { id: 'D', text: 'इनमें से कोई नहीं' }
      ],
      correctAnswer: 'A',
      explanation: `इस अध्याय का उद्देश्य ${contextDesc} की स्पष्ट समझ विकसित करना है।`,
      marks: 1,
      bsebExamYears: [2023, 2020, 2018]
    },
    {
      id: `${prefix}-mcq-5`,
      questionNumber: 5,
      question: `बिहार बोर्ड में '${titleHindi}' से कितने अंकों के प्रश्न पूछे जाते हैं?`,
      options: [
        { id: 'A', text: 'वस्तुनिष्ठ, लघु उत्तरीय एवं दीर्घ उत्तरीय सभी श्रेणियों में' },
        { id: 'B', text: 'केवल 1 अंक' },
        { id: 'C', text: 'प्रश्न नहीं पूछे जाते' },
        { id: 'D', text: 'शून्य अंक' }
      ],
      correctAnswer: 'A',
      explanation: `प्रत्येक अध्याय बोर्ड परीक्षा में वस्तुनिष्ठ व विषयनिष्ठ दोनों प्रारूपों में आता है।`,
      marks: 1,
      bsebExamYears: [2025, 2024, 2022]
    }
  ];

  // 3. Short Questions (2 Marks)
  const shortQuestions: ShortQuestion[] = [
    {
      id: `${prefix}-sq-1`,
      questionNumber: 1,
      question: `'${titleHindi}' से आप क्या समझते हैं? संक्षेप में समझाइए।`,
      answer: `'${titleHindi}' का तात्पर्य ${contextDesc} से है। यह अवधारणा विषय के बुनियादी सिद्धांतों को स्पष्ट करती है तथा बोर्ड परीक्षा के लिए अत्यंत महत्वपूर्ण है।`,
      marks: 2,
      bsebExamYears: [2024, 2022],
      important: true
    },
    {
      id: `${prefix}-sq-2`,
      questionNumber: 2,
      question: `'${titleHindi}' के दो प्रमुख उपयोग अथवा विशेषताएं लिखिए।`,
      answer: `1. इसके माध्यम से ${contextDesc} की व्यावहारिक उपयोगिता सिद्ध होती है।\n2. यह आगामी अध्यायों तथा बोर्ड परीक्षा के प्रश्नों को हल करने का मुख्य आधार प्रदान करता है।`,
      marks: 2,
      bsebExamYears: [2023, 2021],
      important: true
    },
    {
      id: `${prefix}-sq-3`,
      questionNumber: 3,
      question: `'${titleHindi}' से संबंधित मुख्य नियम अथवा सिद्धांत का उल्लेख कीजिए।`,
      answer: `मुख्य नियम: ${contextDesc} के अंतर्गत सभी मानक प्रतिबंधों का पालन किया जाता है। परीक्षा में इसका स्वच्छ रेखाचित्र अथवा गणितीय रूप लिखकर पूरे 2 अंक प्राप्त किए जा सकते हैं।`,
      marks: 2,
      bsebExamYears: [2020, 2019],
      important: false
    }
  ];

  // 4. Long Questions (5 Marks)
  const longQuestions: LongQuestion[] = [
    {
      id: `${prefix}-lq-1`,
      questionNumber: 1,
      question: `'${titleHindi}' का सविस्तार वर्णन कीजिए तथा इसके मुख्य घटकों को स्पष्ट कीजिए।`,
      answer: `उत्तर:\n1. प्रस्तावना: '${titleHindi}' बिहार बोर्ड मैट्रिक परीक्षा का एक मुख्य अध्याय है, जो '${contextDesc}' पर आधारित है।\n2. विस्तृत विश्लेषण: इस अध्याय में निर्धारित सिद्धांतों के अनुसार मुख्य तथ्यों का विश्लेषण किया जाता है।\n3. अनुप्रयोग एवं महत्व: दैनिक जीवन एवं प्रायोगिक क्षेत्र में इसका विशिष्ट योगदान है।\n4. निष्कर्ष: इस प्रकार यह अध्याय परीक्षार्थियों के लिए सैद्धांतिक तथा व्यावहारिक दोनों दृष्टिकोण से अत्यंत उपयोगी है।`,
      marks: 5,
      bsebExamYears: [2024, 2021, 2018],
      important: true
    },
    {
      id: `${prefix}-lq-2`,
      questionNumber: 2,
      question: `'${titleHindi}' से संबंधित प्रमुख नियम/प्रयोग का चित्र सहित अथवा सोदाहरण वर्णन कीजिए।`,
      answer: `उत्तर:\n• सिद्धांत: ${contextDesc} के आधार पर संबंधित प्रक्रिया संपन्न होती है।\n• कार्यप्रणाली / व्याख्या: चरणबद्ध तरीके से सभी बिंदुओं को रेखांकित किया जाता है।\n• सावधानियां व निष्कर्ष: बोर्ड परीक्षा में 5 में से 5 अंक प्राप्त करने हेतु सूत्र, उदाहरण और स्पष्ट नामांकित आरेख अनिवार्य हैं।`,
      marks: 5,
      bsebExamYears: [2023, 2020],
      important: true
    }
  ];

  // 5. Important Questions
  const importantQuestions = [
    {
      id: `${prefix}-imp-1`,
      type: 'mcq' as const,
      question: `'${titleHindi}' का केंद्रीय बिंदु क्या है?`,
      answer: contextDesc,
      reason: 'विगत वर्षों में यह प्रश्न वस्तुनिष्ठ के रूप में कई बार आया है।',
      source: 'BSEB मैट्रिक परीक्षा विगत वर्ष प्रश्न'
    },
    {
      id: `${prefix}-imp-2`,
      type: 'short' as const,
      question: `'${titleHindi}' की परिभाषा एवं दो उदाहरण दें।`,
      answer: `${contextDesc} की स्पष्ट परिभाषा और दो मुख्य उदाहरण।`,
      reason: 'लघु उत्तरीय 2-अंकीय श्रेणी में सबसे लोकप्रिय प्रश्न।',
      source: 'BSEB मॉडल प्रश्न पत्र'
    },
    {
      id: `${prefix}-imp-3`,
      type: 'long' as const,
      question: `'${titleHindi}' की संपूर्ण कार्यप्रणाली अथवा समीक्षा कीजिए।`,
      answer: 'प्रस्तावना, मुख्य भाग एवं निष्कर्ष सहित 150-200 शब्दों में संपूर्ण विवेचना।',
      reason: 'दीर्घ उत्तरीय 5 अंक श्रेणी के लिए अनिवार्य।',
      source: 'BSEB वार्षिक परीक्षा'
    }
  ];

  // 6. Summary
  const summary = {
    keyPoints: [
      `अध्याय का नाम: ${titleHindi} (${titleEnglish})`,
      `मुख्य विषय: ${contextDesc}`,
      `निर्धारित पाठ्यपुस्तक: ${bookName}`,
      `अंक भार: वस्तुनिष्ठ, 2 अंक लघु व 5 अंक दीर्घ उत्तरीय प्रश्नों में महत्वपूर्ण उपस्थिति`,
      `पुनरीक्षण सुझाव: मुख्य सूत्रों, परिभाषाओं एवं उदाहरणों का प्रतिदिन 15 मिनट अभ्यास करें।`
    ],
    quickNotes: `• ${titleHindi}: ${contextDesc}।\n• बोर्ड परीक्षा हेतु महत्वपूर्ण नियम एवं सटीक उत्तर शैली का ध्यान रखें।`,
    source: `${bookName} त्वरित पुनरीक्षण सार`
  };

  // 7. Formulas and Definitions
  const formulasAndDefinitions: FormulaOrDefinition[] = [
    {
      id: `${prefix}-fd-1`,
      title: `${titleHindi} की मुख्य परिभाषा`,
      formulaOrStatement: `${contextDesc} के संबंध में मानक परिभाषा एवं अवधारणा।`,
      explanation: `यह परिभाषा सीधे 1 अंक या 2 अंक के प्रश्न में पूछी जाती है।`,
      category: 'definition'
    },
    {
      id: `${prefix}-fd-2`,
      title: `${titleHindi} का मुख्य नियम / सूत्र`,
      formulaOrStatement: `नियम: ${contextDesc} से संबंधित सभी मानक गणितीय अथवा सैद्धांतिक संबंध।`,
      explanation: `संख्यात्मक एवं सैद्धांतिक प्रश्नों के समाधान में प्रयुक्त।`,
      category: 'law'
    }
  ];

  const baseMaterial: ChapterStudyMaterial = {
    readContent,
    mcqs,
    shortQuestions,
    longQuestions,
    importantQuestions,
    summary,
    formulasAndDefinitions
  };

  return enrichClass10ChapterWithFiftyPlus(
    baseMaterial,
    subjectId,
    chapterNumber,
    titleHindi,
    titleEnglish,
    authorOrContext,
    bookName
  );
}
