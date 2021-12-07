const cardContainer = document.querySelector(".events__cards__container");
console.log(cardContainer);

const events = [
  {
    name: "MUN",
    date: "24-26 Dec.",
    society: "Sarasva",
  },
  {
    name: "Feathers",
    date: "13-26 Dec.",
    society: "Sarasva",
  },
  {
    name: "Quiz",
    date: "19 Dec.",
    society: "Sarasva",
  },
  {
    name: "Antakshari",
    date: "16-17 Dec.",
    society: "Virtuosi ",
  },
  {
    name: "Euphony ",
    date: "4-17 Dec.",
    society: "Virtuosi ",
  },
  {
    name: "Intro-Verse",
    date: "14-16 Dec.",
    society: "Rangtarangini",
  },
  {
    name: "Tongues on Fire",
    date: "18 Dec.",
    society: "Rangtarangini",
  },
  {
    name: "Shoot your Shots	",
    date: "6-18 Dec.",
    society: "Rangtarangini",
  },
  {
    name: "Skechers ",
    date: "2-19 Dec.",
    society: "Nirmiti ",
  },
  {
    name: "Toon-Con",
    date: "9-19 Dec.",
    society: "Nirmiti ",
  },
  {
    name: "WorkShop",
    date: "19 Dec.",
    society: "Nirmiti ",
  },
  {
    name: "Impulso",
    date: "4-19 Dec.",
    society: "GeneticXCrew",
  },
  {
    name: "Tasveer",
    date: "10-24  Dec.",
    society: "Thunderbolts",
  },
  {
    name: "Valorant",
    date: "17-19  Dec.",
    society: "Informal",
  },
  {
    name: "BGMI",
    date: "17 Dec. (Classic), 19 Dec. (TDM)",
    society: "Informal",
  },
  {
    name: "Animania",
    date: "18 Dec.",
    society: "Informal",
  },
  {
    name: "Franchise Quiz",
    date: "17  Dec.",
    society: "Informal",
  },
  {
    name: "Chess",
    date: "19 Dec.",
    society: "Informal",
  },
  {
    name: "Arcane",
    date: "17 Dec.",
    society: "Informal",
  },
  {
    name: "Talent Hunt",
    date: "13 - 19 Dec.",
    society: "Informal",
  },
  {
    name: "Consilio",
    date: "16 Dec.",
    society: "Informal",
  },
  {
    name: "Plot Twist",
    date: "14-19 Dec.",
    society: "Informal",
  },
  {
    name: "Blind Date",
    date: "18 Dec.",
    society: "Informal",
  },
  {
    name: "Guess the Tune",
    date: "16th Dec.",
    society: "Informal",
  },
  {
    name: "Meme War",
    date: "13-19 Dec.",
    society: "Informal",
  },
];

for (const event of events) {
  cardContainer.innerHTML += `
    <div class="events__card" data-society = ${event.society}>
      <img src="./assets/effe.jpeg" alt="Effervescence effe" />
      <div class="events__card__content">
        <h1>${event.name}</h1>
        <p>Date: ${event.date}</p>
      </div>
    </div>
    
    `;
}
