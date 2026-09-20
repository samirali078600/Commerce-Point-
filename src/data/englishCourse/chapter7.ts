import { CourseChapter } from "./types";

export const CHAPTER_7: CourseChapter = {
  id: 7,
  number: 7,
  title: "Direct & Indirect Speech (Reported Speech Mastery)",
  description: "Relate conversations, executive statements, and interviews with grammatical precision: master backshifting, deictic shifts, and advanced reporting verbs.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch7-l1",
      chapterId: 7,
      lessonNumber: 1,
      title: "The Mechanics of Backshifting (Tense Regression Chart)",
      tagline: "Systematically stepping tenses one degree into the past when reporting speech.",
      objectives: [
        "Master the universal backshift rule following past tense reporting verbs.",
        "Transform each present tense into its corresponding past counterpart.",
        "Convert Simple Past and Present Perfect into the Past Perfect."
      ],
      introduction: "When relating what another person uttered at a prior point in time, English grammar steps the reported verb back one notch chronologically. This grammatical phenomenon is known as 'Backshifting'.",
      deepExplanation: "If the reporting verb is in the past (e.g., 'he said', 'she confirmed', 'they announced'), the verbs in the reported clause generally shift into the past. Simple Present becomes Simple Past; Present Continuous becomes Past Continuous; Present Perfect and Simple Past BOTH become Past Perfect; 'will' becomes 'would'; 'can' becomes 'could'. If the reporting verb is in the present ('he says'), NO backshift occurs.",
      grammarMechanics: "Direct -> Indirect: Simple Present -> Simple Past | Present Continuous -> Past Continuous | Present Perfect -> Past Perfect | Simple Past -> Past Perfect | Will -> Would.",
      rules: [
        "Backshifting is mandatory ONLY when the introductory reporting verb is in the past tense ('said', 'stated', 'told').",
        "If the reporting verb is in the present ('says', 'insists'), do NOT backshift the tenses.",
        "Both Simple Past ('I saw him') and Present Perfect ('I have seen him') converge into Past Perfect ('had seen') in reported speech.",
        "Past Perfect ('had seen') cannot shift any further back; it remains Past Perfect."
      ],
      formula: "Direct: S + 'V1' ===> Reported: S + said that + S + [V2]",
      formulaBreakdown: "Direct: 'I understand (V1) the plan.' -> Reported: 'He said that he understood (V2) the plan.'",
      examples: [
        { sentence: "Direct: 'We are expanding our Asian operations.' -> Indirect: The CEO announced that they were expanding their Asian operations.", contextOrBreakdown: "Present continuous 'are expanding' backshifts to past continuous 'were expanding'." },
        { sentence: "Direct: 'I have finalized the bilateral treaty.' -> Indirect: The ambassador stated that she had finalized the bilateral treaty.", contextOrBreakdown: "Present perfect 'have finalized' backshifts to past perfect 'had finalized'." },
        { sentence: "Direct: 'The turbine malfunctioned yesterday.' -> Indirect: The engineer reported that the turbine had malfunctioned the previous day.", contextOrBreakdown: "Simple past 'malfunctioned' backshifts to past perfect 'had malfunctioned'." }
      ],
      wordMeanings: [
        { word: "Backshifting", partOfSpeech: "noun", definition: "The change of a tense in reported speech to a tense further back in the past.", exampleSentence: "Backshifting is triggered by a past reporting verb." },
        { word: "Regression", partOfSpeech: "noun", definition: "A return to a former or less developed state; in grammar, stepping backward chronologically.", exampleSentence: "Tense regression ensures temporal consistency." },
        { word: "Converge", partOfSpeech: "verb", definition: "Come together from different directions so as to eventually meet.", exampleSentence: "Simple past and present perfect converge into the past perfect in reported speech." }
      ],
      spokenUsageTips: [
        "In spoken English, the conjunction 'that' is frequently omitted: 'He said he was tired'.",
        "Keep your reporting rhythm smooth without hesitation: 'She said she would call us'."
      ],
      commonMistakes: [
        { incorrect: "She said that she will come to the conference tomorrow.", correct: "She said that she would come to the conference tomorrow.", explanation: "Following the past reporting verb 'said', 'will' must backshift to 'would'." }
      ],
      practiceQuiz: [
        {
          question: "What is the correct reported speech form of: 'I bought a new vehicle' after 'Marcus stated...'?",
          options: [
            "Marcus stated that he bought a new vehicle.",
            "Marcus stated that he has bought a new vehicle.",
            "Marcus stated that he had bought a new vehicle.",
            "Marcus stated that he would buy a new vehicle."
          ],
          answer: "Marcus stated that he had bought a new vehicle.",
          explanation: "Simple past ('bought') backshifts into the past perfect ('had bought') in standard reported speech."
        }
      ],
      dialogue: [
        { speaker: "Colleague", text: "What did the auditor say about our fiscal records?" },
        { speaker: "Manager", text: "She confirmed that our ledgers were impeccably balanced and that we had complied with all regulatory mandates." }
      ],
      quickSummary: [
        "Past reporting verbs (said, told) trigger backshifting.",
        "Present becomes Past; Past and Present Perfect become Past Perfect.",
        "Will becomes Would; Can becomes Could."
      ]
    },
    {
      id: "ch7-l2",
      chapterId: 7,
      lessonNumber: 2,
      title: "Pronoun, Spatial, and Temporal Deictic Shifts (Here to There, Now to Then)",
      tagline: "Re-anchoring words of place, time, and personal reference to the reporter's context.",
      objectives: [
        "Shift personal and possessive pronouns to match the perspective of the new speaker.",
        "Convert temporal markers: today -> that day, tomorrow -> the following day, yesterday -> the previous day.",
        "Convert spatial indicators: here -> there, this -> that, these -> those, ago -> before."
      ],
      introduction: "Words like 'now', 'here', and 'tomorrow' are relative to the exact moment and location where they are uttered. When reporting speech in a different place or time, these words must shift.",
      deepExplanation: "In linguistics, 'Deixis' refers to words whose meaning depends entirely on the spatial, temporal, or personal context of the speaker. When turning direct speech into reported speech, personal pronouns shift to reflect the reporter and listener. Temporal markers must shift: 'now' becomes 'then' or 'at that time'; 'today' becomes 'that day'; 'yesterday' becomes 'the day before' or 'the previous day'; 'tomorrow' becomes 'the following day' or 'the next day'. Demonstratives shift: 'here' becomes 'there'; 'this' becomes 'that'.",
      grammarMechanics: "Here -> There | Now -> Then | Today -> That day | Yesterday -> The previous day | Tomorrow -> The next day / The following day | This -> That | Ago -> Before.",
      rules: [
        "Shift pronouns logically based on who is speaking to whom (I -> he/she; we -> they; my -> his/her).",
        "If you are reporting speech on the VERY SAME DAY it was spoken, you may retain 'today' or 'this morning'.",
        "If you are reporting speech in the VERY SAME LOCATION it was spoken, you may retain 'here'.",
        "Never combine an unshifted temporal marker with a backshifted verb ('He said he would leave tomorrow' -> say 'the next day')."
      ],
      formula: "Direct: 'I will inspect this facility tomorrow.' ===> Reported: He stated that he would inspect that facility the following day.",
      formulaBreakdown: "I -> he | will -> would | this -> that | tomorrow -> the following day.",
      examples: [
        { sentence: "Direct: 'We arrived here two days ago.' -> Indirect: They explained that they had arrived there two days before.", contextOrBreakdown: "Pronoun 'we' -> 'they', 'here' -> 'there', 'ago' -> 'before', 'arrived' -> 'had arrived'." },
        { sentence: "Direct: 'I am reviewing these dossiers today.' -> Indirect: The director noted that he was reviewing those dossiers that day.", contextOrBreakdown: "Deictic shifts: 'I' -> 'he', 'these' -> 'those', 'today' -> 'that day'." },
        { sentence: "Direct: 'Our delegation will depart tomorrow morning.' -> Indirect: The envoy declared that their delegation would depart the following morning.", contextOrBreakdown: "Shift of possessive 'our' -> 'their' and temporal 'tomorrow' -> 'the following'." }
      ],
      wordMeanings: [
        { word: "Deixis", partOfSpeech: "noun", definition: "The function or use of deictic words, forms, or expressions whose reference depends on the immediate context of utterance.", exampleSentence: "'Here', 'now', and 'this' are classic examples of deixis." },
        { word: "Temporal", partOfSpeech: "adjective", definition: "Relating to time.", exampleSentence: "Temporal deictic shifts prevent chronological distortion." },
        { word: "Spatial", partOfSpeech: "adjective", definition: "Relating to space and the relationship of objects within it.", exampleSentence: "Shift 'here' to 'there' to preserve spatial accuracy." }
      ],
      spokenUsageTips: [
        "Always evaluate your present location when choosing between 'here' and 'there'.",
        "Using 'the previous day' and 'the following day' sounds significantly more professional than saying 'the yesterday' or 'the tomorrow'."
      ],
      commonMistakes: [
        { incorrect: "He said he finished the report two days ago yesterday.", correct: "He said he had finished the report two days before.", explanation: "'Ago' shifts to 'before' in reported speech governed by a past reporting verb." }
      ],
      practiceQuiz: [
        {
          question: "How does the temporal phrase 'yesterday morning' shift in formal reported speech?",
          options: [
            "the yesterday morning",
            "the previous morning (or the morning before)",
            "that morning ago",
            "the past morning"
          ],
          answer: "the previous morning (or the morning before)",
          explanation: "'Yesterday' systematically shifts to 'the previous day' or 'the day before' (hence 'the previous morning')."
        }
      ],
      dialogue: [
        { speaker: "Journalist", text: "What did the governor declare at the press briefing?" },
        { speaker: "Correspondent", text: "She announced that her administration would sign the executive order the following morning right there at the state capitol." }
      ],
      quickSummary: [
        "Shift pronouns to match the new perspective (I -> he/she, we -> they).",
        "Shift spatial words (here -> there, this -> that).",
        "Shift temporal markers (now -> then, yesterday -> the previous day, tomorrow -> the next day)."
      ]
    },
    {
      id: "ch7-l3",
      chapterId: 7,
      lessonNumber: 3,
      title: "Reporting Questions: Wh- Questions and Inverted Yes/No Inquiries",
      tagline: "Converting inquiries into reported statements without inverted auxiliary order.",
      objectives: [
        "Report Wh- questions using the interrogative pronoun + statement word order (Subject + Verb).",
        "Report Yes/No questions using 'if' or 'whether' + statement word order.",
        "Eliminate auxiliary verbs (do, does, did) and remove question marks in reported questions."
      ],
      introduction: "When reporting a question that was asked, the sentence ceases to be a question; it becomes a declarative statement of what someone inquired. As a result, question marks and inverted auxiliary syntax vanish.",
      deepExplanation: "In direct questions, the auxiliary precedes the subject ('Where do you live?'). In reported speech, the clause converts into a noun clause, demanding standard declarative word order: Subject + Verb. For Wh- questions, retain the Wh- word: 'He asked me where I lived' (NOT 'where did I live'). For Yes/No questions, connect the clause using 'if' or 'whether': 'She asked if I was ready' (NOT 'was I ready'). The question mark is replaced with a standard period.",
      grammarMechanics: "Wh- Inquiry: Subject + asked + (Person) + Wh- word + [Subject] + [Verb]. Yes/No Inquiry: Subject + asked + (Person) + if / whether + [Subject] + [Verb].",
      rules: [
        "Never use inverted question word order in reported questions (say 'He asked what I wanted', NOT 'what did I want').",
        "Never place a question mark at the end of a reported question.",
        "Drop the dummy auxiliaries 'do', 'does', and 'did' entirely.",
        "Use 'whether' rather than 'if' in formal writing and when 'or not' is present ('He asked whether or not the report was ready')."
      ],
      formula: "Reported Question: S + asked + (Object) + [if / whether / Wh-] + [Subject] + [Verb]",
      formulaBreakdown: "Direct: 'Where are you going?' -> Reported: 'She asked me where (Wh-) I (Subject) was going (Verb).'",
      examples: [
        { sentence: "Direct: 'Where did you store the encrypted backup drives?' -> Indirect: The security officer asked where the technician had stored the encrypted backup drives.", contextOrBreakdown: "Wh- question reported with declarative order: subject 'technician' precedes verb 'had stored'." },
        { sentence: "Direct: 'Have you finalized the budget proposal?' -> Indirect: The CFO inquired whether the department head had finalized the budget proposal.", contextOrBreakdown: "Yes/No inquiry reported using formal connector 'whether' followed by subject and verb." },
        { sentence: "Direct: 'Do you speak fluent Japanese?' -> Indirect: The recruiter asked if I spoke fluent Japanese.", contextOrBreakdown: "Dummy auxiliary 'do' removed; main verb backshifted to simple past 'spoke'." }
      ],
      wordMeanings: [
        { word: "Inquire", partOfSpeech: "verb", definition: "Ask for information from someone; investigate.", exampleSentence: "The detective inquired whether any witnesses had stepped forward." },
        { word: "Declarative", partOfSpeech: "adjective", definition: "Taking the form of a statement rather than a question or command.", exampleSentence: "Reported questions must adopt declarative word order." },
        { word: "Interrogative", partOfSpeech: "adjective", definition: "Having the form or force of a question.", exampleSentence: "The interrogative pronoun acts as a subordinator in reported speech." }
      ],
      spokenUsageTips: [
        "Do not raise your voice pitch at the end of a reported question; use falling statement intonation.",
        "Use 'inquired' or 'wanted to know' as elegant alternatives to 'asked'."
      ],
      commonMistakes: [
        { incorrect: "The manager asked me where did I leave the keys?", correct: "The manager asked me where I had left the keys.", explanation: "Reported questions take statement word order (Subject + Verb) and omit dummy 'did' and question marks." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following represents the correct reported form of: 'Can you attend the briefing?'",
          options: [
            "She asked me could I attend the briefing?",
            "She asked me if I could attend the briefing.",
            "She asked me that can I attend the briefing.",
            "She asked me whether could I attend the briefing."
          ],
          answer: "She asked me if I could attend the briefing.",
          explanation: "Reported Yes/No questions require 'if/whether' + Subject ('I') + backshifted modal ('could') with a period."
        }
      ],
      dialogue: [
        { speaker: "Candidate", text: "The interview was intense!" },
        { speaker: "Mentor", text: "What did the committee ask you?" },
        { speaker: "Candidate", text: "They asked why I had left my previous post and whether I was prepared to relocate abroad." }
      ],
      quickSummary: [
        "Reported questions are statements: Subject precedes Verb.",
        "Wh- questions retain the question word; Yes/No questions use IF or WHETHER.",
        "Eliminate do/does/did and remove the question mark."
      ]
    },
    {
      id: "ch7-l4",
      chapterId: 7,
      lessonNumber: 4,
      title: "Reporting Imperatives, Requests, and Prohibitions (Tell vs Ask vs Warn to)",
      tagline: "Transforming commands and polite requests into concise infinitive clauses.",
      objectives: [
        "Convert imperative commands into 'tell someone TO DO something'.",
        "Convert polite requests into 'ask someone TO DO something'.",
        "Report negative prohibitions using 'tell/warn someone NOT TO DO something'."
      ],
      introduction: "When reporting a command, an instruction, or an urgent plea, English completely abandons the tense backshifting system in favor of an elegant, concise structure: the Infinitive with TO.",
      deepExplanation: "Direct imperatives lack a written subject ('Close the door', 'Please submit your files'). To report these, select an appropriate reporting verb that expresses the illocutionary force of the utterance (tell, ask, instruct, order, warn, urge, advise, plead) followed by a personal object and a full infinitive ('to + verb'). In negative commands or prohibitions, place 'not' immediately before 'to' ('told him NOT to speak').",
      grammarMechanics: "Affirmative Command: Reporting Verb + Person Object + TO + Base Verb. Negative Prohibition: Reporting Verb + Person Object + NOT TO + Base Verb.",
      rules: [
        "'Tell' requires a personal object: 'He told ME to go' (never 'He said me to go' or 'He told to go').",
        "'Say' CANNOT take an infinitive (never say 'He said to me to go').",
        "Negative imperative formula: 'NOT to do', NEVER 'to not do' or 'don't to do'.",
        "Remove polite markers like 'please' because the reporting verb 'asked' already encodes the politeness."
      ],
      formula: "Reported Command: S + [told / ordered / asked / warned] + [Person] + (not) to + [Base Verb]",
      formulaBreakdown: "Direct: 'Do not touch the high-voltage terminal!' -> Reported: 'The engineer warned us not to touch the terminal.'",
      examples: [
        { sentence: "Direct: 'Please submit your quarterly balance sheets by noon.' -> Indirect: The controller asked all department heads to submit their balance sheets by noon.", contextOrBreakdown: "Polite request reported with 'asked + object + to submit'." },
        { sentence: "Direct: 'Do not disclose this proprietary encryption code to unauthorized third parties.' -> Indirect: The security director instructed the software engineers not to disclose the code.", contextOrBreakdown: "Negative prohibition reported using 'not to disclose'." },
        { sentence: "Direct: 'Evacuate the auditorium immediately!' -> Indirect: The fire marshal ordered the audience to evacuate the auditorium immediately.", contextOrBreakdown: "Urgent emergency command reported using 'ordered + object + to evacuate'." }
      ],
      wordMeanings: [
        { word: "Illocutionary", partOfSpeech: "adjective", definition: "Relating to or being an act of speaking or writing that in itself affects something or that constitutes an action (e.g., ordering, warning, promising).", exampleSentence: "The reporting verb captures the illocutionary force of the speaker." },
        { word: "Prohibition", partOfSpeech: "noun", definition: "The action of forbidding something, especially by law or authoritative command.", exampleSentence: "Negative commands report prohibitions using 'not to'." },
        { word: "Proprietary", partOfSpeech: "adjective", definition: "Relating to an owner or ownership; protected by trademark or patent.", exampleSentence: "Proprietary data must remain confidential." }
      ],
      spokenUsageTips: [
        "Match the reporting verb to the speaker's authority: parents 'tell', judges 'order', doctors 'advise', friends 'ask'.",
        "Stress 'NOT' firmly in negative reported instructions: 'He told us NOT to touch anything'."
      ],
      commonMistakes: [
        { incorrect: "The doctor said me to stop smoking and eat healthier.", correct: "The doctor told me to stop smoking and eat healthier. (OR: ...advised me to stop...)", explanation: "'Say' cannot take a personal object with an infinitive; use 'told me to' or 'advised me to'." }
      ],
      practiceQuiz: [
        {
          question: "How do you report: 'Don't enter the restricted laboratory'?",
          options: [
            "The technician told to us not enter the laboratory.",
            "The technician warned us not to enter the laboratory.",
            "The technician warned us to don't enter the laboratory.",
            "The technician said us not to enter the laboratory."
          ],
          answer: "The technician warned us not to enter the laboratory.",
          explanation: "The verb 'warned' takes a personal object ('us') followed by 'not to' + base verb ('enter')."
        }
      ],
      dialogue: [
        { speaker: "Associate", text: "What did the managing partner instruct us to do?" },
        { speaker: "Junior Counsel", text: "She told us to review the judicial precedent immediately and warned us not to file the motion without her authorization." }
      ],
      quickSummary: [
        "Report imperatives with: Verb + Person + TO + Base Verb.",
        "Negative imperatives: Verb + Person + NOT TO + Base Verb.",
        "Use rich verbs: order, advise, instruct, warn, urge, plead."
      ]
    },
    {
      id: "ch7-l5",
      chapterId: 7,
      lessonNumber: 5,
      title: "Beyond 'Said': Advanced Reporting Verbs (Claim, Advise, Demand, Insist, Deny)",
      tagline: "Elevating journalistic and academic prose with precision reporting verbs.",
      objectives: [
        "Master the 5 distinct grammatical patterns governing reporting verbs.",
        "Deploy verbs that take gerunds (admit, deny, recommend, apologize for).",
        "Deploy verbs that take 'that + subjunctive' (demand, insist, propose)."
      ],
      introduction: "Relying exclusively on 'said' and 'told' creates dull, primitive writing. Advanced English utilizes specialized reporting verbs that summarize tone, intent, and attitude in a single word.",
      deepExplanation: "Reporting verbs are governed by rigid syntactic sub-categorization frames: Pattern 1: Verb + that + clause (claim, explain, admit, acknowledge, argue). Pattern 2: Verb + Person + to-infinitive (advise, remind, persuade, encourage, invite). Pattern 3: Verb + to-infinitive (promise, offer, threaten, refuse, agree). Pattern 4: Verb + gerund (-ing) (deny, admit, suggest, recommend). Pattern 5: Verb + preposition + gerund (apologize for, insist on, accuse someone of).",
      grammarMechanics: "Pattern 3: S + refused to + Base Verb. Pattern 4: S + denied + Verb-ing. Pattern 5: S + accused + Person + of + Verb-ing.",
      rules: [
        "'Deny' is followed by a gerund or a that-clause: 'He denied stealing the funds' (never 'denied to steal').",
        "'Refuse' is followed by a to-infinitive: 'He refused to sign the contract' (never 'refused signing').",
        "'Suggest' and 'Recommend' NEVER take a person + to-infinitive (never say 'He suggested me to go'; say 'He suggested that I go' or 'He suggested going').",
        "'Insist' takes 'on + gerund' OR 'that + subjunctive' ('She insisted on paying' / 'She insisted that he pay')."
      ],
      formula: "Gerund Reporting: Subject + [denied / admitted / suggested] + [Verb + ing] + Object",
      formulaBreakdown: "'The spokesperson (S) denied leaking (denied + Gerund) the confidential memorandum (Object).'",
      examples: [
        { sentence: "The defendant adamantly denied participating in the fraudulent stock manipulation.", contextOrBreakdown: "Pattern 4: 'Denied' governing a gerund phrase ('participating in...')." },
        { sentence: "The union representatives refused to accept the preliminary wage concessions.", contextOrBreakdown: "Pattern 3: 'Refused' followed strictly by a to-infinitive ('to accept')." },
        { sentence: "The defense attorney accused the prosecution of withholding exculpatory evidence.", contextOrBreakdown: "Pattern 5: 'Accused + person + of + gerund ('withholding')." }
      ],
      wordMeanings: [
        { word: "Exculpatory", partOfSpeech: "adjective", definition: "Tending to clear from a charge of fault or guilt; exonerating.", exampleSentence: "The prosecution failed to disclose exculpatory witness statements." },
        { word: "Adamantly", partOfSpeech: "adverb", definition: "In a way that suggests one is refusing to be persuaded or to change one's mind; resolute.", exampleSentence: "She adamantly rejected the compromise." },
        { word: "Sub-categorization", partOfSpeech: "noun", definition: "The linguistic syntactic restrictions governing what types of complements a verb can take.", exampleSentence: "Each reporting verb has a specific sub-categorization pattern." }
      ],
      spokenUsageTips: [
        "In meetings, summarize others' points with: 'David argued that...', 'Maya pointed out that...', 'Ken suggested implementing...'."
      ],
      commonMistakes: [
        { incorrect: "She suggested me to apply for the prestigious international grant.", correct: "She suggested that I apply for the prestigious international grant. (OR: She suggested applying...)", explanation: "'Suggest' cannot be followed by 'person + to-infinitive'; it takes a that-clause or a gerund." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence features the correct syntactic complement pattern for the verb 'deny'?",
          options: [
            "The suspect denied to commit the burglary.",
            "The suspect denied committing the burglary.",
            "The suspect denied him to commit the burglary.",
            "The suspect denied on committing the burglary."
          ],
          answer: "The suspect denied committing the burglary.",
          explanation: "The verb 'deny' takes a gerund complement ('committing') or a that-clause, never an infinitive."
        }
      ],
      dialogue: [
        { speaker: "Journalist", text: "Did the minister admit her involvement in the offshore tax shelter?" },
        { speaker: "Editor", text: "No, she vehemently denied owning any foreign assets and threatened to sue any publication asserting otherwise." }
      ],
      quickSummary: [
        "Replace 'said' with precise verbs that convey intent.",
        "Refuse + to-infinitive (refused to speak).",
        "Deny + gerund (denied speaking).",
        "Never say 'suggested me to do'; say 'suggested that I do' or 'suggested doing'."
      ]
    },
    {
      id: "ch7-l6",
      chapterId: 7,
      lessonNumber: 6,
      title: "Reporting Stative Truths and Universal Laws (When NOT to backshift)",
      tagline: "Preserving the present tense when reported facts remain perpetually true.",
      objectives: [
        "Identify situations where backshifting is unnecessary or grammatically undesirable.",
        "Report scientific axioms, physical laws, and ongoing perpetual truths in the present tense.",
        "Maintain present tense when the reported statement remains immediately relevant."
      ],
      introduction: "While backshifting is the default rule following a past reporting verb, blind mechanical backshifting can make eternal scientific truths sound as if they have expired. Learn when to break the backshifting rule.",
      deepExplanation: "If the reported statement expresses a universal physical law, a scientific fact, or an ongoing situation that is still 100% true at the moment of reporting, the verb in the reported clause may remain in the Simple Present tense. For example, 'Galileo proved that the Earth revolves around the sun' (NOT 'revolved', which would imply the Earth no longer does so!). Similarly, if someone tells you 'I am 30 years old' or 'My name is Sarah', you report: 'She told me that her name is Sarah'.",
      grammarMechanics: "Universal Truth: Past Reporting Verb + that + [Simple Present V1]. Still Valid Reality: S + said that + [Present Tense retained].",
      rules: [
        "Do not backshift statements of universal scientific truth or permanent geographical reality ('He noted that water boils at 100°C').",
        "Do not backshift if the situation has not changed and remains completely true right now ('He said he lives in New York' — if he still lives there).",
        "Backshifting is never an outright error in exams, but retaining the present highlights continuous present validity.",
        "If an event has definitively finished, backshifting is mandatory."
      ],
      formula: "Perpetual Truth: S + proven / explained + that + [Universal Present Proposition]",
      formulaBreakdown: "'Newton discovered that gravity attracts (Retained Present) all celestial bodies.'",
      examples: [
        { sentence: "The physics instructor explained that light travels at approximately 300,000 kilometers per second.", contextOrBreakdown: "Universal constant of physics: Simple present 'travels' preserved despite past verb 'explained'." },
        { sentence: "The cartographer reminded the class that Everest is the highest mountain on Earth.", contextOrBreakdown: "Enduring geographical fact: Present tense 'is' retained." },
        { sentence: "Alexander told me this morning that he is currently seeking a new career opportunity.", contextOrBreakdown: "Ongoing present situation that remains completely valid and active at the time of discourse." }
      ],
      wordMeanings: [
        { word: "Perpetual", partOfSpeech: "adjective", definition: "Never ending or changing; occurring repeatedly.", exampleSentence: "Universal physical laws describe perpetual phenomena." },
        { word: "Axiom", partOfSpeech: "noun", definition: "A statement or proposition that is regarded as being established, accepted, or self-evidently true.", exampleSentence: "Mathematical axioms remain in the simple present tense." },
        { word: "Cartographer", partOfSpeech: "noun", definition: "A person who draws or produces maps.", exampleSentence: "The cartographer charted the mountain range with precision." }
      ],
      spokenUsageTips: [
        "In conversational English, keep the present tense if the information is still true and useful to the listener ('John told me the flight arrives at five').",
        "Backshift if you want to distance yourself from the claim or imply you doubt its current validity ('He claimed he was a millionaire')."
      ],
      commonMistakes: [
        { incorrect: "Copernicus demonstrated that the Earth moved around the sun.", correct: "Copernicus demonstrated that the Earth moves around the sun.", explanation: "Because the Earth perpetually moves around the sun, the present tense 'moves' is the scientifically superior choice." }
      ],
      practiceQuiz: [
        {
          question: "Why is the present tense preserved in: 'The teacher explained that the Pacific Ocean is the largest ocean'?",
          options: [
            "Because the teacher made a grammatical error.",
            "Because the statement represents a permanent geographic fact that remains true today.",
            "Because 'explained' is an irregular verb.",
            "Because relative clauses do not allow backshifting."
          ],
          answer: "Because the statement represents a permanent geographic fact that remains true today.",
          explanation: "Universal, timeless, or permanent facts do not require backshifting to past tense."
        }
      ],
      dialogue: [
        { speaker: "Student", text: "Why didn't the professor backshift: 'Einstein proved that energy equals mass times the speed of light squared'?" },
        { speaker: "Teaching Assistant", text: "Because mass-energy equivalence is a universal law of physics; backshifting to 'equaled' would suggest the law expired!" }
      ],
      quickSummary: [
        "Do not backshift universal scientific laws or permanent geographical facts.",
        "Retain the present tense if the situation remains ongoing and true right now.",
        "Backshift if the situation has ended or to subtly express skepticism."
      ]
    },
    {
      id: "ch7-l7",
      chapterId: 7,
      lessonNumber: 7,
      title: "Reporting Mixed Modal Structures and Unreal Conditionals",
      tagline: "Handling modals and conditional clauses that resist backshifting.",
      objectives: [
        "Recognize modals that NEVER change in reported speech (could, should, would, might, ought to).",
        "Report Second and Third Conditionals without altering their hypothetical tense forms.",
        "Distinguish First Conditional (which backshifts) from Second Conditional (which remains static)."
      ],
      introduction: "Certain modal auxiliaries and hypothetical conditional sentences are already in a historical past or unreal subjunctive form. Attempting to backshift them further produces ungrammatical gibberish.",
      deepExplanation: "Modals that already have past morphological origin—'could', 'should', 'would', 'might', and 'ought to'—remain completely unchanged in reported speech. Furthermore, while First Conditionals ('If it rains, we will stay') backshift normally ('He said that if it rained, they would stay'), Second Conditionals ('If I had time, I would travel') and Third Conditionals ('If I had known, I would have called') DO NOT change their tenses in reported speech because they already depict unreal, hypothetical worlds.",
      grammarMechanics: "Second Conditional: 'If I were rich, I would invest.' -> He said that if he were rich, he would invest (UNCHANGED). Unchanging Modals: could, should, would, might, ought to.",
      rules: [
        "Never alter 'could', 'should', 'would', 'might', or 'ought to' in reported speech.",
        "Second Conditionals (unreal present) and Third Conditionals (unreal past) do not change their verb tenses when reported.",
        "First Conditionals (real future) DO backshift: 'if + present, will' becomes 'if + past, would'.",
        "Retain subjunctive 'were' in reported hypothetical conditions ('He said that if he were in charge...')."
      ],
      formula: "Reported Unreal Conditional: Past Reporting Verb + that + [Condition Unaltered]",
      formulaBreakdown: "Direct: 'If I won the lottery, I would establish a clinic.' -> Reported: 'She said that if she won the lottery, she would establish a clinic.'",
      examples: [
        { sentence: "Direct: 'You should consult an intellectual property attorney.' -> Indirect: The senior counsel advised that we should consult an intellectual property attorney.", contextOrBreakdown: "Modal 'should' remains completely unaltered after past reporting verb 'advised'." },
        { sentence: "Direct: 'If the prototype failed the thermal test, the investors would withdraw.' -> Indirect: The engineer warned that if the prototype failed the thermal test, the investors would withdraw.", contextOrBreakdown: "Second conditional preserved exactly in reported speech without backshifting." },
        { sentence: "Direct: 'If we had recognized the algorithmic bias, we would have revised the neural network.' -> Indirect: She acknowledged that if they had recognized the algorithmic bias, they would have revised the neural network.", contextOrBreakdown: "Third conditional preserved verbatim in reported speech." }
      ],
      wordMeanings: [
        { word: "Unaltered", partOfSpeech: "adjective", definition: "Remaining the same; unchanged.", exampleSentence: "Second and third conditionals remain unaltered in reported speech." },
        { word: "Algorithmic", partOfSpeech: "adjective", definition: "Relating to or using an algorithm.", exampleSentence: "The team resolved the algorithmic bias in the code." },
        { word: "Verbatim", partOfSpeech: "adverb", definition: "In exactly the same words as were used originally.", exampleSentence: "The witness recounted the dialogue verbatim." }
      ],
      spokenUsageTips: [
        "Do not worry about changing 'might', 'should', or 'would'; just report them as they are.",
        "Maintain hypothetical intonation when reporting what someone 'would have done'."
      ],
      commonMistakes: [
        { incorrect: "He said that if he had been rich, he would have bought a yacht (reporting 'If I were rich, I would buy a yacht').", correct: "He said that if he were rich, he would buy a yacht.", explanation: "Do not artificially turn a Second Conditional into a Third Conditional when reporting speech." }
      ],
      practiceQuiz: [
        {
          question: "What happens to the modal 'might' when reported after 'He stated...'?",
          options: [
            "It shifts to 'might have'.",
            "It shifts to 'may'.",
            "It remains completely unchanged as 'might'.",
            "It shifts to 'could'."
          ],
          answer: "It remains completely unchanged as 'might'.",
          explanation: "'Might' is already a past modal form and cannot backshift; it remains 'might'."
        }
      ],
      dialogue: [
        { speaker: "Founder", text: "What did the venture partner tell you?" },
        { speaker: "Executive", text: "He said that if our revenue reached five million, his firm would gladly lead the Series A round." }
      ],
      quickSummary: [
        "Could, should, would, might, and ought to never change in reported speech.",
        "Second and Third Conditionals do not backshift.",
        "First Conditionals shift from 'if + present... will' to 'if + past... would'."
      ]
    },
    {
      id: "ch7-l8",
      chapterId: 7,
      lessonNumber: 8,
      title: "Summary Reporting & Free Indirect Discourse",
      tagline: "Condensing lengthy dialogues into executive summaries and literary narratives.",
      objectives: [
        "Synthesize multi-sentence speeches into tight, single-sentence reported summaries.",
        "Deploy advanced summarization verbs: praise, outline, criticize, justify, highlight.",
        "Recognize Free Indirect Discourse in advanced literary and journalistic narrative."
      ],
      introduction: "In real life, people do not report conversations word-for-word. Instead, professional communicators distill fifteen-minute speeches into crisp, high-impact summary reports.",
      deepExplanation: "Summary Reporting captures the overarching communicative function and substance of a speaker's monologue without transcribing individual clauses. Verbs like 'summarize', 'outline', 'praise', 'condemn', 'clarify', and 'elaborate on' allow you to compress sprawling dialogue. In literature and long-form journalism, Free Indirect Discourse blends the narrator's third-person voice with the character's internal thoughts without quotation marks or reporting tags (e.g., 'She looked at the clock. Was he really going to abandon her now?').",
      grammarMechanics: "Summary: Subject + [Reporting Verb] + [Noun Phrase Object] + (Prepositional Modifier).",
      rules: [
        "Identify the primary core objective of the original speaker's communication.",
        "Select a summarizing verb that embodies the entire rhetorical action.",
        "Eliminate fillers, repetitive anecdotes, and peripheral digressions.",
        "Ensure the summary remains completely objective and accurate to the speaker's original intent."
      ],
      formula: "Executive Summary: S + [summarized / outlined / underscored] + [Core Concept] + by pointing out that...",
      formulaBreakdown: "'The CFO outlined the fiscal deficit by pointing out that operational expenditures had surged 20%.'",
      examples: [
        { sentence: "The keynote speaker summarized three decades of neurological research in a compelling forty-minute address.", contextOrBreakdown: "Compresses hours of complex scientific discourse into a single elegant predication." },
        { sentence: "The defense secretary justified the military deployment, citing binding international treaty commitments.", contextOrBreakdown: "Uses summarizing verb 'justified' with a participial explanatory clause." },
        { sentence: "The managing director praised the engineering division for delivering the prototype ahead of schedule.", contextOrBreakdown: "Summarizes a twenty-minute congratulatory speech using 'praised... for delivering'." }
      ],
      wordMeanings: [
        { word: "Distill", partOfSpeech: "verb", definition: "Extract the essential meaning or most important aspects of.", exampleSentence: "An executive must distill complex data into actionable summaries." },
        { word: "Digression", partOfSpeech: "noun", definition: "A temporary departure from the main subject in speech or writing.", exampleSentence: "Summary reporting eliminates irrelevant digressions." },
        { word: "Discourse", partOfSpeech: "noun", definition: "Written or spoken communication or debate.", exampleSentence: "Free indirect discourse creates deep literary intimacy." }
      ],
      spokenUsageTips: [
        "In meetings, summarize lengthy speeches with: 'In essence, what Dr. Smith highlighted is that our margin for error is razor-thin'.",
        "Always lead with the summary verb before providing supplementary detail."
      ],
      commonMistakes: [
        { incorrect: "He spoke for thirty minutes saying that he will do this and then he said he will do that and after he said...", correct: "In his address, he outlined the strategic roadmap and highlighted three immediate operational milestones.", explanation: "Avoid monotonous, repetitive transcription; use summary reporting verbs to synthesize content." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following sentences represents an effective SUMMARY report rather than mechanical direct transcription?",
          options: [
            "She said that she liked the plan and then she said that she had questions and then she said she will vote yes.",
            "The director endorsed the restructuring plan while raising minor questions regarding implementation timelines.",
            "She told to us: 'I like it, but I have questions, so yes'.",
            "She said that yes."
          ],
          answer: "The director endorsed the restructuring plan while raising minor questions regarding implementation timelines.",
          explanation: "It distills multiple conversational elements into a sophisticated, unified executive summary using 'endorsed' and 'raising'."
        }
      ],
      dialogue: [
        { speaker: "CEO", text: "How did the hour-long session with the antitrust regulators go?" },
        { speaker: "Lead Counsel", text: "They challenged our market dominance in cloud services, but we successfully justified our pricing architecture based on competitive market dynamics." }
      ],
      quickSummary: [
        "Summary reporting compresses lengthy monologues into core communicative functions.",
        "Use powerful verbs: outline, justify, condemn, praise, highlight.",
        "Focus on essence and outcome rather than verbatim transcription."
      ]
    },
    {
      id: "ch7-l9",
      chapterId: 7,
      lessonNumber: 9,
      title: "Conversational Gossip, Telephone Messaging & Executive Debriefs",
      tagline: "Transmitting telephone memos, professional messages, and social updates flawlessly.",
      objectives: [
        "Take and relay telephone messages accurately using reported speech.",
        "Deliver concise executive debriefs following high-stakes client meetings.",
        "Utilize conversational hearsay markers ('supposedly', 'allegedly', 'word is that')."
      ],
      introduction: "Taking an accurate phone message or debriefing an executive immediately after a client meeting requires agile, instantaneous translation into reported speech.",
      deepExplanation: "In office communication, taking a telephone message involves transforming first-person spoken requests into third-person reported memos ('She asked if you could return her call before 3 PM'). In executive debriefs, brevity and precision are paramount: use structured bullet-point debrief formulas ('Client confirmed X, expressed concern over Y, and requested Z by Friday'). In casual social settings, conversational gossip utilizes evidential expressions like 'He was like...', 'Word on the street is...', and 'Apparently...'.",
      grammarMechanics: "Telephone Memo: [Caller Name] called to say that [Message]. He/She asked you to [Action Callback].",
      rules: [
        "In professional memos, always include the caller's identity, organization, time, and specific callback request.",
        "Convert requests with 'please' into 'asked to': 'Please tell him to call me' -> 'She asked you to call her'.",
        "Differentiate verified facts from hearsay: use 'He confirmed' for facts, and 'He claimed' or 'Allegedly' for unverified statements.",
        "Avoid overly informal slang like 'He went...' or 'He was like...' in professional business debriefs."
      ],
      formula: "Telephone Memo: S + called to inform you that + [Clause] + and requested that you + [Base Verb]",
      formulaBreakdown: "'Ms. Davies called to inform you that the audit was rescheduled and requested that you contact her before five.'",
      examples: [
        { sentence: "Mr. Sterling phoned from Geneva; he stated that the contracts had been couriered and asked you to review them upon arrival.", contextOrBreakdown: "Professional telephone message incorporating reported statement and request." },
        { sentence: "In our debrief with the client, they indicated broad satisfaction with the architecture but requested further latency optimization.", contextOrBreakdown: "Executive debrief synthesizing client feedback." },
        { sentence: "Apparently, the regional director is stepping down at the end of the fiscal quarter.", contextOrBreakdown: "Conversational hearsay marker 'apparently' introducing unconfirmed news." }
      ],
      wordMeanings: [
        { word: "Debrief", partOfSpeech: "verb", definition: "Question (someone, typically a soldier, diplomat, or executive) about a completed mission or undertaking.", exampleSentence: "The CEO debriefed the negotiating team immediately after the summit." },
        { word: "Hearsay", partOfSpeech: "noun", definition: "Information received from other people that one cannot adequately substantiate; rumor.", exampleSentence: "In court, unverified hearsay is inadmissible as evidence." },
        { word: "Evidential", partOfSpeech: "adjective", definition: "Indicating the nature of the evidence for a statement.", exampleSentence: "Adverbs like 'allegedly' function as evidential markers." }
      ],
      spokenUsageTips: [
        "When taking a message, confirm the details by repeating: 'So you would like him to return your call at 555-0199 before noon?'",
        "In executive debriefs, state the bottom line first: 'The client accepted our bid'."
      ],
      commonMistakes: [
        { incorrect: "She called and said that please call her back.", correct: "She called and asked you to call her back.", explanation: "'Please' should be omitted and converted into the reporting structure 'asked you to call her back'." }
      ],
      practiceQuiz: [
        {
          question: "How should an assistant professionally relay: 'Please tell Mr. Vance that the meeting is postponed to Friday'?",
          options: [
            "A caller told to say the meeting is Friday.",
            "The caller requested that I inform you that the meeting has been postponed to Friday.",
            "Someone said please the meeting is Friday.",
            "She said to you that meeting is postponed."
          ],
          answer: "The caller requested that I inform you that the meeting has been postponed to Friday.",
          explanation: "It employs courteous executive reporting: 'requested that I inform you that...'."
        }
      ],
      dialogue: [
        { speaker: "Executive", text: "Did anyone contact my office while I was in the board session?" },
        { speaker: "Executive Assistant", text: "Yes, Dr. Aris phoned from Berlin. She confirmed that the clinical results were positive and asked you to call her back before five o'clock European time." }
      ],
      quickSummary: [
        "Telephone messages: Convert requests into 'asked you to do'.",
        "Executive debriefs: State verified decisions first, followed by requested action items.",
        "Clearly distinguish verified facts from unconfirmed hearsay."
      ]
    },
    {
      id: "ch7-l10",
      chapterId: 7,
      lessonNumber: 10,
      title: "Avoiding Quotation Ambiguities and Attribution Errors",
      tagline: "Preventing misquotation, ambiguous pronominal references, and punctuation blunders.",
      objectives: [
        "Punctuate direct quotes with correct quotation mark placement, commas, and periods.",
        "Eliminate ambiguous pronoun references in indirect speech (e.g., clarifying who 'he' refers to).",
        "Distinguish British quotation conventions from American typographical rules."
      ],
      introduction: "Misquoting someone or generating ambiguous pronoun chains in reported speech can trigger legal disputes and journalistic scandals. Clean punctuation and precise attribution safeguard clarity.",
      deepExplanation: "In Direct Quotations, American English places periods and commas INSIDE the closing quotation mark (\"I agree,\" she said), whereas British English places them OUTSIDE unless they belong to the quoted matter ('I agree', she said). In Indirect Speech, the most hazardous pitfall is Ambiguous Pronominal Reference: 'Marcus told David that he had failed the examination' (Who failed? Marcus or David?). To fix this, restructure the sentence or restate the proper noun.",
      grammarMechanics: "American: 'Quote,' said S. 'Quote.' British: 'Quote', said S. 'Quote'. Ambiguity fix: S told Person that the latter had failed.",
      rules: [
        "In American English, commas and periods always go inside quotation marks.",
        "Never leave a pronoun ambiguous when two people of the same gender are mentioned in reported speech.",
        "Use 'the former' (the first mentioned) and 'the latter' (the second mentioned) to resolve pronoun ambiguity in formal writing.",
        "Direct quotes inside direct quotes take single quotation marks inside double quotation marks (American) or vice versa (British)."
      ],
      formula: "Ambiguity Resolution: S1 informed S2 that [Specific Name / the latter] would undertake the task.",
      formulaBreakdown: "'The professor (S1) informed the student (S2) that the latter (S2) had won the scholarship.'",
      examples: [
        { sentence: "American Style: \"The quarterly projections are remarkably favorable,\" the director announced, \"and we will expand immediately.\"", contextOrBreakdown: "American typographical convention: Comma inside closing quotation mark." },
        { sentence: "British Style: 'The quarterly projections are remarkably favorable', the director announced, 'and we will expand immediately.'", contextOrBreakdown: "British typographical convention: Punctuation placed outside single quotation marks." },
        { sentence: "Julian told Arthur that Arthur's proposal had been selected by the board.", contextOrBreakdown: "Explicit repetition of 'Arthur's proposal' eliminates pronoun ambiguity." }
      ],
      wordMeanings: [
        { word: "Pronominal", partOfSpeech: "adjective", definition: "Relating to or playing the role of a pronoun.", exampleSentence: "Ambiguous pronominal reference confuses readers." },
        { word: "Latter", partOfSpeech: "noun", definition: "Denoting the second or second mentioned of two people or things.", exampleSentence: "Of the two proposals, the latter was adopted." },
        { word: "Attribution", partOfSpeech: "noun", definition: "The act of giving credit to the author or source of a statement.", exampleSentence: "Accurate attribution is the foundation of journalism." }
      ],
      spokenUsageTips: [
        "Do not make physical 'air quotes' with your fingers unless you are intentionally communicating irony or sarcasm.",
        "In speech, clarify pronouns explicitly: 'John told Mike that Mike's car had been towed'."
      ],
      commonMistakes: [
        { incorrect: "The doctor told the patient that he was very ill (ambiguous: who was ill?).", correct: "The doctor informed the patient that the patient was very ill. (OR: ...informed the patient of his diagnosis.)", explanation: "The pronoun 'he' is dangerously ambiguous; it could theoretically refer to either the doctor or the patient." }
      ],
      practiceQuiz: [
        {
          question: "How do you resolve the ambiguity in: 'The manager told the clerk that he needed a vacation'?",
          options: [
            "The manager told the clerk that he really needed a vacation.",
            "The manager informed the clerk that the clerk was in need of a vacation.",
            "The manager told him that he needed it.",
            "He told him that he needed a vacation."
          ],
          answer: "The manager informed the clerk that the clerk was in need of a vacation.",
          explanation: "Replacing the ambiguous pronoun 'he' with the specific referent ('the clerk') completely removes confusion."
        }
      ],
      dialogue: [
        { speaker: "Editor", text: "In paragraph two, you wrote: 'Smith told Jones that his company was bankrupt'. Whose company was bankrupt?" },
        { speaker: "Reporter", text: "Good catch! I will clarify: 'Smith informed Jones that Jones's firm had declared insolvency'." }
      ],
      quickSummary: [
        "American style: Commas and periods go inside quotation marks.",
        "British style: Commas and periods go outside quotation marks unless part of the quote.",
        "Eliminate ambiguous pronouns by restating names or using 'the latter'."
      ]
    }
  ]
};
