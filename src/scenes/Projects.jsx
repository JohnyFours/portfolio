import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1Img from "../../src/assets/project-1.jpeg"
import project2Img from "../../src/assets/project-2.jpeg"
import project3Img from "../../src/assets/project-3.jpeg"
import project4Img from "../../src/assets/project-4.jpeg"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, href, description,src}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();


  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={href} className={overlayStyles} target="_blank">
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
      </a>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className=" md:pt-80 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          You could check the implemented projects out below
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1"
                   href="https://oleksandrprotasov.github.io/Todo_list_application/"
                   src={project1Img}
                   description ="Todo list Application"/>
          <Project title="Project 2"
                   src={project2Img}
                   href="https://oleksandrprotasov.github.io/React_Weather_app/"
                   description="React Weather App"/>

          <Project title="Project 3"
                   src={project3Img}
                   href="https://oleksandrprotasov.github.io/quizlet_React/"
                   description="Quizlet Game React"/>
          <Project title="Project 4" description="Coming Soon" src={project4Img}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
