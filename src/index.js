function writeItinerary(response) {
  new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5t09f3f74eo3075d13ef8b9d94aa5421";
  let prompt = `User instructions are: generate an itinerary for ${instructionsInput.value}`;
  let context =
    "You are the best travel agent AI assistant. You provide great itineries based on the city and duration of the stay provided by the user instructions. Each day is a new item on an unordered list using the <ul> and <li> tags. For each day, please follow this example structure: `DAY1:` <br/> suggestions <br/> <br/>`DAY2:` and so on. List 3 things to see each day and suggest a typical restaurants where to have luch and one where to have dinner. Keep your answer short, clear and structured. At the end always sign your intineray with `SheCodes AI Travel Agent`in a <strong> element on a new line like <strong>`SheCodes AI Travel Agent`</strong>. Make sure to follow the user instructions and write an itinerary that is relevant to the user's request.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `<div class="blink">⏳ Generating your itineray for ${instructionsInput.value}...</dvi>`;

  axios.get(apiUrl).then(writeItinerary);
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateItinerary);


