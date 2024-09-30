const [left, right] = document.querySelectorAll("#SpeakersSection .arrows button");

const speakers = [
    {
        image: "images/speakers/buck_woody.png",
        name: "Buck Woody",
        description: "Applied Data Scientist in the Azure Data Services team",
        title: "Generative AI: Concepts, Tools, and Applications for Data Professionals"
    },
    {
        image: "images/speakers/james_gress.png",
        name: "James Gress",
        description: "Emerging Technology Director, North America Advanced Technology Centers, Accenture",
        title: "AI-Assisted Coding: Beyond Code Generation to Full Potential"
    },
    {
        image: "images/speakers/laurence_svekis.png",
        name: "Laurence Svekis",
        description: "Google Developer Expert, a web technology consultant, and an online course developer",
        title: "Power Up (Apps Script & Gemini AI)"
    },
     {
        image: "images/speakers/fabricio_sanchez.png",
        name: "Fabricio Sanchez",
        description: "Principal Enterprise Architect Lead at Google",
        title: "Innovating the Future: How the Tech Industry is Evolving"
    },
    {
        image: "images/speakers/ludmila_socha.png",
        name: "Ludmila Socha",
        description: "Vice President | Product Owner at JP Morgan",
        title: "Innovating the Future: How the Tech Industry is Evolving"
    },
    {
        image: "images/speakers/emer_scheiner.png",
        name: "Emer Scheiner",
        description: "Global Partners & OEM Manager LATAM at Zebra Technologies",
        title: "Be Fearless: Overcome Doubts, Unlock Opportunities"
    },
    {
        image: "images/speakers/david_elgueta.png",
        name: "David Elgueta",
        description: "Senior Technical Communicator at Eccentex Corporation | Champion AWS Authorized Instructor",
        title: "Prompt Engineering: There are no stupid questions"
    },
    {
        image: "images/speakers/jeff_ammons.png",
        name: "Jeff Ammons",
        description: "Software Architect at Electronic Arts (EA)",
        title: "How to Manage your Career as a Software Engineer"
    },
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
