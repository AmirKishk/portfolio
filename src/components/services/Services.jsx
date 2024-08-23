import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -50,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerCgildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInViwe = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInViwe && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Crafting virtual wonders inspired by the wisdom of ancient scribes.
          <br /> From the virtual sands, rise pyramids of innovation. 💻🌐🔮
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/viber.webp" alt="" />
          <button>
            <a href="/Amir Kishk CV.pdf" download>
              My resume
            </a>
          </button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="skillsBox"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>My coding skills</h2>
          <div>
            <img src="html.png" alt="" />
            <img src="css.png" alt="" />
            <img src="javascript.png" alt="" />
            <img src="react.png" alt="" />
            <img src="redux.png" alt="" />
            <img src="styled.png" alt="" />
            <img src="sass.png" alt="" />
            <img src="tailwind.png" alt="" />
          </div>
        </motion.div>

        <motion.div
          className="learningBox"
          whileHover={{ background: "gray", color: "black" }}
        >
          <h2>I am learning</h2>
          <div>
            <img src="node.png" alt="" />
            <img src="express.png" alt="" />
            <img src="mongodb.png" alt="" />
            <img className="mongoose" src="mongoose.png" alt="" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
