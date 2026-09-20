import { CourseChapter } from "./types";

export const CHAPTER_4: CourseChapter = {
  id: 4,
  number: 4,
  title: "Sentence Architecture, Clauses & Complex Structures",
  description: "Architect sophisticated sentences: master clause hierarchy, relative pronouns, cleft focus constructions, grammatical inversion, and pristine syntactic parallelism.",
  totalLessons: 10,
  lessons: [
    {
      id: "ch4-l1",
      chapterId: 4,
      lessonNumber: 1,
      title: "The Anatomy of a Clause: Subject, Predicate, Direct & Indirect Objects",
      tagline: "Dissecting the fundamental building blocks of standard English sentence syntax.",
      objectives: [
        "Identify the complete subject, complete predicate, and simple finite verb.",
        "Differentiate Direct Objects (what/whom) from Indirect Objects (to/for whom).",
        "Master Dative alternation between prepositional phrases and double-object constructions."
      ],
      introduction: "Every English clause is a grammatical ecosystem anchored by two poles: the Subject (the entity performing or experiencing) and the Predicate (the assertion made about the subject).",
      deepExplanation: "In standard English word order (SVO: Subject-Verb-Object), the predicate contains the finite verb along with any objects and modifiers. Transitive verbs frequently take two objects: a Direct Object (DO), which directly receives the action of the verb, and an Indirect Object (IO), which receives the direct object. Dative alternation allows speakers to choose between a double-object construction ('She gave him the book') and a prepositional phrase construction ('She gave the book to him').",
      grammarMechanics: "Pattern 1: Subject + Verb + Indirect Object + Direct Object. Pattern 2: Subject + Verb + Direct Object + to/for + Indirect Object.",
      rules: [
        "Every complete English sentence must possess at least one independent subject and one finite verb.",
        "In a double-object construction (S + V + IO + DO), no preposition is used before the indirect object ('He bought her a gift', NOT 'He bought to her a gift').",
        "If the direct object is a pronoun, the prepositional pattern is generally required (say 'She gave it to him', NOT 'She gave him it').",
        "Imperative sentences have an implied subject 'You' (e.g., '[You] Close the door')."
      ],
      formula: "S + V + IO + DO <==> S + V + DO + [to/for] + IO",
      formulaBreakdown: "'The professor (S) awarded (V) the outstanding student (IO) the academic medal (DO).'",
      examples: [
        { sentence: "The executive committee granted the research team a substantial budgetary increase.", contextOrBreakdown: "Double-object construction: 'the research team' is IO; 'a substantial budgetary increase' is DO." },
        { sentence: "The executive committee granted a substantial budgetary increase to the research team.", contextOrBreakdown: "Dative prepositional alternation using the preposition 'to'." },
        { sentence: "The architect designed a revolutionary sustainable cooling system for the skyscraper.", contextOrBreakdown: "Transitive verb with direct object followed by prepositional beneficiary phrase ('for the skyscraper')." }
      ],
      wordMeanings: [
        { word: "Predicate", partOfSpeech: "noun", definition: "The part of a sentence or clause containing a verb and stating something about the subject.", exampleSentence: "In 'Birds fly south', 'fly south' is the predicate." },
        { word: "Dative", partOfSpeech: "adjective", definition: "Relating to the grammatical case or syntactic pattern denoting the indirect object or recipient.", exampleSentence: "Dative shift transforms 'give to her' into 'give her'." },
        { word: "Alternation", partOfSpeech: "noun", definition: "A variation or change between two possible states or forms.", exampleSentence: "Syntactic alternation provides stylistic flexibility." }
      ],
      spokenUsageTips: [
        "Keep the indirect object short when using the double-object pattern ('Give him the keys', rather than 'Give the keys to him').",
        "Do not insert prepositions when using double-object syntax: say 'Send me an email', never 'Send to me an email'."
      ],
      commonMistakes: [
        { incorrect: "The manager explained him the new company procedure.", correct: "The manager explained the new company procedure to him.", explanation: "The verb 'explain' does NOT take the double-object construction; it requires 'explain something to someone'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following verbs CANNOT be used in a double-object construction without 'to'?",
          options: ["Give", "Send", "Explain", "Lend"],
          answer: "Explain",
          explanation: "Unlike 'give' or 'send', the verb 'explain' strictly requires 'explain something to someone'."
        }
      ],
      dialogue: [
        { speaker: "Client", text: "Could you send to me the updated cost projections?" },
        { speaker: "Consultant", text: "Certainly! I will send you the projections immediately, or email them directly to your assistant." }
      ],
      quickSummary: [
        "Every sentence requires a subject and a predicate.",
        "Direct Object answers 'What?'; Indirect Object answers 'To whom?'.",
        "Verbs like 'give' and 'send' alternate; 'explain' always takes 'to'."
      ]
    },
    {
      id: "ch4-l2",
      chapterId: 4,
      lessonNumber: 2,
      title: "Simple, Compound, Complex, and Compound-Complex Sentences",
      tagline: "Constructing multi-tiered sentence hierarchies with deliberate syntactic variety.",
      objectives: [
        "Classify sentences into the four structural architectures.",
        "Punctuate compound sentences with semicolons and coordinating conjunctions.",
        "Build compound-complex sentences that convey nuanced analytical arguments."
      ],
      introduction: "Varying sentence structure prevents monotonous prose. Fluid English writers and orators blend simple, compound, complex, and compound-complex forms to orchestrate dramatic tempo.",
      deepExplanation: "A Simple Sentence consists of one independent clause with a subject and verb. A Compound Sentence contains two or more independent clauses joined by a semicolon or a comma + coordinating conjunction (FANBOYS). A Complex Sentence contains one independent clause and at least one dependent (subordinate) clause. A Compound-Complex Sentence contains at least two independent clauses and at least one dependent clause.",
      grammarMechanics: "Simple: 1 Ind. Compound: 2+ Ind. Complex: 1 Ind + 1+ Dep. Compound-Complex: 2+ Ind + 1+ Dep.",
      rules: [
        "Never connect two independent clauses with a comma alone; this constitutes a 'comma splice'.",
        "Use a semicolon to connect two closely related independent clauses without a conjunction.",
        "When a dependent clause precedes an independent clause, insert a comma; when it follows, usually omit the comma.",
        "Mix short simple sentences with complex ones to create dynamic rhythmic cadence."
      ],
      formula: "Compound-Complex: [Subordinate Clause], [Ind Clause 1], and [Ind Clause 2]",
      formulaBreakdown: "'Although the deadline was imminent (Dep), Sarah completed the analysis (Ind 1), and Marcus formatted the presentation (Ind 2).'",
      examples: [
        { sentence: "The laboratory verified the experimental results.", contextOrBreakdown: "Simple sentence: Single independent clause." },
        { sentence: "The laboratory verified the results, and the scientific director authorized publication.", contextOrBreakdown: "Compound sentence: Two independent clauses joined by comma + 'and'." },
        { sentence: "Because the laboratory verified the results with unprecedented precision, the scientific director authorized immediate publication, yet the regulatory agency requested further clinical documentation.", contextOrBreakdown: "Compound-complex sentence: One dependent clause and two independent clauses." }
      ],
      wordMeanings: [
        { word: "Cadence", partOfSpeech: "noun", definition: "A rhythmic sequence or flow of sounds in language.", exampleSentence: "Varying sentence length produces a captivating spoken cadence." },
        { word: "Subordinate", partOfSpeech: "adjective", definition: "Lower in rank or position; syntactically dependent on another clause.", exampleSentence: "A subordinate clause cannot stand alone as a complete sentence." },
        { word: "Splice", partOfSpeech: "noun", definition: "A joining or connecting of two items; an erroneous linkage of clauses.", exampleSentence: "Avoid the comma splice in formal writing." }
      ],
      spokenUsageTips: [
        "Use a short simple sentence to deliver a powerful punchline after a lengthy compound-complex explanation.",
        "Pause slightly before conjunctions in compound sentences to signal structural boundaries to listeners."
      ],
      commonMistakes: [
        { incorrect: "The experiment concluded, the team celebrated.", correct: "The experiment concluded, and the team celebrated. (OR: The experiment concluded; the team celebrated.)", explanation: "Two independent clauses joined only by a comma produce a comma splice error." }
      ],
      practiceQuiz: [
        {
          question: "What is the structural classification of this sentence: 'Although it rained heavily, the match proceeded, and the fans remained energetic'?",
          options: ["Simple", "Compound", "Complex", "Compound-Complex"],
          answer: "Compound-Complex",
          explanation: "It contains one dependent clause ('Although it rained heavily') and two independent clauses joined by 'and'."
        }
      ],
      dialogue: [
        { speaker: "Editor", text: "Your paragraph sounds monotonous because every sentence is simple and ten words long." },
        { speaker: "Writer", text: "I understand; I will weave complex subordinating clauses and compound conjunctions to enrich the rhythmic variety." }
      ],
      quickSummary: [
        "Simple = 1 independent clause.",
        "Compound = 2 independent clauses (joined by semicolon or comma + FANBOYS).",
        "Complex = 1 independent + 1+ dependent clauses.",
        "Compound-Complex = 2+ independent + 1+ dependent clauses."
      ]
    },
    {
      id: "ch4-l3",
      chapterId: 4,
      lessonNumber: 3,
      title: "Relative Clauses: Defining (Restrictive) vs Non-Defining (Non-Restrictive)",
      tagline: "Modifying nouns precisely with relative pronouns and strict punctuation etiquette.",
      objectives: [
        "Distinguish Defining (restrictive) from Non-Defining (non-restrictive) relative clauses.",
        "Apply relative pronouns (who, whom, whose, which, that, where, when) with surgical precision.",
        "Punctuate non-defining clauses correctly with commas."
      ],
      introduction: "Relative clauses function as adjectival clauses that modify a preceding noun. Mastering whether to surround a clause with commas can alter the fundamental meaning of a legal or business contract.",
      deepExplanation: "A Defining (Restrictive) relative clause contains essential information required to identify the specific noun. It uses 'that' or 'which' (for things) and 'who' (for people) and NEVER takes commas ('The employees who arrived late were reprimanded' = only those specific late employees). A Non-Defining (Non-Restrictive) relative clause adds optional parenthetical detail about an already identified noun, MUST be bounded by commas, and CANNOT use 'that' ('The CEO, who founded the firm in 2005, delivered the keynote').",
      grammarMechanics: "Defining: Noun + who/that/which + Clause (No commas). Non-Defining: Noun + , who/which/whose + Clause , + Predicate.",
      rules: [
        "Never use 'that' in non-defining relative clauses (say 'My car, which is red, is fast', NOT 'My car, that is red, is fast').",
        "Never place commas around defining relative clauses.",
        "Whose indicates possession for both persons and inanimate entities ('the company whose assets were frozen').",
        "The relative pronoun can be omitted if it functions as the object of a defining relative clause ('The book [that] I read')."
      ],
      formula: "Non-Defining: [Specific Unique Noun], [which/who + Extra Detail], [Main Predicate]",
      formulaBreakdown: "'Paris, which is the capital of France, attracts millions of travelers annually.'",
      examples: [
        { sentence: "The contract that we negotiated last month has been officially countersigned.", contextOrBreakdown: "Defining clause identifying the exact contract; no commas, uses 'that'." },
        { sentence: "Dr. Angela Merkel, who served as Chancellor of Germany, addressed the university.", contextOrBreakdown: "Non-defining clause supplying extra context about a named individual; enclosed in commas." },
        { sentence: "The candidate whose credentials matched our criteria accepted the position.", contextOrBreakdown: "Possessive relative pronoun 'whose' modifying 'candidate'." }
      ],
      wordMeanings: [
        { word: "Restrictive", partOfSpeech: "adjective", definition: "Limiting the reference of the noun modified; essential to the sentence meaning.", exampleSentence: "Restrictive clauses do not take commas." },
        { word: "Parenthetical", partOfSpeech: "adjective", definition: "Explaining or qualifying something; incidental or non-essential.", exampleSentence: "Non-defining clauses provide parenthetical commentary." },
        { word: "Countersign", partOfSpeech: "verb", definition: "Add a signature to a document already signed by another person.", exampleSentence: "Both attorneys must countersign the agreement." }
      ],
      spokenUsageTips: [
        "When speaking a non-defining clause, drop your vocal pitch slightly and pause before and after the clause as if reading parentheses.",
        "In everyday speech, people frequently omit 'that' when it is the object ('The movie I watched')."
      ],
      commonMistakes: [
        { incorrect: "My father, that lives in Toronto, is an engineer.", correct: "My father, who lives in Toronto, is an engineer.", explanation: "'That' cannot be used in non-defining clauses with commas, and people demand 'who'." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly indicates that the speaker has ONLY ONE brother?",
          options: [
            "My brother who lives in London is an architect.",
            "My brother, who lives in London, is an architect.",
            "My brother that lives in London is an architect.",
            "My brother whom lives in London is an architect."
          ],
          answer: "My brother, who lives in London, is an architect.",
          explanation: "The commas indicate a non-defining clause, meaning 'who lives in London' is merely extra detail about an only brother."
        }
      ],
      dialogue: [
        { speaker: "Attorney", text: "Look closely at paragraph four: 'The assets which are stored in offshore accounts shall be audited'." },
        { speaker: "Judge", text: "Because it lacks commas, it restricts the audit strictly to offshore assets, leaving domestic assets exempt." }
      ],
      quickSummary: [
        "Defining clauses identify the noun and take NO commas (use that/who/which).",
        "Non-defining clauses add optional extra detail and MUST take commas (use who/which, NEVER that).",
        "Relative pronouns acting as objects can be omitted in defining clauses."
      ]
    },
    {
      id: "ch4-l4",
      chapterId: 4,
      lessonNumber: 4,
      title: "Noun Clauses and Complement Structures",
      tagline: "Embedding entire clauses as syntactic subjects, direct objects, and predicative complements.",
      objectives: [
        "Identify and construct noun clauses beginning with 'that', 'whether/if', and Wh- words.",
        "Deploy noun clauses as subjects, direct objects, and predicate nominatives.",
        "Maintain statement word order (Subject + Verb) inside embedded interrogative noun clauses."
      ],
      introduction: "A noun clause is an entire dependent clause that performs the exact grammatical function of a single noun: it can act as a sentence subject, a direct object, or a subject complement.",
      deepExplanation: "Noun clauses are introduced by subordinators such as 'that', 'whether', 'if', or interrogative words (what, where, why, how, who). The most common trap occurs with embedded questions: when a question is placed inside a noun clause, it loses its inverted auxiliary question order and must revert to standard declarative statement order (Subject + Verb).",
      grammarMechanics: "Subject Noun Clause: [What he stated] was shocking. Object Noun Clause: I know [what he stated]. Embedded: Can you tell me [where the station is]?",
      rules: [
        "Never invert subject and auxiliary inside an embedded question noun clause (say 'I wonder where she is', NOT 'I wonder where is she').",
        "Use 'whether' rather than 'if' in formal writing, especially after prepositions or before 'or not'.",
        "Noun clauses acting as the grammatical subject take singular verb agreement ('What they proposed is innovative').",
        "The conjunction 'that' can frequently be omitted when introducing an object noun clause in conversational speech ('I believe [that] he is right')."
      ],
      formula: "Embedded Inquiry: Polite Lead-in + Wh- word / whether + [Subject] + [Verb]",
      formulaBreakdown: "'Could you inform me (Lead-in) when the flight departs (Wh- + Subj + Verb)?'",
      examples: [
        { sentence: "What surprised the entire committee was her profound technical mastery.", contextOrBreakdown: "Noun clause 'What surprised the entire committee' functions as the sentence subject." },
        { sentence: "We must ascertain whether the supplier has met the international safety benchmarks.", contextOrBreakdown: "Noun clause introduced by 'whether' serves as the direct object of 'ascertain'." },
        { sentence: "Do you know what time the plenary session convenes?", contextOrBreakdown: "Embedded question maintaining declarative order 'the plenary session convenes'." }
      ],
      wordMeanings: [
        { word: "Plenary", partOfSpeech: "adjective", definition: "To be attended by all participants at a conference or assembly.", exampleSentence: "The plenary session begins at nine o'clock." },
        { word: "Ascertain", partOfSpeech: "verb", definition: "Find (something) out for certain; make sure of.", exampleSentence: "We must ascertain the root cause of the system failure." },
        { word: "Nominative", partOfSpeech: "adjective", definition: "Relating to or denoting a case or function of nouns functioning as subject or complement.", exampleSentence: "A predicate nominative renames the subject after a linking verb." }
      ],
      spokenUsageTips: [
        "When making polite requests, always use embedded noun clauses: 'Do you know where the restroom is?' sounds significantly more polite than 'Where is the restroom?'.",
        "Ensure you do not accidentally insert 'did' or 'does' into embedded clauses."
      ],
      commonMistakes: [
        { incorrect: "Can you tell me where does the director live?", correct: "Can you tell me where the director lives?", explanation: "Embedded noun clauses require declarative word order: Subject ('the director') + Verb ('lives')." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following embedded questions is grammatically correct?",
          options: [
            "Please tell me what are you doing.",
            "Please tell me what you are doing.",
            "Please tell me what do you do.",
            "Please tell me what are you to do."
          ],
          answer: "Please tell me what you are doing.",
          explanation: "Embedded noun clauses retain standard declarative word order: Subject ('you') + Verb ('are doing')."
        }
      ],
      dialogue: [
        { speaker: "Passenger", text: "Excuse me, could you explain how much this ticket costs?" },
        { speaker: "Ticket Agent", text: "Certainly! The fare depends entirely on what class of travel you prefer." }
      ],
      quickSummary: [
        "Noun clauses function as subjects, objects, or complements.",
        "Embedded questions MUST use statement word order (Subject + Verb).",
        "Use 'whether' for formal alternatives and after prepositions."
      ]
    },
    {
      id: "ch4-l5",
      chapterId: 4,
      lessonNumber: 5,
      title: "Adverbial Clauses of Cause, Condition, Concession, and Result",
      tagline: "Connecting logic, causality, conditional prerequisites, and rhetorical contrast.",
      objectives: [
        "Construct adverbial clauses of Cause (since, because, as), Condition (if, provided that, unless), Concession (although, whereas), and Result (so... that).",
        "Punctuate introductory adverbial clauses with accurate comma boundaries.",
        "Master the negative conditional operator 'unless'."
      ],
      introduction: "Adverbial clauses explain the circumstances surrounding an action: Why did it happen? Under what conditions? Despite what obstacles? With what consequence?",
      deepExplanation: "Adverbial clauses are dependent clauses introduced by subordinating conjunctions that modify verbs, adjectives, or entire main clauses. Clauses of cause (because, since, as) demonstrate reason. Clauses of concession (although, even though, while, whereas) highlight surprising contrasts. Clauses of condition (if, unless, provided that, as long as) establish prerequisites. Clauses of result utilize the 'so + adjective + that' structure to display magnitude and impact.",
      grammarMechanics: "Introductory: Subordinator + Dependent Clause + COMMA + Main Clause. Terminal: Main Clause + Subordinator + Dependent Clause (NO comma).",
      rules: [
        "'Unless' means 'if not'; never put a negative verb immediately inside an 'unless' clause (say 'Unless you hurry', NOT 'Unless you don't hurry').",
        "Place a comma after an introductory adverbial clause that begins a sentence.",
        "Generally omit commas when the adverbial clause follows the independent main clause.",
        "Differentiate 'because' (strong causal link) from 'since/as' (assumed known background information)."
      ],
      formula: "Result: Subject + Verb + so [Adjective] + that + [Result Clause]",
      formulaBreakdown: "'The noise was so deafening (Cause) that no one could hear the emergency siren (Result).'",
      examples: [
        { sentence: "Because the clinical data yielded undeniable proof of efficacy, the health agency accelerated regulatory approval.", contextOrBreakdown: "Adverbial clause of cause initiating sentence with required comma." },
        { sentence: "Unless all stakeholders reach an amicable compromise, the transaction will collapse.", contextOrBreakdown: "Adverbial clause of condition using 'unless' (meaning 'if stakeholders do not reach...')." },
        { sentence: "The quarterly presentation was so compelling that every prospective venture investor pledged capital.", contextOrBreakdown: "Adverbial clause of result using 'so + compelling + that'." }
      ],
      wordMeanings: [
        { word: "Concession", partOfSpeech: "noun", definition: "A grammatical clause that concedes a point or admits a contrasting fact.", exampleSentence: "'Even though it was raining' is an adverbial clause of concession." },
        { word: "Efficacy", partOfSpeech: "noun", definition: "The ability to produce a desired or intended result.", exampleSentence: "Clinical trials verified the vaccine's high efficacy." },
        { word: "Amicable", partOfSpeech: "adjective", definition: "Characterized by friendly goodwill and peaceable intent.", exampleSentence: "Both firms concluded an amicable settlement." }
      ],
      spokenUsageTips: [
        "Use 'provided that' or 'as long as' in business agreements to sound sophisticated and precise.",
        "Emphasize the word 'so' in speech when setting up a 'so... that' result sentence to heighten listener anticipation."
      ],
      commonMistakes: [
        { incorrect: "Unless you do not submit the application on time, you will be disqualified.", correct: "Unless you submit the application on time, you will be disqualified.", explanation: "'Unless' is inherently negative; adding 'do not' produces an erroneous double negative." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence correctly deploys the conditional operator 'unless'?",
          options: [
            "Unless you study hard, you will pass the examination.",
            "Unless you study hard, you will not pass the examination.",
            "Unless you do not study hard, you will fail the examination.",
            "Unless you will study hard, you fail."
          ],
          answer: "Unless you study hard, you will not pass the examination.",
          explanation: "'Unless you study hard' means 'If you do not study hard', leading logically to 'you will not pass'."
        }
      ],
      dialogue: [
        { speaker: "Manager", text: "Will we launch the software tomorrow?" },
        { speaker: "Lead Developer", text: "Provided that the penetration tests pass tonight without errors, we will proceed as scheduled." }
      ],
      quickSummary: [
        "Adverbial clauses explain reason, condition, concession, and result.",
        "Introductory adverbial clauses must be followed by a comma.",
        "'Unless' means 'if not' and cannot contain internal negation."
      ]
    },
    {
      id: "ch4-l6",
      chapterId: 4,
      lessonNumber: 6,
      title: "Inversion for Emphasis and Dramatic Rhetoric",
      tagline: "Inverting subject-verb order to craft authoritative, dramatic, and literary speech.",
      objectives: [
        "Deploy negative and restrictive adverbs (rarely, seldom, never, hardly, scarcely, little) with inverted syntax.",
        "Formulate inversion with 'Not only... but also' and 'No sooner... than'.",
        "Apply conditional inversion to eliminate 'if' in formal speech (Had I known, Were you to, Should you need)."
      ],
      introduction: "Grammatical Inversion alters standard SVO order by placing the auxiliary verb before the subject. It transforms ordinary sentences into commanding, dramatic, and eloquent oratory.",
      deepExplanation: "Whenever a sentence begins with a negative, restrictive, or limiting adverbial expression (e.g., 'Never', 'Rarely', 'Seldom', 'Little did they know', 'Under no circumstances'), English syntax mandates subject-auxiliary inversion. Inverted syntax functions exactly like question word order, yet it remains a declarative assertion of heightened emphasis. In formal English, inversion also replaces conditional 'if' clauses (e.g., 'Had we known' instead of 'If we had known').",
      grammarMechanics: "[Negative / Restrictive Adverb] + [Auxiliary Verb] + [Subject] + [Main Verb]. Conditional: Had + Subject + V3 (replaces 'If + Subject + had + V3').",
      rules: [
        "Only invert when the negative or restrictive adverb begins the clause.",
        "Always use an auxiliary verb (do, does, did, have, had, will, modal); if the base sentence lacks one, insert do/does/did.",
        "'No sooner' is always paired with 'than' (never 'when').",
        "'Hardly' and 'Scarcely' are paired with 'when' (never 'than')."
      ],
      formula: "Negative Inversion: [Negative Adverb] + [Auxiliary] + [Subject] + [Main Verb]",
      formulaBreakdown: "'Never (Neg) have I (Aux + Subj) witnessed (V3) such magnificent architecture (Object).'",
      examples: [
        { sentence: "Rarely has an international summit achieved such comprehensive consensus in its opening session.", contextOrBreakdown: "Inverted syntax: Restrictive 'rarely' + auxiliary 'has' + subject 'an international summit' + main verb 'achieved'." },
        { sentence: "Under no circumstances should confidential patient records be disclosed without authorization.", contextOrBreakdown: "Restrictive prepositional phrase triggers modal inversion: 'should' + 'records' + 'be disclosed'." },
        { sentence: "Had we anticipated these inflationary pressures, we would have hedged our foreign currency reserves.", contextOrBreakdown: "Conditional inversion replacing 'If we had anticipated'." }
      ],
      wordMeanings: [
        { word: "Inversion", partOfSpeech: "noun", definition: "The reversal of the normal order of the subject and verb in a sentence.", exampleSentence: "Literary authors utilize inversion for dramatic gravity." },
        { word: "Rhetoric", partOfSpeech: "noun", definition: "The art of effective or persuasive speaking or writing.", exampleSentence: "Political rhetoric frequently incorporates syntactic inversion." },
        { word: "Hedge", partOfSpeech: "verb", definition: "Protect oneself against loss on (a bet or investment) by making balancing transactions.", exampleSentence: "The multinational enterprise moved to hedge its currency risks." }
      ],
      spokenUsageTips: [
        "In professional speeches, opening with 'Seldom have we faced such an opportunity...' instantly elevates executive authority.",
        "In emails, use 'Should you require further clarification, please contact me' instead of 'If you require'."
      ],
      commonMistakes: [
        { incorrect: "No sooner had the keynote begun when the power failed.", correct: "No sooner had the keynote begun than the power failed.", explanation: "'No sooner' strictly pairs with 'than'; 'hardly/scarcely' pairs with 'when'." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following sentences utilizes grammatically correct inversion?",
          options: [
            "Seldom we have seen such dedicated effort.",
            "Seldom have we seen such dedicated effort.",
            "Seldom have we saw such dedicated effort.",
            "Seldom did we seen such dedicated effort."
          ],
          answer: "Seldom have we seen such dedicated effort.",
          explanation: "Negative adverb 'Seldom' triggers auxiliary inversion: auxiliary 'have' + subject 'we' + past participle 'seen'."
        }
      ],
      dialogue: [
        { speaker: "Diplomat", text: "Little did they realize that the treaty had already been drafted in secret." },
        { speaker: "Ambassador", text: "Indeed, nor did they anticipate the swift reaction of the allied nations." }
      ],
      quickSummary: [
        "Beginning with negative/restrictive adverbs forces Subject-Auxiliary inversion.",
        "No sooner... than; Hardly... when.",
        "Conditional inversion ('Had I known', 'Should you need') elevates formal register."
      ]
    },
    {
      id: "ch4-l7",
      chapterId: 4,
      lessonNumber: 7,
      title: "Cleft Sentences (It-Clefts and Wh-Clefts) for Focus",
      tagline: "Spotlighting key information by cleaving sentences into dramatic focus structures.",
      objectives: [
        "Construct It-Cleft sentences: 'It is/was [focused element] that/who...'.",
        "Construct Wh-Clefts (Pseudo-clefts): 'What [clause] is/was [focused element]'.",
        "Use cleft sentences to clarify misunderstandings and redirect conversational spotlight."
      ],
      introduction: "To 'cleave' means to split. A Cleft Sentence takes a single standard clause and splits it across two clauses to shine an acoustic and grammatical spotlight upon the most critical piece of information.",
      deepExplanation: "In an It-Cleft sentence, the formula is: 'It + be (is/was) + Focused Element + that/who + remaining clause'. This allows the speaker to single out a specific person, time, place, or cause. In a Wh-Cleft (or pseudo-cleft), the formula begins with a nominal relative clause: 'What we urgently require is [focused element]'. Clefts are heavily deployed in debate, negotiation, and presentations to dispel confusion and emphasize crucial points.",
      grammarMechanics: "It-Cleft: It + is/was + [Focused Unit] + that/who + [Rest of Clause]. Wh-Cleft: What + [Clause] + is/was + [Focused Unit].",
      rules: [
        "The introductory pronoun in an It-cleft is always dummy 'It' (never 'This' or 'That').",
        "The verb 'to be' agrees in tense with the original statement ('It was in 1969 that astronauts landed on the moon').",
        "Use 'that' or 'who' (for people) to introduce the relative segment of an It-cleft.",
        "Use Wh-clefts to summarize a complex preceding discussion: 'What I am trying to say is...'."
      ],
      formula: "It-Cleft: It + [is / was] + [Focus] + that + [Remainder]",
      formulaBreakdown: "Base: 'The cyberattack caused the outage.' -> Cleft: 'It was the cyberattack (Focus) that caused the outage.'",
      examples: [
        { sentence: "It was Dr. Foster who initially detected the anomalous seismic vibration.", contextOrBreakdown: "It-cleft putting the focus squarely on Dr. Foster rather than any other researcher." },
        { sentence: "It was during the 2008 fiscal crash that our enterprise restructured its entire supply chain.", contextOrBreakdown: "It-cleft highlighting the specific historical era." },
        { sentence: "What we desperately need at this critical juncture is disciplined execution.", contextOrBreakdown: "Wh-cleft (pseudo-cleft) focusing attention on 'disciplined execution'." }
      ],
      wordMeanings: [
        { word: "Cleave", partOfSpeech: "verb", definition: "Split or sever (something), especially along a natural line or grain.", exampleSentence: "Cleft sentences cleave a standard proposition into two focus components." },
        { word: "Juncture", partOfSpeech: "noun", definition: "A particular point in events or time, especially a critical one.", exampleSentence: "At this critical juncture, decisive leadership is required." },
        { word: "Anomalous", partOfSpeech: "adjective", definition: "Deviating from what is standard, normal, or expected.", exampleSentence: "The sensors recorded an anomalous energy spike." }
      ],
      spokenUsageTips: [
        "In speech, place strong vocal tonic stress on the focused element directly after 'It is/was'.",
        "Use 'What really matters is...' to bring a wandering discussion back to the primary objective."
      ],
      commonMistakes: [
        { incorrect: "This was my colleague who solved the database dilemma.", correct: "It was my colleague who solved the database dilemma.", explanation: "It-cleft sentences strictly demand the dummy pronoun 'It', not demonstrative 'This'." }
      ],
      practiceQuiz: [
        {
          question: "How would you rewrite 'Alexander Fleming discovered penicillin' as an It-cleft focusing on the scientist?",
          options: [
            "Alexander Fleming was the one that discovered penicillin.",
            "It was Alexander Fleming who discovered penicillin.",
            "What Alexander Fleming discovered was penicillin.",
            "That Alexander Fleming discovered penicillin was historic."
          ],
          answer: "It was Alexander Fleming who discovered penicillin.",
          explanation: "'It was + Focus + who/that' is the standard It-cleft architecture."
        }
      ],
      dialogue: [
        { speaker: "Director", text: "Did the marketing campaign consume our capital reserve?" },
        { speaker: "CFO", text: "No, it was the emergency server migration that depleted our reserves last month." }
      ],
      quickSummary: [
        "Cleft sentences split a clause to spotlight a specific piece of information.",
        "It-Cleft: It + is/was + [Focus] + that/who...",
        "Wh-Cleft: What + [Clause] + is/was + [Focus]..."
      ]
    },
    {
      id: "ch4-l8",
      chapterId: 4,
      lessonNumber: 8,
      title: "Dangling and Misplaced Modifiers",
      tagline: "Aligning descriptive phrases strictly with the nouns they logically modify.",
      objectives: [
        "Identify dangling participles, misplaced adverbs, and squinting modifiers.",
        "Anchor participial phrases directly to the logical sentence subject.",
        "Eliminate comical or confusing modifier misplacements."
      ],
      introduction: "Modifiers are descriptive words, phrases, or clauses that add detail to nouns. When a modifier sits in the wrong position or points to an absent noun, it creates illogical or unintentionally hilarious errors.",
      deepExplanation: "A 'Dangling Modifier' occurs when an introductory phrase (often a participial phrase like 'Walking down the avenue') is immediately followed by a subject that cannot logically perform the action (e.g., 'Walking down the avenue, the skyscraper impressed me' -> The skyscraper was not walking down the avenue!). The grammatical subject of the main clause MUST be the entity that actually performs the action of the introductory modifier.",
      grammarMechanics: "[Introductory Participial Modifier], [Logical Agent Subject] + [Finite Verb] + [Object].",
      rules: [
        "The noun immediately following an introductory modifying phrase must be the actual doer of that modifier.",
        "Place limiting adverbs (only, almost, nearly, just) immediately before the exact word they modify.",
        "Avoid 'squinting modifiers'—modifiers positioned ambiguously between two words where either could be modified.",
        "Revise dangling constructions by making the agent explicit or converting the phrase into a full clause with 'when' or 'while'."
      ],
      formula: "[Participial Phrase (-ing/-ed)], [Agent Subject that does the participle] + [Verb]",
      formulaBreakdown: "'Having analyzed the market data (Modifier), the analyst (Agent Subject) formulated a forecast (Verb + DO).'",
      examples: [
        { sentence: "Having reviewed the quarterly balance sheet, the CFO identified three severe fiscal anomalies.", contextOrBreakdown: "Correct: The CFO is the agent who logically reviewed the balance sheet." },
        { sentence: "While examining the patient, the physician noticed an irregular heartbeat.", contextOrBreakdown: "Correct: The physician is the one conducting the physical examination." },
        { sentence: "She nearly finished all the assigned chapters before midnight.", contextOrBreakdown: "Precision modifier: 'nearly finished' (did not quite complete), vs 'finished nearly all' (completed most)." }
      ],
      wordMeanings: [
        { word: "Modifier", partOfSpeech: "noun", definition: "A word, phrase, or clause that clarifies, qualifies, or limits the meaning of another word or phrase.", exampleSentence: "Adjectives and participial phrases act as modifiers." },
        { word: "Dangle", partOfSpeech: "verb", definition: "Hang or swing loosely; in grammar, to lack a logical syntactic referent.", exampleSentence: "A participial phrase dangles when its intended subject is missing." },
        { word: "Ambiguous", partOfSpeech: "adjective", definition: "Open to more than one interpretation; having a double meaning.", exampleSentence: "Misplaced adverbs render legal contracts dangerously ambiguous." }
      ],
      spokenUsageTips: [
        "Be careful when using 'Having said that...': ensure the following clause logically reflects the speaker's viewpoint.",
        "Check where you place 'only': 'I only eat apples' (I do nothing else to apples) vs 'I eat only apples' (I eat nothing else but apples)."
      ],
      commonMistakes: [
        { incorrect: "Walking into the laboratory, the smell of sulfur hit the technician.", correct: "Walking into the laboratory, the technician was struck by the smell of sulfur.", explanation: "The smell was not walking into the lab; the technician was." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following sentences is free from a dangling modifier?",
          options: [
            "Covered in thick dust, we discovered an ancient ledger in the attic.",
            "Covered in thick dust, the ancient ledger was discovered by us in the attic.",
            "Walking across the lawn, the sprinklers drenched our shoes.",
            "After boiling the water, the pasta was added by the chef."
          ],
          answer: "Covered in thick dust, the ancient ledger was discovered by us in the attic.",
          explanation: "The ledger was covered in thick dust, correctly matching the subject immediately following the modifier."
        }
      ],
      dialogue: [
        { speaker: "Professor", text: "Read your first sentence aloud: 'Hoping to secure the scholarship, the application was submitted early'." },
        { speaker: "Student", text: "Oh! The application cannot hope for anything; I should write: 'Hoping to secure the scholarship, I submitted the application early'." }
      ],
      quickSummary: [
        "Introductory participial modifiers must describe the immediate grammatical subject.",
        "Dangling modifiers occur when the agent of the action is missing or mismatched.",
        "Position adverbs like 'only' directly adjacent to the exact word they modify."
      ]
    },
    {
      id: "ch4-l9",
      chapterId: 4,
      lessonNumber: 9,
      title: "Run-On Sentences, Comma Splices, and Sentence Fragments",
      tagline: "Diagnosing and eradicating the three fatal flaws of sentence boundary demarcation.",
      objectives: [
        "Identify and rectify Fused (Run-On) Sentences.",
        "Eliminate Comma Splices using periods, semicolons, or coordinating conjunctions.",
        "Convert Sentence Fragments into complete grammatical predications."
      ],
      introduction: "Pristine punctuation establishes sentence boundaries. Blending clauses without punctuation (run-ons), joining them with weak commas (splices), or leaving dependent clauses isolated (fragments) erodes professional credibility.",
      deepExplanation: "A Fused Sentence (Run-On) occurs when two independent clauses are joined with zero punctuation. A Comma Splice occurs when two independent clauses are tethered merely by a comma without a coordinating conjunction. A Sentence Fragment is an incomplete structure masquerading as a sentence—usually a dependent clause lacking an independent anchor or a phrase lacking a finite verb.",
      grammarMechanics: "Remedy 1: Period + Capital letter. Remedy 2: Semicolon (;). Remedy 3: Comma + FANBOYS conjunction. Remedy 4: Subordination.",
      rules: [
        "Every complete written sentence must contain at least one independent clause (Subject + Finite Verb) expressing a complete thought.",
        "Never connect two complete independent clauses with a comma alone.",
        "Do not leave dependent clauses starting with 'Because', 'Although', or 'Which' standing alone as isolated fragments.",
        "Use a semicolon only between independent clauses that share close semantic proximity."
      ],
      formula: "Correct: [Independent Clause 1]; [Independent Clause 2] OR [Ind 1], and [Ind 2]",
      formulaBreakdown: "'The project exceeded expectations; the board approved full commercialization.'",
      examples: [
        { sentence: "The audit revealed multiple compliance discrepancies; therefore, management ordered an immediate review.", contextOrBreakdown: "Independent clauses correctly linked by semicolon and conjunctive adverb 'therefore'." },
        { sentence: "Although the negotiation was arduous, both parties finalized the bilateral trade pact.", contextOrBreakdown: "Dependent clause attached to independent clause, avoiding a sentence fragment." },
        { sentence: "The team analyzed the seismic metrics, and the geologists formulated their safety recommendations.", contextOrBreakdown: "Comma + coordinating conjunction 'and' correctly linking two independent clauses." }
      ],
      wordMeanings: [
        { word: "Splice", partOfSpeech: "verb", definition: "Join or connect (two things) at their ends; in grammar, improperly join independent clauses with a comma.", exampleSentence: "Do not splice two complete thoughts with an isolated comma." },
        { word: "Fragment", partOfSpeech: "noun", definition: "A small part broken off or separated from something; an incomplete sentence.", exampleSentence: "'Because he arrived late' is a dependent clause fragment." },
        { word: "Demarcation", partOfSpeech: "noun", definition: "The action of fixing the boundary or limits of something.", exampleSentence: "Periods and semicolons provide clear syntactic demarcation." }
      ],
      spokenUsageTips: [
        "In speech, a period corresponds to a full downward vocal cadence and a definite pause.",
        "A comma corresponds to a slight upward or level pitch pause within a continuing sentence."
      ],
      commonMistakes: [
        { incorrect: "The new software is extremely fast, it reduced our latency by half.", correct: "The new software is extremely fast; it reduced our latency by half. (OR: ...fast, and it reduced...)", explanation: "Two independent clauses cannot be spliced with a comma alone." }
      ],
      practiceQuiz: [
        {
          question: "Which of the following constitutes an ungrammatical sentence fragment?",
          options: [
            "Listen to me carefully.",
            "Because the research grant was delayed by federal regulators.",
            "The grant was delayed.",
            "Water boils at high temperatures."
          ],
          answer: "Because the research grant was delayed by federal regulators.",
          explanation: "It is a subordinate clause introduced by 'Because' lacking a governing independent main clause."
        }
      ],
      dialogue: [
        { speaker: "Proofreader", text: "You have three comma splices in this executive summary." },
        { speaker: "Author", text: "I will replace those weak commas with semicolons and coordinating conjunctions right away." }
      ],
      quickSummary: [
        "Run-on: Two clauses crammed together with no punctuation.",
        "Comma splice: Two clauses joined solely with a comma.",
        "Fragment: Incomplete dependent clause masquerading as a sentence."
      ]
    },
    {
      id: "ch4-l10",
      chapterId: 4,
      lessonNumber: 10,
      title: "Parallel Structure and Syntactic Balance",
      tagline: "Harmonizing lists, pairs, and series with symmetrical grammatical forms.",
      objectives: [
        "Maintain parallel grammatical structure across items in a series.",
        "Align correlative conjunctions (neither/nor, either/or, both/and, not only/but also).",
        "Craft balanced, elegant comparisons using 'than' and 'as'."
      ],
      introduction: "Parallelism is the balance within one or more sentences of similar phrases or clauses that have the same grammatical structure. It enhances readability, rhetorical impact, and cognitive processing.",
      deepExplanation: "Parallel structure dictates that when you coordinate elements in a series, comparison, or correlative pair, every component must share the identical grammatical form. If the first item is an infinitive, all subsequent items must be infinitives. If the first item is a gerund phrase, all must be gerund phrases. Faulty parallelism jars the reader and weakens the force of speeches and written arguments.",
      grammarMechanics: "Pattern: Subject + Verb + [Form X], [Form X], and [Form X]. Correlative: Not only + [Form X] + but also + [Form X].",
      rules: [
        "Items in a list or series must share identical grammatical parts of speech (e.g., all nouns, all adjectives, or all gerund phrases).",
        "Correlative conjunctions must introduce grammatically identical structures.",
        "Comparisons with 'than' or 'as' must contrast equal entities (say 'The climate of Spain is warmer than that of Britain', NOT 'than Britain').",
        "Maintain parallel verb tenses when describing actions occurring in the same temporal frame."
      ],
      formula: "Balance: [Verb-ing Phrase A] + and + [Verb-ing Phrase B]",
      formulaBreakdown: "'She excels at conducting field research (Gerund Phrase) and drafting technical papers (Gerund Phrase).'",
      examples: [
        { sentence: "The candidate is dedicated, articulate, and highly resourceful.", contextOrBreakdown: "Pristine parallel series of three descriptive adjectives." },
        { sentence: "The director intends to overhaul the curriculum, modernize the laboratories, and recruit top faculty.", contextOrBreakdown: "Parallel series of base infinitives governed by 'to': overhaul, modernize, and recruit." },
        { sentence: "The operational efficiency of the Tokyo branch is significantly higher than that of the London office.", contextOrBreakdown: "Proper comparative balance: 'that of' preserves parallelism between efficiencies." }
      ],
      wordMeanings: [
        { word: "Symmetry", partOfSpeech: "noun", definition: "The quality of being made up of exactly similar parts facing each other or around an axis.", exampleSentence: "Parallel sentences possess pleasing grammatical symmetry." },
        { word: "Harmonize", partOfSpeech: "verb", definition: "Make consistent or compatible; bring into agreement.", exampleSentence: "Parallelism harmonizes elements within a series." },
        { word: "Overhaul", partOfSpeech: "verb", definition: "Take apart (a piece of machinery or equipment) in order to examine it and repair it if necessary; thoroughly renovate.", exampleSentence: "The committee voted to overhaul the outdated regulatory statutes." }
      ],
      spokenUsageTips: [
        "Use parallel triplets in presentations: 'We came, we saw, we conquered' is memorable because of its strict parallelism.",
        "Ensure your tone and rhythm remain consistent when delivering a parallel list."
      ],
      commonMistakes: [
        { incorrect: "She enjoys swimming, to run, and bicycle rides.", correct: "She enjoys swimming, running, and cycling.", explanation: "All items in the series must take the identical gerund form (-ing)." }
      ],
      practiceQuiz: [
        {
          question: "Which sentence exhibits flawless grammatical parallelism?",
          options: [
            "The program aims to educate youth, inspiring leaders, and to build community.",
            "The program aims to educate youth, inspire leaders, and build community.",
            "The program aims educating youth, to inspire leaders, and community building.",
            "The program aims to educate youth, inspiration, and building community."
          ],
          answer: "The program aims to educate youth, inspire leaders, and build community.",
          explanation: "All three verb phrases use the parallel base infinitive form: 'educate', 'inspire', and 'build'."
        }
      ],
      dialogue: [
        { speaker: "Editor", text: "Look at your slogan: 'Fast, reliable, and it saves money'." },
        { speaker: "Marketer", text: "I see the flaw: 'saves money' is a clause, while the first two are adjectives. It should be: 'Fast, reliable, and economical'!" }
      ],
      quickSummary: [
        "Parallelism requires identical grammatical forms for coordinated items.",
        "Coordinate gerunds with gerunds, infinitives with infinitives, and adjectives with adjectives.",
        "Balance comparisons by using 'that of' or 'those of'."
      ]
    }
  ]
};
