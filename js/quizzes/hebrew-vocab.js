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
        hebrewWord: "שיעור",
        transliteration: "shi'<strong>ur</strong>",
        englishWords: ["class"]
    },
    {
        unit: 1,
        hebrewWord: "יחידה",
        transliteration: "yexida",
        englishWords: ["unit"]
    },
    {
        unit: 1,
        hebrewWord: "ארץ",
        transliteration: "<strong>e</strong>rets",
        englishWords: ["country", "land"],
        gender: Genders.feminine,
        number: Numbers.singular
    },
    {
        unit: 1,
        hebrewWord: "ארצות",
        transliteration: "ara<strong>tsot</strong>",
        englishWords: ["countries", "lands"],
        gender: Genders.feminine,
        number: Numbers.plural
    },
    {
        unit: 1,
        hebrewWord: "עיר",
        transliteration: "ir",
        englishWords: ["city", "town"],
        number: Numbers.singular
    },
    {
        unit: 1,
        hebrewWord: "ערים",
        transliteration: "a<strong>rim</strong>",
        englishWords: ["cities", "towns"],
        number: Numbers.plural
    },
    {
        unit: 1,
        hebrewWord: "זמן",
        transliteration: "zman",
        englishWords: ["time"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "יום",
        transliteration: "yom",
        englishWords: ["day"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "ימים",
        transliteration: "ya<strong>mim</strong>",
        englishWords: ["days"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "שבוע",
        transliteration: "sha<strong>vu</strong>'a",
        englishWords: ["week"]
    },
    {
        unit: 1,
        hebrewWord: "שבועות",
        transliteration: "shavu'<strong>ot</strong>",
        englishWords: ["weeks"]
    },
    {
        unit: 1,
        hebrewWord: "שעה",
        transliteration: "sha'<strong>a</strong>",
        englishWords: ["hour"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "מסיבה",
        transliteration: "mesi<strong>ba</strong>",
        englishWords: ["party"]
    },
    {
        unit: 1,
        hebrewWord: "משפחה",
        transliteration: "mishpa<strong>xa</strong>",
        englishWords: ["family"]
    },
    {
        unit: 1,
        hebrewWord: "לב",
        transliteration: "lev",
        englishWords: ["heart"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "צוואר",
        transliteration: "tsa<strong>var</strong>",
        englishWords: ["neck"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "בטן",
        transliteration: "<strong>be</strong>ten",
        englishWords: ["stomach", "tummy"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "יד",
        transliteration: "yad",
        englishWords: ["hand"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "ידיים",
        transliteration: "ya<strong>da</strong>yim",
        englishWords: ["hands"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "רגל",
        transliteration: "<strong>re</strong>gel",
        englishWords: ["leg", "foot"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "רגליים",
        transliteration: "rag<strong>la</strong>yim",
        englishWords: ["legs", "feet"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "פנים",
        transliteration: "pa<strong>nim</strong>",
        englishWords: ["face"],
        gender: Genders.both
    },
    {
        unit: 1,
        hebrewWord: "אוזן",
        transliteration: "<strong>o</strong>zen",
        englishWords: ["ear"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "אוזניים",
        transliteration: "oz<strong>na</strong>yim",
        englishWords: ["ears"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "עין",
        transliteration: "<strong>a</strong>yin",
        englishWords: ["eye"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "עיניים",
        transliteration: "ei<strong>na</strong>yim",
        englishWords: ["eyes"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "אף",
        transliteration: "af",
        englishWords: ["nose"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "אפים",
        transliteration: "a<strong>pim</strong>",
        englishWords: ["noses"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "פה",
        transliteration: "pe",
        englishWords: ["mouth"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "שערות",
        transliteration: "se'a<strong>rot</strong>",
        englishWords: ["hair"],
        gender: Genders.feminine,
        number: Numbers.plural
    },
    {
        unit: 1,
        hebrewWord: "שן",
        transliteration: "shen",
        englishWords: ["tooth"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "שיניים",
        transliteration: "shi<strong>na</strong>yim",
        englishWords: ["teeth"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "רואה",
        transliteration: "ro'<strong>e</strong>",
        englishWords: ["see", "look"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "רואה",
        transliteration: "ro'<strong>a</strong>",
        englishWords: ["see", "look"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "מקשיב",
        transliteration: "mak<strong>shiv</strong>",
        englishWords: ["listen"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "מקשיבה",
        transliteration: "makshi<strong>va</strong>",
        englishWords: ["listen"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "מביא",
        transliteration: "me<strong>vi</strong>",
        englishWords: ["bring"],
        gender: Genders.masculine
    },
    {
        unit: 1,
        hebrewWord: "מביאה",
        transliteration: "mevi<strong>'a</strong>",
        englishWords: ["bring"],
        gender: Genders.feminine
    },
    {
        unit: 1,
        hebrewWord: "ליד",
        transliteration: "le<strong>yad</strong>",
        englishWords: ["near", "by", "beside", "next to"]
    },

    {
        unit: 2,
        hebrewWord: "מרק",
        transliteration: "ma<strong>rak</strong>",
        englishWords: ["soup"]
    },
    {
        unit: 2,
        hebrewWord: "מרפאה",
        transliteration: "mirpa'a",
        englishWords: ["clinic"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "רופא",
        transliteration: "rofe",
        englishWords: ["doctor"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "רופאה",
        transliteration: "rof''<strong>a</strong>",
        englishWords: ["doctor"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "אחות",
        transliteration: "a<strong>xot</strong>",
        englishWords: ["nurse"]
    },
    {
        unit: 2,
        hebrewWord: "תרופה",
        transliteration: "tru<strong>fa</strong>",
        englishWords: ["medicine", "medication"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "גרון",
        transliteration: "ga<strong>ron</strong>",
        englishWords: ["throat"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "תור",
        transliteration: "tor",
        englishWords: ["line", "queue"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "חום",
        transliteration: "xom",
        englishWords: ["heat", "fever"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "כואב",
        transliteration: "ko<strong>'ev</strong>",
        englishWords: ["hurt"]
    },
    {
        unit: 2,
        hebrewWord: "ישן",
        transliteration: "ya<strong>shen</strong>",
        englishWords: ["sleep"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "ישנה",
        transliteration: "yeshe<strong>na</strong>",
        englishWords: ["sleep"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "יכול",
        transliteration: "ya<strong>xol</strong>",
        englishWords: ["can", "is able"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "יכולה",
        transliteration: "yexo<strong>la</strong>",
        englishWords: ["can", "is able"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "חם",
        transliteration: "xam",
        englishWords: ["hot"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "חמה",
        transliteration: "xa<strong>ma</strong>",
        englishWords: ["hot"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "קר",
        transliteration: "kar",
        englishWords: ["cold"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "קרה",
        transliteration: "kar",
        englishWords: ["cold"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "שמן",
        transliteration: "sha<strong>men</strong>",
        englishWords: ["fat"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "שמנה",
        transliteration: "shme<strong>na</strong>",
        englishWords: ["fat"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "רזה",
        transliteration: "ra<strong>ze</strong>",
        englishWords: ["thin", "skinny"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "רזה",
        transliteration: "ra<strong>za</strong>",
        englishWords: ["thin", "skinny"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "גבוה",
        transliteration: "ga<strong>vo</strong>ha",
        englishWords: ["tall", "high"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "גבוהה",
        transliteration: "gvo<strong>ha</strong>",
        englishWords: ["tall", "high"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "נמוך",
        transliteration: "na<strong>mux</strong>",
        englishWords: ["short", "low"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "נמוכה",
        transliteration: "nemu<strong>xa</strong>",
        englishWords: ["short", "low"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "ארוך",
        transliteration: "a<strong>rox</strong>",
        englishWords: ["long"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "ארוכה",
        transliteration: "aru<strong>ka</strong>",
        englishWords: ["long"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "קצר",
        transliteration: "ka<strong>tsar</strong>",
        englishWords: ["short"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "קצרה",
        transliteration: "ktsa<strong>ra</strong>",
        englishWords: ["short"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "שחור",
        transliteration: "sha<strong>xor</strong>",
        englishWords: ["black"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "שחורה",
        transliteration: "shxo<strong>ra</strong>",
        englishWords: ["black"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "לבן",
        transliteration: "la<strong>van</strong>",
        englishWords: ["white"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "לבנה",
        transliteration: "leva<strong>na</strong>",
        englishWords: ["white"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "חום",
        transliteration: "xum",
        englishWords: ["brown"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "חומה",
        transliteration: "xu<strong>ma</strong>",
        englishWords: ["brown"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "אדום",
        transliteration: "a<strong>dom</strong>",
        englishWords: ["red"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "אדומה",
        transliteration: "adu<strong>ma</strong>",
        englishWords: ["red"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "צהוב",
        transliteration: "tsa<strong>hov</strong>",
        englishWords: ["yellow"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "צהובה",
        transliteration: "tsehu<strong>ba</strong>",
        englishWords: ["yellow"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "כחול",
        transliteration: "ka<strong>xol</strong>",
        englishWords: ["blue"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "כחולה",
        transliteration: "kxu<strong>la</strong>",
        englishWords: ["blue"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "ירוק",
        transliteration: "ya<strong>rok</strong>",
        englishWords: ["green"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "ירוקה",
        transliteration: "yeru<strong>ka</strong>",
        englishWords: ["green"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "רע",
        transliteration: "ra",
        englishWords: ["bad"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "רעה",
        transliteration: "ra",
        englishWords: ["bad"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "בערך",
        transliteration: "be-<strong>e</strong>rex",
        englishWords: ["more or less"]
    },
    {
        unit: 2,
        hebrewWord: "ככה",
        transliteration: "<strong>ka</strong>xa",
        englishWords: ["this way"]
    },
    {
        unit: 2,
        hebrewWord: "כבר",
        transliteration: "kvar",
        englishWords: ["already"]
    },
    {
        unit: 2,
        hebrewWord: "מה קרה",
        transliteration: "ma ka<strong>ra</strong>",
        englishWords: ["what happened"]
    },
    {
        unit: 2,
        hebrewWord: "חולה",
        transliteration: "xo<strong>le</strong>",
        englishWords: ["sick"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "חולה",
        transliteration: "xo<strong>la</strong>",
        englishWords: ["sick"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "בריא",
        transliteration: "ba<strong>ri</strong>",
        englishWords: ["healthy"],
        gender: Genders.masculine
    },
    {
        unit: 2,
        hebrewWord: "בריאה",
        transliteration: "bri<strong>'a</strong>",
        englishWords: ["healthy"],
        gender: Genders.feminine
    },
    {
        unit: 2,
        hebrewWord: "תרגיש טוב",
        transliteration: "tar<strong>gish</strong> tov",
        englishWords: ["get well"]
    }

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

// Add grammar to the transliterations.
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
        return "({0})".format(problem.transliteration);
    },

    problems: JSON.parse(JSON.stringify(hebrewVocabProblems))

};

$.each(vocabQuiz.problems, function (index, problem) {
    problem.hebrewWord = '<span class="hebrew">{0}</span>'.format(problem.hebrewWord);
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
    vocabTransQuiz.problems.push({
        hebrewWord: '<span class="hebrew">{0}</span> ({1})'.format(problem.hebrewWord, problem.transliteration),
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
        hebrewWordWithEnglih: '<span class="hebrew">{0}</span> ({1})'.format(problem.hebrewWord, englishWord),
        hebrewWord: problem.hebrewWord
    });
});

QuizIt.addQuiz(vocabSameQuiz);