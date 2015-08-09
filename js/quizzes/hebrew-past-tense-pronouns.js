Genders = {
    masculine: 'm',
    feminine: 'f'
};

var hebrewPastTensePronounsQuiz = {

    name: 'hebrew-past-tense-pronouns',
    description: 'Hebrew Past Tense Pronouns',
    messageText: 'Translate this into English',

    promptField: 'hebrewWordWithEnglish',
    answerField: 'englishWords',

    reviewFields: [
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
        },
    ],

    getAnswerMessage: function (problem) {
        return "({0})".format(problem.transliteration);
    },

    problems: [],
};
var hebrewPastTensePronounsProblems = [
    {
        hebrewWord: "הייתי",
        transliteration: "ha-<strong>i</strong>ti",
        englishWords: ["I was"]
    },
    {
        hebrewWord: "היית",
        transliteration: "ha-<strong>i</strong>ta",
        englishWords: ["You were"],
        gender: Genders.masculine
    },
    {
        hebrewWord: "היית",
        transliteration: "ha-<strong>it</strong>",
        englishWords: ["You were"],
        gender: Genders.feminine
    },
    {
        hebrewWord: "היה",
        transliteration: "hai-<strong>ah</strong>",
        englishWords: ["He was"]
    },
    {
        hebrewWord: "היתה",
        transliteration: "hai-<strong>ta</strong>",
        englishWords: ["She was"]
    },
    {
        hebrewWord: "היינו",
        transliteration: "ha-<strong>i</strong>nu",
        englishWords: ["We were"]
    },
    {
        hebrewWord: "הייתם",
        transliteration: "ha-<strong>i</strong>-tem",
        englishWords: ["You all were"],
        gender: Genders.masculine
    },
    {
        hebrewWord: "הייתן",
        transliteration: "ha-<strong>i</strong>-ten",
        englishWords: ["You all were"],
        gender: Genders.feminine
    },
    {
        hebrewWord: "היו",
        transliteration: "hai-<strong>u</strong>",
        englishWords: ["They were"],
        gender: Genders.masculine
    },
    {
        hebrewWord: "היו",
        transliteration: "hai-<strong>u</strong>",
        englishWords: ["They were"],
        gender: Genders.feminine
    },
];

// Add grammar to the transliterations.
$.each(hebrewPastTensePronounsProblems, function (index, problem) {
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
});

var disableTransParam = QuizIt.getParameterByName("disabletrans");
var reverseParam = QuizIt.getParameterByName("reverse");

// Set the problems - include transliteration.
if (!reverseParam) {
    $.each(hebrewPastTensePronounsProblems, function (index, problem) {
        var hebrewWordWithEnglish;
        if (disableTransParam) {
            hebrewWordWithEnglish = '<span class="hebrew">{0}</span>'.format(problem.hebrewWord);
        } else {
            hebrewWordWithEnglish = '<span class="hebrew">{0}</span> ({1})'.format(problem.hebrewWord, problem.transliteration);
        }
        hebrewPastTensePronounsQuiz.problems.push({
            hebrewWordWithEnglish: hebrewWordWithEnglish,
            hebrewWord: problem.hebrewWord,
            englishWords: problem.englishWords,
            transliteration: problem.transliteration,
        });
    });
} else {
    $.each(hebrewPastTensePronounsProblems, function (index, problem) {
        var promptWord = problem.englishWords[0];

        // Add the grammar.
        if (problem.gender || problem.number) {
            promptWord += " ( <em>";
        }

        if (problem.gender) {
            promptWord += "{0}. ".format(problem.gender);
        }
        if (problem.number) {
            promptWord += "{0} ".format(problem.number);
        }

        if (problem.gender || problem.number) {
            promptWord += "</em>)";
        }

        hebrewPastTensePronounsQuiz.problems.push({
            hebrewWordWithEnglish: promptWord,
            englishWords: problem.hebrewWord,
            transliteration: problem.transliteration,
        });
    });
}

QuizIt.addQuiz(hebrewPastTensePronounsQuiz);
