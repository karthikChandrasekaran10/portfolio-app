import AboutImg from '../assets/hero2.jpg';

export default function About(){
    const config ={
        line1:" I'm an Indian living in Chicago, who came for my Master's in Computer Science to the US.",
        line2:" I am Experienced Software Engineer with over 2 years of expertise in developing dynamic web and mobile applications.",
        line3:" Skilled in front-end technologies including React, Angular, and Vue.js, as well as backend development using Java, Node.js, and Spring Boot.Proficient in TypeScript, Docker, Redis, and cloud platformslike AWS. Strong focus on performance optimization, cross-browser compatibility, and user-centric design"
    }

    return <section className='flex flex-col md:flex-row  bg-primary'id='about'>
        <div className='md:w-1/2'>
            <img className='px-10 py-10 h-[700px] w-[600px] justify-end' src={AboutImg} alt ="MyImage2"></img>
        </div>
        <div className='md:w-1/2 flex justify-end'>
            <div className='flex flex-col justify-center px-10 py-5'>
                <h1 className='text-4xl text-white font-about-font border-b-4 border-primary mb-5 w-[140px] font-bold '>
                    About Me :</h1>

                <p className='text-white pb-5'> {config.line1}</p>    
                <p className='text-white pb-5'>{config.line2}</p>    
                <p className= 'text-white'>{config.line3}</p>
            </div>
        </div>
    </section>
}