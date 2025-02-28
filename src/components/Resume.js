import ResumeImg from '../assets/resumeimg.jpg';

export default function Resume(){
    const config = {
            link: "https://drive.google.com/file/d/15w1-vZBfpZ-lhIGUhgJRCjM1n9sjpfda/view?usp=sharing"
    }
    return <section className='flex flex-col md:flex-row  bg-primary'id='resume'>
         <div className='py-5 md:w-1/2 flex justify-center md:justify-end '>
            <img className='px-10 py-10 h-[400px] w-[400px]' src={ResumeImg} alt="resumeImage"></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center px-10 py-10'>
                <h1 className='text-4xl text-white  border-b-4 border-primary mb-5 w-[150px] font-bold '>
                    Resume:</h1>

                <p className='text-2xl text-white pb-5'>
                You can view and download my resume. </p> 
                <a className='btn' href={config.link}>Download</a>
            </div>
        </div>
    </section>
}