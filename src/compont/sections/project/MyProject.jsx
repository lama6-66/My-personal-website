import { useRef, useState } from "react";
import Gaming from "../../../assets/Video/Gaming (1).mp4";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaHandPointer } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Miran from "../../../assets/Video/Miran.MP4";
import { FaHourglassHalf } from "react-icons/fa";
import stopWatch from "../../../assets/Video/stopwatch.mp4";
import user from "../../../assets/Video/user.MP4";
import weather from "../../../assets/Video/weather.MP4";
import calculator from "../../../assets/Video/calculator.MP4";
gsap.registerPlugin(ScrollTrigger);
import Stars from '../../../assets/Stars.png'
// import Particles from '../../sections/HeroModel/Particles'

function Play({ src, videoRef, Enter, Leave }) {
  return (
    <video
      ref={videoRef}
      src={src}
      onMouseEnter={Enter}
      onMouseLeave={Leave}
      muted
      loop
    />
  );
}

function MyProject() {
  useGSAP(() => {
    gsap.from(".my-project > *", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".my-project",
        start: "top 80%",
      },
    });
  });

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  // const videoRef4 = useRef(null);
  // const videoRef5 = useRef(null);
  const [play, setPlay] = useState(false);

  const handleMouseEnters = (e) => {
     e.preventDefault() 
    videoRef.current.play();
    setPlay(true);
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlay(false);
  };


