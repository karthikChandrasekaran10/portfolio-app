export default function Contact(){
    const config ={
        email : 'karthikchandrasekaran326@gmail.com',
        phone : '+1 (872) 279 XXXX'
    }

    return <section className='flex flex-col bg-secondary text-white' id='contact'>
        <div className='flex flex-col items-center px-5 py-32'>

            <h1 className='text-4xl   border-b-4 border-primary mb-5  font-bold '>
                    Contact Information</h1>
            <p className='text-2xl pb-5'>
                You can reach me out in :</p>
                <p className="py-2 md:text-2xl"><span className="font-bold">Email: </span>{config.email}</p>
                <p className="py-2 md:text-2xl"><span className="font-bold">Phone: </span>{config.phone}</p>

        </div>
    </section>
}