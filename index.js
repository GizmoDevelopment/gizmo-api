const translate = require("google-translate-api");
const autocorrect = require("autocorrect")();

const responseList = {
    "greet": [
        [
            "Hi!",
            "Hello!",
            "Nice to see you!",
            "Greetings!"
        ],
        "hello",
        "hi",
        "greetings",
        "howdy"
    ],
    "question": {
        "how": {
            "you": {
                "win": [
                    "by not being bad",
                    "by actually being good"
                ],
                "die": [
                    "neck + rope",
                    "talk to albert"
                ],
                "rich": [
                    "ask mav"
                ],
                "undefined": [
                    "ez",
                    "idk"
                ]
            },
            "your": [
                "cool"
            ],
            "she": [
                "by getting raped"
            ],
            "he": [
                "by raping"
            ],
            "undefined": [
                "ez"
            ]
        },
        "who": {
            "she": [
                "your mom lmao"
            ],
            "he": [
                "your dad lmao"
            ],
            "you": [
                "I'm Skynet, you retard.",
                ":face_palm:"
            ],
            "your": [
                "**uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh**"
            ],
            "undefined": [
                "my ass",
                "idk"
            ]
        },
        "when": {
            "go": [
                "Now."
            ],
            "leave": [
                "Now."
            ],
            "undefined": [
                "my ass",
                "idk"
            ]
        },
        "where": {
            "rem": [
                "in fucking hell",
                "dead"
            ],
            "ram": [
                "in gulag"
            ],
            "die": [
                "In Gulag.",
                "In Hell."
            ],
            "mav": [
                "In a random bunker in Argentina"
            ],
            "money": [
                "In mav's pocket"
            ],
            "info": [
                "not on tjaz's pc"
            ],
            "information": [
                "not on tjaz's pc"
            ],
            "data": [
                "not on tjaz's pc"
            ],
            "travel": [
                "Auschwitz.",
                "Gulag.",
                "your ass"
            ],
            "undefined": [
                "hell",
                "gulag",
                "auschwitz",
                "gas room",
                "in my ass",
                "idk"
            ]
        },
        "who" : {
            "god": [
                "flower",
                "<:fp:260540039673544704>"
            ],
            "tjaz": [
                "shit dev lmao gottem"
            ],
            "dango": [
                "fag"
            ],
            "mav": [
                "a man who owns everything and everyone"
            ],
            "is": [
                "your mom",
                "your dad"
            ],
            "are": [
                "slaves",
                "jews"
            ],
            "undefined": [
                "idk"
            ]
        },
        "what": {
            "gizmo": {
                "music": [
                    "the only music player that works"
                ]
            },
            "gmusic": [
                "the only music player that matters"
            ],
            "spotify": [
                "something that I'll shove up your ass"
            ],
            "soundcloud": [
                "something that I'll shove up your ass"
            ],
            "groove": [
                "something that I'll shove up your ass"
            ]
        }
    },
    "undefined": [
        "I don't understand",
        "What?",
        "Sorry, could you repeat that?"
    ]
}

function translateString(toTranslate, options, callback) {
    translate(toTranslate, options).then(res => {
        if (res === undefined) {
            callback(toTranslate);
        } else {
            callback(res);
        }
    }).catch(err => {
        console.error(err);
        callback(toTranslate);
    })
}

function initSkynet(inputString, callback) {
    runSkynet(inputString, function (e) {
        callback(e);
    });
}

function handleSkynetResponse(inputString, response) {

    var defaultInputString;
    var cutInputString;
    var questionType;
    var debounceTranslate = true;
    var finalResponse;

    if (response.text !== undefined) {
        defaultInputString = response.text;
        cutInputString = response.text.replace(" ", "").replace(".", "").replace("?", "").replace("!", "").toLowerCase();
    } else {
        defaultInputString = inputString;
        cutInputString = inputString.replace(" ", "").replace(".", "").replace("?", "").replace("!", "").toLowerCase();
    }
    
    for (i = 0; i < cutInputString.length; i++) {

        var secondCutInputStringFront = cutInputString.slice(0, cutInputString.length - i);
        var secondCutInputStringEnd = cutInputString.slice(i);

        for (rt in responseList) {
            for (rs = 0; rs < responseList[rt].length; rs++) {
                if (rs > 0) {

                    if (defaultInputString.includes("?") || cutInputString.includes("why") || cutInputString.includes("when") || cutInputString.includes("who") || cutInputString.includes("where") || cutInputString.includes("what")) {
                        questionType = "question";
                    }

                    switch (questionType) {
                        case "question":

                            var questionObj = responseList["question"];

                            for (questionPrefix in questionObj) {
                                if (cutInputString.includes(questionPrefix)) {
                                    for (questionContext in questionObj[questionPrefix]) {
                                        if (Array.isArray(questionObj[questionPrefix][questionContext])) {
                                            if (debounceTranslate) {
                                                if (secondCutInputStringFront.includes(questionContext) || secondCutInputStringEnd.includes(questionContext)) {
                                                    debounceTranslate = false;
                                                    return responseList["question"][questionPrefix][questionContext][Math.floor(Math.random() * responseList["question"][questionPrefix][questionContext].length)];
                                                    break;
                                                }
                                            }
                                        } else {
                                            for (questionSecondContext in questionObj[questionPrefix][questionContext]) {
                                                if (debounceTranslate) {
                                                    if (secondCutInputStringFront.includes(questionSecondContext) || secondCutInputStringEnd.includes(questionSecondContext)) {
                                                        debounceTranslate = false;
                                                        return responseList["question"][questionPrefix][questionContext][questionSecondContext][Math.floor(Math.random() * responseList["question"][questionPrefix][questionContext][questionSecondContext].length)];
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    if (responseList["question"][questionPrefix]["undefined"] !== undefined) {
                                        debounceTranslate = false;
                                        return responseList["question"][questionPrefix]["undefined"][Math.floor(Math.random() * responseList["question"][questionPrefix]["undefined"].length)];
                                        break;
                                    }

                                }
                            }
                        default:
                            if (responseList[rt][rs] == secondCutInputStringFront || responseList[rt][rs] == secondCutInputStringEnd) {
                                if (debounceTranslate) {
                                    debounceTranslate = false;
                                    return responseList[rt][0][Math.floor(Math.random() * responseList[rt].length + 1)];
                                }
                            } else {
                                if (debounceTranslate) {
                                    debounceTranslate = false;
                                    return responseList["undefined"][Math.floor(Math.random() * responseList["undefined"].length)];
                                }
                            }
                    }
                }
            }
        }
    }
    return responseList["undefined"][Math.floor(Math.random() * responseList["undefined"].length)];
}

function runSkynet(inputString, callback) {
    translateString(inputString, {didYouMean: "true", to: "en"}, function (response) {
        translateString(handleSkynetResponse(inputString, response), {didYouMean: "true", to: response.from.language.iso}, function (finalResponse) {
            callback(finalResponse.text);
        });
    });
}

exports.init = function(input, callback) {
    callback(initSkynet(input));
}

initSkynet("what's spotify", function (e) {
    console.log("what's spotify");
    console.log("> " + e);
})