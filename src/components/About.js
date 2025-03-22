
    import badmintonImg from '../assets/IMG_2741.jpg';

    export default function About(){
        const config ={
            line1:`Hey there! I’m an international student currently based in Chicago, having moved to the U.S. to pursue my Master’s in Computer Science.I'm a passionate and driven Software Engineer with over two years of hands-on experience building dynamic, responsive full-stack web applications. I thrive at the intersection of creativity and code—crafting intuitive user interfaces and powering them with robust backend logic.`,
            line2: `I’m well-versed in front-end technologies like React.js, HTML, CSS, and Bootstrap, and equally confident on the backend with Java, Spring Boot, Hibernate, and Node.js. I also bring solid experience with TypeScript, Docker, Redis, and cloud platforms like AWS. My development approach focuses on performance optimization, cross-browser compatibility, and user-centric design.`,

            line3: `Outside the world of tech, I’m a huge sports enthusiast! I enjoy playing badminton, cricket, soccer, and more during my downtime. One of my proudest moments was representing my university in the Mid-West Inter-State University Championships, where our team clinched third place—a memory I’ll always cherish.
                    Whether I’m crafting elegant code or competing on the court, I’m fueled by passion, collaboration, and a constant desire to grow.`
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