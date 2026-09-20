import { CourseChapter } from "./types";

export const CHAPTER_1: CourseChapter = {
  id: 1,
  number: 1,
  title: "Foundational English & Phonetics",
  description: "Master the building blocks of the English language: phonemic sounds, syllable stress, natural linking, and foundational spoken expressions.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch1-l1",
      chapterId: 1,
      lessonNumber: 1,
      title: "The Alphabet, Vowels, and Consonants",
      tagline: "Unlocking the 26 letters and their 44 distinct sounds.",
      objectives: [
        "Distinguish between standard graphemes and phonemes.",
        "Recognize the 5 core vowels (A, E, I, O, U) and the 21 consonants.",
        "Understand vocal tract placement and air obstruction."
      ],
      introduction: "The English alphabet comprises 26 letters, but these letters generate approximately 44 unique speech sounds (phonemes). Developing precise spoken English requires understanding that spelling and sound frequently diverge.",
      deepExplanation: "In English, vowels are produced with an open vocal tract without audible friction, whereas consonants involve full or partial obstruction of airflow by the lips, teeth, tongue, or palate. While written English has only five primary vowel symbols, spoken English features short vowels, long vowels, and diphthongs. Recognizing this phonetic variation is the primary step toward speaking clear, natural English.",
      grammarMechanics: "Letters represent sounds. A vowel can stand alone as a syllable core, whereas consonants typically attach to a vowel nucleus to form phonetic clusters.",
      rules: [
        "Every standard English syllable must contain at least one vowel sound.",
        "The letter Y functions as a consonant at word beginnings (yard, yell) and as a vowel in intermediate or terminal positions (gym, fly, myth).",
        "Never assume English words sound identical to their spelling; memorize phonemic pronunciation.",
        "Vowels are always voiced (the vocal cords vibrate during production).",
        "Consonants can be voiced (like /b/, /d/, /g/) or unvoiced/voiceless (like /p/, /t/, /k/)."
      ],
      formula: "Word = [Optional Consonant Onset] + [Vowel Nucleus] + [Optional Consonant Coda]",
      formulaBreakdown: "Example: 'Cat' = /k/ (Onset) + /æ/ (Nucleus) + /t/ (Coda). 'Art' = /ɑː/ (Nucleus) + /t/ (Coda).",
      examples: [
        { sentence: "An apple fell from the tall tree.", contextOrBreakdown: "Demonstrates short vowel /æ/ in 'apple' and consonant cluster /tr/ in 'tree'." },
        { sentence: "Every student must practice English daily.", contextOrBreakdown: "Shows vowel variation across 'every' and open dipthong in 'daily'." },
        { sentence: "He observed the quiet rhythm of the ocean.", contextOrBreakdown: "Illustrates the vowel sound of Y in 'rhythm' and silent letter structures." },
        { sentence: "Vowels allow our voice to resonate with clarity.", contextOrBreakdown: "Notice how vocal cords continuously vibrate when pronouncing vowel sounds." }
      ],
      wordMeanings: [
        { word: "Phoneme", partOfSpeech: "noun", definition: "The smallest distinct unit of sound in a language.", exampleSentence: "The word 'ship' contains three phonemes: /ʃ/, /ɪ/, and /p/." },
        { word: "Grapheme", partOfSpeech: "noun", definition: "A written letter or group of letters that represents a sound.", exampleSentence: "The letters 'ea' form a single grapheme in the word 'meat'." },
        { word: "Articulation", partOfSpeech: "noun", definition: "The physical formation of clear, distinct sounds in speech.", exampleSentence: "Clear articulation is critical when speaking to an international audience." },
        { word: "Resonance", partOfSpeech: "noun", definition: "The quality in a sound of being deep, full, and reverberating.", exampleSentence: "Vowel sounds achieve acoustic resonance in the oral cavity." }
      ],
      spokenUsageTips: [
        "Keep your jaw relaxed when producing open vowels like /ɑː/ (car) and /æ/ (hat).",
        "Place two fingers gently on your throat to feel vocal cord vibration during voiced consonants."
      ],
      commonMistakes: [
        { incorrect: "English words are always pronounced exactly as they are spelled.", correct: "English spelling is not strictly phonetic; one must learn phonetic transcription.", explanation: "Due to historical sound shifts, English retains archaic spellings for evolving sounds." }
      ],
      practiceQuiz: [
        {
          question: "How many speech sounds (phonemes) roughly exist in the English language?",
          options: ["26", "32", "44", "52"],
          answer: "44",
          explanation: "The English alphabet has 26 letters that combine to create approximately 44 individual phonemes."
        }
      ],
      dialogue: [
        { speaker: "Liam", text: "Why does the letter 'C' sound like an 'S' in 'city' but like a 'K' in 'cat'?" },
        { speaker: "Dr. Evans", text: "Because English adopted historical spelling conventions. When 'C' precedes 'E', 'I', or 'Y', it regularly softens to an /s/ sound." }
      ],
      quickSummary: [
        "26 letters generate approximately 44 sounds.",
        "Vowels supply acoustic vocal energy; consonants provide structural definition.",
        "Phonetic awareness eliminates pronunciation guesswork."
      ]
    },
    {
      id: "ch1-l2",
      chapterId: 1,
      lessonNumber: 2,
      title: "Short and Long Vowel Sounds",
      tagline: "Differentiating minimal pairs through duration and tongue position.",
      objectives: [
        "Differentiate short vowel sounds (/æ/, /e/, /ɪ/, /ɒ/, /ʌ/) from long vowel sounds (/eɪ/, /iː/, /aɪ/, /əʊ/, /uː/).",
        "Recognize how the silent 'magic E' shifts vowel length.",
        "Pronounce minimal pairs with confidence."
      ],
      introduction: "Vowel duration and tongue height determine the exact meaning of words. Confusing a short vowel with a long vowel can change 'ship' into 'sheep' or 'bit' into 'bite'.",
      deepExplanation: "Short vowels are produced quickly with the vocal tract in a relaxed or centralized posture. Long vowels require either prolonged vocalization at a stable point of articulation or a glide into another vowel position (diphthong). The classic 'Silent E' rule in English commonly signals that the preceding vowel retains its alphabetical, elongated pronunciation.",
      grammarMechanics: "Pattern: CVC (Consonant-Vowel-Consonant) produces a short vowel (hop, bit). CVCe produces a long vowel (hope, bite).",
      rules: [
        "In closed single syllables ending in a consonant, the vowel is typically short (cat, bed, pin, rot, cut).",
        "Adding an unpronounced terminal 'e' generally makes the previous vowel long (cane, bite, robe, cube).",
        "Do not substitute the tense long /iː/ for the lax short /ɪ/.",
        "Long vowels require greater muscular tension in the tongue and lips than short vowels."
      ],
      formula: "CVC = Short Vowel | CVC + e = Long Vowel",
      formulaBreakdown: "Hat (/hæt/) -> Hate (/heɪt/) | Kit (/kɪt/) -> Kite (/kaɪt/) | Not (/nɒt/) -> Note (/nəʊt/).",
      examples: [
        { sentence: "The big ship sailed across the blue ocean, while sheep grazed on the hill.", contextOrBreakdown: "Contrasts short /ɪ/ in 'ship' with long /iː/ in 'sheep'." },
        { sentence: "He took a small bit of bread before taking a bite of the steak.", contextOrBreakdown: "Contrasts short /ɪ/ in 'bit' with diphthong /aɪ/ in 'bite'." },
        { sentence: "Please sit in this comfortable seat.", contextOrBreakdown: "Contrasts short /ɪ/ in 'sit' with tense /iː/ in 'seat'." }
      ],
      wordMeanings: [
        { word: "Minimal Pair", partOfSpeech: "noun", definition: "Two words that differ in only one phonological element and have distinct meanings.", exampleSentence: "'Pin' and 'pen' constitute a classic minimal pair in English." },
        { word: "Diphthong", partOfSpeech: "noun", definition: "A complex vowel sound that glides from one vocalic position to another.", exampleSentence: "The sound /oʊ/ in 'boat' is a diphthong." },
        { word: "Tension", partOfSpeech: "noun", definition: "Muscular tightness or constriction in the vocal organs.", exampleSentence: "Long vowels require heightened muscular tension in the tongue." }
      ],
      spokenUsageTips: [
        "To pronounce /ɪ/ (sit), relax your mouth completely; for /iː/ (seat), pull the corners of your lips back into a slight smile.",
        "Record yourself reciting minimal pairs and listen back to ensure distinct vowel length."
      ],
      commonMistakes: [
        { incorrect: "He is living on that ship with his sheeps.", correct: "He is living on that ship with his sheep.", explanation: "'Sheep' has an irregular plural form and utilizes the long /iː/ vowel sound." }
      ],
      practiceQuiz: [
        {
          question: "Which word features a long vowel sound?",
          options: ["Tap", "Hop", "Plane", "Mud"],
          answer: "Plane",
          explanation: "'Plane' contains the long /eɪ/ vowel sound produced by the silent 'e' marker."
        }
      ],
      dialogue: [
        { speaker: "Maria", text: "Did you say you want to leave or live here?" },
        { speaker: "Ethan", text: "I want to live (/lɪv/) here temporarily, and then leave (/liːv/) tomorrow afternoon." }
      ],
      quickSummary: [
        "Vowel length changes word definitions drastically.",
        "Short vowels are relaxed; long vowels are tense or gliding.",
        "Master the CVC vs CVCe structural contrast."
      ]
    },
    {
      id: "ch1-l3",
      chapterId: 1,
      lessonNumber: 3,
      title: "Consonant Blends and Digraphs",
      tagline: "Distinguishing combined sounds from merged single sounds.",
      objectives: [
        "Differentiate consonant blends (bl, cr, st, spl) from digraphs (sh, ch, th, ph).",
        "Master the voiced and unvoiced 'th' sounds (/θ/ and /ð/).",
        "Smoothly pronounce initial, medial, and final consonant clusters."
      ],
      introduction: "When consonants appear side-by-side, they either preserve their individual sounds in a blend or merge to forge an entirely new sound called a digraph.",
      deepExplanation: "In a consonant blend (such as 'st' in 'stop' or 'br' in 'bread'), every individual consonant sound remains audible. Conversely, in a digraph (such as 'ch' in 'chair' or 'sh' in 'shadow'), two letters fuse to produce one distinct sound. The English 'th' digraph is particularly important because it generates two variants: voiceless /θ/ (think, bath) and voiced /ð/ (this, mother).",
      grammarMechanics: "Blend: C1 + C2 = Sound 1 + Sound 2. Digraph: C1 + C2 = Single New Sound 3.",
      rules: [
        "In blends, do not insert an unwanted neutral vowel /ə/ between consonants (say 'street', not 'suh-treet').",
        "The digraph 'ph' universally produces the /f/ sound (photograph, philosophy).",
        "The digraph 'th' is voiceless in content words (think, thought, thunder) and voiced in grammatical function words (the, this, that, then, they).",
        "Digraph 'sh' is continuous, whereas digraph 'ch' is an affricate beginning with a sudden stop."
      ],
      formula: "Blend: A + B -> [A][B] | Digraph: A + B -> [C]",
      formulaBreakdown: "'Climb' = /k/ + /l/ blend. 'Check' = /tʃ/ digraph.",
      examples: [
        { sentence: "Three enthusiastic athletes sprinted through the street.", contextOrBreakdown: "Features voiceless /θ/ in 'three', /spr/ triple blend in 'sprinted', and /str/ blend in 'street'." },
        { sentence: "These brothers think that their mother is thoughtful.", contextOrBreakdown: "Contrasts voiced /ð/ ('these', 'brothers', 'that', 'their', 'mother') with voiceless /θ/ ('think', 'thoughtful')." },
        { sentence: "The bright flashlight illuminated the dark hallway.", contextOrBreakdown: "Contains blends /br/ and /fl/ alongside digraph /sh/." }
      ],
      wordMeanings: [
        { word: "Digraph", partOfSpeech: "noun", definition: "A pair of characters used together to represent a single sound.", exampleSentence: "The letters 'ch' in 'chest' form a digraph." },
        { word: "Affricate", partOfSpeech: "noun", definition: "A complex speech sound consisting of a stop followed immediately by a fricative.", exampleSentence: "The sound /tʃ/ in 'church' is a voiceless affricate." },
        { word: "Voiceless", partOfSpeech: "adjective", definition: "Produced without vibration of the vocal cords.", exampleSentence: "The /s/ sound is voiceless, while the /z/ sound is voiced." }
      ],
      spokenUsageTips: [
        "For the 'th' sound, gently place the tip of your tongue between your upper and lower teeth. Do not substitute 's', 'z', 't', or 'd'.",
        "Practice triple consonant clusters (str-, spr-, spl-) without pausing between the letters."
      ],
      commonMistakes: [
        { incorrect: "I sink that is correct.", correct: "I think that is correct.", explanation: "Substituting /s/ for voiceless /θ/ changes 'think' into 'sink'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following contains a consonant digraph rather than a blend?",
          options: ["Breeze", "Street", "Shadow", "Plastic"],
          answer: "Shadow",
          explanation: "'Sh' is a digraph that creates the single sound /ʃ/, whereas the others contain audible blends."
        }
      ],
      dialogue: [
        { speaker: "Nora", text: "Is the 'th' in 'breathe' the same as in 'breath'?" },
        { speaker: "Teacher", text: "No, 'breath' (noun) ends in voiceless /θ/, while 'breathe' (verb) ends in voiced /ð/." }
      ],
      quickSummary: [
        "Blends retain individual consonant sounds (cl, gr, sp).",
        "Digraphs fuse into one brand-new sound (th, sh, ch, ph).",
        "Voiced 'th' vibrates the throat; voiceless 'th' expels unvoiced air."
      ]
    },
    {
      id: "ch1-l4",
      chapterId: 1,
      lessonNumber: 4,
      title: "Silent Letters and Pronunciation Traps",
      tagline: "Navigating historical English spelling and silent consonant patterns.",
      objectives: [
        "Identify predictable silent letter patterns (silent k, w, b, l, g, h).",
        "Avoid common pronunciation pitfalls in everyday vocabulary.",
        "Articulate words with unpronounced consonants effortlessly."
      ],
      introduction: "Modern English preserves ancient Germanic, French, and Latin spellings long after their phonetic pronunciation disappeared. As a result, many written letters are completely silent.",
      deepExplanation: "Silent letters are letters that appear in the written representation of a word but do not correspond to any acoustic sound during natural speech. Rather than being arbitrary anomalies, silent letters usually reflect historical etymology (e.g., the 'k' in 'knee' was voiced in Old English) or signify vowel length (such as the silent 'e'). Recognizing silent consonant clusters prevents foreign accent distortions and reinforces clear diction.",
      grammarMechanics: "Predictable silent patterns: kn- (/n/), wr- (/r/), -mb (/m/), -bt (/t/), -lm (/m/), -gn (/n/).",
      rules: [
        "Initial 'K' before 'N' is always silent (knife, know, knight, knee).",
        "Initial 'W' before 'R' is always silent (write, wrong, wrist, wrap).",
        "Terminal 'B' after 'M' in a root syllable is silent (comb, thumb, climb, bomb, lamb).",
        "The letter 'B' before 'T' is silent in common Latinate derivatives (debt, doubt, subtle).",
        "The letter 'L' before 'K', 'M', or 'F' is frequently silent (walk, talk, calm, palm, half, calf)."
      ],
      formula: "Written Letter Present + Phonetic Value Zero = Silent Letter",
      formulaBreakdown: "'Doubt' = /daʊt/ (b is silent). 'Knight' = /naɪt/ (k and gh are silent).",
      examples: [
        { sentence: "The knight climbed the subtle mountain ridge with his bare hands.", contextOrBreakdown: "Silent 'k' and 'gh' in 'knight', silent 'b' in 'climbed', and silent 'b' in 'subtle'." },
        { sentence: "He wrote a calm note about the honest plumber.", contextOrBreakdown: "Silent 'w' in 'wrote', silent 'l' in 'calm', silent 'h' in 'honest', and silent 'b' in 'plumber'." },
        { sentence: "Do you know who designed this foreign castle?", contextOrBreakdown: "Silent 'k' in 'know', silent 'g' in 'designed' and 'foreign', and silent 't' in 'castle'." }
      ],
      wordMeanings: [
        { word: "Etymology", partOfSpeech: "noun", definition: "The study of the origin of words and the historical evolution of their grammatical forms.", exampleSentence: "Understanding word etymology explains why 'island' contains a silent 's'." },
        { word: "Subtle", partOfSpeech: "adjective", definition: "So delicate or precise as to be difficult to analyze or describe.", exampleSentence: "There is a subtle distinction between the two vowels." },
        { word: "Debtor", partOfSpeech: "noun", definition: "A person or entity that owes money.", exampleSentence: "The debtor repaid his obligation in full." }
      ],
      spokenUsageTips: [
        "Never pronounce the 'b' in 'debt' or 'doubt'; say /dɛt/ and /daʊt/.",
        "In 'receipt', the 'p' is silent: pronounce it /rɪˈsiːt/."
      ],
      commonMistakes: [
        { incorrect: "I will climb-b the mountain and walk-l today.", correct: "I will climb (/klaɪm/) the mountain and walk (/wɔːk/) today.", explanation: "The terminal 'b' in climb and the internal 'l' in walk are completely unpronounced." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following words contains a silent 'p'?",
          options: ["Paper", "Psychology", "Practice", "Pillar"],
          answer: "Psychology",
          explanation: "In words of Greek origin starting with 'ps-', the 'p' is silent (psychology, psychiatrist)."
        }
      ],
      dialogue: [
        { speaker: "Grace", text: "Should I pronounce the 't' in 'often' and 'fasten'?" },
        { speaker: "Arthur", text: "In 'fasten', the 't' is strictly silent (/ˈfæs.ən/). In 'often', while some pronounce the 't', omitting it (/ˈɒf.ən/) is the most traditional standard." }
      ],
      quickSummary: [
        "Silent letters are historical artifacts preserved in spelling.",
        "Common silent clusters: kn-, wr-, -mb, -bt, and -lk.",
        "Identify and eliminate extraneous consonant sounds for clean pronunciation."
      ]
    },
    {
      id: "ch1-l5",
      chapterId: 1,
      lessonNumber: 5,
      title: "Syllable Division and Word Stress",
      tagline: "Mastering the rhythm of multi-syllabic words through acoustic prominence.",
      objectives: [
        "Count and divide words into phonetic syllables.",
        "Identify primary stress, secondary stress, and unstressed syllables.",
        "Understand stress shifts between nouns and verbs."
      ],
      introduction: "English is a stress-timed language. Applying stress to the incorrect syllable makes words unintelligible to native speakers even if every individual sound is pronounced accurately.",
      deepExplanation: "Every English word spoken in isolation possesses one primary stressed syllable. A stressed syllable is pronounced longer in duration, louder in volume, and higher in vocal pitch. Unstressed syllables frequently reduce to the neutral schwa sound (/ə/). Additionally, numerous two-syllable homographs shift stress depending on whether they serve as nouns (first-syllable stress) or verbs (second-syllable stress).",
      grammarMechanics: "Two-syllable words: Nouns/Adjectives usually stressed on Syllable 1 (PRE-sent, OB-ject). Verbs stressed on Syllable 2 (pre-SENT, ob-JECT).",
      rules: [
        "Only vowels (syllable nuclei) receive stress, never isolated consonants.",
        "Prefixes and suffixes are rarely the locus of primary stress.",
        "Words ending in '-tion', '-sion', or '-ic' place primary stress on the penultimate (second-to-last) syllable.",
        "Words ending in '-cy', '-ty', '-phy', or '-gy' place primary stress on the antepenultimate (third-from-last) syllable."
      ],
      formula: "Word = [Stressed Syllable (Higher Pitch + Longer Duration)] + [Unstressed Syllable (Schwa /ə/)]",
      formulaBreakdown: "PHO-to-graph (Noun) vs pho-TO-gra-phy (Noun) vs pho-to-GRA-phic (Adjective).",
      examples: [
        { sentence: "The company will present a valuable present to the director.", contextOrBreakdown: "First 'present' is a verb (/prɪˈzɛnt/); second 'present' is a noun (/ˈprɛz.ənt/)." },
        { sentence: "They recorded a new record in the studio.", contextOrBreakdown: "'Recorded' stresses syllable two (/rɪˈkɔːrd/); 'record' stresses syllable one (/ˈrɛk.ərd/)." },
        { sentence: "She has an extraordinary imagination.", contextOrBreakdown: "'Imagination' stresses the fourth syllable (-NA-tion: /ɪˌmædʒ.ɪˈneɪ.ʃən/)." }
      ],
      wordMeanings: [
        { word: "Schwa", partOfSpeech: "noun", definition: "The mid-central unrounded vowel sound /ə/, representing the most common unstressed vowel in English.", exampleSentence: "The first syllable in 'about' is pronounced as a schwa." },
        { word: "Penultimate", partOfSpeech: "adjective", definition: "Second to last in a series.", exampleSentence: "Words ending in '-ic' typically carry stress on the penultimate syllable." },
        { word: "Homograph", partOfSpeech: "noun", definition: "A word that shares the same written form as another word but has a different meaning and often different pronunciation.", exampleSentence: "'Produce' (vegetables) and 'produce' (to create) are homographs." }
      ],
      spokenUsageTips: [
        "Exaggerate the volume and stretch the vowel duration of the stressed syllable when practicing.",
        "Never pronounce all syllables with identical weight; English requires contrasting peaks and valleys."
      ],
      commonMistakes: [
        { incorrect: "I bought a new RE-CORD of music yesterday.", correct: "I bought a new REC-ord (/ˈrɛk.ərd/) of music yesterday.", explanation: "As a noun, 'record' must receive primary stress on the initial syllable." }
      ],
      practiceQuiz: [
        {
          question: "Where is the primary stress in the word 'economic'?",
          options: ["First syllable: EC-o-nom-ic", "Second syllable: ec-O-nom-ic", "Third syllable: ec-o-NOM-ic", "Fourth syllable: ec-o-nom-IC"],
          answer: "Third syllable: ec-o-NOM-ic",
          explanation: "Words ending in the suffix '-ic' consistently place primary stress on the preceding syllable."
        }
      ],
      dialogue: [
        { speaker: "Julian", text: "Why did he say 'I ob-JECT to this OB-ject'?" },
        { speaker: "Dr. Kelly", text: "Because 'object' as a verb is stressed on the second syllable, but 'object' as a noun is stressed on the first." }
      ],
      quickSummary: [
        "Stressed syllables are louder, longer, and higher in pitch.",
        "Unstressed syllables compress into the schwa sound (/ə/).",
        "Noun/Verb pairs shift stress to indicate grammatical category."
      ]
    },
    {
      id: "ch1-l6",
      chapterId: 1,
      lessonNumber: 6,
      title: "Sentence Rhythm, Linking, and Intonation",
      tagline: "Unlocking native musicality through connected speech and vocal pitch contours.",
      objectives: [
        "Distinguish between content words and function words in sentence rhythm.",
        "Execute consonant-to-vowel and vowel-to-vowel linking smoothly.",
        "Apply rising and falling intonation contours correctly."
      ],
      introduction: "Spoken English does not occur as isolated words separated by pauses; words blend into continuous streams of sound shaped by dynamic musical intonation.",
      deepExplanation: "In spoken English sentences, speakers emphasize 'content words' (nouns, main verbs, adjectives, adverbs) while compressing 'structure/function words' (articles, auxiliary verbs, prepositions, pronouns). Furthermore, fluent speech employs 'linking' (catenation)—connecting the final consonant of one word to the initial vowel of the next (e.g., 'hold on' sounds like 'hol-don'). Pitch contours (intonation) communicate attitudes, statements, and inquiry types.",
      grammarMechanics: "Content words = Stressed & Clear. Function words = Reduced & Linked. Statements = Falling Pitch (↘). Yes/No Questions = Rising Pitch (↗).",
      rules: [
        "Connect final consonants to following initial vowels ('pick it up' -> /pɪ-kɪ-tʌp/).",
        "When a word ending in a vowel meets a word beginning with a vowel, insert a subtle glide (/w/ or /j/).",
        "Use falling intonation for definitive statements and Wh- questions (who, what, where, why, how).",
        "Use rising intonation for standard Yes/No verification questions.",
        "Do not pause between words within the same syntactic thought group."
      ],
      formula: "Sentence Stream = (Stressed Content Words) + (Compressed Linked Function Words)",
      formulaBreakdown: "'I want an apple' -> /aɪ ˈwɒnt ən ˈæp.əl/ -> 'an apple' links as 'a-napple'.",
      examples: [
        { sentence: "Turn off the lights and lock the door.", contextOrBreakdown: "'Turn off' links as 'tur-noff'. Content words 'lights' and 'lock' are stressed; falling intonation on 'door'." },
        { sentence: "Are you coming to the conference tomorrow?", contextOrBreakdown: "Yes/No question; pitch rises noticeably on the final word 'tomorrow' (↗)." },
        { sentence: "Where did you leave your notebook?", contextOrBreakdown: "Wh- question; pitch begins high and falls on 'notebook' (↘)." }
      ],
      wordMeanings: [
        { word: "Catenation", partOfSpeech: "noun", definition: "The linking of the end sound of one word to the beginning sound of the next in continuous speech.", exampleSentence: "Catenation creates the illusion that native speakers speak without separating words." },
        { word: "Intonation", partOfSpeech: "noun", definition: "The rise and fall of the voice pitch when speaking.", exampleSentence: "Her rising intonation indicated she was asking a genuine question." },
        { word: "Content Word", partOfSpeech: "noun", definition: "A word that carries principal semantic meaning, such as a noun, verb, or adjective.", exampleSentence: "Content words are stressed to highlight important ideas." }
      ],
      spokenUsageTips: [
        "Say 'see it' with a subtle gliding /j/ sound between the vowels: 'see-(y)-it'.",
        "Say 'go out' with a subtle gliding /w/ sound: 'go-(w)-out'."
      ],
      commonMistakes: [
        { incorrect: "Speaking robotic words with equal pauses: I... want... to... go... to... the... store.", correct: "Connected speech: I wanna go to the store (with linked rhythm).", explanation: "Over-separating words disrupts the native cadence and sounds artificial." }
      ],
      practiceQuiz: [
        {
          question: "What intonation contour is typically applied to a standard Yes/No question?",
          options: ["Steeply falling intonation", "Rising intonation", "Flat monotone pitch", "Whispered cadence"],
          answer: "Rising intonation",
          explanation: "Yes/No questions end with a rising pitch contour to invite confirmation from the listener."
        }
      ],
      dialogue: [
        { speaker: "Hannah", text: "Did you turn it off?" },
        { speaker: "Marcus", text: "Yes, I turned it off right before leaving." }
      ],
      quickSummary: [
        "Link terminal consonants into subsequent initial vowels.",
        "Stress key content words; compress function words.",
        "Statements and Wh- questions fall; Yes/No inquiries rise."
      ]
    },
    {
      id: "ch1-l7",
      chapterId: 1,
      lessonNumber: 7,
      title: "Fundamental Greetings and Courtesies",
      tagline: "Navigating formal, informal, and professional social interactions.",
      objectives: [
        "Master formal vs informal greetings appropriate for diverse settings.",
        "Execute natural social pleasantries and closing expressions.",
        "Employ polite softening markers ('please', 'kindly', 'would you mind')."
      ],
      introduction: "First impressions hinge upon opening greetings and diplomatic pleasantries. Choosing the appropriate register sets the tone for respectful, professional, and friendly communication.",
      deepExplanation: "In English-speaking culture, greetings are categorized by social distance and register. While 'Good morning' or 'How do you do?' suits executive boardrooms and academic conferences, 'Hey, what's up?' or 'How's it going?' belongs strictly to informal peer circles. Furthermore, courtesy formulas such as 'Excuse me', 'Pardon me', and 'I appreciate your time' soften requests and demonstrate emotional intelligence.",
      grammarMechanics: "Formal Register: Modal + Subject + Polite Verb. Casual Register: Direct Elliptical Expression.",
      rules: [
        "Respond to 'How do you do?' formally with 'How do you do?' or 'A pleasure to meet you.'",
        "'How are you doing?' is generally an inquiry about well-being, requiring a concise positive answer ('I'm doing well, thank you; and you?').",
        "Never greet a senior executive or customer with overly colloquial slang unless invited to do so.",
        "Always follow an apology with corrective action or polite appreciation."
      ],
      formula: "Greeting + Name/Honorific + Polite Inquiring Follow-up",
      formulaBreakdown: "Formal: 'Good morning, Dr. Vance. How are you today?' Casual: 'Hey Maya! Good to see you.'",
      examples: [
        { sentence: "Good afternoon, Mr. Davis. It is a genuine pleasure to make your acquaintance.", contextOrBreakdown: "Formal business greeting with full honorific." },
        { sentence: "Could you possibly direct me to the main auditorium? Thank you so much.", contextOrBreakdown: "Polite indirect question softening the imperative." },
        { sentence: "Pardon my interruption, but I believe this document belongs to your department.", contextOrBreakdown: "Diplomatic interruption formula." }
      ],
      wordMeanings: [
        { word: "Honorific", partOfSpeech: "noun", definition: "A title or word expressing status, deference, or respect (e.g., Mr., Dr., Professor).", exampleSentence: "Always address clients with their preferred honorific." },
        { word: "Acquaintance", partOfSpeech: "noun", definition: "A person one knows slightly, but who is not a close friend.", exampleSentence: "I am delighted to make your acquaintance." },
        { word: "Register", partOfSpeech: "noun", definition: "A variety of language used for a particular purpose or in a particular social setting.", exampleSentence: "Shift into a formal register when corresponding with external auditors." }
      ],
      spokenUsageTips: [
        "Maintain friendly eye contact and a gentle smile when delivering initial greetings.",
        "Avoid over-explaining personal ailments when asked 'How are you?' in casual business settings."
      ],
      commonMistakes: [
        { incorrect: "What's up Mr. CEO? Give me the files.", correct: "Good morning, sir. Could you please provide the requested files?", explanation: "Inappropriate casual slang in executive environments breaches professional etiquette." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following represents the most formal and courteous greeting?",
          options: ["What's up buddy?", "Good morning, Dr. Harrison. It is a pleasure to meet you.", "Yo, how's it hanging?", "Hey there! Long time no see."],
          answer: "Good morning, Dr. Harrison. It is a pleasure to meet you.",
          explanation: "It features respectful address, proper title honorific, and polished phrasing."
        }
      ],
      dialogue: [
        { speaker: "Receptionist", text: "Good morning, welcome to Apex Holdings. How may I assist you today?" },
        { speaker: "Visitor", text: "Good morning. I have an appointment scheduled with Ms. Carter at ten o'clock." }
      ],
      quickSummary: [
        "Select greetings based on social register and context.",
        "Use polite modals to soften inquiries.",
        "Acknowledge others promptly with warm professional demeanor."
      ]
    },
    {
      id: "ch1-l8",
      chapterId: 1,
      lessonNumber: 8,
      title: "Introducing Yourself and Asking Questions",
      tagline: "Constructing memorable personal bios and asking structured inquiries.",
      objectives: [
        "Construct a concise, articulate 30-second professional self-introduction.",
        "Master the grammatical architecture of Open (Wh-) and Closed (Inverted) questions.",
        "Express background, profession, and personal interests fluently."
      ],
      introduction: "Articulating who you are and inquiring effectively about others constitutes the bedrock of networking, interviews, and interpersonal relationships.",
      deepExplanation: "A structured self-introduction follows a three-part framework: Current Role/Identity, Key Competency or Background, and Present Objective. To maintain dialogue, one must also construct accurate questions. Closed questions invert the auxiliary verb and subject (e.g., 'Do you work here?'), whereas open questions prefix an interrogative pronoun (e.g., 'Where do you work?').",
      grammarMechanics: "Closed: Auxiliary + Subject + Main Verb? Open: Wh- Word + Auxiliary + Subject + Main Verb?",
      rules: [
        "State your full name clearly without rushing ('My name is...', not 'Myself...').",
        "Never say 'Myself [Name]'; 'myself' is a reflexive pronoun, not a nominative subject.",
        "Invert the subject and auxiliary verb when formulating questions in standard English.",
        "Always maintain active listening when the counterpart answers your inquiry."
      ],
      formula: "Intro: Name + Profession/Role + Current Focus | Question: (Wh-) + Aux + Subj + Verb",
      formulaBreakdown: "'My name is Sarah; I manage commercial logistics, and I am excited to collaborate today.'",
      examples: [
        { sentence: "Hello everyone, my name is David Vance. I am a software architect specializing in distributed cloud computing.", contextOrBreakdown: "Crisp professional self-introduction." },
        { sentence: "Where did you complete your undergraduate degree?", contextOrBreakdown: "Open Wh- inquiry with past auxiliary 'did'." },
        { sentence: "Have you had an opportunity to review the quarterly agenda?", contextOrBreakdown: "Closed question using present perfect auxiliary 'have'." }
      ],
      wordMeanings: [
        { word: "Competency", partOfSpeech: "noun", definition: "The ability to do something successfully or efficiently.", exampleSentence: "Her core competency lies in cross-border negotiation." },
        { word: "Interrogative", partOfSpeech: "adjective", definition: "Having the form or force of a question.", exampleSentence: "The sentence contains an interrogative pronoun." },
        { word: "Elevator Pitch", partOfSpeech: "noun", definition: "A short, persuasive speech used to introduce oneself or a project within seconds.", exampleSentence: "He polished his elevator pitch before attending the career fair." }
      ],
      spokenUsageTips: [
        "Pause briefly after stating your name so listeners can register it clearly.",
        "Follow an introduction with an open question to invite reciprocal engagement."
      ],
      commonMistakes: [
        { incorrect: "Myself John, and I am working in finance.", correct: "My name is John, and I work in finance.", explanation: "'Myself' cannot function as the grammatical subject of an introduction." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence is grammatically correct for a self-introduction?",
          options: ["Myself Kevin from the marketing department.", "I am Kevin, and I manage our marketing operations.", "Me is Kevin working marketing.", "Myself is Kevin here."],
          answer: "I am Kevin, and I manage our marketing operations.",
          explanation: "'I am' uses the correct subject pronoun; 'myself' is incorrect here."
        }
      ],
      dialogue: [
        { speaker: "Rachel", text: "Good morning! My name is Rachel Foster. I lead product design at Innovatech." },
        { speaker: "David", text: "Pleasure to meet you, Rachel. What brings you to this year's symposium?" }
      ],
      quickSummary: [
        "Use 'My name is...' or 'I am...', never 'Myself...'.",
        "Formulate questions using the Auxiliary + Subject + Verb inversion pattern.",
        "Pair self-introductions with open questions to drive meaningful conversation."
      ]
    },
    {
      id: "ch1-l9",
      chapterId: 1,
      lessonNumber: 9,
      title: "Numbers, Dates, Times, and Quantities",
      tagline: "Communicating precise figures, calendar milestones, and chronological schedules.",
      objectives: [
        "Articulate cardinal (1, 2, 3) and ordinal (1st, 2nd, 3rd) numbers flawlessly.",
        "Read calendar dates in both British and American conventions.",
        "Express exact times, elapsed durations, and currency amounts accurately."
      ],
      introduction: "Ambiguity around numbers, times, and deadlines can cause significant professional errors. Mastering numerical precision ensures smooth coordination and scheduling.",
      deepExplanation: "Cardinal numbers quantify items ('three contracts'), whereas ordinal numbers sequence events ('the third quarter'). Dates differ in international style: British English writes Day/Month/Year and speaks 'the fourth of July', while American English writes Month/Day/Year and speaks 'July fourth'. Times utilize prepositions ('at 3:30 PM', 'in three hours', 'on Monday').",
      grammarMechanics: "Prepositions of Time: AT for precise clock times (at 5:00); ON for days and specific calendar dates (on June 12th); IN for months, years, and seasons (in 2026, in August).",
      rules: [
        "Use 'at' for specific times: at 9:00 AM, at noon, at midnight.",
        "Use 'on' for days and full dates: on Wednesday, on October 24th.",
        "Use 'in' for longer periods: in November, in 2026, in the morning.",
        "Pronounce years naturally: 1995 is 'nineteen ninety-five'; 2026 is 'twenty twenty-six'."
      ],
      formula: "At [Time] + On [Day/Date] + In [Month/Year]",
      formulaBreakdown: "We meet at 2:00 PM on Friday, in October.",
      examples: [
        { sentence: "The executive briefing begins at eight-fifteen on Tuesday morning.", contextOrBreakdown: "Preposition 'at' for time, 'on' for day." },
        { sentence: "Our fiscal review is scheduled for the twenty-first of September.", contextOrBreakdown: "Demonstrates ordinal pronunciation for calendar dates." },
        { sentence: "The invoice amounts to twelve thousand, four hundred and fifty dollars.", contextOrBreakdown: "Clear articulation of large cardinal monetary figures." }
      ],
      wordMeanings: [
        { word: "Ordinal", partOfSpeech: "adjective", definition: "Defining the position of something in a series (e.g., first, second, tenth).", exampleSentence: "She won first place in the speech championship." },
        { word: "Chronological", partOfSpeech: "adjective", definition: "Arranged in the order of time of occurrence.", exampleSentence: "Please arrange the financial statements in chronological order." },
        { word: "Fortnight", partOfSpeech: "noun", definition: "A period of two weeks (fourteen days).", exampleSentence: "We expect the shipment to arrive within a fortnight." }
      ],
      spokenUsageTips: [
        "Differentiate clearly between '-teen' (stressed, higher pitch: thir-TEEN) and '-ty' (short, falling pitch: THIR-ty).",
        "When specifying military or 24-hour time, say 'fourteen hundred hours' for 14:00."
      ],
      commonMistakes: [
        { incorrect: "We will meet on 5:00 PM in Monday.", correct: "We will meet at 5:00 PM on Monday.", explanation: "Clock times demand 'at'; days of the week demand 'on'." }
      ],
      practiceQuiz: [
        {
          question: "Which preposition correctly fills the blank: 'The symposium concludes ___ October 15th'?",
          options: ["at", "in", "on", "by of"],
          answer: "on",
          explanation: "Specific calendar dates always take the preposition 'on'."
        }
      ],
      dialogue: [
        { speaker: "Clara", text: "When is the project milestone due?" },
        { speaker: "Mark", text: "It is due on the fourteenth of November, exactly at five o'clock in the afternoon." }
      ],
      quickSummary: [
        "AT for precise times, ON for days/dates, IN for months/years.",
        "Contrast -teen and -ty through sharp syllable stress.",
        "Ordinal numbers designate calendar dates and sequence ranks."
      ]
    },
    {
      id: "ch1-l10",
      chapterId: 1,
      lessonNumber: 10,
      title: "Cardinal Directions, Spatial Prepositions & Basic Instructions",
      tagline: "Navigating physical geography, three-dimensional space, and direct procedural guidance.",
      objectives: [
        "Employ cardinal points (north, south, east, west) and relative locational markers.",
        "Differentiate nuanced spatial prepositions (between, among, opposite, across, through).",
        "Deliver and follow clear, stepwise procedural commands."
      ],
      introduction: "Whether guiding a traveler across town or detailing the placement of components, mastering spatial prepositions and clear instructional imperatives is an indispensable life skill.",
      deepExplanation: "Spatial prepositions pinpoint location and trajectory relative to reference landmarks. 'Between' designates relation to two distinct entities; 'among' applies to three or more collective members. 'Across' signifies traversal from one boundary to the opposing side, whereas 'through' denotes movement within a three-dimensional enclosing volume (like a tunnel or park). Instructions employ the imperative mood (bare infinitive).",
      grammarMechanics: "Imperative Instruction: [Base Verb] + [Object] + [Spatial Prepositional Phrase].",
      rules: [
        "Use bare infinitives for direct instructions: 'Turn left', 'Proceed straight', 'Press the button'.",
        "Use 'between' for two reference objects ('between the bank and the bakery').",
        "Use 'among' for crowds or collective groups ('among the crowd').",
        "Capitalize compass directions only when referring to recognized geographic regions ('the Pacific Northwest', but 'walk five miles north')."
      ],
      formula: "[Base Verb] + [Direction] + past [Landmark] + to [Destination]",
      formulaBreakdown: "'Walk north past the fountain to the museum entrance.'",
      examples: [
        { sentence: "Proceed straight along Fifth Avenue, then turn sharply to the left opposite the cathedral.", contextOrBreakdown: "Imperatives 'proceed' and 'turn' with spatial landmark 'opposite'." },
        { sentence: "The confidential envelope was placed between the two ledger binders on the shelf.", contextOrBreakdown: "Spatial preposition 'between' denoting two specific items." },
        { sentence: "The path winds through the forest and leads directly to the northern coast.", contextOrBreakdown: "'Through' indicating three-dimensional enclosure; 'to' signifying direction." }
      ],
      wordMeanings: [
        { word: "Adjacent", partOfSpeech: "adjective", definition: "Next to or adjoining something else.", exampleSentence: "The boardroom is adjacent to the executive lounge." },
        { word: "Traversal", partOfSpeech: "noun", definition: "The act of passing across or through an area.", exampleSentence: "Our traversal of the mountain pass took five hours." },
        { word: "Imperative", partOfSpeech: "noun", definition: "A grammatical mood that expresses an order, command, or instruction.", exampleSentence: "'Stop' and 'listen' are verbs in the imperative mood." }
      ],
      spokenUsageTips: [
        "When giving directions, pause after each sequential step to let the listener visualize the route.",
        "Clarify reference frames by indicating 'on your left' or 'to your immediate right'."
      ],
      commonMistakes: [
        { incorrect: "The prize was divided between all the hundred participants.", correct: "The prize was divided among all the hundred participants.", explanation: "'Between' is for distinct singular items (usually two); 'among' is for larger non-distinct groups." }
      ],
      practiceQuiz: [
        {
          question: "Which word best completes: 'The train raced ______ the mountain tunnel'?",
          options: ["across", "through", "between", "on"],
          answer: "through",
          explanation: "Movement inside a three-dimensional enclosing volume requires 'through'."
        }
      ],
      dialogue: [
        { speaker: "Tourist", text: "Excuse me, how do I get to the central library?" },
        { speaker: "Officer", text: "Walk two blocks north, turn right at the traffic lights, and you will see it directly opposite the metro station." }
      ],
      quickSummary: [
        "Use imperative base verbs for instructions and guidance.",
        "Differentiate 'between' (two points) from 'among' (collective group).",
        "'Through' denotes moving inside a 3D volume; 'across' denotes surface transit."
      ]
    }
  ]
};
