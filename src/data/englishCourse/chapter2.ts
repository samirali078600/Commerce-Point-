import { CourseChapter } from "./types";

export const CHAPTER_2: CourseChapter = {
  id: 2,
  number: 2,
  title: "Parts of Speech & Word Classification",
  description: "Deconstruct the foundational grammar engine: categorize every word in the English language into its functional role and syntactic behavior.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch2-l1",
      chapterId: 2,
      lessonNumber: 1,
      title: "Nouns: Types, Pluralization Rules, and Collective Nouns",
      tagline: "Categorizing entities, concepts, and mastering complex plural morphologies.",
      objectives: [
        "Classify nouns into Proper, Common, Concrete, Abstract, and Collective categories.",
        "Apply standard and irregular pluralization rules with precision.",
        "Handle non-count (uncountable) nouns and their quantifiers."
      ],
      introduction: "Nouns are the naming words of language. They serve as sentence subjects, direct objects, and objects of prepositions, grounding thought in tangible reality and abstract concepts.",
      deepExplanation: "Nouns divide into count nouns (which can be quantified discretely, like 'chair'/'chairs') and non-count/mass nouns (which denote indivisible substances or abstracts, like 'water', 'advice', 'furniture'). Irregular pluralizations preserve Old English mutations (foot -> feet, child -> children, datum -> data). Collective nouns (team, committee, audience) take singular verbs when acting as a unified unit, but plural verbs in British English when emphasizing individual constituent members.",
      grammarMechanics: "Count noun: 'a/an' + singular OR plural with -s/-es. Non-count noun: NO 'a/an', always singular verb agreement.",
      rules: [
        "Never pluralize uncountable nouns with an '-s' (say 'pieces of advice', not 'advices').",
        "Nouns ending in -s, -ss, -sh, -ch, -x, -z form plurals by appending '-es' (boxes, matches).",
        "Nouns ending in a consonant + y change 'y' to 'i' and add '-es' (city -> cities; but boy -> boys).",
        "Proper nouns always require capitalization regardless of their position in the sentence.",
        "Collective nouns take a singular verb when the group acts unanimously in American English."
      ],
      formula: "Non-Count Quantifier: [Partitive Expression] + of + [Uncountable Noun]",
      formulaBreakdown: "'A piece of information' | 'A loaf of bread' | 'An item of furniture'.",
      examples: [
        { sentence: "The committee has published its unanimous verdict today.", contextOrBreakdown: "Collective noun 'committee' treated as singular entity with singular pronoun 'its'." },
        { sentence: "She offered several insightful pieces of advice to the young entrepreneurs.", contextOrBreakdown: "Proper partitive quantifier for uncountable noun 'advice'." },
        { sentence: "All three children observed the phenomenon through the telescope.", contextOrBreakdown: "Irregular plurals 'children' and singular scientific noun 'phenomenon' (plural: phenomena)." }
      ],
      wordMeanings: [
        { word: "Partitive", partOfSpeech: "noun", definition: "A grammatical word or phrase that indicates a part or quantity of a whole.", exampleSentence: "'A bottle of' is a partitive phrase." },
        { word: "Morphology", partOfSpeech: "noun", definition: "The study of the forms of words and their internal grammatical structure.", exampleSentence: "English plural morphology includes both regular suffixes and vowel mutations." },
        { word: "Unanimous", partOfSpeech: "adjective", definition: "Fully in agreement; held or carried by everyone involved.", exampleSentence: "The jury reached a unanimous verdict." }
      ],
      spokenUsageTips: [
        "Never say 'informations' or 'furnitures'; say 'information' and 'furniture'.",
        "In speech, pronounce final -es as /ɪz/ after sibilants (watches -> /wɒtʃ.ɪz/)."
      ],
      commonMistakes: [
        { incorrect: "He gave me many useful advices and informations.", correct: "He gave me a lot of useful advice and information.", explanation: "'Advice' and 'information' are non-count nouns and cannot take the plural suffix '-s'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following is an uncountable (non-count) noun in English?",
          options: ["Chair", "Equipment", "Assignment", "Computer"],
          answer: "Equipment",
          explanation: "'Equipment' cannot be counted directly; we say 'a piece of equipment'."
        }
      ],
      dialogue: [
        { speaker: "Student", text: "Can I say 'I have two homeworks tonight'?" },
        { speaker: "Professor", text: "No, homework is non-count. You should say 'I have two homework assignments tonight' or 'a lot of homework'." }
      ],
      quickSummary: [
        "Nouns name persons, places, things, and ideas.",
        "Uncountable nouns never take indefinite articles (a/an) or plural '-s'.",
        "Collective nouns represent a group functioning as a single unit."
      ]
    },
    {
      id: "ch2-l2",
      chapterId: 2,
      lessonNumber: 2,
      title: "Pronouns: Subject, Object, Possessive, and Reflexive",
      tagline: "Eliminating noun redundancy through accurate pronominal substitution and case agreement.",
      objectives: [
        "Differentiate Subject, Object, Possessive Adjective, Possessive Pronoun, and Reflexive forms.",
        "Master pronoun-antecedent agreement in number and gender.",
        "Avoid common errors with compound subjects and reflexive usage."
      ],
      introduction: "Pronouns replace nouns to prevent tedious repetition. Ensuring that every pronoun agrees with its antecedent in case, number, and person is critical for syntactic elegance.",
      deepExplanation: "English pronouns exhibit grammatical case. The subjective/nominative case (I, he, she, we, they) acts as the doer of the verb. The objective case (me, him, her, us, them) receives the action or follows prepositions. Possessive determiners (my, your, their) modify nouns, while possessive pronouns (mine, yours, theirs) stand independently. Reflexive pronouns (-self/-selves) are reserved for actions where the subject and object are identical or for intense emphatic emphasis.",
      grammarMechanics: "Subject Case: Subject of finite verb. Object Case: Direct Object, Indirect Object, or Prepositional Complement.",
      rules: [
        "Prepositions must always be followed by the objective case pronoun ('between you and me', not 'between you and I').",
        "Do not use reflexive pronouns as subjects (never say 'Myself and John went'); use 'John and I went'.",
        "Ensure pronouns agree in number with their antecedents: 'Every student must submit his or her (or their) essay.'",
        "Differentiate 'it's' (contraction of 'it is') from 'its' (possessive determiner with no apostrophe)."
      ],
      formula: "Compound Subject: [Other Person] + and + I | Compound Object: [Other Person] + and + me",
      formulaBreakdown: "'Sophia and I analyzed the data.' vs 'The manager praised Sophia and me.'",
      examples: [
        { sentence: "Between you and me, the new strategy requires substantial revision.", contextOrBreakdown: "Preposition 'between' requires objective case 'me', not subjective 'I'." },
        { sentence: "The executive team prepared the comprehensive proposal themselves.", contextOrBreakdown: "Reflexive pronoun used emphatically to highlight independent accomplishment." },
        { sentence: "This laptop is mine, whereas that tablet is hers.", contextOrBreakdown: "Demonstrates independent possessive pronouns 'mine' and 'hers'." }
      ],
      wordMeanings: [
        { word: "Antecedent", partOfSpeech: "noun", definition: "A word or phrase that a subsequent pronoun refers to and replaces.", exampleSentence: "In 'Lisa forgot her keys', 'Lisa' is the antecedent of 'her'." },
        { word: "Nominative", partOfSpeech: "adjective", definition: "Relating to the grammatical case of the subject of a sentence.", exampleSentence: "Pronouns in the nominative case include I, he, she, we, and they." },
        { word: "Reflexive", partOfSpeech: "adjective", definition: "Denoting a pronoun that refers back to the subject of the clause.", exampleSentence: "'Himself' and 'themselves' are reflexive pronouns." }
      ],
      spokenUsageTips: [
        "To test compound subjects, remove the other person: 'John and (me/I) went to the office.' -> 'I went', so use 'John and I went'.",
        "Never use 'its'' with a trailing apostrophe; it does not exist in valid English."
      ],
      commonMistakes: [
        { incorrect: "This secret must remain between you and I.", correct: "This secret must remain between you and me.", explanation: "Prepositions govern the objective case; 'between' requires 'me'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence displays correct pronoun case agreement?",
          options: [
            "The director gave the award to Alex and I.",
            "The director gave the award to Alex and me.",
            "The director gave the award to Alex and myself.",
            "Me and Alex received the award from the director."
          ],
          answer: "The director gave the award to Alex and me.",
          explanation: "'To' is a preposition, requiring the objective pronoun 'me' as the prepositional object."
        }
      ],
      dialogue: [
        { speaker: "Brian", text: "Did the supervisor contact you and she?" },
        { speaker: "Elena", text: "Actually, he contacted me and her yesterday morning." }
      ],
      quickSummary: [
        "Subjects perform action (I, we, they); Objects receive action (me, us, them).",
        "Prepositions always govern the objective case ('between you and me').",
        "Reflexive pronouns refer back to the subject or add emphasis."
      ]
    },
    {
      id: "ch2-l3",
      chapterId: 2,
      lessonNumber: 3,
      title: "Verbs: Action, Stative, Linking, and Transitivity",
      tagline: "The syntactic heartbeat: driving sentences with dynamic action and state descriptions.",
      objectives: [
        "Differentiate action (dynamic) verbs from stative (state of being) verbs.",
        "Master linking verbs and subject complements.",
        "Distinguish transitive verbs (requiring direct objects) from intransitive verbs."
      ],
      introduction: "Verbs are the engine of every English clause. Without a finite verb, a collection of words cannot express a complete grammatical thought.",
      deepExplanation: "Dynamic verbs describe physical actions, processes, or activities (run, build, investigate) and freely adopt continuous (-ing) aspects. Stative verbs describe emotional states, mental perception, ownership, or abstract relations (love, believe, own, understand) and are rarely used in progressive tenses. Linking verbs (be, seem, appear, become, taste) do not convey action; instead, they connect the subject to a subject complement (predicate noun or adjective).",
      grammarMechanics: "Transitive: Subject + Verb + Direct Object. Intransitive: Subject + Verb (+ Adverbial). Linking: Subject + Linking Verb + Subject Complement.",
      rules: [
        "Stative verbs are normally not used in continuous (-ing) forms (say 'I understand', not 'I am understanding').",
        "Transitive verbs must have a direct object to complete their meaning (say 'She raised her hand', not 'She raised').",
        "Intransitive verbs cannot take direct objects and cannot be transformed into the passive voice (e.g., arrive, die, sneeze).",
        "Linking verbs are followed by adjectives, not adverbs of manner (e.g., 'The soup smells delicious', not 'deliciously')."
      ],
      formula: "Transitive: S + Vt + DO | Linking: S + Vl + Subject Complement",
      formulaBreakdown: "'She composed a symphony' (Transitive) | 'The melody sounds enchanting' (Linking).",
      examples: [
        { sentence: "The chef tasted the simmering stew with great care.", contextOrBreakdown: "'Tasted' functions here as a dynamic action verb." },
        { sentence: "The simmering stew tasted delicious.", contextOrBreakdown: "'Tasted' functions as a linking verb followed by predicate adjective 'delicious'." },
        { sentence: "The express train arrived promptly at dawn.", contextOrBreakdown: "'Arrived' is an intransitive verb; no direct object is permitted." }
      ],
      wordMeanings: [
        { word: "Stative", partOfSpeech: "adjective", definition: "Expressing a state or condition rather than an activity or process.", exampleSentence: "'Know', 'belong', and 'resemble' are stative verbs." },
        { word: "Transitivity", partOfSpeech: "noun", definition: "The quality of a verb that indicates whether it can take a direct object.", exampleSentence: "Transitivity determines whether a clause can be shifted into the passive voice." },
        { word: "Complement", partOfSpeech: "noun", definition: "A word or clause that completes the meaning of a given subject or predicate.", exampleSentence: "In 'He became a surgeon', 'a surgeon' is a subject complement." }
      ],
      spokenUsageTips: [
        "Say 'I feel bad about the delay', not 'I feel badly', because 'feel' is a linking verb here.",
        "Avoid using 'I am loving it' in formal or academic speech; use 'I love it' or 'I am enjoying it'."
      ],
      commonMistakes: [
        { incorrect: "I am knowing the answer to this complex inquiry.", correct: "I know the answer to this complex inquiry.", explanation: "'Know' is a stative verb of cognition and resists progressive continuous aspect." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly pairs a linking verb with a predicate adjective?",
          options: [
            "The rose smells sweetly in the garden.",
            "The rose smells sweet in the garden.",
            "The rose is smelling sweet in the garden.",
            "The rose smells with sweetness."
          ],
          answer: "The rose smells sweet in the garden.",
          explanation: "'Smell' functions as a linking verb here, requiring the adjective 'sweet' rather than the adverb 'sweetly'."
        }
      ],
      dialogue: [
        { speaker: "Chef Marco", text: "Why did you say the cake smells delightfully?" },
        { speaker: "Food Critic", text: "That was a slip! Since 'smells' is a linking verb describing state, I should say 'the cake smells delightful'." }
      ],
      quickSummary: [
        "Dynamic verbs show action; stative verbs show perception or state.",
        "Transitive verbs demand direct objects; intransitive verbs do not.",
        "Linking verbs link the subject to an adjective or noun complement."
      ]
    },
    {
      id: "ch2-l4",
      chapterId: 2,
      lessonNumber: 4,
      title: "Adjectives: Descriptive, Demonstrative, and Degrees of Comparison",
      tagline: "Adding color, precision, and relative graduation to nouns.",
      objectives: [
        "Order cumulative adjectives correctly using the standard OSASCOMP formula.",
        "Form positive, comparative, and superlative degrees accurately.",
        "Master demonstrative, quantitative, and participial adjectives (-ed vs -ing)."
      ],
      introduction: "Adjectives modify nouns and pronouns, providing sensory texture, quantitative bounds, and comparative relationships.",
      deepExplanation: "When multiple descriptive adjectives precede a single noun, native English demands an exact royal order: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose (OSASCOMP). Comparing entities requires the comparative degree (-er or 'more') for two items, and the superlative degree (-est or 'most') for three or more. Furthermore, participial adjectives contrast cause (-ing: boring, fascinating) with emotional reception (-ed: bored, fascinated).",
      grammarMechanics: "Single syllable: add -er/-est (tall, taller, tallest). Multi-syllable: prefix more/most (competent, more competent, most competent).",
      rules: [
        "Adjective order: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose + Noun.",
        "Never combine '-er' with 'more' (never say 'more taller' or 'most brightest').",
        "Use '-ed' for how a person feels, and '-ing' for the person or thing producing that feeling.",
        "Two-syllable adjectives ending in '-y' change 'y' to 'i' and take -er/-est (happy -> happier -> happiest).",
        "Irregular comparisons must be memorized: good/better/best, bad/worse/worst, far/further/furthest."
      ],
      formula: "OSASCOMP = Opinion + Size + Age + Shape + Color + Origin + Material + Purpose",
      formulaBreakdown: "'A lovely (Opinion) little (Size) antique (Age) square (Shape) wooden (Material) dining (Purpose) table.'",
      examples: [
        { sentence: "She wore an elegant long black Italian silk evening gown.", contextOrBreakdown: "Demonstrates OSASCOMP: Opinion (elegant), Size/Length (long), Color (black), Origin (Italian), Material (silk), Purpose (evening)." },
        { sentence: "This algorithm is significantly more efficient than the previous iteration.", contextOrBreakdown: "Proper comparative degree for a multi-syllabic adjective." },
        { sentence: "The lecture was so fascinating that not a single student felt bored.", contextOrBreakdown: "Contrasts cause (-ing: fascinating) with recipient experience (-ed: bored)." }
      ],
      wordMeanings: [
        { word: "Participial", partOfSpeech: "adjective", definition: "Having the characteristics or function of a participle (e.g., adjectives ending in -ed or -ing).", exampleSentence: "'Tired' and 'tiring' are participial adjectives." },
        { word: "Cumulative", partOfSpeech: "adjective", definition: "Increasing or growing by successive additions.", exampleSentence: "Cumulative adjectives must be arranged in the conventional English hierarchy." },
        { word: "Superlative", partOfSpeech: "adjective", definition: "Expressing the highest or a very high degree of a quality.", exampleSentence: "'Best' is the superlative form of 'good'." }
      ],
      spokenUsageTips: [
        "Avoid stacking more than three adjectives before a noun in spontaneous speech to preserve fluid cadence.",
        "Pronounce the comparative 'than' with a reduced schwa: /ðən/, not /ðæn/."
      ],
      commonMistakes: [
        { incorrect: "This project is more easier and most unique.", correct: "This project is easier and entirely unique.", explanation: "'Easy' takes '-er' without 'more'. 'Unique' is an absolute adjective and cannot be graded with 'most'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following phrases follows the correct English adjective order?",
          options: [
            "A green antique beautiful vase",
            "A beautiful antique green vase",
            "An antique green beautiful vase",
            "A vase beautiful green antique"
          ],
          answer: "A beautiful antique green vase",
          explanation: "Opinion (beautiful) precedes Age (antique), which precedes Color (green)."
        }
      ],
      dialogue: [
        { speaker: "Architect", text: "We need a modern spacious rectangular glass conference room." },
        { speaker: "Engineer", text: "That aligns precisely with our blueprint: Age (modern), Size (spacious), Shape (rectangular), Material (glass)." }
      ],
      quickSummary: [
        "Arrange adjectives using OSASCOMP.",
        "Compare two entities with comparative; compare three or more with superlative.",
        "-ed adjectives denote internal feelings; -ing adjectives denote external causes."
      ]
    },
    {
      id: "ch2-l5",
      chapterId: 2,
      lessonNumber: 5,
      title: "Adverbs: Manner, Time, Frequency, Degree, and Position",
      tagline: "Modifying verbs, adjectives, and entire clauses with nuanced precision.",
      objectives: [
        "Classify adverbs into Manner (-ly), Place, Time, Frequency, and Degree.",
        "Place adverbs of frequency correctly relative to main verbs and auxiliaries.",
        "Master flat adverbs and avoid misplaced adverb modifiers."
      ],
      introduction: "Adverbs answer the vital questions: How? When? Where? How often? and To what extent? They refine the velocity, intensity, and timing of human speech.",
      deepExplanation: "While many adverbs of manner are formed by appending '-ly' to an adjective (quick -> quickly), flat adverbs retain identical forms with their adjective counterparts (fast, hard, late, early). Adverbs of frequency (always, usually, seldom, never) occupy a rigid syntactic slot: directly before the principal lexical verb, but immediately after the auxiliary verb 'to be' or modal auxiliaries.",
      grammarMechanics: "Position rule: Auxiliary/Be + [Adverb of Frequency] + Main Verb. Manner: Subject + Verb + Object + [Adverb of Manner].",
      rules: [
        "Never place an adverb between a transitive verb and its direct object (say 'He speaks English fluently', NOT 'He speaks fluently English').",
        "Adverbs of frequency precede main verbs: 'She always arrives early.'",
        "Adverbs of frequency follow the verb 'to be': 'She is always punctual.'",
        "Differentiate 'hard' (with intense effort) from 'hardly' (scarcely / almost not at all).",
        "Differentiate 'late' (after the due time) from 'lately' (recently)."
      ],
      formula: "Subj + Aux/Be + [Freq Adverb] + Main Verb + DO + [Manner Adverb]",
      formulaBreakdown: "'They have consistently executed their operations impeccably.'",
      examples: [
        { sentence: "The surgeon skillfully performed the delicate operation yesterday.", contextOrBreakdown: "Adverb of manner 'skillfully' precedes verb; adverb of time 'yesterday' concludes clause." },
        { sentence: "She has never arrived late to any executive meeting.", contextOrBreakdown: "Adverb of frequency 'never' placed between auxiliary 'has' and past participle 'arrived'." },
        { sentence: "He works exceptionally hard, yet he hardly ever complains.", contextOrBreakdown: "Contrasts flat adverb 'hard' (with effort) and negative adverb 'hardly' (scarcely)." }
      ],
      wordMeanings: [
        { word: "Punctual", partOfSpeech: "adjective", definition: "Happening or doing something at the agreed or proper time.", exampleSentence: "She is always punctual for our client calls." },
        { word: "Scarcely", partOfSpeech: "adverb", definition: "Only just; almost not; hardly.", exampleSentence: "We could scarcely hear the speaker above the roar of the crowd." },
        { word: "Lexical", partOfSpeech: "adjective", definition: "Relating to the words or vocabulary of a language as distinguished from its grammar.", exampleSentence: "The lexical verb carries the primary semantic weight in the clause." }
      ],
      spokenUsageTips: [
        "Do not say 'fastly'; 'fast' is both an adjective and an adverb.",
        "Place adverbs of degree (extremely, very, completely) directly before the word they modify."
      ],
      commonMistakes: [
        { incorrect: "He drives very fastly and speaks fluently French.", correct: "He drives very fast and speaks French fluently.", explanation: "'Fastly' is non-standard, and adverbs of manner cannot separate a verb from its direct object." }
      ],
      practiceQuiz: [
        {
          question: "Where should the adverb 'frequently' be positioned in this sentence: 'They [1] have [2] visited [3] the [4] archives'?",
          options: ["Position 1", "Position 2", "Position 3", "Position 4"],
          answer: "Position 2",
          explanation: "Adverbs of frequency fit between the auxiliary verb ('have') and the main verb ('visited')."
        }
      ],
      dialogue: [
        { speaker: "Supervisor", text: "Does Samuel submit his progress reports punctually?" },
        { speaker: "Manager", text: "Yes, he always submits them on time; he has never missed a submission deadline." }
      ],
      quickSummary: [
        "Adverbs modify verbs, adjectives, and other adverbs.",
        "Never split a verb from its direct object with an adverb.",
        "Place frequency adverbs before main verbs but after the verb 'to be'."
      ]
    },
    {
      id: "ch2-l6",
      chapterId: 2,
      lessonNumber: 6,
      title: "Prepositions: Time, Place, Movement, and Dependent Collocations",
      tagline: "Mapping relational coordinates and fixed idiomatic verb-preposition pairings.",
      objectives: [
        "Differentiate prepositions of Time (at, on, in), Place (at, on, in), and Direction (to, into, onto, towards).",
        "Master dependent prepositions following adjectives and verbs.",
        "Avoid awkward preposition dangling in formal speech."
      ],
      introduction: "Prepositions establish spatial, temporal, and logical relationships between nouns and other sentence elements. Misusing prepositions alters meaning and produces unnatural phrasing.",
      deepExplanation: "The prepositions IN, ON, and AT follow a geometric hierarchy: AT represents a precise point (at 3 PM, at the corner); ON represents a surface or a calendar day (on the table, on Monday); IN represents an enclosed volume, a geographic territory, or a broader timeframe (in the room, in Spain, in July). Additionally, English features hundreds of fixed dependent prepositions (e.g., 'depend on', 'interested in', 'accustomed to').",
      grammarMechanics: "Preposition + Noun Phrase / Pronoun (Objective Case) / Gerund (-ing).",
      rules: [
        "Prepositions must be followed by nouns, pronouns, or gerunds, never finite verbs (e.g., 'interested in learning', not 'interested in learn').",
        "Use 'into' for movement from the outside to the interior ('He walked into the room').",
        "Use 'onto' for movement towards a surface ('The cat jumped onto the counter').",
        "Memorize fixed collocations: 'good at', 'capable of', 'insist on', 'congratulate on'."
      ],
      formula: "Dependent Collocation: [Verb/Adjective] + [Specific Dependent Preposition] + [Gerund/Noun]",
      formulaBreakdown: "'She is capable (Adj) of (Prep) leading (Gerund) large international teams.'",
      examples: [
        { sentence: "The summit convenes at nine o'clock on Monday morning in Geneva.", contextOrBreakdown: "Hierarchical prepositions: 'at' (point in time), 'on' (day), 'in' (city territory)." },
        { sentence: "The entrepreneur jumped into the market and invested heavily in sustainable energy.", contextOrBreakdown: "'Into' expresses dynamic ingress; 'invested in' shows fixed dependent preposition." },
        { sentence: "He apologized for arriving late and insisted on paying the bill.", contextOrBreakdown: "Prepositions 'for' and 'on' followed strictly by gerunds ('arriving', 'paying')." }
      ],
      wordMeanings: [
        { word: "Collocation", partOfSpeech: "noun", definition: "The habitual juxtaposition of a particular word with another word or words with a frequency greater than chance.", exampleSentence: "'Strong tea' and 'heavy rain' are natural English collocations." },
        { word: "Ingress", partOfSpeech: "noun", definition: "The act of entering, or the right or permission to enter.", exampleSentence: "The preposition 'into' denotes physical ingress." },
        { word: "Gerund", partOfSpeech: "noun", definition: "A verb form ending in -ing that functions syntactically as a noun.", exampleSentence: "Following a preposition, verbs must convert into gerunds." }
      ],
      spokenUsageTips: [
        "Say 'interested in', never 'interested on'.",
        "Say 'congratulations on your success', never 'congratulations for your success'."
      ],
      commonMistakes: [
        { incorrect: "She is capable to complete this task and good in mathematics.", correct: "She is capable of completing this task and good at mathematics.", explanation: "'Capable' takes 'of + gerund'; 'good' takes 'at' when describing skill." }
      ],
      practiceQuiz: [
        {
          question: "Which preposition correctly fills the blank: 'We congratulated our colleague ______ her promotion'?",
          options: ["for", "about", "on", "towards"],
          answer: "on",
          explanation: "The verb 'congratulate' takes the dependent preposition 'on' (congratulate someone on something)."
        }
      ],
      dialogue: [
        { speaker: "Recruiter", text: "Are you comfortable with cross-functional collaboration?" },
        { speaker: "Candidate", text: "Yes, I am accustomed to working in fast-paced environments and excel at leading diverse teams." }
      ],
      quickSummary: [
        "AT for points, ON for surfaces/days, IN for enclosed areas/longer periods.",
        "Prepositions must be followed by gerunds (-ing) when governing verbs.",
        "Master fixed dependent prepositions (capable of, good at, insist on)."
      ]
    },
    {
      id: "ch2-l7",
      chapterId: 2,
      lessonNumber: 7,
      title: "Conjunctions: Coordinating, Subordinating, and Correlative",
      tagline: "Constructing logical bridges between words, phrases, and independent clauses.",
      objectives: [
        "Deploy coordinating conjunctions (FANBOYS) with proper comma punctuation.",
        "Construct complex thoughts using subordinating conjunctions (although, because, while).",
        "Maintain parallel grammatical structure with correlative conjunctions (either/or, neither/nor, not only/but also)."
      ],
      introduction: "Conjunctions are the cement of English syntax. They unite concepts, contrast perspectives, and establish cause, condition, and concession.",
      deepExplanation: "Coordinating conjunctions (For, And, Nor, But, Or, Yet, So - FANBOYS) join grammatically equal syntactic units. When joining two independent clauses, a coordinating conjunction requires a preceding comma. Subordinating conjunctions (since, because, although, whereas, unless) attach a dependent clause to an independent matrix clause. Correlative conjunctions work in paired harmony and demand strict grammatical parallelism.",
      grammarMechanics: "FANBOYS: Independent Clause + Comma + Conjunction + Independent Clause. Subordinating: Dependent Clause + Comma + Independent Clause.",
      rules: [
        "When joining two complete independent clauses with a coordinating conjunction, place a comma before the conjunction.",
        "If a subordinating clause begins a sentence, place a comma after it; if it follows the main clause, omit the comma.",
        "Maintain parallel structure with correlative pairs: 'He is not only intelligent, but also diligent' (Adjective matched with Adjective).",
        "Never use 'although' and 'but' simultaneously in the same sentence (say 'Although it rained, we went', NOT 'Although it rained, but we went')."
      ],
      formula: "Parallelism: Not only + [Grammatical Form X] + but also + [Grammatical Form X]",
      formulaBreakdown: "'She enjoys not only playing piano (Gerund Phrase) but also composing symphonies (Gerund Phrase).'",
      examples: [
        { sentence: "The quarterly revenue increased substantially, yet our operational expenses rose higher.", contextOrBreakdown: "Two independent clauses joined by coordinating conjunction 'yet' with a comma." },
        { sentence: "Although the negotiation was exceptionally strenuous, both parties signed the accord.", contextOrBreakdown: "Introductory subordinating clause requiring a comma before the main clause." },
        { sentence: "The firm must either modernize its digital infrastructure or surrender its market dominance.", contextOrBreakdown: "Correlative pair 'either... or' maintaining parallel verb phrases ('modernize' and 'surrender')." }
      ],
      wordMeanings: [
        { word: "Subordination", partOfSpeech: "noun", definition: "The grammatical process of linking a dependent clause to an independent clause.", exampleSentence: "Subordination allows writers to highlight primary ideas over secondary context." },
        { word: "Parallelism", partOfSpeech: "noun", definition: "The state of being parallel or corresponding in grammatical structure.", exampleSentence: "Failure of parallelism weakens sentence clarity." },
        { word: "Concession", partOfSpeech: "noun", definition: "The grammatical expression of acknowledging a contrasting fact (e.g., using 'although').", exampleSentence: "'Although it was costly' represents a clause of concession." }
      ],
      spokenUsageTips: [
        "Do not over-rely on 'and... and... and'; use subordinating conjunctions ('since', 'while', 'because') to sound mature.",
        "Pause slightly where a comma appears before a conjunction in connected speech."
      ],
      commonMistakes: [
        { incorrect: "Although he studied very hard, but he failed the examination.", correct: "Although he studied very hard, he failed the examination.", explanation: "'Although' and 'but' perform the same concessive function; using both creates a double-conjunction error." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence demonstrates proper grammatical parallelism with correlative conjunctions?",
          options: [
            "She decided neither to accept the promotion nor moving abroad.",
            "She decided neither to accept the promotion nor to move abroad.",
            "She decided neither accepting the promotion nor to move abroad.",
            "Neither she decided to accept the promotion or move abroad."
          ],
          answer: "She decided neither to accept the promotion nor to move abroad.",
          explanation: "'Neither to accept' matches 'nor to move' with parallel infinitive structures."
        }
      ],
      dialogue: [
        { speaker: "Lawyer", text: "Unless both parties sign the addendum, the contract will terminate automatically." },
        { speaker: "Client", text: "We understand completely; therefore, we will execute the agreement before midday." }
      ],
      quickSummary: [
        "FANBOYS connect equal units; use a comma between independent clauses.",
        "Subordinating conjunctions create dependent explanatory clauses.",
        "Correlative pairs demand identical grammatical structures on both sides."
      ]
    },
    {
      id: "ch2-l8",
      chapterId: 2,
      lessonNumber: 8,
      title: "Interjections and Exclamatory Expressions",
      tagline: "Conveying spontaneous human emotion, urgency, and emphatic reactions.",
      objectives: [
        "Identify and utilize expressive interjections in spoken conversation.",
        "Construct formal and casual exclamatory sentences using 'What a...' and 'How...'.",
        "Punctuate interjections appropriately with exclamation marks and commas."
      ],
      introduction: "Interjections are grammatically autonomous vocal outbursts that communicate surprise, pain, joy, hesitation, or relief in authentic interpersonal communication.",
      deepExplanation: "Unlike verbs or nouns, interjections stand outside the formal syntactic structure of the clause. Strong interjections (Ouch! Wow! Bravo!) express abrupt visceral bursts of sentiment and take exclamation marks. Mild interjections (Well, hmm, oh, alas) introduce conversational hesitation or reflective transitions and are separated by a comma. Additionally, English forms structured exclamatory sentences using 'What a [adjective] [noun]!' and 'How [adjective] [subject] [verb]!'.",
      grammarMechanics: "What + a/an + (Adjective) + Singular Count Noun! | How + Adjective/Adverb + Subject + Verb!",
      rules: [
        "Use 'What a...' with singular count nouns: 'What an astonishing discovery!'",
        "Use 'What...' without 'a' for plural or uncountable nouns: 'What beautiful scenery!', 'What wonderful people!'",
        "Use 'How...' before bare adjectives and adverbs: 'How marvelous this music sounds!'",
        "Do not invert subject and verb in exclamatory clauses (say 'How fast she runs!', NOT 'How fast does she run!')."
      ],
      formula: "Exclamatory Pattern A: What (a/an) + Noun Phrase! | Pattern B: How + Adjective + Subject + Verb!",
      formulaBreakdown: "'What a breathtaking view!' vs 'How breathtaking the view is!'",
      examples: [
        { sentence: "Alas, our budget proposal was rejected by the executive committee.", contextOrBreakdown: "Mild classical interjection of sorrow or regret set off by a comma." },
        { sentence: "What an extraordinary achievement your team has accomplished!", contextOrBreakdown: "Structured exclamatory sentence highlighting a singular noun phrase." },
        { sentence: "How remarkably resilient the local community remained during the crisis!", contextOrBreakdown: "Structured exclamatory pattern: How + Adverb + Adjective + Subject + Verb." }
      ],
      wordMeanings: [
        { word: "Visceral", partOfSpeech: "adjective", definition: "Relating to deep inward feelings rather than to the intellect.", exampleSentence: "The unexpected alarm evoked a visceral reaction." },
        { word: "Autonomous", partOfSpeech: "adjective", definition: "Acting independently or having the freedom to do so.", exampleSentence: "Interjections are grammatically autonomous from the rest of the sentence." },
        { word: "Exclamation", partOfSpeech: "noun", definition: "A sudden cry or remark, especially expressing surprise, anger, or pain.", exampleSentence: "He uttered an exclamation of relief upon finding his lost passport." }
      ],
      spokenUsageTips: [
        "Use 'Well...' at the beginning of a sentence when you need a moment to formulate a diplomatic answer.",
        "Inflect vocal pitch upwards to convey excitement, or downwards to convey disappointment or empathy."
      ],
      commonMistakes: [
        { incorrect: "What a beautiful weather we are experiencing today!", correct: "What beautiful weather we are experiencing today!", explanation: "'Weather' is uncountable; the indefinite article 'a' cannot be used." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following represents a grammatically correct exclamatory sentence?",
          options: [
            "How an inspiring speech that was!",
            "What an inspiring speech that was!",
            "How inspiring speech that was!",
            "What inspiring that was speech!"
          ],
          answer: "What an inspiring speech that was!",
          explanation: "'What a/an' is mandatory when modifying a singular count noun ('speech')."
        }
      ],
      dialogue: [
        { speaker: "Visitor", text: "Look at those snow-capped peaks in the horizon!" },
        { speaker: "Guide", text: "Indeed! What magnificent scenery nature provides, and how fortunate we are to witness it!" }
      ],
      quickSummary: [
        "Interjections convey spontaneous emotion without syntactic integration.",
        "Use 'What a...' with singular count nouns; 'What...' with plural/uncountable.",
        "Use 'How...' directly with adjectives and adverbs."
      ]
    },
    {
      id: "ch2-l9",
      chapterId: 2,
      lessonNumber: 9,
      title: "Articles & Determiners: Definite, Indefinite, and Zero Article",
      tagline: "Governing noun specificity, reference, and universality in speech.",
      objectives: [
        "Deploy 'A' versus 'An' based on acoustic initial phonemes rather than written spelling.",
        "Master the definite article 'The' for unique referents, shared knowledge, and specific entities.",
        "Apply the Zero Article correctly to abstract concepts, meals, languages, and general plurals."
      ],
      introduction: "Articles are among the most frequent yet notoriously challenging elements of English. A single misplaced 'the' can transform a general universal philosophy into a narrow specific item.",
      deepExplanation: "Articles specify whether a noun refers to a general unidentifiable member of a class (indefinite: A, AN) or a specific entity recognized by both the speaker and listener (definite: THE). The choice between 'a' and 'an' depends solely on the initial SOUND of the following word (e.g., 'a university' because it starts with consonant glide /j/, but 'an hour' because it starts with silent 'h' and vowel /aʊ/). The 'Zero Article' (omission of article) is mandated for plural and non-count nouns speaking in general.",
      grammarMechanics: "A + Consonant Sound. AN + Vowel Sound. THE + Specific Shared Context. ZERO ARTICLE + General Plural/Abstract Noun.",
      rules: [
        "Choose 'a' vs 'an' by pronunciation, not spelling (say 'an honest man', 'a European country', 'an MBA graduate').",
        "Use 'the' when both speaker and listener already know which specific item is being discussed.",
        "Use 'the' with unique celestial bodies and geographic plurals (the moon, the sun, the Himalayas, the United States).",
        "Do not use 'the' before names of continents, most countries, sports, academic subjects, or meals in general (e.g., 'Breakfast is ready', NOT 'The breakfast is ready')."
      ],
      formula: "Sound Check: Initial Vowel Sound -> Use AN | Initial Consonant Sound -> Use A",
      formulaBreakdown: "'An umbrella' (/ʌ/) vs 'A uniform' (/juː/). 'A hospital' (/h/) vs 'An heir' (/ɛər/).",
      examples: [
        { sentence: "An honest individual represents a rare and admirable virtue in public life.", contextOrBreakdown: "Silent 'h' in 'honest' produces initial vowel sound, requiring 'an'." },
        { sentence: "The sun rose majestically over the Pacific Ocean.", contextOrBreakdown: "Definite article 'the' used for unique celestial bodies and oceans." },
        { sentence: "Education empowers children to transcend socio-economic barriers.", contextOrBreakdown: "Zero article used for abstract uncountable noun 'education' and general plural 'children'." }
      ],
      wordMeanings: [
        { word: "Determiner", partOfSpeech: "noun", definition: "A modifying word that determines the kind of reference a noun or noun group has.", exampleSentence: "Articles, demonstratives, and possessives belong to the determiner class." },
        { word: "Specificity", partOfSpeech: "noun", definition: "The quality of being specific rather than general.", exampleSentence: "The definite article marks high specificity in discourse." },
        { word: "Referent", partOfSpeech: "noun", definition: "The concrete thing or idea that a word or phrase stands for.", exampleSentence: "Both speakers must share the same referent to use 'the'." }
      ],
      spokenUsageTips: [
        "Pronounce 'the' as /ðə/ before consonant sounds (the car), and as /ðiː/ before vowel sounds (the apple, the hour).",
        "Acronyms starting with vowel sounds take 'an': 'an FBI agent', 'an SOS message'."
      ],
      commonMistakes: [
        { incorrect: "She goes to the work by the train every morning to learn the English.", correct: "She goes to work by train every morning to learn English.", explanation: "'Work', travel modes ('by train'), and named languages ('English') take the zero article." }
      ],
      practiceQuiz: [
        {
          question: "Which article correctly precedes the noun phrase '______ historic milestone'?",
          options: ["a", "an", "the both are acceptable, but 'a' is modern standard", "no article"],
          answer: "the both are acceptable, but 'a' is modern standard",
          explanation: "Because 'historic' begins with a pronounced /h/ consonant sound in modern English, 'a historic' is the standard."
        }
      ],
      dialogue: [
        { speaker: "Scholar", text: "Did you read the article on artificial intelligence?" },
        { speaker: "Editor", text: "Yes, an author from a European university wrote it. It offers an innovative perspective." }
      ],
      quickSummary: [
        "'A' precedes consonant sounds; 'An' precedes vowel sounds.",
        "'The' marks specific, shared, or unique referents.",
        "Zero article governs generic plurals, languages, meals, and general abstract nouns."
      ]
    },
    {
      id: "ch2-l10",
      chapterId: 2,
      lessonNumber: 10,
      title: "Word Formation: Roots, Prefixes, and Suffixes",
      tagline: "Deciphering morphological architecture to expand vocabulary exponentially.",
      objectives: [
        "Deconstruct complex academic words into Latin and Greek root bases.",
        "Modify meaning through standard prefixes (un-, in-, dis-, mis-, re-, pre-).",
        "Shift grammatical categories using nominal, adjectival, and verbal suffixes."
      ],
      introduction: "Over seventy percent of the English academic lexicon derives from Greek and Latin roots. Mastering prefixes, bases, and suffixes unlocks thousands of advanced words systematically.",
      deepExplanation: "A root constitutes the core semantic base of a word (e.g., 'bene' = good; 'dict' = speak -> 'benediction' = a good blessing). Prefixes attach to the beginning of the root to modify its direction, affirmation, or negation (e.g., 'un-', 'mal-', 'hyper-'). Suffixes attach to the end of the root, predominantly determining the word's grammatical part of speech (e.g., '-tion' forms nouns, '-ify' forms verbs, '-ous' forms adjectives).",
      grammarMechanics: "Prefix (Meaning Modifier) + Root (Semantic Core) + Suffix (Part of Speech Classifier).",
      rules: [
        "Adding a prefix rarely alters the grammatical class of the root word (happy [adj] -> unhappy [adj]).",
        "Adding a suffix almost always changes the grammatical class (create [verb] -> creative [adj] -> creativity [noun]).",
        "Prefixes ending in consonants often assimilate phonetically before roots (in + legal -> illegal; in + responsible -> irresponsible).",
        "When adding a suffix beginning with a vowel to a base ending in silent 'e', drop the 'e' (care + ing -> caring; but notice + able -> noticeable)."
      ],
      formula: "Word = [Prefix] + [Root Base] + [Derivational Suffix]",
      formulaBreakdown: "'Un-pre-cedent-ed' = un- (not) + pre- (before) + cedere (to go) + -ed (participial adjective).",
      examples: [
        { sentence: "The unprecedented technological transformation revolutionized international commerce.", contextOrBreakdown: "Deconstructs 'unprecedented' (un- + precede + ent + ed) and 'transformation' (trans- + form + ation)." },
        { sentence: "Her benevolent actions demonstrated deep empathy toward the underprivileged.", contextOrBreakdown: "Root 'bene' (good) + 'vol' (will) + '-ent' (adjective marker)." },
        { sentence: "The government sought to decentralize administrative decision-making.", contextOrBreakdown: "Prefix 'de-' (reverse) + 'central' (root) + suffix '-ize' (verb converter)." }
      ],
      wordMeanings: [
        { word: "Assimilation", partOfSpeech: "noun", definition: "The process by which a sound becomes similar to a neighboring sound in pronunciation or spelling.", exampleSentence: "Assimilation changes the prefix 'in-' to 'im-' before 'possible'." },
        { word: "Derivational", partOfSpeech: "adjective", definition: "Relating to the formation of a new word from another word or base.", exampleSentence: "Derivational suffixes convert verbs into nouns." },
        { word: "Etymon", partOfSpeech: "noun", definition: "The original word from which a later word is derived.", exampleSentence: "The Latin 'credere' is the etymon of 'incredible'." }
      ],
      spokenUsageTips: [
        "Suffixes like '-tion' shift stress to the preceding syllable (in-FORM -> in-for-MA-tion).",
        "Do not over-pronounce assimilated prefixes; blend them naturally."
      ],
      commonMistakes: [
        { incorrect: "The unpossible task made him disencouraged.", correct: "The impossible task made him discouraged.", explanation: "The prefix 'in-' assimilates to 'im-' before 'p'; 'courage' takes 'dis-' without the prefix 'en-'." }
      ],
      practiceQuiz: [
        {
          question: "Which suffix is used to transform the adjective 'active' into an abstract noun?",
          options: ["-ize", "-ity", "-ous", "-ly"],
          answer: "-ity",
          explanation: "The suffix '-ity' attaches to adjectives to generate abstract nouns ('active' -> 'activity')."
        }
      ],
      dialogue: [
        { speaker: "Linguist", text: "Notice how 'chrono' means time and 'logy' means study." },
        { speaker: "Student", text: "So 'chronology' is the scientific study or arrangement of events in order of time!" }
      ],
      quickSummary: [
        "Roots provide the foundational semantic nucleus.",
        "Prefixes modify direction, degree, or negation without changing part of speech.",
        "Suffixes shift the grammatical part of speech and alter syllable stress."
      ]
    }
  ]
};
