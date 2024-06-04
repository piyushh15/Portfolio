import pricetracker from "../assets/projectimages/Price.png";
import car from "../assets/projectimages/Car.png";
import food from "../assets/projectimages/Food.png";
import clicker from "../assets/projectimages/Clicker.png";
import summarize from "../assets/projectimages/Summarize.png";

export const ProjectData = [
    {
        title: "Amazon Price Tracker",
        detail: [
            {
                techstack: "Next.js, TypeScript, Bright Data, Cheerio, Nodemailer, MongoDB, Tailwind CSS",
                description: "The Amazon Price Tracker is a web application that scrapes and monitors Amazon product prices, providing users with up-to-date information and notifications on price changes, back-in-stock alerts, and lowest price scenarios through a visually appealing interface."
            }
        ],
        image: pricetracker,
        link: "https://github.com/piyushh15/pricewise",
    },
    {
        title: "FoodWeb",
        detail: [
            {
                techstack: "React.js, Node.js, Express.js, MongoDB, Tailwind",
                description: "The Food Ordering App is a web application that allows users to browse, select, and order food items, featuring secure user authentication, a seamless cart experience, and an engaging interface."
            }
        ],
        image: food,
        link: "https://food-web-frontend-gilt.vercel.app/",
    },
    {
        title: "Article Summarizer",
        detail: [
            {
                techstack: "React.js, Redux.js toolkit, Tailwind",
                description: "The Article Summarizer Website enables users to paste a URL and quickly receive a summary of the webpage, utilizing OpenAI’s API, with additional features like browser history storage and copy to clipboard for enhanced user convenience."
            }
        ],
        image: summarize,
        link: "https://comfy-torrone-326c04.netlify.app/",
    },
    {
        title: "Car Number Plate Recognition",
        detail: [
            {
                techstack: "Python, Express, React, MongoDB, Raspberry Pi, Tailwind CSS, Arduino",
                description: "The Number Plate Recognition system is a real-time car plate detection and automated entry system utilizing Raspberry Pi, a pre-trained AI model, and an Express.js backend for data storage, with a React frontend for monitoring vehicle entries."
            }
        ],
        image: car,
        link: "https://github.com/Gamingstein/tcpp",
    },
    {
        title: "Footfall Counter",
        detail: [
            {
                techstack: "MicroPython, C, Express, React, Node.js, ESP8266, Raspberry Pi Pico",
                description: "The Footfall Counter system is a web-based application that uses ESP modules and Raspberry Pi Pico to wirelessly count and log footfall data, storing it in a MongoDB database and providing visualizations of footfall trends through an interactive React and Express.js interface."
            }
        ],
        image: clicker,
        link: "https://github.com/Gamingstein/clicker",
    },
];
