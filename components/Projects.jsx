import Project from "./Project.jsx"
import {projects} from "./Constants.jsx"

const Projects = () =>{

 return(
  <section id='projects'>

   
  <div className='w-full h-full border-2  flex justify-center items-center flex-col py-5
  max-sm:px-2
  max-sm:w-full'>

   <div className='font-mono text-slate-800 flex justify-center items-center flex-col my-6 '>
   <h1 className='font-extrabold text-3xl 
   max-sm:text-xl 
   max-sm:font-semibold '>Projects</h1>
   <p className="font-semibold text-xl
    max-sm:text-sm">Have a look at some of the rolled-out projects I&apos;m proud of :</p>
   </div>

   
   {projects.map((item)=>(
        <Project key={item.title}item={item}/>
     ))}



    
  </div>
</section>
 )
}

export default Projects