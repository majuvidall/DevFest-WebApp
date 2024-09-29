const [left, right] = document.querySelectorAll("#SpeakersSection .arrows button");

const speakers = [
    {
        image: "/images/speakers/buck_woody.png",
        name: "Buck Woody's",
        description: "Applied Data Scientist in the Azure Data Services team",
        title: "Generative AI: Concepts, Tools, and Applications for Data Professionals"
    },
    {
        image: "/images/speakers/james_gress.png",
        name: "James Gress",
        description: "Emerging Technology Director, North America Advanced Technology Centers, Accenture",
        title: "AI-Assisted Coding: Beyond Code Generation to Full Potential"
    },
    {
        image: "/images/speakers/laurence_svekis.png",
        name: "Laurence Svekis",
        description: "Google Developer Expert, a web technology consultant, and an online course developer",
        title: "Power Up (Apps Script & Gemini AI)"
    }
]

let index = 0;
const image = document.querySelector("#SpeakersSection img");
const name = document.querySelector("#SpeakersSection .arrows span");
const description = document.querySelector("#SpeakersSection .speaker-description");
const title = document.querySelector("#SpeakersSection .speaker-title");

const swapSpeaker = () =>{
    image.src = speakers[index].image;
    image.alt = speakers[index].name;
    name.textContent = speakers[index].name;
    description.textContent = speakers[index].description;
    title.textContent = speakers[index].title;
}

swapSpeaker();

left.addEventListener('click', () => {
    index = (index - 1 + speakers.length) % speakers.length;
    swapSpeaker();
});

right.addEventListener('click', () => {
    index = (index + 1) % speakers.length;
    swapSpeaker();
});