Genders = {
    masculine: 'm',
    feminine: 'f'
};

var hebrewPastTenseFormsQuiz = {

    name: 'hebrew-past-tense-forms',
    description: 'Hebrew Past Tense Forms',
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

    problems: [],
};

var hebrewPastTenseFormsProblems = [
    {
        hebrewWord: "גמרתי",
        transliteration: "ga<strong>mar</strong>ti",
        englishWords: ["I finished"],
    },
    {
        hebrewWord: "גמרת",
        transliteration: "ga<strong>mar</strong>ta",
        englishWords: ["You finished"],
        gender: Genders.masculine,
    },
    {
        hebrewWord: "גמרת",
        transliteration: "ga<strong>mar</strong>t",
        englishWords: ["You finished"],
        gender: Genders.feminine,
    },
    {
        hebrewWord: "גמר",
        transliteration: "ga<strong>mar</strong>",
        englishWords: ["He finished"],
    },
    {
        hebrewWord: "גמרה",
        transliteration: "gam<strong>ra</strong>",
        englishWords: ["She finished"],
    },
    {
        hebrewWord: "גמרנו",
        transliteration: "ga<strong>mar</strong>nu",
        englishWords: ["We finished"],
    },
    {
        hebrewWord: "גמרתם",
        transliteration: "ga<strong>mar</strong>tem",
        englishWords: ["You all finished"],
        gender: Genders.masculine,
    },
    {
        hebrewWord: "גמרתן",
        transliteration: "ga<strong>mar</strong>ten",
        englishWords: ["You all finished"],
        gender: Genders.feminine,
    },
    {
        hebrewWord: "גמרו",
        transliteration: "gam<strong>ru</strong>",
        englishWords: ["They finished"],
        gender: Genders.masculine,
    },
    {
        hebrewWord: "גמרו",
        transliteration: "gam<strong>ru</strong>",
        englishWords: ["They finished"],
        gender: Genders.feminine,
    },
];

// Add grammar to the transliterations.
$.each(hebrewPastTenseFormsProblems, function (index, problem) {
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

// Set the problems - include transliteration.
$.each(hebrewPastTenseFormsProblems, function (index, problem) {
    hebrewPastTenseFormsQuiz.problems.push({
        hebrewWordWithEnglish: '<span class="hebrew">{0}</span> ({1})'.format(problem.hebrewWord, problem.transliteration),
        hebrewWord: problem.hebrewWord,
        englishWords: problem.englishWords,
        transliteration: problem.transliteration,
    });
});

QuizIt.addQuiz(hebrewPastTenseFormsQuiz);


