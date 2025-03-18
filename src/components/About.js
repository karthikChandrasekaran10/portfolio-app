
import badmintonImg from '../assets/IMG_2741.jpg';

export default function About(){
    const config ={
        line1:`Hey there! I’m an international student currently based in Chicago,
         having moved to the U.S. to pursue my Master’s in Computer Science.`,
        line2:` I'm a passionate and driven Software Engineer with over 2 years of hands-on experience 
        building dynamic and responsive full-stack web applications. I thrive at the intersection of creativity 
        and code, blending intuitive user interfaces with powerful backend logic.`,
        line3: `I’m well-versed in front-end technologies like React.js, HTML, CSS, and Bootstrap, 
        and equally confident on the backend with Java, Hibernate, Node.js, Spring Boot, 
        and relational databases. I also bring expertise in TypeScript, Docker, Redis, 
        and cloud platforms like AWS. 
        My development approach emphasizes performance optimization, cross-browser compatibility, 
        and user-centric design.`,
        line4: `Beyond the tech world, 
        I’m a huge sports enthusiast! I love playing badminton, cricket, soccer, and more during my downtime. 
        I’ve even represented my university in the Mid-West Inter-State University Championships, 
        where our team proudly secured third place—a moment I’ll always cherish. 
        Whether I’m crafting elegant code or competing on the court, I’m always driven by passion, 
        collaboration, and a hunger to grow.

 `
    }

    return <section className='flex flex-col md:flex-row  bg-primary'id='about'>
        <div className='md:w-1/2'>
            {/* <img className='px-10 py-10 h-[400px] w-[400px] justify-end' src={AboutImg} alt ="MyImage1"></img> */}
            <img className='px-10 py-10 h-[600px] w-[700px] ' src={badmintonImg} alt ="MyImage2"></img>
        </div>
        <div className='md:w-1/2 flex justify-end'>
            <div className='flex flex-col justify-center px-10 py-5'>
                <h1 className='text-4xl text-white font-about-font border-b-4 border-primary mb-5 w-[140px] font-bold '>
                    About Me :</h1>

                <p className='text-white pb-5'> {config.line1}</p>    
                <p className='text-white pb-5'>{config.line2}</p>    
                <p className= 'text-white'>{config.line3}</p>
                <br/>
                <p className= 'text-white'>{config.line4}</p>
            </div>
        </div>
    </section>
}