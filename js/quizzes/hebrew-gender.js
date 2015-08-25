var genderQuiz = {

    name: 'hebrew-gender',
    description: 'Hebrew Nouns Gender',
    messageText: 'What is the gender of this noun?',

    promptField: 'word',
    answerField: 'gender',

    problems: [
        /*{
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
        },*/
        {
            word: "בחור, בחורים",
            gender: "m",
        },
        {
            word: "צעיר, צעירים",
            gender: "m",
        },
        {
            word: "פסוק, פסוקים",
            gender: "m",
        },
        {
            word: "סמל, סמלים",
            gender: "m",
        },
        {
            word: "אומן, אומנים",
            gender: "m",
        },
        {
            word: "נוף, נופים",
            gender: "m",
        },
        {
            word: "שטיח, שטיחים",
            gender: "m",
        },
        {
            word: "ציור, ציורים",
            gender: "m",
        },
        {
            word: "כסף",
            gender: "m",
        },
        {
            word: "זהב",
            gender: "m",
        },
        {
            word: "סגנון, סגנונות",
            gender: "m",
        },
        {
            word: "אריה, אריות",
            gender: "m",
        },
        {
            word: "ארון, ארונות",
            gender: "m",
        },
        {
            word: "צבע, צבעים",
            gender: "m",
        },
        {
            word: "בית, בתים",
            gender: "m",
        },
        {
            word: "רב, רבנים",
            gender: "m",
        },
        {
            word: "שער, שערים",
            gender: "m",
        },
        {
            word: "משיח, משיחים",
            gender: "m",
        },
        {
            word: "שם, שמות",
            gender: "m",
        },
        {
            word: "זבוב, זבובים",
            gender: "m",
        },
        {
            word: "לכלוך, לכלוכים",
            gender: "m",
        },
        {
            word: "סיפור, סיפורים",
            gender: "m",
        },
        {
            word: "מרכז, מרכזים",
            gender: "m",
        },
        {
            word: "שמיים",
            gender: "m",
        },
        {
            word: "רופא, רופאים",
            gender: "m",
        },
        {
            word: "כפר, כפרים",
            gender: "m",
        },
        {
            word: "תרמיל, תרמילים",
            gender: "m",
        },
        {
            word: "שק שינה, שקי שינה",
            gender: "m",
        },
        {
            word: "קשר, קשרים",
            gender: "m",
        },
        {
            word: "חופש",
            gender: "m",
        },
        {
            word: "בול, בולים",
            gender: "m",
        },
        {
            word: "מחקר, מחקרים",
            gender: "m",
        },
        {
            word: "אזרח, אזרחים",
            gender: "m",
        },
        {
            word: "תייר, תיירים",
            gender: "m",
        },
        {
            word: "פסל, פסלים",
            gender: "m",
        },
        {
            word: "מחנה, מחנות",
            gender: "m",
        },

        {
            word: "בחורה, בחורות",
            gender: "f",
        },
        {
            word: "אומנות",
            gender: "f",
        },
        {
            word: "חברה, חברות",
            gender: "f",
        },
        {
            word: "חומה, חומות",
            gender: "f",
        },
        {
            word: "חנוכיה, חנוכיות",
            gender: "f",
        },
        {
            word: "מנורה, מנורות",
            gender: "f",
        },
        {
            word: "מזוזה, מזוזות",
            gender: "f",
        },
        {
            word: "קבוצה, קבוצות",
            gender: "f",
        },
        {
            word: "אמונה, אמונות",
            gender: "f",
        },
        {
            word: "ספרות",
            gender: "f",
        },
        {
            word: "קהילה, קהילות",
            gender: "f",
        },
        {
            word: "עין, עיניים",
            gender: "f",
        },
        {
            word: "אהבה, אהבות",
            gender: "f",
        },
        {
            word: "תקופה, תקופות",
            gender: "f",
        },
        {
            word: "צלחת, צלחות",
            gender: "f",
        },
        {
            word: "כרית, כריות",
            gender: "f",
        },
        {
            word: "מפית, מפיות",
            gender: "f",
        },
        {
            word: "כפית, כפיות",
            gender: "f",
        },
        {
            word: "תרבות, תרבויות",
            gender: "f",
        },
        {
            word: "מחברת, מחברות",
            gender: "f",
        },
        {
            word: "משמעות, משמעויות",
            gender: "f",
        },
        {
            word: "טעות, טעויות",
            gender: "f",
        },
        {
            word: "נשיקה, נשיקות",
            gender: "f",
        },
        {
            word: "רשימה, רשימות",
            gender: "f",
        },
        {
            word: "תמונה, תמונות",
            gender: "f",
        },
        {
            word: "כתובת, כתובות",
            gender: "f",
        },
        {
            word: "דרישת שלום, דרישות שלים",
            gender: "f",
        },
        {
            word: "שואה",
            gender: "f",
        },
        {
            word: "תעודה, תעודות",
            gender: "f",
        },
        {
            word: "מטרה, מטרות",
            gender: "f",
        },
        {
            word: "ציונות",
            gender: "f",
        },
        {
            word: "מדינה, מדינות",
            gender: "f",
        },
        {
            word: "יצירה, יצירות",
            gender: "f",
        },
        {
            word: "הצגה, הצגות",
            gender: "f",
        },
    ]

};

$.each(genderQuiz.problems, function (index, problem) {
    problem.word = '<span class="hebrew">{0}</span>'.format(problem.word);
})

QuizIt.addQuiz(genderQuiz);