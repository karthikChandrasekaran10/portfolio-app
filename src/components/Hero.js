import Hero1Img from '../assets/hero1.jpg';
import { FaLinkedin ,FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Hero(){
    const config ={
        subtitle:' Software Devloper, Wed Designer with Post Graduate in Computer Science.',
        social: {
            github: 'https://github.com/karthikChandrasekaran10',
            linkedin:'https://www.linkedin.com/in/karthik-chandrasekaran-1055b215b/',
            instagram:'https://www.instagram.com/karthik_.chandrasekaran/'
        }
        
    }



    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'id='home'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className= 'text-white text-6xl font-hero-font'>Hello People 
            <br/><span className='text-black'>I am Karthik Chandrasekaran</span>
                <p className='text-4xl'> Wecome to my official website !</p>
                <p className='py-5 text-2xl'> {config.subtitle}</p>

            </h1>
            <div className='flex py-10'>
                <a className='pr-5 hover:text-white' href={config.social.github}><FaGithub size={30} /> </a>
                <a className='pr-5 hover:text-white' href={config.social.linkedin}><FaLinkedin size={30}/></a>
                <a className='pr-5 hover:text-white' href={config.social.instagram}><FaInstagram size={30}/></a>
            </div>
        </div>
        <img className='md:w-1/3 px-5 py-5' src = {Hero1Img} alt ="MyImage"></img>

    </section>
}