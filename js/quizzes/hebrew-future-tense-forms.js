Genders = {
    masculine: 'm',
    feminine: 'f'
};

var hebrewFutureTenseForms = {

    name: 'hebrew-future-tense-forms',
    description: 'Hebrew Future Tense Forms',
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

var hebrewFutureTenseFormsProblems = [
    {
        hebrewWord: "אגמור",
        transliteration: "eh-g<strong>mor</strong>",
        englishWords: ["I will finish"],
    },
    {
        hebrewWord: "תגמור",
        transliteration: "ti-g<strong>mor</strong>",
        englishWords: ["You will finish"],
        gender: Genders.masculine,
    },
    {
        hebrewWord: "תגמרי",
        transliteration: "ti-gmer<strong>i</strong>",
        englishWords: ["You will finish"],
        gender: Genders.feminine,
    },
    {
        hebrewWord: "יגמור",
        transliteration: "yi-g<strong>mor</strong>",
        englishWords: ["He will finish"],
    },
    {
        hebrewWord: "תגמור",
        transliteration: "ti-g<strong>mor</strong>",
        englishWords: ["She will finish"],
    },
    {
        hebrewWord: "נגמור",
        transliteration: "ni-g<strong>mor</strong>",
        englishWords: ["We will finish"],
    },
    {
        hebrewWord: "תגמרו",
        transliteration: "ti-gmer<strong>u</strong>",
        englishWords: ["You all will finish"],
    },
    {
        hebrewWord: "יגמרו",
        transliteration: "yi-gmer<strong>u</strong>",
        englishWords: ["They will finish"],
    },
];

// Add grammar to the transliterations.
$.each(hebrewFutureTenseFormsProblems, function (index, problem) {
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
$.each(hebrewFutureTenseFormsProblems, function (index, problem) {
    hebrewFutureTenseForms.problems.push({
        hebrewWordWithEnglish: '<span class="hebrew">{0}</span> ({1})'.format(problem.hebrewWord, problem.transliteration),
        hebrewWord: problem.hebrewWord,
        englishWords: problem.englishWords,
        transliteration: problem.transliteration,
    });
});

QuizIt.addQuiz(hebrewFutureTenseForms);
