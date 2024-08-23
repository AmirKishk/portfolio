import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Omnifood",
    img: "did3.png",
    webHref: "https://omnifood-ak.netlify.app/",
    gitHref: "https://github.com/AmirKishk/Omnifood",
    desc: "Welcome to my very first webpage! I put it together using just HTML and CSS, with a bit of JavaScript thrown in. This project captures the beginning of my coding adventure. I learned a bunch about flexbox and grid layouts, the cool tricks that make things look good on different screens. Come check out the neat features and things I picked up while starting out in web development!",
  },
  {
    id: 2,
    title: "Tibbers Bank",
    img: "did4.png",
    webHref: "https://tibbers-bank.netlify.app/",
    gitHref: "https://github.com/AmirKishk/Tibbers-Bank",
    desc: "I built a bank website where I used JavaScript to handle two imaginary bank accounts. I focused on learning and practicing with JavaScript arrays, understanding their logic, and using various array methods. Users can transfer money between the two accounts, updating the arrays accordingly. Additionally, the website allows users to add funds and log out. A cool feature I implemented is an automatic logout after 5 minutes to enhance security. This project was a great opportunity to strengthen my skills in array manipulation and overall Vanilla JavaScript development.",
  },
  {
    id: 3,
    title: "TODO",
    img: "/todos.png",
    webHref: "https://todo-later.netlify.app/",
    gitHref: "https://github.com/AmirKishk/todo-todo",
    desc: "Venturing into the creation of the Todo App, initially hesitant due to its commonality in beginner React tutorials, turned out to be a surprisingly engaging journey. Beyond the straightforward task management, I discovered hidden complexities in state management, making the project a dynamic learning experience. The Todo App is more than just a to-do list; it represents the fusion of design and functionality. Click and explore this meticulously crafted application, a testament to my passion for creating user-friendly experiences.",
  },
  {
    id: 4,
    title: "Millennium Falcon",
    img: "/falcon.png",
    webHref: "https://buyafalcon.netlify.app/",
    gitHref: "https://github.com/AmirKishk/MillenniumFalcon",
    desc: "Smell my finger, it's been in the dark side. OR, buy the Millennium Falcon and get the hek out of here! It was Not a fancy project but was an enjoyable one",
  },
  {
    id: 5,
    title: "Legal Counsel",
    img: "/cat.jpg",
    desc: "With six years of comprehensive professional experience, I have excelled in drafting, reviewing, and negotiating a wide array of commercial contracts, effectively representing my employer's interests in negotiations with external parties. My expertise spans various types of agreements, including Messaging Service Agreements, Supplier Agreements, Bilateral Agreements, Strategic Partnership Agreements, Service Level Agreements, Non-disclosure Agreements, and Data Processing Agreements. Additionally, I have demonstrated leadership hiring and mentoring four members, two legal associates, one regional counsel, and one legal intern. Moreover, my contributions extend to the successful incorporation of three legal entities in the MENA region, alongside drafting and implementing internal policies within the Legal department.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <a target="_blank" rel="noopener noreferrer" href={item.webHref}>
              <img src={item.img} alt="" />
            </a>
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>
              <a target="_blank" rel="noopener noreferrer" href={item.webHref}>
                {item.title}{" "}
              </a>
            </h2>

            <p>{item.desc}</p>
            {item.id !== 5 && (
              <a target="_blank" rel="noopener noreferrer" href={item.gitHref}>
                <button>View on GitHub</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
