import { motion } from 'framer-motion';
import Hero1Img from '../assets/hero1.jpg';
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    const config = {
        subtitle: ' Software Developer, Web Designer with Masters in Computer Science.',
        social: {
            github: 'https://github.com/karthikChandrasekaran10',
            linkedin: 'https://www.linkedin.com/in/karthik-chandrasekaran-1055b215b/',
            instagram: 'https://www.instagram.com/karthik_.chandrasekaran/'
        }
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-16 bg-secondary justify-center items-center relative' id='home'>
            <motion.div
                className='md:w-1/2 flex flex-col items-center md:items-start'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className='text-white text-4xl md:text-6xl font-hero-font text-center md:text-left'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Hello People <br />
                    <span className='text-black'>I am Karthik Chandrasekaran</span>
                </motion.h1>
                <motion.p className='text-3xl text-white font-hero-font md:text-4xl text-center md:text-left'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Welcome to my official website!
                </motion.p>
                <motion.p className='py-5 text-2xl font-hero-font text-center md:text-left'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    {config.subtitle}
                </motion.p>

                <motion.div
                    className='flex py-10 justify-center md:justify-start'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <a className='pr-5 hover:text-white' href={config.social.github}><FaGithub size={30} /></a>
                    <a className='pr-5 hover:text-white' href={config.social.linkedin}><FaLinkedin size={30} /></a>
                    <a className='pr-5 hover:text-white' href={config.social.instagram}><FaInstagram size={30} /></a>
                </motion.div>
            </motion.div>

            <motion.img
                className='md:w-1/3 h-[600px] object-cover rounded-lg'
                src={Hero1Img}
                alt="MyImage"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            />
        </section>
    );
}
