const cardContainer = document.querySelector(".events__cards__container");
console.log(cardContainer);

const events = [
  {
    name: "MUN",
    date: "24-26 Dec.",
    society: "Sarasva",
    link: "./assets/mun.png",
  },
  {
    name: "Feathers",
    date: "13-26 Dec.",
    society: "Sarasva",
    link: "./assets/feathers.png",
  },
  {
    name: "Quiz",
    date: "16-17 Dec.",
    society: "Sarasva",
    link: "./assets/quiz.png",
  },
  {
    name: "Antakshari",
    date: "16-17 Dec.",
    society: "Virtuosi ",
    link: "./assets/antakshari.png",
  },
  {
    name: "Euphony ",
    date: "4-17 Dec.",
    society: "Virtuosi ",
    link: "./assets/euphony.png",
  },
  {
    name: "Intro-Verse",
    date: "14-16 Dec.",
    society: "Rangtarangini",
    link: "./assets/IVposter.png",
  },
  {
    name: "Tongues on Fire",
    date: "18 Dec.",
    society: "Rangtarangini",
    link: "./assets/TOF1.png",
  },
  {
    name: "Shoot your Shots	",
    date: "6-18 Dec.",
    society: "Rangtarangini",
    link: "./assets/SYSupdated.png",
  },
  {
    name: "Skechers ",
    date: "2-19 Dec.",
    society: "Nirmiti ",
    link: "./assets/skechers.png",
  },
  {
    name: "Toon-Con",
    date: "9-19 Dec.",
    society: "Nirmiti ",
    link: "./assets/toon-con.png",
  },
  {
    name: "WorkShop",
    date: "19 Dec.",
    society: "Nirmiti ",
    link: "./assets/workshop.png",
  },
  {
    name: "Impulso",
    date: "4-19 Dec.",
    society: "GeneticXCrew",
    link: "./assets/impulso.png",
  },
  {
    name: "Tasveer",
    date: "10-24  Dec.",
    society: "Thunderbolts",
    link: "./assets/tasveernew.png",
  },
  {
    name: "Valorant",
    date: "17-19  Dec.",
    society: "Informal",
    link: "./assets/valorant.png",
  },
  {
    name: "BGMI",
    date: "17 Dec. (Classic), 19 Dec. (TDM)",
    society: "Informal",
    link: "./assets/bgmi.png",
  },
  {
    name: "Animania",
    date: "18 Dec.",
    society: "Informal",
    link: "./assets/animania.png",
  },
  {
    name: "Franchise Quiz",
    date: "17  Dec.",
    society: "Informal",
    link: "./assets/FRANCHISE QUIZ.png",
  },
  {
    name: "Chess",
    date: "19 Dec.",
    society: "Informal",
    link: "./assets/chess.png",
  },
  {
    name: "Arcane",
    date: "17 Dec.",
    society: "Informal",
    link: "./assets/arcane.png",
  },
  {
    name: "Talent Hunt",
    date: "13 - 19 Dec.",
    society: "Informal",
    link: "./assets/skillbash.png",
  },
  {
    name: "Consilio",
    date: "16 Dec.",
    society: "Informal",
    link: "./assets/consilio.png",
  },
  {
    name: "Plot Twist",
    date: "14-19 Dec.",
    society: "Informal",
    link: "./assets/PLOT TWIST.png",
  },
  {
    name: "Blind Date",
    date: "18 Dec.",
    society: "Informal",
    link: "./assets/BlindDate.png",
  },
  {
    name: "Guess the Tune",
    date: "16th Dec.",
    society: "Informal",
    link: "./assets/tune.png",
  },
  {
    name: "Meme War",
    date: "13-19 Dec.",
    society: "Informal",
    link: "./assets/MEME WAR.png",
  },
];

for (const event of events) {
  cardContainer.innerHTML += `
    <div class="events__card" data-society = ${event.society}>
      <img src="${event.link}" alt="Effervescence effe" />
      <div class="events__card__content">
        <h1>${event.name}</h1>
        <p>Date: ${event.date}</p>
      </div>
    </div>
    
    `;
}
