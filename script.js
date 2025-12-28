const jokeElement = document.getElementById("joke");

async function getJoke() {
    jokeElement.textContent = "Loading joke... 😂";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();

        jokeElement.textContent = `${data.setup} 🤔  
${data.punchline} 😂`;
    } catch (error) {
        jokeElement.textContent = "Oops! Failed to load joke 😢";
    }
}
