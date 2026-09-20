import { CourseChapter } from "./types";

export const CHAPTER_6: CourseChapter = {
  id: 6,
  number: 6,
  title: "Active & Passive Voice Transformations",
  description: "Shift focus between doer and recipient: master passive tense matrices, causative structures, impersonal reporting formulas, and academic registers.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch6-l1",
      chapterId: 6,
      lessonNumber: 1,
      title: "The Core Anatomy: Transitivity, Agent, and Patient in Voice",
      tagline: "Shifting the semantic spotlight from the actor to the entity acted upon.",
      objectives: [
        "Distinguish the semantic Agent (doer) from the Patient/Theme (recipient).",
        "Verify verb transitivity as a prerequisite for passive transformation.",
        "Recognize the fundamental morphological formula: Be + Past Participle (V3)."
      ],
      introduction: "Voice describes the grammatical relationship between the action of the verb and the participants identified by its arguments. In the active voice, the subject acts; in the passive voice, the subject is acted upon.",
      deepExplanation: "In active sentences, the grammatical subject coincides with the semantic Agent (the entity executing the action). In passive sentences, the direct object Patient/Theme is promoted to the position of grammatical subject, while the Agent is either demoted to an optional prepositional phrase ('by...') or omitted entirely. Because a passive transformation requires an object to promote to subject, ONLY transitive verbs can be transformed into the passive voice.",
      grammarMechanics: "Active: [Agent Subject] + [Transitive Verb] + [Patient Object]. Passive: [Patient Subject] + [Form of BE] + [Past Participle V3] + (by Agent).",
      rules: [
        "Only transitive verbs (verbs that take a direct object) can be transformed into the passive voice.",
        "Intransitive verbs (e.g., happen, arrive, die, fall, sneeze, exist) CANNOT be made passive.",
        "The verb 'to be' in the passive must match the original active tense and agree in number with the new subject.",
        "The main lexical verb ALWAYS appears in its past participle form (V3)."
      ],
      formula: "Active: S + V + O ===> Passive: O (New Subject) + [Be] + [V3] + (by S)",
      formulaBreakdown: "Active: 'The architect (S) designed (V) the tower (O).' -> Passive: 'The tower (New S) was designed (Be + V3) by the architect.'",
      examples: [
        { sentence: "The executive committee approved the revolutionary healthcare proposal.", contextOrBreakdown: "Active voice: Subject 'executive committee' executes the action of approving." },
        { sentence: "The revolutionary healthcare proposal was approved by the executive committee.", contextOrBreakdown: "Passive voice: Object 'proposal' promoted to subject; focus shifts to the proposal." },
        { sentence: "A severe earthquake occurred near the archipelago at midnight.", contextOrBreakdown: "Intransitive verb 'occurred': cannot be transformed into the passive voice." }
      ],
      wordMeanings: [
        { word: "Transitivity", partOfSpeech: "noun", definition: "The ability of a verb to take a direct object.", exampleSentence: "Transitivity is the essential prerequisite for passive transformation." },
        { word: "Patient", partOfSpeech: "noun", definition: "In linguistics, the entity that undergoes or receives the action of a verb.", exampleSentence: "In the passive voice, the patient occupies the subject position." },
        { word: "Demote", partOfSpeech: "verb", definition: "Move to a lower position or rank; in grammar, to shift an agent to an optional prepositional adjunct.", exampleSentence: "The agent is demoted to a 'by'-phrase in the passive." }
      ],
      spokenUsageTips: [
        "Use active voice when you want to highlight who did something with energy and clarity.",
        "Use passive voice when the actor is unknown, obvious, confidential, or when the result is far more important than the person."
      ],
      commonMistakes: [
        { incorrect: "The tragic accident was happened on the highway yesterday.", correct: "The tragic accident happened on the highway yesterday.", explanation: "'Happen' is an intransitive verb and cannot exist in the passive voice." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following sentences CANNOT be converted into the passive voice?",
          options: [
            "The engineer calibrated the sensor.",
            "The ancient building collapsed suddenly.",
            "The surgeon performed the delicate transplant.",
            "The artist painted a magnificent mural."
          ],
          answer: "The ancient building collapsed suddenly.",
          explanation: "'Collapsed' is intransitive here and has no direct object to promote to the subject position."
        }
      ],
      dialogue: [
        { speaker: "Editor", text: "Why did you write 'The mistake was committed by the accounting clerk'?" },
        { speaker: "Writer", text: "I wanted to focus on the error itself; but in active voice, 'The accounting clerk committed the mistake' is much more direct." }
      ],
      quickSummary: [
        "Active: Subject performs the action. Passive: Subject receives the action.",
        "Only transitive verbs can form the passive voice.",
        "Formula: Form of 'BE' + Past Participle (V3)."
      ]
    },
    {
      id: "ch6-l2",
      chapterId: 6,
      lessonNumber: 2,
      title: "Transforming the 12 Tenses into the Passive Voice",
      tagline: "The complete tense matrix: calibrating auxiliary 'be' across every temporal coordinate.",
      objectives: [
        "Convert Simple, Continuous, and Perfect tenses into the passive voice.",
        "Identify which four tenses (Future Continuous and the three Perfect Continuous aspects) are avoided in passive.",
        "Maintain perfect subject-verb number agreement with the promoted patient subject."
      ],
      introduction: "To execute passive transformations flawlessly, you must master the conjugation of the auxiliary verb 'to be' across every standard English tense.",
      deepExplanation: "In every passive sentence, the tense is carried entirely by the auxiliary verb 'to be', while the lexical verb remains perpetually frozen in its past participle (V3) state. Continuous passive tenses insert the auxiliary participle 'being' (e.g., 'is being analyzed', 'were being tested'). Perfect passive tenses insert 'been' (e.g., 'has been renovated', 'had been signed'). Note: English stylistically avoids passive constructions in the three Perfect Continuous tenses and the Future Continuous due to the clumsy phonetic stacking of 'been being'.",
      grammarMechanics: "Simple Present: am/is/are + V3. Present Cont: am/is/are being + V3. Present Perfect: have/has been + V3. Simple Past: was/were + V3. Past Cont: was/were being + V3. Past Perfect: had been + V3. Simple Future: will be + V3. Future Perfect: will have been + V3.",
      rules: [
        "The number agreement of the auxiliary 'be' changes to match the NEW subject, NOT the old agent.",
        "Present continuous passive requires 'being': 'The road is being repaired' (NOT 'is repairing').",
        "Present perfect passive requires 'been': 'The invoice has been paid' (NOT 'has paid').",
        "Avoid stacking 'been being' (e.g., 'has been being tested'); rephrase in the active voice."
      ],
      formula: "Tense Matrix: New Subject + [Tense-Conjugated Form of BE] + [V3 Past Participle]",
      formulaBreakdown: "Present Continuous: 'The bridge (Singular) is being inspected (is + being + V3) by engineers.'",
      examples: [
        { sentence: "The state-of-the-art telemetry system is being calibrated as we speak.", contextOrBreakdown: "Present continuous passive: 'is being calibrated'." },
        { sentence: "All outstanding invoices had been settled before the financial quarter concluded.", contextOrBreakdown: "Past perfect passive: 'had been settled'." },
        { sentence: "The bilateral defense agreement will have been ratified by December.", contextOrBreakdown: "Future perfect passive: 'will have been ratified'." }
      ],
      wordMeanings: [
        { word: "Matrix", partOfSpeech: "noun", definition: "An environment or grid in which something develops, is organized, or originates.", exampleSentence: "The tense matrix illustrates passive conjugations." },
        { word: "Clumsy", partOfSpeech: "adjective", definition: "Awkward in style, manner, or grammatical construction.", exampleSentence: "'Has been being done' is stylistically clumsy and avoided in modern English." },
        { word: "Calibrate", partOfSpeech: "verb", definition: "Adjust (experimental results or values) to take external conditions into account or ensure standard precision.", exampleSentence: "The instruments are being calibrated." }
      ],
      spokenUsageTips: [
        "Ensure you articulate the difference between 'being' (/ˈbiː.ɪŋ/ - two syllables) in continuous passives and 'been' (/bɪn/ - one short syllable) in perfect passives.",
        "Continuous passives are extremely frequent in live news reporting ('The suspect is being interrogated right now')."
      ],
      commonMistakes: [
        { incorrect: "The new skyscraper is constructing in the downtown district.", correct: "The new skyscraper is being constructed in the downtown district.", explanation: "Without 'being + V3', the sentence absurdly implies that the inanimate skyscraper is physically building something itself!" }
      ],
      practiceQuiz: [
        {
          question: "What is the passive transformation of: 'The technician was repairing the server'?",
          options: [
            "The server was repaired by the technician.",
            "The server was being repaired by the technician.",
            "The server has been repaired by the technician.",
            "The server is being repaired by the technician."
          ],
          answer: "The server was being repaired by the technician.",
          explanation: "Past continuous active ('was repairing') transforms into past continuous passive ('was being repaired')."
        }
      ],
      dialogue: [
        { speaker: "News Anchor", text: "What is the situation at the flood barrier?" },
        { speaker: "Field Reporter", text: "Reinforcements are being installed, and emergency supplies have already been distributed to all affected residents." }
      ],
      quickSummary: [
        "The tense is carried by 'be'; the main verb is always V3.",
        "Continuous passives require 'being' (is being evaluated).",
        "Perfect passives require 'been' (has been evaluated).",
        "Check agreement with the new subject."
      ]
    },
    {
      id: "ch6-l3",
      chapterId: 6,
      lessonNumber: 3,
      title: "The Agent by-Phrase: When to Include and When to Omit",
      tagline: "Pruning unnecessary agents and highlighting essential attribution.",
      objectives: [
        "Recognize the four conditions under which the 'by-phrase' MUST be omitted.",
        "Identify when retaining the 'by-phrase' provides critical historical or legal attribution.",
        "Eliminate redundant clutter in passive prose."
      ],
      introduction: "In over eighty percent of natural English passive sentences, the agent ('by someone') is omitted entirely. Understanding when to drop or retain the agent is the mark of a skilled communicator.",
      deepExplanation: "The agent should be omitted when: 1. The agent is unknown ('My bicycle was stolen'). 2. The agent is obvious or universal ('The criminal was arrested [by police - obvious]'). 3. The agent is deliberately kept anonymous for tact or diplomatic reasons ('Mistakes were made'). 4. The focus is entirely on the result or scientific process. Conversely, the agent MUST be included when the specific identity of the creator, author, or historical agent provides the primary informational value ('Hamlet was written by William Shakespeare').",
      grammarMechanics: "Passive without agent: S + Be + V3. Passive with agent: S + Be + V3 + by + [Specific Important Agent].",
      rules: [
        "Omit the agent if it is a vague pronoun like 'by people', 'by someone', 'by them', or 'by us'.",
        "Retain the agent if it names a specific individual, historical figure, or surprising entity.",
        "Use 'with' instead of 'by' when referring to an instrument, tool, or material ('The letter was written with a fountain pen', 'The cake was covered with chocolate').",
        "In scientific and lab reports, omit the human experimenter to emphasize objective empirical neutrality."
      ],
      formula: "Agent vs Instrument: S + [Be + V3] + [by + Human Agent] + [with + Physical Tool]",
      formulaBreakdown: "'The ancient door was breached (Passive) by the invaders (Agent) with a heavy iron ram (Instrument).'",
      examples: [
        { sentence: "The missing archaeological artifacts were discovered buried beneath the Roman amphitheater.", contextOrBreakdown: "Agent omitted because the discovery itself is the primary focus; the specific discoverers are secondary." },
        { sentence: "The theory of general relativity was formulated by Albert Einstein in 1915.", contextOrBreakdown: "Agent retained because the specific intellectual identity of the author constitutes essential historic knowledge." },
        { sentence: "The safe was opened with a specialized thermal torch.", contextOrBreakdown: "Preposition 'with' indicates the physical instrument/tool rather than an agent." }
      ],
      wordMeanings: [
        { word: "Attribution", partOfSpeech: "noun", definition: "The action of regarding something as being caused by a person or thing; credit.", exampleSentence: "Proper historical attribution requires naming the author." },
        { word: "Redundancy", partOfSpeech: "noun", definition: "The state of being not or no longer needed or useful; superfluous repetition.", exampleSentence: "Saying 'The thief was arrested by the police' creates redundant clutter." },
        { word: "Instrument", partOfSpeech: "noun", definition: "A tool or implement, especially one for precision work.", exampleSentence: "Instruments take 'with' rather than 'by' in passive constructions." }
      ],
      spokenUsageTips: [
        "Never clutter your sentences with 'by someone' or 'by people'; drop them completely.",
        "Remember: By = the doer / With = the tool (e.g., 'Killed by an assassin with a dagger')."
      ],
      commonMistakes: [
        { incorrect: "The window was broken by a stone.", correct: "The window was broken with a stone. (OR: ...broken by a boy with a stone.)", explanation: "A stone is an inanimate instrument, requiring 'with'; 'by' is reserved for the agent." }
      ],
      practiceQuiz: [
        {
          question: "Which preposition correctly fills the blank: 'The parchment was inscribed ______ an eagle quill'?",
          options: ["by", "with", "from", "through"],
          answer: "with",
          explanation: "An eagle quill is an inanimate writing tool/instrument, requiring 'with'."
        }
      ],
      dialogue: [
        { speaker: "Journalist", text: "Why was the minister's name omitted from the press release regarding the fiscal blunder?" },
        { speaker: "Press Secretary", text: "The statement read 'Errors were identified during the internal audit'; the focus was placed on corrective remediation." }
      ],
      quickSummary: [
        "Omit the agent when unknown, obvious, unimportant, or general.",
        "Retain 'by + agent' when the specific creator or identity is essential.",
        "Use 'BY' for the agent; use 'WITH' for the physical tool or material."
      ]
    },
    {
      id: "ch6-l4",
      chapterId: 6,
      lessonNumber: 4,
      title: "Passive with Modals and Semi-Modals",
      tagline: "Expressing necessity, capability, and deduction in the passive voice.",
      objectives: [
        "Construct present and future modal passives: Modal + be + Past Participle (V3).",
        "Construct past modal passives: Modal + have been + Past Participle (V3).",
        "Transform semi-modals (have to, ought to, need to) into the passive voice."
      ],
      introduction: "When combining modal nuances (permission, obligation, possibility) with the passive voice, the auxiliary 'be' or 'have been' sits directly between the modal and the past participle.",
      deepExplanation: "In the present or future, all modal passives follow the simple blueprint: 'Modal Auxiliary + BE + Past Participle (V3)' (e.g., 'The contract must be signed'). In the past, modal passives require the perfect aspect: 'Modal Auxiliary + HAVE BEEN + Past Participle (V3)' (e.g., 'The contract should have been signed yesterday'). Semi-modals follow their normal conjugation patterns (e.g., 'has to be done', 'needs to be checked').",
      grammarMechanics: "Present Modal Passive: Modal + be + V3. Past Modal Passive: Modal + have been + V3. Semi-Modal: have/has to be + V3.",
      rules: [
        "Never insert 'to' after pure modals (say 'It must be done', NOT 'It must to be done').",
        "In past modal passives, 'have been' never conjugates to 'has been' (say 'She could have been elected', NOT 'She could has been').",
        "'Need' can form passive either as 'needs to be done' or with a gerund: 'The car needs washing'.",
        "Negative modal passive: Modal + not + be + V3 ('The data cannot be disclosed')."
      ],
      formula: "Present: S + Modal + be + V3 | Past: S + Modal + have been + V3",
      formulaBreakdown: "'The confidential documents (S) should have been shredded (Modal + have been + V3) immediately.'",
      examples: [
        { sentence: "All hazardous waste containers must be inspected prior to maritime transport.", contextOrBreakdown: "Present modal passive expressing mandatory obligation." },
        { sentence: "The structural flaw could have been detected much earlier with advanced ultrasonic scanning.", contextOrBreakdown: "Past modal passive expressing an unrealized past possibility." },
        { sentence: "This operational issue needs to be addressed before the general shareholder meeting.", contextOrBreakdown: "Semi-modal passive utilizing 'needs to be' + past participle." }
      ],
      wordMeanings: [
        { word: "Ultrasonic", partOfSpeech: "adjective", definition: "Of or involving sound waves with a frequency above the upper limit of human hearing.", exampleSentence: "Ultrasonic testing revealed internal fractures." },
        { word: "Remediation", partOfSpeech: "noun", definition: "The action of remedying something, in particular of reversing or stopping environmental damage.", exampleSentence: "Immediate environmental remediation must be undertaken." },
        { word: "Hazardous", partOfSpeech: "adjective", definition: "Risky; dangerous.", exampleSentence: "Hazardous chemicals must be handled with utmost care." }
      ],
      spokenUsageTips: [
        "Pronounce 'should have been' as /ˈʃʊd.əv bɪn/ in natural connected speech.",
        "In office environments, 'This needs to be completed today' is standard diplomatic phrasing for assigning urgent tasks."
      ],
      commonMistakes: [
        { incorrect: "The report should have being submitted on Friday.", correct: "The report should have been submitted on Friday.", explanation: "After 'have', you must use the past participle 'been', never the present participle 'being'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly expresses a past modal passive critique?",
          options: [
            "The emergency alarms should have been sounded immediately.",
            "The emergency alarms should have being sounded immediately.",
            "The emergency alarms should been sounded immediately.",
            "The emergency alarms should to be sounded immediately."
          ],
          answer: "The emergency alarms should have been sounded immediately.",
          explanation: "Past modal passive requires: Modal ('should') + have been + Past Participle ('sounded')."
        }
      ],
      dialogue: [
        { speaker: "Investigator", text: "Why were the backup generators inoperative during the blackout?" },
        { speaker: "Technician", text: "They had not been serviced; they ought to have been inspected last month." }
      ],
      quickSummary: [
        "Present modal passive: Modal + be + V3 (must be completed).",
        "Past modal passive: Modal + have been + V3 (should have been completed).",
        "Semi-modals: have/has to be + V3, needs to be + V3."
      ]
    },
    {
      id: "ch6-l5",
      chapterId: 6,
      lessonNumber: 5,
      title: "Double-Object Verbs in Passive Construction",
      tagline: "Promoting Indirect vs Direct Objects: Choosing the most natural passive subject.",
      objectives: [
        "Transform ditransitive verbs (give, send, award, teach, offer, pay, lend) into two distinct passive variants.",
        "Identify why promoting the human Indirect Object to subject is the preferred native idiom.",
        "Retain the required preposition 'to' or 'for' when promoting the Direct Object."
      ],
      introduction: "Ditransitive verbs take two objects: a Direct Object (DO) and an Indirect Object (IO). When converting these verbs into the passive, either object can theoretically be promoted to the subject position.",
      deepExplanation: "Given the active sentence 'The director awarded Sarah the medal', two passive transformations are grammatically possible: Pattern A (promoting the Indirect Object): 'Sarah was awarded the medal.' Pattern B (promoting the Direct Object): 'The medal was awarded TO Sarah.' In native spoken and written English, Pattern A (promoting the person / recipient) is overwhelmingly favored because English naturally prefers human subjects as the topic of discourse.",
      grammarMechanics: "Preferred: [Recipient IO Subject] + Be + V3 + [Direct Object retained]. Secondary: [Theme DO Subject] + Be + V3 + to/for + [Recipient IO].",
      rules: [
        "Promoting the person (Indirect Object) is more natural and idiomatic in English ('I was offered a job', NOT 'A job was offered to me').",
        "If you promote the Direct Object, you MUST retain the preposition 'to' or 'for' before the recipient.",
        "The retained object in Pattern A sits directly after the past participle without any preposition ('She was granted permission').",
        "Verbs like 'explain', 'suggest', and 'describe' cannot undergo Pattern A because they are not ditransitive."
      ],
      formula: "Preferred Pattern: [Person Recipient] + [was / were + V3] + [Direct Object]",
      formulaBreakdown: "'Dr. Vance (Person) was granted (Passive) a prestigious research fellowship (Retained DO).'",
      examples: [
        { sentence: "The injured veteran was awarded the Congressional Medal of Honor.", contextOrBreakdown: "Preferred passive: Human recipient 'veteran' promoted to subject; 'medal' retained as direct object." },
        { sentence: "A substantial cash bonus was paid to every manufacturing employee.", contextOrBreakdown: "Direct object promoted; preposition 'to' retained before the human recipient." },
        { sentence: "The graduate was offered a competitive position at the international consultancy.", contextOrBreakdown: "Natural idiom: 'was offered a position' rather than 'a position was offered to him'." }
      ],
      wordMeanings: [
        { word: "Ditransitive", partOfSpeech: "adjective", definition: "Denoting a verb that takes both a direct and an indirect object.", exampleSentence: "'Give', 'award', and 'send' are ditransitive verbs." },
        { word: "Retained", partOfSpeech: "adjective", definition: "Kept in possession or continued in syntactic use.", exampleSentence: "In ditransitive passives, the direct object remains as a retained object." },
        { word: "Prestige", partOfSpeech: "noun", definition: "Widespread respect and admiration felt for someone or something on the basis of their achievements or quality.", exampleSentence: "The award carries immense academic prestige." }
      ],
      spokenUsageTips: [
        "In interviews, say 'I was given the responsibility of...' rather than 'The responsibility was given to me'. It sounds far more authoritative.",
        "Say 'I was told that...' instead of 'It was said to me that...'."
      ],
      commonMistakes: [
        { incorrect: "The scholarship was awarded him yesterday.", correct: "The scholarship was awarded to him yesterday. (OR: He was awarded the scholarship yesterday.)", explanation: "If the direct object ('scholarship') is the subject, the preposition 'to' is mandatory before the recipient." }
      ],
      practiceQuiz: [
        {
          question: "Which of the two passive sentences is the most natural and idiomatic in English?",
          options: [
            "A prestigious promotion was offered to Clara.",
            "Clara was offered a prestigious promotion.",
            "Both are completely identical in conversational frequency.",
            "Neither is grammatically permissible."
          ],
          answer: "Clara was offered a prestigious promotion.",
          explanation: "Native English heavily prefers promoting the personal recipient ('Clara') to the subject position."
        }
      ],
      dialogue: [
        { speaker: "Colleague", text: "Did you hear the news about David?" },
        { speaker: "Manager", text: "Yes! He was offered the directorship in Singapore, and he accepted the appointment immediately." }
      ],
      quickSummary: [
        "Ditransitive verbs have two objects and thus two passive forms.",
        "Promoting the human recipient ('He was awarded...') is standard and preferred.",
        "Promoting the thing requires 'to' or 'for' before the recipient ('The medal was awarded TO him')."
      ]
    },
    {
      id: "ch6-l6",
      chapterId: 6,
      lessonNumber: 6,
      title: "Causative Passive: Have Something Done & Get Something Done",
      tagline: "Arranging for professional third parties to execute tasks on your behalf.",
      objectives: [
        "Construct the causative passive: Subject + have/get + Object + Past Participle (V3).",
        "Differentiate professional services ('have something done') from accidental misfortunes.",
        "Distinguish active causative (have someone DO / get someone TO DO) from passive causative."
      ],
      introduction: "You probably do not service your own aircraft, cut your own hair, or print your own legal contracts. When you arrange for someone else to perform a service for you, English employs the Causative Passive.",
      deepExplanation: "The Causative Passive formula is: 'Subject + have / get + Object + Past Participle (V3)'. In this structure, the subject does not perform the physical labor; instead, the subject causes, commissions, or hires someone else to execute it (e.g., 'I had my car repaired' = a mechanic repaired it for me). 'Get' is slightly more informal than 'have'. Furthermore, this exact same structure expresses unexpected adverse mishaps ('He had his passport stolen').",
      grammarMechanics: "Passive Causative: S + have/get + Object + V3. Active Causative with have: S + have + Person + Base Verb. Active Causative with get: S + get + Person + TO + Base Verb.",
      rules: [
        "In the passive causative, the object precedes the past participle (say 'I had my teeth cleaned', NOT 'I had cleaned my teeth').",
        "'I cleaned my teeth' = I did it myself; 'I had my teeth cleaned' = a dentist did it for me.",
        "Active causative with 'have' takes a BARE infinitive ('I had the mechanic inspect the engine').",
        "Active causative with 'get' takes a FULL infinitive with 'to' ('I got the mechanic to inspect the engine')."
      ],
      formula: "Passive Causative: S + [have / get (any tense)] + [Thing/Object] + [V3 Past Participle]",
      formulaBreakdown: "'The firm (S) is having (Tense) its financial ledgers (Object) audited (V3) by an independent auditor.'",
      examples: [
        { sentence: "The university is having the historic library renovated throughout the summer semester.", contextOrBreakdown: "Causative passive: Contracted professional renovators are doing the physical work." },
        { sentence: "We must get these blueprints approved by the municipal zoning authority.", contextOrBreakdown: "Causative passive using 'get' + object + past participle 'approved'." },
        { sentence: "During his journey across the continent, the diplomat had his luggage misplaced by the airline.", contextOrBreakdown: "Adverse misfortune expressed through the causative passive structure." }
      ],
      wordMeanings: [
        { word: "Causative", partOfSpeech: "adjective", definition: "Expressing causation; denoting an action caused to be performed by someone else.", exampleSentence: "'Have something done' is the standard passive causative formula." },
        { word: "Commission", partOfSpeech: "verb", definition: "Order or authorize the production of (something) or authorize (a person) to do something.", exampleSentence: "The gallery commissioned a master sculptor to craft the monument." },
        { word: "Adverse", partOfSpeech: "adjective", definition: "Preventing success or development; harmful; unfavorable.", exampleSentence: "Causatives can describe adverse, unforeseen accidents." }
      ],
      spokenUsageTips: [
        "Use 'have something done' in business to convey executive delegation: 'I will have this document prepared by noon'.",
        "Never say 'I cut my hair yesterday' unless you personally stood in front of a mirror with scissors; say 'I had my hair cut'."
      ],
      commonMistakes: [
        { incorrect: "I cut my hair yesterday at the luxury salon downtown.", correct: "I had my hair cut yesterday at the luxury salon downtown.", explanation: "Unless you physically cut your own locks, you must use the causative passive 'had my hair cut'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following active causative sentences uses the correct infinitive form?",
          options: [
            "The director had the assistant to prepare the agenda.",
            "The director had the assistant prepare the agenda.",
            "The director got the assistant prepare the agenda.",
            "The director had the assistant preparing the agenda."
          ],
          answer: "The director had the assistant prepare the agenda.",
          explanation: "Active causative 'have someone do something' takes the bare infinitive ('prepare') without 'to'."
        }
      ],
      dialogue: [
        { speaker: "Homeowner", text: "Your roof looks pristine! Did you replace the slate tiles yourself?" },
        { speaker: "Neighbor", text: "Goodness, no! I had the entire roof replaced by licensed contractors last week." }
      ],
      quickSummary: [
        "Formula: S + have/get + Object + V3 (past participle).",
        "Indicates arranging for someone else to perform a service.",
        "Active causative: have someone DO (bare) vs get someone TO DO (full infinitive)."
      ]
    },
    {
      id: "ch6-l7",
      chapterId: 6,
      lessonNumber: 7,
      title: "Impersonal Passive & Reporting Structures (It is said that... / He is thought to be...)",
      tagline: "Distancing speech and reporting rumors, scientific consensus, and general beliefs.",
      objectives: [
        "Construct Impersonal Passive Pattern A: 'It is + V3 (said/believed/thought) that...'.",
        "Construct Personal Passive Reporting Pattern B: 'Subject + is + V3 + to be / to have been...'.",
        "Deploy appropriate reporting participles: claimed, alleged, estimated, reported, rumored."
      ],
      introduction: "In journalistic reporting, scientific papers, and legal proceedings, attributing claims to unnamed collective consensus or avoiding libel requires the Impersonal Passive.",
      deepExplanation: "When reporting what people in general believe, think, or claim without quoting an individual source, English uses two sophisticated passive patterns: Pattern A begins with dummy 'It': 'It is believed that the company is insolvent.' Pattern B promotes the actual subject of the subordinate clause and links it with an infinitive: 'The company is believed TO BE insolvent.' If the reported event took place in the past relative to the belief, Pattern B uses a perfect infinitive ('The company is believed TO HAVE BEEN insolvent').",
      grammarMechanics: "Pattern A: It + is/was + [V3 Report Verb] + that + Clause. Pattern B: [Subject] + is/was + [V3 Report Verb] + to + [Infinitive (Base or have+V3)].",
      rules: [
        "Verbs commonly used in this structure: say, believe, think, report, understand, consider, expect, claim, allege.",
        "Use 'to have + V3' (perfect infinitive) in Pattern B if the reported action preceded the time of reporting.",
        "Use 'to be + -ing' in Pattern B if the reported action is in active progress ('He is reported to be hiding in Spain').",
        "Do not blend the two patterns (never say 'It is said he to be...')."
      ],
      formula: "Pattern B (Past Action): Subject + is / was + [V3] + to have + [V3]",
      formulaBreakdown: "'The ancient king (S) is thought (Passive report) to have built (Perfect infinitive) the citadel.'",
      examples: [
        { sentence: "It is widely reported that the central bank will reduce interest rates next quarter.", contextOrBreakdown: "Pattern A: Impersonal dummy 'It' followed by 'that'-clause." },
        { sentence: "The fugitive financier is believed to be residing in an undisclosed offshore haven.", contextOrBreakdown: "Pattern B with continuous infinitive: 'is believed to be residing'." },
        { sentence: "The prehistoric monument is estimated to have been constructed over four millennia ago.", contextOrBreakdown: "Pattern B with passive perfect infinitive: 'is estimated to have been constructed'." }
      ],
      wordMeanings: [
        { word: "Allege", partOfSpeech: "verb", definition: "Claim or assert that someone has done something illegal or wrong, typically without proof.", exampleSentence: "The defendant is alleged to have misappropriated company funds." },
        { word: "Libel", partOfSpeech: "noun", definition: "A published false statement that is damaging to a person's reputation.", exampleSentence: "Impersonal passives shield journalists from libel." },
        { word: "Insolvent", partOfSpeech: "adjective", definition: "Unable to pay debts owed.", exampleSentence: "The commercial bank was declared insolvent." }
      ],
      spokenUsageTips: [
        "Use 'It is understood that...' or 'He is expected to...' in executive press releases to maintain professional neutrality.",
        "In academic debates, say 'It has been argued that...' to present a theory respectfully."
      ],
      commonMistakes: [
        { incorrect: "He is believed to escape the country last night.", correct: "He is believed to have escaped the country last night.", explanation: "Because the escape happened in the past prior to the current belief, you must use the perfect infinitive 'to have escaped'." }
      ],
      practiceQuiz: [
        {
          question: "How would you rewrite 'People believe that Mozart composed over 600 works' using Pattern B?",
          options: [
            "It is believed that Mozart composed over 600 works.",
            "Mozart is believed to compose over 600 works.",
            "Mozart is believed to have composed over 600 works.",
            "Mozart was believed to compose over 600 works."
          ],
          answer: "Mozart is believed to have composed over 600 works.",
          explanation: "Because the composing happened in the past, Pattern B requires the perfect infinitive 'to have composed'."
        }
      ],
      dialogue: [
        { speaker: "Journalist", text: "What is the latest intelligence concerning the sunken galleon?" },
        { speaker: "Historian", text: "The vessel is rumored to have carried billions in precious gemstones when it foundered in 1708." }
      ],
      quickSummary: [
        "Pattern A: It is said / believed / reported that + clause.",
        "Pattern B: Subject is said / believed + TO + infinitive.",
        "Use 'to have + V3' (perfect infinitive) when the reported action happened earlier in the past."
      ]
    },
    {
      id: "ch6-l8",
      chapterId: 6,
      lessonNumber: 8,
      title: "Stative and Ergative Verbs (Why certain verbs resist the passive)",
      tagline: "Uncovering verbs of state, ownership, and self-acting middle voice ergatives.",
      objectives: [
        "Identify transitive stative verbs that resist the passive (have, resemble, fit, suit, lack).",
        "Master Ergative Verbs (middle voice verbs that can change state without a passive marker).",
        "Prevent ungrammatical passive formations with pseudo-transitive expressions."
      ],
      introduction: "Not every sentence with an object can be made passive! A subset of transitive stative verbs and fascinating 'ergative' verbs completely defy standard passive transformations.",
      deepExplanation: "Certain stative verbs take direct objects but denote relationships of possession, resemblance, or containment rather than dynamic action (e.g., have, resemble, fit, suit, lack, weigh). You cannot say 'A blue car is had by me' or 'His father is resembled by him'. Additionally, English contains Ergative Verbs (open, close, break, melt, boil, freeze, increase, develop). An ergative verb can function actively with an agent ('He opened the door') OR the object can become the subject actively without any passive auxiliary ('The door opened').",
      grammarMechanics: "Ergative shift: Transitive Active: Agent + Verb + Theme ===> Intransitive Ergative: Theme + Verb (NO passive 'be').",
      rules: [
        "Never make 'have' (meaning possession) passive (say 'I have a car', NOT 'A car is had by me').",
        "Never make 'resemble', 'suit', 'fit', or 'equal' passive.",
        "Ergative verbs allow the object to become the subject actively: 'The sun melted the ice' -> 'The ice melted' (both are active!).",
        "When using ergative verbs, passive is only used when you specifically want to emphasize deliberate external human intervention ('The door was opened [by a guard]')."
      ],
      formula: "Ergative: S (Patient) + [Ergative Verb in Active Form] + (Adverbial)",
      formulaBreakdown: "'The water (Theme) boiled (Active Ergative Verb) at 100 degrees Celsius.'",
      examples: [
        { sentence: "The candidate resembles his predecessor in oratorical style.", contextOrBreakdown: "Transitive stative verb 'resembles'—cannot be converted into passive voice." },
        { sentence: "The massive glass doors opened automatically as the delegates approached.", contextOrBreakdown: "Ergative verb 'opened' functioning intransitively with no passive 'be'." },
        { sentence: "Global crude oil prices increased dramatically over the winter months.", contextOrBreakdown: "Ergative verb 'increased' depicting spontaneous economic shift without passive form." }
      ],
      wordMeanings: [
        { word: "Ergative", partOfSpeech: "adjective", definition: "Relating to a type of verb that can be used transitively (with an agent) and intransitively (where the object becomes the subject).", exampleSentence: "'Boil', 'open', and 'melt' are ergative verbs." },
        { word: "Inanimate", partOfSpeech: "adjective", definition: "Not alive, especially not like humans and animals.", exampleSentence: "Inanimate objects often serve as subjects of ergative verbs." },
        { word: "Oratorical", partOfSpeech: "adjective", definition: "Relating to the art or practice of formal speaking in public.", exampleSentence: "His oratorical prowess moved the audience to tears." }
      ],
      spokenUsageTips: [
        "Say 'The store closes at nine', not 'The store is closed by workers at nine'. Ergative verbs sound far more natural for everyday events.",
        "Say 'The window broke' when you do not know or do not wish to assign blame for who broke it."
      ],
      commonMistakes: [
        { incorrect: "Two brothers are had by my colleague.", correct: "My colleague has two brothers.", explanation: "'Have' expressing possession or kinship strictly resists the passive voice." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following sentences features an ERGATIVE verb acting intransitively?",
          options: [
            "The chef melted the butter in the saucepan.",
            "The butter was melted by the chef.",
            "The butter melted quickly in the warm saucepan.",
            "The butter is melting by the heat."
          ],
          answer: "The butter melted quickly in the warm saucepan.",
          explanation: "'The butter melted' uses the ergative verb 'melt' intransitively, where the patient ('butter') functions as the active subject."
        }
      ],
      dialogue: [
        { speaker: "Student", text: "Why do we say 'The kettle boiled' instead of 'The kettle was boiled'?" },
        { speaker: "Linguist", text: "Because 'boil' is an ergative verb; it can describe the change of state from the perspective of the object without requiring a passive construction!" }
      ],
      quickSummary: [
        "Stative verbs of possession/relationship (have, resemble, fit) NEVER take the passive.",
        "Ergative verbs (open, boil, melt, increase) can shift the object into an active subject without 'be'.",
        "Use ergative verbs for natural, spontaneous changes of state."
      ]
    },
    {
      id: "ch6-l9",
      chapterId: 6,
      lessonNumber: 9,
      title: "Prepositional Verbs and Phrasal Verbs in Passive Voice",
      tagline: "Keeping phrasal particles glued securely to their verbs during transformation.",
      objectives: [
        "Transform phrasal verbs (look after, call off, phase out, carry out) into passive voice.",
        "Retain the terminal preposition directly adjacent to the past participle.",
        "Distinguish separable phrasal verbs from inseparable prepositional verbs."
      ],
      introduction: "When a multi-word verb (a phrasal verb or prepositional verb) is converted into the passive voice, the preposition or adverbial particle MUST NOT be dropped; it remains glued to the past participle.",
      deepExplanation: "In English, verbs frequently combine with particles to create single semantic units (e.g., 'look after' = care for; 'call off' = cancel; 'look down on' = despise). When transforming these into the passive voice, students frequently feel uncomfortable leaving a preposition sitting at the end of the verb phrase (e.g., 'The child was looked after'). However, dropping the particle destroys the meaning ('looked' != 'looked after'). In correct English syntax, the preposition remains attached immediately to the past participle (V3).",
      grammarMechanics: "Active: Subject + [Verb + Particle] + Object ===> Passive: Object + [Be + V3 + Particle] + (by Subject).",
      rules: [
        "Never omit the preposition/particle in a passive phrasal verb (say 'The meeting was called off', NOT 'The meeting was called').",
        "Three-part phrasal-prepositional verbs retain BOTH particles in the passive ('He was looked down upon', 'The rules must be complied with').",
        "Do not insert the agent between the verb and its particle (say 'was carried out by the team', NOT 'was carried by the team out').",
        "Ensure natural rhythm: the participle and particle form a single phonetic thought unit."
      ],
      formula: "S + [Be + V3 + Preposition/Particle] + (by Agent)",
      formulaBreakdown: "'The international symposium (S) was called off (Be + V3 + Particle) due to the transit strike.'",
      examples: [
        { sentence: "The hazardous chemical waste was properly disposed of by certified technicians.", contextOrBreakdown: "Prepositional verb 'dispose of' retains preposition 'of' directly after participle 'disposed'." },
        { sentence: "All security protocols must be strictly adhered to at all times.", contextOrBreakdown: "Prepositional verb 'adhere to' retains 'to' at the end of the passive verb cluster." },
        { sentence: "The orphaned infants were lovingly looked after by the community elders.", contextOrBreakdown: "Phrasal verb 'look after' retains particle 'after'." }
      ],
      wordMeanings: [
        { word: "Particle", partOfSpeech: "noun", definition: "A minor function word that has little or no meaning in isolation and is used with another word, such as an adverb or preposition in a phrasal verb.", exampleSentence: "'Off' is the particle in 'call off'." },
        { word: "Adhere", partOfSpeech: "verb", definition: "Believe in and follow the practices of; stick fast to a surface or rule.", exampleSentence: "All personnel must adhere to safety regulations." },
        { word: "Dispose", partOfSpeech: "verb", definition: "Get rid of by throwing away, giving, or selling to someone else.", exampleSentence: "Industrial waste must be safely disposed of." }
      ],
      spokenUsageTips: [
        "Link the past participle and its preposition seamlessly: 'disposed of' sounds like /dɪˈspoʊzd əv/.",
        "Remember that 'laugh at' becomes 'be laughed at': 'He hated being laughed at'."
      ],
      commonMistakes: [
        { incorrect: "The hazardous materials were safely disposed yesterday.", correct: "The hazardous materials were safely disposed of yesterday.", explanation: "The prepositional verb is 'dispose of'; dropping 'of' is a severe grammatical error." }
      ],
      practiceQuiz: [
        {
          question: "What is the correct passive form of: 'The committee broke off the negotiations'?",
          options: [
            "The negotiations were broken by the committee.",
            "The negotiations were broken off by the committee.",
            "The negotiations were break off by the committee.",
            "The negotiations had broken by the committee."
          ],
          answer: "The negotiations were broken off by the committee.",
          explanation: "The particle 'off' must be retained directly adjacent to the past participle 'broken'."
        }
      ],
      dialogue: [
        { speaker: "Auditor", text: "Were the new financial accounting standards implemented punctually?" },
        { speaker: "Compliance Officer", text: "Yes, every regulatory guideline was strictly complied with across all departments." }
      ],
      quickSummary: [
        "Never drop the preposition or adverbial particle in passive phrasal verbs.",
        "Formula: Be + Past Participle (V3) + Preposition.",
        "Three-part verbs retain both particles (be looked down upon, be put up with)."
      ]
    },
    {
      id: "ch6-l10",
      chapterId: 6,
      lessonNumber: 10,
      title: "Strategic Stylistic Use of Passive in Academic, Scientific & Legal Register",
      tagline: "Wielding the passive voice to establish scientific objectivity and legal neutrality.",
      objectives: [
        "Deploy the passive voice strategically in laboratory methods and empirical documentation.",
        "Construct legal clauses that establish rights and obligations without personal bias.",
        "Balance active and passive voice to manage thematic flow (the Given-New information contract)."
      ],
      introduction: "While high-school grammar teachers often issue a blanket ban on the passive voice, advanced academic, scientific, and legal discourse depends upon it to establish objective credibility.",
      deepExplanation: "In scientific research, the personal identity of the experimenter is deliberately minimized to emphasize that findings are universally replicable by any competent scientist ('The reagent was heated to 300°C', NOT 'I heated the reagent'). In legal statutes, the passive creates binding institutional impartiality. Furthermore, the passive serves the 'Given-New Information Principle' in discourse: speakers place familiar, previously mentioned information at the start of a sentence (as the passive subject) and deliver novel information at the end.",
      grammarMechanics: "Given-New Contract: [Previously Known Topic as Passive Subject] + [Passive Verb] + [New Critical Information / Agent].",
      rules: [
        "In scientific methodology sections, use passive past tense to describe procedural steps objectively.",
        "Use active voice when presenting strong analytical arguments or interpretations in discussion sections.",
        "In legal drafting, use passive to establish institutional mandates ('Submissions must be filed within 30 days').",
        "Avoid excessive passive chains ('The report was written by the clerk who was hired by the firm'); maintain syntactic vigor."
      ],
      formula: "Scientific Passive: [Sample/Subject] + [was / were + V3] + at [Controlled Conditions]",
      formulaBreakdown: "'The crystal lattice (Sample) was bombarded (Passive) with thermal neutrons (Agent) for three hours.'",
      examples: [
        { sentence: "The specimens were centrifuged at 10,000 RPM and stored in cryogenic containment.", contextOrBreakdown: "Objective scientific methodology emphasizing replicable experimental procedures." },
        { sentence: "Any amendment to this constitution shall be ratified by a two-thirds supermajority.", contextOrBreakdown: "Legal statutory mandate framed in authoritative passive voice." },
        { sentence: "DNA was first sequenced in the 1970s. This revolutionary methodology was developed by Frederick Sanger.", contextOrBreakdown: "Given-New cohesion: 'revolutionary methodology' refers to the known topic (DNA sequencing) and links to the new agent at the sentence end." }
      ],
      wordMeanings: [
        { word: "Replicable", partOfSpeech: "adjective", definition: "Able to be copied or reproduced.", exampleSentence: "Scientific methodology must be fully replicable." },
        { word: "Cryogenic", partOfSpeech: "adjective", definition: "Relating to or involving the branch of physics that deals with the production and effects of very low temperatures.", exampleSentence: "Samples were placed in cryogenic storage." },
        { word: "Supermajority", partOfSpeech: "noun", definition: "A number that is much more than half of a total, especially in a vote.", exampleSentence: "Constitutional amendments require a two-thirds supermajority." }
      ],
      spokenUsageTips: [
        "In formal academic presentations, introduce your data with: 'The samples were collected across five distinct geographical biomes'.",
        "Use passive to gracefully accept feedback: 'Points were raised during the review that will be incorporated immediately'."
      ],
      commonMistakes: [
        { incorrect: "In my lab report I wrote: 'I took the test tube and then I shook it for five minutes.'", correct: "The test tube was agitated continuously for five minutes.", explanation: "Scientific academic registers require objective passive formulation rather than personal narrative." }
      ],
      practiceQuiz: [
        {
          question: "Why is the passive voice preferred in scientific methodology sections?",
          options: [
            "Because scientists do not know who performed the experiments.",
            "To emphasize the replicability of the objective procedure rather than the personal identity of the experimenter.",
            "Because active voice is forbidden in all written English.",
            "To make sentences unnecessarily long and complicated."
          ],
          answer: "To emphasize the replicability of the objective procedure rather than the personal identity of the experimenter.",
          explanation: "The passive establishes empirical objectivity and highlights that any scientist following the steps would achieve identical results."
        }
      ],
      dialogue: [
        { speaker: "Senior Scientist", text: "Why did you write 'We poured the acid into the beaker' in the manuscript?" },
        { speaker: "Junior Researcher", text: "I should have maintained scientific detachment: 'The acid was poured into the beaker slowly under a fume hood'." }
      ],
      quickSummary: [
        "Scientific register: Passive emphasizes objective, replicable methodology.",
        "Legal register: Passive establishes universal statutory impartiality.",
        "The Given-New contract: Passive keeps known information in the subject slot to introduce new insights smoothly."
      ]
    }
  ]
};
