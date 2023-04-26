

const projectData = [
    {
    id: 1,
    title: "Weather app",
    description:
      "Weather application that gives you current weather details of a particular city. I used Vanilla JavaScript to create the app, and OpenWeatherMap API to get the weather details of the user entered city or user’s current location.",
    technologies:"HTML, CSS, JavaScript, API",
    image: (process.env.PUBLIC_URL+"/images/weather-app.png"),
    link: "https://mihajlovskakate.github.io/WeatherApp/",
    github: "https://github.com/mihajlovskakate/WeatherApp"
    },
    {
      id: 2,
      title: "Book Keeper app",
      description:
        "The Book Keeper is a simple app that allows you keep track of the books you have read. You have the option to add the title, the autor and a note about the book. I am currently working on improving the app and adding more functionalities.",
      technologies:"HTML, CSS, React, Material UI",
      image: (process.env.PUBLIC_URL+"/images/book-keeper-app.png"),
      link: "https://mihajlovskakate.github.io/book-keeper-app/", 
      github: "https://github.com/mihajlovskakate/book-keeper-app"
    },
    {
      id: 3,
      title: "Simon Game",
      description:
        "The classic Simon Game is a simple game that lets you exercise your memory. There are four different tiles, each with a unique colour and sound which is activated when pressed. The sound aids the player in remembering the sequence and the game ends if the player misses a step in the sequence.",
      technologies:"HTML, CSS, JavaScript",
      image: (process.env.PUBLIC_URL+"/images/simon-game.png"),
      link: "https://mihajlovskakate.github.io/simon-game/", 
      github: "https://github.com/mihajlovskakate/Simon-Game-Challenge/"
    }
];

export default projectData;