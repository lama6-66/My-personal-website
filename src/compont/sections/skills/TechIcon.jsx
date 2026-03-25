import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei"
import { useMemo } from "react";

export const SkillsList=[
           
            {
                name:"MongoDB",
                Path:"/mongodb_logo__3d_model.glb",
                scale:50,
                rotation:[0,0,0],
            }
            ,
            {
                name:"JS",
                Path:"/javascript_logo__3d_model.glb",
                scale:30,
                rotation:[0,0,0],
            }
            ,
            {
                name:"Node.js",
                Path:"/public/ImageToStl.com_3d-drawing (2).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
            
            ,
           
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing.glb",
                scale:0.03,
                rotation:[0,0,0],
            },
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (1).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
            ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (3).glb",
                scale:0.03,
                rotation:[0,0,0],
            },
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (4).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
            ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (5).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
              ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (6).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
                ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (7).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
                ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (8).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
             ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (9).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
              ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (17).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
              ,
            {
                name:"Python",
                Path:"/ImageToStl.com_3d-drawing (18).glb",
                scale:0.03,
                rotation:[0,0,0],
            }
            
            


        ]

        export const SkillsList2=[
            {
                name:"UML",
                Path:"/ImageToStl.com_3d-drawing (11).glb",
                scale:0.02,
                rotation:[0,0,0],
            },
             {
                name:"UML",
                Path:"/ImageToStl.com_3d-drawing (12).glb",
                scale:0.02,
                rotation:[0,0,0],
            },
             {
                name:"UML",
                Path:"/ImageToStl.com_3d-drawing (13).glb",
                scale:0.02,
                rotation:[0,0,0],
            },
             {
                name:"UML",
                Path:"/ImageToStl.com_3d-drawing (14).glb",
                scale:0.01,
                rotation:[0,0,0],
            },
        ]

        


        SkillsList.forEach(item => useGLTF.preload(item.Path))
SkillsList2.forEach(item => useGLTF.preload(item.Path))

function TechIcons({ model }) {
  const { scene } = useGLTF(model.Path)


  const clonedScene = useMemo(() => scene.clone(), [scene])

  return <primitive object={clonedScene} scale={model.scale} />
}


export default TechIcons


