export const onCreateGameEvent = `subscription($gameInstanceId: ID!) {
    onCreateGameEvent(gameInstanceId: $gameInstanceId) {
        id
        eventType
        moment
        question {
            code
            text
            options {
                code
                text
            }
            correctAnswer{
                code
                text
            }
        }
    }
}`