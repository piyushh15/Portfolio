import languages from "../assets/3d.png";
import backend from "../assets/backend.png";
import frontend from "../assets/ui.png";
import tools from "../assets/computer.png";

export const SKILLS=[

    {
        title:"Languages",
        icon:languages,
        skills:[
            {skill:"C++",percentage:"80%"},
            {skill:"C",percentage:"90%"},
            {skill:"JavaScript",percentage:"75%"},
            {skill:"TypeScript",percentage:"80%"},
            {skill:"Python",percentage:"75%"},
        ],
    },
    {
        title:"Frontend",
        icon:frontend,
        skills:[
            {skill:"HTML5",percentage:"80%"},
            {skill:"CSS3 (Bootstrap/Tailwind",percentage:"90%"},
            {skill:"JavaScript",percentage:"75%"},
            {skill:"React.js",percentage:"80%"},
            {skill:"Next.js",percentage:"75%"},
        ],
    },
    {
        title:"Backend",
        icon:backend,
        skills:[
            {skill:"Node.js",percentage:"80%"},
            {skill:"Express.js",percentage:"90%"},
            {skill:"Database(MongoDB)",percentage:"80%"},
            {skill:"Database(MySql)",percentage:"70%"},
        ],
    },
    {
        title:"Tools",
        icon:tools,
        skills:[
            {skill:"Git & Github",percentage:"80%"},
            {skill:"Responsive Design",percentage:"90%"},
            {skill:"Matlab",percentage:"90%"},
            {skill:"Docker",percentage:"80%"},
        ],
    },
]