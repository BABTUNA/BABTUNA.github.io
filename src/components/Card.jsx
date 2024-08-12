import React from 'react'
import Pill from './Pill'

const Card = ({ imageSrc, title, skills, description }) => {
    return (
        <div className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
            <div className="relative m-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 aspect-w-20 aspect-h-10 md:aspect-w-40 md:aspect-h-10 md:w-1/2">
                <img
                    src={imageSrc}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-start w-full md:w-1/2 relative">
                <h6 className="mb-2 md:mb-4 block text-base md:text-xl font-bold leading-relaxed tracking-normal text-black antialiased text-left">
                    {title}
                </h6>
                <p className="mb-4 block font-semibold text-md md:text-lg font-normal leading-relaxed text-black antialiased text-left" dangerouslySetInnerHTML={{ __html: description }}>
                </p>
                <div className="flex flex-wrap mb-4">
                    {skills.map((item, index) => (
                        <Pill key={index} text={item.text} />
                    ))}
                </div>
               
            </div>
        </div>
    );
};

export default Card
