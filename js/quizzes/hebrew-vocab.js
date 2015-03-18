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
        transliteration: "mirpa'<strong>a</strong>",
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
    },

    {
        unit: 3,
        hebrewWord: "אוטובוס",
        transliteration: "<strong>o</strong>tobus",
        englishWords: ["bus"],
        gender: Genders.masculine
    },
    {
        unit: 3,
        hebrewWord: "חיים",
        transliteration: "xa<strong>yim</strong>",
        englishWords: ["life"],
        gender: Genders.masculine,
        number: Numbers.plural
    },
    {
        unit: 3,
        hebrewWord: "בוחר",
        transliteration: "bo<strong>xer</strong>",
        englishWords: ["choose"],
        gender: Genders.masculine
    },
    {
        unit: 3,
        hebrewWord: "בוחרת",
        transliteration: "bo<strong>xe</strong>ret",
        englishWords: ["choose"],
        gender: Genders.feminine
    },
    {
        unit: 3,
        hebrewWord: "חוזר",
        transliteration: "xo<strong>zer</strong>",
        englishWords: ["return"]
    },
    {
        unit: 3,
        hebrewWord: "חולם",
        transliteration: "xo<strong>lem</strong>",
        englishWords: ["dream"]
    },
    {
        unit: 3,
        hebrewWord: "לובש",
        transliteration: "lo<strong>vesh</strong>",
        englishWords: ["wear"]
    },
    {
        unit: 3,
        hebrewWord: "מוצא",
        transliteration: "mo<strong>tse</strong>",
        englishWords: ["find"]
    },
    {
        unit: 3,
        hebrewWord: "נוסע",
        transliteration: "no<strong>se'</strong>a",
        englishWords: ["ride", "go"]
    },
    {
        unit: 3,
        hebrewWord: "סוגר",
        transliteration: "so<strong>ger</strong>",
        englishWords: ["close"]
    },
    {
        unit: 3,
        hebrewWord: "סופר",
        transliteration: "so<strong>fer</strong>",
        englishWords: ["count"]
    },
    {
        unit: 3,
        hebrewWord: "עוזר",
        transliteration: "o<strong>zer</strong>",
        englishWords: ["help"]
    },
    {
        unit: 3,
        hebrewWord: "עומד",
        transliteration: "o<strong>med</strong>",
        englishWords: ["stand"]
    },
    {
        unit: 3,
        hebrewWord: "פותח",
        transliteration: "po<strong>te</strong>'ax",
        englishWords: ["open"]
    },
    {
        unit: 3,
        hebrewWord: "מיוחד",
        transliteration: "meyu<strong>xad</strong>",
        englishWords: ["special"],
        gender: Genders.masculine
    },
    {
        unit: 3,
        hebrewWord: "מיוחדת",
        transliteration: "meyu<strong>xe</strong>det",
        englishWords: ["special"],
        gender: Genders.feminine
    },
    {
        unit: 3,
        hebrewWord: "קל",
        transliteration: "kal",
        englishWords: ["easy"]
    },
    {
        unit: 3,
        hebrewWord: "קשה",
        transliteration: "ka<strong>she</strong>",
        englishWords: ["difficult", "hard"]
    },
    {
        unit: 3,
        hebrewWord: "בטח",
        transliteration: "<strong>be</strong>tax",
        englishWords: ["sure"]
    },
    {
        unit: 3,
        hebrewWord: "כל",
        transliteration: "kol",
        englishWords: ["every"]
    },
    {
        unit: 3,
        hebrewWord: "מספיק",
        transliteration: "mas<strong>pix</strong>",
        englishWords: ["enough"]
    },
    {
        unit: 3,
        hebrewWord: "פה",
        transliteration: "po",
        englishWords: ["here"]
    },
    {
        unit: 3,
        hebrewWord: "שם",
        transliteration: "sham",
        englishWords: ["there"]
    },
    {
        unit: 3,
        hebrewWord: "למשל",
        transliteration: "lema<strong>shal</strong>",
        englishWords: ["for example"]
    },

    {
        unit: 4,
        hebrewWord: "ירק",
        transliteration: "<strong>ye</strong>rek",
        englishWords: ["vegetable"]
    },
    {
        unit: 4,
        hebrewWord: "ירקות",
        transliteration: "yera<strong>kot</strong>",
        englishWords: ["vegetables"]
    },
    {
        unit: 4,
        hebrewWord: "בצל",
        transliteration: "ba<strong>tsal</strong>",
        englishWords: ["onion"]
    },
    {
        unit: 4,
        hebrewWord: "גזר",
        transliteration: "<strong>ge</strong>zer",
        englishWords: ["carrot"]
    },
    {
        unit: 4,
        hebrewWord: "חסה",
        transliteration: "<strong>xa</strong>sa",
        englishWords: ["lettuce"]
    },
    {
        unit: 4,
        hebrewWord: "כרוב",
        transliteration: "kruv",
        englishWords: ["cabbage"]
    },
    {
        unit: 4,
        hebrewWord: "כרובית",
        transliteration: "kruv<strong>it</strong>",
        englishWords: ["cauliflower"],
        number: Numbers.singular
    },
    {
        unit: 4,
        hebrewWord: "כרוביות",
        transliteration: "kruvi<strong>yot</strong>",
        englishWords: ["cauliflower"],
        number: Numbers.plural
    },
    {
        unit: 4,
        hebrewWord: "מלפפון",
        transliteration: "melafe<strong>fon</strong>",
        englishWords: ["cucumber"]
    },
    {
        unit: 4,
        hebrewWord: "עגבנייה",
        transliteration: "agvani'<strong>ia</strong>",
        englishWords: ["tomato"]
    },
    {
        unit: 4,
        hebrewWord: "פטרייה",
        transliteration: "pitri<strong>'ia</strong>",
        englishWords: ["mushroom"]
    },
    {
        unit: 4,
        hebrewWord: "פטריות",
        transliteration: "pitri<strong>yot</strong>",
        englishWords: ["mushrooms"]
    },
    {
        unit: 4,
        hebrewWord: "פלפל",
        transliteration: "pil<strong>pel</strong>",
        englishWords: ["pepper"]
    },
    {
        unit: 4,
        hebrewWord: "קישוא",
        transliteration: "ki<strong>shu</strong>",
        englishWords: ["zucchini"]
    },
    {
        unit: 4,
        hebrewWord: "תפוח אדמה",
        transliteration: "ta<strong>pu</strong>'ax ada<strong>ma</strong>",
        englishWords: ["potato"]
    },
    {
        unit: 4,
        hebrewWord: "תפוחי אדמה",
        transliteration: "tapu<strong>xei</strong> ada<strong>ma</strong>",
        englishWords: ["potatoes"]
    },
    {
        unit: 4,
        hebrewWord: "פטרוזיליה",
        transliteration: "petro<strong>zi</strong>lia",
        englishWords: ["parsley"]
    },
    {
        unit: 4,
        hebrewWord: "שוק",
        transliteration: "shuk",
        englishWords: ["marketplace"]
    },
    {
        unit: 4,
        hebrewWord: "שווקים",
        transliteration: "shva<strong>kim</strong>",
        englishWords: ["marketplaces"]
    },
    {
        unit: 4,
        hebrewWord: "אגורה",
        transliteration: "ago<strong>ra</strong>",
        englishWords: ["cent"]
    },
    {
        unit: 4,
        hebrewWord: "שקל",
        transliteration: "<strong>she</strong>kel",
        englishWords: ["shekel"]
    },
    {
        unit: 4,
        hebrewWord: "קונה",
        transliteration: "ko<strong>ne</strong>",
        englishWords: ["buy"],
        gender: Genders.masculine
    },
    {
        unit: 4,
        hebrewWord: "קונה",
        transliteration: "ko<strong>na</strong>",
        englishWords: ["buy"],
        gender: Genders.feminine
    },
    {
        unit: 4,
        hebrewWord: "משלם",
        transliteration: "mesha<strong>lem</strong>",
        englishWords: ["pay"],
        gender: Genders.masculine
    },
    {
        unit: 4,
        hebrewWord: "משלמת",
        transliteration: "mesha<strong>le</strong>met",
        englishWords: ["pay"],
        gender: Genders.feminine
    },
    {
        unit: 4,
        hebrewWord: "זול",
        transliteration: "zol",
        englishWords: ["cheap"],
        gender: Genders.masculine
    },
    {
        unit: 4,
        hebrewWord: "זולה",
        transliteration: "zo<strong>la</strong>",
        englishWords: ["cheap"],
        gender: Genders.feminine
    },
    {
        unit: 4,
        hebrewWord: "יקר",
        transliteration: "ya<strong>kar</strong>",
        englishWords: ["expensive"],
        gender: Genders.masculine
    },
    {
        unit: 4,
        hebrewWord: "יקרה",
        transliteration: "yeka<strong>ra</strong>",
        englishWords: ["expensive"],
        gender: Genders.feminine
    },
    {
        unit: 4,
        hebrewWord: "טעים",
        transliteration: "ta<strong>'im</strong>",
        englishWords: ["tasty"],
        gender: Genders.masculine
    },
    {
        unit: 4,
        hebrewWord: "טעימה",
        transliteration: "te'i<strong>ma</strong>",
        englishWords: ["tasty"],
        gender: Genders.feminine
    },
    {
        unit: 4,
        hebrewWord: "צריך",
        transliteration: "tsa<strong>rix</strong>",
        englishWords: ["need"],
        gender: Genders.masculine
    },
    {
        unit: 4,
        hebrewWord: "צריכה",
        transliteration: "tsri<strong>xa</strong>",
        englishWords: ["need"],
        gender: Genders.feminine
    },
    {
        unit: 4,
        hebrewWord: "תן לי",
        transliteration: "ten li",
        englishWords: ["give me"]
    },
    {
        unit: 4,
        hebrewWord: "מישהו",
        transliteration: "mishe<strong>hu</strong>",
        englishWords: ["somebody"]
    },
    {
        unit: 4,
        hebrewWord: "משהו",
        transliteration: "mashe<strong>hu</strong>",
        englishWords: ["something"]
    },
    {
        unit: 4,
        hebrewWord: "עשרים",
        transliteration: "es<strong>rim</strong>",
        englishWords: ["20", "twenty"]
    },
    {
        unit: 4,
        hebrewWord: "שלושים",
        transliteration: "shlo<strong>shim</strong>",
        englishWords: ["30", "thirty"]
    },
    {
        unit: 4,
        hebrewWord: "ארבעים",
        transliteration: "arba<strong>'im</strong>",
        englishWords: ["40", "forty"]
    },
    {
        unit: 4,
        hebrewWord: "חמישים",
        transliteration: "xami<strong>shim</strong>",
        englishWords: ["50", "fifty"]
    },
    {
        unit: 4,
        hebrewWord: "שישים",
        transliteration: "shi<strong>shim</strong>",
        englishWords: ["60", "sixty"]
    },
    {
        unit: 4,
        hebrewWord: "שבעים",
        transliteration: "shiv<strong>'im</strong>",
        englishWords: ["70", "seventy"]
    },
    {
        unit: 4,
        hebrewWord: "שמונים",
        transliteration: "shmo<strong>nim</strong>",
        englishWords: ["80", "eighty"]
    },
    {
        unit: 4,
        hebrewWord: "תשעים",
        transliteration: "tish<strong>'im</strong>",
        englishWords: ["90", "ninety"]
    },
    {
        unit: 4,
        hebrewWord: "מאה",
        transliteration: "me<strong>'a</strong>",
        englishWords: ["100", "hundred"]
    },

    {
        unit: 5,
        hebrewWord: "פרי",
        transliteration: "pri",
        englishWords: ["fruit"],
        number: Numbers.singular
    },
    {
        unit: 5,
        hebrewWord: "פירות",
        transliteration: "pe<strong>rot</strong>",
        englishWords: ["fruit"],
        number: Numbers.plural
    },
    {
        unit: 5,
        hebrewWord: "אבטיח",
        transliteration: "ava<strong>ti</strong>'ax",
        englishWords: ["watermelon"]
    },
    {
        unit: 5,
        hebrewWord: "אשכולית",
        transliteration: "eshko<strong>lit</strong>",
        englishWords: ["grapefruit"],
        number: Numbers.singular
    },
    {
        unit: 5,
        hebrewWord: "אשכוליות",
        transliteration: "eshkoli<strong>yot</strong>",
        englishWords: ["grapefruit"],
        number: Numbers.plural
    },
    {
        unit: 5,
        hebrewWord: "בננה",
        transliteration: "bana<strong>na</strong>",
        englishWords: ["banana"]
    },
    {
        unit: 5,
        hebrewWord: "לימון",
        transliteration: "li<strong>mon</strong>",
        englishWords: ["lemon"]
    },
    {
        unit: 5,
        hebrewWord: "ענבים",
        transliteration: "ana<strong>vim</strong>",
        englishWords: ["grapes"]
    },
    {
        unit: 5,
        hebrewWord: "רימון",
        transliteration: "ri<strong>mon</strong>",
        englishWords: ["pomegranate"]
    },
    {
        unit: 5,
        hebrewWord: "תאנה",
        transliteration: "te'e<strong>na</strong>",
        englishWords: ["fig"]
    },
    {
        unit: 5,
        hebrewWord: "תאנים",
        transliteration: "te'e<strong>nim</strong>",
        englishWords: ["figs"]
    },
    {
        unit: 5,
        hebrewWord: "תות",
        transliteration: "tut",
        englishWords: ["strawberry"]
    },
    {
        unit: 5,
        hebrewWord: "תפוז",
        transliteration: "ta<strong>puz</strong>",
        englishWords: ["orange"]
    },
    {
        unit: 5,
        hebrewWord: "תפוח",
        transliteration: "ta<strong>pu</strong>'ax",
        englishWords: ["apple"]
    },
    {
        unit: 5,
        hebrewWord: "התחלה",
        transliteration: "hatxa<strong>la</strong>",
        englishWords: ["beginning"]
    },
    {
        unit: 5,
        hebrewWord: "סוף",
        transliteration: "sof",
        englishWords: ["end"]
    },
    {
        unit: 5,
        hebrewWord: "טרי",
        transliteration: "ta<strong>ri</strong>",
        englishWords: ["fresh"],
        gender: Genders.masculine
    },
    {
        unit: 5,
        hebrewWord: "טרייה",
        transliteration: "tri<strong>ya</strong>",
        englishWords: ["fresh"],
        gender: Genders.feminine
    },
    {
        unit: 5,
        hebrewWord: "מתוק",
        transliteration: "ma<strong>tok</strong>",
        englishWords: ["sweet"],
        gender: Genders.masculine
    },
    {
        unit: 5,
        hebrewWord: "מתוקה",
        transliteration: "metu<strong>ka</strong>",
        englishWords: ["sweet"],
        gender: Genders.feminine
    },
    {
        unit: 5,
        hebrewWord: "כמו",
        transliteration: "kmo",
        englishWords: ["like", "as"]
    },
    {
        unit: 5,
        hebrewWord: "כמה זה עולה",
        transliteration: "Kama ze ole",
        englishWords: ["How much does it cost"]
    },

    {
        unit: 6,
        hebrewWord: "דקה",
        transliteration: "da<strong>ka</strong>",
        englishWords: ["minute"]
    },
    {
        unit: 6,
        hebrewWord: "חודש",
        transliteration: "<strong>xo</strong>desh",
        englishWords: ["month"]
    },
    {
        unit: 6,
        hebrewWord: "שנה",
        transliteration: "sha<strong>na</strong>",
        englishWords: ["year"]
    },
    {
        unit: 6,
        hebrewWord: "שנים",
        transliteration: "sha<strong>nim</strong>",
        englishWords: ["years"]
    },
    {
        unit: 6,
        hebrewWord: "שפה",
        transliteration: "sa<strong>fa</strong>",
        englishWords: ["language"]
    },
    {
        unit: 6,
        hebrewWord: "רהיט",
        transliteration: "ra<strong>hit</strong>",
        englishWords: ["furniture"]
    },
    {
        unit: 6,
        hebrewWord: "גשם",
        transliteration: "<strong>ge</strong>shem",
        englishWords: ["rain"]
    },
    {
        unit: 6,
        hebrewWord: "רוח",
        transliteration: "<strong>ru</strong>'ax",
        englishWords: ["wind"]
    },
    {
        unit: 6,
        hebrewWord: "ענן",
        transliteration: "a<strong>nan</strong>",
        englishWords: ["cloud"]
    },
    {
        unit: 6,
        hebrewWord: "עננים",
        transliteration: "ana<strong>nim</strong>",
        englishWords: ["clouds"]
    },
    {
        unit: 6,
        hebrewWord: "שלג",
        transliteration: "<strong>she</strong>leg",
        englishWords: ["snow"]
    },
    {
        unit: 6,
        hebrewWord: "עונה",
        transliteration: "o<strong>na</strong>",
        englishWords: ["season"]
    },
    {
        unit: 6,
        hebrewWord: "עונות",
        transliteration: "o<strong>not</strong>",
        englishWords: ["seasons"]
    },
    {
        unit: 6,
        hebrewWord: "סתיו",
        transliteration: "stav",
        englishWords: ["autumn", "fall"]
    },
    {
        unit: 6,
        hebrewWord: "חורף",
        transliteration: "<strong>xo</strong>ref",
        englishWords: ["winter"]
    },
    {
        unit: 6,
        hebrewWord: "אביב",
        transliteration: "a<strong>viv</strong>",
        englishWords: ["spring"]
    },
    {
        unit: 6,
        hebrewWord: "קיץ",
        transliteration: "<strong>ka</strong>yits",
        englishWords: ["summer"]
    },
    {
        unit: 6,
        hebrewWord: "חמסין",
        transliteration: "xam<strong>sin</strong>",
        englishWords: ["heat wave"]
    },
    {
        unit: 6,
        hebrewWord: "מעלה",
        transliteration: "ma'a<strong>la</strong>",
        englishWords: ["degree"]
    },
    {
        unit: 6,
        hebrewWord: "מעלות",
        transliteration: "ma'a<strong>lot</strong>",
        englishWords: ["degrees"]
    },
    {
        unit: 6,
        hebrewWord: "שמח",
        transliteration: "sa<strong>me</strong>'ax",
        englishWords: ["happy"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "שמחה",
        transliteration: "sme<strong>xa</strong>",
        englishWords: ["happy"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "עצוב",
        transliteration: "a<strong>tsuv</strong>",
        englishWords: ["sad"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "עצובה",
        transliteration: "atsu<strong>va</strong>",
        englishWords: ["sad"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "חזק",
        transliteration: "xa<strong>zak</strong>",
        englishWords: ["strong"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "חזקה",
        transliteration: "xaza<strong>ka</strong>",
        englishWords: ["strong"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "חלש",
        transliteration: "xa<strong>lash</strong>",
        englishWords: ["weak"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "חלשה",
        transliteration: "xala<strong>sha</strong>",
        englishWords: ["weak"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "נעים",
        transliteration: "na'<strong>im</strong>",
        englishWords: ["pleasant", "nice"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "נעימה",
        transliteration: "ne'i<strong>ma</strong>",
        englishWords: ["pleasant", "nice"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "יכול",
        transliteration: "ya<strong>xol</strong>",
        englishWords: ["is able", "can"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "יכולה",
        transliteration: "yexo<strong>la</strong>",
        englishWords: ["is able", "can"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "בן כמה אתה",
        transliteration: "ben kama ata",
        englishWords: ["how old are you"],
        gender: Genders.masculine
    },
    {
        unit: 6,
        hebrewWord: "בת כמה את",
        transliteration: "bat kama at",
        englishWords: ["how old are you"],
        gender: Genders.feminine
    },
    {
        unit: 6,
        hebrewWord: "יחיד",
        transliteration: "ya<strong>xid</strong>",
        englishWords: ["singular"]
    },
    {
        unit: 6,
        hebrewWord: "רבים",
        transliteration: "ra<strong>bim</strong>",
        englishWords: ["plural"]
    },
    {
        unit: 6,
        hebrewWord: "ינואר",
        transliteration: "<strong>ya</strong>nu'ar",
        englishWords: ["January"]
    },
    {
        unit: 6,
        hebrewWord: "פברואר",
        transliteration: "<strong>feb</strong>ru'ar",
        englishWords: ["February"]
    },
    {
        unit: 6,
        hebrewWord: "מרץ",
        transliteration: "merts",
        englishWords: ["March"]
    },
    {
        unit: 6,
        hebrewWord: "אפריל",
        transliteration: "ap<strong>ril</strong>",
        englishWords: ["April"]
    },
    {
        unit: 6,
        hebrewWord: "מאי",
        transliteration: "mai",
        englishWords: ["May"]
    },
    {
        unit: 6,
        hebrewWord: "יוני",
        transliteration: "<strong>yu</strong>ni",
        englishWords: ["June"]
    },
    {
        unit: 6,
        hebrewWord: "יולי",
        transliteration: "<strong>yu</strong>li",
        englishWords: ["July"]
    },
    {
        unit: 6,
        hebrewWord: "אוגוסט",
        transliteration: "<strong>o</strong>gust",
        englishWords: ["August"]
    },
    {
        unit: 6,
        hebrewWord: "ספטמבר",
        transliteration: "sep<strong>tem</strong>ber",
        englishWords: ["September"]
    },
    {
        unit: 6,
        hebrewWord: "אוקטובר",
        transliteration: "oc<strong>to</strong>ber",
        englishWords: ["October"]
    },
    {
        unit: 6,
        hebrewWord: "נובמבר",
        transliteration: "no<strong>vem</strong>ber",
        englishWords: ["November"]
    },
    {
        unit: 6,
        hebrewWord: "דצמבר",
        transliteration: "de<strong>tsem</strong>ber",
        englishWords: ["December"]
    },
    {
        unit: 6,
        hebrewWord: "מזל טוב",
        transliteration: "ma<strong>zal</strong> tov!",
        englishWords: ["congratulations", "congrats"]
    },
    {
        unit: 6,
        hebrewWord: "מעונן",
        transliteration: "me'u<strong>nan</strong>",
        englishWords: ["cloudy"]
    },
    {
        unit: 6,
        hebrewWord: "גשום",
        transliteration: "geshum",
        englishWords: ["rainy"]
    },
    {
        unit: 6,
        hebrewWord: "מושלג",
        transliteration: "mush<strong>lag</strong>",
        englishWords: ["snowy"]
    },

    {
        unit: 7,
        hebrewWord: "גן",
        transliteration: "gan",
        englishWords: ["kindergarten"]
    },
    {
        unit: 7,
        hebrewWord: "גנן",
        transliteration: "ga<strong>nan</strong>",
        englishWords: ["kindergarten teacher"],
        gender: Genders.masculine
    },
    {
        unit: 7,
        hebrewWord: "גננת",
        transliteration: "ga<strong>ne</strong>net",
        englishWords: ["kindergarten teacher"],
        gender: Genders.feminine
    },
    {
        unit: 7,
        hebrewWord: "מקום",
        transliteration: "ma<strong>kom</strong>",
        englishWords: ["place", "space"],
        gender: Genders.masculine
    },
    {
        unit: 7,
        hebrewWord: "מקומות",
        transliteration: "meko<strong>mot</strong>",
        englishWords: ["places", "spaces"],
        gender: Genders.masculine
    },
    {
        unit: 7,
        hebrewWord: "דבר",
        transliteration: "da<strong>var</strong>",
        englishWords: ["thing"]
    },
    {
        unit: 7,
        hebrewWord: "דברים",
        transliteration: "dva<strong>rim</strong>",
        englishWords: ["things"]
    },
    {
        unit: 7,
        hebrewWord: "צבע",
        transliteration: "<strong>tse</strong>va",
        englishWords: ["color"]
    },
    {
        unit: 7,
        hebrewWord: "צבעים",
        transliteration: "tsva'<strong>im</strong>",
        englishWords: ["colors"]
    },
    {
        unit: 7,
        hebrewWord: "סיפור",
        transliteration: "si<strong>pur</strong>",
        englishWords: ["story"]
    },
    {
        unit: 7,
        hebrewWord: "מתלבש",
        transliteration: "mitla<strong>besh</strong>",
        englishWords: ["get dressed"],
        gender: Genders.masculine
    },
    {
        unit: 7,
        hebrewWord: "מתלבשת",
        transliteration: "mitla<strong>be</strong>shet",
        englishWords: ["get dressed"],
        gender: Genders.feminine
    },
    {
        unit: 7,
        hebrewWord: "מספר",
        transliteration: "mesa<strong>per</strong>",
        englishWords: ["tell"],
        gender: Genders.masculine
    },
    {
        unit: 7,
        hebrewWord: "מספרת",
        transliteration: "mesa<strong>pe</strong>ret",
        englishWords: ["tell"],
        gender: Genders.feminine
    },
    {
        unit: 7,
        hebrewWord: "משחק",
        transliteration: "mesa<strong>xek</strong>",
        englishWords: ["play"]
    },
    {
        unit: 7,
        hebrewWord: "זז",
        transliteration: "zaz",
        englishWords: ["move"],
        gender: Genders.masculine
    },
    {
        unit: 7,
        hebrewWord: "זזה",
        transliteration: "za<strong>za</strong>",
        englishWords: ["move"],
        gender: Genders.feminine
    },
    {
        unit: 7,
        hebrewWord: "טס",
        transliteration: "tas",
        englishWords: ["fly"]
    },
    {
        unit: 7,
        hebrewWord: "נח",
        transliteration: "nax",
        englishWords: ["rest"]
    },
    {
        unit: 7,
        hebrewWord: "צם",
        transliteration: "tsam",
        englishWords: ["fast"]
    },
    {
        unit: 7,
        hebrewWord: "רב",
        transliteration: "rav",
        englishWords: ["quarrel", "fight"]
    },
    {
        unit: 7,
        hebrewWord: "מוקדם",
        transliteration: "muk<strong>dam</strong>",
        englishWords: ["early"]
    },
    {
        unit: 7,
        hebrewWord: "מאוחר",
        transliteration: "me'u<strong>xar</strong>",
        englishWords: ["late"]
    },
    {
        unit: 7,
        hebrewWord: "לבד",
        transliteration: "le<strong>vad</strong>",
        englishWords: ["alone"]
    },
    {
        unit: 7,
        hebrewWord: "ביחד",
        transliteration: "be-<strong>ya</strong>xad",
        englishWords: ["together"]
    },
    {
        unit: 7,
        hebrewWord: "לפני",
        transliteration: "lif<strong>ney</strong>",
        englishWords: ["before"]
    },
    {
        unit: 7,
        hebrewWord: "אחרי",
        transliteration: "axa<strong>rei</strong>",
        englishWords: ["after"]
    },
    {
        unit: 7,
        hebrewWord: "תמיד",
        transliteration: "ta<strong>mid</strong>",
        englishWords: ["always"]
    },
    {
        unit: 7,
        hebrewWord: "לפעמים",
        transliteration: "li-f'a<strong>mim</strong>",
        englishWords: ["sometimes"]
    },
    {
        unit: 7,
        hebrewWord: "הכי",
        transliteration: "ha<strong>xi</strong>",
        englishWords: ["the most"]
    },

    {
        unit: 8,
        hebrewWord: "בגד",
        transliteration: "<strong>be</strong>gged",
        englishWords: ["garment"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "בגדים",
        transliteration: "bega<strong>dim</strong>",
        englishWords: ["garments", "clothes"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "ארון",
        transliteration: "a<strong>ron</strong>",
        englishWords: ["cupboard", "closet"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "ארונות",
        transliteration: "aro<strong>not</strong>",
        englishWords: ["cupboards", "closets"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "סוודר",
        transliteration: "<strong>sve</strong>der",
        englishWords: ["sweater"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "מעיל",
        transliteration: "me'<strong>il</strong>",
        englishWords: ["coat"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "מכנסיים",
        transliteration: "mixna<strong>sa</strong>yim",
        englishWords: ["pants", "trousers"],
        gender: Genders.masculine,
        number: Numbers.plural
    },
    {
        unit: 8,
        hebrewWord: "חולצה",
        transliteration: "xul<strong>tsa</strong>",
        englishWords: ["shirt"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "שמלה",
        transliteration: "sim<strong>la</strong>",
        englishWords: ["dress"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "חצאית",
        transliteration: "xatsa'<strong>it</strong>",
        englishWords: ["skirt"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "חצאיות",
        transliteration: "xatsa'i<strong>yot</strong>",
        englishWords: ["skirts"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "חנות",
        transliteration: "xa<strong>nut</strong>",
        englishWords: ["store"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "חנויות",
        transliteration: "xanu<strong>yot</strong>",
        englishWords: ["stores"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "מודד",
        transliteration: "mo<strong>ded</strong>",
        englishWords: ["try on"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "מודדת",
        transliteration: "mo<strong>de</strong>det",
        englishWords: ["try on"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "פונה",
        transliteration: "po'<strong>ne</strong>",
        englishWords: ["turn"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "פונה",
        transliteration: "po<strong>na</strong>",
        englishWords: ["turn"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "עונה",
        transliteration: "o'<strong>ne</strong>",
        englishWords: ["answer"]
    },
    {
        unit: 8,
        hebrewWord: "עולה",
        transliteration: "o'<strong>le</strong>",
        englishWords: ["rise", "go up"]
    },
    {
        unit: 8,
        hebrewWord: "מתאים",
        transliteration: "mat'<strong>im</strong>",
        englishWords: ["fit", "be appropriate"],
        gender: Genders.masculine
    },
    {
        unit: 8,
        hebrewWord: "מתאימה",
        transliteration: "mat'i<strong>ma</strong>",
        englishWords: ["fit", "be appropriate"],
        gender: Genders.feminine
    },
    {
        unit: 8,
        hebrewWord: "המון",
        transliteration: "ha<strong>mon</strong>",
        englishWords: ["a lot", "many"]
    },
    {
        unit: 8,
        hebrewWord: "מידיי",
        transliteration: "mi<strong>dai</strong>",
        englishWords: ["too", "overly"]
    },

    {
        unit: 9,
        hebrewWord: "רכבת",
        transliteration: "ra<strong>ke</strong>vet",
        englishWords: ["train"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "רכבות",
        transliteration: "raka<strong>vo</strong>t",
        englishWords: ["trains"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "מונית",
        transliteration: "mo<strong>nit</strong>",
        englishWords: ["taxi", "cab"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "מוניות",
        transliteration: "moni<strong>yot</strong>",
        englishWords: ["taxis", "cabs"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "אוטובוס",
        transliteration: "oto<strong>bus</strong>",
        englishWords: ["bus"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "מטוס",
        transliteration: "ma<strong>tos</strong>",
        englishWords: ["airplane", "plane"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "מכונית",
        transliteration: "mexo<strong>nit</strong>",
        englishWords: ["car"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "מכוניות",
        transliteration: "mexoni<strong>yot</strong>",
        englishWords: ["cars"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "תחנה",
        transliteration: "taxa<strong>na</strong>",
        englishWords: ["station", "stop"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "כרטיס",
        transliteration: "kar<strong>tis</strong>",
        englishWords: ["ticket"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "פקיד",
        transliteration: "pa<strong>kid</strong>",
        englishWords: ["clerk"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "פקידים",
        transliteration: "pki<strong>dim</strong>",
        englishWords: ["clerks"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "קופה",
        transliteration: "ku<strong>pa</strong>",
        englishWords: ["checkout", "cash register"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "מלון",
        transliteration: "ma<strong>lon</strong>",
        englishWords: ["hotel"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "מלונות",
        transliteration: "melo<strong>not</strong>",
        englishWords: ["hotels"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "רציף",
        transliteration: "ra<strong>tsif</strong>",
        englishWords: ["platform"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "נהג",
        transliteration: "na<strong>hag</strong>",
        englishWords: ["driver"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "נהגת",
        transliteration: "nahaget",
        englishWords: ["driver"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "מגיע",
        transliteration: "ma<strong>gi</strong>’a",
        englishWords: ["arrive"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "מגיעה",
        transliteration: "magi<strong>’a</strong>",
        englishWords: ["arrive"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "יושב",
        transliteration: "yo<strong>shev</strong>",
        englishWords: ["sit"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "יושבת",
        transliteration: "yo<strong>she</strong>vet",
        englishWords: ["sit"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "יורד",
        transliteration: "yo<strong>red</strong>",
        englishWords: ["descend", "go down"],
    },
    {
        unit: 9,
        hebrewWord: "יוצא",
        transliteration: "yo<strong>tse</strong>",
        englishWords: ["go out", "exit"],
    },
    {
        unit: 9,
        hebrewWord: "לוקח",
        transliteration: "lo<strong>ke</strong>’ax",
        englishWords: ["take"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "לוקחת",
        transliteration: "lo<strong>ka</strong>xat",
        englishWords: ["take"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "עוצר",
        transliteration: "o<strong>tser</strong>",
        englishWords: ["stop"],
    },
    {
        unit: 9,
        hebrewWord: "מרכזי",
        transliteration: "merka<strong>zi</strong>",
        englishWords: ["central"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "מרכזית",
        transliteration: "merka<strong>zit</strong>",
        englishWords: ["central"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "רחוק",
        transliteration: "ra<strong>xok</strong>",
        englishWords: ["far"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "רחוקה",
        transliteration: "rexo<strong>ka</strong>",
        englishWords: ["far"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "קרוב",
        transliteration: "ka<strong>rov</strong>",
        englishWords: ["close", "near"],
        gender: Genders.masculine
    },
    {
        unit: 9,
        hebrewWord: "קרובה",
        transliteration: "kro<strong>va</strong>",
        englishWords: ["close", "near"],
        gender: Genders.feminine
    },
    {
        unit: 9,
        hebrewWord: "ישר",
        transliteration: "yashar",
        englishWords: ["straight"],
    },
    {
        unit: 9,
        hebrewWord: "ימינה",
        transliteration: "ya<strong>mi</strong>na",
        englishWords: ["to the right"],
    },
    {
        unit: 9,
        hebrewWord: "שמאלה",
        transliteration: "<strong>smo</strong>la",
        englishWords: ["to the left"],
    },
    {
        unit: 9,
        hebrewWord: "כאן",
        transliteration: "kan",
        englishWords: ["here"],
    },
    {
        unit: 9,
        hebrewWord: "בעוד",
        transliteration: "be-<strong>od</strong>",
        englishWords: ["In a"],
    },
    {
        unit: 9,
        hebrewWord: "הבא",
        transliteration: "ha-<strong>ba</strong>",
        englishWords: ["next", "coming"],
    },
    {
        unit: 9,
        hebrewWord: "אדוני",
        transliteration: "ado<strong>ni</strong>",
        englishWords: ["Mr", "sir"],
    },

    {
        unit: 10,
        hebrewWord: "טיול",
        transliteration: "ti<strong>yul</strong>",
        englishWords: ["hike", "walk"],
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "מפה",
        transliteration: "ma<strong>pa</strong>",
        englishWords: "map"
    },
    {
        unit: 10,
        hebrewWord: "מצלמה",
        transliteration: "matslema",
        englishWords: "camera"
    },
    {
        unit: 10,
        hebrewWord: "מדריך",
        transliteration: "mad<strong>rix</strong>",
        englishWords: "guide"
    },
    {
        unit: 10,
        hebrewWord: "מסגד",
        transliteration: "mis<strong>gad</strong>",
        englishWords: "mosque",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "כנסייה",
        transliteration: "knesi<strong>ya</strong>",
        englishWords: "church"
    },
    {
        unit: 10,
        hebrewWord: "גבר",
        transliteration: "<strong>ge</strong>ver",
        englishWords: "man",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "גברים",
        transliteration: "gva<strong>rim</strong>",
        englishWords: "men",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "תייר",
        transliteration: "ta<strong>yar</strong>",
        englishWords: "tourist",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "תיירת",
        transliteration: "ta<strong>ye</strong>ret",
        englishWords: "tourist",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "פתק",
        transliteration: "<strong>pe</strong>tek",
        englishWords: "note",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "פתקים",
        transliteration: "pta<strong>kim</strong>",
        englishWords: "notes",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "דת",
        transliteration: "dat",
        englishWords: "religion",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "דתות",
        transliteration: "da<strong>tot</strong>",
        englishWords: "religions",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "חשוב",
        transliteration: "xa<strong>shuv</strong>",
        englishWords: "important",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "חשובה",
        transliteration: "xashu<strong>va</strong>",
        englishWords: "important",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "קדוש",
        transliteration: "ka<strong>dosh</strong>",
        englishWords: "holy",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "קדושה",
        transliteration: "kdo<strong>sha</strong>",
        englishWords: "holy",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "מעניין",
        transliteration: "me'an<strong>yen</strong>",
        englishWords: "interesting",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "מעניינת",
        transliteration: "me'an<strong>ye</strong>net",
        englishWords: "interesting",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "דתי",
        transliteration: "da<strong>ti</strong>",
        englishWords: "religious",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "דתייה",
        transliteration: "dati<strong>ya</strong>",
        englishWords: "religious",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "חילוני",
        transliteration: "xilo<strong>ni</strong>",
        englishWords: "secular",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "חילונית",
        transliteration: "xilo<strong>nit</strong>",
        englishWords: "secular",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "יהודי",
        transliteration: "yehu<strong>di</strong>",
        englishWords: ["Jew", "Jewish"],
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "יהודייה",
        transliteration: "yehudi<strong>ya</strong>",
        englishWords: ["Jew", "Jewish"],
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "נוצרי",
        transliteration: "no<strong>tsri</strong>",
        englishWords: "Christian",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "נוצרייה",
        transliteration: "notsri<strong>ya</strong>",
        englishWords: "Christian",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "מוסלמי",
        transliteration: "musle<strong>mi</strong>",
        englishWords: "Muslim",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "מוסלמית",
        transliteration: "musle<strong>mit</strong>",
        englishWords: "Muslim",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "מתפלל",
        transliteration: "mitpa<strong>lel</strong>",
        englishWords: "pray",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "מתפללת",
        transliteration: "mitpa<strong>le</strong>let",
        englishWords: "pray",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "להתפלל",
        transliteration: "lehitpa<strong>lel</strong>",
        englishWords: "to pray"
    },
    {
        unit: 10,
        hebrewWord: "מצלם",
        transliteration: "metsa<strong>lem</strong> (verb)",
        englishWords: "photograph",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "מצלמת",
        transliteration: "metsa<strong>le</strong>met (verb)",
        englishWords: "photograph",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "לצלם",
        transliteration: "letsa<strong>lem</strong>",
        englishWords: "to photograph"
    },
    {
        unit: 10,
        hebrewWord: "מסדר",
        transliteration: "mesader",
        englishWords: ["organize", "put in order"]
    },
    {
        unit: 10,
        hebrewWord: "מטייל",
        transliteration: "metayel",
        englishWords: ["travel", "go for a walk"]
    },
    {
        unit: 10,
        hebrewWord: "מנגן",
        transliteration: "menagen (music)",
        englishWords: "play"
    },
    {
        unit: 10,
        hebrewWord: "כולם",
        transliteration: "ku<strong>lam</strong>",
        englishWords: ["everybody", "everyone"]
    },
    {
        unit: 10,
        hebrewWord: "בערך",
        transliteration: "be'<strong>er</strong>ex",
        englishWords: ["about", "approximately"]
    },
    {
        unit: 10,
        hebrewWord: "עיר בירה",
        transliteration: "ir bira",
        englishWords: "capital city"
    },
    {
        unit: 10,
        hebrewWord: "פעם",
        transliteration: "<strong>pa</strong>'am",
        englishWords: ["once", "time"],
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "פעמים",
        transliteration: "pe'a<strong>mim</strong>",
        englishWords: "times",
        gender: Genders.feminine
    },
    {
        unit: 10,
        hebrewWord: "טבע",
        transliteration: "<strong>te</strong>va",
        englishWords: "nature"
    },
    {
        unit: 10,
        hebrewWord: "מדבר",
        transliteration: "mid<strong>bar</strong>",
        englishWords: "desert",
        gender: Genders.masculine
    },
    {
        unit: 10,
        hebrewWord: "מדבריות",
        transliteration: "midbari<strong>yot</strong>",
        englishWords: "deserts",
        gender: Genders.masculine
    },

    {
        unit: 11,
        hebrewWord: "תפריט",
        transliteration: "taf<strong>rit</strong>",
        englishWords: ["menu"]
    },
    {
        unit: 11,
        hebrewWord: "צלחת",
        transliteration: "tsa<strong>la</strong>xat",
        englishWords: ["plate"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "צלחות",
        transliteration: "tsala<strong>xot</strong>",
        englishWords: ["plates"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "כוס",
        transliteration: "kos",
        englishWords: ["glass", "cup"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "כוסות",
        transliteration: "ko<strong>sot</strong>",
        englishWords: ["glasses", "cups"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "מזלג",
        transliteration: "maz<strong>leg</strong>",
        englishWords: ["fork"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "מזלגות",
        transliteration: "mazle<strong>got</strong>",
        englishWords: ["forks"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "סכין",
        transliteration: "sa<strong>kin</strong>",
        englishWords: ["knife"]
    },
    {
        unit: 11,
        hebrewWord: "סכינים",
        transliteration: "saki<strong>nim</strong>",
        englishWords: ["knives"]
    },
    {
        unit: 11,
        hebrewWord: "עוף",
        transliteration: "'off",
        englishWords: ["chicken"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "עופות",
        transliteration: "of<strong>ot</strong>",
        englishWords: ["chickens"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "אורז",
        transliteration: "<strong>o</strong>rez",
        englishWords: ["rice"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "גבינה",
        transliteration: "gvi<strong>na</strong>",
        englishWords: ["cheese"]
    },
    {
        unit: 11,
        hebrewWord: "מסביר",
        transliteration: "mas<strong>bir</strong>",
        englishWords: ["explain"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "מסבירה",
        transliteration: "masbi<strong>ra</strong>",
        englishWords: ["explain"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "להסביר",
        transliteration: "lehas<strong>bir</strong>",
        englishWords: ["to explain"]
    },
    {
        unit: 11,
        hebrewWord: "מסכים",
        transliteration: "maskim",
        englishWords: ["agree"]
    },
    {
        unit: 11,
        hebrewWord: "מאמין",
        transliteration: "ma’amin",
        englishWords: ["believe"]
    },
    {
        unit: 11,
        hebrewWord: "מפסיק",
        transliteration: "mafsik",
        englishWords: ["stop"]
    },
    {
        unit: 11,
        hebrewWord: "ממשיך",
        transliteration: "mamshix",
        englishWords: ["continue"]
    },
    {
        unit: 11,
        hebrewWord: "מפריע",
        transliteration: "mafri’a",
        englishWords: ["disturb"]
    },
    {
        unit: 11,
        hebrewWord: "מחליט",
        transliteration: "maxlit",
        englishWords: ["decide"]
    },
    {
        unit: 11,
        hebrewWord: "ממליץ",
        transliteration: "mamlits",
        englishWords: ["recommend"]
    },
    {
        unit: 11,
        hebrewWord: "חוגג",
        transliteration: "xo<strong>geg</strong>",
        englishWords: ["celebrate"]
    },
    {
        unit: 11,
        hebrewWord: "מעשן",
        transliteration: "me’a<strong>shen</strong>",
        englishWords: ["smoke"]
    },
    {
        unit: 11,
        hebrewWord: "מתרגש",
        transliteration: "mitra<strong>gesh</strong>",
        englishWords: ["get excited"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "מתרגשת",
        transliteration: "mitra<strong>ge</strong>shet",
        englishWords: ["get excited"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "נקי",
        transliteration: "na<strong>ki</strong>",
        englishWords: ["clean"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "נקייה",
        transliteration: "neki<strong>ya</strong>",
        englishWords: ["clean"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "מלוכלך",
        transliteration: "melux<strong>lax</strong>",
        englishWords: ["dirty"],
        gender: Genders.masculine
    },
    {
        unit: 11,
        hebrewWord: "מלוכלכת",
        transliteration: "melux<strong>le</strong>xet",
        englishWords: ["dirty"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "מנה ראשונה",
        transliteration: "mana risho<strong>na</strong>",
        englishWords: ["first course"]
    },
    {
        unit: 11,
        hebrewWord: "מנה עיקרית",
        transliteration: "mana ika<strong>rit</strong>",
        englishWords: ["main course"]
    },
    {
        unit: 11,
        hebrewWord: "מנה אחרונה",
        transliteration: "mana axro<strong>na</strong>",
        englishWords: ["final course", "dessert"]
    },
    {
        unit: 11,
        hebrewWord: "קינוח",
        transliteration: "ki<strong>nu</strong>’ax",
        englishWords: ["dessert"]
    },
    {
        unit: 11,
        hebrewWord: "תוספת",
        transliteration: "to<strong>se</strong>fet",
        englishWords: ["seconds", "side dish"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "תוספות",
        transliteration: "tosa<strong>fot</strong>",
        englishWords: ["seconds", "side dishes"],
        gender: Genders.feminine
    },
    {
        unit: 11,
        hebrewWord: "במקום",
        transliteration: "bimkom",
        englishWords: ["instead"]
    },
    {
        unit: 11,
        hebrewWord: "בתאבון",
        transliteration: "be-te’a<strong>von</strong>",
        englishWords: ["bon appetite"]
    },

    {
        unit: 'travel',
        hebrewWord: 'אחר צהריים טובים',
        transliteration: 'a<strong>xar</strong> tsoho<strong>ra</strong>yim to<strong>vim</strong>',
        englishWords: ['Good Afternoon']
    },
    {
        unit: 'travel',
        hebrewWord: 'מה קורה',
        transliteration: 'mah kor<strong>eh</strong>',
        englishWords: ['What\'s happening']
    },
    {
        unit: 'travel',
        hebrewWord: 'איך קוראים לך',
        transliteration: 'ech kor<strong>im</strong> lexah?',
        englishWords: ['What is your name']
    },
    {
        unit: 'travel',
        hebrewWord: 'כמה',
        transliteration: 'kamah',
        englishWords: ['How much']
    },
    {
        unit: 'travel',
        hebrewWord: 'מזומן',
        transliteration: 'mezu<strong>man</strong>',
        englishWords: ['Cash']
    },
    {
        unit: 'travel',
        hebrewWord: 'אשראי',
        transliteration: 'ash<strong>ra</strong>’i',
        englishWords: ['Credit']
    },
    {
        unit: 'travel',
        hebrewWord: 'אלף',
        transliteration: '<strong>el</strong>ef',
        englishWords: ['1000']
    },
    {
        unit: 'travel',
        hebrewWord: 'יותר',
        transliteration: 'yo<strong>ter</strong>',
        englishWords: ['more']
    },
    {
        unit: 'travel',
        hebrewWord: 'פחות',
        transliteration: 'pa<strong>xot</strong>',
        englishWords: ['less']
    },
    {
        unit: 'travel',
        hebrewWord: 'שדה התעופה',
        transliteration: 'sde hate`u<strong>fah</strong>',
        englishWords: ['airport']
    },
    {
        unit: 'travel',
        hebrewWord: 'רחוב',
        transliteration: 're<strong>xov</strong>',
        englishWords: ['street']
    },
    {
        unit: 'travel',
        hebrewWord: 'שמאל',
        transliteration: 'smol',
        englishWords: ['left']
    },
    {
        unit: 'travel',
        hebrewWord: 'ימין',
        transliteration: 'ya<strong>min</strong>',
        englishWords: ['right']
    },
    {
        unit: 'travel',
        hebrewWord: 'לכיוון',
        transliteration: 'leki<strong>vun</strong>',
        englishWords: ['towards']
    },
    {
        unit: 'travel',
        hebrewWord: 'צומת',
        transliteration: '<strong>tso</strong>met',
        englishWords: ['intersection']
    },
    {
        unit: 'travel',
        hebrewWord: 'צפון',
        transliteration: 'tsa<strong>fon</strong>',
        englishWords: ['north']
    },
    {
        unit: 'travel',
        hebrewWord: 'דרום',
        transliteration: 'da<strong>rom</strong>',
        englishWords: ['south']
    },
    {
        unit: 'travel',
        hebrewWord: 'מזרח',
        transliteration: 'miz<strong>rax</strong>',
        englishWords: ['east']
    },
    {
        unit: 'travel',
        hebrewWord: 'מערב',
        transliteration: 'ma`a<strong>rav</strong>',
        englishWords: ['west']
    },
    {
        unit: 'travel',
        hebrewWord: 'ארוחת בוקר',
        transliteration: 'aruxat boker',
        englishWords: ['breakfast']
    },
    {
        unit: 'travel',
        hebrewWord: 'ארוחת צהריים',
        transliteration: 'aruxat tsohorayim',
        englishWords: ['lunch']
    },
    {
        unit: 'travel',
        hebrewWord: 'ארוחת ערב',
        transliteration: 'aruxat erev',
        englishWords: ['supper']
    },
    {
        unit: 'travel',
        hebrewWord: 'בקר',
        transliteration: 'baqar',
        englishWords: ['beef']
    },
    {
        unit: 'travel',
        hebrewWord: 'ביצה',
        transliteration: 'beitsah',
        englishWords: ['eggs']
    },
    {
        unit: 'travel',
        hebrewWord: 'לחם',
        transliteration: 'lexem',
        englishWords: ['bread']
    },
    {
        unit: 'travel',
        hebrewWord: 'טוסט',
        transliteration: 'tost',
        englishWords: ['toast']
    },
    {
        unit: 'travel',
        hebrewWord: 'נודלז',
        transliteration: 'nudelz',
        englishWords: ['noodles']
    },
    {
        unit: 'travel',
        hebrewWord: 'סיימתי',
        transliteration: 'siamti',
        englishWords: ['I\'m finished']
    },
    {
        unit: 'travel',
        hebrewWord: 'שרותים',
        transliteration: 'sheru<strong>tim</strong>',
        englishWords: ['bathroom']
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