console.log(Stars)
  return (
    <section className="my-project" 
    id="project"
    >
      <h1 className="title ">My Projects</h1>
      <div className="project-card">
        <div className="project-vidbox">
          <video
            ref={videoRef}
            src={Miran}
            onMouseEnter={handleMouseEnters}
            onTouchStart={handleMouseEnters}
            onTouchEnd={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="metadata"
          ></video>

          {!play && (
            <span className="icon absolute ">
              <FaHandPointer />
            </span>
          )}
        </div>
        {/* --------------------- 1----------------------- */}
        <div className="project-info">
          <h3>
            <span className="gradient">Miran </span>
            Project
          </h3>
          <p>
            A Full-Stack platform for Umm Al-Qura University medical students,
            developed by gathering requirements from 15+ real users across
            university and hospital sectors to bridge the gap in clinical
            training
          </p>
          <p className="text-red-800 text-[12px] ">Work in Progress</p>
          <div className="buttonProject text-black">
            <a href="https://github.com/Miran-GraduationProject/Miran-System">
              <button className="flex justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300 w-[120px] h-[35px]">
                <FaGithub />
                Github
              </button>
            </a>
            <a href="">
              <button className="w-[120px] h-[35px] flex justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FaHourglassHalf />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------- 2 --------------------------- */}
      <div className="project-card">
        <div className="project-vidbox">
          <video
            ref={videoRef2}
            src={Gaming}
            onTouchStart={handleMouseEnters}
            onTouchEnd={handleMouseLeave}
            onMouseEnter={() => videoRef2.current.play()}
            onMouseLeave={() => {
              videoRef2.current.pause();
              videoRef2.current.currentTime = 0;
            }}
            muted
            loop
             playsInline
            disablePictureInPicture
            preload="metadata"
          ></video>
        </div>

        <div className="project-info">
          <h3>
            <span className="gradient">Gaming </span>
            Project
          </h3>
          <p>
            Built a Gaming Website using HTML, CSS, and JavaScript that
            showcases interactive game content and video elements. The project
            focuses on creating an engaging user interface, smooth navigation,
            and responsive design to deliver an immersive gaming experience.
          </p>
          <div className="text-black buttonProject">
            <a href="https://github.com/lama6-66/Games2">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FaGithub />
                Github
              </button>
            </a>
            <a href="https://lama6-66.github.io/Games2/">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FiExternalLink />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* ------------------------ 3---------------------------------- */}
      <div className="project-card">
        <div className="project-vidbox">
          <video
            ref={videoRef3}
            src={stopWatch}
            onTouchStart={handleMouseEnters}
            onTouchEnd={handleMouseLeave}
            onMouseEnter={() => videoRef3.current.play()}
            onMouseLeave={() => {
              videoRef3.current.pause();
              videoRef3.current.currentTime = 0;
            }}
            muted
            loop
             playsInline
            disablePictureInPicture
            preload="metadata"
          ></video>
        </div>

        <div className="project-info">
          <h3>
            <span className="gradient">StopWatch </span>
            Project
          </h3>
          <p>
            Developed a responsive stopwatch application using JavaScript,
            implementing real-time time tracking with start, stop, and reset
            functionality. Focused on performance, user experience, and clean
            interface design
          </p>
          <div className="buttonProject text-black">
            <a href="https://github.com/lama6-66/stopwatch">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FaGithub />
                Github
              </button>
            </a>
            <a href="https://lama6-66.github.io/stopwatch/">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FiExternalLink />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------------   4     -------------------------------- */}
      <div className="project-card">
        <div className="project-vidbox">
          <video
            ref={videoRef4}
            src={user}
            onTouchStart={handleMouseEnters}
            onTouchEnd={handleMouseLeave}
            onMouseEnter={() => videoRef4.current.play()}
            onMouseLeave={() => {
              videoRef4.current.pause();
              videoRef4.current.currentTime = 0;
            }}
            muted
            loop
             playsInline
            disablePictureInPicture
            preload="metadata"
          ></video>
        </div>

        <div className="project-info">
          <h3>
            <span className="gradient">User Management </span>
            Project
          </h3>
          <p>
            Designed and developed a full-stack web application using Node.js
            and Express.js, implementing complete CRUD operations (Create, Read,
            Update, Delete). Utilized an SQL database to manage and structure
            data efficiently, and built RESTful APIs for seamless client-server
            communication. Focused on scalability, performance, and real-world
            backend architecture, with deployment to a live production
            environment
          </p>
          <div className="buttonProject text-black">
            <a href="https://github.com/lama6-66/Project-Node-js">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FaGithub />
                Github
              </button>
            </a>
            <a href="https://project-node-js-al2n.onrender.com/">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FiExternalLink />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------------    5  ------------------------------ */}
      <div className="project-card">
        <div className="project-vidbox">
          <video
            ref={videoRef5}
            src={weather}
            onTouchStart={handleMouseEnters}
            onTouchEnd={handleMouseLeave}
            onMouseEnter={() => videoRef5.current.play()}
            onMouseLeave={() => {
              videoRef5.current.pause();
              videoRef5.current.currentTime = 0;
            }}
            muted
            loop
             playsInline
            disablePictureInPicture
            preload="metadata"
          ></video>
        </div>

        <div className="project-info">
          <h3>
            <span className="gradient">Wather </span>
            Project
          </h3>
          <p>
            Designed and developed an interactive weather application using
            JavaScript, integrating a third-party API to retrieve real-time
            weather data. Implemented search functionality for multiple
            locations and displayed dynamic data such as temperature, humidity,
            and weather conditions, with a focus on clean UI and seamless user
            experience
          </p>
          <div className="buttonProject text-black">
            <a href="https://github.com/lama6-66/Weather/tree/main/assets">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FaGithub />
                Github
              </button>
            </a>
            <a href="https://lama6-66.github.io/Weather/">
              <button className="flex w-[120px] h-[35px] justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FiExternalLink />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* -------------------------------- 6  ------------------------------- */}
      <div className="project-card">
        <div className="project-vidbox">
          <video
            ref={videoRef6}
            src={calculator}
            onTouchStart={handleMouseEnters}
            onTouchEnd={handleMouseLeave}
            onMouseEnter={() => videoRef6.current.play()}
            onMouseLeave={() => {
              videoRef6.current.pause();
              videoRef6.current.currentTime = 0;
            }}
            muted
            loop
             playsInline
            disablePictureInPicture
            preload="metadata"
          ></video>
        </div>

        <div className="project-info">
          <h3>
            <span className="gradient">Calculator </span>
            Project
          </h3>
          <p>
            Designed and developed a dynamic calculator application using
            JavaScript, handling user input and performing real-time arithmetic
            operations. Implemented logic for accurate calculations and
            responsive interactions, with a focus on clean UI and smooth user
            experience
          </p>
          <div className="buttonProject text-black">
            <a href="https://github.com/lama6-66/calculator">
              <button className="flex justify-center
              w-[120px] h-[35px]
              items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FaGithub />
                Github
              </button>
            </a>
            <a href="https://cute-starlight-e0bdd2.netlify.app/">
              <button className="flex
              w-[120px] h-[35px]
              justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                <FiExternalLink />
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProject;
