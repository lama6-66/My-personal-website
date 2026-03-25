import G42 from "../../assets/G4.webp"
import Architecture from "../../assets/Architecture.png"
import FullStack from "../../assets/Full Stack.png"
import Algorithms from "../../assets/algorithms.png"
import UML from "../../assets/UML.png"
import Button from "./Button"
import HerpExperience from "../../compont/sections/HeroModel/HerpExperience"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function Hero(){

    useGSAP(()=>{
        gsap.fromTo(".hero-text > *",
            {
                y:20,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:0.1,
                direction:1,
                ease:"power2.inOut"
            }
        )
    })

    const Words=[
    {text:"Architecture",imgPath:Architecture},
    {text:"Full Stack",imgPath:FullStack},
    {text:"Algorithms",imgPath:Algorithms},
    {text:"UML",imgPath:UML},
]

    return(
        <section id="hero" className="relative min-h-screen overflow-x-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={G42} className="w-[200px] h-[200px] animate-pulse [animation-duration:1.5;;;s]" />
            </div>
           
           <div className="hero-layout">

            <header className="flex flex-col justify-center items-center  md:w-full w-screen md:px-20 px-0 ">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h6 className="">I am Lama Aljuaid,Software <br></br> Engineer Focused on
                           <span className="slide">
                                <span className="wrapper">
                                    {Words.map((word)=>(
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img src={word.imgPath} className="xl:size-12 md:size-10 size-7 md:p-2 p1"/>
                                                <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                           </span>
                        </h6>
                        <h6>integrating architectural analysis <br></br> with software development to build <br></br> efficient solutions.</h6>
                    
                        
                            <p className="text-xs mt-5 z-10 text-gray-400">Fast learner passionate about algorithms,<br></br> system architecture, and building scalable full-stack applications.</p>
                                    <Button />
                    </div>
                </div>
            </header>


            {/* 3D MODEL */}
                 <figure className="xl:w-[50%] w-full h-full md:mt-[-100px] md:ml-[-200px] mt-60 ml-[-400px] md:mt-">
                           <div className="hero-3d-layout w-full h-full pointer-events-none flex">
                             <HerpExperience />
                           </div>
                         </figure>
           </div>
        </section>
    )
}
export default Hero