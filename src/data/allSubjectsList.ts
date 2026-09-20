import { Subject } from '../types';
import { buildChapters } from './chaptersDef';

export const ALL_SUBJECTS_CONFIG: Subject[] = [
  // 1. HINDI (26 Chapters - 13 Prose + 13 Poetry)
  {
    id: 'hindi',
    nameEnglish: 'Hindi',
    nameHindi: 'हिन्दी (अनिवार्य / ऐच्छिक 100 अंक)',
    code: '106 / 206 / 306',
    stream: ['science', 'arts', 'commerce'],
    iconName: 'BookOpen',
    color: 'emerald',
    bookName: 'दिगंत भाग 2 (BSTBPC)',
    totalChapters: 26,
    chapters: buildChapters('hindi', 'दिगंत भाग 2 (BSTBPC)', [
      // गद्य खंड (1 - 13)
      { num: 1, id: 'h-ch-1', hindi: 'बातचीत (निबंध)', english: 'Baatchit (Essay)', authorOrContext: 'बालकृष्ण भट्ट', source: 'BSTBPC दिगंत भाग 2' },
      { num: 2, id: 'h-ch-2', hindi: 'उसने कहा था (कहानी)', english: 'Usne Kaha Tha (Story)', authorOrContext: 'चंद्रधर शर्मा गुलेरी', source: 'BSTBPC दिगंत भाग 2' },
      { num: 3, id: 'h-ch-3', hindi: 'संपूर्ण क्रांति (भाषण)', english: 'Sampoorna Kranti (Speech)', authorOrContext: 'जयप्रकाश नारायण', source: 'BSTBPC दिगंत भाग 2' },
      { num: 4, id: 'h-ch-4', hindi: 'अर्धनारीश्वर (निबंध)', english: 'Ardhnarishwar (Essay)', authorOrContext: 'रामधारी सिंह "दिनकर"', source: 'BSTBPC दिगंत भाग 2' },
      { num: 5, id: 'h-ch-5', hindi: 'रोज़ (कहानी)', english: 'Roj (Story)', authorOrContext: 'सच्चिदानंद हीरानंद वात्स्यायन "अज्ञेय"', source: 'BSTBPC दिगंत भाग 2' },
      { num: 6, id: 'h-ch-6', hindi: 'एक लेख और एक पत्र', english: 'Ek Lekh Aur Ek Patra', authorOrContext: 'भगत सिंह', source: 'BSTBPC दिगंत भाग 2' },
      { num: 7, id: 'h-ch-7', hindi: 'ओ सदानीरा (यात्रा-वृत्तांत)', english: 'O Sadanira', authorOrContext: 'जगदीशचंद्र माथुर (गंडक नदी संदर्भ)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 8, id: 'h-ch-8', hindi: 'सिपाही की माँ (एकांकी)', english: 'Sipahi Ki Maa (Drama)', authorOrContext: 'मोहन राकेश', source: 'BSTBPC दिगंत भाग 2' },
      { num: 9, id: 'h-ch-9', hindi: 'प्रगीत और समाज (आलोचना)', english: 'Pragit Aur Samaj', authorOrContext: 'नामवर सिंह', source: 'BSTBPC दिगंत भाग 2' },
      { num: 10, id: 'h-ch-10', hindi: 'जूठन (आत्मकथा)', english: 'Jhoothan (Autobiography)', authorOrContext: 'ओमप्रकाश वाल्मीकि', source: 'BSTBPC दिगंत भाग 2' },
      { num: 11, id: 'h-ch-11', hindi: 'हंसते हुए मेरा अकेलापन (डायरी)', english: 'Hanste Huye Mera Akelapan', authorOrContext: 'मलयज', source: 'BSTBPC दिगंत भाग 2' },
      { num: 12, id: 'h-ch-12', hindi: 'तिरिछ (कहानी)', english: 'Tirichh (Story)', authorOrContext: 'उदय प्रकाश', source: 'BSTBPC दिगंत भाग 2' },
      { num: 13, id: 'h-ch-13', hindi: 'शिक्षा (संभाषण)', english: 'Shiksha', authorOrContext: 'जिद्दू कृष्णमूर्ति (जे. कृष्णमूर्ति)', source: 'BSTBPC दिगंत भाग 2' },
      // पद्य खंड (14 - 26)
      { num: 14, id: 'h-ch-14', hindi: 'कड़बक (काव्य)', english: 'Kadbaka (Poem)', authorOrContext: 'मलिक मोहम्मद जायसी (पद्मावत)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 15, id: 'h-ch-15', hindi: 'पद (सूरदास)', english: 'Pad (Surdas)', authorOrContext: 'सूरदास (सूरसागर)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 16, id: 'h-ch-16', hindi: 'पद (तुलसीदास)', english: 'Pad (Tulsidas)', authorOrContext: 'तुलसीदास (विनयपत्रिका)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 17, id: 'h-ch-17', hindi: 'छप्पय (काव्य)', english: 'Chhappaya', authorOrContext: 'नाभादास (भक्तमाल)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 18, id: 'h-ch-18', hindi: 'कवित्त (काव्य)', english: 'Kavitta', authorOrContext: 'भूषण (शिवाजी व छत्रसाल की वीरता)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 19, id: 'h-ch-19', hindi: 'तुमुल कोलाहल कलह में', english: 'Tumul Kolahal Kalah Mein', authorOrContext: 'जयशंकर प्रसाद (कामायनी)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 20, id: 'h-ch-20', hindi: 'पुत्र वियोग (शोक गीत)', english: 'Putra Viyog', authorOrContext: 'सुभद्रा कुमारी चौहान (मुकुल)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 21, id: 'h-ch-21', hindi: 'उषा (प्रातःकालीन सौंदर्य)', english: 'Usha (Poem)', authorOrContext: 'शमशेर बहादुर सिंह', source: 'BSTBPC दिगंत भाग 2' },
      { num: 22, id: 'h-ch-22', hindi: 'जन-जन का चेहरा एक', english: 'Jan-Jan Ka Chehra Ek', authorOrContext: 'गजानन माधव मुक्तिबोध', source: 'BSTBPC दिगंत भाग 2' },
      { num: 23, id: 'h-ch-23', hindi: 'अधिनायक (व्यंग्य कविता)', english: 'Adhinayak', authorOrContext: 'रघुवीर सहाय (आत्महत्या के विरुद्ध)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 24, id: 'h-ch-24', hindi: 'प्यारे नन्हें बेटे को', english: 'Pyare Nanhe Bete Ko', authorOrContext: 'विनोद कुमार शुक्ल', source: 'BSTBPC दिगंत भाग 2' },
      { num: 25, id: 'h-ch-25', hindi: 'हार-जीत (गद्य कविता)', english: 'Haar-Jeet', authorOrContext: 'अशोक वाजपेयी (कहीं नहीं वहीं)', source: 'BSTBPC दिगंत भाग 2' },
      { num: 26, id: 'h-ch-26', hindi: 'गाँव का घर (कविता)', english: 'Gaaon Ka Ghar', authorOrContext: 'ज्ञानेंद्रपति (संशयात्मा)', source: 'BSTBPC दिगंत भाग 2' }
    ])
  },

  // 2. ENGLISH (21 Chapters - 11 Prose + 10 Poetry)
  {
    id: 'english',
    nameEnglish: 'English',
    nameHindi: 'अंग्रेज़ी (100 Marks)',
    code: '105 / 205 / 305',
    stream: ['science', 'arts', 'commerce'],
    iconName: 'Languages',
    color: 'blue',
    bookName: 'Rainbow Part II (BSTBPC)',
    totalChapters: 21,
    chapters: buildChapters('english', 'Rainbow Part II (BSTBPC)', [
      // Prose (1 - 11)
      { num: 1, id: 'e-ch-1', hindi: 'भारतीय सभ्यता और संस्कृति', english: 'Indian Civilization and Culture', authorOrContext: 'Mahatma Gandhi', source: 'Rainbow Part II' },
      { num: 2, id: 'e-ch-2', hindi: 'भारत मेरा घर है', english: 'Bharat is My Home', authorOrContext: 'Dr. Zakir Husain', source: 'Rainbow Part II' },
      { num: 3, id: 'e-ch-3', hindi: 'एक चुटकी खैनी', english: 'A Pinch of Snuff', authorOrContext: 'Manohar Malgonkar (Nanukaka character)', source: 'Rainbow Part II' },
      { num: 4, id: 'e-ch-4', hindi: 'मेरा एक सपना है', english: 'I Have a Dream', authorOrContext: 'Martin Luther King, Jr.', source: 'Rainbow Part II' },
      { num: 5, id: 'e-ch-5', hindi: 'वे विचार जिन्होंने मानवजाति की सहायता की', english: 'Ideas that Have Helped Mankind', authorOrContext: 'Bertrand Russell', source: 'Rainbow Part II' },
      { num: 6, id: 'e-ch-6', hindi: 'कलाकार (सीबी की कहानी)', english: 'The Artist', authorOrContext: 'Shiga Naoya (Seibei and Gourds)', source: 'Rainbow Part II' },
      { num: 7, id: 'e-ch-7', hindi: 'एक बच्चे का जन्म', english: 'A Child is Born', authorOrContext: 'Germaine Greer', source: 'Rainbow Part II' },
      { num: 8, id: 'e-ch-8', hindi: 'प्रेस कितना स्वतंत्र है', english: 'How Free is the Press', authorOrContext: 'Dorothy L. Sayers', source: 'Rainbow Part II' },
      { num: 9, id: 'e-ch-9', hindi: 'धरती (बेंजी की कहानी)', english: 'The Earth', authorOrContext: 'H. E. Bates (Benjy & Hens)', source: 'Rainbow Part II' },
      { num: 10, id: 'e-ch-10', hindi: 'एक यात्री की नज़रों में भारत', english: 'India Through a Traveller’s Eyes', authorOrContext: 'Pearl S. Buck', source: 'Rainbow Part II' },
      { num: 11, id: 'e-ch-11', hindi: 'विवाह का प्रस्ताव (नाटक)', english: 'A Marriage Proposal (Comedy Drama)', authorOrContext: 'Anton Chekhov (Lomov, Natalya & Chubukov)', source: 'Rainbow Part II' },
      // Poetry (12 - 21)
      { num: 12, id: 'e-ch-12', hindi: 'प्रियतम प्रेम, मैं नहीं जाता', english: 'Sweetest Love I Do Not Goe', authorOrContext: 'John Donne (Metaphysical Poet)', source: 'Rainbow Part II' },
      { num: 13, id: 'e-ch-13', hindi: 'स्वयं का गीत', english: 'Song of Myself', authorOrContext: 'Walt Whitman (People’s Poet)', source: 'Rainbow Part II' },
      { num: 14, id: 'e-ch-14', hindi: 'अब पत्ते तेजी से झड़ रहे हैं', english: 'Now the Leaves Are Falling Fast', authorOrContext: 'W. H. Auden', source: 'Rainbow Part II' },
      { num: 15, id: 'e-ch-15', hindi: 'शरद ऋतु का गीत', english: 'Ode to Autumn', authorOrContext: 'John Keats (Romantic Poet)', source: 'Rainbow Part II' },
      { num: 16, id: 'e-ch-16', hindi: 'स्मृति-लेख (सुंदर स्त्री)', english: 'An Epitaph', authorOrContext: 'Walter de la Mare', source: 'Rainbow Part II' },
      { num: 17, id: 'e-ch-17', hindi: 'सैनिक (देशभक्ति सॉनेट)', english: 'The Soldier (Sonnet)', authorOrContext: 'Rupert Brooke (War Poet)', source: 'Rainbow Part II' },
      { num: 18, id: 'e-ch-18', hindi: 'मैकाविटी: रहस्यमयी बिल्ली', english: 'Macavity: The Mystery Cat', authorOrContext: 'T. S. Eliot', source: 'Rainbow Part II' },
      { num: 19, id: 'e-ch-19', hindi: 'अग्नि-भजन (पारसी घाट)', english: 'Fire-Hymn', authorOrContext: 'Keki N. Daruwalla (Zoroastrian Tower of Silence)', source: 'Rainbow Part II' },
      { num: 20, id: 'e-ch-20', hindi: 'साँप', english: 'Snake', authorOrContext: 'D. H. Lawrence (Sicily, Mount Etna)', source: 'Rainbow Part II' },
      { num: 21, id: 'e-ch-21', hindi: 'मेरी दादी का घर', english: 'My Grandmother’s House', authorOrContext: 'Kamala Das (Indo-Anglian Poetess)', source: 'Rainbow Part II' }
    ])
  },

  // 3. PHYSICS (14 Chapters - All NCERT / BSEB)
  {
    id: 'physics',
    nameEnglish: 'Physics',
    nameHindi: 'भौतिकी (70 अंक सैद्धांतिक + 30 प्रायोगिक)',
    code: '117',
    stream: ['science'],
    iconName: 'Atom',
    color: 'purple',
    bookName: 'NCERT / BSTBPC भौतिकी भाग 1 व 2',
    totalChapters: 14,
    chapters: buildChapters('physics', 'NCERT / BSTBPC भौतिकी कक्षा 12', [
      { num: 1, id: 'p-ch-1', hindi: 'विद्युत आवेश तथा क्षेत्र', english: 'Electric Charges and Fields', authorOrContext: 'कूलॉम नियम, गाउस का प्रमेय', source: 'NCERT भौतिकी' },
      { num: 2, id: 'p-ch-2', hindi: 'स्थिरवैद्युत विभव तथा धारिता', english: 'Electrostatic Potential & Capacitance', authorOrContext: 'समविभव पृष्ठ, संधारित्र संयोजन', source: 'NCERT भौतिकी' },
      { num: 3, id: 'p-ch-3', hindi: 'विद्युत धारा', english: 'Current Electricity', authorOrContext: 'ओम नियम, किरचॉफ के नियम, व्हीटस्टोन सेतु', source: 'NCERT भौतिकी' },
      { num: 4, id: 'p-ch-4', hindi: 'गतिमान आवेश और चुंबकत्व', english: 'Moving Charges and Magnetism', authorOrContext: 'बायो-सावर्ट नियम, ऐम्पियर परिपथीय नियम, साइक्लोट्रॉन', source: 'NCERT भौतिकी' },
      { num: 5, id: 'p-ch-5', hindi: 'चुंबकत्व एवं द्रव्य', english: 'Magnetism and Matter', authorOrContext: 'भू-चुंबकत्व, प्रति, अनु एवं लौह चुंबकत्व', source: 'NCERT भौतिकी' },
      { num: 6, id: 'p-ch-6', hindi: 'वैद्युतचुंबकीय प्रेरण', english: 'Electromagnetic Induction', authorOrContext: 'फैराडे के नियम, लेन्ज का नियम, भँवर धाराएं', source: 'NCERT भौतिकी' },
      { num: 7, id: 'p-ch-7', hindi: 'प्रत्यावर्ती धारा', english: 'Alternating Current', authorOrContext: 'LCR परिपथ, अनुनाद, ट्रांसफॉर्मर कार्यविधि', source: 'NCERT भौतिकी' },
      { num: 8, id: 'p-ch-8', hindi: 'वैद्युतचुंबकीय तरंगें', english: 'Electromagnetic Waves', authorOrContext: 'विस्थापन धारा, मैक्सवेल समीकरण, विद्युत चुंबकीय स्पेक्ट्रम', source: 'NCERT भौतिकी' },
      { num: 9, id: 'p-ch-9', hindi: 'किरण प्रकाशिकी एवं प्रकाशिक यंत्र', english: 'Ray Optics and Optical Instruments', authorOrContext: 'लेंस मेकर सूत्र, सूक्ष्मदर्शी, दूरदर्शी', source: 'NCERT भौतिकी' },
      { num: 10, id: 'p-ch-10', hindi: 'तरंग प्रकाशिकी', english: 'Wave Optics', authorOrContext: 'हाइगेंस तरंग सिद्धांत, यंग द्वि-स्लिट व्यतिकरण', source: 'NCERT भौतिकी' },
      { num: 11, id: 'p-ch-11', hindi: 'विकिरण तथा द्रव्य की द्वैत प्रकृति', english: 'Dual Nature of Radiation & Matter', authorOrContext: 'प्रकाश विद्युत प्रभाव, आइंस्टीन समीकरण, दे-ब्रॉग्ली तरंगें', source: 'NCERT भौतिकी' },
      { num: 12, id: 'p-ch-12', hindi: 'परमाणु', english: 'Atoms', authorOrContext: 'रदरफोर्ड प्रकीर्णन, बोर का परमाणु मॉडल', source: 'NCERT भौतिकी' },
      { num: 13, id: 'p-ch-13', hindi: 'नाभिक', english: 'Nuclei', authorOrContext: 'द्रव्यमान क्षति, बंधन ऊर्जा, नाभिकीय विखंडन व संलयन', source: 'NCERT भौतिकी' },
      { num: 14, id: 'p-ch-14', hindi: 'अर्धचालक इलेक्ट्रॉनिकी: युक्तियाँ व परिपथ', english: 'Semiconductor Electronics', authorOrContext: 'p-n संधि डायोड, दिष्टकारी, लॉजिक गेट्स', source: 'NCERT भौतिकी' }
    ])
  },

  // 4. CHEMISTRY (10 Core Chapters - NCERT / BSEB)
  {
    id: 'chemistry',
    nameEnglish: 'Chemistry',
    nameHindi: 'रसायन शास्त्र (70 अंक सैद्धांतिक + 30 प्रायोगिक)',
    code: '118',
    stream: ['science'],
    iconName: 'FlaskConical',
    color: 'teal',
    bookName: 'NCERT / BSTBPC रसायन विज्ञान भाग 1 व 2',
    totalChapters: 10,
    chapters: buildChapters('chemistry', 'NCERT / BSTBPC रसायन विज्ञान कक्षा 12', [
      { num: 1, id: 'c-ch-1', hindi: 'विलयन', english: 'Solutions', authorOrContext: 'राउल्ट का नियम, अणुसंख्य गुणधर्म, वान्ट हॉफ गुणांक', source: 'NCERT रसायन शास्त्र' },
      { num: 2, id: 'c-ch-2', hindi: 'वैद्युतरसायन', english: 'Electrochemistry', authorOrContext: 'डेनियल सेल, नर्नस्ट समीकरण, कोलराउश नियम, फैराडे नियम', source: 'NCERT रसायन शास्त्र' },
      { num: 3, id: 'c-ch-3', hindi: 'रासायनिक बलगतिकी', english: 'Chemical Kinetics', authorOrContext: 'अभिक्रिया की कोटि, प्रथम कोटि समाकलित वेग समीकरण', source: 'NCERT रसायन शास्त्र' },
      { num: 4, id: 'c-ch-4', hindi: 'd एवं f ब्लॉक के तत्व', english: 'The d- and f-Block Elements', authorOrContext: 'संक्रमण तत्व गुण, लैन्थेनाइड आकुंचन', source: 'NCERT रसायन शास्त्र' },
      { num: 5, id: 'c-ch-5', hindi: 'उपसहसंयोजन यौगिक', english: 'Coordination Compounds', authorOrContext: 'IUPAC नामकरण, वर्नर सिद्धांत, संयोजकता बंध सिद्धांत (VBT)', source: 'NCERT रसायन शास्त्र' },
      { num: 6, id: 'c-ch-6', hindi: 'हैलोऐल्केन तथा हैलोऐरीन', english: 'Haloalkanes and Haloarenes', authorOrContext: 'SN1 तथा SN2 क्रियाविधि, वुर्ट्ज़ व फिटिग अभिक्रिया', source: 'NCERT रसायन शास्त्र' },
      { num: 7, id: 'c-ch-7', hindi: 'ऐल्कोहॉल, फ़ीनॉल एवं ईथर', english: 'Alcohols, Phenols and Ethers', authorOrContext: 'ल्यूकास परीक्षण, कोल्बे व रीमर-टीमैन अभिक्रिया, विलियमसन संश्लेषण', source: 'NCERT रसायन शास्त्र' },
      { num: 8, id: 'c-ch-8', hindi: 'ऐल्डिहाइड, कीटोन एवं कार्बोक्सिलिक अम्ल', english: 'Aldehydes, Ketones & Carboxylic Acids', authorOrContext: 'कैनिजारो अभिक्रिया, ऐल्डोल संघनन, टॉलेन व फेहलिंग परीक्षण', source: 'NCERT रसायन शास्त्र' },
      { num: 9, id: 'c-ch-9', hindi: 'ऐमीन (नाइट्रोजनयुक्त कार्बनिक यौगिक)', english: 'Amines', authorOrContext: 'हॉफमैन ब्रोमामाइड निम्नीकरण, कार्बिलऐमीन परीक्षण, हिंसबर्ग अभिकर्मक', source: 'NCERT रसायन शास्त्र' },
      { num: 10, id: 'c-ch-10', hindi: 'जैव-अणु', english: 'Biomolecules', authorOrContext: 'कार्बोहाइड्रेट, ग्लूकोज संरचना, प्रोटीन, डीएनए व आरएनए', source: 'NCERT रसायन शास्त्र' }
    ])
  },

  // 5. MATHEMATICS (13 Chapters - NCERT / BSEB)
  {
    id: 'mathematics',
    nameEnglish: 'Mathematics',
    nameHindi: 'गणित (100 अंक)',
    code: '121 / 327',
    stream: ['science', 'arts'],
    iconName: 'Calculator',
    color: 'indigo',
    bookName: 'NCERT / BSTBPC गणित भाग 1 व 2',
    totalChapters: 13,
    chapters: buildChapters('mathematics', 'NCERT गणित कक्षा 12', [
      { num: 1, id: 'm-ch-1', hindi: 'संबंध एवं फलन', english: 'Relations and Functions', authorOrContext: 'स्वतुल्य, सममित, संक्रामक एवं तुल्यता संबंध, एकैकी-आच्छादक फलन', source: 'NCERT गणित' },
      { num: 2, id: 'm-ch-2', hindi: 'प्रतिलोम त्रिकोणमितीय फलन', english: 'Inverse Trigonometric Functions', authorOrContext: 'मुख्य मान शाखा, सर्वसमिकाएं एवं रूपांतरण', source: 'NCERT गणित' },
      { num: 3, id: 'm-ch-3', hindi: 'आव्यूह', english: 'Matrices', authorOrContext: 'आव्यूह गुणन, परिवर्त, सममित व विषम सममित आव्यूह', source: 'NCERT गणित' },
      { num: 4, id: 'm-ch-4', hindi: 'सारणिक', english: 'Determinants', authorOrContext: 'सारणिक गुणधर्म, उपसारणिक, सहखंड, आव्यूह का व्युत्क्रम (A⁻¹)', source: 'NCERT गणित' },
      { num: 5, id: 'm-ch-5', hindi: 'सांतत्य तथा अवकलनीयता', english: 'Continuity and Differentiability', authorOrContext: 'सांतत्य जांच, श्रृंखला नियम, रोले तथा माध्यमान प्रमेय', source: 'NCERT गणित' },
      { num: 6, id: 'm-ch-6', hindi: 'अवकलज के अनुप्रयोग', english: 'Applications of Derivatives', authorOrContext: 'वर्धमान व ह्रासमान फलन, उच्चिष्ठ तथा निम्निष्ठ (Maxima & Minima)', source: 'NCERT गणित' },
      { num: 7, id: 'm-ch-7', hindi: 'समाकलन', english: 'Integrals', authorOrContext: 'प्रतिस्थापन, आंशिक भिन्न, खंडशः समाकलन, निश्चित समाकलन गुणधर्म', source: 'NCERT गणित' },
      { num: 8, id: 'm-ch-8', hindi: 'समाकलनों के अनुप्रयोग', english: 'Applications of Integrals', authorOrContext: 'साधारण वक्रों, परवलय, दीर्घवृत्त व रेखाओं से घिरे क्षेत्र का क्षेत्रफल', source: 'NCERT गणित' },
      { num: 9, id: 'm-ch-9', hindi: 'अवकल समीकरण', english: 'Differential Equations', authorOrContext: 'कोटि व घात, चर पृथक्करण, समघातीय एवं रैखिक अवकल समीकरण', source: 'NCERT गणित' },
      { num: 10, id: 'm-ch-10', hindi: 'सदिश बीजगणित', english: 'Vector Algebra', authorOrContext: 'अदिश व सदिश गुणनफल (Dot & Cross Product), प्रक्षेप', source: 'NCERT गणित' },
      { num: 11, id: 'm-ch-11', hindi: 'त्रि-विमीय ज्यामिति', english: 'Three Dimensional Geometry', authorOrContext: 'दिक्-कोज्याएं, रेखा व समतल के समीकरण, न्यूनतम दूरी (Shortest Distance)', source: 'NCERT गणित' },
      { num: 12, id: 'm-ch-12', hindi: 'रैखिक प्रोग्रामन', english: 'Linear Programming', authorOrContext: 'ग्राफ़ीय विधि द्वारा अधिकतमीकरण व न्यूनतमीकरण, सुसंगत क्षेत्र', source: 'NCERT गणित' },
      { num: 13, id: 'm-ch-13', hindi: 'प्रायिकता', english: 'Probability', authorOrContext: 'सप्रतिबंध प्रायिकता, बेज़ प्रमेय (Bayes Theorem), बरनौली परीक्षण', source: 'NCERT गणित' }
    ])
  },

  // 6. BIOLOGY (13 Chapters - NCERT / BSEB)
  {
    id: 'biology',
    nameEnglish: 'Biology',
    nameHindi: 'जीव विज्ञान (70 अंक सैद्धांतिक + 30 प्रायोगिक)',
    code: '119',
    stream: ['science'],
    iconName: 'Dna',
    color: 'rose',
    bookName: 'NCERT / BSTBPC जीव विज्ञान',
    totalChapters: 13,
    chapters: buildChapters('biology', 'NCERT जीव विज्ञान कक्षा 12', [
      { num: 1, id: 'b-ch-1', hindi: 'पुष्पी पादपों में लैंगिक जनन', english: 'Sexual Reproduction in Flowering Plants', authorOrContext: 'परागकण संरचना, दोहरा निषेचन, भ्रूणपोष विकास', source: 'NCERT जीव विज्ञान' },
      { num: 2, id: 'b-ch-2', hindi: 'मानव जनन', english: 'Human Reproduction', authorOrContext: 'नर व मादा जनन तंत्र, शुक्राणुजनन, अंडाणुजनन, मासिक धर्म चक्र', source: 'NCERT जीव विज्ञान' },
      { num: 3, id: 'b-ch-3', hindi: 'जनन स्वास्थ्य', english: 'Reproductive Health', authorOrContext: 'गर्भनिरोधक उपाय, यौन संचारित रोग (STD), परखनली शिशु (IVF)', source: 'NCERT जीव विज्ञान' },
      { num: 4, id: 'b-ch-4', hindi: 'वंशागति तथा विविधता के सिद्धांत', english: 'Principles of Inheritance & Variation', authorOrContext: 'मेंडल के आनुवंशिकी नियम, अपूर्ण प्रभाविता, लिंग निर्धारण, हीमोफीलिया', source: 'NCERT जीव विज्ञान' },
      { num: 5, id: 'b-ch-5', hindi: 'वंशागति के आणविक आधार', english: 'Molecular Basis of Inheritance', authorOrContext: 'डीएनए संरचना, प्रतिकृतियन (Replication), अनुलेखन, लैक ओपेरॉन', source: 'NCERT जीव विज्ञान' },
      { num: 6, id: 'b-ch-6', hindi: 'विकास', english: 'Evolution', authorOrContext: 'जीवन की उत्पत्ति, डार्विनवाद, हार्डी-वेनबर्ग सिद्धांत', source: 'NCERT जीव विज्ञान' },
      { num: 7, id: 'b-ch-7', hindi: 'मानव स्वास्थ्य तथा रोग', english: 'Human Health and Diseases', authorOrContext: 'मलेरिया, टाइफाइड, एड्स (AIDS), कैंसर, प्रतिरक्षा तंत्र (Immunity)', source: 'NCERT जीव विज्ञान' },
      { num: 8, id: 'b-ch-8', hindi: 'मानव कल्याण में सूक्ष्मजीव', english: 'Microbes in Human Welfare', authorOrContext: 'घरेलू उत्पाद, बायोगैस उत्पादन, जैव उर्वरक, वाहित मल उपचार', source: 'NCERT जीव विज्ञान' },
      { num: 9, id: 'b-ch-9', hindi: 'जैव प्रौद्योगिकी: सिद्धांत एवं प्रक्रम', english: 'Biotechnology: Principles & Processes', authorOrContext: 'प्रतिबंधन एंजाइम (Restriction Enzymes), प्लास्मिड, पीसीआर (PCR)', source: 'NCERT जीव विज्ञान' },
      { num: 10, id: 'b-ch-10', hindi: 'जैव प्रौद्योगिकी एवं उसके उपयोग', english: 'Biotechnology and its Applications', authorOrContext: 'बीटी कपास (Bt Cotton), आनुवंशिक रूप से निर्मित इंसुलिन, जीन थेरेपी', source: 'NCERT जीव विज्ञान' },
      { num: 11, id: 'b-ch-11', hindi: 'जीव और समष्टियाँ', english: 'Organisms and Populations', authorOrContext: 'पारिस्थितिक अनुकूलन, समष्टि वृद्धि वक्र, परस्पर क्रियाएं (Mutualism)', source: 'NCERT जीव विज्ञान' },
      { num: 12, id: 'b-ch-12', hindi: 'पारितंत्र', english: 'Ecosystem', authorOrContext: 'खाद्य श्रृंखला, ऊर्जा प्रवाह (10% नियम), पारिस्थितिक पिरामिड', source: 'NCERT जीव विज्ञान' },
      { num: 13, id: 'b-ch-13', hindi: 'जैव विविधता एवं संरक्षण', english: 'Biodiversity and Conservation', authorOrContext: 'जैव विविधता के ह्रास के कारण, स्व-स्थाने व बाह्य-स्थाने संरक्षण (In-situ & Ex-situ)', source: 'NCERT जीव विज्ञान' }
    ])
  },

  // 7. HISTORY (12 Chapters - All 3 Parts NCERT / BSEB)
  {
    id: 'history',
    nameEnglish: 'History',
    nameHindi: 'इतिहास (100 अंक)',
    code: '321',
    stream: ['arts'],
    iconName: 'Landmark',
    color: 'orange',
    bookName: 'भारतीय इतिहास के कुछ विषय (भाग 1, 2, 3)',
    totalChapters: 12,
    chapters: buildChapters('history', 'NCERT इतिहास भाग 1, 2 व 3', [
      { num: 1, id: 'hist-ch-1', hindi: 'ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता', english: 'Bricks, Beads and Bones (Harappan Civilization)', authorOrContext: 'मोहनजोदड़ो नगर नियोजन, विशाल स्नानागार, मुहरें', source: 'NCERT इतिहास भाग 1' },
      { num: 2, id: 'hist-ch-2', hindi: 'राजा, किसान और नगर: आरंभिक राज्य', english: 'Kings, Farmers and Towns (c. 600 BCE - 600 CE)', authorOrContext: '16 महाजनपद, मौर्य साम्राज्य, अशोक के अभिलेख, ब्राह्मी लिपि', source: 'NCERT इतिहास भाग 1' },
      { num: 3, id: 'hist-ch-3', hindi: 'बंधुत्व, जाति तथा वर्ग: आरंभिक समाज', english: 'Kinship, Caste and Class (c. 600 BCE - 600 CE)', authorOrContext: 'महाभारत का समालोचनात्मक संस्करण, वर्ण व्यवस्था, स्त्री धन', source: 'NCERT इतिहास भाग 1' },
      { num: 4, id: 'hist-ch-4', hindi: 'विचारक, विश्वास और इमारतें: सांस्कृतिक विकास', english: 'Thinkers, Beliefs and Buildings (c. 600 BCE - 600 CE)', authorOrContext: 'बौद्ध धर्म, जैन धर्म, सांची का स्तूप, अमरावती', source: 'NCERT इतिहास भाग 1' },
      { num: 5, id: 'hist-ch-5', hindi: 'यात्रियों के नज़रिए: समाज की समझ', english: 'Through the Eyes of Travellers (c. 10th - 17th Century)', authorOrContext: 'अल-बिरूनी (किताब-उल-हिंद), इब्न बतूता (रिहला), बर्नियर', source: 'NCERT इतिहास भाग 2' },
      { num: 6, id: 'hist-ch-6', hindi: 'भक्ति-सूफ़ी परंपराएं: धार्मिक विश्वास', english: 'Bhakti-Sufi Traditions (c. 8th - 18th Century)', authorOrContext: 'अलवार-नयनार संत, कबीर, गुरु नानक, मीराबाई, चिश्ती सिलसिला', source: 'NCERT इतिहास भाग 2' },
      { num: 7, id: 'hist-ch-7', hindi: 'एक साम्राज्य की राजधानी: विजयनगर', english: 'An Imperial Capital: Vijayanagara', authorOrContext: 'हरिहर व बुक्का, कृष्णदेव राय, हम्पी के अवशेष, महानवमी डिब्बा', source: 'NCERT इतिहास भाग 2' },
      { num: 8, id: 'hist-ch-8', hindi: 'किसान, ज़मींदार और राज्य: मुग़ल साम्राज्य', english: 'Peasants, Zamindars & the State (Mughal Empire)', authorOrContext: 'आईन-ए-अकबरी (अबुल फजल), मनसबदारी व्यवस्था, भू-राजस्व', source: 'NCERT इतिहास भाग 2' },
      { num: 9, id: 'hist-ch-9', hindi: 'उपनिवेशवाद और देहात: सरकारी अभिलेख', english: 'Colonialism and the Countryside', authorOrContext: 'इस्तमरारी (स्थायी) बंदोबस्त, संथाल विद्रोह, दक्कन दंगा आयोग', source: 'NCERT इतिहास भाग 3' },
      { num: 10, id: 'hist-ch-10', hindi: 'विद्रोही और राज: 1857 का आंदोलन', english: 'Rebels and the Raj (1857 Revolt)', authorOrContext: '1857 विद्रोह के कारण, बिहार में वीर कुंवर सिंह, बेगम हज़रत महल', source: 'NCERT इतिहास भाग 3' },
      { num: 11, id: 'hist-ch-11', hindi: 'महात्मा गांधी और राष्ट्रीय आंदोलन', english: 'Mahatma Gandhi & the Nationalist Movement', authorOrContext: 'चंपारण सत्याग्रह (1917), असहयोग, सविनय अवज्ञा (दांडी मार्च), भारत छोड़ो', source: 'NCERT इतिहास भाग 3' },
      { num: 12, id: 'hist-ch-12', hindi: 'संविधान का निर्माण: नए युग की शुरुआत', english: 'Framing the Constitution (A New Era Begins)', authorOrContext: 'संविधान सभा, डॉ. बी. आर. आंबेडकर, उद्देश्य प्रस्ताव, 26 जनवरी 1950', source: 'NCERT इतिहास भाग 3' }
    ])
  },

  // 8. GEOGRAPHY (10 Chapters - NCERT / BSEB)
  {
    id: 'geography',
    nameEnglish: 'Geography',
    nameHindi: 'भूगोल (70 अंक सैद्धांतिक + 30 प्रायोगिक)',
    code: '323',
    stream: ['arts'],
    iconName: 'Globe',
    color: 'cyan',
    bookName: 'मानव भूगोल के मूल सिद्धांत एवं भारत: लोग और अर्थव्यवस्था',
    totalChapters: 10,
    chapters: buildChapters('geography', 'NCERT भूगोल कक्षा 12', [
      { num: 1, id: 'geo-ch-1', hindi: 'मानव भूगोल: प्रकृति एवं विषय क्षेत्र', english: 'Human Geography: Nature and Scope', authorOrContext: 'पर्यावरणीय निश्चयवाद, संभववाद, नवनिश्चयवाद (ग्रिफिथ टेलर)', source: 'NCERT भूगोल' },
      { num: 2, id: 'geo-ch-2', hindi: 'विश्व जनसंख्या: वितरण, घनत्व और वृद्धि', english: 'World Population: Distribution, Density & Growth', authorOrContext: 'जनसांख्यिकीय संक्रमण सिद्धांत, जनसंख्या वितरण के भौगोलिक कारक', source: 'NCERT भूगोल' },
      { num: 3, id: 'geo-ch-3', hindi: 'मानव विकास', english: 'Human Development', authorOrContext: 'डॉ. महबूब-उल-हक एवं अमर्त्य सेन संकल्पना, मानव विकास सूचकांक (HDI)', source: 'NCERT भूगोल' },
      { num: 4, id: 'geo-ch-4', hindi: 'प्राथमिक क्रियाएं', english: 'Primary Activities', authorOrContext: 'आखेट, पशुचारण, रोपण कृषि, गहन निर्वाह कृषि, खनन', source: 'NCERT भूगोल' },
      { num: 5, id: 'geo-ch-5', hindi: 'द्वितीयक क्रियाएं', english: 'Secondary Activities', authorOrContext: 'विनिर्माण उद्योग, उद्योगों की अवस्थिति, कुटीर व बड़े पैमाने के उद्योग', source: 'NCERT भूगोल' },
      { num: 6, id: 'geo-ch-6', hindi: 'तृतीयक और चतुर्थ क्रियाकलाप', english: 'Tertiary and Quaternary Activities', authorOrContext: 'सेवा क्षेत्र, व्यापार, परिवहन, संचार, ज्ञान आधारित सेवाएं', source: 'NCERT भूगोल' },
      { num: 7, id: 'geo-ch-7', hindi: 'परिवहन एवं संचार', english: 'Transport and Communication', authorOrContext: 'सड़क, रेलमार्ग (ट्रांस-साइबेरियन), स्वेज व पनामा नहर, उपग्रह संचार', source: 'NCERT भूगोल' },
      { num: 8, id: 'geo-ch-8', hindi: 'अंतर्राष्ट्रीय व्यापार', english: 'International Trade', authorOrContext: 'व्यापार संतुलन, पतन (Ports) - अंतर्राष्ट्रीय व्यापार के प्रवेश द्वार', source: 'NCERT भूगोल' },
      { num: 9, id: 'geo-ch-9', hindi: 'भारत: जनसंख्या वितरण, घनत्व, वृद्धि एवं संघटन', english: 'India: Population Distribution, Density & Growth', authorOrContext: 'भारत एवं बिहार का जनसंख्या घनत्व, भाषाई एवं धार्मिक संघटन', source: 'NCERT भूगोल' },
      { num: 10, id: 'geo-ch-10', hindi: 'भौगोलिक परिप्रेक्ष्य में चयनित कुछ मुद्दे एवं समस्याएं', english: 'Geographical Perspective on Selected Issues', authorOrContext: 'पर्यावरण प्रदूषण, गंदी बस्तियों की समस्याएं (धारावी), भूमि क्षरण', source: 'NCERT भूगोल' }
    ])
  },

  // 9. POLITICAL SCIENCE (16 Chapters - Both Books NCERT / BSEB)
  {
    id: 'political-science',
    nameEnglish: 'Political Science',
    nameHindi: 'राजनीति शास्त्र (100 अंक)',
    code: '322',
    stream: ['arts'],
    iconName: 'Scale',
    color: 'violet',
    bookName: 'समकालीन विश्व राजनीति एवं स्वतंत्र भारत में राजनीति',
    totalChapters: 16,
    chapters: buildChapters('political-science', 'NCERT राजनीति विज्ञान कक्षा 12', [
      { num: 1, id: 'pol-ch-1', hindi: 'शीतयुद्ध का दौर', english: 'The Cold War Era', authorOrContext: 'क्यूबा मिसाइल संकट (1962), नाटो व वारसा पैक्ट, गुटनिरपेक्ष आंदोलन (NAM)', source: 'NCERT राजनीति विज्ञान' },
      { num: 2, id: 'pol-ch-2', hindi: 'दो ध्रुवीयता का अंत', english: 'The End of Bipolarity', authorOrContext: 'बर्लिन दीवार का गिरना (1989), सोवियत संघ का विघटन (1991), शॉक थेरेपी', source: 'NCERT राजनीति विज्ञान' },
      { num: 3, id: 'pol-ch-3', hindi: 'समकालीन विश्व में अमेरिकी वर्चस्व', english: 'US Hegemony in World Politics', authorOrContext: 'प्रथम खाड़ी युद्ध, 9/11 की घटना, सैन्य व ढांचागत वर्चस्व', source: 'NCERT राजनीति विज्ञान' },
      { num: 4, id: 'pol-ch-4', hindi: 'सत्ता के वैकल्पिक केंद्र', english: 'Alternative Centres of Power', authorOrContext: 'यूरोपीय संघ (EU), आसियान (ASEAN), चीन का आर्थिक उत्थान, ब्रिक्स', source: 'NCERT राजनीति विज्ञान' },
      { num: 5, id: 'pol-ch-5', hindi: 'समकालीन दक्षिण एशिया', english: 'Contemporary South Asia', authorOrContext: 'भारत-पाकिस्तान संबंध, सार्क (SAARC), बांग्लादेश का उदय (1971)', source: 'NCERT राजनीति विज्ञान' },
      { num: 6, id: 'pol-ch-6', hindi: 'अंतर्राष्ट्रीय संगठन', english: 'International Organisations', authorOrContext: 'संयुक्त राष्ट्र संघ (UNO) अंग, सुरक्षा परिषद सुधार, वीटो पावर', source: 'NCERT राजनीति विज्ञान' },
      { num: 7, id: 'pol-ch-7', hindi: 'समकालीन विश्व में सुरक्षा', english: 'Security in the Contemporary World', authorOrContext: 'पारंपरिक व अपारंपरिक सुरक्षा धारणाएं, आतंकवाद, निरस्त्रीकरण', source: 'NCERT राजनीति विज्ञान' },
      { num: 8, id: 'pol-ch-8', hindi: 'पर्यावरण और प्राकृतिक संसाधन', english: 'Environment and Natural Resources', authorOrContext: 'रियो पृथ्वी सम्मेलन (1992), क्योटो प्रोटोकॉल, साझी संपदा संसाधन', source: 'NCERT राजनीति विज्ञान' },
      { num: 9, id: 'pol-ch-9', hindi: 'वैश्वीकरण', english: 'Globalisation', authorOrContext: 'वैश्वीकरण के राजनीतिक, आर्थिक व सांस्कृतिक प्रभाव एवं प्रतिरोध', source: 'NCERT राजनीति विज्ञान' },
      { num: 10, id: 'pol-ch-10', hindi: 'राष्ट्र-निर्माण की चुनौतियाँ', english: 'Challenges of Nation-Building', authorOrContext: 'विभाजन की विभीषिका, देशी रियासतों का विलय (सरदार पटेल), राज्य पुनर्गठन आयोग', source: 'NCERT राजनीति विज्ञान' },
      { num: 11, id: 'pol-ch-11', hindi: 'एक दल के प्रभुत्व का दौर', english: 'Era of One-Party Dominance', authorOrContext: 'प्रथम तीन आम चुनाव (1952, 1957, 1962), कांग्रेस पार्टी की प्रकृति, विपक्षी दल', source: 'NCERT राजनीति विज्ञान' },
      { num: 12, id: 'pol-ch-12', hindi: 'नियोजित विकास की राजनीति', english: 'Politics of Planned Development', authorOrContext: 'योजना आयोग, पंचवर्षीय योजनाएं, बॉम्बे प्लान, हरित क्रांति', source: 'NCERT राजनीति विज्ञान' },
      { num: 13, id: 'pol-ch-13', hindi: 'भारत के विदेश संबंध', english: 'India’s External Relations', authorOrContext: 'पंचशील सिद्धांत (1954), 1962 भारत-चीन युद्ध, 1965 व 1971 भारत-पाक युद्ध, परमाणु नीति', source: 'NCERT राजनीति विज्ञान' },
      { num: 14, id: 'pol-ch-14', hindi: 'कांग्रेस प्रणाली: चुनौतियाँ और पुनर्स्थापना', english: 'Challenges to & Restoration of Congress System', authorOrContext: 'नेहरू के बाद शास्त्री व इंदिरा गांधी, 1967 चुनाव सिंडिकेट, 1971 का चुनाव व गरीबी हटाओ', source: 'NCERT राजनीति विज्ञान' },
      { num: 15, id: 'pol-ch-15', hindi: 'लोकतांत्रिक व्यवस्था का संकट', english: 'Crisis of the Democratic Order', authorOrContext: 'गुजरात व बिहार छात्र आंदोलन (जेपी), 25 जून 1975 का आपातकाल, 1977 चुनाव', source: 'NCERT राजनीति विज्ञान' },
      { num: 16, id: 'pol-ch-16', hindi: 'जन आंदोलनों का उदय एवं भारतीय राजनीति: नए बदलाव', english: 'Rise of Popular Movements & Recent Developments', authorOrContext: 'चिपको आंदोलन, नर्मदा बचाओ आंदोलन, गठबंधन सरकारें, मंडल आयोग', source: 'NCERT राजनीति विज्ञान' }
    ])
  },

  // 10. ECONOMICS (12 Chapters - Micro & Macro NCERT / BSEB)
  {
    id: 'economics',
    nameEnglish: 'Economics',
    nameHindi: 'अर्थशास्त्र (100 अंक)',
    code: '219 / 326',
    stream: ['arts', 'commerce'],
    iconName: 'TrendingUp',
    color: 'emerald',
    bookName: 'व्यष्टि एवं समष्टि अर्थशास्त्र (NCERT)',
    totalChapters: 12,
    chapters: buildChapters('economics', 'NCERT अर्थशास्त्र कक्षा 12', [
      { num: 1, id: 'eco-ch-1', hindi: 'व्यष्टि अर्थशास्त्र: एक परिचय', english: 'Introduction to Microeconomics', authorOrContext: 'केंद्रीय समस्याएं (क्या, कैसे, किसके लिए), उत्पादन संभावना वक्र (PPC)', source: 'NCERT अर्थशास्त्र' },
      { num: 2, id: 'eco-ch-2', hindi: 'उपभोक्ता के व्यवहार का सिद्धांत', english: 'Theory of Consumer Behaviour', authorOrContext: 'सीमांत उपयोगिता ह्रास नियम, तटस्थता वक्र (Indifference Curve), मांग की लोच', source: 'NCERT अर्थशास्त्र' },
      { num: 3, id: 'eco-ch-3', hindi: 'उत्पादन तथा लागत', english: 'Production and Costs', authorOrContext: 'परिवर्ती अनुपातों का नियम, अल्पकालीन व दीर्घकालीन लागतें (TC, AC, MC)', source: 'NCERT अर्थशास्त्र' },
      { num: 4, id: 'eco-ch-4', hindi: 'पूर्ण प्रतिस्पर्धा की स्थिति में फर्म का सिद्धांत', english: 'Theory of Firm Under Perfect Competition', authorOrContext: 'पूर्ण प्रतियोगिता में लाभ अधिकतमीकरण (MR = MC), पूर्ति की लोच', source: 'NCERT अर्थशास्त्र' },
      { num: 5, id: 'eco-ch-5', hindi: 'बाजार संतुलन', english: 'Market Equilibrium', authorOrContext: 'संतुलन कीमत का निर्धारण, मांग व पूर्ति में परिवर्तन का प्रभाव, मूल्य सीमा व न्यूनतम समर्थन मूल्य', source: 'NCERT अर्थशास्त्र' },
      { num: 6, id: 'eco-ch-6', hindi: 'गैर-प्रतिस्पर्धी बाजार', english: 'Non-Competitive Markets', authorOrContext: 'एकाधिकार (Monopoly), एकाधिकारात्मक प्रतियोगिता एवं अल्पाधिकार के लक्षण', source: 'NCERT अर्थशास्त्र' },
      { num: 7, id: 'eco-ch-7', hindi: 'समष्टि अर्थशास्त्र: एक परिचय', english: 'Introduction to Macroeconomics', authorOrContext: 'समष्टि अर्थशास्त्र का उद्भव, जॉन मेनार्ड कीन्स (1936), पूंजीवादी अर्थव्यवस्था के क्षेत्रक', source: 'NCERT अर्थशास्त्र' },
      { num: 8, id: 'eco-ch-8', hindi: 'राष्ट्रीय आय का लेखांकन', english: 'National Income Accounting', authorOrContext: 'सकल घरेलू उत्पाद (GDP), GNP, NNP, साधन लागत, आय व व्यय विधियां', source: 'NCERT अर्थशास्त्र' },
      { num: 9, id: 'eco-ch-9', hindi: 'मुद्रा और बैंकिंग', english: 'Money and Banking', authorOrContext: 'मुद्रा के कार्य, केंद्रीय बैंक (RBI) के कार्य, साख नियंत्रण (CRR, SLR, रेपो रेट)', source: 'NCERT अर्थशास्त्र' },
      { num: 10, id: 'eco-ch-10', hindi: 'आय और रोजगार का निर्धारण', english: 'Determination of Income and Employment', authorOrContext: 'समग्र मांग व समग्र पूर्ति, उपभोग फलन (MPC, MPS), निवेश गुणक', source: 'NCERT अर्थशास्त्र' },
      { num: 11, id: 'eco-ch-11', hindi: 'सरकारी बजट और अर्थव्यवस्था', english: 'Government Budget & the Economy', authorOrContext: 'बजट के घटक, राजस्व एवं पूंजीगत प्राप्तियां व व्यय, राजकोषीय घाटा', source: 'NCERT अर्थशास्त्र' },
      { num: 12, id: 'eco-ch-12', hindi: 'खुली अर्थव्यवस्था समष्टि अर्थशास्त्र', english: 'Open Economy Macroeconomics', authorOrContext: 'भुगतान संतुलन (Balance of Payments), विदेशी विनिमय दर (स्थिर व लचीली)', source: 'NCERT अर्थशास्त्र' }
    ])
  },

  // 11. ACCOUNTANCY (10 Chapters - Partnership & Company Accounts)
  {
    id: 'accountancy',
    nameEnglish: 'Accountancy',
    nameHindi: 'लेखाशास्त्र (100 अंक)',
    code: '217',
    stream: ['commerce'],
    iconName: 'FileSpreadsheet',
    color: 'sky',
    bookName: 'लेखाशास्त्र भाग 1 व 2 (BSTBPC / NCERT)',
    totalChapters: 10,
    chapters: buildChapters('accountancy', 'NCERT लेखाशास्त्र कक्षा 12', [
      { num: 1, id: 'acc-ch-1', hindi: 'साझेदारी लेखांकन: आधारभूत अवधारणाएं', english: 'Accounting for Partnership: Basic Concepts', authorOrContext: 'साझेदारी संलेख, लाभ-हानि नियोजन खाता, साझेदारों के पूंजी खाते', source: 'NCERT लेखाशास्त्र' },
      { num: 2, id: 'acc-ch-2', hindi: 'साझेदारी फर्म का पुनर्गठन: साझेदार का प्रवेश', english: 'Reconstitution of Partnership: Admission', authorOrContext: 'त्याग अनुपात (Sacrificing Ratio), ख्याति का मूल्यांकन, पुनर्मूल्यांकन खाता', source: 'NCERT लेखाशास्त्र' },
      { num: 3, id: 'acc-ch-3', hindi: 'साझेदार का अवकाश ग्रहण एवं मृत्यु', english: 'Retirement and Death of a Partner', authorOrContext: 'नया लाभ विभाजन अनुपात, प्राप्ति अनुपात (Gaining Ratio), संचित लाभों का बंटवारा', source: 'NCERT लेखाशास्त्र' },
      { num: 4, id: 'acc-ch-4', hindi: 'साझेदारी फर्म का विघटन', english: 'Dissolution of a Partnership Firm', authorOrContext: 'वसूली खाता (Realization Account), संपत्तियों की बिक्री एवं दायित्वों का भुगतान', source: 'NCERT लेखाशास्त्र' },
      { num: 5, id: 'acc-ch-5', hindi: 'अंशपूंजी के लिए लेखांकन', english: 'Accounting for Share Capital', authorOrContext: 'समता अंश, अधिमान अंश, अंशों का निर्गमन, अग्रिम व अवशिष्ट याचना, अंशों का हरण', source: 'NCERT लेखाशास्त्र' },
      { num: 6, id: 'acc-ch-6', hindi: 'ऋणपत्रों का निर्गमन एवं मोचन', english: 'Issue and Redemption of Debentures', authorOrContext: 'सममूल्य, प्रीमियम व कटौती पर ऋणपत्र निर्गमन, संपार्श्विक प्रतिभूति के रूप में', source: 'NCERT लेखाशास्त्र' },
      { num: 7, id: 'acc-ch-7', hindi: 'कंपनी के वित्तीय विवरण', english: 'Financial Statements of a Company', authorOrContext: 'कंपनी अधिनियम 2013 की अनुसूची III अनुसार स्थिति विवरण (Balance Sheet) व लाभ-हानि', source: 'NCERT लेखाशास्त्र' },
      { num: 8, id: 'acc-ch-8', hindi: 'वित्तीय विवरणों का विश्लेषण', english: 'Analysis of Financial Statements', authorOrContext: 'तुलनात्मक वित्तीय विवरण एवं सम-आकार वित्तीय विवरण (Comparative & Common Size)', source: 'NCERT लेखाशास्त्र' },
      { num: 9, id: 'acc-ch-9', hindi: 'लेखांकन अनुपात', english: 'Accounting Ratios', authorOrContext: 'तरलता अनुपात (चालू अनुपात), शोधन क्षमता अनुपात, क्रियाशीलता व लाभदायकता अनुपात', source: 'NCERT लेखाशास्त्र' },
      { num: 10, id: 'acc-ch-10', hindi: 'रोकड़ प्रवाह विवरण', english: 'Cash Flow Statement', authorOrContext: 'AS-3 के अनुसार परिचालन, निवेश एवं वित्तीय क्रियाओं से रोकड़ प्रवाह', source: 'NCERT लेखाशास्त्र' }
    ])
  },

  // 12. BUSINESS STUDIES (12 Chapters - Management & Finance)
  {
    id: 'business-studies',
    nameEnglish: 'Business Studies',
    nameHindi: 'व्यवसाय अध्ययन (100 अंक)',
    code: '218',
    stream: ['commerce'],
    iconName: 'Briefcase',
    color: 'amber',
    bookName: 'प्रबंध के सिद्धांत एवं कार्य (BSTBPC / NCERT)',
    totalChapters: 12,
    chapters: buildChapters('business-studies', 'NCERT व्यवसाय अध्ययन कक्षा 12', [
      { num: 1, id: 'bst-ch-1', hindi: 'प्रबंध की प्रकृति एवं महत्व', english: 'Nature & Significance of Management', authorOrContext: 'प्रबंध एक कला, विज्ञान व पेशा, प्रबंध के स्तर, समन्वय (प्रबंध का सार)', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 2, id: 'bst-ch-2', hindi: 'प्रबंध के सिद्धांत', english: 'Principles of Management', authorOrContext: 'हेनरी फेयोल के 14 सिद्धांत, एफ. डब्ल्यू. टेलर का वैज्ञानिक प्रबंध', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 3, id: 'bst-ch-3', hindi: 'व्यावसायिक पर्यावरण', english: 'Business Environment', authorOrContext: 'आर्थिक, सामाजिक, राजनीतिक, विधिक एवं तकनीकी आयाम, 1991 की नई आर्थिक नीति (LPG)', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 4, id: 'bst-ch-4', hindi: 'नियोजन', english: 'Planning', authorOrContext: 'नियोजन की विशेषताएं, प्रक्रिया, सीमाएं, नीतियां व रणनीतियां', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 5, id: 'bst-ch-5', hindi: 'संगठन', english: 'Organizing', authorOrContext: 'कार्यात्मक व प्रभागीय ढांचा, औपचारिक व अनौपचारिक संगठन, अधिकार अंतरण व विकेंद्रीकरण', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 6, id: 'bst-ch-6', hindi: 'नियुक्तिकरण', english: 'Staffing', authorOrContext: 'भर्ती के आंतरिक व बाह्य स्रोत, चयन प्रक्रिया, प्रशिक्षण एवं विकास', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 7, id: 'bst-ch-7', hindi: 'निर्देशन', english: 'Directing', authorOrContext: 'पर्यवेक्षण, अभिप्रेरणा (मास्लो का आवश्यकता पदानुक्रम सिद्धांत), नेतृत्व शैलियां, संदेशवाहन', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 8, id: 'bst-ch-8', hindi: 'नियंत्रण', english: 'Controlling', authorOrContext: 'नियोजन एवं नियंत्रण का संबंध, नियंत्रण प्रक्रिया, महत्वपूर्ण बिंदु नियंत्रण', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 9, id: 'bst-ch-9', hindi: 'वित्तीय प्रबंध', english: 'Financial Management', authorOrContext: 'वित्तीय निर्णय (निवेश, वित्तीयन व लाभांश निर्णय), कार्यशील पूंजी व स्थायी पूंजी', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 10, id: 'bst-ch-10', hindi: 'वित्तीय बाजार', english: 'Financial Markets', authorOrContext: 'मुद्रा बाजार (ट्रेजरी बिल, वाणिज्यिक पत्र), पूंजी बाजार (प्राथमिक व द्वितीयक), सेबी (SEBI)', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 11, id: 'bst-ch-11', hindi: 'विपणन प्रबंध', english: 'Marketing Management', authorOrContext: 'विपणन मिश्रण (4Ps: उत्पाद, मूल्य, स्थान, संवर्धन), ब्रांडिंग, पैकेजिंग, विज्ञापन', source: 'NCERT व्यवसाय अध्ययन' },
      { num: 12, id: 'bst-ch-12', hindi: 'उपभोक्ता संरक्षण', english: 'Consumer Protection', authorOrContext: 'उपभोक्ता संरक्षण अधिनियम 2019, उपभोक्ता के 6 अधिकार, त्रि-स्तरीय शिकायत निवारण तंत्र', source: 'NCERT व्यवसाय अध्ययन' }
    ])
  }
];
