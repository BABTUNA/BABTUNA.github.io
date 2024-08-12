import React from 'react'
import Card from '../components/Card'
import surveycs from '../assets/surveycs.png'
import airtracker from '../assets/airtracker.png'
import medsave from '../assets/medsave.png'
import space4all from '../assets/space4all.png'

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8"> 
      <Card className="mx-h-4"imageSrc={surveycs} title={"SurveyCS"} skills={[{ text: "ReactJS" }, { text: "Django" }, { text: "GPT" }, { text: "LangChain" }, { text: "AWS" }, { text: "Docker" }, { text: "Tailwind" }]} description={"In typical research projects, you first conduct a survey of papers you are interested in reading, then spend around 2-3 minutes skimming through the papers to decide whether to read them. SurveyCS helps cut down on this process by answering questions you always tend to search in a research paper and integrates a chatbot for future questions. This full-stack application was created with ReactJS on the frontend and Django on the backend. The backend follows a RAG-type model with GPT to efficiently search and query for any additional questions the user might have on the research paper."} />
      <Card className="mx-h-4"imageSrc={airtracker} title={"AirTracker"} skills={[{ text: "C#" }, { text: "ASP.NET" }, { text: "React" }, { text: "TypeScript" }, { text: "MongoDB" }, { text: "MapBox" }, { text: "ReactGL" }, { text: "Firebase" }, { text: "Chart.js" }]} description={"In the DASH lab, the hardware team developed air quality tracking sensors mounted on top of garbage trucks to monitor particulate matter levels in different parts of the city. To display this data, I used React with Typescript for the frontend, along with Mapbox and ReactGL for mapping formatting. Firebase was also used for user authentication. Additionally, the backend was created with the ASP.NET ecosystem with MongoDB as the database (currently being migrated to an SQL type database)."} />
      <Card imageSrc={space4all} title={"Space4All"} skills={[{ text: "Spring" }, { text: "Java" }, { text: "ReactJS" }, { text: "Tailwind" }, { text: "Supabase" }, { text: "PostgreSQL" }, { text: "Gemini" }]} description={"This project was a part of an online hackathon aimed at promoting space education. For our project, we wanted to target K-12 kids in planetology utilizing Gemini AI-generated learning and testing context. This application also offers a leaderboard display so kids can compete and be motivated to learn. For this app, I helped my 2 friends work on the frontend with ReactJS and Tailwind while I focused on constructing the backend with Spring connected to a PostgreSQL (Supabase) database."} />
      <Card imageSrc={medsave} title={"MedSave"} skills={[{ text: "ReactJS" }, { text: "Express" }, { text: "MySQL" }, { text: "Gemini API" }, { text: "Node.js" }]}  description={`After you visit the doctor or medical clinic, it is required that they write a transcript and medical encoding of the disease or condition you have. The process of finding the correct medical encoding (represented through numbers) can take a fair bit of time if you have multiple conditions and/or the doctor doesn't know the code from memory. To resolve this, I designed MedSave. A full-stack application aimed at converting the patient transcript to medical code. For this app, I used ReactJs for the frontend and Express for the backend. I also connected the backend to a MySQL database with manual queries to learn about relational databases (something that is largely abstracted with backend frameworks).`} />
         
    </div>
  )
}

export default Projects
