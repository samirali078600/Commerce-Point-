import { Subject } from '../../types';
import { buildClass10Chapters } from './class10ChaptersDef';

export const CLASS_10_SUBJECTS: Subject[] = [
  // 1. MATHEMATICS (15 Chapters)
  {
    id: 'class10-mathematics',
    classLevel: 10,
    nameEnglish: 'Mathematics',
    nameHindi: 'गणित (100 अंक)',
    code: '110',
    stream: ['matric', 'general'],
    iconName: 'Calculator',
    color: 'emerald',
    bookName: 'गणित (BSTBPC / NCERT कक्षा 10)',
    totalChapters: 15,
    chapters: buildClass10Chapters('class10-mathematics', 'गणित (BSTBPC / NCERT)', [
      { num: 1, id: 'c10-math-ch-1', hindi: 'वास्तविक संख्याएँ', english: 'Real Numbers', authorOrContext: 'यूक्लिड विभाजन प्रमेयिका, अंकगणित की आधारभूत प्रमेय, √2/3/5 अपरिमेय संख्या सिद्ध करना', source: 'NCERT गणित' },
      { num: 2, id: 'c10-math-ch-2', hindi: 'बहुपद', english: 'Polynomials', authorOrContext: 'शून्यकों का ज्यामितीय अर्थ, α + β = -b/a, αβ = c/a संबंध, विभाजन एल्गोरिद्म', source: 'NCERT गणित' },
      { num: 3, id: 'c10-math-ch-3', hindi: 'दो चर वाले रैखिक समीकरण युग्म', english: 'Pair of Linear Equations in Two Variables', authorOrContext: 'आलेखीय विधि, प्रतिस्थापन, विलोपन व वज्र-गुणन विधि, अद्वितीय/अनेक/कोई हल नहीं', source: 'NCERT गणित' },
      { num: 4, id: 'c10-math-ch-4', hindi: 'द्विघात समीकरण', english: 'Quadratic Equations', authorOrContext: 'गुणनखंडन, द्विघाती सूत्र (श्रीधराचार्य सूत्र: x = (-b ± √D)/2a), विविक्तकर D = b² - 4ac', source: 'NCERT गणित' },
      { num: 5, id: 'c10-math-ch-5', hindi: 'समांतर श्रेढ़ियाँ (AP)', english: 'Arithmetic Progressions', authorOrContext: 'nवाँ पद: an = a + (n-1)d, प्रथम n पदों का योग: Sn = n/2[2a + (n-1)d]', source: 'NCERT गणित' },
      { num: 6, id: 'c10-math-ch-6', hindi: 'त्रिभुज', english: 'Triangles', authorOrContext: 'थेल्स प्रमेय (BPT) व विलोम, समरूपता की कसौटियाँ (AAA, SSS, SAS), पाइथागोरस प्रमेय', source: 'NCERT गणित' },
      { num: 7, id: 'c10-math-ch-7', hindi: 'निर्देशांक ज्यामिति', english: 'Coordinate Geometry', authorOrContext: 'दूरी सूत्र √[(x2-x1)² + (y2-y1)²], विभाजन सूत्र, मध्य बिंदु सूत्र, त्रिभुज का क्षेत्रफल', source: 'NCERT गणित' },
      { num: 8, id: 'c10-math-ch-8', hindi: 'त्रिकोणमिति का परिचय', english: 'Introduction to Trigonometry', authorOrContext: 'sin, cos, tan अनुपात, 0°-90° मान सारणी, पूरक कोण, सर्वसमिकाएं (sin²θ+cos²θ=1)', source: 'NCERT गणित' },
      { num: 9, id: 'c10-math-ch-9', hindi: 'त्रिकोणमिति के कुछ अनुप्रयोग (ऊँचाई एवं दूरी)', english: 'Some Applications of Trigonometry', authorOrContext: 'उन्नयन कोण, अवनमन कोण, दृष्टि रेखा, मीनार, स्तंभ व भवन की ऊँचाई ज्ञात करना', source: 'NCERT गणित' },
      { num: 10, id: 'c10-math-ch-10', hindi: 'वृत्त', english: 'Circles', authorOrContext: 'स्पर्श रेखा, प्रमेय: स्पर्श बिंदु पर त्रिज्या लंब होती है, बाह्य बिंदु से स्पर्श रेखाएं बराबर', source: 'NCERT गणित' },
      { num: 11, id: 'c10-math-ch-11', hindi: 'रचनाएँ', english: 'Constructions', authorOrContext: 'रेखाखंड का विभाजन (m:n), दिए गए त्रिभुज के समरूप त्रिभुज, वृत्त पर स्पर्श रेखा युग्म', source: 'NCERT गणित' },
      { num: 12, id: 'c10-math-ch-12', hindi: 'वृत्तों से संबंधित क्षेत्रफल', english: 'Areas Related to Circles', authorOrContext: 'त्रिज्यखंड का क्षेत्रफल (θ/360 × πr²), चाप की लंबाई, वृत्तखंड का क्षेत्रफल', source: 'NCERT गणित' },
      { num: 13, id: 'c10-math-ch-13', hindi: 'पृष्ठीय क्षेत्रफल और आयतन', english: 'Surface Areas and Volumes', authorOrContext: 'बेलन, शंकु, गोला, अर्धगोला, शंकु का छिन्नक (Frustum) का वक्र, संपूर्ण पृष्ठ व आयतन', source: 'NCERT गणित' },
      { num: 14, id: 'c10-math-ch-14', hindi: 'सांख्यिकी', english: 'Statistics', authorOrContext: 'माध्य (प्रत्यक्ष, कल्पित, पग-विचलन विधि), बहुलक (Mode), माध्यक (Median), ओजाइव', source: 'NCERT गणित' },
      { num: 15, id: 'c10-math-ch-15', hindi: 'प्रायिकता', english: 'Probability', authorOrContext: 'सैद्धांतिक प्रायिकता P(E) = n(E)/n(S), 0 ≤ P(E) ≤ 1, निश्चित व असंभव घटना, पासा, ताश', source: 'NCERT गणित' }
    ])
  },

  // 2. SCIENCE (16 Chapters - Physics, Chemistry, Biology)
  {
    id: 'class10-science',
    classLevel: 10,
    nameEnglish: 'Science',
    nameHindi: 'विज्ञान (80 अंक सैद्धांतिक + 20 प्रायोगिक)',
    code: '112',
    stream: ['matric', 'general'],
    iconName: 'FlaskConical',
    color: 'purple',
    bookName: 'विज्ञान (BSTBPC / NCERT कक्षा 10)',
    totalChapters: 16,
    chapters: buildClass10Chapters('class10-science', 'विज्ञान (BSTBPC / NCERT)', [
      { num: 1, id: 'c10-sci-ch-1', hindi: 'रासायनिक अभिक्रियाएँ एवं समीकरण', english: 'Chemical Reactions and Equations', authorOrContext: 'संयोजन, वियोजन, विस्थापन, द्विविस्थापन, उपचयन-अपचयन (Redox), संक्षारण, विकृतगंधिता', source: 'NCERT विज्ञान' },
      { num: 2, id: 'c10-sci-ch-2', hindi: 'अम्ल, क्षारक एवं लवण', english: 'Acids, Bases and Salts', authorOrContext: 'pH पैमाना, सूचक, उदासीनीकरण, विरंजक चूर्ण, बेकिंग सोडा, धावन सोडा, प्लास्टर ऑफ पेरिस', source: 'NCERT विज्ञान' },
      { num: 3, id: 'c10-sci-ch-3', hindi: 'धातु एवं अधातु', english: 'Metals and Non-Metals', authorOrContext: 'भौतिक व रासायनिक गुणधर्म, सक्रियता श्रेणी, आयनिक यौगिक, धातुकर्म (भर्जन, निस्तापन)', source: 'NCERT विज्ञान' },
      { num: 4, id: 'c10-sci-ch-4', hindi: 'कार्बन एवं उसके यौगिक', english: 'Carbon and its Compounds', authorOrContext: 'सहसंयोजी आबंध, कार्बन की चतुःसंयोजकता, हाइड्रोकार्बन, प्रकार्यात्मक समूह, साबुन व अपमार्जक', source: 'NCERT विज्ञान' },
      { num: 5, id: 'c10-sci-ch-5', hindi: 'तत्वों का आवर्त वर्गीकरण', english: 'Periodic Classification of Elements', authorOrContext: 'डोबेराइनर त्रिक, न्यूलैंड्स अष्टक, मेंडेलीव की आवर्त सारणी, मोजले की आधुनिक आवर्त सारणी', source: 'NCERT विज्ञान' },
      { num: 6, id: 'c10-sci-ch-6', hindi: 'जैव प्रक्रम', english: 'Life Processes', authorOrContext: 'पोषण (प्रकाश संश्लेषण, मानव पाचन), श्वसन, परिसंचरण (मानव हृदय), उत्सर्जन (वृक्क/नेफ्रॉन)', source: 'NCERT विज्ञान' },
      { num: 7, id: 'c10-sci-ch-7', hindi: 'नियंत्रण एवं समन्वय', english: 'Control and Coordination', authorOrContext: 'तंत्रिका कोशिका (न्यूरॉन), प्रतिवर्ती चाप, मानव मस्तिष्क, पादप हार्मोन, अंतःस्रावी ग्रंथियां', source: 'NCERT विज्ञान' },
      { num: 8, id: 'c10-sci-ch-8', hindi: 'जीव जनन कैसे करते हैं', english: 'How do Organisms Reproduce', authorOrContext: 'अलैंगिक जनन (विखंडन, मुकुलन, बीजाणु), लैंगिक जनन, पुष्प की संरचना, मानव जनन तंत्र, एड्स', source: 'NCERT विज्ञान' },
      { num: 9, id: 'c10-sci-ch-9', hindi: 'आनुवंशिकता एवं जैव विकास', english: 'Heredity and Evolution', authorOrContext: 'ग्रेगर जॉन मेंडल के आनुवंशिकी नियम, एकसंकर व द्विसंकर संकरण, मानव में लिंग निर्धारण (XX, XY)', source: 'NCERT विज्ञान' },
      { num: 10, id: 'c10-sci-ch-10', hindi: 'प्रकाश - परावर्तन तथा अपवर्तन', english: 'Light - Reflection and Refraction', authorOrContext: 'परावर्तन के नियम, गोलीय दर्पण, दर्पण सूत्र (1/v + 1/u = 1/f), स्नेल का नियम, लेंस सूत्र, क्षमता P = 1/f', source: 'NCERT विज्ञान' },
      { num: 11, id: 'c10-sci-ch-11', hindi: 'मानव नेत्र तथा रंगबिरंगा संसार', english: 'Human Eye and Colourful World', authorOrContext: 'समंजन क्षमता, दृष्टि दोष (निकट, दूर, जरा), प्रिज्म द्वारा अपवर्तन, वर्ण-विक्षेपण, इंद्रधनुष, प्रकीर्णन', source: 'NCERT विज्ञान' },
      { num: 12, id: 'c10-sci-ch-12', hindi: 'विद्युत', english: 'Electricity', authorOrContext: 'विभवांतर, ओम का नियम (V = IR), श्रेणीक्रम (R = R1+R2) व समांतर क्रम, जूल का तापन नियम H = I²Rt, शक्ति', source: 'NCERT विज्ञान' },
      { num: 13, id: 'c10-sci-ch-13', hindi: 'विद्युत धारा के चुंबकीय प्रभाव', english: 'Magnetic Effects of Electric Current', authorOrContext: 'ओर्स्टेड का प्रयोग, फ्लेमिंग का वामहस्त नियम, विद्युत मोटर, विद्युत चुंबकीय प्रेरण, जनित्र', source: 'NCERT विज्ञान' },
      { num: 14, id: 'c10-sci-ch-14', hindi: 'ऊर्जा के स्रोत', english: 'Sources of Energy', authorOrContext: 'जीवाश्म ईंधन, तापीय व जल विद्युत संयंत्र, पवन ऊर्जा, सौर सेल, नाभिकीय ऊर्जा, बायोगैस संयंत्र', source: 'NCERT विज्ञान' },
      { num: 15, id: 'c10-sci-ch-15', hindi: 'हमारा पर्यावरण', english: 'Our Environment', authorOrContext: 'पारितंत्र, आहार श्रृंखला एवं खाद्य जाल, 10% ऊर्जा नियम, ओजोन परत अवक्षय (CFCs), कचरा निपटान', source: 'NCERT विज्ञान' },
      { num: 16, id: 'c10-sci-ch-16', hindi: 'प्राकृतिक संसाधनों का संपोषित प्रबंधन', english: 'Management of Natural Resources', authorOrContext: '5 R सिद्धांत (Refuse, Reduce, Reuse, Repurpose, Recycle), चिपको आंदोलन, वन एवं वन्यजीव, बांध', source: 'NCERT विज्ञान' }
    ])
  },

  // 3. SOCIAL SCIENCE (24 Chapters - History, Geography, Pol Sci, Economics, Disaster Management)
  {
    id: 'class10-social-science',
    classLevel: 10,
    nameEnglish: 'Social Science',
    nameHindi: 'सामाजिक विज्ञान (80 अंक सैद्धांतिक + 20 प्रायोगिक)',
    code: '111',
    stream: ['matric', 'general'],
    iconName: 'Globe',
    color: 'amber',
    bookName: 'सामाजिक विज्ञान (BSTBPC कक्षा 10)',
    totalChapters: 24,
    chapters: buildClass10Chapters('class10-social-science', 'सामाजिक विज्ञान (BSTBPC)', [
      // History (1 - 8)
      { num: 1, id: 'c10-sst-ch-1', hindi: 'इतिहास: यूरोप में राष्ट्रवाद', english: 'History: Nationalism in Europe', authorOrContext: '1789 फ्रांसीसी क्रांति, नेपोलियन कोड, मेजिनी, काउंट कावूर, गैरीबाल्डी, बिस्मार्क, फ्रैंकफर्ट संसद', source: 'BSTBPC इतिहास' },
      { num: 2, id: 'c10-sst-ch-2', hindi: 'इतिहास: समाजवाद एवं साम्यवाद', english: 'History: Socialism and Communism', authorOrContext: 'यूटोपियन समाजवादी, कार्ल मार्क्स (दास कैपिटल, कम्युनिस्ट मेनिफेस्टो), 1917 रूसी क्रांति, लेनिन', source: 'BSTBPC इतिहास' },
      { num: 3, id: 'c10-sst-ch-3', hindi: 'इतिहास: हिन्द-चीन में राष्ट्रवादी आंदोलन', english: 'History: Nationalist Movement in Indo-China', authorOrContext: 'फ्रांसीसी उपनिवेशवाद, हो-ची-मिन्ह, अनामी दल, माइली गाँव की घटना, 1954 जिनेवा समझौता', source: 'BSTBPC इतिहास' },
      { num: 4, id: 'c10-sst-ch-4', hindi: 'इतिहास: भारत में राष्ट्रवाद', english: 'History: Nationalism in India', authorOrContext: 'रोलेट एक्ट, जलियांवाला बाग (13 अप्रैल 1919), असहयोग आंदोलन, सविनय अवज्ञा (दांडी यात्रा 1930), गांधी-इरविन समझौता', source: 'BSTBPC इतिहास' },
      { num: 5, id: 'c10-sst-ch-5', hindi: 'इतिहास: अर्थव्यवस्था और आजीविका', english: 'History: Economy and Livelihood', authorOrContext: 'औद्योगिक क्रांति, स्पिनिंग जेनी (जेम्स हारग्रीव्ज), वाष्प इंजन, फैक्ट्री प्रणाली, भारत में सूती कपड़ा मिलें', source: 'BSTBPC इतिहास' },
      { num: 6, id: 'c10-sst-ch-6', hindi: 'इतिहास: शहरीकरण एवं शहरी जीवन', english: 'History: Urbanization and Urban Life', authorOrContext: 'लंदन का विस्तार, भारत में मुंबई (बॉम्बे) चॉल संस्कृति, नगर नियोजन, धुआं व प्रदूषण नियंत्रण', source: 'BSTBPC इतिहास' },
      { num: 7, id: 'c10-sst-ch-7', hindi: 'इतिहास: व्यापार और भूमंडलीकरण', english: 'History: Trade and Globalization', authorOrContext: 'रेशम मार्ग (सिल्क रूट), 1929 की विश्वव्यापी आर्थिक मंदी, ब्रेटन वुड्स सम्मेलन (IMF व विश्व बैंक)', source: 'BSTBPC इतिहास' },
      { num: 8, id: 'c10-sst-ch-8', hindi: 'इतिहास: प्रेस संस्कृति एवं राष्ट्रवाद', english: 'History: Press Culture and Nationalism', authorOrContext: 'गुटेनबर्ग प्रिंटिंग प्रेस, भारत में समाचार पत्र, वर्नाक्यूलर प्रेस एक्ट 1878, बाल गंगाधर तिलक (केसरी)', source: 'BSTBPC इतिहास' },
      // Geography (9 - 14)
      { num: 9, id: 'c10-sst-ch-9', hindi: 'भूगोल: भारत - संसाधन एवं उपयोग', english: 'Geography: Resources and Utilization', authorOrContext: 'संसाधनों का वर्गीकरण, सतत पोषणीय विकास, रियो डी जनेरियो पृथ्वी सम्मेलन 1992, मृदा के प्रकार', source: 'BSTBPC भूगोल' },
      { num: 10, id: 'c10-sst-ch-10', hindi: 'भूगोल: जल, वन एवं वन्य जीव संसाधन', english: 'Geography: Water, Forest and Wildlife', authorOrContext: 'बहुउद्देशीय परियोजनाएं, वर्षा जल संचयन, चिपको आंदोलन (सुंदरलाल बहुगुणा), रेड डाटा बुक', source: 'BSTBPC भूगोल' },
      { num: 11, id: 'c10-sst-ch-11', hindi: 'भूगोल: खनिज एवं ऊर्जा संसाधन', english: 'Geography: Mineral and Energy Resources', authorOrContext: 'धात्विक व अधात्विक खनिज, लौह अयस्क, बॉक्साइट, कोयला, पेट्रोलियम, सौर व परमाणु ऊर्जा', source: 'BSTBPC भूगोल' },
      { num: 12, id: 'c10-sst-ch-12', hindi: 'भूगोल: कृषि एवं निर्माण उद्योग', english: 'Geography: Agriculture and Industries', authorOrContext: 'प्रारंभिक जीविका, गहन व वाणिज्यिक कृषि, रबी-खरीफ-जायद, सूती वस्त्र उद्योग, टाटा लौह इस्पात (TISCO)', source: 'BSTBPC भूगोल' },
      { num: 13, id: 'c10-sst-ch-13', hindi: 'भूगोल: परिवहन, संचार एवं व्यापार', english: 'Geography: Transport, Communication & Trade', authorOrContext: 'सड़क परिवहन (स्वर्णिम चतुर्भुज), रेलमार्ग, जलमार्ग, राष्ट्रीय राजमार्ग, अंतरराष्ट्रीय व्यापार', source: 'BSTBPC भूगोल' },
      { num: 14, id: 'c10-sst-ch-14', hindi: 'भूगोल: बिहार - कृषि, वन संसाधन एवं उद्योग', english: 'Geography: Bihar Resources and Industry', authorOrContext: 'बिहार की कृषि, चीनी उद्योग, जूट उद्योग, जनसंख्या घनत्व, बरौनी तेल शोधक कारखाना, मानचित्र अध्ययन', source: 'BSTBPC भूगोल' },
      // Disaster Management (15 - 16)
      { num: 15, id: 'c10-sst-ch-15', hindi: 'आपदा प्रबंधन: प्राकृतिक आपदा एवं बाढ़-सुखाड़', english: 'Disaster Management: Floods and Droughts', authorOrContext: 'प्राकृतिक व मानव जनित आपदाएं, बिहार में कोसी बाढ़ (बिहार का शोक), सुखाड़ प्रबंधन एवं राहत कार्य', source: 'BSTBPC आपदा प्रबंधन' },
      { num: 16, id: 'c10-sst-ch-16', hindi: 'आपदा प्रबंधन: भूकंप, सुनामी एवं आकस्मिक प्रबंधन', english: 'Disaster Management: Earthquake & Tsunami', authorOrContext: 'सिस्मोग्राफ, रिक्टर स्केल, भूकंपीय तरंगें (P, S, L), सुनामी चेतावनी तंत्र, जीवन रक्षक आकस्मिक प्रबंधन', source: 'BSTBPC आपदा प्रबंधन' },
      // Democratic Politics (17 - 20)
      { num: 17, id: 'c10-sst-ch-17', hindi: 'राजनीति: लोकतंत्र में सत्ता की साझेदारी', english: 'Politics: Power Sharing in Democracy', authorOrContext: 'बेल्जियम एवं श्रीलंका में सत्ता की साझेदारी, सामाजिक विभेद, धर्मनिरपेक्ष राज्य, लैंगिक मसले', source: 'BSTBPC लोकतांत्रिक राजनीति' },
      { num: 18, id: 'c10-sst-ch-18', hindi: 'राजनीति: सत्ता में साझेदारी की कार्यप्रणाली', english: 'Politics: Working of Power Sharing', authorOrContext: 'संघवाद, केंद्र व राज्य संबंध (संघ, राज्य, समवर्ती सूची), 73वां संविधान संशोधन (त्रिस्तरीय पंचायती राज)', source: 'BSTBPC लोकतांत्रिक राजनीति' },
      { num: 19, id: 'c10-sst-ch-19', hindi: 'राजनीति: लोकतंत्र में प्रतिस्पर्धा एवं संघर्ष', english: 'Politics: Struggles & Political Parties', authorOrContext: 'जन आंदोलन (चिपको, नर्मदा बचाओ, ताड़ी विरोधी), राजनीतिक दलों के कार्य, राष्ट्रीय व क्षेत्रीय दल', source: 'BSTBPC लोकतांत्रिक राजनीति' },
      { num: 20, id: 'c10-sst-ch-20', hindi: 'राजनीति: लोकतंत्र की उपलब्धियाँ एवं चुनौतियाँ', english: 'Politics: Outcomes and Challenges', authorOrContext: 'उत्तरदायी व वैध शासन, आर्थिक समृद्धि, सामाजिक विविधता का सामंजस्य, क्षेत्रवाद, भ्रष्टाचार, जातिवाद', source: 'BSTBPC लोकतांत्रिक राजनीति' },
      // Economics (21 - 24)
      { num: 21, id: 'c10-sst-ch-21', hindi: 'अर्थशास्त्र: अर्थव्यवस्था एवं इसके विकास का इतिहास', english: 'Economics: Economy and its Development', authorOrContext: 'प्राथमिक, द्वितीयक व तृतीयक (सेवा) क्षेत्र, सतत विकास, प्रति व्यक्ति आय, मानव विकास सूचकांक (HDI)', source: 'BSTBPC हमारी अर्थव्यवस्था' },
      { num: 22, id: 'c10-sst-ch-22', hindi: 'अर्थशास्त्र: राज्य एवं राष्ट्र की आय', english: 'Economics: State and National Income', authorOrContext: 'सकल घरेलू उत्पाद (GDP), निवल राष्ट्रीय उत्पाद (NNP), प्रति व्यक्ति आय की गणना, राष्ट्रीय आय मापन विधियां', source: 'BSTBPC हमारी अर्थव्यवस्था' },
      { num: 23, id: 'c10-sst-ch-23', hindi: 'अर्थशास्त्र: मुद्रा, बचत एवं साख', english: 'Economics: Money, Savings and Credit', authorOrContext: 'वस्तु विनिमय प्रणाली की कमियां, मुद्रा के कार्य, साख पत्र (चेक, ड्राफ्ट), ऋण के औपचारिक व अनौपचारिक स्रोत', source: 'BSTBPC हमारी अर्थव्यवस्था' },
      { num: 24, id: 'c10-sst-ch-24', hindi: 'अर्थशास्त्र: वित्तीय संस्थाएं, वैश्वीकरण एवं उपभोक्ता', english: 'Economics: Financial Institutions & Consumer Rights', authorOrContext: 'भारतीय रिजर्व बैंक (RBI), व्यावसायिक बैंक, स्वयं सहायता समूह (SHG), बहुराष्ट्रीय कंपनियां, जागो ग्राहक जागो (1986 अधिनियम)', source: 'BSTBPC हमारी अर्थव्यवस्था' }
    ])
  },

  // 4. HINDI (29 Chapters - Godhuli Bhag 2 + Varnika Bhag 2)
  {
    id: 'class10-hindi',
    classLevel: 10,
    nameEnglish: 'Hindi',
    nameHindi: 'हिन्दी (100 अंक)',
    code: '101',
    stream: ['matric', 'general'],
    iconName: 'BookOpen',
    color: 'emerald',
    bookName: 'गोधूलि भाग २ एवं वर्णिका भाग २ (BSTBPC कक्षा 10)',
    totalChapters: 29,
    chapters: buildClass10Chapters('class10-hindi', 'गोधूलि भाग २ एवं वर्णिका भाग २', [
      // गद्य खंड (1 - 12)
      { num: 1, id: 'c10-hin-ch-1', hindi: 'श्रम विभाजन और जाति प्रथा (निबंध)', english: 'Shram Vibhajan Aur Jati Pratha', authorOrContext: 'डॉ. भीमराव अम्बेडकर (एनिहिलेशन ऑफ कास्ट)', source: 'गोधूलि भाग २' },
      { num: 2, id: 'c10-hin-ch-2', hindi: 'विष के दाँत (कहानी)', english: 'Vish Ke Dant', authorOrContext: 'नलिन विलोचन शर्मा (सेन साहब, खोखा/कासू, गिरधरलाल, मदन)', source: 'गोधूलि भाग २' },
      { num: 3, id: 'c10-hin-ch-3', hindi: 'भारत से हम क्या सीखें (भाषण)', english: 'Bharat Se Hum Kya Sikhen', authorOrContext: 'मैक्समूलर (फ्रेडरिक मैक्समूलर, संस्कृत और भारतीय ज्ञान)', source: 'गोधूलि भाग २' },
      { num: 4, id: 'c10-hin-ch-4', hindi: 'नाखून क्यों बढ़ते हैं (ललित निबंध)', english: 'Nakhun Kyun Badhte Hain', authorOrContext: 'आचार्य हजारी प्रसाद द्विवेदी (मनुष्य की पाशविकता व मनुष्यता)', source: 'गोधूलि भाग २' },
      { num: 5, id: 'c10-hin-ch-5', hindi: 'नागरी लिपि (निबंध)', english: 'Nagari Lipi', authorOrContext: 'गुणाकर मुले (देवनागरी लिपि का ऐतिहासिक विकास)', source: 'गोधूलि भाग २' },
      { num: 6, id: 'c10-hin-ch-6', hindi: 'बहादुर (कहानी)', english: 'Bahadur', authorOrContext: 'अमरकांत (नेपाली घरेलू नौकर दिलबहादुर, निर्मला, किशोर)', source: 'गोधूलि भाग २' },
      { num: 7, id: 'c10-hin-ch-7', hindi: 'परंपरा का मूल्यांकन (निबंध)', english: 'Parampara Ka Mulyankan', authorOrContext: 'डॉ. रामविलास शर्मा (साहित्यिक परंपरा व सामाजिक विकास)', source: 'गोधूलि भाग २' },
      { num: 8, id: 'c10-hin-ch-8', hindi: 'जित-जित मैं निरखत हूँ (साक्षात्कार)', english: 'Jeet-Jeet Main Nirkhat Hoon', authorOrContext: 'पंडित बिरजू महाराज / रश्मि वाजपेयी (कथक नृत्य, लखनऊ घराना)', source: 'गोधूलि भाग २' },
      { num: 9, id: 'c10-hin-ch-9', hindi: 'आविन्यों (ललित रचना)', english: 'Avignon', authorOrContext: 'अशोक वाजपेयी (फ्रांस का प्राचीन शहर, ला शत्रुज, रोन नदी)', source: 'गोधूलि भाग २' },
      { num: 10, id: 'c10-hin-ch-10', hindi: 'मछली (कहानी)', english: 'Machhli', authorOrContext: 'विनोद कुमार शुक्ल (संतु, भग्गू, मछली के प्रति बच्चों का मोह)', source: 'गोधूलि भाग २' },
      { num: 11, id: 'c10-hin-ch-11', hindi: 'नौबतखाने में इबादत (व्यक्तिचित्र)', english: 'Naubatkhane Mein Ibadat', authorOrContext: 'यतीन्द्र मिश्र (उस्ताद बिस्मिल्ला खाँ, शहनाई, बालाजी मंदिर काशी)', source: 'गोधूलि भाग २' },
      { num: 12, id: 'c10-hin-ch-12', hindi: 'शिक्षा और संस्कृति (शिक्षाशास्त्र)', english: 'Shiksha Aur Sanskriti', authorOrContext: 'महात्मा गांधी (हस्तकला आधारित बुनियादी शिक्षा, अहिंसा)', source: 'गोधूलि भाग २' },
      // पद्य खंड (13 - 24)
      { num: 13, id: 'c10-hin-ch-13', hindi: 'राम नाम बिनु बिरथे जगि जनमा (पद)', english: 'Ram Naam Binu Birthe Jagi Janma', authorOrContext: 'गुरु नानक (सिख धर्म के प्रथम गुरु, गुरु ग्रंथ साहिब)', source: 'गोधूलि भाग २' },
      { num: 14, id: 'c10-hin-ch-14', hindi: 'प्रेम अयनि श्री राधिका (पद व सवैया)', english: 'Prem Ayani Shri Radhika', authorOrContext: 'रसखान (कृष्ण भक्त मुस्लिम कवि, सुजान रसखान)', source: 'गोधूलि भाग २' },
      { num: 15, id: 'c10-hin-ch-15', hindi: 'अति सूधो सनेह को मारग है (सवैया)', english: 'Ati Soodho Sneh Ko Maarag Hai', authorOrContext: 'घनानंद (रीतिकाल के स्वच्छंद कवि, सुजान प्रेम)', source: 'गोधूलि भाग २' },
      { num: 16, id: 'c10-hin-ch-16', hindi: 'स्वदेशी (दोहे)', english: 'Swadeshi', authorOrContext: 'बदरीनारायण चौधरी "प्रेमघन" (विदेशी वस्तुओं का विरोध, स्वदेशी अपनाना)', source: 'गोधूलि भाग २' },
      { num: 17, id: 'c10-hin-ch-17', hindi: 'भारतमाता (कविता)', english: 'Bharat Mata', authorOrContext: 'सुमित्रानंदन पंत (ग्रामवासिनी भारतमाता, खेतों में फैला श्यामल)', source: 'गोधूलि भाग २' },
      { num: 18, id: 'c10-hin-ch-18', hindi: 'जनतंत्र का जन्म (ओजस्वी कविता)', english: 'Jantantra Ka Janm', authorOrContext: 'रामधारी सिंह "दिनकर" (राष्ट्रकवि, "सिंहासन खाली करो कि जनता आती है")', source: 'गोधूलि भाग २' },
      { num: 19, id: 'c10-hin-ch-19', hindi: 'हिरोशिमा (कविता)', english: 'Hiroshima', authorOrContext: 'सच्चिदानंद हीरानंद वात्स्यायन "अज्ञेय" (परमाणु बम का संहारक रूप)', source: 'गोधूलि भाग २' },
      { num: 20, id: 'c10-hin-ch-20', hindi: 'एक वृक्ष की हत्या (कविता)', english: 'Ek Vriksh Ki Hatya', authorOrContext: 'कुंवर नारायण (पर्यावरण संरक्षण, बूढ़ा चौकीदार वृक्ष)', source: 'गोधूलि भाग २' },
      { num: 21, id: 'c10-hin-ch-21', hindi: 'हमारी नींद (कविता)', english: 'Hamari Neend', authorOrContext: 'वीरेन डंगवाल (सुविधाभोगी समाज, एक मक्खी का जीवन चक्र)', source: 'गोधूलि भाग २' },
      { num: 22, id: 'c10-hin-ch-22', hindi: 'अक्षर-ज्ञान (कविता)', english: 'Akshar-Gyan', authorOrContext: 'अनामिका (कवयित्री, बच्चे द्वारा क, ख, ग, घ, ङ का संघर्ष)', source: 'गोधूलि भाग २' },
      { num: 23, id: 'c10-hin-ch-23', hindi: 'लौटकर आऊंगा फिर (कविता)', english: 'Lautkar Aaunga Phir', authorOrContext: 'जीवनानंद दास (प्रयाग शुक्ल द्वारा अनुवादित, बंगाल की प्रकृति)', source: 'गोधूलि भाग २' },
      { num: 24, id: 'c10-hin-ch-24', hindi: 'मेरे बिना तुम प्रभु (कविता)', english: 'Mere Bina Tum Prabhu', authorOrContext: 'रेनर मारिया रिल्के (धर्मवीर भारती द्वारा अनुवादित, भक्त-भगवान संबंध)', source: 'गोधूलि भाग २' },
      // वर्णिका भाग २ (25 - 29)
      { num: 25, id: 'c10-hin-ch-25', hindi: 'दही वाली मंगम्मा (कहानी)', english: 'Dahi Wali Magamma', authorOrContext: 'श्रीनिवास (कन्नड़ कहानी, वेंकटेश अय्यंगार, मंगम्मा और बहू नंजम्मा)', source: 'वर्णिका भाग २' },
      { num: 26, id: 'c10-hin-ch-26', hindi: 'ढहते विश्वास (कहानी)', english: 'Dhahte Vishwas', authorOrContext: 'सातकोड़ी होता (उड़िया कहानी, देवी नदी पर दलेई बांध, लक्ष्मी की व्यथा)', source: 'वर्णिका भाग २' },
      { num: 27, id: 'c10-hin-ch-27', hindi: 'माँ (कहानी)', english: 'Maa', authorOrContext: 'ईश्वर पेटलीकर (गुजराती कहानी, मंगू पागल व गूँगी लड़की, माँ का अगाध प्रेम)', source: 'वर्णिका भाग २' },
      { num: 28, id: 'c10-hin-ch-28', hindi: 'नगर (कहानी)', english: 'Nagar', authorOrContext: 'सुजाता (एस. रंगराजन, तमिल कहानी, मदुरै का अस्पताल, वल्ली अम्माल, पाप्पाति)', source: 'वर्णिका भाग २' },
      { num: 29, id: 'c10-hin-ch-29', hindi: 'धरती कब तक घूमेगी (कहानी)', english: 'Dharti Kab Tak Ghoomegi', authorOrContext: 'सांवर दइया (राजस्थानी कहानी, बूढ़ी माँ सीता और उसके तीन बेटे)', source: 'वर्णिका भाग २' }
    ])
  },

  // 5. SANSKRIT (14 Chapters - Piyusham Bhag 2)
  {
    id: 'class10-sanskrit',
    classLevel: 10,
    nameEnglish: 'Sanskrit',
    nameHindi: 'संस्कृत (100 अंक)',
    code: '105',
    stream: ['matric', 'general'],
    iconName: 'BookMarked',
    color: 'rose',
    bookName: 'पीयूषम् भाग २ (BSTBPC कक्षा 10)',
    totalChapters: 14,
    chapters: buildClass10Chapters('class10-sanskrit', 'पीयूषम् भाग २', [
      { num: 1, id: 'c10-san-ch-1', hindi: 'मङ्गलम् (उपनिषदः)', english: 'Mangalam (Upanishads)', authorOrContext: 'ईशावास्य, कठ, मुण्डक, श्वेताश्वतर उपनिषद्, सत्यमेव जयते नानृतम्', source: 'पीयूषम् भाग २' },
      { num: 2, id: 'c10-san-ch-2', hindi: 'पाटलिपुत्रवैभवम् (निबंधः)', english: 'Pataliputra Vaibhavam', authorOrContext: 'पटना का ऐतिहासिक वैभव, मेगस्थनीज, फाह्यान, कौमुदी महोत्सव, गुरु गोविंद सिंह', source: 'पीयूषम् भाग २' },
      { num: 3, id: 'c10-san-ch-3', hindi: 'अलसकथा (कथा)', english: 'Alas Katha', authorOrContext: 'विद्यापति (पुरुषपरीक्षा), मिथिला के मंत्री वीरेश्वर, आलसियों की आग द्वारा परीक्षा', source: 'पीयूषम् भाग २' },
      { num: 4, id: 'c10-san-ch-4', hindi: 'संस्कृतसाहित्ये लेखिकाः (निबंधः)', english: 'Sanskrit Sahitya Lekhika', authorOrContext: 'विजयाङ्का, शीलाभट्टारिका, देवकुमारिका, क्षमाराव, गार्गी, मैत्रेयी', source: 'पीयूषम् भाग २' },
      { num: 5, id: 'c10-san-ch-5', hindi: 'भारतमहिमा (पद्यम्)', english: 'Bharat Mahima', authorOrContext: 'विष्णुपुराण एवं भागवतपुराण के श्लोक, भारत भूमि की स्वर्गोपम दिव्यता', source: 'पीयूषम् भाग २' },
      { num: 6, id: 'c10-san-ch-6', hindi: 'भारतीयसंस्काराः (निबंधः)', english: 'Bhartiya Sanskara', authorOrContext: 'सोलह संस्कार (षोडश संस्काराः): जन्मपूर्व 3, शैशव 6, शैक्षणिक 5, विवाह 1, अंत्येष्टि 1', source: 'पीयूषम् भाग २' },
      { num: 7, id: 'c10-san-ch-7', hindi: 'नीतिश्लोकाः (पद्यम्)', english: 'Niti Shloka', authorOrContext: 'महात्मा विदुर (विदुरनीति / महाभारत), नरक के तीन द्वार (काम, क्रोध, लोभ), पंडित लक्षण', source: 'पीयूषम् भाग २' },
      { num: 8, id: 'c10-san-ch-8', hindi: 'कर्मवीरकथा (कथा)', english: 'Karmavir Katha', authorOrContext: 'बिहार के भीखनटोला निवासी रामप्रवेश राम का दलित वर्ग से उठकर प्रशासनिक सेवा में चयन', source: 'पीयूषम् भाग २' },
      { num: 9, id: 'c10-san-ch-9', hindi: 'स्वामिदयानन्दः (निबंधः)', english: 'Swami Dayanand', authorOrContext: 'आर्य समाज के संस्थापक, सत्यार्थ प्रकाश, बालविवाह व मूर्तिपूजा विरोध, डीएवी विद्यालय', source: 'पीयूषम् भाग २' },
      { num: 10, id: 'c10-san-ch-10', hindi: 'मन्दाकिनीवर्णनम् (पद्यम्)', english: 'Mandakini Varnanam', authorOrContext: 'महर्षि वाल्मीकि (रामायण अयोध्याकाण्ड), चित्रकूट में श्री राम द्वारा सीता को मन्दाकिनी दर्शन', source: 'पीयूषम् भाग २' },
      { num: 11, id: 'c10-san-ch-11', hindi: 'व्याघ्रपथिककथा (कथा)', english: 'Vyaghra Pathika Katha', authorOrContext: 'नारायण पण्डित (हितोपदेश - मित्रलाभ), सोने के कंगन का लोभ और बूढ़े बाघ द्वारा पथिक वध', source: 'पीयूषम् भाग २' },
      { num: 12, id: 'c10-san-ch-12', hindi: 'कर्णस्य दानवीरता (नाटकम्)', english: 'Karnasya Danvirta', authorOrContext: 'महाकवि भास (कर्णभारम्), इंद्र का ब्राह्मण वेश और कर्ण द्वारा अभेद्य कवच-कुंडल दान', source: 'पीयूषम् भाग २' },
      { num: 13, id: 'c10-san-ch-13', hindi: 'विश्वशान्तिः (निबंधः)', english: 'Vishwa Shanti', authorOrContext: 'अशांति के दो कारण (द्वेष और असहिष्णुता), शांति का उपाय (परोपकार व वासुदेव कुटुम्बकम्)', source: 'पीयूषम् भाग २' },
      { num: 14, id: 'c10-san-ch-14', hindi: 'शास्त्रकाराः (संवादः)', english: 'Shastrakara', authorOrContext: 'वेद, 6 वेदांग (शिक्षा, कल्प, व्याकरण, निरुक्त, छंद, ज्योतिष), षड् दर्शन एवं प्रवर्तक ऋषि', source: 'पीयूषम् भाग २' }
    ])
  },

  // 6. ENGLISH (16 Chapters - Panorama Part II)
  {
    id: 'class10-english',
    classLevel: 10,
    nameEnglish: 'English',
    nameHindi: 'अंग्रेज़ी (100 Marks)',
    code: '113',
    stream: ['matric', 'general'],
    iconName: 'Languages',
    color: 'blue',
    bookName: 'Panorama Part II (BSTBPC Class 10)',
    totalChapters: 16,
    chapters: buildClass10Chapters('class10-english', 'Panorama Part II', [
      // Prose (1 - 8)
      { num: 1, id: 'c10-eng-ch-1', hindi: 'द पेस फॉर लिविंग', english: 'The Pace for Living', authorOrContext: 'R.C. Hutchinson (Corn-merchant in Dublin, fast modern life)', source: 'Panorama Part II' },
      { num: 2, id: 'c10-eng-ch-2', hindi: 'मी एंड द इकोलॉजी बिट', english: 'Me and the Ecology Bit', authorOrContext: 'Joan Lexau (Jim, environment awareness, compost, Mr. Williams)', source: 'Panorama Part II' },
      { num: 3, id: 'c10-eng-ch-3', hindi: 'गिल्लू', english: 'Gillu', authorOrContext: 'Mahadevi Varma (Loving narrative of a wounded baby squirrel)', source: 'Panorama Part II' },
      { num: 4, id: 'c10-eng-ch-4', hindi: 'व्हॉट इस रॉन्ग विद इंडियन फिल्म्स', english: 'What is Wrong with Indian Films', authorOrContext: 'Satyajit Ray (Legendary film director critique of Indian cinema)', source: 'Panorama Part II' },
      { num: 5, id: 'c10-eng-ch-5', hindi: 'एक्सेप्टेंस स्पीच', english: 'Acceptance Speech', authorOrContext: 'Aung San Suu Kyi (Delivered by Alexander Aris in Oslo for Nobel Peace Prize)', source: 'Panorama Part II' },
      { num: 6, id: 'c10-eng-ch-6', hindi: 'वन्स अपॉन अ टाइम', english: 'Once Upon a Time', authorOrContext: 'Toni Morrison (Nobel laureate speech, old blind wise woman and living bird in hand)', source: 'Panorama Part II' },
      { num: 7, id: 'c10-eng-ch-7', hindi: 'द यूनिटी ऑफ इंडियन कल्चर', english: 'The Unity of Indian Culture', authorOrContext: 'Humayun Kabir (Historical synthesis and unbroken continuity of Indian civilization)', source: 'Panorama Part II' },
      { num: 8, id: 'c10-eng-ch-8', hindi: 'लिटिल गर्ल्स वाइज़र दैन मेन', english: 'Little Girls Wiser Than Men', authorOrContext: 'Leo Tolstoy (Malasha and Akoulya puddle fight and rapid forgiveness)', source: 'Panorama Part II' },
      // Poetry (9 - 16)
      { num: 9, id: 'c10-eng-ch-9', hindi: 'गॉड मेड द कंट्री', english: 'God Made the Country', authorOrContext: 'William Cowper (Rural serenity vs. urban artificiality)', source: 'Panorama Part II' },
      { num: 10, id: 'c10-eng-ch-10', hindi: 'ओड ऑन सॉलिट्यूड', english: 'Ode on Solitude', authorOrContext: 'Alexander Pope (Happy is the man whose wish and care a few paternal acres bound)', source: 'Panorama Part II' },
      { num: 11, id: 'c10-eng-ch-11', hindi: 'पॉलीथीन बैग', english: 'Polythene Bag', authorOrContext: 'Durga Prasad Panda (Poem on environmental hazard and deep emotional grief)', source: 'Panorama Part II' },
      { num: 12, id: 'c10-eng-ch-12', hindi: 'थिनर दैन अ क्रेसेंट', english: 'Thinner Than a Crescent', authorOrContext: 'Vidyapati (Radha painful pining and love sickness for Lord Krishna)', source: 'Panorama Part II' },
      { num: 13, id: 'c10-eng-ch-13', hindi: 'द एम्प्टी हार्ट', english: 'The Empty Heart', authorOrContext: 'Periasamy Thooran (Tamil poet, greedy man seven gold pitchers and ruinous eighth pitcher)', source: 'Panorama Part II' },
      { num: 14, id: 'c10-eng-ch-14', hindi: 'कोयल', english: 'Koel', authorOrContext: 'Puran Singh (Singing bird whose wings are charred by fiery love in rain)', source: 'Panorama Part II' },
      { num: 15, id: 'c10-eng-ch-15', hindi: 'द स्लीपिंग पोर्टर', english: 'The Sleeping Porter', authorOrContext: 'Laxmi Prasad Devkota (Nepali mountain porter struggling in biting cold)', source: 'Panorama Part II' },
      { num: 16, id: 'c10-eng-ch-16', hindi: 'मार्था', english: 'Martha', authorOrContext: 'Walter de la Mare (Enchanting storytelling in the green hazel glen)', source: 'Panorama Part II' }
    ])
  },

  // 7. URDU / NON-HINDI (8 Chapters)
  {
    id: 'class10-urdu',
    classLevel: 10,
    nameEnglish: 'Urdu / Non-Hindi',
    nameHindi: 'उर्दू / अहिन्दी (100 अंक)',
    code: '103',
    stream: ['matric', 'general'],
    iconName: 'BookOpen',
    color: 'teal',
    bookName: 'दरख्शां / रोशनी (BSTBPC कक्षा 10)',
    totalChapters: 8,
    chapters: buildClass10Chapters('class10-urdu', 'दरख्शां / रोशनी (BSTBPC)', [
      { num: 1, id: 'c10-urd-ch-1', hindi: 'हम्द (ख़ुदा-ए-अज़्ज़-ओ-जल)', english: 'Hamd (Khuda-e-Azza-o-Jal)', authorOrContext: 'शबनम कमाली (तौहीद, खुदा की कुदरत और तारीफ)', source: 'दरख्शां भाग २' },
      { num: 2, id: 'c10-urd-ch-2', hindi: 'भाभी जान (अफ़साना)', english: 'Bhabhi Jaan (Short Story)', authorOrContext: 'सोहैल अज़ीमाबादी (रुक्कैया भाभी, रेहाना, शमीम और कुर्बानी)', source: 'दरख्शां भाग २' },
      { num: 3, id: 'c10-urd-ch-3', hindi: 'फ़रार (नफ़सियाती अफ़साना)', english: 'Faraar (Psychological Story)', authorOrContext: 'डॉ. मुहम्मद मोहसिन (महमूद का बचपन, ज़हनी कशमकश)', source: 'दरख्शां भाग २' },
      { num: 4, id: 'c10-urd-ch-4', hindi: 'कटी हुई शाख (अफ़साना)', english: 'Kati Hui Shaakh', authorOrContext: 'डॉ. क़मर जहाँ (बयान-ए-हिजरत, तन्हाई और तहज़ीबी अलगाव)', source: 'दरख्शां भाग २' },
      { num: 5, id: 'c10-urd-ch-5', hindi: 'आशियाना (अफ़साना)', english: 'Aashiyana', authorOrContext: 'निगार अज़ीम (ज़र्रा, बुजुर्गों का मसला, खुदमुख्तारी)', source: 'दरख्शां भाग २' },
      { num: 6, id: 'c10-urd-ch-6', hindi: 'रिया (मज़मून)', english: 'Riya (Essay)', authorOrContext: 'सर सैय्यद अहमद खाँ (रियाकारी, दिखावा और अखलाकियात)', source: 'दरख्शां भाग २' },
      { num: 7, id: 'c10-urd-ch-7', hindi: 'अदब की पहचान (तनक़ीदी मज़मून)', english: 'Adab Ki Pehchan', authorOrContext: 'डॉ. अब्दुल मुग़नी (अदब और ज़िंदगी का रिश्ता, जमालियाती कद्रें)', source: 'दरख्शां भाग २' },
      { num: 8, id: 'c10-urd-ch-8', hindi: 'उर्दू ड्रामा निगारी और आगा हश्र', english: 'Urdu Drama Nigari Aur Agha Hashr', authorOrContext: 'प्रो. लुत्फ़ुर रहमान (उर्दू ड्रामे की तारीख और आगा हश्र काश्मीरी)', source: 'दरख्शां भाग २' }
    ])
  }
];
