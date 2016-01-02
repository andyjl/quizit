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
        unit: 3,
        hebrewWord: "שוכח",
        transliteration: "shocheach",
        englishWords: ["forget"],
    },
    {
        unit: 3,
        hebrewWord: "רושם",
        transliteration: "roshem",
        englishWords: ["make a list"],
    },
    {
        unit: 3,
        hebrewWord: "עוזב",
        transliteration: "ozev",
        englishWords: ["leave"],
    },
    {
        unit: 3,
        hebrewWord: "צובע",
        transliteration: "tsovea",
        englishWords: ["paint"],
    },
    {
        unit: 3,
        hebrewWord: "בורח",
        transliteration: "boreach",
        englishWords: ["escape"],
    },
    {
        unit: 3,
        hebrewWord: "מתאהב",
        transliteration: "mitahev",
        englishWords: ["fall in love"],
    },
    {
        unit: 3,
        hebrewWord: "עשיר",
        transliteration: "ashir",
        englishWords: ["wealthy", "rich"],
    },
    {
        unit: 3,
        hebrewWord: "שטיח",
        transliteration: "sha<strong>ti</strong>ach",
        englishWords: ["rug"],
    },
    {
        unit: 3,
        hebrewWord: "ציור",
        transliteration: "tsi<strong>yur</strong>",
        englishWords: ["painting"],
    },
    {
        unit: 3,
        hebrewWord: "סגנון",
        transliteration: "sig<strong>non</strong>",
        englishWords: ["style"],
    },
    {
        unit: 3,
        hebrewWord: "אריה",
        transliteration: "ari<strong>eh</strong>",
        englishWords: ["lion"],
    },
    {
        unit: 3,
        hebrewWord: "שער",
        transliteration: "<strong>sha</strong>-ar",
        englishWords: ["gate"],
    },
    {
        unit: 3,
        hebrewWord: "משיח",
        transliteration: "mashiach",
        englishWords: ["Messiah"],
    },
    {
        unit: 3,
        hebrewWord: "זבוב",
        transliteration: "zvuv",
        englishWords: ["fly"],
    },
    {
        unit: 3,
        hebrewWord: "לכלוך",
        transliteration: "lich<strong>luch</strong>",
        englishWords: ["dirt", "filth"],
    },
    {
        unit: 3,
        hebrewWord: "חברה",
        transliteration: "chev<strong>rah</strong>",
        englishWords: ["company"],
    },
    {
        unit: 3,
        hebrewWord: "חומה",
        transliteration: "chomah",
        englishWords: ["wall"],
    },
    {
        unit: 3,
        hebrewWord: "ספרות",
        transliteration: "sif<strong>rut</strong>",
        englishWords: ["literature"],
    },
    {
        unit: 3,
        hebrewWord: "צלחת",
        transliteration: "tsalaxat",
        englishWords: ["plate"],
    },
    {
        unit: 3,
        hebrewWord: "כרית",
        transliteration: "ca<strong>rit</strong>",
        englishWords: ["pillow"],
    },
    {
        unit: 3,
        hebrewWord: "מפית",
        transliteration: "ma<strong>pit</strong>",
        englishWords: ["napkin"],
    },
    {
        unit: 3,
        hebrewWord: "כפית",
        transliteration: "ka<strong>pit</strong>",
        englishWords: ["spoon"],
    },
    {
        unit: 3,
        hebrewWord: "משמעות",
        transliteration: "mashma<strong>ut</strong>",
        englishWords: ["meaning"],
    },
    {
        unit: 3,
        hebrewWord: "נשיקה",
        transliteration: "neshi<strong>kah</strong>",
        englishWords: ["kiss"],
    },

    {
        unit: 4,
        hebrewWord: "אוסף",
        transliteration: "os<strong>ef</strong>",
        englishWords: ["collect"],
    },
    {
        unit: 4,
        hebrewWord: "מלמד",
        transliteration: "mela<strong>med</strong>",
        englishWords: ["teach"],
    },
    {
        unit: 4,
        hebrewWord: "מבקש",
        transliteration: "meva<strong>kesh</strong>",
        englishWords: ["ask"],
    },
    {
        unit: 4,
        hebrewWord: "מצלם",
        transliteration: "metsalem",
        englishWords: ["photograph"],
    },
    {
        unit: 4,
        hebrewWord: "מפסיק",
        transliteration: "mafsik",
        englishWords: ["stop"],
    },
    {
        unit: 4,
        hebrewWord: "מצליח",
        transliteration: "matsliach",
        englishWords: ["succeed"],
    },
    {
        unit: 4,
        hebrewWord: "נהרג",
        transliteration: "nehe<strong>rag</strong>",
        englishWords: ["be killed"],
    },
    {
        unit: 4,
        hebrewWord: "מדעי",
        transliteration: "mada-<strong>i</strong>",
        englishWords: ["scientific"],
    },
    {
        unit: 4,
        hebrewWord: "מוסרי",
        transliteration: "musa<strong>ri</strong>",
        englishWords: ["ethical"],
    },
    {
        unit: 4,
        hebrewWord: "מצחיק",
        transliteration: "mats<strong>chik</strong>",
        englishWords: ["funny"],
    },
    {
        unit: 4,
        hebrewWord: "הפסקה",
        transliteration: "hafse<strong>kah</strong>",
        englishWords: ["break"],
    },
    {
        unit: 4,
        hebrewWord: "בול",
        transliteration: "bul",
        englishWords: ["stamp"],
    },
    {
        unit: 4,
        hebrewWord: "מחקר",
        transliteration: "<strong>mech</strong>kar",
        englishWords: ["research"],
    },
    {
        unit: 4,
        hebrewWord: "אזרח",
        transliteration: "ez<strong>rach</strong>",
        englishWords: ["citizen"],
    },
    {
        unit: 4,
        hebrewWord: "פסל",
        transliteration: "<strong>pe</strong>sel",
        englishWords: ["statue"],
    },
    {
        unit: 4,
        hebrewWord: "מחנה",
        transliteration: "macha<strong>ne</strong>",
        englishWords: ["camp"],
    },
    {
        unit: 4,
        hebrewWord: "ראש מדינה",
        transliteration: "rosh medinah",
        englishWords: ["head of state"],
    },
    {
        unit: 4,
        hebrewWord: "תמונה",
        transliteration: "tmun<strong>ah</strong>",
        englishWords: ["picture", "photo", "photograph"],
    },
    {
        unit: 4,
        hebrewWord: "דרישת שלום",
        transliteration: "drishat shalom",
        englishWords: ["regards"],
    },
    {
        unit: 4,
        hebrewWord: "שואה",
        transliteration: "shoah",
        englishWords: ["holocaust"],
    },
    {
        unit: 4,
        hebrewWord: "תעודה",
        transliteration: "te-u<strong>da</strong>",
        englishWords: ["document"],
    },
    {
        unit: 4,
        hebrewWord: "מטרה",
        transliteration: "mata<strong>rah</strong>",
        englishWords: ["goal"],
    },
    {
        unit: 4,
        hebrewWord: "ציונות",
        transliteration: "tsi-yonut",
        englishWords: ["Zionism"],
    },
    {
        unit: 4,
        hebrewWord: "יצירה",
        transliteration: "yetsi<strong>ra</strong>",
        englishWords: ["creation"],
    },
    {
        unit: 4,
        hebrewWord: "הצגה",
        transliteration: "hatsagah",
        englishWords: ["play", "show", "performance"],
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
        unit: 'mine2',
        hebrewWord: "בין",
        transliteration: "ben",
        englishWords: ["between"],
    },
    {
        unit: 'mine2',
        hebrewWord: "כדי",
        transliteration: "kedei",
        englishWords: ["in order to"],
    },
    {
        unit: 'mine2',
        hebrewWord: "פסקה",
        transliteration: "piskah",
        englishWords: ["paragraph"],
    },
    {
        unit: 'mine2',
        hebrewWord: "בוא נלך",
        transliteration: "bo nelech",
        englishWords: ["let's go"],
    },
    {
        unit: 'mine2',
        hebrewWord: "אל תדאג",
        transliteration: "al tidag",
        englishWords: ["don't worry"],
    },
    {
        unit: 'mine2',
        hebrewWord: "שוכב",
        transliteration: "shochev",
        englishWords: ["lie down"],
    },
    {
        unit: 'mine2',
        hebrewWord: "סכנה",
        transliteration: "sakana",
        englishWords: ["danger"],
    },
    {
        unit: 'mine2',
        hebrewWord: "תרבות",
        transliteration: "tarbut",
        englishWords: ["culture"],
    },
    {
        unit: 'mine2',
        hebrewWord: "עוזרת",
        transliteration: "ozeret",
        englishWords: ["help"],
    },
    {
        unit: 'mine2',
        hebrewWord: "שוחה",
        transliteration: "so<strong>che</strong>",
        englishWords: ["swim"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מעשן",
        transliteration: "me-ashen",
        englishWords: ["smoke"],
    },
    {
        unit: 'mine2',
        hebrewWord: "שירות",
        transliteration: "sheirut",
        englishWords: ["service"],
    },
    {
        unit: 'mine2',
        hebrewWord: "כפר",
        transliteration: "kfar",
        englishWords: ["village"],
    },
    {
        unit: 'mine2',
        hebrewWord: "תרמיל גב",
        transliteration: "tarmil gav",
        englishWords: ["backpack"],
    },
    {
        unit: 'mine2',
        hebrewWord: "שק שינה",
        transliteration: "sak shena",
        englishWords: ["sleeping bag"],
    },
    {
        unit: 'mine2',
        hebrewWord: "שק",
        transliteration: "sak",
        englishWords: ["bag"],
    },
    {
        unit: 'mine2',
        hebrewWord: "פנקס",
        transliteration: "pinkas",
        englishWords: ["notepad"],
    },
    {
        unit: 'mine2',
        hebrewWord: "רשימה",
        transliteration: "reshima",
        englishWords: ["list"],
    },
    {
        unit: 'mine2',
        hebrewWord: "כתובת",
        transliteration: "ktovet",
        englishWords: ["address"],
    },
    {
        unit: 'mine2',
        hebrewWord: "גלויה",
        transliteration: "glu-iah",
        englishWords: ["postcard"],
    },
    {
        unit: 'mine2',
        hebrewWord: "רגש",
        transliteration: "regesh",
        englishWords: ["sentiment"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מעט",
        transliteration: "me-at",
        englishWords: ["few", "little"],
    },
    {
        unit: 'mine2',
        hebrewWord: "קשר",
        transliteration: "kesher",
        englishWords: ["connection"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מתקשר",
        transliteration: "mitkasher",
        englishWords: ["make a call"],
    },
    {
        unit: 'mine2',
        hebrewWord: "אופנה",
        transliteration: "ofnah",
        englishWords: ["fashion", "trend"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מיד",
        transliteration: "mi-yad",
        englishWords: ["immediately"],
    },
    {
        unit: 'mine2',
        hebrewWord: "ברירה",
        transliteration: "brirah",
        englishWords: ["choice"],
    },
    {
        unit: 'mine2',
        hebrewWord: "ממש",
        transliteration: "mamash",
        englishWords: ["really"],
    },
    {
        unit: 'mine2',
        hebrewWord: "בחינה",
        transliteration: "bchinah",
        englishWords: ["exam", "test"],
    },
    {
        unit: 'mine2',
        hebrewWord: "במיוחד",
        transliteration: "bi-meuchad",
        englishWords: ["especially"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מקווה",
        transliteration: "mekave",
        englishWords: ["hope"],
    },
    {
        unit: 'mine2',
        hebrewWord: "חייל",
        transliteration: "chayal",
        englishWords: ["soldier"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מתבלבל",
        transliteration: "mitbalbel",
        englishWords: ["be confused"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מתרגם",
        transliteration: "metargem",
        englishWords: ["translate"],
    },
    {
        unit: 'mine2',
        hebrewWord: "חינוך",
        transliteration: "chinuch",
        englishWords: ["education"],
    },
    {
        unit: 'mine2',
        hebrewWord: "שאר",
        transliteration: "sh-ar",
        englishWords: ["remainder", "rest"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מבטל",
        transliteration: "mevatel",
        englishWords: ["cancel"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מדוע",
        transliteration: "ma<strong>du</strong>ah",
        englishWords: ["why"],
    },
    {
        unit: 'mine2',
        hebrewWord: "ממהר",
        transliteration: "memaher",
        englishWords: ["hurry", "hasten to"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מסיים",
        transliteration: "mesayem",
        englishWords: ["finish", "complete"],
    },
    {
        unit: 'mine2',
        hebrewWord: "החלטה",
        transliteration: "hachla<strong>tah</strong>",
        englishWords: ["decision"],
    },
    {
        unit: 'mine2',
        hebrewWord: "ממשלה",
        transliteration: "memshal<strong>ah</strong>",
        englishWords: ["government"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מאשר",
        transliteration: "mea<strong>sher</strong>",
        englishWords: ["confirm", "approve"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מצייר",
        transliteration: "metsa<strong>yer</strong>",
        englishWords: ["draw"],
    },
    {
        unit: 'mine2',
        hebrewWord: "מפרסם",
        transliteration: "mefarsem",
        englishWords: ["publish", "advertise"],
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
        transliteration: "alaich",
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
