import { CourseChapter } from "./types";

export const CHAPTER_5: CourseChapter = {
  id: 5,
  number: 5,
  title: "Modal Auxiliaries & Nuanced Expressions",
  description: "Navigate social diplomacy, degrees of certainty, logical deduction, obligations, and the hypothetical subjunctive with modal precision.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch5-l1",
      chapterId: 5,
      lessonNumber: 1,
      title: "Ability & Possibility: Can, Could, Be Able To",
      tagline: "Expressing present capacity, historical capability, and theoretical possibility.",
      objectives: [
        "Differentiate general past ability ('could') from specific single-occasion achievement ('was/were able to' or 'managed to').",
        "Formulate present, future, and perfect expressions of ability using 'be able to'.",
        "Distinguish theoretical possibility from factual probability."
      ],
      introduction: "Modal auxiliaries do not express plain actions; they express the speaker's attitude toward the possibility, necessity, or capability of an action taking place.",
      deepExplanation: "'Can' denotes general physical or intellectual ability in the present. 'Could' expresses general ability in the past ('I could run fast as a youth'). Crucially, when describing a specific, single past achievement where someone succeeded despite difficulty, standard English forbids 'could' in affirmative sentences; you must use 'was/were able to' or 'managed to' (e.g., 'The firefighters were able to rescue everyone'). 'Be able to' is a semi-modal that can be conjugated across all tenses.",
      grammarMechanics: "General Ability: Can + Base Verb (Present) | Could + Base Verb (Past). Single Past Success: was/were able to + Base Verb. Future: will be able to.",
      rules: [
        "Never use 'to' after modal verbs (say 'I can swim', NOT 'I can to swim').",
        "Modal verbs never take third-person '-s' (say 'He can speak', NOT 'He cans speak').",
        "Use 'was/were able to' (or 'managed to') for a specific past accomplishment, not 'could'.",
        "In negative past sentences, 'could not' is universally permitted for both general and specific failures ('He couldn't open the door')."
      ],
      formula: "Specific Past Success: Subject + [was / were able to] + [Base Verb]",
      formulaBreakdown: "'Despite the severe avalanche, the climbers were able to reach safety.'",
      examples: [
        { sentence: "She can synthesize complex biochemical data in minutes.", contextOrBreakdown: "Present general intellectual ability using 'can'." },
        { sentence: "Although the storm severed power lines, technicians were able to restore electricity within two hours.", contextOrBreakdown: "Specific single-occasion past achievement requiring 'were able to'." },
        { sentence: "By the end of this advanced workshop, participants will be able to construct deep learning models.", contextOrBreakdown: "Future ability using the flexible periphrastic form 'will be able to'." }
      ],
      wordMeanings: [
        { word: "Periphrastic", partOfSpeech: "adjective", definition: "Formed by using auxiliary words rather than inflections (e.g., 'be able to').", exampleSentence: "'Be able to' functions as a periphrastic modal of ability." },
        { word: "Synthesize", partOfSpeech: "verb", definition: "Combine a number of things into a coherent whole.", exampleSentence: "A skilled analyst can synthesize disparate data points." },
        { word: "Disparate", partOfSpeech: "adjective", definition: "Essentially different in kind; not allowing comparison.", exampleSentence: "She gathered disparate observations into one report." }
      ],
      spokenUsageTips: [
        "Pronounce 'can' as a reduced /kən/ in affirmative statements ('I can go' -> /aɪ kən ɡoʊ/), but pronounce 'can't' with a full, loud, elongated vowel /kænt/ or /kɑːnt/.",
        "In questions, invert: 'Can you assist me?'"
      ],
      commonMistakes: [
        { incorrect: "Although the exam was extraordinarily arduous, he could pass it.", correct: "Although the exam was extraordinarily arduous, he was able to pass it (or managed to pass it).", explanation: "For a specific past victory or accomplishment, use 'was able to', not 'could'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly describes a specific single-occasion past triumph?",
          options: [
            "The fire spread quickly, but everyone could escape safely.",
            "The fire spread quickly, but everyone was able to escape safely.",
            "The fire spread quickly, but everyone can escape safely.",
            "The fire spread quickly, but everyone could to escape safely."
          ],
          answer: "The fire spread quickly, but everyone was able to escape safely.",
          explanation: "A specific single past achievement requires 'was/were able to' or 'managed to'."
        }
      ],
      dialogue: [
        { speaker: "Reporter", text: "How did the pilot handle the engine failure during landing?" },
        { speaker: "Investigator", text: "Through exceptional skill, she was able to glide the aircraft onto the runway without casualties." }
      ],
      quickSummary: [
        "CAN: Present ability. COULD: General past ability.",
        "WAS/WERE ABLE TO: Specific past single-occasion success.",
        "BE ABLE TO: Allows expression across future and perfect tenses."
      ]
    },
    {
      id: "ch5-l2",
      chapterId: 5,
      lessonNumber: 2,
      title: "Obligation & Necessity: Must, Have To, Need To, Should, Ought To",
      tagline: "Calibrating internal willpower, external regulations, and moral duty.",
      objectives: [
        "Differentiate internal personal obligation ('must') from external regulation ('have to').",
        "Distinguish prohibition ('must not') from absence of obligation ('do not have to').",
        "Express moral advisability using 'should' and 'ought to'."
      ],
      introduction: "Determining whether an action is mandatory, optional, strictly forbidden, or merely advisable requires nuanced command of obligation modals.",
      deepExplanation: "'Must' expresses subjective, internal necessity imposed by the speaker's own conviction ('I must finish this book tonight') or formal written rules. 'Have to' expresses objective, external obligation imposed by external laws, institutions, or circumstances ('I have to wear a hardhat on the construction site'). In negation, the distinction is profound: 'Must not' denotes strict prohibition (forbidden), whereas 'Don't have to' denotes complete absence of obligation (optional).",
      grammarMechanics: "Must + Base Verb (Present/Future only; Past of must = had to). Don't have to = Not necessary. Must not = Forbidden.",
      rules: [
        "'Must' has no past tense form; you MUST use 'had to' to express past obligation ('I had to leave early').",
        "'Must not' (mustn't) means it is strictly prohibited or illegal.",
        "'Don't have to' / 'Doesn't have to' means there is no obligation; you may do it if you wish, but it is not required.",
        "'Ought to' expresses moral advisability equivalent to 'should', followed by an infinitive with 'to'."
      ],
      formula: "Prohibition: Must not + Base Verb | Optional: Do/Does not have to + Base Verb",
      formulaBreakdown: "'You must not smoke here (Prohibited).' vs 'You don't have to wear a suit (Optional).'",
      examples: [
        { sentence: "All international passengers must present a valid passport prior to boarding.", contextOrBreakdown: "Strict formal legal requirement expressed through 'must'." },
        { sentence: "You do not have to attend the orientation symposium, but it is highly recommended.", contextOrBreakdown: "'Do not have to' denotes absence of obligation (attendance is optional)." },
        { sentence: "Yesterday, the flight was canceled, so the delegates had to travel by rail.", contextOrBreakdown: "Past obligation requires 'had to' because 'must' has no past form." }
      ],
      wordMeanings: [
        { word: "Obligation", partOfSpeech: "noun", definition: "An act or course of action to which a person is morally or legally bound; a duty.", exampleSentence: "Citizens have a civic obligation to vote." },
        { word: "Prohibition", partOfSpeech: "noun", definition: "The action of forbidding something, especially by law.", exampleSentence: "'Must not' communicates strict legal prohibition." },
        { word: "Mandatory", partOfSpeech: "adjective", definition: "Required by law or rules; compulsory.", exampleSentence: "Wearing protective eyewear is mandatory in the laboratory." }
      ],
      spokenUsageTips: [
        "In everyday speech, 'have to' is much more common than 'must' for everyday obligations.",
        "Contract 'have to' to sound like /hæftə/ and 'has to' to /hæstə/ in natural casual speech."
      ],
      commonMistakes: [
        { incorrect: "You must not pay for the museum; admission is free today.", correct: "You do not have to pay for the museum; admission is free today.", explanation: "If something is free, payment is not necessary ('don't have to'); 'must not' would mean paying is illegal!" }
      ],
      practiceQuiz: [
        {
          question: "Which modal indicates that an action is completely optional (no necessity)?",
          options: ["Must not", "Don't have to", "Ought not to", "Cannot"],
          answer: "Don't have to",
          explanation: "'Don't have to' signifies the total absence of obligation, meaning the action is optional."
        }
      ],
      dialogue: [
        { speaker: "Safety Officer", text: "Remember, you must not enter the reactor room without radiation shielding." },
        { speaker: "Engineer", text: "Understood. Do we have to log our exit time as well?" },
        { speaker: "Safety Officer", text: "Yes, every personnel member has to sign the ledger." }
      ],
      quickSummary: [
        "MUST: Speaker's conviction or formal rule. HAVE TO: External laws or rules.",
        "MUST NOT: Prohibited / forbidden. DON'T HAVE TO: Optional / not required.",
        "HAD TO: The mandatory past form of both must and have to."
      ]
    },
    {
      id: "ch5-l3",
      chapterId: 5,
      lessonNumber: 3,
      title: "Permission & Politeness: May, Might, Could, Would",
      tagline: "Mastering diplomatic registers and sophisticated social courtesies.",
      objectives: [
        "Navigate the formality hierarchy: Can -> Could -> May -> Might -> Would you mind.",
        "Employ 'May' for formal institutional permission.",
        "Deploy 'Would you mind' followed by gerunds (-ing) for diplomatic requests."
      ],
      introduction: "The hallmark of sophisticated spoken English is diplomacy. Choosing the correct modal when asking permission or making a request softens tone and conveys profound respect.",
      deepExplanation: "While 'Can I' is acceptable among friends, professional registers elevate politeness through past and hypothetical modal forms. 'Could I' softens the request; 'May I' is the gold standard of formal courteous permission. 'Would you mind...' is one of English's most diplomatic request formulas, syntactically requiring a gerund (-ing) and expecting a negative response (e.g., 'No, not at all') to indicate agreement.",
      grammarMechanics: "Hierarchy: Can (Informal) < Could (Polite) < May (Formal) < Would you mind + Verb-ing? (Diplomatic).",
      rules: [
        "'May I' asks for permission; 'May you' does NOT exist for requests (never say 'May you help me?'; use 'Could you help me?').",
        "'Would you mind' must be followed by a gerund: 'Would you mind closing the window?'",
        "Answering 'Would you mind': say 'No, not at all' or 'Certainly not' to mean 'Yes, I will gladly do it'.",
        "In negative requests with 'Would you mind': 'Would you mind not smoking here?'"
      ],
      formula: "Diplomatic Request: Would you mind + [Verb + ing] + [Polite Marker]?",
      formulaBreakdown: "'Would you mind (Formula) postponing (Gerund) the conference call (Object) until Thursday?'",
      examples: [
        { sentence: "May I inspect the classified dossier, Mr. Ambassador?", contextOrBreakdown: "Highest formal register for seeking institutional permission." },
        { sentence: "Could you possibly provide an itemized breakdown of these consulting fees?", contextOrBreakdown: "Polite indirect business request softened with 'could' and 'possibly'." },
        { sentence: "Would you mind dimming the overhead lights during the projector presentation?", contextOrBreakdown: "Diplomatic formula 'Would you mind' followed by gerund 'dimming'." }
      ],
      wordMeanings: [
        { word: "Diplomatic", partOfSpeech: "adjective", definition: "Having or showing an ability to deal with people in a sensitive and tactful way.", exampleSentence: "Diplomatic phrasing avoids giving unintended offense." },
        { word: "Itemized", partOfSpeech: "adjective", definition: "Presenting in the form of a list with individual items specified.", exampleSentence: "The client requested an itemized statement of expenses." },
        { word: "Deference", partOfSpeech: "noun", definition: "Polite submission and respect.", exampleSentence: "He bowed his head in deference to the presiding judge." }
      ],
      spokenUsageTips: [
        "Never say 'May you give me that?'; 'May' can only seek permission for 'I' or 'We' ('May I / May we'). Use 'Could you' or 'Would you' when addressing others.",
        "Use a gentle rising intonation contour at the end of polite requests."
      ],
      commonMistakes: [
        { incorrect: "May you please open the door for me?", correct: "Could you please open the door for me? (OR: Would you please...)", explanation: "'May' cannot be used to ask someone else to perform an action ('May you' is ungrammatical)." }
      ],
      practiceQuiz: [
        {
          question: "How should you grammatically respond if someone asks 'Would you mind opening the window?' and you are happy to open it?",
          options: [
            "Yes, I mind very much.",
            "No, not at all; I'd be happy to.",
            "Yes, sure I open it.",
            "Yes, of course I mind."
          ],
          answer: "No, not at all; I'd be happy to.",
          explanation: "'Would you mind' asks if it causes you annoyance; replying 'No, not at all' means you do not mind and will gladly do it."
        }
      ],
      dialogue: [
        { speaker: "Executive", text: "Would you mind forwarding the minutes of the board meeting to my assistant?" },
        { speaker: "Secretary", text: "Not at all, sir. I will transmit the documents immediately." }
      ],
      quickSummary: [
        "CAN: Casual. COULD: Polite. MAY: Formal permission (for I / We only).",
        "WOULD YOU MIND: Requires a gerund (-ing) and a negative reply ('No, not at all') to consent.",
        "Never say 'May you' when making requests of others."
      ]
    },
    {
      id: "ch5-l4",
      chapterId: 5,
      lessonNumber: 4,
      title: "Epistemic Modality: Degrees of Certainty, Deduction, and Speculation",
      tagline: "Expressing present logical deductions from 100% certainty to remote possibility.",
      objectives: [
        "Deploy modals of deduction: must (95% certain positive), can't/couldn't (95% certain negative).",
        "Express middle possibility using may, might, and could (30-50% probability).",
        "Avoid using 'must not' for logical negative deductions."
      ],
      introduction: "Epistemic modality relates to knowledge, evidence, and logical deduction. It allows a speaker to infer facts based on circumstantial evidence.",
      deepExplanation: "When evidence leads to an overwhelming logical conclusion that something is true, English uses 'must' ('The lights are on; someone must be inside'). When evidence proves something is logically impossible, English strictly uses 'can't' or 'couldn't' ('He can't be at home; I just saw him downtown'). Middle speculation uses 'may', 'might', or 'could' ('She might be in the library').",
      grammarMechanics: "Strong Positive Deduction: Subject + must + Base Verb. Strong Negative Deduction: Subject + can't / couldn't + Base Verb. Speculation: may / might / could + Base Verb.",
      rules: [
        "Never use 'must not' for logical impossibility; use 'cannot' or 'can't' (say 'It can't be true', NOT 'It must not be true').",
        "Use 'must' when the evidence points logically to only one viable conclusion.",
        "'Could' in deduction expresses possibility, NOT past ability ('That could be the courier at the door').",
        "Continuous deduction uses modal + be + Verb-ing ('They must be sleeping')."
      ],
      formula: "Certainty Spectrum: Must (95%) > May/Might/Could (50%) > Can't (0% / Impossible)",
      formulaBreakdown: "'He must be the new CEO (Strong inference)' vs 'He can't be the intern (Logical impossibility)'.",
      examples: [
        { sentence: "The laboratory door is double-locked; Dr. Thorne must be conducting an experiment inside.", contextOrBreakdown: "Strong positive logical deduction based on observable physical evidence." },
        { sentence: "That signature cannot be genuine; the handwriting does not match his authenticated sample.", contextOrBreakdown: "Logical impossibility expressed through 'cannot' (can't)." },
        { sentence: "The fluctuating seismic readings could indicate geothermal activity beneath the caldera.", contextOrBreakdown: "Scientific speculation using 'could' to express realistic possibility." }
      ],
      wordMeanings: [
        { word: "Epistemic", partOfSpeech: "adjective", definition: "Relating to knowledge or to the degree of its validation.", exampleSentence: "Epistemic modals express how certain a speaker is about a fact." },
        { word: "Deduction", partOfSpeech: "noun", definition: "The inference of particular instances by reference to a general law or evidence.", exampleSentence: "Sherlock Holmes relied on deductive reasoning." },
        { word: "Viable", partOfSpeech: "adjective", definition: "Capable of working successfully; feasible.", exampleSentence: "That hypothesis is the only viable explanation." }
      ],
      spokenUsageTips: [
        "Stress 'must' firmly when asserting a logical deduction: 'You MUST be joking!'",
        "In American English, 'can't' is pronounced /kænt/; in British English, /kɑːnt/."
      ],
      commonMistakes: [
        { incorrect: "Look at the empty parking lot; the office must not be open today.", correct: "Look at the empty parking lot; the office can't be open today.", explanation: "For logical impossibility, English mandates 'can't' or 'cannot', not 'must not'." }
      ],
      practiceQuiz: [
        {
          question: "Which modal correctly expresses logical impossibility in: 'He only started walking five minutes ago; he ______ be at the station already'?",
          options: ["must not", "can't", "might not", "shouldn't"],
          answer: "can't",
          explanation: "Logical impossibility based on physical evidence requires 'can't'."
        }
      ],
      dialogue: [
        { speaker: "Detective", text: "The security logs show the vault key was used at midnight." },
        { speaker: "Inspector", text: "Then the perpetrator must be an insider; an external thief couldn't possibly possess that encryption code." }
      ],
      quickSummary: [
        "MUST: 95% certain it IS true (logical deduction).",
        "CAN'T / COULDN'T: 95% certain it IS NOT true (logical impossibility).",
        "MAY / MIGHT / COULD: 50% possibility.",
        "Never use 'must not' for logical impossibility."
      ]
    },
    {
      id: "ch5-l5",
      chapterId: 5,
      lessonNumber: 5,
      title: "Past Modals of Deduction: Must have, Can't have, Could have",
      tagline: "Inferring past events through historical clues and forensic evidence.",
      objectives: [
        "Construct past deductions using modal + have + past participle (V3).",
        "Differentiate 'must have done' (certain past inference) from 'can't have done' (impossible past inference).",
        "Express past possibilities that did not actually materialize using 'could have done'."
      ],
      introduction: "When investigating what transpired in the past based on present clues, we construct past modal deductions. This is the grammar of historians, forensic investigators, and auditors.",
      deepExplanation: "To project epistemic deduction into the past, append the auxiliary 'have' and the past participle (V3) to the modal auxiliary. 'Must have + V3' means all evidence indicates this past event definitely occurred. 'Can't have / Couldn't have + V3' means evidence proves this past action was physically impossible. 'Could have + V3' indicates that a past action was possible, but typically did not occur.",
      grammarMechanics: "Subject + [must / can't / couldn't / may / might / could] + have + Past Participle (V3).",
      rules: [
        "Never use 'must had' or 'can't had'; modals are always followed by the base infinitive 'have'.",
        "Use 'must have + V3' for past logical certainty: 'She wasn't at the desk; she must have gone home.'",
        "Use 'can't have / couldn't have + V3' for past logical impossibility: 'He couldn't have committed the theft; he was in Tokyo.'",
        "Differentiate 'may/might have' (we do not know if it happened) from 'could have' (it was possible, but often did not happen)."
      ],
      formula: "S + [must / can't / could] + have + [Past Participle (V3)]",
      formulaBreakdown: "'The aircraft (S) must have encountered (Modal + have + V3) catastrophic turbulence (Object).'",
      examples: [
        { sentence: "The archeologists concluded that the ancient civilization must have experienced a catastrophic drought.", contextOrBreakdown: "Past logical deduction based on archaeological soil samples." },
        { sentence: "The defendant cannot have forged the check, as he was incarcerated on the date of execution.", contextOrBreakdown: "Past logical impossibility proved by an airtight alibi." },
        { sentence: "You could have passed the examination with flying colors if you had reviewed the syllabus.", contextOrBreakdown: "Unrealized past capability using 'could have + V3'." }
      ],
      wordMeanings: [
        { word: "Forensic", partOfSpeech: "adjective", definition: "Relating to or denoting the application of scientific methods and techniques to the investigation of crime.", exampleSentence: "Forensic evidence proved the suspect couldn't have entered the vault." },
        { word: "Incarcerate", partOfSpeech: "verb", definition: "Imprison or confine.", exampleSentence: "The convict was incarcerated for five years." },
        { word: "Alibi", partOfSpeech: "noun", definition: "A claim or piece of evidence that one was elsewhere when an act is alleged to have taken place.", exampleSentence: "Her plane ticket provided an indisputable alibi." }
      ],
      spokenUsageTips: [
        "In rapid speech, 'must have' contracts to 'must've' (/ˈmʌs.təv/) and 'could have' to 'could've' (/ˈkʊd.əv/).",
        "Never write 'could of' or 'must of'; this is a phonetic spelling error resulting from the pronunciation of 'have'."
      ],
      commonMistakes: [
        { incorrect: "She must of forgotten her briefcase in the conference room.", correct: "She must have forgotten her briefcase in the conference room.", explanation: "'Must of' is a catastrophic spelling blunder; the auxiliary is 'have' (must have / must've)." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly expresses past logical certainty?",
          options: [
            "He must of finished the report yesterday.",
            "He must have finished the report yesterday.",
            "He must has finished the report yesterday.",
            "He must had finished the report yesterday."
          ],
          answer: "He must have finished the report yesterday.",
          explanation: "The modal must is followed by base auxiliary 'have' + past participle 'finished'."
        }
      ],
      dialogue: [
        { speaker: "Auditor", text: "How did two million dollars disappear from the accounts without executive detection?" },
        { speaker: "Investigator", text: "The perpetrator must have altered the ledger entries immediately prior to the monthly reconciliation." }
      ],
      quickSummary: [
        "MUST HAVE + V3: Past logical certainty (evidence proves it happened).",
        "CAN'T / COULDN'T HAVE + V3: Past logical impossibility.",
        "COULD HAVE + V3: Unrealized past potential.",
        "Never write 'could of' or 'must of'!"
      ]
    },
    {
      id: "ch5-l6",
      chapterId: 5,
      lessonNumber: 6,
      title: "Past Modals of Regret and Counterfactuality: Should have, Ought to have",
      tagline: "Evaluating past missteps, missed opportunities, and moral obligations.",
      objectives: [
        "Construct 'should have + V3' and 'ought to have + V3' to articulate past regrets and criticisms.",
        "Deploy 'shouldn't have + V3' to critique inappropriate past conduct.",
        "Differentiate past advisability ('should have') from past ability ('could have')."
      ],
      introduction: "Human history is full of hindsight. When looking backward at actions that were advisable but left undone, or blunders that were committed in error, 'should have' is our vehicle of reflection.",
      deepExplanation: "'Should have + past participle (V3)' expresses that an action was advisable, sensible, or mandatory in the past, but failed to occur in reality ('I should have studied harder'). Conversely, 'should not have + V3' expresses that an action occurred in reality, but was a profound error or mistake ('You shouldn't have disclosed that secret'). 'Ought to have + V3' carries identical semantic weight with slightly higher moral formality.",
      grammarMechanics: "Affirmative Regret: Subject + should have + V3. Negative Critique: Subject + should not (shouldn't) have + V3.",
      rules: [
        "Use 'should have + V3' to express an unfulfilled past duty or regret.",
        "Use 'shouldn't have + V3' to express that a committed past action was a mistake.",
        "Never write 'should of' (it is always 'should have' or 'should've').",
        "In questions: Should + Subject + have + V3? ('Should we have notified the authorities?')."
      ],
      formula: "Past Regret: S + [should have / ought to have] + [Past Participle (V3)]",
      formulaBreakdown: "'The enterprise (S) should have diversified (should have + V3) its portfolio (DO) sooner.'",
      examples: [
        { sentence: "The engineering team should have reinforced the retaining wall before the monsoon season began.", contextOrBreakdown: "Critical past advisability that was unfortunately neglected." },
        { sentence: "We shouldn't have launched the marketing campaign before finalizing the product patent.", contextOrBreakdown: "Critique of an unwise past action that took place." },
        { sentence: "The government ought to have anticipated the inflationary shock and protected consumer savings.", contextOrBreakdown: "Formal moral critique of unfulfilled past duty." }
      ],
      wordMeanings: [
        { word: "Counterfactual", partOfSpeech: "adjective", definition: "Relating to or expressing what has not happened or is not the case.", exampleSentence: "Conditional statements explore counterfactual scenarios." },
        { word: "Hindsight", partOfSpeech: "noun", definition: "Understanding of a situation or event only after it has happened or developed.", exampleSentence: "In hindsight, we realize we should have acted earlier." },
        { word: "Advisability", partOfSpeech: "noun", definition: "The quality of being sensible, prudent, or wise to do.", exampleSentence: "The board debated the advisability of the takeover." }
      ],
      spokenUsageTips: [
        "Pronounce 'should have' as /ˈʃʊd.əv/ in natural spoken conversation.",
        "Inflect with a sympathetic downward pitch when consoling someone: 'You did your best; you shouldn't have worried so much'."
      ],
      commonMistakes: [
        { incorrect: "I should of known that the contract had expired.", correct: "I should have known that the contract had expired.", explanation: "'Should of' is a phonetic misspelling; the correct grammatical construction is 'should have'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly conveys a past mistake that the speaker regrets committing?",
          options: [
            "I should have accepted the prestigious fellowship.",
            "I shouldn't have accepted the prestigious fellowship.",
            "I must have accepted the prestigious fellowship.",
            "I could of accepted the prestigious fellowship."
          ],
          answer: "I should have accepted the prestigious fellowship.",
          explanation: "'Should have accepted' expresses regret that an unfulfilled advisable opportunity was bypassed."
        }
      ],
      dialogue: [
        { speaker: "Founder", text: "Our competitors secured the patent before us!" },
        { speaker: "Adviser", text: "We should have filed our application six months ago when the prototype was verified." }
      ],
      quickSummary: [
        "SHOULD HAVE + V3: Advisable in the past, but not done (regret/missed opportunity).",
        "SHOULDN'T HAVE + V3: Done in the past, but was a mistake/blunder.",
        "Always write 'should have', NEVER 'should of'."
      ]
    },
    {
      id: "ch5-l7",
      chapterId: 5,
      lessonNumber: 7,
      title: "Habitual Past: Used to vs Would vs Be Used to vs Get Used to",
      tagline: "Untangling past routines from states of psychological acclimation.",
      objectives: [
        "Differentiate 'used to' (past habits and past states) from 'would' (repeated past actions only).",
        "Distinguish 'used to + base verb' from 'be used to + gerund/noun' (accustomed to).",
        "Master 'get used to + gerund/noun' (the dynamic process of becoming accustomed)."
      ],
      introduction: "Few areas in English create as much confusion as the four 'used to' constructions. Mastering the distinctions between past habits, past states, and present acclimation is essential.",
      deepExplanation: "1. 'Used to + bare infinitive' expresses a past habit, routine, or stative truth that is no longer true today ('I used to live in Rome'). 2. 'Would + bare infinitive' narrates recurring past actions, but CANNOT be used with stative verbs (you cannot say 'I would live in Rome'). 3. 'Be used to + noun/gerund (-ing)' means to be accustomed to or familiar with something ('I am used to waking up early'). 4. 'Get used to + noun/gerund (-ing)' denotes the progressive transition toward becoming accustomed ('I am getting used to the cold climate').",
      grammarMechanics: "Past Habit: Subject + used to + Base Verb. Acclimated State: Subject + be + used to + Gerund (-ing) / Noun. Acclimating Process: Subject + get + used to + Gerund (-ing).",
      rules: [
        "Never use 'would' for past stative verbs (say 'I used to have a dog', NOT 'I would have a dog').",
        "Negative of 'used to': 'didn't use to' (drop the 'd').",
        "After 'be used to' and 'get used to', you MUST use a noun or a gerund (-ing), never a base verb ('I am used to driving', NOT 'I am used to drive').",
        "'Used to' only has a past tense; to express present habits, use the simple present with adverbs like 'usually'."
      ],
      formula: "Acclimation: Subject + [am / is / are] + used to + [Verb-ing / Noun]",
      formulaBreakdown: "'He is (Be) used to (Prep phrase) handling (Gerund) high-pressure crises (Noun phrase).'",
      examples: [
        { sentence: "The professor used to lecture at Oxford before accepting a chair at Cambridge.", contextOrBreakdown: "Past career routine that has concluded." },
        { sentence: "Every summer, my grandfather would sit on the veranda and narrate folklore.", contextOrBreakdown: "Repeated past narrative action using 'would'." },
        { sentence: "Although London traffic is chaotic, she is completely used to navigating it now.", contextOrBreakdown: "'Be used to' followed by gerund 'navigating', expressing established familiarity." },
        { sentence: "It took the expatriate several months to get used to the tropical humidity.", contextOrBreakdown: "'Get used to' indicating the transitional process of acclimation." }
      ],
      wordMeanings: [
        { word: "Acclimation", partOfSpeech: "noun", definition: "The process of becoming accustomed to a new climate or new conditions.", exampleSentence: "Acclimation to high altitude requires several days." },
        { word: "Expatriate", partOfSpeech: "noun", definition: "A person who lives outside their native country.", exampleSentence: "The expatriate community met regularly in the capital." },
        { word: "Discontinued", partOfSpeech: "adjective", definition: "Having ceased or been brought to an end.", exampleSentence: "'Used to' describes a discontinued past habit." }
      ],
      spokenUsageTips: [
        "In speech, 'used to' is pronounced /ˈjuːst tuː/ or /ˈjuːst tə/.",
        "Remember the test: if you can substitute 'accustomed to', the following verb MUST take '-ing' ('I am accustomed to waking up' -> 'I am used to waking up')."
      ],
      commonMistakes: [
        { incorrect: "I am used to wake up at six in the morning.", correct: "I am used to waking up at six in the morning.", explanation: "'Be used to' takes a prepositional complement, requiring the gerund form 'waking'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence CANNOT use 'would' instead of 'used to'?",
          options: [
            "We used to swim in the lake every summer afternoon.",
            "She used to own a vintage bookstore in Edinburgh.",
            "My father used to take us camping in the mountains.",
            "They used to play chess every evening after dinner."
          ],
          answer: "She used to own a vintage bookstore in Edinburgh.",
          explanation: "'Own' is a stative verb; 'would' can only describe repeated dynamic actions, never past states."
        }
      ],
      dialogue: [
        { speaker: "New Employee", text: "The noise in this trading floor is overwhelming!" },
        { speaker: "Senior Trader", text: "Do not worry; I used to feel the exact same way, but you will soon get used to working in this environment." }
      ],
      quickSummary: [
        "USED TO + Base Verb: Discontinued past habit or state.",
        "WOULD + Base Verb: Repeated past dynamic actions (no stative verbs).",
        "BE USED TO + Gerund (-ing): Accustomed to / comfortable with.",
        "GET USED TO + Gerund (-ing): The process of becoming accustomed."
      ]
    },
    {
      id: "ch5-l8",
      chapterId: 5,
      lessonNumber: 8,
      title: "Semi-Modals and Phrasal Modals: Dare, Need, Had Better, Would Rather",
      tagline: "Mastering fringe auxiliaries of courage, necessity, urgent warning, and personal preference.",
      objectives: [
        "Deploy 'had better' for urgent advice with implicit negative consequences.",
        "Express preference using 'would rather... than'.",
        "Utilize 'dare' and 'need' as both modal auxiliaries and lexical verbs."
      ],
      introduction: "Semi-modals occupy a fascinating syntactic borderland: they exhibit modal properties while retaining traits of ordinary lexical verbs. Mastering them adds sharp polish to spoken English.",
      deepExplanation: "'Had better + bare infinitive' expresses strong, urgent advice carrying an implied threat or consequence if ignored ('You had better leave now [or you will miss the train]'). Note that despite 'had', it refers exclusively to present or future time. 'Would rather + bare infinitive' communicates preference ('I would rather stay than leave'). 'Dare' (have the courage) and 'need' (necessity) can function as pure modals in questions and negations ('How dare you!', 'You need not worry').",
      grammarMechanics: "Had better + Base Verb (Negative: had better not). Would rather + Base Verb + than + Base Verb. Need not (modal) = don't need to.",
      rules: [
        "Never say 'had better to'; use the bare infinitive ('You had better hurry').",
        "The negative of 'had better' is 'had better not' (never 'hadn't better').",
        "'Would rather' is followed by bare infinitive: 'I would rather read than watch television.'",
        "When 'would rather' has a different subject for the second action, it takes a past tense subjunctive: 'I would rather you didn't smoke here'."
      ],
      formula: "Urgent Warning: Subject + [had better] + (not) + [Base Verb]",
      formulaBreakdown: "'You had better submit (had better + Base Verb) the tax returns before midnight.'",
      examples: [
        { sentence: "The storm is intensifying; we had better secure the maritime vessels immediately.", contextOrBreakdown: "Urgent advice carrying direct physical consequence if ignored." },
        { sentence: "I would rather conduct our negotiations in private than debate in the public square.", contextOrBreakdown: "Direct expression of preference comparing two bare infinitives with 'than'." },
        { sentence: "You need not submit physical paperwork; the digital copy suffices.", contextOrBreakdown: "'Need' functioning as a pure modal auxiliary without 'to'." }
      ],
      wordMeanings: [
        { word: "Semi-modal", partOfSpeech: "noun", definition: "A verb that functions partly like a modal auxiliary and partly like a main verb.", exampleSentence: "'Need' and 'dare' are classic English semi-modals." },
        { word: "Suffice", partOfSpeech: "verb", definition: "Be enough or adequate.", exampleSentence: "A brief confirmation will suffice." },
        { word: "Maritime", partOfSpeech: "adjective", definition: "Connected with the sea, especially in relation to seafaring commercial or naval activity.", exampleSentence: "The port handles extensive maritime traffic." }
      ],
      spokenUsageTips: [
        "In speech, 'had better' is universally contracted to ''d better': 'You'd better call him right now'.",
        "'Would rather' is contracted to ''d rather': 'I'd rather walk'."
      ],
      commonMistakes: [
        { incorrect: "You had better to leave before the security doors lock.", correct: "You had better leave before the security doors lock.", explanation: "'Had better' takes a bare infinitive without 'to'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following is the correct negative form of 'had better'?",
          options: ["You hadn't better speak.", "You had better not speak.", "You had not better to speak.", "You better not had speak."],
          answer: "You had better not speak.",
          explanation: "The negative particle 'not' follows the entire unit 'had better'."
        }
      ],
      dialogue: [
        { speaker: "Pilot", text: "Atmospheric pressure is dropping precipitously." },
        { speaker: "Co-pilot", text: "We had better descend to a lower altitude immediately before turbulence strikes." }
      ],
      quickSummary: [
        "HAD BETTER + Base Verb: Urgent advice with negative consequence if ignored.",
        "WOULD RATHER + Base Verb + THAN: Expressing preference between options.",
        "NEED NOT: Modal negation expressing lack of necessity without 'do'."
      ]
    },
    {
      id: "ch5-l9",
      chapterId: 5,
      lessonNumber: 9,
      title: "Modals in Indirect Speech & Softened Interpersonal Directives",
      tagline: "Backshifting modals and delivering diplomatic executive instructions.",
      objectives: [
        "Backshift modals correctly into indirect reported speech (can -> could, will -> would, may -> might).",
        "Identify modals that do NOT backshift (must, should, ought to, could, might, would).",
        "Softly frame commands as polite interrogative directives."
      ],
      introduction: "Direct commands ('Do this!') sound aggressive in modern corporate and diplomatic environments. Modals allow leaders to frame directives with exquisite tact and report them accurately.",
      deepExplanation: "When shifting direct speech into indirect reported speech governed by a past reporting verb, modals backshift: 'can' becomes 'could', 'will' becomes 'would', and 'may' becomes 'might'. However, modals that are already historically past (should, would, could, might, ought to) remain unchanged. Furthermore, directives are softened using interrogative modals: 'Would you mind reviewing this?' functions as a polite yet unmistakable command.",
      grammarMechanics: "Direct: 'I will assist you.' -> Indirect: She stated that she would assist me. Direct: 'You can leave.' -> Indirect: He said I could leave.",
      rules: [
        "'Must' shifts to 'had to' when reporting an obligation; but 'must' remains 'must' when reporting a logical deduction.",
        "'Should', 'could', 'might', and 'would' never backshift in reported speech.",
        "Replace harsh imperatives with modal questions: 'Could you review this by noon?'",
        "Use 'I would suggest' or 'I would recommend' to offer diplomatic executive critique."
      ],
      formula: "Soft Directive: Would / Could + Subject + kindly / possibly + [Base Verb]?",
      formulaBreakdown: "'Could you (Soft modal) kindly verify (Base Verb) the balance statement (DO)?'",
      examples: [
        { sentence: "The director confirmed that the enterprise would inaugurate the Tokyo facility in October.", contextOrBreakdown: "Direct speech 'will inaugurate' backshifted to 'would inaugurate' after past reporting verb 'confirmed'." },
        { sentence: "She explained that the team had to finalize the specifications before morning.", contextOrBreakdown: "Direct obligation 'must finalize' shifted into indirect past 'had to finalize'." },
        { sentence: "Would you kindly verify that all safety protocols have been satisfied?", contextOrBreakdown: "Diplomatic directive softening an operational imperative into a courteous inquiry." }
      ],
      wordMeanings: [
        { word: "Backshift", partOfSpeech: "noun", definition: "The changing of a verb form from present to past in indirect speech following a past-tense reporting verb.", exampleSentence: "Backshift transforms 'will' into 'would'." },
        { word: "Directive", partOfSpeech: "noun", definition: "An official or authoritative instruction.", exampleSentence: "The CEO issued a corporate directive regarding remote work." },
        { word: "Tact", partOfSpeech: "noun", definition: "Skill and sensitivity in dealing with others or with difficult issues.", exampleSentence: "Diplomats deliver difficult instructions with exceptional tact." }
      ],
      spokenUsageTips: [
        "Inserting 'possibly' or 'kindly' into modal requests immediately softens hierarchical friction.",
        "Frame corrective feedback with: 'You might want to reconsider that approach'."
      ],
      commonMistakes: [
        { incorrect: "He promised that he will finish the project yesterday.", correct: "He promised that he would finish the project yesterday.", explanation: "After past reporting verb 'promised', the modal 'will' must backshift to 'would'." }
      ],
      practiceQuiz: [
        {
          question: "How does 'You can begin the examination' transform into reported speech after 'The proctor announced...'?",
          options: [
            "The proctor announced that we can begin the examination.",
            "The proctor announced that we could begin the examination.",
            "The proctor announced that we can began the examination.",
            "The proctor announced that we could began the examination."
          ],
          answer: "The proctor announced that we could begin the examination.",
          explanation: "'Can' backshifts to 'could' following a past tense reporting verb."
        }
      ],
      dialogue: [
        { speaker: "Associate", text: "Did the managing partner give us instructions?" },
        { speaker: "Senior Counsel", text: "Yes, she stated that we should examine the precedent and that she would review our brief at four o'clock." }
      ],
      quickSummary: [
        "Backshifting: can -> could, will -> would, may -> might.",
        "Could, should, would, might, and ought to do not backshift.",
        "Soft directives replace blunt imperatives with polite modal inquiries."
      ]
    },
    {
      id: "ch5-l10",
      chapterId: 5,
      lessonNumber: 10,
      title: "The Subjunctive Mood & Hypothetical Expressions",
      tagline: "Expressing demands, recommendations, urgencies, and counterfactual wishes.",
      objectives: [
        "Master the Present Mandative Subjunctive (bare infinitive) following verbs of urgency (demand, insist, recommend).",
        "Deploy the Past Subjunctive ('were' for all persons) in hypothetical conditional clauses and with 'wish'.",
        "Recognize archaic and fixed formulaic subjunctive expressions (God save the King, be that as it may)."
      ],
      introduction: "The subjunctive mood expresses wishes, demands, requirements, and purely hypothetical counterfactual realities that do not describe factual states of being.",
      deepExplanation: "English possesses two primary subjunctive forms: 1. The Mandative (Present) Subjunctive uses the BARE INFINITIVE (base verb without 'to' or third-person '-s') in a 'that'-clause following verbs of demand, request, or recommendation (e.g., 'insist', 'recommend', 'demand', 'require', 'it is imperative that'). E.g., 'I insist that he BE present' (NOT 'is' or 'was'). 2. The Past Subjunctive uses 'WERE' for all grammatical persons (including I, he, she, it) in hypothetical 'if' conditions and after 'wish' (e.g., 'If I WERE you', 'I wish she WERE here').",
      grammarMechanics: "Mandative: Demand Verb + that + Subject + [Bare Infinitive]. Hypothetical: If + Subject + [were] ... Subject + would + Base Verb.",
      rules: [
        "In the mandative subjunctive, never conjugate the verb for third-person singular (say 'It is vital that she attend', NOT 'attends').",
        "The negative mandative subjunctive simply places 'not' before the bare verb ('We demand that he not intervene').",
        "In formal hypothetical conditions, always use 'were' instead of 'was' ('If he were the director, he would approve this').",
        "After 'wish' referring to an unreal present desire, use past subjunctive ('I wish I were more patient')."
      ],
      formula: "Mandative: It is [crucial / vital / imperative] that + S + [Base Verb]",
      formulaBreakdown: "'It is imperative that every delegate be seated (Subjunctive 'be') prior to the address.'",
      examples: [
        { sentence: "The board of directors insisted that the Chief Executive Officer resign immediately.", contextOrBreakdown: "Mandative subjunctive: Base infinitive 'resign' (no third-person '-s') after 'insisted that'." },
        { sentence: "It is crucial that the biomedical sample remain refrigerated at all times.", contextOrBreakdown: "Mandative subjunctive: Bare verb 'remain' following adjective of urgency 'crucial that'." },
        { sentence: "If she were in possession of the encryption key, she would decipher the ledger at once.", contextOrBreakdown: "Past hypothetical subjunctive: 'were' used with third-person singular 'she'." }
      ],
      wordMeanings: [
        { word: "Mandative", partOfSpeech: "adjective", definition: "Expressing a command, demand, or strong advice.", exampleSentence: "The mandative subjunctive requires the bare root of the verb." },
        { word: "Counterfactual", partOfSpeech: "adjective", definition: "Expressing what is contrary to actual fact.", exampleSentence: "'If I were a bird' is a counterfactual proposition." },
        { word: "Imperative", partOfSpeech: "adjective", definition: "Of vital importance; crucial.", exampleSentence: "It is imperative that we reach an agreement." }
      ],
      spokenUsageTips: [
        "In casual speech, many native speakers slip and say 'If I was you', but in formal writing, speeches, and interviews, 'If I were you' is the mark of educated elegance.",
        "Fixed subjunctive idioms to memorize: 'Be that as it may' (regardless), 'As it were' (so to speak), 'Heaven forbid' (may it not happen)."
      ],
      commonMistakes: [
        { incorrect: "The doctor recommended that he takes this medication twice daily.", correct: "The doctor recommended that he take this medication twice daily.", explanation: "Verbs of recommendation take the mandative subjunctive bare infinitive 'take', never 'takes'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence displays the correct mandative subjunctive form?",
          options: [
            "The committee requested that she is present at the hearing.",
            "The committee requested that she be present at the hearing.",
            "The committee requested that she was present at the hearing.",
            "The committee requested that she will be present at the hearing."
          ],
          answer: "The committee requested that she be present at the hearing.",
          explanation: "'Requested that' triggers the mandative subjunctive, requiring the base infinitive 'be'."
        }
      ],
      dialogue: [
        { speaker: "Judge", text: "The court mandates that the defendant provide full restitution to the victims." },
        { speaker: "Defense Attorney", text: "Understood, Your Honor. My client will comply with the mandate immediately." }
      ],
      quickSummary: [
        "Mandative Subjunctive: Bare infinitive after demand/recommend verbs (insist that he BE / GO).",
        "Hypothetical Subjunctive: Use 'WERE' for all persons (If I were you; I wish he were here).",
        "Mandative negative: place 'not' directly before the bare infinitive."
      ]
    }
  ]
};
