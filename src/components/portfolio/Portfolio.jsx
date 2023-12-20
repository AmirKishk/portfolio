import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tibbers Bank",
    img: "/did4.png",
    desc: "Empower your financial journey with our bank app. Seamlessly track income and spending, transfer funds, and conveniently request loans, all in one secure and user-friendly platform for ultimate financial control.",
  },
  {
    id: 2,
    title: "playlist",
    img: "/dod2.png",
    desc: "Discover entertainment effortlessly! Our app randomly generates movie and song suggestions, offering a delightful surprise for your next cinematic or musical experience, tailored to your unique preferences.",
  },
  {
    id: 3,
    title: "Omnifood",
    img: "/did3.png",
    desc: "Revitalize your nutrition with our Smart 365-Day Food Subscription. Indulge in personalized, healthy meals year-round, expertly tailored to your tastes and nutritional requirements for a vibrant and nourishing culinary journey.",
  },
  {
    id: 4,
    title: "Cars",
    img: "/did1.png",
    desc: "Elevate your car selling experience with our app. Effortlessly list your vehicles with prices and enable users to search easily, ensuring a seamless and efficient platform for buying and selling cars.",
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
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
