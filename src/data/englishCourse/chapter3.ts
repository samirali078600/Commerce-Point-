import { CourseChapter } from "./types";

export const CHAPTER_3: CourseChapter = {
  id: 3,
  number: 3,
  title: "Master the 12 English Tenses",
  description: "Gain complete mastery over the temporal coordinates of the English language: express past, present, and future with precision across simple, continuous, perfect, and perfect continuous aspects.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch3-l1",
      chapterId: 3,
      lessonNumber: 1,
      title: "Simple Present: Timeless Truths, Habitual Actions, and Stative Realities",
      tagline: "Expressing eternal laws, fixed routines, and present states.",
      objectives: [
        "Deploy the 3rd person singular '-s/-es' inflection flawlessly.",
        "Form negative statements and interrogative queries using 'do' and 'does'.",
        "Distinguish habitual routines from actions happening at the immediate moment."
      ],
      introduction: "The Simple Present does not describe what is occurring at this exact split-second; rather, it anchors statements of universal truth, enduring facts, scheduled timetables, and recurring human habits.",
      deepExplanation: "In the simple present tense, affirmative verbs retain their bare infinitive form for I, You, We, and They. However, singular third-person subjects (He, She, It, or any singular noun) require an '-s', '-es', or '-ies' suffix. Negations and questions summon the auxiliary verb DO or DOES, reverting the main lexical verb to its bare infinitive form. Stative verbs of emotion, cognition, and possession also operate within this tense.",
      grammarMechanics: "Affirmative: Subject + V1 (s/es). Negative: Subject + do/does + not + V1. Question: Do/Does + Subject + V1?",
      rules: [
        "Always append '-s' or '-es' for third-person singular subjects (he, she, it) in affirmative clauses.",
        "Never retain the '-s' on the main verb when 'does' or 'doesn't' is present ('He doesn't know', NOT 'He doesn't knows').",
        "Use simple present for scientific laws and universal axioms (e.g., 'Water boils at 100 degrees Celsius').",
        "Use simple present for scheduled events with fixed timetables ('The flight departs at 6:00 AM tomorrow')."
      ],
      formula: "S + V1 (s/es) + Object/Complement",
      formulaBreakdown: "'She (3rd Sing) conducts (V1+s) rigorous scientific research (Object).'",
      examples: [
        { sentence: "The Earth revolves around the sun in an elliptical orbit.", contextOrBreakdown: "Universal astronomical truth formulated in the simple present." },
        { sentence: "Dr. Bennett meticulously inspects the laboratory instruments every morning.", contextOrBreakdown: "Habitual daily routine with third-person singular suffix '-s'." },
        { sentence: "Does the express train stop at this suburban station?", contextOrBreakdown: "Interrogative structure with auxiliary 'Does' and bare infinitive 'stop'." }
      ],
      wordMeanings: [
        { word: "Axiom", partOfSpeech: "noun", definition: "A statement or proposition that is regarded as being established, accepted, or self-evidently true.", exampleSentence: "That the sun rises in the east is an astronomical axiom." },
        { word: "Habitual", partOfSpeech: "adjective", definition: "Done or doing constantly or as a habit; regular.", exampleSentence: "His habitual morning walk invigorates his mind." },
        { word: "Inflection", partOfSpeech: "noun", definition: "A change in the form of a word (typically the ending) to express a grammatical function or attribute.", exampleSentence: "The third-person singular '-s' is a vital English inflection." }
      ],
      spokenUsageTips: [
        "Pronounce the third-person '-s' as /s/ after voiceless sounds (stops, laughs), as /z/ after voiced sounds (runs, plays), and as /ɪz/ after sibilants (watches, misses).",
        "Do not forget the '-s' on third-person verbs; it is the most common conversational slip."
      ],
      commonMistakes: [
        { incorrect: "He don't understands the instructions.", correct: "He doesn't understand the instructions.", explanation: "Third-person singular takes 'doesn't', and the main verb reverts to bare infinitive 'understand'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence displays correct third-person singular agreement?",
          options: [
            "The executive always analyze the market trends.",
            "The executive always analyzes the market trends.",
            "The executive does analyzes the market trends.",
            "The executive is analyze the market trends."
          ],
          answer: "The executive always analyzes the market trends.",
          explanation: "Singular third-person subject 'The executive' requires the verb inflection 'analyzes'."
        }
      ],
      dialogue: [
        { speaker: "Journalist", text: "How frequently does your advisory board convene?" },
        { speaker: "Spokesperson", text: "The board convenes quarterly to review financial operations." }
      ],
      quickSummary: [
        "Simple present expresses universal truths, regular routines, and stative facts.",
        "Add -s/-es for he, she, it in affirmative statements.",
        "Use do/does for questions and negations; revert the main verb to bare infinitive."
      ]
    },
    {
      id: "ch3-l2",
      chapterId: 3,
      lessonNumber: 2,
      title: "Present Continuous: Real-Time Progression, Temporary States, and Future Plans",
      tagline: "Capturing current activity, unfolding trends, and pre-arranged future itineraries.",
      objectives: [
        "Formulate present continuous using 'am/is/are' + present participle (-ing).",
        "Differentiate temporary present actions from permanent simple present truths.",
        "Utilize the present continuous to express definite, pre-scheduled future arrangements."
      ],
      introduction: "When an event is actively unfolding at this very instant, or when an action is temporary and finite, the Present Continuous provides the dynamic temporal lens.",
      deepExplanation: "The Present Continuous (or Present Progressive) pairs a conjugated form of the auxiliary verb 'to be' (am, is, are) with the present participle of the lexical verb (verb + -ing). Beyond actions happening at the moment of speaking ('I am typing right now'), it conveys ongoing temporary projects ('I am living with my brother this month') and definite future appointments ('We are meeting the CEO on Friday').",
      grammarMechanics: "Subject + am/is/are + Verb-ing. Negation: Subject + am/is/are + not + Verb-ing.",
      rules: [
        "Never omit the auxiliary verb 'be' (say 'She is writing', NOT 'She writing').",
        "Do not use stative verbs in the continuous aspect (say 'I need assistance', NOT 'I am needing assistance').",
        "When a one-syllable verb ends in Consonant-Vowel-Consonant (CVC), double the final consonant before adding -ing (run -> running, sit -> sitting).",
        "Use with 'always' to express mild annoyance at a repetitive habit ('He is always interrupting others')."
      ],
      formula: "S + [am / is / are] + [Verb + ing] + Object",
      formulaBreakdown: "'They (Plural) are (Aux) constructing (Verb-ing) a state-of-the-art laboratory (Object).'",
      examples: [
        { sentence: "The engineers are currently upgrading the central server infrastructure.", contextOrBreakdown: "Action actively transpiring at the current moment of discourse." },
        { sentence: "She is working from our London branch throughout this quarter.", contextOrBreakdown: "Temporary state of affairs rather than a permanent career placement." },
        { sentence: "We are presenting our annual findings to the board at three o'clock tomorrow.", contextOrBreakdown: "Definite future arrangement with a confirmed time." }
      ],
      wordMeanings: [
        { word: "Progressive", partOfSpeech: "adjective", definition: "Denoting an aspect of a verb expressing an action in progress.", exampleSentence: "The progressive aspect emphasizes the unfolding duration of an event." },
        { word: "Transpire", partOfSpeech: "verb", definition: "To occur; happen; take place.", exampleSentence: "Significant technological transformations are transpiring right now." },
        { word: "Ephemeral", partOfSpeech: "adjective", definition: "Lasting for a very short time; temporary.", exampleSentence: "Continuous tenses often describe ephemeral circumstances." }
      ],
      spokenUsageTips: [
        "In rapid natural speech, auxiliary 'are' contracts: 'We're' (/wɪər/), 'They're' (/ðɛər/).",
        "Notice the distinction: 'What do you do?' asks for your profession; 'What are you doing?' asks about your current immediate activity."
      ],
      commonMistakes: [
        { incorrect: "I am knowing the answer and I am wanting to speak.", correct: "I know the answer and I want to speak.", explanation: "'Know' and 'want' are stative verbs and cannot take continuous form." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly utilizes the present continuous for a temporary situation?",
          options: [
            "He is usually living in Rome, but this month he stays in Paris.",
            "He usually lives in Rome, but this month he is staying in Paris.",
            "He is living in Rome usually, but this month he stay in Paris.",
            "He lives in Rome, but this month he stay in Paris."
          ],
          answer: "He usually lives in Rome, but this month he is staying in Paris.",
          explanation: "Permanent habit = simple present ('lives'); temporary situation = present continuous ('is staying')."
        }
      ],
      dialogue: [
        { speaker: "Director", text: "Are you finalizing the contract documents right now?" },
        { speaker: "Associate", text: "Yes, I am reviewing the final indemnification clauses as we speak." }
      ],
      quickSummary: [
        "Structure: Subject + am/is/are + Verb-ing.",
        "Captures ongoing moments, temporary states, and confirmed future arrangements.",
        "Stative verbs remain in simple present."
      ]
    },
    {
      id: "ch3-l3",
      chapterId: 3,
      lessonNumber: 3,
      title: "Present Perfect: Bridge Between Past Action and Present Reality",
      tagline: "Connecting completed actions to present consequences and life experience.",
      objectives: [
        "Construct the Present Perfect using 'have/has' + past participle (V3).",
        "Differentiate 'since' (point in time) from 'for' (duration).",
        "Deploy adverbs of time: already, yet, just, ever, and never."
      ],
      introduction: "The Present Perfect is not merely a past tense; it is an aspect of the present that looks backward, highlighting how past actions impact the current situation.",
      deepExplanation: "The Present Perfect pairs the auxiliary verb 'have' or 'has' with the third principal form of the verb (the past participle). It is used when the exact time of the past action is either unknown or irrelevant, and the focus rests entirely on the present outcome or accumulated life experience. If a definite past time marker is stated (such as 'yesterday' or 'in 2020'), the simple past must be used instead.",
      grammarMechanics: "Affirmative: Subject + have/has + Past Participle (V3). Negation: Subject + have/has + not + V3. Question: Have/Has + Subject + V3?",
      rules: [
        "Never use the Present Perfect with specific finished past time expressions (never say 'I have seen him yesterday'; say 'I saw him yesterday').",
        "Use 'since' with a specific starting point in time (since 2018, since Monday, since 9:00 AM).",
        "Use 'for' with a span or duration of time (for three years, for five hours, for two decades).",
        "Use 'yet' exclusively in negative statements and questions, placed at the end of the clause.",
        "Differentiate 'been to' (visited and returned) from 'gone to' (traveled and still there)."
      ],
      formula: "S + [have / has] + [Past Participle (V3)] + Object",
      formulaBreakdown: "'The researchers (Plural) have (Aux) discovered (V3) a novel compound (Object).'",
      examples: [
        { sentence: "Our organization has achieved all its quarterly milestones ahead of schedule.", contextOrBreakdown: "Completed past action with direct relevance to current organizational standing." },
        { sentence: "She has resided in this historic district since 2015.", contextOrBreakdown: "Action initiated in the past that continues uninterrupted into the present." },
        { sentence: "Have you ever traveled to an international symposium on clean energy?", contextOrBreakdown: "Inquiry into accumulated lifetime experience." }
      ],
      wordMeanings: [
        { word: "Indefinite", partOfSpeech: "adjective", definition: "Not clearly expressed or determined; vague in time boundary.", exampleSentence: "Present perfect denotes indefinite past time." },
        { word: "Participle", partOfSpeech: "noun", definition: "A word formed from a verb and used as an adjective or a component of compound verb tenses.", exampleSentence: "'Written' is the past participle of 'write'." },
        { word: "Relevance", partOfSpeech: "noun", definition: "The quality or state of being closely connected or appropriate to the matter at hand.", exampleSentence: "The present perfect highlights the present relevance of past actions." }
      ],
      spokenUsageTips: [
        "Contract 'I have' to 'I've' (/aɪv/), 'He has' to 'He's' (/hiːz/), and 'They have' to 'They've' (/ðeɪv/).",
        "Remember: 'He has gone to Paris' means he is in Paris right now; 'He has been to Paris' means he visited Paris in his life and has returned."
      ],
      commonMistakes: [
        { incorrect: "I have graduated from the university in 2021.", correct: "I graduated from the university in 2021.", explanation: "A specific completed past year ('in 2021') requires the Simple Past tense." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence demonstrates the correct use of 'since' and 'for'?",
          options: [
            "I have worked here since six months.",
            "I have worked here for six months.",
            "I have worked here since six months ago for.",
            "I work here for 2020."
          ],
          answer: "I have worked here for six months.",
          explanation: "'Six months' is a span or duration of time, which strictly demands 'for'."
        }
      ],
      dialogue: [
        { speaker: "Inspector", text: "Has the team submitted the safety audit yet?" },
        { speaker: "Coordinator", text: "Yes, they have just submitted it, and the director has already approved the findings." }
      ],
      quickSummary: [
        "Formula: have/has + V3 (past participle).",
        "Connects past events to present results or experiences.",
        "FOR denotes duration; SINCE denotes starting point; never use with finished time adverbs."
      ]
    },
    {
      id: "ch3-l4",
      chapterId: 3,
      lessonNumber: 4,
      title: "Present Perfect Continuous: Ongoing Durations and Unfinished Endeavors",
      tagline: "Spotlighting the unfolding duration of actions initiated in the past and still ongoing.",
      objectives: [
        "Construct Present Perfect Continuous using 'have/has been' + Verb-ing.",
        "Contrast Present Perfect (result/completion) with Present Perfect Continuous (duration/process).",
        "Explain visible present evidence of recently concluded activities."
      ],
      introduction: "When you wish to emphasize the continuous process, physical labor, or ongoing duration of an action that began in the past and continues into the present, this tense is your primary vehicle.",
      deepExplanation: "The Present Perfect Continuous combines 'have been' or 'has been' with the present participle (-ing). While the standard Present Perfect focuses on the completion or quantity of results ('I have written three reports today'), the Present Perfect Continuous focuses on the duration and effort ('I have been writing reports all morning'). It is also employed when an activity recently ceased, but its physical consequences remain visibly evident in the present.",
      grammarMechanics: "Subject + have/has been + Verb-ing. Question: Have/Has + Subject + been + Verb-ing?",
      rules: [
        "Use Present Perfect Continuous to emphasize duration with time phrases like 'all day', 'for hours', 'lately', 'recently'.",
        "Do not use stative verbs in this tense; use the simple Present Perfect instead (say 'I have known him for years', NOT 'I have been knowing him').",
        "If the sentence specifies a completed quantity, use simple Present Perfect (say 'I have read 50 pages', NOT 'I have been reading 50 pages')."
      ],
      formula: "S + [have / has been] + [Verb + ing] + [for / since / time phrase]",
      formulaBreakdown: "'The engineers (Subj) have been testing (Verb phrase) the propulsion prototype (Object) since sunrise (Time).'",
      examples: [
        { sentence: "She has been conducting clinical trials for over eight consecutive months.", contextOrBreakdown: "Highlights the uninterrupted duration of the research process." },
        { sentence: "The ground is soaked because it has been raining heavily all afternoon.", contextOrBreakdown: "Ongoing activity with direct visible evidence in the immediate present." },
        { sentence: "What have you been doing to prepare for this certification exam?", contextOrBreakdown: "Inquiry into ongoing habits and recent preparatory activities." }
      ],
      wordMeanings: [
        { word: "Endeavor", partOfSpeech: "noun", definition: "An enterprise or undertaking directed toward a specific goal.", exampleSentence: "Scientific discovery is a continuous collective endeavor." },
        { word: "Consecutive", partOfSpeech: "adjective", definition: "Following continuously; in unbroken or logical sequence.", exampleSentence: "It rained for five consecutive days." },
        { word: "Protracted", partOfSpeech: "adjective", definition: "Lasting for a long time or longer than expected or usual.", exampleSentence: "The protracted negotiations required immense patience." }
      ],
      spokenUsageTips: [
        "In spoken English, 'have been' reduces naturally to /həv bɪn/ or /əv bɪn/.",
        "Use 'How long have you been...?' to politely ask about someone's career, study, or residence."
      ],
      commonMistakes: [
        { incorrect: "I am working on this thesis since three years.", correct: "I have been working on this thesis for three years.", explanation: "An action beginning in the past and continuing requires Present Perfect Continuous, and duration demands 'for'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly highlights ongoing duration without grammatical error?",
          options: [
            "She has been writing ten emails this morning.",
            "She has written ten emails this morning.",
            "She has been known him for a decade.",
            "She is studying here since October."
          ],
          answer: "She has written ten emails this morning.",
          explanation: "When a finished numerical quantity ('ten emails') is stated, use the simple Present Perfect."
        }
      ],
      dialogue: [
        { speaker: "Visitor", text: "You look exhausted, Thomas!" },
        { speaker: "Thomas", text: "Indeed, I have been debugging this critical software glitch since five o'clock this morning." }
      ],
      quickSummary: [
        "Formula: have/has been + Verb-ing.",
        "Emphasizes the duration, process, and effort of ongoing actions.",
        "Use simple Present Perfect for finished quantities; use continuous for ongoing duration."
      ]
    },
    {
      id: "ch3-l5",
      chapterId: 3,
      lessonNumber: 5,
      title: "Simple Past: Completed Historic Events and Definite Temporal Points",
      tagline: "Narrating historical facts, completed achievements, and past chronological sequences.",
      objectives: [
        "Master regular past inflections (-ed) and top irregular past forms.",
        "Employ definite past temporal markers (yesterday, ago, in 1999, last week).",
        "Formulate past questions and negations using 'did' and 'did not'."
      ],
      introduction: "The Simple Past is the storytelling backbone of the English language. It records events that occurred and concluded entirely within a finished window of time.",
      deepExplanation: "Regular verbs in the Simple Past add '-ed' to their base form (work -> worked, decide -> decided). However, English features over 200 high-frequency irregular verbs that mutate their internal vowels or adopt unique forms (go -> went, take -> took, buy -> bought). In negative statements and interrogative inquiries, the auxiliary DID bears the past tense marker, causing the main verb to revert to its bare infinitive form.",
      grammarMechanics: "Affirmative: Subject + V2 (Past Form). Negative: Subject + did not (didn't) + V1. Question: Did + Subject + V1?",
      rules: [
        "Use Simple Past whenever a specific, finished time is stated or clearly implied (yesterday, last month, two years ago).",
        "Never combine 'did' with a past tense verb form (say 'Did you see him?', NOT 'Did you saw him?').",
        "Pronounce the '-ed' suffix in three distinct ways: /t/ after unvoiced sounds (stopped, laughed), /d/ after voiced sounds (lived, cleaned), and /ɪd/ only after /t/ or /d/ (wanted, decided).",
        "Do not confuse the past tense (V2) with the past participle (V3) in irregular verbs (e.g., went vs gone; saw vs seen)."
      ],
      formula: "S + V2 (Past Simple) + Finished Time Expression",
      formulaBreakdown: "'The delegates (Subject) ratified (V2) the historic accord (Object) yesterday (Past Time).'",
      examples: [
        { sentence: "Alexander Fleming discovered penicillin by accident in 1928.", contextOrBreakdown: "Completed historic discovery tied to an explicit historical date." },
        { sentence: "We did not receive the official notification until yesterday afternoon.", contextOrBreakdown: "Negative structure utilizing 'did not' + bare infinitive 'receive'." },
        { sentence: "Why did the financial committee reject the initial expenditure plan?", contextOrBreakdown: "Past inquiry with auxiliary 'did' and bare infinitive 'reject'." }
      ],
      wordMeanings: [
        { word: "Ratify", partOfSpeech: "verb", definition: "Sign or give formal consent to a treaty, contract, or agreement, making it officially valid.", exampleSentence: "Both parliaments voted to ratify the treaty." },
        { word: "Chronicle", partOfSpeech: "verb", definition: "Record a series of events in a detailed and order-bound way.", exampleSentence: "The biography chronicles his rise from poverty to leadership." },
        { word: "Definite", partOfSpeech: "adjective", definition: "Clearly stated or decided; not vague or doubtful.", exampleSentence: "A definite time marker requires the simple past tense." }
      ],
      spokenUsageTips: [
        "Only add an extra syllable for '-ed' when the base verb ends in 'T' or 'D' (want -> want-ed; need -> need-ed). For 'watched', say one syllable /wɒtʃt/.",
        "In questions, contract 'Did you' naturally to /dɪdʒə/ in fluent spoken English."
      ],
      commonMistakes: [
        { incorrect: "Did you went to the bank yesterday and withdrew money?", correct: "Did you go to the bank yesterday and withdraw money?", explanation: "'Did' already carries the past tense; all following verbs governed by it must be in bare infinitive form." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following contains the correct phonetic pronunciation rule for '-ed'?",
          options: [
            "'-ed' always adds a new syllable to every verb.",
            "'-ed' only forms a distinct new syllable (/ɪd/) after verbs ending in /t/ or /d/.",
            "'-ed' is never pronounced.",
            "'-ed' is pronounced /t/ after vowels."
          ],
          answer: "'-ed' only forms a distinct new syllable (/ɪd/) after verbs ending in /t/ or /d/.",
          explanation: "Words like 'started' and 'ended' add a syllable (/ɪd/), while words like 'worked' and 'played' remain single syllables."
        }
      ],
      dialogue: [
        { speaker: "Historian", text: "When did the constitutional convention conclude?" },
        { speaker: "Archivist", text: "The delegates signed the final document on September 17, 1787, and adjourned immediately." }
      ],
      quickSummary: [
        "Use Simple Past for completed actions at definite past times.",
        "Regular verbs take -ed; irregular verbs must be memorized.",
        "Negative and question forms employ 'did' + bare infinitive."
      ]
    },
    {
      id: "ch3-l6",
      chapterId: 3,
      lessonNumber: 6,
      title: "Past Continuous: Interrupted Actions and Parallel Background Narratives",
      tagline: "Setting descriptive backgrounds and capturing actions interrupted in progress.",
      objectives: [
        "Formulate Past Continuous using 'was/were' + Verb-ing.",
        "Combine Past Continuous (background action) with Simple Past (interrupting event) using 'when' and 'while'.",
        "Depict two parallel activities transpiring simultaneously in the past."
      ],
      introduction: "When an action was in the middle of happening at a specific moment in the past, or when an ongoing backdrop was suddenly interrupted by another event, the Past Continuous paints the scene.",
      deepExplanation: "The Past Continuous pairs 'was' (for I, he, she, it) or 'were' (for you, we, they) with the present participle (-ing). It is often linked with the Simple Past using the conjunctions 'while' and 'when'. 'While' typically introduces the longer continuous background action, whereas 'when' introduces the sudden, brief interrupting action.",
      grammarMechanics: "Pattern A: While + Past Continuous, Simple Past. Pattern B: Past Continuous + when + Simple Past.",
      rules: [
        "Use 'was' for singular subjects (I, he, she, it) and 'were' for plural subjects and 'you'.",
        "Use the Past Continuous for the longer background action, and Simple Past for the sudden interruption.",
        "If two actions were occurring simultaneously in the past, use Past Continuous for both ('While she was reading, he was writing').",
        "Do not use stative verbs in Past Continuous (say 'I was exhausted', NOT 'I was being exhausted')."
      ],
      formula: "S + [was / were] + [Verb + ing] ... when + [Simple Past Clause]",
      formulaBreakdown: "'The aircraft (Subj) was cruising (Past Cont) smoothly when sudden turbulence struck (Simple Past).'",
      examples: [
        { sentence: "While the engineers were inspecting the turbine, a warning siren sounded.", contextOrBreakdown: "Long background inspection interrupted by the brief sound of a siren." },
        { sentence: "At eight o'clock last evening, she was drafting the quarterly press release.", contextOrBreakdown: "Action in active progress at an exact past point in time." },
        { sentence: "While the conductor was leading the orchestra, the solo violinist was tuning her instrument.", contextOrBreakdown: "Two simultaneous parallel continuous actions in the past." }
      ],
      wordMeanings: [
        { word: "Simultaneous", partOfSpeech: "adjective", definition: "Occurring, operating, or done at the same time.", exampleSentence: "The simultaneous translation allowed all delegates to understand." },
        { word: "Interruption", partOfSpeech: "noun", definition: "An act of stopping the continuous progress of an activity or process.", exampleSentence: "The power failure caused an abrupt interruption of the symposium." },
        { word: "Backdrop", partOfSpeech: "noun", definition: "A setting or background against which events take place.", exampleSentence: "Past continuous establishes the descriptive backdrop of a narrative." }
      ],
      spokenUsageTips: [
        "Pronounce 'were' as a reduced schwa /wər/ in continuous speech, not /wɛər/.",
        "Emphasize the suddenness of the interrupting Simple Past verb to enhance vocal storytelling."
      ],
      commonMistakes: [
        { incorrect: "When I was walking in the park, I was finding a lost wallet.", correct: "While I was walking in the park, I found a lost wallet.", explanation: "Finding a wallet is a sudden momentary event; it must be in the Simple Past, not Past Continuous." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly pairs Past Continuous with Simple Past?",
          options: [
            "While they slept, the fire alarm was ringing.",
            "While they were sleeping, the fire alarm rang.",
            "They slept when the fire alarm was ringing.",
            "While they was sleeping, the fire alarm rang."
          ],
          answer: "While they were sleeping, the fire alarm rang.",
          explanation: "'Were sleeping' sets the ongoing background; 'rang' delivers the sudden interrupting event."
        }
      ],
      dialogue: [
        { speaker: "Detective", text: "What were you doing when the vault alarm was triggered?" },
        { speaker: "Security Guard", text: "I was conducting my regular patrol on the fourth floor when the alarm sounded." }
      ],
      quickSummary: [
        "Formula: was/were + Verb-ing.",
        "Describes actions in progress at a past moment.",
        "Pairs with Simple Past: background continuous action interrupted by a sudden past event."
      ]
    },
    {
      id: "ch3-l7",
      chapterId: 3,
      lessonNumber: 7,
      title: "Past Perfect: The Antecedent Past (The Past Before Another Past)",
      tagline: "Establishing chronological seniority between two completed past actions.",
      objectives: [
        "Formulate the Past Perfect using 'had' + past participle (V3).",
        "Chronologically order two past events using 'before', 'after', 'by the time', and 'already'.",
        "Avoid unnecessary overuse of the Past Perfect when simple chronological sequencing suffices."
      ],
      introduction: "If two events took place in the past, how do you make it unmistakably clear which one happened first? The Past Perfect is English's ultimate chronological time machine.",
      deepExplanation: "The Past Perfect combines the auxiliary 'had' with the past participle (V3). Whenever a narrative relates two past occurrences, the action that happened earlier in time is expressed in the Past Perfect, while the subsequent action is expressed in the Simple Past. This eliminates temporal ambiguity, especially when using temporal markers like 'by the time', 'already', and 'no sooner... than'.",
      grammarMechanics: "Earlier Past Action: Past Perfect (had + V3). Subsequent Past Action: Simple Past (V2).",
      rules: [
        "Use Past Perfect only when necessary to establish that one past action preceded another past action.",
        "The formula with 'By the time': By the time + [Simple Past], [Past Perfect] ('By the time he arrived, the meeting had ended').",
        "Never use Past Perfect in isolation without another past reference point or clear context.",
        "In negative form: had + not (hadn't) + V3."
      ],
      formula: "Earlier Action [had + V3] ... before ... Later Action [V2 Simple Past]",
      formulaBreakdown: "'The train had already departed (Earlier Event) before we reached the platform (Later Event).'",
      examples: [
        { sentence: "By the time the paramedics arrived at the scene, the bystander had administered first aid.", contextOrBreakdown: "First aid occurred before the paramedics arrived; 'had administered' clarifies order." },
        { sentence: "She had never witnessed such breathtaking natural beauty until she visited the Fjords.", contextOrBreakdown: "Past experience prior to a specific past milestone." },
        { sentence: "The financial auditors discovered that the accountant had forged several invoices.", contextOrBreakdown: "The forgery occurred prior to the auditors' subsequent discovery." }
      ],
      wordMeanings: [
        { word: "Antecedent", partOfSpeech: "noun", definition: "A thing or event that existed before or logically precedes another.", exampleSentence: "The antecedent past must be marked with the past perfect tense." },
        { word: "Ambiguity", partOfSpeech: "noun", definition: "The quality of being open to more than one interpretation; inexactness.", exampleSentence: "Past perfect removes chronological ambiguity from complex historical accounts." },
        { word: "Prior", partOfSpeech: "adjective", definition: "Existing or coming before in time, order, or importance.", exampleSentence: "Prior to his appointment, he had served in diplomatic circles." }
      ],
      spokenUsageTips: [
        "Contract 'had' to ''d' in speech: 'I'd already finished', 'They'd left before noon'.",
        "If conjunctions like 'before' or 'after' make the sequence 100% obvious, native speakers frequently use Simple Past for both actions."
      ],
      commonMistakes: [
        { incorrect: "When I reached the cinema, the movie already started.", correct: "When I reached the cinema, the movie had already started.", explanation: "The movie started prior to my arrival; therefore, it requires the Past Perfect 'had already started'." }
      ],
      practiceQuiz: [
        {
          question: "Which action occurred FIRST in this sentence: 'The team had finalized the blueprints before the client requested modifications'?",
          options: [
            "The client requested modifications.",
            "The team finalized the blueprints.",
            "Both actions occurred simultaneously.",
            "The sentence does not make the order clear."
          ],
          answer: "The team finalized the blueprints.",
          explanation: "The Past Perfect ('had finalized') signifies the action that took place prior to the Simple Past event."
        }
      ],
      dialogue: [
        { speaker: "Investigator", text: "Had the suspect fled the premises before the officers arrived?" },
        { speaker: "Witness", text: "Yes, he had vanished into the alleyway at least ten minutes before the sirens were heard." }
      ],
      quickSummary: [
        "Formula: had + V3 (past participle).",
        "Designates the earlier of two completed past actions.",
        "Essential with 'by the time', 'already', and 'before'."
      ]
    },
    {
      id: "ch3-l8",
      chapterId: 3,
      lessonNumber: 8,
      title: "Past Perfect Continuous: Chronicling Past Durations Leading to an Event",
      tagline: "Highlighting uninterrupted past duration prior to a subsequent past milestone.",
      objectives: [
        "Formulate the Past Perfect Continuous using 'had been' + Verb-ing.",
        "Express the continuous duration of an action up to a defined past reference point.",
        "Differentiate Past Perfect (completed result) from Past Perfect Continuous (ongoing process)."
      ],
      introduction: "When you need to describe how long an activity had been unfolding continuously before another past event took place, the Past Perfect Continuous provides the exact grammatical mechanism.",
      deepExplanation: "The Past Perfect Continuous unites 'had been' with the present participle (-ing). Like its present counterpart, it focuses on prolonged exertion, duration, or continuous process. The crucial difference is that the entire timeframe is anchored in the past: the action had been occurring for a period of time before another past event occurred or halted it.",
      grammarMechanics: "Subject + had been + Verb-ing + for/since + past reference point.",
      rules: [
        "Use Past Perfect Continuous to show that an action was ongoing up to a specific moment in the past.",
        "Like all continuous tenses, do not use stative verbs (say 'They had owned the estate for fifty years', NOT 'They had been owning').",
        "Specify duration with 'for' or 'since' to anchor the temporal span.",
        "Often explains the past physical cause of a past physical condition ('His eyes were red because he had been reading all night')."
      ],
      formula: "S + [had been] + [Verb + ing] + [for / since] ... before [Simple Past]",
      formulaBreakdown: "'They (Subj) had been negotiating (Verb phrase) for six hours (Duration) before reaching a compromise (Past event).'",
      examples: [
        { sentence: "The exhausted marathoner had been running for nearly three hours when cramps forced him to halt.", contextOrBreakdown: "Prolonged continuous past action interrupted by a subsequent past event." },
        { sentence: "The ground was damp because it had been drizzling throughout the entire night.", contextOrBreakdown: "Explaining the past physical cause of a past condition." },
        { sentence: "Dr. Chen had been researching genetic therapies for a decade before making her breakthrough.", contextOrBreakdown: "Continuous duration preceding a major past milestone." }
      ],
      wordMeanings: [
        { word: "Cessation", partOfSpeech: "noun", definition: "The fact or process of ending or being brought to an end.", exampleSentence: "The cessation of hostilities occurred after protracted talks." },
        { word: "Duration", partOfSpeech: "noun", definition: "The time during which something continues.", exampleSentence: "We measured the duration of the continuous experiment." },
        { word: "Exertion", partOfSpeech: "noun", definition: "Physical or mental effort.", exampleSentence: "He was panting from strenuous physical exertion." }
      ],
      spokenUsageTips: [
        "In fast dialogue, 'had been' is contracted and reduced: 'I'd been working' (/aɪd bɪn ˈwɜːrkɪŋ/).",
        "Use this tense to build suspense and emotional empathy in narrative storytelling."
      ],
      commonMistakes: [
        { incorrect: "He was exhausted because he was driving for ten hours straight.", correct: "He was exhausted because he had been driving for ten hours straight.", explanation: "To emphasize duration leading up to a past state ('was exhausted'), use the Past Perfect Continuous." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly uses the Past Perfect Continuous to express duration before a past event?",
          options: [
            "She had been practicing the piano for two hours before her tutor arrived.",
            "She was practicing the piano for two hours before her tutor arrived.",
            "She has been practicing the piano for two hours before her tutor arrived.",
            "She had practiced the piano since two hours."
          ],
          answer: "She had been practicing the piano for two hours before her tutor arrived.",
          explanation: "'Had been practicing' accurately highlights the continuous duration prior to the past milestone 'arrived'."
        }
      ],
      dialogue: [
        { speaker: "Interviewer", text: "How long had you been collaborating with Dr. Lee before publishing the thesis?" },
        { speaker: "Scientist", text: "We had been conducting joint experiments for nearly four years before we compiled the final manuscript." }
      ],
      quickSummary: [
        "Formula: had been + Verb-ing.",
        "Emphasizes the continuous duration of an action before another past event.",
        "Explains the cause of a past condition or emotional state."
      ]
    },
    {
      id: "ch3-l9",
      chapterId: 3,
      lessonNumber: 9,
      title: "Simple Future: Will vs Be Going To vs Present Forms for Future Time",
      tagline: "Navigating intentions, spontaneous decisions, promises, and predictions.",
      objectives: [
        "Differentiate 'will' (spontaneous decisions, predictions, promises) from 'be going to' (pre-formed plans, visible evidence).",
        "Utilize Present Continuous and Simple Present for future events.",
        "Employ future time clauses with 'if', 'when', 'as soon as', and 'until'."
      ],
      introduction: "English has no single inflected future verb ending; instead, it deploys a sophisticated array of modal auxiliaries, periphrastic forms, and present tenses to articulate future reality.",
      deepExplanation: "'Will' is a modal auxiliary used for spontaneous decisions made at the moment of speech ('I will help you with those boxes'), formal predictions ('Economic growth will moderate next year'), offers, and resolute promises. In contrast, 'be going to' expresses pre-existing intentions formulated before the conversation ('I am going to study law next year') or immediate predictions grounded in visible physical evidence ('Look at those dark clouds; it is going to rain').",
      grammarMechanics: "Spontaneous/Promise: will + bare infinitive. Planned Intention/Evidence: be going to + bare infinitive. Time Clause: when/if + Simple Present (NO will).",
      rules: [
        "Use 'will' for decisions made impulsively at the exact instant of speaking.",
        "Use 'be going to' when a decision was already finalized prior to the moment of speaking.",
        "Use 'be going to' when present sensory evidence makes a future event inevitable.",
        "Never use 'will' inside a subordinate time clause beginning with when, as soon as, before, after, or if (say 'When I arrive, I will call', NOT 'When I will arrive')."
      ],
      formula: "Future Clause: [Main Clause with will/going to] + [Time Conjunction] + [Simple Present]",
      formulaBreakdown: "'I will notify (Main with will) the director as soon as the test concludes (Present in time clause).'",
      examples: [
        { sentence: "The phone is ringing; I will answer it immediately.", contextOrBreakdown: "Spontaneous decision made at the instant of speech." },
        { sentence: "We are going to launch the updated mobile application next quarter.", contextOrBreakdown: "Pre-meditated plan conceived and scheduled prior to speaking." },
        { sentence: "As soon as the treaty takes effect, trade tariffs will decrease.", contextOrBreakdown: "Subordinate time clause with simple present 'takes effect' paired with future main clause." }
      ],
      wordMeanings: [
        { word: "Periphrastic", partOfSpeech: "adjective", definition: "Formed by using auxiliary or supporting words rather than by inflection.", exampleSentence: "'Be going to' is a periphrastic future construction." },
        { word: "Spontaneous", partOfSpeech: "adjective", definition: "Performed or occurring as a result of a sudden inner impulse without premeditation.", exampleSentence: "'Will' conveys spontaneous offers and choices." },
        { word: "Inevitable", partOfSpeech: "adjective", definition: "Certain to happen; unavoidable.", exampleSentence: "With dark clouds overhead, rain is inevitable." }
      ],
      spokenUsageTips: [
        "In casual spoken dialogue, 'going to' frequently reduces to 'gonna' (/ˈɡən.ə/), though you should write 'going to' in formal texts.",
        "Contract 'will' to ''ll': 'I'll', 'She'll', 'We'll'."
      ],
      commonMistakes: [
        { incorrect: "I will call you when I will arrive at the airport.", correct: "I will call you when I arrive at the airport.", explanation: "Subordinate time clauses with 'when' strictly forbid 'will'; they take the simple present." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly describes a future prediction based on immediate visible evidence?",
          options: [
            "Look at that leaning ladder! It will fall.",
            "Look at that leaning ladder! It is going to fall.",
            "Look at that leaning ladder! It falls.",
            "Look at that leaning ladder! It will be falling."
          ],
          answer: "Look at that leaning ladder! It is going to fall.",
          explanation: "Predictions grounded in immediate, observable physical evidence demand 'be going to'."
        }
      ],
      dialogue: [
        { speaker: "Customer", text: "These packages are far too heavy for me to carry alone." },
        { speaker: "Clerk", text: "Do not worry, sir! I will assist you to your vehicle right away." }
      ],
      quickSummary: [
        "WILL: Spontaneous decisions, promises, offers, general predictions.",
        "BE GOING TO: Pre-formed plans and predictions based on visible evidence.",
        "Subordinate time clauses with 'if' and 'when' use Simple Present, never 'will'."
      ]
    },
    {
      id: "ch3-l10",
      chapterId: 3,
      lessonNumber: 10,
      title: "Future Continuous, Future Perfect, and Future Perfect Continuous",
      tagline: "Navigating advanced future horizons: activities in flight, deadlines, and milestones.",
      objectives: [
        "Construct Future Continuous (will be + Verb-ing) for actions in progress at a future point.",
        "Formulate Future Perfect (will have + V3) to articulate completion before a future deadline.",
        "Master Future Perfect Continuous (will have been + Verb-ing) for cumulative duration at a future milestone."
      ],
      introduction: "To discuss executive roadmaps, long-term projections, and upcoming milestones with professional precision, you must master the advanced triad of future aspects.",
      deepExplanation: "The Future Continuous (will be + -ing) projects ourselves into the future to view an activity actively in mid-progress ('This time next week, I will be flying to Tokyo'). The Future Perfect (will have + V3) looks backward from a future deadline to declare an action completed ('By December, we will have inaugurated the facility'). The Future Perfect Continuous (will have been + -ing) tallies the continuous cumulative duration up to a future benchmark.",
      grammarMechanics: "Future Cont: will be + Verb-ing. Future Perfect: will have + V3 + by [time]. Future Perfect Cont: will have been + Verb-ing + for [duration] + by [time].",
      rules: [
        "Use Future Perfect whenever you encounter the time preposition 'by' followed by a future deadline ('by Friday', 'by 2030').",
        "Never use 'has' in Future Perfect; 'will' is a modal auxiliary and must be followed by base form 'have' regardless of subject (say 'She will have completed', NOT 'She will has completed').",
        "Use Future Continuous to make polite, neutral inquiries about someone's future plans without pressuring them ('Will you be using the printer this afternoon?')."
      ],
      formula: "By [Future Deadline], S + [will have + V3] + Object",
      formulaBreakdown: "'By next December (Deadline), our firm will have completed (Future Perfect) the acquisition (Object).'",
      examples: [
        { sentence: "At this exact hour tomorrow, the astronauts will be conducting a spacewalk outside the station.", contextOrBreakdown: "Action in active mid-progression at a specific future moment." },
        { sentence: "By the end of this fiscal year, we will have trained over five hundred software engineers.", contextOrBreakdown: "Action that will be completely finished before the designated future deadline." },
        { sentence: "By November, Professor Vance will have been teaching at this university for forty years.", contextOrBreakdown: "Measures continuous cumulative duration up to a future milestone." }
      ],
      wordMeanings: [
        { word: "Benchmark", partOfSpeech: "noun", definition: "A standard or point of reference against which things may be compared or assessed.", exampleSentence: "Completing the prototype is our primary quarterly benchmark." },
        { word: "Inaugurate", partOfSpeech: "verb", definition: "Begin or introduce a system, policy, or period; admit someone formally to office.", exampleSentence: "The university will inaugurate the new research complex in May." },
        { word: "Milestone", partOfSpeech: "noun", definition: "A significant stage or event in the development of something.", exampleSentence: "Reaching one million subscribers is a monumental milestone." }
      ],
      spokenUsageTips: [
        "Future Continuous is frequently used to make polite, non-intrusive requests: 'Will you be passing by the post office?' sounds softer than 'Can you go to the post office?'.",
        "Pronounce 'will have' as /wɪl əv/ in connected speech."
      ],
      commonMistakes: [
        { incorrect: "By the time you arrive tomorrow, I will finish the entire assignment.", correct: "By the time you arrive tomorrow, I will have finished the entire assignment.", explanation: "A completed action prior to a future deadline strictly demands the Future Perfect 'will have finished'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly demonstrates the Future Perfect tense?",
          options: [
            "By next Friday, the architects will finish the blueprint.",
            "By next Friday, the architects will have finished the blueprint.",
            "By next Friday, the architects will be finished the blueprint.",
            "By next Friday, the architects will has finished the blueprint."
          ],
          answer: "By next Friday, the architects will have finished the blueprint.",
          explanation: "'By next Friday' denotes a future deadline, requiring the Future Perfect 'will have finished'."
        }
      ],
      dialogue: [
        { speaker: "Board Chair", text: "When can we expect full operational readiness of the factory?" },
        { speaker: "Managing Director", text: "By the conclusion of the third quarter, our technicians will have installed and calibrated all industrial machinery." }
      ],
      quickSummary: [
        "Future Continuous: will be + Verb-ing (action in progress at a future moment).",
        "Future Perfect: will have + V3 (action completed before a future deadline).",
        "Future Perfect Continuous: will have been + Verb-ing (duration measured up to a future point)."
      ]
    }
  ]
};
