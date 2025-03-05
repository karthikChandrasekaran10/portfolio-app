import PortfolioImg from '../assets/portfolioscreenshot.png';
import EcommerceImg2 from '../assets/ecommerce.jpg';
import EcommerceImg3 from '../assets/ecommerce.jpg';

export default function Projects(){
    const config = {
        projects:[
            {
                image:PortfolioImg,
                description: 'Built my personal portfolio Website using React, JavaScript, Tailwind CSS, Git and  Netlify',
                link: 'https://github.com/karthikChandrasekaran10/portfolio-app' 
            },
            {
                image:EcommerceImg2,
                description: 'Project Description',
                link:'https://github.com/karthikChandrasekaran10/'
            },
            {
                image:EcommerceImg3,
                description: 'Project Description',
                link: 'https://github.com/karthikChandrasekaran10/'
            }
        ]
    }


    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl text-white border-b-4 border-black mb-5 w-[140px] font-bold ">
                    Projects
                </h1>
                <p className='text-white'>
                    These are some of my projects that I had been working on using React, HTML, CSS. 
                    Please do check them out.
                </p>
            </div> 
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-10'>
                {config.projects.map((project)=>(
                <a href={project.link}>
                    <div className='relative' >
                    <img className='h-[200px]  w-[500px]hover:border-2 border-white rounded' src = {project.image} alt="projectImage"></img>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5 text-white'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' href={project.link}>View Repository</a>
                            </div>
                        </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
    </section>
}