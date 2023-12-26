interface InputData {
    context: string;
    question: string;
}

const input: InputData = {
    context: "The earth is flat because a youtuber said it was",
    question: "Why is the earth flat?"
};

fetch('https://jb2lndmnn3.execute-api.us-east-1.amazonaws.com/default/examingoChatGPTAnswerQuestion', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(input)
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json() as Promise<any>;
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });