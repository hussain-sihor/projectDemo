import Image from "next/image"
import me from "../public/me.jpg"
const About = () =>{
 
  return(
    <section id="about">
    <div
      className="w-full  h-screen flex justify-around items-center  
   max-sm:flex-col
  max-sm:justify-start 
  max-sm:text-center
  max-sm:px-3
  max-sm:py-[80px]
  max-sm:w-[100%]
  max-sm:h-auto
  "
    >
      <div className="flex flex-wrap">
        <h3
          className="font-mono text-amber-500 text-2xl 
    max-sm:text-sm"
        >
          Hi I am
          <span>
            <h1
              className="text-8xl  tracking-wide font-[Rowdies] text-slate-800 mb-4 max-sm:text-3xl
              max-sm:tracking-normal 
              max-sm:mb-2"
            >
              Hussain
            </h1>
          </span>
          I build things for the web <br />
          Committed in creating engaging experiences.
        </h3>
      </div>

      <div
        className="p-4 
   max-sm:p-2 "
      >
        <div
          className="h-[450px] w-[22rem] rounded-full border-dotted border-4 border-orange-400 flex justify-center items-center overflow-hidden
    max-sm:h-40 
    max-sm:w-40s
    max-sm:border-3"
        >
          <Image
            src={me}
            className="relative -z-10 h-[510px] w-[600px] max-sm:w-[200px] max-sm:h-[200px]"
          />
        </div>
      </div>
    </div>
  </section>
  )


}

export default About