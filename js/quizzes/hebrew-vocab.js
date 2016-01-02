Genders = {
    masculine: 'm',
    feminine: 'f',
    both: 'm. / f'
};

Numbers = {
    singular: 's',
    plural: 'p'
};

var hebrewVocabProblems = [
    {
        unit: 1,
        hebrewWord: "אֵיחוּר",
        transliteration: "e<strong>xur</strong>",
        englishWords: ["delay", "being late"],
        gender: Genders.masculine,
    },
    {
        unit: 1,
        hebrewWord: "מַזָל",
        transliteration: "ma<strong>zal</strong>",
        englishWords: ["luck"],
        gender: Genders.masculine,
    },
    {
        unit: 1,
        hebrewWord: "מְנַהֵל",
        transliteration: "mena<strong>hel</strong>",
        englishWords: ["director", "manager", "boss"],
        gender: Genders.masculine,
    },
    {
        unit: 1,
        hebrewWord: "מְנַהֶלֶת",
        transliteration: "mena<strong>he</strong>let",
        englishWords: ["director", "manager", "boss"],
        gender: Genders.feminine,
    },
    {
        unit: 1,
        hebrewWord: "סְבִיבָה",
        transliteration: "svi<strong>va</strong>",
        englishWords: ["surroundings", "vicinity"],
        gender: Genders.feminine,
    },
    {
        unit: 1,
        hebrewWord: "עוֹלָם",
        transliteration: "o<strong>lam</strong>",
        englishWords: ["world"],
        gender: Genders.masculine,
    },
    {
        unit: 1,
        hebrewWord: "פִּיקְנִיק",
        transliteration: "<strong>pik</strong>nik",
        englishWords: ["picnic"],
        gender: Genders.masculine,
    },
    {
        unit: 1,
        hebrewWord: "רַבִּי",
        transliteration: "ra<strong>bi</strong>",
        englishWords: ["Rabbi"],
        gender: Genders.masculine,
        number: Numbers.singular,
    },
    {
        unit: 1,
        hebrewWord: "רַבָּנִים",
        transliteration: "raba<strong>nim</strong>",
        englishWords: ["Rabbis"],
        gender: Genders.masculine,
        number: Numbers.plural,
    },
    {
        unit: 1,
        hebrewWord: "תוֹרָה",
        transliteration: "to<strong>ra</strong>",
        englishWords: ["Torah", "the Pentateuch"],
        gender: Genders.feminine,
    },
    {
        unit: 1,
        hebrewWord: "לְהַגִיד",
        transliteration: "leha<strong>gid</strong>",
        englishWords: ["to tell", "to say"],
    },
    {
        unit: 1,
        hebrewWord: "לִנְזוֹף בְּ",
        transliteration: "lin<strong>zof</strong> be",
        englishWords: ["to scold", "to rebuke"],
    },
    {
        unit: 1,
        hebrewWord: "לְסַלֵק",
        transliteration: "lesa<strong>lek</strong>",
        englishWords: ["to send away", "to drive away", "to remove"],
    },
    {
        unit: 1,
        hebrewWord: "לִתְפּוֹס",
        transliteration: "lit<strong>pos</strong>",
        englishWords: ["to grasp", "to catch", "to capture"],
    },
    {
        unit: 1,
        hebrewWord: "נָשׂוּי",
        transliteration: "na<strong>suy</strong>",
        englishWords: ["married"],
        gender: Genders.masculine,
        number: Numbers.singular,
    },
    {
        unit: 1,
        hebrewWord: "נְשׂוּאָה",
        transliteration: "nesu<strong>’a</strong>",
        englishWords: ["married"],
        gender: Genders.feminine,
        number: Numbers.singular,
    },
    {
        unit: 1,
        hebrewWord: "נְשׂוּאִים",
        transliteration: "nesu<strong>’im</strong>",
        englishWords: ["married"],
        number: Numbers.plural,
    },
    {
        unit: 1,
        hebrewWord: "מִיָד",
        transliteration: "mi<strong>yad</strong>",
        englishWords: ["immediately"],
    },
    {
        unit: 1,
        hebrewWord: "זוֹ",
        transliteration: "zo",
        englishWords: ["this"],
        gender: Genders.feminine,
    },
    {
        unit: 1,
        hebrewWord: "קוֹדֶם כּוֹל",
        transliteration: "<strong>ko</strong>dem kol",
        englishWords: ["first of all"],
    },
    {
        unit: 1,
        hebrewWord: "רוֹב הַ",
        transliteration: "rov ha",
        englishWords: ["most of the"],
    },

    {
        unit: 2,
        hebrewWord: "אַחַר הַצָהֳרַיִים",
        transliteration: "a<strong>xar</strong> ha-tsoho<strong>ra</strong>’im",
        englishWords: ["afternoon"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "גָלֶרְיָה (נ')",
        transliteration: "ga<strong>ler</strong>ya",
        englishWords: ["gallery"],
        gender: Genders.feminine,
    },
    {
        unit: 2,
        hebrewWord: "חָלִיל",
        transliteration: "xa<strong>lil</strong>",
        englishWords: ["flute"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "חֶשְׁבּוֹן",
        transliteration: "xesh<strong>bon</strong>",
        englishWords: ["bill"],
        gender: Genders.masculine,
        number: Numbers.singular,
    },
    {
        unit: 2,
        hebrewWord: "חֶשְׁבּוֹנוֹת",
        transliteration: "xeshbo<strong>not</strong>",
        englishWords: ["bills"],
        gender: Genders.masculine,
        number: Numbers.plural,
    },
    {
        unit: 2,
        hebrewWord: "טֶלֶפוֹן נַיָיד",
        transliteration: "tele<strong>phon</strong> na<strong>yad</strong>",
        englishWords: ["cellular phone"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "כְּבִישׁ",
        transliteration: "kvish",
        englishWords: ["road", "highway"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "כַּדוּרְסַל",
        transliteration: "kadur<strong>sal</strong>",
        englishWords: ["basketball"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "כִּינוֹר",
        transliteration: "ki<strong>nor</strong>",
        englishWords: ["violin"],
        gender: Genders.masculine,
        number: Numbers.singular,
    },
    {
        unit: 2,
        hebrewWord: "כִּינוֹרוֹת",
        transliteration: "kino<strong>rot</strong>",
        englishWords: ["violins"],
        gender: Genders.masculine,
        number: Numbers.plural,
    },
    {
        unit: 2,
        hebrewWord: "מַתְכּוֹן",
        transliteration: "mat<strong>kon</strong>",
        englishWords: ["recipe"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "פְּסַנְתֵר",
        transliteration: "psan<strong>ter</strong>",
        englishWords: ["piano"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "פְּקָק תְנוּעָה",
        transliteration: "pkak tnu<strong>’a</strong>",
        englishWords: ["traffic jam"],
        gender: Genders.masculine,
    },
    {
        unit: 2,
        hebrewWord: "תַעֲרוּכָה",
        transliteration: "ta’aru<strong>xa</strong>",
        englishWords: ["exhibition"],
        gender: Genders.feminine,
    },
    {
        unit: 2,
        hebrewWord: "לְאַבֵּד",
        transliteration: "le’a<strong>bed</strong>",
        englishWords: ["to lose"],
    },
    {
        unit: 2,
        hebrewWord: "לְהִסְתַדֵר",
        transliteration: "lehista<strong>der</strong>",
        englishWords: ["to manage"],
    },
    {
        unit: 2,
        hebrewWord: "לְחַיֵיךְ",
        transliteration: "lexa<strong>yex</strong>",
        englishWords: ["to smile"],
    },
    {
        unit: 2,
        hebrewWord: "לְחַמֵם",
        transliteration: "lexa<strong>mem</strong>",
        englishWords: ["to heat warm"],
    },
    {
        unit: 2,
        hebrewWord: "לְסַיֵים",
        transliteration: "lesa<strong>yem</strong>",
        englishWords: ["to finish"],
    },
    {
        unit: 2,
        hebrewWord: "הַאִם",
        transliteration: "ha<strong>’im</strong>",
        englishWords: ["is it"],
    },

    {
        unit: 3,
        hebrewWord: "מוֹדָעָה",
        transliteration: "moda<strong>’a</strong>",
        englishWords: ["announcement", "advertisement"],
        gender: Genders.feminine,
    },
    {
        unit: 3,
        hebrewWord: "פַּעֲמוֹן",
        transliteration: "pa’a<strong>mon</strong>",
        englishWords: ["bell"],
        gender: Genders.masculine,
    },
    {
        unit: 3,
        hebrewWord: "רִצְפָּה",
        transliteration: "rits<strong>pa</strong>",
        englishWords: ["floor"],
        gender: Genders.feminine,
    },
    {
        unit: 3,
        hebrewWord: "לִדְרוֹשׁ",
        transliteration: "lid<strong>rosh</strong>",
        englishWords: ["to demand", "to require"],
    },
    {
        unit: 3,
        hebrewWord: "לְהַבְטִיחַ",
        transliteration: "lehav<strong>ti</strong>’ax",
        englishWords: ["to promise"],
    },
    {
        unit: 3,
        hebrewWord: "לְהַמְלִיץ",
        transliteration: "leham<strong>lits</strong>",
        englishWords: ["to recommend"],
    },
    {
        unit: 3,
        hebrewWord: "לְהַצִיעַ",
        transliteration: "leha<strong>tsi</strong>’a",
        englishWords: ["to suggest", "to propose"],
    },
    {
        unit: 3,
        hebrewWord: "לְלַכְלֵך",
        transliteration: "lelax<strong>lex</strong>",
        englishWords: ["to make dirty"],
    },
    {
        unit: 3,
        hebrewWord: "לְפַרְסֵם",
        transliteration: "lefar<strong>sem</strong>",
        englishWords: ["to publish", "to advertise"],
    },
    {
        unit: 3,
        hebrewWord: "לְצַלְצֵל",
        transliteration: "letsal<strong>tsel</strong> (on phone)",
        englishWords: ["to ring", "to call"],
    },
    {
        unit: 3,
        hebrewWord: "לְשַׂחֵק",
        transliteration: "lesa<strong>xek</strong>",
        englishWords: ["to play", "to act"],
    },
    {
        unit: 3,
        hebrewWord: "לְתַרְגֵם",
        transliteration: "letar<strong>gem</strong>",
        englishWords: ["to translate"],
    },
    {
        unit: 3,
        hebrewWord: "אֲדוֹנִי",
        transliteration: "ado<strong>ni</strong>",
        englishWords: ["Sir", "Mr"],
    },
    {
        unit: 3,
        hebrewWord: "גְבִרְתִי",
        transliteration: "gvir<strong>ti</strong>",
        englishWords: ["Madam"],
    },
    {
        unit: 3,
        hebrewWord: "הַפַּעַם",
        transliteration: "ha<strong>pa</strong>’am",
        englishWords: ["this time"],
    },
    {
        unit: 3,
        hebrewWord: "מִדַי",
        transliteration: "mi<strong>day</strong>",
        englishWords: ["too"],
    },

    {
        unit: 'prepositions',
        hebrewWord: "על",
        transliteration: "al",
        englishWords: ["about"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליי",
        transliteration: "alai",
        englishWords: ["about me"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליך",
        transliteration: "aleicha",
        englishWords: ["about you"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליך",
        transliteration: "alaich",
        englishWords: ["about you"],
        gender: Genders.feminine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליו",
        transliteration: "alav",
        englishWords: ["about him"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליה",
        transliteration: "aleyha",
        englishWords: ["about her"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "עלינו",
        transliteration: "aleynu",
        englishWords: ["about us"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליכם",
        transliteration: "aleichem",
        englishWords: ["about you all"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליכן",
        transliteration: "aleichen",
        englishWords: ["about you all"],
        gender: Genders.feminine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליהם",
        transliteration: "aleihem",
        englishWords: ["about them"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "עליהן",
        transliteration: "aleihen",
        englishWords: ["about them"],
        gender: Genders.feminine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצל",
        transliteration: "etsel",
        englishWords: ["in the place of"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלי",
        transliteration: "etsli",
        englishWords: ["in my place"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלך",
        transliteration: "etslecha",
        englishWords: ["in your place"],
        gender: Genders.masculine,
        number: Numbers.singular,
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלך",
        transliteration: "etslech",
        englishWords: ["in your place"],
        gender: Genders.feminine,
        number: Numbers.singular,
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלו",
        transliteration: "etslo",
        englishWords: ["in his place"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלה",
        transliteration: "etsla",
        englishWords: ["in her place"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלנו",
        transliteration: "etslenu",
        englishWords: ["in our place"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלכם",
        transliteration: "etslechem",
        englishWords: ["in your place"],
        gender: Genders.masculine,
        number: Numbers.plural,
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלכן",
        transliteration: "etslechen",
        englishWords: ["in your place"],
        gender: Genders.feminine,
        number: Numbers.plural,
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלם",
        transliteration: "etslam",
        englishWords: ["in their place"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "אצלן",
        transliteration: "etslan",
        englishWords: ["in their place"],
        gender: Genders.feminine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "מ",
        transliteration: "mi/me",
        englishWords: ["from"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "ממני",
        transliteration: "mimeni",
        englishWords: ["from me"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "ממך",
        transliteration: "mimcha",
        englishWords: ["from you"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "ממך",
        transliteration: "mimech",
        englishWords: ["from you"],
        gender: Genders.feminine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "ממנו",
        transliteration: "mimenu",
        englishWords: ["from him"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "ממנה",
        transliteration: "mimena",
        englishWords: ["from her"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "מאיתנו",
        transliteration: "meitanu",
        englishWords: ["from us"],
    },
    {
        unit: 'prepositions',
        hebrewWord: "מכם",
        transliteration: "mikem",
        englishWords: ["from you all"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "מכן",
        transliteration: "miken",
        englishWords: ["from you all"],
        gender: Genders.feminine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "מהם",
        transliteration: "mehem",
        englishWords: ["from them"],
        gender: Genders.masculine,
    },
    {
        unit: 'prepositions',
        hebrewWord: "מהן",
        transliteration: "mehen",
        englishWords: ["from them"],
        gender: Genders.feminine,
    },
];

// Filter out the problems that don't match the passed in units.
var unitsParam = QuizIt.getParameterByName("units");
if (unitsParam) {
    var newProblems = [];
    var units = unitsParam.split(",");
    $.each(hebrewVocabProblems, function (index, problem) {
        if (units.indexOf(problem.unit.toString()) >= 0) {
            newProblems.push(problem);
        }
    })
    hebrewVocabProblems = newProblems;
}

// Add grammar and specify the gender class on the transliterations.
$.each(hebrewVocabProblems, function (index, problem) {
    if (problem.gender || problem.number) {
        problem.transliteration += "<em>,"
    }

    if (problem.gender) {
        problem.transliteration += " {0}.".format(problem.gender)
    }
    if (problem.number) {
        problem.transliteration += " {0}".format(problem.number)
    }

    if (problem.gender || problem.number) {
        problem.transliteration += "</em>"
    }

    if (problem.gender === Genders.masculine) {
        problem.genderClass = 'masculine';
    } else if (problem.gender === Genders.feminine) {
        problem.genderClass = 'feminine';
    } else {
        problem.genderClass = '';
    }
});


var vocabQuiz = {

    name: 'hebrew-vocab',
    description: 'Hebrew Vocabulary',
    messageText: 'Translate this Hebrew word into English',

    promptField: 'hebrewWord',
    answerField: 'englishWords',

    reviewFields: [
        {
            title: 'Unit',
            name: 'unit'
        },
        {
            title: 'English',
            name: 'englishWords'
        },
        {
            title: 'Transliteration',
            name: 'transliteration'
        },
        {
            title: 'Hebrew',
            name: 'hebrewWord'
        },
    ],

    getAnswerMessage: function (problem) {
        if (problem.transliteration) {
            return "({0})".format(problem.transliteration);
        }

        return '';
    },

    problems: JSON.parse(JSON.stringify(hebrewVocabProblems))

};

$.each(vocabQuiz.problems, function (index, problem) {
    problem.hebrewWord = '<span class="hebrew {0}">{1}</span>'.format(problem.genderClass, problem.hebrewWord);
})

QuizIt.addQuiz(vocabQuiz);


var vocabTransQuiz = {

    name: 'hebrew-vocab-trans',
    description: 'Hebrew Vocabulary with Transliterations',
    messageText: 'Translate this Hebrew word into English',

    promptField: 'hebrewWord',
    answerField: 'englishWords',

    problems: []

};

// Set the problems - include transliteration.
$.each(hebrewVocabProblems, function (index, problem) {
    var hebrewWord;
    if (problem.transliteration) {
        hebrewWord = '<span class="hebrew {0}">{1}</span> ({2})'.format(problem.genderClass, problem.hebrewWord, problem.transliteration);
    } else {
        hebrewWord = '<span class="hebrew {0}">{1}</span>'.format(problem.genderClass, problem.hebrewWord);
    }
    vocabTransQuiz.problems.push({
        hebrewWord: hebrewWord,
        englishWords: problem.englishWords
    });
});

QuizIt.addQuiz(vocabTransQuiz);


var vocabReverseQuiz = {

    name: 'hebrew-vocab-reverse',
    description: 'Hebrew Vocabulary',
    messageText: 'Translate this word into Hebrew',

    promptField: 'englishWord',
    answerField: 'hebrewWord',

    problems: [],

    getAnswerMessage: function (problem) {
        return "({0})".format(problem.transliteration);
    }

};

// Populate the reverse problems - set the englishWord
$.each(hebrewVocabProblems, function (index, problem) {
    var newProblem = JSON.parse(JSON.stringify(problem));
    if (Array.isArray(newProblem.englishWords)) {
        newProblem.englishWord = newProblem.englishWords[0];
    } else {
        newProblem.englishWord = newProblem.englishWords;
    }

    // Add the grammar.
    if (problem.gender || problem.number) {
        newProblem.englishWord += " ( <em>";
    }

    if (problem.gender) {
        newProblem.englishWord += "{0}. ".format(problem.gender);
    }
    if (problem.number) {
        newProblem.englishWord += "{0} ".format(problem.number);
    }

    if (problem.gender || problem.number) {
        newProblem.englishWord += "</em>)";
    }

    vocabReverseQuiz.problems.push(newProblem);
});

QuizIt.addQuiz(vocabReverseQuiz);


var vocabSameQuiz = {

    name: 'hebrew-vocab-same',
    description: 'Hebrew Vocabulary',
    messageText: 'Type this word in Hebrew',

    promptField: 'hebrewWordWithEnglih',
    answerField: 'hebrewWord',

    problems: [],

};

// Set the problems - include English word.
$.each(hebrewVocabProblems, function (index, problem) {
    var englishWord;
    if (Array.isArray(problem.englishWords)) {
        englishWord = problem.englishWords[0];
    } else {
        englishWord = problem.englishWords;
    }

    vocabSameQuiz.problems.push({
        hebrewWordWithEnglih: '<span class="hebrew {0}">{1}</span> ({2})'.format(problem.genderClass, problem.hebrewWord, englishWord),
        hebrewWord: problem.hebrewWord
    });
});

QuizIt.addQuiz(vocabSameQuiz);
