import { CourseChapter } from "./types";

export const CHAPTER_8: CourseChapter = {
  id: 8,
  number: 8,
  title: "Conditionals, Inversion & Rhetorical Emphasis",
  description: "Master hypothetical reality, mixed conditionals, negative adverbial inversions, cleft sentences, and stylistic fronting for oratorical power.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch8-l1",
      chapterId: 8,
      lessonNumber: 1,
      title: "The Zero & First Conditionals (Scientific Truths vs Realistic Future Scenarios)",
      tagline: "Distinguishing universal laws of cause-and-effect from probable future outcomes.",
      objectives: [
        "Construct Zero Conditionals for universal physical laws and automated routines.",
        "Construct First Conditionals for realistic, probable future conditions and results.",
        "Master the cardinal rule: NEVER use 'will' inside the 'if'-clause in standard English."
      ],
      introduction: "Conditional sentences establish a relationship of dependency between two propositions: a condition (the protasis) and a result (the apodosis).",
      deepExplanation: "The Zero Conditional explores timeless causality: whenever Condition A happens, Result B inevitably follows as an invariant law of nature or routine ('If you heat ice, it melts'). Both clauses take the Simple Present tense. The First Conditional explores real, probable future events: if Condition A occurs in the present/future, Result B will likely materialize ('If it rains tomorrow, we will postpone the match'). In the First Conditional, the condition clause takes the Simple Present, while the result clause takes 'will + base verb'.",
      grammarMechanics: "Zero Conditional: If + Simple Present (V1) , Simple Present (V1). First Conditional: If + Simple Present (V1) , Will + Base Verb.",
      rules: [
        "NEVER place 'will' in the 'if'-clause of a First Conditional (say 'If I see him, I will tell him', NOT 'If I will see him').",
        "In Zero Conditionals, 'if' can almost always be substituted by 'when' or 'whenever' with zero change in meaning.",
        "When the 'if'-clause comes first, separate the clauses with a comma; if the result clause comes first, omit the comma.",
        "You can substitute 'will' in the result clause with modals of probability (may, might, can, should) to express varying degrees of confidence."
      ],
      formula: "First Conditional: If + S + [V1 Present] , S + [will / can / may] + [Base Verb]",
      formulaBreakdown: "'If the regulatory authority approves (V1) the merger, the stock price will skyrocket (will + Base Verb).'",
      examples: [
        { sentence: "If atmospheric pressure decreases, the boiling point of water drops.", contextOrBreakdown: "Zero Conditional: Universal scientific law connecting pressure and boiling point." },
        { sentence: "If the quarterly revenues exceed our projections, all personnel will receive an annual bonus.", contextOrBreakdown: "First Conditional: Realistic future scenario with 'will' in the result clause." },
        { sentence: "Whenever interest rates rise, consumer borrowing contracts predictably.", contextOrBreakdown: "Zero Conditional variant using 'whenever' to denote perpetual macroeconomic causality." }
      ],
      wordMeanings: [
        { word: "Protasis", partOfSpeech: "noun", definition: "The clause expressing the condition in a conditional sentence (the 'if'-clause).", exampleSentence: "The protasis sets the parameters of the hypothetical scenario." },
        { word: "Apodosis", partOfSpeech: "noun", definition: "The main clause expressing the result in a conditional sentence.", exampleSentence: "In First Conditionals, the apodosis contains 'will'." },
        { word: "Invariant", partOfSpeech: "adjective", definition: "Never changing; constant.", exampleSentence: "Zero conditionals describe invariant laws of physics." }
      ],
      spokenUsageTips: [
        "Contract 'will' with pronouns in speech: 'If you arrive early, I'll meet you in the lobby'.",
        "Never say 'If you will go'; say 'If you go'."
      ],
      commonMistakes: [
        { incorrect: "If it will rain tomorrow, we will cancel the excursion.", correct: "If it rains tomorrow, we will cancel the excursion.", explanation: "Standard English strictly forbids 'will' inside the conditional 'if'-clause." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence displays the correct grammatical form for a First Conditional?",
          options: [
            "If the shipment will arrive on time, we will begin assembly.",
            "If the shipment arrives on time, we will begin assembly.",
            "If the shipment arrived on time, we will begin assembly.",
            "If the shipment will arrive on time, we begin assembly."
          ],
          answer: "If the shipment arrives on time, we will begin assembly.",
          explanation: "The condition clause takes the simple present ('arrives'), while the main clause takes 'will' + base verb ('will begin')."
        }
      ],
      dialogue: [
        { speaker: "Trader", text: "What happens if the central bank raises the benchmark interest rate tomorrow?" },
        { speaker: "Analyst", text: "If the central bank increases rates, the currency will strengthen immediately against the dollar." }
      ],
      quickSummary: [
        "Zero: If + present, present (universal truths, scientific laws).",
        "First: If + present, will + base verb (realistic future scenarios).",
        "Rule: Never put 'will' inside the 'if'-clause."
      ]
    },
    {
      id: "ch8-l2",
      chapterId: 8,
      lessonNumber: 2,
      title: "The Second Conditional (Hypothetical & Counterfactual Present Scenarios)",
      tagline: "Exploring impossible dreams, present counterfactuals, and diplomatic advice.",
      objectives: [
        "Construct Second Conditionals: If + Simple Past / Subjunctive 'were', would + Base Verb.",
        "Employ 'were' for all persons (If I were, If she were) in formal hypothetical contexts.",
        "Deliver diplomatic counsel using the formula 'If I were you, I would...'."
      ],
      introduction: "What if you had wings? What if you were the ruler of an empire? The Second Conditional allows speakers to step into alternate present realities that are contrary to known facts.",
      deepExplanation: "The Second Conditional deals with present or future situations that are unreal, impossible, or highly improbable. Although it uses a past tense verb form in the 'if'-clause, it refers entirely to PRESENT or FUTURE time! E.g., 'If I had a billion dollars [I don't have it right now], I would purchase an island.' In formal grammar, the verb 'to be' takes the subjunctive form 'were' across all persons: 'If I were', 'If he were', 'If she were'. The result clause takes 'would + bare infinitive'.",
      grammarMechanics: "If + Subject + [Simple Past / Subjunctive 'were'] , Subject + [would / could / might] + [Base Verb].",
      rules: [
        "The past tense in the 'if'-clause expresses grammatical UNREALITY (hypothetical distance), NOT past time.",
        "Always prefer 'were' over 'was' for all persons in formal English ('If she were here today...').",
        "The formula 'If I were you, I would...' is the standard English idiom for giving courteous personal advice.",
        "You can substitute 'would' with 'could' (would be able to) or 'might' (would perhaps) to adjust probability."
      ],
      formula: "Second Conditional: If + S + [V2 Past / were] , S + [would / could / might] + [Base Verb]",
      formulaBreakdown: "'If the sovereign wealth fund held (V2) liquidity, it would acquire (would + Base Verb) the distressed assets.'",
      examples: [
        { sentence: "If I were the prime minister, I would allocate substantial capital to clean energy infrastructure.", contextOrBreakdown: "Hypothetical present subjunctive: 'were' used with first-person subject 'I'." },
        { sentence: "If our engineering team possessed the proprietary algorithms, we could deploy the software this afternoon.", contextOrBreakdown: "Unreal present condition: We do not possess the algorithms right now." },
        { sentence: "If she worked fewer overtime hours, she might experience substantially less fatigue.", contextOrBreakdown: "Hypothetical condition using 'might' to express tentative probability in the apodosis." }
      ],
      wordMeanings: [
        { word: "Counterfactual", partOfSpeech: "adjective", definition: "Contrary to actual fact or reality.", exampleSentence: "Second conditionals explore counterfactual present states." },
        { word: "Subjunctive", partOfSpeech: "noun/adjective", definition: "A mood expressing hypothetical conditions, wishes, or non-factual propositions.", exampleSentence: "Subjunctive 'were' replaces indicative 'was' in conditional protases." },
        { word: "Tentative", partOfSpeech: "adjective", definition: "Not certain or fixed; provisional; hesitant.", exampleSentence: "'Might' conveys a tentative result in hypothetical conditionals." }
      ],
      spokenUsageTips: [
        "In everyday speech, people often say 'If I was you', but in high-stakes presentations, interviews, and academic papers, always use 'If I were you'.",
        "Contract 'would' to ''d': 'If I knew the answer, I'd tell you'."
      ],
      commonMistakes: [
        { incorrect: "If I would have more time, I would learn Arabic.", correct: "If I had more time, I would learn Arabic.", explanation: "Do not place 'would' in the 'if'-clause; use the simple past ('had')." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence is the most grammatically prestigious and formal?",
          options: [
            "If he was the director, he would restructure the firm.",
            "If he were the director, he would restructure the firm.",
            "If he would be the director, he would restructure the firm.",
            "If he is the director, he would restructure the firm."
          ],
          answer: "If he were the director, he would restructure the firm.",
          explanation: "In formal hypothetical conditionals, the subjunctive 'were' is preferred for all subjects."
        }
      ],
      dialogue: [
        { speaker: "Entrepreneur", text: "We are facing an aggressive hostile takeover bid." },
        { speaker: "Adviser", text: "If I were in your position, I would immediately enact a poison-pill defense to safeguard our equity." }
      ],
      quickSummary: [
        "Second conditional: Unreal present or improbable future.",
        "Formula: If + past (or were), would + base verb.",
        "Use 'were' for all persons: If I were, If he were, If she were.",
        "Never use 'would' inside the 'if'-clause."
      ]
    },
    {
      id: "ch8-l3",
      chapterId: 8,
      lessonNumber: 3,
      title: "The Third Conditional (Unreal Past & Counterfactual History)",
      tagline: "Reimagining past history: what would have occurred if circumstances had differed.",
      objectives: [
        "Construct Third Conditionals: If + Past Perfect (had + V3) , would have + Past Participle (V3).",
        "Articulate past regrets, missed opportunities, and historical alternative outcomes.",
        "Substitute 'could have' and 'might have' in the result clause to express past capability or probability."
      ],
      introduction: "The Third Conditional is the playground of historians, biographers, and anyone experiencing hindsight. It examines past events that DID NOT occur and speculates on their alternate results.",
      deepExplanation: "Because the past is immutable and cannot be altered, the Third Conditional is 100% counterfactual. Both the condition and the result exist purely in the realm of imagination. E.g., 'If Napoleon had not invaded Russia in winter, he might have maintained his European hegemony.' The condition clause takes the Past Perfect ('had + V3'), while the result clause takes 'would have + past participle (V3)'.",
      grammarMechanics: "If + Subject + [had + V3] , Subject + [would / could / might] + [have + V3].",
      rules: [
        "NEVER say 'If I would have known'; the condition clause MUST take the past perfect ('If I had known').",
        "The past participle (V3) must appear in BOTH the condition and the result clauses.",
        "Use 'could have + V3' in the result clause to express lost ability: 'If I had trained, I could have won.'",
        "Use 'might have + V3' in the result clause to express lost possibility: 'If she had applied, she might have been accepted.'"
      ],
      formula: "Third Conditional: If + S + [had + V3] , S + [would have + V3]",
      formulaBreakdown: "'If the navigator had observed (had + V3) the reef, the vessel would not have grounded (would not have + V3).'",
      examples: [
        { sentence: "If the maritime crew had maintained a vigilant lookout, the iceberg would have been spotted in time.", contextOrBreakdown: "Counterfactual history: The crew did not maintain lookout; the iceberg was not spotted in time." },
        { sentence: "If penicillin had not been discovered accidentally by Alexander Fleming, millions more would have succumbed to bacterial infections.", contextOrBreakdown: "Unreal past condition exploring an alternate trajectory of medicine." },
        { sentence: "If we had secured the patent rights, our enterprise could have monopolized the market for a decade.", contextOrBreakdown: "Third conditional with 'could have' expressing missed past commercial dominance." }
      ],
      wordMeanings: [
        { word: "Immutable", partOfSpeech: "adjective", definition: "Unchanging over time or unable to be changed.", exampleSentence: "The past is immutable, making third conditionals purely theoretical." },
        { word: "Succumb", partOfSpeech: "verb", definition: "Fail to resist pressure, temptation, or an illness; die from.", exampleSentence: "Without modern antibiotics, many succumbed to infection." },
        { word: "Hegemony", partOfSpeech: "noun", definition: "Leadership or dominance, especially by one state or social group over others.", exampleSentence: "The empire maintained hegemony over the Mediterranean." }
      ],
      spokenUsageTips: [
        "In rapid natural speech, 'would have' contracts to 'would've' (/ˈwʊd.əv/) and 'had' contracts to ''d' ('If I'd known, I would've told you').",
        "Never write 'would of' instead of 'would have'."
      ],
      commonMistakes: [
        { incorrect: "If she would have alerted us earlier, we would have avoided the catastrophe.", correct: "If she had alerted us earlier, we would have avoided the catastrophe.", explanation: "Do not use 'would have' in the 'if'-clause; the conditional clause requires the past perfect ('had alerted')." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following represents a grammatically flawless Third Conditional sentence?",
          options: [
            "If he had taken the medicine, he would have recovered sooner.",
            "If he would have taken the medicine, he would have recovered sooner.",
            "If he had taken the medicine, he would recovered sooner.",
            "If he took the medicine, he would have recovered sooner."
          ],
          answer: "If he had taken the medicine, he would have recovered sooner.",
          explanation: "Condition takes past perfect ('had taken'); result takes 'would have' + past participle ('would have recovered')."
        }
      ],
      dialogue: [
        { speaker: "Historian A", text: "How would world history differ if the wireless telegraph had not been invented?" },
        { speaker: "Historian B", text: "If Marconi had not developed wireless communication, maritime navigation would have remained hazardous for decades longer." }
      ],
      quickSummary: [
        "Third conditional: Counterfactual past (unreal history / past regrets).",
        "Formula: If + had + V3, would have + V3.",
        "Never say 'If I would have done'; always say 'If I had done'."
      ]
    },
    {
      id: "ch8-l4",
      chapterId: 8,
      lessonNumber: 4,
      title: "Mixed Conditionals (Past Cause with Present Consequence & Vice Versa)",
      tagline: "Bridging chronological dimensions: connecting past actions to present realities.",
      objectives: [
        "Construct Type 1 Mixed Conditionals: Unreal Past Cause (had + V3) -> Unreal Present Result (would + base verb).",
        "Construct Type 2 Mixed Conditionals: Unreal Present/Permanent State (past/were) -> Unreal Past Result (would have + V3).",
        "Identify chronological temporal clues (now, today, yesterday, in 1990) to determine mixed structures."
      ],
      introduction: "Real life does not always fit into tidy conditional boxes. Often, a decision made in the past directly impacts your present condition right now, or a permanent trait influenced a past choice.",
      deepExplanation: "Mixed Conditionals blend elements of the Second and Third Conditionals across time: Pattern A (Past Cause -> Present Result): An unreal past condition yields an unreal result in the PRESENT. E.g., 'If I had studied medicine at university (Past Cause), I would be a practicing physician today (Present Result)'. Condition is Third (had + V3); result is Second (would + base verb). Pattern B (Present State -> Past Result): A permanent personal trait or present state influenced a past outcome. E.g., 'If I weren't so terrified of flying (Permanent Present Trait), I would have traveled to Australia last year (Past Result)'.",
      grammarMechanics: "Pattern A: If + had + V3 , would + Base Verb (now/today). Pattern B: If + Simple Past / were , would have + V3 (past temporal marker).",
      rules: [
        "Look for time markers like 'now', 'today', 'currently' to signal a present result from a past cause.",
        "Look for markers like 'yesterday', 'last year', 'in his youth' to signal a past result from a stative present trait.",
        "Do not mechanically force standard 2nd or 3rd conditionals when the timeframes of the clauses differ.",
        "Subjunctive 'were' is fully applicable in Pattern B ('If she were more punctual, she wouldn't have missed her flight')."
      ],
      formula: "Pattern A: If + S + [had + V3] , S + [would + Base Verb] + today / now",
      formulaBreakdown: "'If we had secured the seed funding last year (Past), our enterprise would be profitable today (Present).'",
      examples: [
        { sentence: "If the surgeon had not intervened so decisively yesterday, the patient would not be alive today.", contextOrBreakdown: "Pattern A: Past surgical action directly responsible for present living state." },
        { sentence: "If Arthur were not so extraordinarily arrogant, he would have apologized for his insulting conduct at the banquet.", contextOrBreakdown: "Pattern B: Permanent personality trait ('were not arrogant') explains why he did not apologize in the past." },
        { sentence: "If I had mastered fluent Mandarin in childhood, I would be leading our Beijing subsidiary right now.", contextOrBreakdown: "Pattern A: Unreal childhood learning yielding present professional capability." }
      ],
      wordMeanings: [
        { word: "Chronological", partOfSpeech: "adjective", definition: "Starting with the earliest and following the order in which they occurred.", exampleSentence: "Mixed conditionals bridge different chronological planes." },
        { word: "Stative", partOfSpeech: "adjective", definition: "Expressing a state or condition rather than an activity or event.", exampleSentence: "Stative personality traits often form the condition in Pattern B mixed conditionals." },
        { word: "Intervene", partOfSpeech: "verb", definition: "Come between so as to prevent or alter a result or course of events.", exampleSentence: "The surgeon intervened at the critical juncture." }
      ],
      spokenUsageTips: [
        "Mixed conditionals are extraordinarily frequent in native speech when reflecting on life decisions ('If I hadn't moved to London, I wouldn't be married to Sarah').",
        "Emphasize temporal adverbs ('today', 'now') to ensure your listener grasps the mixed timeframe."
      ],
      commonMistakes: [
        { incorrect: "If I had accepted that job offer five years ago, I would have been living in Paris today.", correct: "If I had accepted that job offer five years ago, I would be living in Paris today.", explanation: "Because the result refers to 'today' (present), use 'would be living' (Second Conditional result), not 'would have been living'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly connects an unreal past decision to a present consequence today?",
          options: [
            "If I had bought those shares in 2010, I would have been wealthy today.",
            "If I had bought those shares in 2010, I would be wealthy today.",
            "If I bought those shares in 2010, I would be wealthy today.",
            "If I would have bought those shares in 2010, I would be wealthy today."
          ],
          answer: "If I had bought those shares in 2010, I would be wealthy today.",
          explanation: "Past condition takes 'had bought' (3rd), while the present result takes 'would be' (2nd) to link past cause to present consequence."
        }
      ],
      dialogue: [
        { speaker: "Colleague", text: "Why are you still translating these German technical manuals by hand?" },
        { speaker: "Translator", text: "If our department had upgraded to the neural translation suite last month, I would be completely finished by now!" }
      ],
      quickSummary: [
        "Mixed A: If + had + V3, would + base verb (past cause -> present result).",
        "Mixed B: If + past/were, would have + V3 (present trait -> past result).",
        "Check temporal adverbs (yesterday vs today) to pinpoint the timeline."
      ]
    },
    {
      id: "ch8-l5",
      chapterId: 8,
      lessonNumber: 5,
      title: "Alternatives to If: Unless, Provided that, As long as, In case, Supposing",
      tagline: "Enriching conditional clauses beyond the monotonous repetition of 'If'.",
      objectives: [
        "Deploy 'Unless' as a negative conditional equivalent to 'if... not'.",
        "Express contractual prerequisites using 'provided that', 'on condition that', and 'as long as'.",
        "Differentiate precautionary 'in case' from conditional 'if'."
      ],
      introduction: "Repeating 'if' in every paragraph sounds infantile. English possesses an arsenal of sophisticated conditional conjunctions that establish precise nuances of precaution, concession, and contractual obligation.",
      deepExplanation: "'Unless' means 'except if' or 'if... not' (e.g., 'Unless you sign, the deal is dead' = 'If you do not sign...'). Because 'unless' already contains negative polarity, NEVER put a negative verb inside an unless-clause! 'Provided that' / 'Providing that' and 'As long as' introduce strict contractual conditions ('You may enter provided that you possess an access pass'). 'In case' expresses precaution—doing something beforehand to prepare for a contingency ('Take an umbrella in case it rains' != 'Take an umbrella if it rains').",
      grammarMechanics: "Unless + Affirmative Verb = If + Negative Verb. Provided that + Clause = Strict condition. In case + Clause = Precautionary measure.",
      rules: [
        "Never use a negative verb inside an 'unless'-clause (say 'Unless it rains', NOT 'Unless it doesn't rain').",
        "'In case' is NOT the same as 'if': 'I will call you if I need help' (I will wait until I need help) vs 'Take my number in case you need help' (take it now as a precaution).",
        "'Supposing' or 'Imagine' introduces hypothetical speculative questions ('Supposing you won, what would you do?').",
        "'On condition that' is common in legal contracts to specify non-negotiable terms."
      ],
      formula: "Unless = If not: Unless + S + [Affirmative V] ===> If + S + [do/does/did not + V]",
      formulaBreakdown: "'Unless you submit the documents (Unless + Affirmative), the visa will be denied.'",
      examples: [
        { sentence: "Unless urgent fiscal austerity is implemented, the municipal treasury will face sovereign default.", contextOrBreakdown: "'Unless' equals 'If urgent fiscal austerity is not implemented'." },
        { sentence: "The consortium will finance the infrastructure project provided that the sovereign state guarantees debt indemnity.", contextOrBreakdown: "Contractual conditional conjunction 'provided that' stating strict legal prerequisite." },
        { sentence: "The expedition team carried secondary satellite beacons in case the primary navigation unit malfunctioned.", contextOrBreakdown: "'In case' denotes a sensible precaution taken in advance of a potential failure." }
      ],
      wordMeanings: [
        { word: "Indemnity", partOfSpeech: "noun", definition: "Security or protection against a loss or other financial burden.", exampleSentence: "The government provided debt indemnity to the bank." },
        { word: "Precautionary", partOfSpeech: "adjective", definition: "Carried out as a precaution; designed to prevent something dangerous or undesirable.", exampleSentence: "Evacuation was ordered as a precautionary measure." },
        { word: "Austerity", partOfSpeech: "noun", definition: "Difficult economic conditions created by government measures to reduce public expenditure.", exampleSentence: "Fiscal austerity was mandated by the IMF." }
      ],
      spokenUsageTips: [
        "In contract negotiations, state your boundaries with: 'We agree to these terms, on condition that delivery occurs by March'.",
        "Use 'Just in case' at the end of a sentence: 'I brought an extra passport photo, just in case'."
      ],
      commonMistakes: [
        { incorrect: "Unless you don't study diligently, you will fail the board examination.", correct: "Unless you study diligently, you will fail the board examination.", explanation: "'Unless' already means 'if not'; adding 'don't' creates an erroneous double negative." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly uses 'in case' to express a precautionary measure?",
          options: [
            "I will buy a fire extinguisher in case my house catches fire.",
            "I will buy a fire extinguisher in case my house will catch fire.",
            "I will buy a fire extinguisher if my house catches fire.",
            "In case you buy a fire extinguisher, your house never catches fire."
          ],
          answer: "I will buy a fire extinguisher in case my house catches fire.",
          explanation: "You buy the extinguisher in advance as a precaution (in case), not waiting until the fire starts (if)!"
        }
      ],
      dialogue: [
        { speaker: "General Counsel", text: "Will the merger withstand antitrust scrutiny?" },
        { speaker: "Partner", text: "Provided that we divest our regional retail holdings, the regulatory commission will grant unconditional approval." }
      ],
      quickSummary: [
        "UNLESS: Means 'if not' (always followed by an affirmative verb).",
        "PROVIDED THAT / AS LONG AS: Introduce strict necessary conditions.",
        "IN CASE: Precaution taken in advance (distinct from 'if')."
      ]
    },
    {
      id: "ch8-l6",
      chapterId: 8,
      lessonNumber: 8,
      title: "Inverted Conditionals without 'If' (Had I known, Were he to arrive, Should you require)",
      tagline: "Eliminating 'If' and fronting the auxiliary for supreme formal eloquence.",
      objectives: [
        "Invert First Conditionals using 'Should' (Should you require assistance...).",
        "Invert Second Conditionals using 'Were' (Were I in your position / Were he to resign...).",
        "Invert Third Conditionals using 'Had' (Had we recognized the peril...)."
      ],
      introduction: "In formal diplomatic declarations, legal contracts, and high-level corporate correspondence, dropping the word 'if' and inverting the auxiliary verb creates prose of breathtaking sophistication.",
      deepExplanation: "English allows you to eliminate the conjunction 'if' completely by inverting the auxiliary verb with the subject: 1. Type 1 Inversion replaces 'if + present' with 'Should + Subject + Base Verb': 'If you need assistance' -> 'Should you need assistance'. 2. Type 2 Inversion replaces 'if + were' with 'Were + Subject': 'If I were rich' -> 'Were I rich'. For regular verbs, use 'Were + Subject + to-infinitive': 'If he resigned' -> 'Were he to resign'. 3. Type 3 Inversion replaces 'if + had + V3' with 'Had + Subject + V3': 'If I had known' -> 'Had I known'.",
      grammarMechanics: "1st: Should + S + Base Verb. 2nd: Were + S + (to + Base Verb). 3rd: Had + S + V3. (Note: 'If' is completely deleted).",
      rules: [
        "Never use 'if' when inverting the clause (say 'Had I known', NEVER 'If had I known').",
        "In negative inverted conditionals, place 'not' after the subject (say 'Had we NOT acted', NEVER 'Hadn't we acted').",
        "'Should' in inverted conditionals can apply to any subject (I, you, he, she, they) followed by a BARE infinitive ('Should he arrive').",
        "In Second Conditional inversions with action verbs, use 'Were + Subject + to-infinitive' ('Were the union to strike...')."
      ],
      formula: "Third Conditional Inversion: Had + Subject + [V3] , S + [would have + V3]",
      formulaBreakdown: "'Had the auditors detected (Had + S + V3) the discrepancy, the fraud would have been terminated.'",
      examples: [
        { sentence: "Should you require further clarification regarding the contractual terms, do not hesitate to contact our legal department.", contextOrBreakdown: "First Conditional inversion: 'Should you require' replaces 'If you require'." },
        { sentence: "Were the sovereign government to default on its treasury bonds, global financial contagion would ensue.", contextOrBreakdown: "Second Conditional inversion: 'Were the government to default' replaces 'If the government defaulted'." },
        { sentence: "Had we possessed sufficient actionable intelligence, the maritime catastrophe would have been averted.", contextOrBreakdown: "Third Conditional inversion: 'Had we possessed' replaces 'If we had possessed'." }
      ],
      wordMeanings: [
        { word: "Inversion", partOfSpeech: "noun", definition: "The reversal of the normal order of the words and typically of the subject and verb.", exampleSentence: "Subject-auxiliary inversion elevates the register of conditional clauses." },
        { word: "Contagion", partOfSpeech: "noun", definition: "The spreading of a disease or the spreading of a harmful idea or economic crisis.", exampleSentence: "Financial contagion spread across emerging markets." },
        { word: "Avert", partOfSpeech: "verb", definition: "Prevent or ward off (an undesirable occurrence).", exampleSentence: "Swift diplomatic action averted a major conflict." }
      ],
      spokenUsageTips: [
        "In corporate email sign-offs, 'Should you have any inquiries, please let me know' is the industry gold standard.",
        "Use 'Had I known...' in executive meetings to convey educated reflection."
      ],
      commonMistakes: [
        { incorrect: "If had we known about the hazardous conditions, we would have postponed the climb.", correct: "Had we known about the hazardous conditions, we would have postponed the climb.", explanation: "When inverting the auxiliary ('Had we known'), you MUST delete the conjunction 'if'." }
      ],
      practiceQuiz: [
        {
          question: "What is the inverted conditional equivalent of: 'If the company were to liquidate its assets'?",
          options: [
            "Were the company to liquidate its assets...",
            "Did the company liquidate its assets...",
            "Should the company liquidating its assets...",
            "If were the company to liquidate its assets..."
          ],
          answer: "Were the company to liquidate its assets...",
          explanation: "'If' is dropped, and 'Were' is fronted before the subject ('the company') + to-infinitive."
        }
      ],
      dialogue: [
        { speaker: "Client", text: "What happens if our servers encounter unexpected load surges during the product launch?" },
        { speaker: "Cloud Architect", text: "Should traffic exceed baseline thresholds, our auto-scaling infrastructure will provision additional virtual clusters automatically." }
      ],
      quickSummary: [
        "Delete 'IF' and front the auxiliary verb.",
        "1st conditional: Should you need... (If you need...)",
        "2nd conditional: Were he to resign... (If he resigned...)",
        "3rd conditional: Had we known... (If we had known...)"
      ]
    },
    {
      id: "ch8-l7",
      chapterId: 8,
      lessonNumber: 7,
      title: "Negative Adverbial Inversion (Never, Seldom, Rarely, Scarcely, No sooner)",
      tagline: "Dramatic oratorical emphasis: inverting subject and auxiliary after negative limiters.",
      objectives: [
        "Invert subject and auxiliary when placing negative adverbs at the sentence head.",
        "Master frequency inversions: Never, Seldom, Rarely, Barely.",
        "Deploy correlative time inversions: 'No sooner... than' and 'Scarcely / Hardly... when'."
      ],
      introduction: "When a sentence begins with a negative or restrictive adverb, standard English word order collapses: the auxiliary verb leaps in front of the subject, creating an electrifying rhetorical flourish.",
      deepExplanation: "In standard English, adverbs of negative frequency sit inside the verb phrase ('I have never seen such courage'). However, when you front the negative adverb to the absolute beginning of the sentence for dramatic or oratorical effect, English mandates SUBJECT-AUXILIARY INVERSION (the exact same word order as a question): 'Never have I seen such courage.' If there is no auxiliary verb in the basic sentence, you must introduce a dummy auxiliary (do, does, did). Furthermore, paired correlatives require specific conjunctions: 'No sooner [had S done] THAN...' and 'Hardly / Scarcely [had S done] WHEN...'.",
      grammarMechanics: "Negative Adverb + [Auxiliary Verb] + [Subject] + [Main Verb] + (Object/Complement).",
      rules: [
        "If there is no auxiliary verb, insert dummy 'do', 'does', or 'did' (e.g., 'Seldom does he speak').",
        "'No sooner' is ALWAYS paired with 'THAN' (never 'when').",
        "'Hardly', 'Scarcely', and 'Barely' are ALWAYS paired with 'WHEN' (or 'before').",
        "Never forget to invert: 'Never I have seen' is a severe grammatical error; it MUST be 'Never have I seen'."
      ],
      formula: "Time Inversion: No sooner had + S + [V3] + than + S + [V2 Past]",
      formulaBreakdown: "'No sooner had the envoy arrived (No sooner had + S + V3) than the hostilities erupted (than + S + V2).'",
      examples: [
        { sentence: "Rarely has an economic theorem exerted such transformative influence on monetary policy.", contextOrBreakdown: "Frequency inversion: Negative adverb 'Rarely' + auxiliary 'has' + subject 'theorem' + main verb 'exerted'." },
        { sentence: "Seldom do we encounter an individual whose intellectual brilliance matches their ethical integrity.", contextOrBreakdown: "Present tense inversion: Negative adverb 'Seldom' + dummy auxiliary 'do' + subject 'we' + base verb 'encounter'." },
        { sentence: "Hardly had the aircraft touched down on the runway when the engine erupted in flames.", contextOrBreakdown: "Correlative inversion: 'Hardly had + S + V3' paired with 'when + Simple Past'." }
      ],
      wordMeanings: [
        { word: "Correlative", partOfSpeech: "adjective", definition: "Having a mutual relationship or connection; in grammar, words used in pairs such as 'neither... nor' or 'no sooner... than'.", exampleSentence: "Correlative conjunctions require precise syntactic pairing." },
        { word: "Oratorical", partOfSpeech: "adjective", definition: "Relating to the art or practice of formal public speaking.", exampleSentence: "Negative inversion adds great oratorical resonance to a speech." },
        { word: "Flourish", partOfSpeech: "noun", definition: "A bold or extravagant gesture or action, especially one used to attract attention.", exampleSentence: "Inversion serves as a dramatic rhetorical flourish." }
      ],
      spokenUsageTips: [
        "Reserve negative adverbial inversion for formal speeches, closing legal arguments, and keynote presentations.",
        "Deliver the fronted negative adverb with strong vocal emphasis: 'NEVER in the history of this republic...'"
      ],
      commonMistakes: [
        { incorrect: "No sooner had the bell rung when the students fled the room.", correct: "No sooner had the bell rung than the students fled the room.", explanation: "'No sooner' requires 'than' (comparative 'sooner... than'); 'when' is reserved for 'hardly' and 'scarcely'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence features the correct pairing and inversion for 'Scarcely'?",
          options: [
            "Scarcely had the symposium concluded than the delegates dispersed.",
            "Scarcely had the symposium concluded when the delegates dispersed.",
            "Scarcely the symposium had concluded when the delegates dispersed.",
            "Scarcely did the symposium concluded than the delegates dispersed."
          ],
          answer: "Scarcely had the symposium concluded when the delegates dispersed.",
          explanation: "'Scarcely' triggers inversion ('had the symposium concluded') and is correctly paired with 'when'."
        }
      ],
      dialogue: [
        { speaker: "Historian", text: "How rare was the discovery of the Rosetta Stone?" },
        { speaker: "Lecturer", text: "Seldom in the annals of archaeology has a single artifact unlocked an entire forgotten civilization." }
      ],
      quickSummary: [
        "Fronting a negative adverb forces subject-auxiliary inversion.",
        "Never have I... / Seldom do we... / Rarely did they...",
        "No sooner HAD... THAN...",
        "Hardly / Scarcely HAD... WHEN..."
      ]
    },
    {
      id: "ch8-l8",
      chapterId: 8,
      lessonNumber: 8,
      title: "Limiting & Restrictive Inversion (Only after, Not only... but also, Under no circumstances)",
      tagline: "Enforcing absolute boundaries and layered emphasis through conditional inversion.",
      objectives: [
        "Invert clauses initiated by 'Only' phrases (Only then, Only after, Only when).",
        "Deploy legal/institutional prohibitions using 'Under no circumstances' and 'On no account'.",
        "Master the correlative balance of 'Not only [Inversion]... but also [Parallel Structure]'."
      ],
      introduction: "Limiting phrases like 'Only when' and absolute prohibitions like 'Under no circumstances' command total attention. When placed at the front of a sentence, they enforce grammatical inversion in the main clause.",
      deepExplanation: "Two major structural nuances occur with limiting inversions: 1. With 'Only after', 'Only when', and 'Only if', the inversion takes place in the MAIN clause, NOT in the 'only' clause! E.g., 'Only after the audit was concluded (No inversion in subordinate clause) DID the board approve the dividend (Inversion in main clause)'. 2. Absolute negative prepositional phrases ('Under no circumstances', 'On no account', 'At no time', 'In no way') invert immediately: 'Under no circumstances should you open this door.' 3. 'Not only' at the sentence start inverts the first clause: 'Not only did he win the election, but he also broke the turnout record.'",
      grammarMechanics: "Only after/when/if + [Subordinate Clause] + [Auxiliary + Subject + Verb]. Under no circumstances + [Auxiliary + Subject + Verb].",
      rules: [
        "Do NOT invert inside the 'Only after/when/if' clause itself; invert the following main clause.",
        "'Under no circumstances' and 'On no account' invert immediately.",
        "'Not only' requires inversion in the first clause: 'Not only DID she graduate summa cum laude, but she also secured a patent'.",
        "Ensure the second half of 'Not only... but also' maintains parallel syntactic structure."
      ],
      formula: "Main Clause Inversion: Only after + [Event] + did / was + S + [Base Verb / Complement]",
      formulaBreakdown: "'Only after the treaty was ratified (Subordinate) did the embargo cease (did + S + Base Verb).'",
      examples: [
        { sentence: "Under no circumstances may unauthorized personnel access the mainframe terminals.", contextOrBreakdown: "Immediate inversion after absolute prohibition: 'Under no circumstances' + modal 'may' + subject 'personnel'." },
        { sentence: "Only when the final ballot was tabulated did the incumbent concede defeat.", contextOrBreakdown: "Inversion in the main clause ('did the incumbent concede') following the 'Only when' temporal clause." },
        { sentence: "Not only did the team synthesize the new compound, but they also engineered a scalable synthesis pathway.", contextOrBreakdown: "'Not only' inversion with dummy auxiliary 'did' followed by parallel 'but they also'." }
      ],
      wordMeanings: [
        { word: "Incumbent", partOfSpeech: "noun", definition: "The holder of an office or post.", exampleSentence: "The incumbent senator conceded defeat graciously." },
        { word: "Mainframe", partOfSpeech: "noun", definition: "A large high-speed computer, especially one supporting numerous workstations.", exampleSentence: "Security protocols guard the central mainframe." },
        { word: "Tabulate", partOfSpeech: "verb", definition: "Arrange (data) in tabular form; systematically count votes or numbers.", exampleSentence: "Official election ballots were tabulated overnight." }
      ],
      spokenUsageTips: [
        "In safety briefings, use 'Under no circumstances should anyone...' to leave zero ambiguity.",
        "Emphasize 'Not only' to highlight compounding accomplishments during performance reviews."
      ],
      commonMistakes: [
        { incorrect: "Only after did he inspect the vehicle, he signed the purchase agreement.", correct: "Only after he inspected the vehicle did he sign the purchase agreement.", explanation: "Do not invert inside the 'after' clause; invert the subsequent main clause ('did he sign')." }
      ],
      practiceQuiz: [
        {
          question: "Where should the inversion occur in a sentence beginning with 'Only when the storm cleared'?",
          options: [
            "Only when did the storm clear did the rescue boats launch.",
            "Only when the storm cleared the rescue boats launched.",
            "Only when the storm cleared did the rescue boats launch.",
            "Only did the storm clear when the rescue boats launch."
          ],
          answer: "Only when the storm cleared did the rescue boats launch.",
          explanation: "The 'Only when' clause remains standard; the main clause inverts ('did the rescue boats launch')."
        }
      ],
      dialogue: [
        { speaker: "Security Officer", text: "Can an employee bypass the biometric scanner with a supervisor's keycard?" },
        { speaker: "Director", text: "Under no circumstances is any employee permitted to bypass biometric authentication; the rule is absolute." }
      ],
      quickSummary: [
        "Only when / after / if: Invert the MAIN clause, not the subordinate clause.",
        "Under no circumstances / On no account: Invert immediately.",
        "Not only DID he... but he also..."
      ]
    },
    {
      id: "ch8-l9",
      chapterId: 8,
      lessonNumber: 9,
      title: "Cleft Sentences for Laser Focus (It is... that, What I need is...)",
      tagline: "Cleaving sentences in two to shine an inescapable spotlight on key information.",
      objectives: [
        "Construct It-cleft sentences: 'It is / was [Target Focus] that / who [Rest of Sentence]'.",
        "Construct Wh- (Pseudo) cleft sentences: 'What [Clause] is / was [Target Focus]'.",
        "Construct Reversed Wh-clefts: '[Target Focus] is / was what [Clause]'."
      ],
      introduction: "To 'cleave' means to split in two. A Cleft Sentence takes a normal sentence and splits it across two clauses so that you can cast an unyielding spotlight on the single most critical piece of information.",
      deepExplanation: "Consider the basic sentence: 'David solved the cryptographic puzzle yesterday.' 1. To focus on David: 'IT WAS David WHO solved the cryptographic puzzle yesterday.' 2. To focus on the puzzle: 'IT WAS the cryptographic puzzle THAT David solved yesterday.' 3. To focus on the time: 'IT WAS yesterday THAT David solved the puzzle.' In Wh-Clefts (Pseudo-clefts), a noun clause initiated by 'What' serves as the subject, followed by the verb 'to be' and the focus: 'WHAT David solved WAS the cryptographic puzzle.'",
      grammarMechanics: "It-Cleft: It + [is / was] + [Focused Element] + [that / who] + [Remainder]. Wh-Cleft: What + [Subject + Verb] + [is / was] + [Focused Element].",
      rules: [
        "In It-clefts, always begin with dummy 'It'; never use 'This was' or 'That was' for grammatical clefting.",
        "Use 'who' or 'that' for people; use 'that' for inanimate objects, times, and prepositional phrases.",
        "Wh-clefts are ideal for highlighting desires, actions, or problems ('What we need is more capital').",
        "Ensure tense consistency: if the original action was past, use 'was' in the cleft frame ('It was in 1945 that the war ended')."
      ],
      formula: "It-Cleft: It + was + [Focused Element] + that / who + [Rest of Clause]",
      formulaBreakdown: "'It was the negligence of the contractor (Focused Entity) that caused the structural collapse (Rest of Clause).'",
      examples: [
        { sentence: "It was Marie Curie who first discovered radium and polonium, forever altering atomic physics.", contextOrBreakdown: "It-cleft focusing exclusively on the human discoverer using relative pronoun 'who'." },
        { sentence: "It was only through relentless perseverance that the startup secured regulatory licensing.", contextOrBreakdown: "It-cleft focusing on the manner/instrument ('only through relentless perseverance')." },
        { sentence: "What the venture partners admired most was the founding team's technical adaptability.", contextOrBreakdown: "Wh-cleft focusing on the specific attribute admired by the partners." }
      ],
      wordMeanings: [
        { word: "Cleft", partOfSpeech: "adjective/noun", definition: "Split, divided, or partially divided into two.", exampleSentence: "Cleft sentences divide a thought to emphasize one specific element." },
        { word: "Inescapable", partOfSpeech: "adjective", definition: "Unable to be avoided or denied.", exampleSentence: "Clefting places inescapable rhetorical focus on the agent." },
        { word: "Perseverance", partOfSpeech: "noun", definition: "Persistence in doing something despite difficulty or delay in achieving success.", exampleSentence: "Through perseverance, they completed the expedition." }
      ],
      spokenUsageTips: [
        "Use Wh-clefts in meetings to crystallize the core issue: 'What we are really debating here is risk tolerance'.",
        "Use It-clefts to correct misconceptions: 'No, it was Tuesday that we agreed upon, not Wednesday'."
      ],
      commonMistakes: [
        { incorrect: "This was the accountant who made the error in the tax filing.", correct: "It was the accountant who made the error in the tax filing.", explanation: "It-cleft sentences must strictly begin with the dummy pronoun 'It', never 'This' or 'That'." }
      ],
      practiceQuiz: [
        {
          question: "How do you transform 'Dr. Thorne invented the vaccine' into an It-cleft focusing on Dr. Thorne?",
          options: [
            "What Dr. Thorne invented was the vaccine.",
            "It was Dr. Thorne who invented the vaccine.",
            "He was Dr. Thorne who invented the vaccine.",
            "The vaccine was invented by Dr. Thorne."
          ],
          answer: "It was Dr. Thorne who invented the vaccine.",
          explanation: "An It-cleft focusing on the person uses: 'It was' + Person ('Dr. Thorne') + 'who/that' + remainder."
        }
      ],
      dialogue: [
        { speaker: "Director", text: "Did marketing cause the delivery delay?" },
        { speaker: "Operations Head", text: "No, it was the global semiconductor bottleneck that delayed our product roll-out; marketing executed their plan flawlessly." }
      ],
      quickSummary: [
        "It-cleft: It is / was [Focus] that / who [Rest of sentence].",
        "Wh-cleft: What we need is [Focus].",
        "Used to direct sharp psychological attention to the core idea."
      ]
    },
    {
      id: "ch8-l10",
      chapterId: 8,
      lessonNumber: 10,
      title: "Fronting and Topicalization for Dramatic Emphasis",
      tagline: "Rearranging canonical word order to create suspense, rhythm, and vivid literary imagery.",
      objectives: [
        "Front prepositional phrases of place and motion followed by full subject-verb inversion.",
        "Front adjectives and participles for descriptive emphasis (Enclosed is..., Standing nearby was...).",
        "Topicalize direct objects to connect ideas smoothly to preceding context."
      ],
      introduction: "Standard English follows a rigid Subject-Verb-Object (SVO) order. But master writers and orators regularly break this mold, moving complements, adverbs, and adjectives to the very front to create breathtaking stylistic drama.",
      deepExplanation: "Fronting (or Topicalization) involves moving an element that typically sits after the verb to the head of the sentence. 1. Locative Inversion: When a prepositional phrase of location or direction is fronted, the FULL lexical verb moves ahead of the subject (NO dummy 'did' needed!): 'Behind the podium stood the Prime Minister' (NOT 'did stand'). 2. Participial Fronting: 'Attached is the invoice'; 'Standing in the shadows was a mysterious observer'. 3. Object Topicalization: 'That proposal I cannot accept' (Object moved to front for contrast).",
      grammarMechanics: "Prepositional Phrase of Place + [Full Lexical Verb] + [Subject]. Participle + [is / was] + [Subject].",
      rules: [
        "In Locative Inversion, do NOT use dummy auxiliaries ('do/does/did'); invert the full main verb ('Down poured the rain', NOT 'Down did pour the rain').",
        "Locative Inversion ONLY works if the subject is a noun; if the subject is a personal PRONOUN, do NOT invert ('Away he ran', NOT 'Away ran he').",
        "Fronting is standard in business correspondence: 'Enclosed is a copy of our credentials'.",
        "Use fronting sparingly; overusing it makes modern prose sound melodramatic."
      ],
      formula: "Locative Fronting: [Prepositional Phrase] + [Full Verb] + [Noun Subject]",
      formulaBreakdown: "'At the summit of the mountain (Prepositional Phrase) stood (Full Verb) an ancient granite temple (Noun Subject).'",
      examples: [
        { sentence: "Across the tempestuous ocean sailed the solitary exploratory vessel.", contextOrBreakdown: "Locative fronting with full verb inversion: Prepositional phrase + verb 'sailed' + noun subject 'vessel'." },
        { sentence: "Enclosed within the certified dossier are the authenticated deeds to the estate.", contextOrBreakdown: "Participial fronting common in formal legal and administrative correspondence." },
        { sentence: "Excellence we demand from our associates; mediocrity we will never tolerate.", contextOrBreakdown: "Object topicalization: Direct objects 'Excellence' and 'mediocrity' fronted for dramatic contrast." }
      ],
      wordMeanings: [
        { word: "Topicalization", partOfSpeech: "noun", definition: "A mechanism of syntax that establishes an element as the topic of a sentence or clause by placing it at the front.", exampleSentence: "Topicalization highlights contrast between ideas." },
        { word: "Locative", partOfSpeech: "adjective", definition: "Relating to or denoting a case, form, or word expressing place or location.", exampleSentence: "Locative inversion moves place phrases to the front." },
        { word: "Tempestuous", partOfSpeech: "adjective", definition: "Characterized by strong and turbulent or conflicting emotion; very stormy.", exampleSentence: "The tempestuous seas battered the hull." }
      ],
      spokenUsageTips: [
        "In casual speech, fronting with 'here' and 'there' is common: 'Here comes the bus!', 'There goes our bonus!'",
        "Notice that with pronouns, we do not invert: 'Here it comes!' (NOT 'Here comes it!')."
      ],
      commonMistakes: [
        { incorrect: "Into the conference room did walk the chief executive.", correct: "Into the conference room walked the chief executive.", explanation: "Locative prepositional fronting inverts the full lexical verb directly ('walked'); it does not use dummy 'did'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence displays the correct word order when fronting with a personal pronoun?",
          options: [
            "Down fell he from the tree.",
            "Down he fell from the tree.",
            "Down did he fall from the tree.",
            "Down he did fall from the tree."
          ],
          answer: "Down he fell from the tree.",
          explanation: "When the subject is a personal pronoun ('he'), locative fronting does NOT invert the verb ('Down he fell')."
        }
      ],
      dialogue: [
        { speaker: "Architect", text: "How will visitors experience the entrance to the museum?" },
        { speaker: "Designer", text: "At the center of the grand rotunda stands a soaring glass prism, and around it gather the main galleries." }
      ],
      quickSummary: [
        "Locative fronting: Place phrase + full verb + noun subject (At the top stood the temple).",
        "Pronoun exception: If subject is a pronoun, do not invert (Away he went).",
        "Topicalization: Moving objects or adjectives to the front for thematic contrast."
      ]
    }
  ]
};
