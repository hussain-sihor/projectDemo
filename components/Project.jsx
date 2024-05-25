import Image from "next/image"
import Link from 'next/link'

const Project = ({item}) =>{

  return(
    <div className='my-4 flex w-[90%] justify-center items-center 
    bg-gradient-to-br from-slate-800 via-slate-900 to-amber-500
    py-6 rounded-xl shadow-lg  shadow-slate-600 flex-wrap
    max-sm:flex-col
    max-sm:w-full 
    max-sm:p-2
    max-sm:px-3
    max-sm:rounded-none
    max-sm:shadow-none
    max-sm:bg-none
    max-sm:mb-4'>

    <div className='font-mono text-white w-[40%] ps-5 py-5 
    max-sm:w-full
     max-sm:p-3
     max-sm:bg-slate-800
     max-sm:rounded-lg
     max-sm:shadow-lg 
     max-sm: shadow-slate-600
     max-sm:mb-4 '>
      <h1 className='font-bold text-2xl mb-2 max-sm:text-xl text-amber-500'>{item.title}</h1>
      <h1 className='font-medium text-xl max-sm:text-sm '>{item.desc}</h1>

      <div className='flex flex-wrap gap-4 mt-3 mb-2'>
      {item.techStack.map( (tech)=> (<h1 
      className='px-3 py-1 bg-slate-200 rounded-md shadow-lg shadow-slate-700 font-bold text-[15px]
      text-amber-500
      max-sm:p-1
      max-sm:shadow-lg
      max-sm:font-medium 
      max-sm:text-sm' 
      key={tech}>{tech}</h1> ) )}
      </div>

      <div className='flex font-medium text-xl underline text-slate-300 cursor-pointer max-sm:text-sm' >
      {item.github!='' && <div className='py-3'><Link href={item.github}>code</Link></div>}
      {item.view!='' && <div className='ps-3 py-3'><Link href={item.view}>view</Link></div>}
      </div>
 
    </div>

    <div className='w-[60%] 
    max-sm:w-full flex justify-center items-center'>
    <Image src={item.image} className="w-[600px] h-[300px] rounded-lg 
          max-sm:h-[200px]
          max-sm:border-2 
          border-slate-600"/>
    </div>

  </div>
  )
}

export default Project