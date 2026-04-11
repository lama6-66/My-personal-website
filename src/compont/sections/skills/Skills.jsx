import { useGSAP } from "@gsap/react";
import TechIcons from "./TechIcon";
import { SkillsList, SkillsList2 } from "./TechIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { OrbitControls} from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei"

gsap.registerPlugin(ScrollTrigger);
function Skills() {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-grid",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        direction: 1,
        ease: "power2.in",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5px">
        {/* tech-card-animated-bg */}
        <h2 className="flex text-center items-center justify-center text-[30px] font-medium tracking-[2px]">
          Tech Stack
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          className="mt-16"
        >
          {SkillsList.map((icon, index) => (
            <SwiperSlide
              key={icon.name + index}
              className="card-border tech-card overflow-hidden group rounded-[50%]"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-cotent">
                <div className="tech-icon-wrapper ">
                  {/* <img src={icon.imgPath} className="" /> */}
                  <Canvas
                    style={{ height: "150px", width: "100%" }}
                    className="h-[150px] w-[100%]"
                    gl={{ powerPreference: "high-performance", antialias: true }}
                    camera={{ position: [0, 0, 5]}}
                  >
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Environment preset="city" />
                    <OrbitControls enableZoom={false}  />
                    <Float speed={7} rotationIntensity={3} floatIntensity={2}>
                      <group>
                        <TechIcons model={icon} />
                      </group>
                    </Float>
                  </Canvas>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  

      </div>
    </div>
  );
}
export default Skills;
