interface InputData {
    context: string;
}

const inputData: InputData = {
    context: "Tyson has twenty cats"
};

fetch('https://gtevhdluc3.execute-api.us-east-1.amazonaws.com/default/examingoChatGPT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputData)
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