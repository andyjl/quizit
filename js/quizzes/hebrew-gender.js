var genderQuiz = {

    name: 'hebrew-gender',
    description: 'Hebrew Nouns Gender',
    messageText: 'What is the gender of this noun?',

    promptField: 'word',
    answerField: 'gender',

    problems: [
        {
            word: "חג, חגים",
            gender: "m",
        },
        {
            word: "קיבוץ, קיבוצים",
            gender: "m",
        },
        {
            word: "פרי, פירות",
            gender: "m",
        },
        {
            word: "גשם, גשמים",
            gender: "m",
        },
        {
            word: "פרח, פרחים",
            gender: "m",
        },
        {
            word: "עץ, עצים",
            gender: "m",
        },
        {
            word: "תרגיל, תרגילים",
            gender: "m",
        },
        {
            word: "ענן, עננים",
            gender: "m",
        },
        {
            word: "צמח, צמחים",
            gender: "m",
        },
        {
            word: "פתק, פתקים",
            gender: "m",
        },
        {
            word: "נביא, נביאים",
            gender: "m",
        },
        {
            word: "מחשב, מחשבים",
            gender: "m",
        },
        {
            word: "נייר, ניירות",
            gender: "m",
        },
        {
            word: "מקום, מקומות",
            gender: "m",
        },
        {
            word: "סוד, סודות",
            gender: "m",
        },
        {
            word: "לוח, לוחות",
            gender: "m",
        },
        {
            word: "גבול, גבולות",
            gender: "m",
        },
        {
            word: "כרטיס, כרטיסים",
            gender: "m",
        },
        {
            word: "בית, בתים",
            gender: "m",
        },
        {
            word: "זוג, זוגות",
            gender: "m",
        },
        {
            word: "חבר, חברים",
            gender: "m",
        },
        {
            word: "בגד, בגדים",
            gender: "m",
        },
        {
            word: "חיים",
            gender: "m",
        },
        {
            word: "אמצע",
            gender: "m",
        },
        {
            word: "כביש, כבישים",
            gender: "m",
        },
        {
            word: "מטבח, מטבחים",
            gender: "m",
        },
        {
            word: "שדה, שדות",
            gender: "m",
        },
        {
            word: "חוף, חופים",
            gender: "m",
        },
        {
            word: "סיפור, סיפורים",
            gender: "m",
        },
        {
            word: "חדר",
            gender: "m",
        },
        {
            word: "קול, קולות",
            gender: "m",
        },
        {
            word: "עץ, עצים",
            gender: "m",
        },
        {
            word: "טבע",
            gender: "m",
        },
        {
            word: "פרק, פרקים",
            gender: "m",
        },

        {
            word: "התחלה, התחלות",
            gender: "f",
        },
        {
            word: "שפה, שפות",
            gender: "f",
        },
        {
            word: "עונה, עונות",
            gender: "f",
        },
        {
            word: "רוח, רוחות",
            gender: "f",
        },
        {
            word: "שמש",
            gender: "f",
        },
        {
            word: "מסורת, מסורות",
            gender: "f",
        },
        {
            word: "עוגה, עוגות",
            gender: "f",
        },
        {
            word: "גלידה, גלידות",
            gender: "f",
        },
        {
            word: "מסעדה, מסעדות",
            gender: "f",
        },
        {
            word: "ארוחה, ארוחות",
            gender: "f",
        },
        {
            word: "מסיבה, מסיבות",
            gender: "f",
        },
        {
            word: "דירה, דירות",
            gender: "f",
        },
        {
            word: "שיטה, שיטות",
            gender: "f",
        },
        {
            word: "סיבה, סיבות",
            gender: "f",
        },
        {
            word: "שכונה, שכונות",
            gender: "f",
        },
        {
            word: "ספרייה, ספריות",
            gender: "f",
        },
        {
            word: "בעייה, בעיות",
            gender: "f",
        },
        {
            word: "אבן, אבנים",
            gender: "f",
        },
        {
            word: "שנה, שנים",
            gender: "f",
        },
        {
            word: "דרך חיים",
            gender: "f",
        },
        {
            word: "קבוצה, קבוצות",
            gender: "f",
        },
        {
            word: "נעל, נעליים",
            gender: "f",
        },
        {
            word: "אגדה, אגדות",
            gender: "f",
        },
        {
            word: "שעה, שעות",
            gender: "f",
        },
        {
            word: "חקלאות",
            gender: "f",
        },
        {
            word: "עבודה, עובדות",
            gender: "f",
        },
        {
            word: "בריכה, בריכות",
            gender: "f",
        },
    ]

};

$.each(genderQuiz.problems, function (index, problem) {
    problem.word = '<span class="hebrew">{0}</span>'.format(problem.word);
})

QuizIt.addQuiz(genderQuiz);