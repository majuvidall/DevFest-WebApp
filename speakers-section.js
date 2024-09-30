const [left, right] = document.querySelectorAll(
	'#SpeakersSection .arrows button'
);

let currentlySelectedBlock = 'expert';

const expertBlock = document.querySelector('#expert-block');
const entrepreneurBlock = document.querySelector('#entre-block');
const spotlightBlock = document.querySelector('#spotlight-block');

expertBlock.classList.add('selected');

const switchToExpert = () => {
	if (currentlySelectedBlock === 'expert') return;
	currentlySelectedBlock = 'expert';
	speakers = experts;

	index = 0; // Reset the index to 0
	swapSpeaker(); // Immediately update the speaker info

	expertBlock.classList.add('selected');
	entrepreneurBlock.classList.remove('selected');
	spotlightBlock.classList.remove('selected');
};

const switchToEntrepreneur = () => {
	if (currentlySelectedBlock === 'entrepreneur') return;
	currentlySelectedBlock = 'entrepreneur';
	speakers = entrepreneurs;

	index = 0; // Reset the index to 0
	swapSpeaker(); // Immediately update the speaker info

	expertBlock.classList.remove('selected');
	entrepreneurBlock.classList.add('selected');
	spotlightBlock.classList.remove('selected');
};

const switchToSpotlight = () => {
	if (currentlySelectedBlock === 'spotlight') return;
	currentlySelectedBlock = 'spotlight';
	speakers = spotlight;

	index = 0; // Reset the index to 0
	swapSpeaker(); // Immediately update the speaker info

	expertBlock.classList.remove('selected');
	entrepreneurBlock.classList.remove('selected');
	spotlightBlock.classList.add('selected');
};

expertBlock.addEventListener('click', () => {
	switchToExpert();
});

entrepreneurBlock.addEventListener('click', () => {
	switchToEntrepreneur();
});

spotlightBlock.addEventListener('click', () => {
	switchToSpotlight();
});

const experts = [
	{
		image: 'images/speakers/buck_woody.png',
		name: 'Buck Woody',
		description: 'Applied Data Scientist in the Azure Data Services team',
		title:
			'Generative AI: Concepts, Tools, and Applications for Data Professionals',
	},
	{
		image: 'images/speakers/james_gress.png',
		name: 'James Gress',
		description:
			'Emerging Technology Director, North America Advanced Technology Centers, Accenture',
		title: 'AI-Assisted Coding: Beyond Code Generation to Full Potential',
	},
	{
		image: 'images/speakers/laurence_svekis.png',
		name: 'Laurence Svekis',
		description:
			'Google Developer Expert, a web technology consultant, and an online course developer',
		title: 'Power Up (Apps Script & Gemini AI)',
	},
];

const spotlight = [
	{
		image: 'images/speakers/emer.png',
		name: 'Emer Scheiner',
		description: 'Global Partners & OEM Manager LATAM at Zebra Technologies',
		title: 'Global Partnerships and OEM Strategies',
	},
	{
		image: 'images/speakers/david_guetta.png',
		name: 'David Elguetta',
		description:
			'Senior Technical Communicator at Eccentex Corporation | Co-Founder at Aktivgroup USA | Champion AWS Authorized Instructor | 3 x AWS Certified',
		title: 'Spotlight: AI/ML in Modern Enterprises',
	},
	{
		image: 'images/speakers/jeff_ammons.jpeg',
		name: 'Jeff Ammons',
		description:
			'Software Architect at Electronic Arts, with decades of experience in software engineering career management',
		title: 'Managing Your Career as a Software Engineer',
	},
];

const entrepreneurs = [
	{
		image: 'images/speakers/fabricio.png',
		name: 'Fabricio Sanchez',
		description:
			'Principal Enterprise Architect Lead at Google, Head of Solutions for Education & Justice at Google Cloud.',
		title: 'Entrepreneurship: Cloud Computing and Digital Transformation',
	},
	{
		image: 'images/speakers/ludmilla_socha.png',
		name: 'Ludmilla M. Socha',
		description: 'Vice President | Product Owner at JP Morgan',
		title: 'Entrepreneurship: Product Management in Finance',
	},
];

let speakers = experts;

let index = 0;
const image = document.querySelector('#SpeakersSection img');
const name = document.querySelector('#SpeakersSection .arrows span');
const description = document.querySelector(
	'#SpeakersSection .speaker-description'
);
const title = document.querySelector('#SpeakersSection .speaker-title');

const swapSpeaker = () => {
	image.src = speakers[index].image;
	image.alt = speakers[index].name;
	name.textContent = speakers[index].name;
	description.textContent = speakers[index].description;
	title.textContent = speakers[index].title;
};

swapSpeaker();

left.addEventListener('click', () => {
	index = (index - 1 + speakers.length) % speakers.length;
	swapSpeaker();
});

right.addEventListener('click', () => {
	index = (index + 1) % speakers.length;
	swapSpeaker();
});

const [ex, ent, spot, work] = document.querySelectorAll('.card');

ex.addEventListener('click', () => {
	switchToExpert();
	expertBlock.scrollIntoView({ behavior: 'smooth' });
});

ent.addEventListener('click', () => {
	switchToEntrepreneur();
	entrepreneurBlock.scrollIntoView({ behavior: 'smooth' });
});

spot.addEventListener('click', () => {
	switchToSpotlight();
	spotlightBlock.scrollIntoView({ behavior: 'smooth' });
});
