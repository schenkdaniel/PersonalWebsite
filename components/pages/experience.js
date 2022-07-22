import ExternalLinkIcon from "../buttons/externalLinkIcon";
import BackArrowIcon from "../buttons/backArrowIcon";
import React from 'react';

export default function Experience() {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly pb-10">
        <div className="p-6 max-w-2xl flex flex-col items-center px-12">
            <div className="flex flex-row items-start">
                <p className="font-medium font-semibold text-lg md:text-xl text-offwhite text-center">Shibumi</p>
                    <a href="https://shibumi.com/" target="_blank">
                        <ExternalLinkIcon strokeWidth="1.5" size={15} color="#EEFBFB" hoverColor="#A0A1A1"/>
                    </a>
            </div>
            <p className="max-w-2xl text-sm md:text-base text-base text-center items-start lg:text-base text-white">Software Engineering Intern | Royal Oak, MI | May 2022 - August 2022</p>
            <div className="text-greyish font-light text-base md:text-large lg:text-xl leading-relaxed py-2 md:text-start px-4 flex flex-row">
                <button id="partial" className="flex flex-col items-start" onClick={() => (document.getElementById('full').style.display='block', document.getElementById('partial').style.display='none')}>
                <p className="hover:cursor-pointer max-w-2xl text-greyish font-light text-base md:text-large lg:text-xl leading-relaxed py-2 text-start px-4 flex flex-row">Shibumi is a small but impactful enterprise-facing software company. I was lucky enough to spend 4 months interning at Shibumi and learning the ins and outs of software engineering...</p></button>
                    <span id="full" className="hidden"><p className="max-w-2xl text-greyish font-light text-base md:text-large lg:text-xl leading-relaxed py-2 text-start md:px-5 flex flex-row">Shibumi is a small but impactful enterprise-facing software company. I was lucky enough to spend 4 months interning at Shibumi and learning the ins and outs of software engineering.<br/>
                    During my internship, I completely rewrote and optimized an entire microservice. I rewrote the service in Node.js and typescript from Java and Node.js. I was also able to increase speed,
                    decrease memory usage, and increase the readablity of code. I also learned how to use AWS S3 buckets, and the Nest.js framework. <br/>
                    In addition, I created a full-stack application allowing Shibumi's clients the ability to configure SSO support with a simple UI. This involved front-end work with typescript and React, back-end work
                    with Java, and everything in between with: SQL, AWS, and Redis. <br/>
                    I learned a lot from my time at Shibumi, not only to write efficient and effective code, but more importantly, to read, understand, and build off of my colleagues' work.</p>
                    <button onClick={() => (document.getElementById('full').style.display='none', document.getElementById('partial').style.display='inline')}><BackArrowIcon strokeWidth="2" size={20} color="#EEFBFB" hoverColor="#A0A1A1"/></button></span>
            </div>
            <div className="md:flex text-base leading-relaxed">
                <ul className="flex list-none text-lightBlue justify-center px-2">
                        <li className="px-4">Java</li>
                        <li className="px-4">TypeScript</li>
                </ul>
                <ul className="flex list-none text-lightBlue justify-center">
                        <li className="px-4">Node.js</li>
                        <li className="px-4">SQL</li>
                </ul>
            </div>
        </div>
        <div className="pt-10 px-10">
            <a href="https://shibumi.com/" target="_blank"><img className="hover:opacity-75" width="400" height="198" src="./images/shibumiScreenshot.png"/></a>
        </div>
    </div>
    )
}