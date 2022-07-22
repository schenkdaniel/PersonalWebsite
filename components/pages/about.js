export default function About() {
    return (
        <div className="flex flex-col items-center justify-center text-greyish">
            <p className="uppercase tracking-widest text-lighterBlue text-xl md:text-2xl font-medium pt-12 md:pt-1">About Me</p>
            <div className="text-base md:text-xl lg:text-2xl mt-5">
                <div className="flex flex-row font-light md:px-24 lg:px-48">
                    <p>As I said before, I am a computer science major at the  
                    <a href="https://umich.edu/" target="_blank" className="font-semibold text-lightBlue hover:text-grayblue"> University of Michigan</a>
                    . I got into software development when I was very young due to my favorite show, called "Chuck". I decided
                    to pursue a career in computer science after I attended a C++ programming camp when I was 12. 
                    In school, I am a part of the software team for 
                    <a href="https://www.umneuroprosthetics.org/about/" target="_blank" className="font-semibold text-lightBlue hover:text-grayblue"> Michigan Neuroprosthetics</a>
                    . I am also the lead developer for the popular Instagram artist 
                    <a href="https://www.instagram.com/leollii/" target="_blank" className="font-semibold text-lightBlue hover:text-grayblue"> @Leollii's </a>
                    NFT collection. The collection is called 
                    <a href="https://simulationplayers.vercel.app/" target="_blank" className="font-semibold text-lightBlue hover:text-grayblue"> Simulation Players</a>
                    . You can read more about this project under my featured projects. In addition, I have taught programming courses to aspiring 
                    software developers through 
                    <a href="https://www.idtech.com/" target="_blank" className="font-semibold text-lightBlue hover:text-grayblue"> iD Tech</a>
                    . I am passionate about software development and would like to create more impactful projects in the future. 
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-lighterBlue text-xl md:text-2xl font-medium pt-12">Skills</p>
                    <div className="flex mt-5 justify-center font-light">
                        <ul className="text-lightBlue list-square py-4 px-8 md:px-12 rounded-l-lg bg-inside">
                            <li><p className="text-offwhite">C/C++</p></li>
                            <li><p className="text-offwhite">Python</p></li>
                            <li><p className="text-offwhite">JavaScript</p></li>
                            <li><p className="text-offwhite">SQL</p></li>
                            <li><p className="text-offwhite">TypeScript</p></li>
                        </ul>
                        <ul className="text-lightBlue list-square py-4 px-8 md:px-12 bg-inside">
                            <li><p className="text-offwhite">Java</p></li>
                            <li><p className="text-offwhite">React.js</p></li>
                            <li><p className="text-offwhite">Node.js</p></li>
                            <li><p className="text-offwhite">Git</p></li>
                            <li><p className="text-offwhite">AWS</p></li>
                        </ul>
                        <ul className="text-lightBlue list-square py-4 px-8 md:px-12 rounded-r-lg bg-inside">
                            <li><p className="text-offwhite">Docker</p></li>
                            <li><p className="text-offwhite">Redis</p></li>
                            <li><p className="text-offwhite">Jenkins</p></li>
                            <li><p className="text-offwhite">MATLAB</p></li>
                            <li><p className="text-offwhite">RStudio</p></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}