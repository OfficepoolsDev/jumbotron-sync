export var onCreateGameEvent = "subscription($gameInstanceId: ID!) {\n    onCreateGameEvent(gameInstanceId: $gameInstanceId) {\n        id\n        eventType\n        moment\n        question {\n            code\n            text\n            options {\n                code\n                text\n            }\n            correctAnswer{\n                code\n                text\n            }\n        }\n    }\n}";