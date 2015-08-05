Genders = {
    masculine: 'm',
    feminine: 'f'
};

var hebrewFutureTensePronouns = {

    name: 'hebrew-future-tense-pronouns',
    description: 'Hebrew Future Tense Pronouns',
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

var hebrewFutureTensePronounsProblems = [
    {
        hebrewWord: "אהיה",
        transliteration: "eh-hi-<strong>ey</strong>",
        englishWords: ["I will be"],
    },
    {
        hebrewWord: "תהיה",
        transliteration: "ti-hi-<strong>ey</strong>",
        englishWords: ["You will be"],
        gender: Genders.masculine,
    },
    {
        hebrewWord: "תהיי",
        transliteration: "ti-hi-<strong>ee</strong>",
        englishWords: ["You will be"],
        gender: Genders.feminine,
    },
    {
        hebrewWord: "יהיה",
        transliteration: "yi-hi-<strong>ey</strong>",
        englishWords: ["He will be"],
    },
    {
        hebrewWord: "תהיה",
        transliteration: "ti-hi-<strong>ey</strong>",
        englishWords: ["She will be"],
    },
    {
        hebrewWord: "נהיה",
        transliteration: "ni-hi-<strong>ey</strong>",
        englishWords: ["We will be"],
    },
    {
        hebrewWord: "תהיו",
        transliteration: "ti-hi-<strong>yu</strong>",
        englishWords: ["You all will be"],
    },
    {
        hebrewWord: "יהיו",
        transliteration: "yi-hi-<strong>yu</strong>",
        englishWords: ["They will be"],
    },
];

// Add grammar to the transliterations.
$.each(hebrewFutureTensePronounsProblems, function (index, problem) {
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
$.each(hebrewFutureTensePronounsProblems, function (index, problem) {
    hebrewFutureTensePronouns.problems.push({
        hebrewWordWithEnglish: '<span class="hebrew">{0}</span> ({1})'.format(problem.hebrewWord, problem.transliteration),
        hebrewWord: problem.hebrewWord,
        englishWords: problem.englishWords,
        transliteration: problem.transliteration,
    });
});

QuizIt.addQuiz(hebrewFutureTensePronouns);
