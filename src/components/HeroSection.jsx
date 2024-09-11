import video1 from '../assets/video1.mp4' 
import video2 from '../assets/video2.mp4' 

const HeroSection=()=>{
return(
  <div>
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
<h1 className='text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center'>VirtualR build tools  
  <span className='bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 text-transparent'>
     {' '}for developers.
  </span>
</h1>
<p className='
max-w-4xl mt-10 text-center text-lg text-neutral-500
'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
<div className='flex items-center mt-10 justify-center gap-4 '>
<a href="#" className='bg-gradient-to-r from-orange-400 to-orange-800 rounded-md py-2 px-3 '>Start for free</a>
<a href="#" className='border border-slate-100 py-2 px-3 rounded-md'>Documentation</a>
</div>
    </div>
  </div>
)
}
export default HeroSection;