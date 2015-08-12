var genderQuiz = {

    name: 'hebrew-gender',
    description: 'Hebrew Nouns Gender',
    messageText: 'What is the gender of this noun?',

    promptField: 'word',
    answerField: 'gender',

    problems: [
        {
            word: "חג, חגים",
            gender: "ז",
        },
        {
            word: "קיבוץ, קיבוצים",
            gender: "ז",
        },
        {
            word: "פרי, פירות",
            gender: "ז",
        },
        {
            word: "גשם, גשמים",
            gender: "ז",
        },
        {
            word: "פרח, פרחים",
            gender: "ז",
        },
        {
            word: "עץ, עצים",
            gender: "ז",
        },
        {
            word: "תרגיל, תרגילים",
            gender: "ז",
        },
        {
            word: "ענן, עננים",
            gender: "ז",
        },
        {
            word: "צמח, צמחים",
            gender: "ז",
        },
        {
            word: "פתק, פתקים",
            gender: "ז",
        },
        {
            word: "נביא, נביאים",
            gender: "ז",
        },
        {
            word: "מחשב, מחשבים",
            gender: "ז",
        },
        {
            word: "נייר, ניירות",
            gender: "ז",
        },
        {
            word: "מקום, מקומות",
            gender: "ז",
        },
        {
            word: "סוד, סודות",
            gender: "ז",
        },
        {
            word: "לוח, לוחות",
            gender: "ז",
        },
        {
            word: "גבול, גבולות",
            gender: "ז",
        },
        {
            word: "כרטיס, כרטיסים",
            gender: "ז",
        },
        {
            word: "בית, בתים",
            gender: "ז",
        },
        {
            word: "זוג, זוגות",
            gender: "ז",
        },
        {
            word: "חבר, חברים",
            gender: "ז",
        },
        {
            word: "בגד, בגדים",
            gender: "ז",
        },
        {
            word: "חיים",
            gender: "ז",
        },
        {
            word: "אמצע",
            gender: "ז",
        },
        {
            word: "כביש, כבישים",
            gender: "ז",
        },
        {
            word: "מטבח, מטבחים",
            gender: "ז",
        },
        {
            word: "שדה, שדות",
            gender: "ז",
        },
        {
            word: "חוף, חופים",
            gender: "ז",
        },
        {
            word: "סיפור, סיפורים",
            gender: "ז",
        },
        {
            word: "חדר",
            gender: "ז",
        },
        {
            word: "קול, קולות",
            gender: "ז",
        },
        {
            word: "עץ, עצים",
            gender: "ז",
        },
        {
            word: "טבע",
            gender: "ז",
        },
        {
            word: "פרק, פרקים",
            gender: "ז",
        },

        {
            word: "התחלה, התחלות",
            gender: "נ",
        },
        {
            word: "שפה, שפות",
            gender: "נ",
        },
        {
            word: "עונה, עונות",
            gender: "נ",
        },
        {
            word: "רוח, רוחות",
            gender: "נ",
        },
        {
            word: "שמש",
            gender: "נ",
        },
        {
            word: "מסורת, מסורות",
            gender: "נ",
        },
        {
            word: "עוגה, עוגות",
            gender: "נ",
        },
        {
            word: "גלידה, גלידות",
            gender: "נ",
        },
        {
            word: "מסעדה, מסעדות",
            gender: "נ",
        },
        {
            word: "ארוחה, ארוחות",
            gender: "נ",
        },
        {
            word: "מסיבה, מסיבות",
            gender: "נ",
        },
        {
            word: "דירה, דירות",
            gender: "נ",
        },
        {
            word: "שיטה, שיטות",
            gender: "נ",
        },
        {
            word: "סיבה, סיבות",
            gender: "נ",
        },
        {
            word: "שכונה, שכונות",
            gender: "נ",
        },
        {
            word: "ספרייה, ספריות",
            gender: "נ",
        },
        {
            word: "בעייה, בעיות",
            gender: "נ",
        },
        {
            word: "אבן, אבנים",
            gender: "נ",
        },
        {
            word: "שנה, שנים",
            gender: "נ",
        },
        {
            word: "דרך חיים",
            gender: "נ",
        },
        {
            word: "קבוצה, קבוצות",
            gender: "נ",
        },
        {
            word: "נעל, נעליים",
            gender: "נ",
        },
        {
            word: "אגדה, אגדות",
            gender: "נ",
        },
        {
            word: "שעה, שעות",
            gender: "נ",
        },
        {
            word: "חקלאות",
            gender: "נ",
        },
        {
            word: "עבודה, עובדות",
            gender: "נ",
        },
        {
            word: "בריכה, בריכות",
            gender: "נ",
        },
    ]

};

$.each(genderQuiz.problems, function (index, problem) {
    problem.word = '<span class="hebrew">{0}</span>'.format(problem.word);
})

QuizIt.addQuiz(genderQuiz);