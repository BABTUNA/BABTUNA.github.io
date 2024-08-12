import React from 'react'
import Pill from '../components/Pill'
import usf from '../assets/usf.png'


const About = () => {

    const information = {
        About: "I'm an incoming third-year computer science student at the University of South Florida. Currently, I'm actively involved in 2 research labs working both on AI and full stack projects. My current research interests broadly include multimodal fusion and graph neural networks applied to spatial contexts. Beyond research, I develop full stack applications with various frontend and backend frameworks (see more below).",
        Awards: "Coinbase Onchain Summer Buildathon - GAMING with thirdweb, Best Startup at BearHacks (UC Riverside), Best User Experience Award at Roblox x USC Game Jam, Dean’s Honors List, Mount San Antonio College Honors Program"
    }
    return (
        <div >
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">About Me</h1>
                    <p className="mb-4 text-lg ">{information.About}</p>
                    <div>
                        <h2 className="text-lg font-semibold">AI Research Development</h2>
                        <p className="mb-4 text-lg">I have been actively involved in the DASH lab at Lehigh University (through an NSF REU) and the CSAIL lab at my local university. I am currently working on utilizing graph neural networks for air quality dispersion modeling for the DASH lab. In the CSAIL lab, I'm using multimodal fusion methods for language impairment detection. Through these labs, I typically use transformers, attention modules, graph neural networks, language embeddings (BERT, Glove), and Pytorch for modeling.</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Full Stack Development</h2>
                        <p className="mb-8 text-lg">Through various projects, both personal and at my research labs, I have learned frontend, backend, and deployment technologies. I typically use React with Typescript/Javascript for frontend development and ASP.NET, Django, or Spring for backend development. I also have experience in deployment with AWS (RDS, Elastic Beanstalk, and S3) with Docker. Please look at my Projects tab for more info!</p>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">Education</h1>

                    <div className="flex items-start mb-4">
                        <img src={usf} alt="UCI Icon" className=" w-14 h-12 mr-5" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">University South Florida</h2>
                                <p className="text-base">Aug. 2022 – May 2026</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-base text-gray-600" >Bachelor of Science in Computer Science</p>
                                <p className="text-sm">Tampa, FL</p>
                            </div>
                            <p className="text-base text-gray-600">GPA: 3.94 / 4.0</p>
                        </div>
                    </div>



                    <h1 className="text-2xl font-bold mb-4">Skills</h1>
                    <Pill text={"JavaScript"} />
                        <Pill text={"TypeScript"} />
                        <Pill text={"C#"} />
                        <Pill text={"Java"} />
                        <Pill text={"Python"} />
                        <Pill text={"C++"} />
                        <Pill text={"SQL (MySQL & PostgreSQL)"} />
                        <Pill text={"HTML"} />
                        <Pill text={"CSS"} />
                        <Pill text={"React"} />
                        <Pill text={"ASP.NET"} />
                        <Pill text={"Spring Boot"} />
                        <Pill text={"AWS"} />
                        <Pill text={"Git"} />
                        <Pill text={"Docker"} />
                        <Pill text={"Django"} />
                        <Pill text={"Express"} />
                        <Pill text={"Node.js"} />
                        <Pill text={"Tailwind"} />
                        <Pill text={"Gemini"} />
                        <Pill text={"GPT"} />
                        <Pill text={"Firebase"} />
                        <Pill text={"MongoDB"} />
                        <Pill text={"Supabase"} />
                        <Pill text={"Vite"} />
                </div>
            </div>
        </div>
    )
}

export default About
