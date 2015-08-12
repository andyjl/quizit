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
        hebrewWord: "עובר",
        englishWords: ["move", "change"],
        transliteration: "over",
    },
    {
        unit: 1,
        hebrewWord: "דואג",
        englishWords: ["worry"],
        transliteration: "doeg",
    },
    {
        unit: 1,
        hebrewWord: "שומר",
        englishWords: ["observe", "keep"],
        transliteration: "shomer",
    },
    {
        unit: 1,
        hebrewWord: "מבשל",
        englishWords: ["cook"],
        transliteration: "mevashel",
    },
    {
        unit: 1,
        hebrewWord: "מטפל",
        englishWords: ["take care of"],
        transliteration: "metapel",
    },
    {
        unit: 1,
        hebrewWord: "מתחבא",
        englishWords: ["hide"],
        transliteration: "mitcha<strong>be</strong>"
    },
    {
        unit: 1,
        hebrewWord: "נגמר",
        englishWords: ["finish"],
        transliteration: "nig<strong>mar</strong>"
    },
    {
        unit: 1,
        hebrewWord: "אחר",
        englishWords: ["other"],
        transliteration: "a<strong>cher</strong>"
    },
    {
        unit: 1,
        hebrewWord: "משותף",
        englishWords: ["common", "shared"],
        transliteration: "meshu<strong>taf</strong>"
    },
    {
        unit: 1,
        hebrewWord: "פשוט",
        englishWords: ["simple"],
        transliteration: "pashut",
    },
    {
        unit: 1,
        hebrewWord: "שונה",
        englishWords: ["different"],
        transliteration: "shone"
    },
    {
        unit: 1,
        hebrewWord: "חקלאי",
        englishWords: ["agricultural"],
        transliteration: "chaklai"
    },
    {
        unit: 1,
        hebrewWord: "חופשי",
        englishWords: ["free"],
        transliteration: "chufshi"
    },
    {
        unit: 1,
        hebrewWord: "לאט",
        englishWords: ["slowly"],
        transliteration: "le-at"
    },
    {
        unit: 1,
        hebrewWord: "מהר",
        englishWords: ["quickly"],
        transliteration: "ma<strong>her</strong>"
    },
    {
        unit: 1,
        hebrewWord: "זוג",
        englishWords: ["couple"],
        transliteration: "zug",
    },
    {
        unit: 1,
        hebrewWord: "אמצע",
        englishWords: ["middle"],
        transliteration: "emtsa",
    },
    {
        unit: 1,
        hebrewWord: "כביש",
        englishWords: ["road"],
        transliteration: "kvish",
    },
    {
        unit: 1,
        hebrewWord: "קול",
        englishWords: ["sound", "voice"],
        transliteration: "kol",
    },
    {
        unit: 1,
        hebrewWord: "מטבח",
        englishWords: ["kitchen"],
        transliteration: "mit<strong>bach</strong>"
    },
    {
        unit: 1,
        hebrewWord: "שדה",
        englishWords: ["field"],
        transliteration: "sade",
    },
    {
        unit: 1,
        hebrewWord: "חוף",
        englishWords: ["beach"],
        transliteration: "chof",
    },
    {
        unit: 1,
        hebrewWord: "פרק",
        englishWords: ["chapter"],
        transliteration: "perek",
    },
    {
        unit: 1,
        hebrewWord: "דרך חיים",
        englishWords: ["way of life"],
    },
    {
        unit: 1,
        hebrewWord: "קבוצה",
        englishWords: ["group"],
        transliteration: "kebutsa"
    },
    {
        unit: 1,
        hebrewWord: "אגדה",
        englishWords: ["legend"],
        transliteration: "agadah"
    },
    {
        unit: 1,
        hebrewWord: "חקלאות",
        englishWords: ["agriculture"],
        transliteration: "chaklaut"
    },
    {
        unit: 2,
        hebrewWord: "פוחד",
        englishWords: ["be afraid"],
        transliteration: "poched"
    },
    {
        unit: 2,
        hebrewWord: "כועס",
        englishWords: ["be angry"],
        transliteration: "koes",
    },
    {
        unit: 2,
        hebrewWord: "משתמש",
        englishWords: ["use"],
        transliteration: "mishta<strong>mesh</strong>"
    },
    {
        unit: 2,
        hebrewWord: "נמצא",
        englishWords: ["be located"],
        transliteration: "nim<strong>tsa</strong>"
    },
    {
        unit: 2,
        hebrewWord: "יחד עם זה",
        englishWords: ["nevertheless"],
    },
    {
        unit: 2,
        hebrewWord: "בעזרת",
        englishWords: ["with the help of"],
        transliteration: "be-az<strong>rat</strong>"
    },
    {
        unit: 2,
        hebrewWord: "מאז ועד היום",
        englishWords: ["from then until today"],
    },
    {
        unit: 2,
        hebrewWord: "לכן",
        englishWords: ["therefore"],
        transliteration: "la<strong>chen</strong>"
    },
    {
        unit: 2,
        hebrewWord: "בשקט",
        englishWords: ["silently"],
        transliteration: "besheket",
    },
    {
        unit: 2,
        hebrewWord: "שעבר",
        englishWords: ["previous"],
        transliteration: "she-a<strong>var</strong>"
    },
    {
        unit: 2,
        hebrewWord: "מחרתיים",
        englishWords: ["the day after tomorrow"],
        transliteration: "machratayim",
    },
    {
        unit: 2,
        hebrewWord: "שעתיים",
        englishWords: ["two hours"],
        transliteration: "sha-tayim"
    },
    {
        unit: 2,
        hebrewWord: "שנתיים",
        englishWords: ["two years"],
        transliteration: "shna<strong>ta</strong>yim"
    },
    {
        unit: 2,
        hebrewWord: "צמח",
        englishWords: ["plant"],
        transliteration: "<strong>tse</strong>mach"
    },
    {
        unit: 2,
        hebrewWord: "נביא",
        englishWords: ["prophet"],
        transliteration: "na<strong>vi</strong>"
    },
    {
        unit: 2,
        hebrewWord: "נייר",
        englishWords: ["paper"],
        transliteration: "niyar",
    },
    {
        unit: 2,
        hebrewWord: "סוד",
        englishWords: ["secret"],
        transliteration: "sod",
    },
    {
        unit: 2,
        hebrewWord: "לוח",
        englishWords: ["board"],
        transliteration: "luach",
    },
    {
        unit: 2,
        hebrewWord: "גבול",
        englishWords: ["border"],
        transliteration: "gvul"
    },
    {
        unit: 2,
        hebrewWord: "כרטיס ברכה",
        englishWords: ["blessing card"],
        transliteration: "kartis bracha"
    },
    {
        unit: 2,
        hebrewWord: "סיבה",
        englishWords: ["reason", "excuse"],
        transliteration: "siba",
    },
    {
        unit: 2,
        hebrewWord: "אבן",
        englishWords: ["storm"],
        transliteration: "even",
    },
    {
        unit: 2,
        hebrewWord: "פרסומת",
        englishWords: ["advertisement"],
        transliteration: "per<strong>som</strong>et"
    },
    {
        unit: 'mine',
        hebrewWord: "צבא",
        transliteration: "tsa<strong>va</strong>",
        englishWords: ["army"],
    },
    {
        unit: 'mine',
        hebrewWord: "בינלאומים",
        transliteration: "ben-lau<strong>mim</strong>",
        englishWords: ["international"],
    },
    {
        unit: 'mine',
        hebrewWord: "לוח שנה",
        transliteration: "luach shena",
        englishWords: ["calendar"],
    },
    {
        unit: 'mine',
        hebrewWord: "בדרך כלל",
        transliteration: "bederech klal",
        englishWords: ["usually"],
    },
    {
        unit: 'mine',
        hebrewWord: "תקופה",
        transliteration: "tku<strong>fa</strong>",
        englishWords: ["period"],
    },
    {
        unit: 'mine',
        hebrewWord: "מסורת",
        transliteration: "ma<strong>so</strong>ret",
        englishWords: ["tradition"],
    },
    {
        unit: 'mine',
        hebrewWord: "אמונה",
        transliteration: "emu<strong>nah</strong>",
        englishWords: ["faith"],
    },
    {
        unit: 'mine',
        hebrewWord: "תפילה",
        transliteration: "tfil<strong>ah</strong>",
        englishWords: ["prayer"],
    },
    {
        unit: 'mine',
        hebrewWord: "תוכנית",
        transliteration: "toch<strong>nit</strong>",
        englishWords: ["program"],
    },
    {
        unit: 'mine',
        hebrewWord: "מזג אוויר",
        transliteration: "<strong>me</strong>zeg a-av<strong>ir</strong>",
        englishWords: ["weather"],
    },
    {
        unit: 'mine',
        hebrewWord: "לחות",
        transliteration: "la<strong>chut</strong>",
        englishWords: ["humidity"],
    },
    {
        unit: 'mine',
        hebrewWord: "דוגמא",
        transliteration: "dug<strong>ma</strong>",
        englishWords: ["example"],
    },
    {
        unit: 'mine',
        hebrewWord: "יבש",
        transliteration: "ya<strong>vesh</strong>",
        englishWords: ["dry"],
    },
    {
        unit: 'mine',
        hebrewWord: "בהיר",
        transliteration: "ba<strong>hir</strong>",
        englishWords: ["sunny", "bright"],
    },
    {
        unit: 'mine',
        hebrewWord: "שכונה",
        transliteration: "shchu<strong>na</strong>",
        englishWords: ["neighborhood"],
    },
    {
        unit: 'mine',
        hebrewWord: "שיטה",
        transliteration: "shit<strong>ah</strong>",
        englishWords: ["method"],
    },
    {
        unit: 'mine',
        hebrewWord: "מה פתאום",
        transliteration: "ma pit<strong>om</strong>",
        englishWords: ["no way"],
    },
    {
        unit: 'mine',
        hebrewWord: "כל כך",
        transliteration: "kol kach",
        englishWords: ["so much"],
    },
    {
        unit: 'mine',
        hebrewWord: "בחוץ",
        transliteration: "ba<strong>chuts</strong>",
        englishWords: ["outside"],
    },
    {
        unit: 'mine',
        hebrewWord: "בפנים",
        transliteration: "bif<strong>nim</strong>",
        englishWords: ["inside"],
    },
    {
        unit: 'mine',
        hebrewWord: "עוד לא",
        transliteration: "od lo",
        englishWords: ["not yet"],
    },
    {
        unit: 'mine',
        hebrewWord: "דומה",
        transliteration: "do<strong>me</strong>",
        englishWords: ["similar"],
    },
    {
        unit: 'mine',
        hebrewWord: "רוב",
        transliteration: "rov",
        englishWords: ["most of"],
    },
    {
        unit: 'mine',
        hebrewWord: "תאוריה",
        transliteration: "te-ori<strong>a</strong>",
        englishWords: ["theory"],
    },
    {
        unit: 'mine',
        hebrewWord: "במשך",
        transliteration: "be<strong>me</strong>sech",
        englishWords: ["during"],
    },
    {
        unit: 'mine',
        hebrewWord: "חשבון",
        transliteration: "ches<strong>bon</strong>",
        englishWords: ["bill"],
    },
    {
        unit: 'mine',
        hebrewWord: "בשר",
        transliteration: "ba<strong>sar</strong>",
        englishWords: ["meat"],
    },
    {
        unit: 'mine',
        hebrewWord: "דלת",
        transliteration: "delet",
        englishWords: ["door"],
    },
    {
        unit: 'mine',
        hebrewWord: "קודם",
        transliteration: "<strong>ko</strong>dem",
        englishWords: ["before"],
    },
    {
        unit: 'mine',
        hebrewWord: "קל",
        transliteration: "kal",
        englishWords: ["soft", "easy"],
    },
    {
        unit: 'mine',
        hebrewWord: "מצב רוח",
        transliteration: "<strong>ma</strong>tsav <strong>ru</strong>ach",
        englishWords: ["attitude"],
    },
    {
        unit: 'mine',
        hebrewWord: "בוודאי",
        transliteration: "bevad<strong>ai</strong>",
        englishWords: ["of course"],
    },
    {
        unit: 'mine',
        hebrewWord: "שיחה",
        transliteration: "si<strong>cha</strong>",
        englishWords: ["conversation"],
    },
    {
        unit: 'mine',
        hebrewWord: "לכן",
        transliteration: "la<strong>chen</strong>",
        englishWords: ["therefore"],
    },
    {
        unit: 'mine',
        hebrewWord: "עצמי",
        transliteration: "etsmi",
        englishWords: ["myself"],
    },
    {
        unit: 'mine',
        hebrewWord: "ואילו",
        transliteration: "ve-<strong>i</strong>lu (when comparing)",
        englishWords: ["but"],
    },
    {
        unit: 'mine',
        hebrewWord: "תגיד לי",
        transliteration: "ta<strong>gid</strong> li",
        englishWords: ["tell me"],
    },
    {
        unit: 'mine',
        hebrewWord: "תשובה",
        transliteration: "tshu<strong>va</strong>",
        englishWords: ["answer"],
    },
    {
        unit: 'mine',
        hebrewWord: "מעדיף",
        transliteration: "ma-a<strong>dif</strong>",
        englishWords: ["prefer"],
    },
    {
        unit: 'mine',
        hebrewWord: "זוכר",
        transliteration: "zo<strong>cher</strong>",
        englishWords: ["remember"],
    },
    {
        unit: 'mine',
        hebrewWord: "מזכיר",
        transliteration: "mas<strong>chir</strong>",
        englishWords: ["remind"],
    },
    {
        unit: 'mine',
        hebrewWord: "שכן",
        transliteration: "sha<strong>chen</strong>",
        englishWords: ["neighbor"],
    },
    {
        unit: 'mine',
        hebrewWord: "מנהל",
        transliteration: "mena<strong>hel</strong>",
        englishWords: ["manager"],
    },
    {
        unit: 'mine',
        hebrewWord: "פח אשפה",
        transliteration: "pach es<strong>pa</strong>",
        englishWords: ["garbage can"],
    },
    {
        unit: 'mine',
        hebrewWord: "בגלל",
        transliteration: "biglal",
        englishWords: ["because of"],
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
        transliteration: "alach",
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
            title: 'Hebrew',
            name: 'hebrewWord'
        },
        {
            title: 'Transliteration',
            name: 'transliteration'
        },
        {
            title: 'English',
            name: 'englishWords'
        }
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
