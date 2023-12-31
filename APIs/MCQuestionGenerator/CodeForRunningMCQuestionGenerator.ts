interface InputDataForMC {
  context: string;
}

const inputContext: InputDataForMC = {
  context:
    "The incredible amount of data on the Internet is a rich resource for any field of research or personal interest. To effectively harvest that data, you’ll need to become skilled at ",
};

fetch(
  "https://gtevhdluc3.execute-api.us-east-1.amazonaws.com/default/examingoChatGPT",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputContext),
  }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json() as Promise<any>;
  })
  .then((data) => {
    console.log(data);
    console.log(JSON.parse(data.body).question);
    console.log(JSON.parse(data.body).a);
    console.log(JSON.parse(data.body).b);
    console.log(JSON.parse(data.body).c);
    console.log(JSON.parse(data.body).d);
    console.log(JSON.parse(data.body).correctAnswerChoice);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
