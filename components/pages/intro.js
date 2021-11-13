import DownloadButton from '../buttons/downloadButton'
import GitHubButton from '../buttons/githubButton'
import styles from "./styles.module.css"

export default function Intro() {
    return (
        <header id={styles.intro} className="bg-darkBlue h-screen flex flex-col justify-around font-light">
            <div id="greeting" className="text-lighterBlue text-xl">
                <p className="pt-5 pb-0 justify-center font-medium">Hey! My name is,</p>
            </div>
            <div id="greeting" className="flex flex-row">
                <p className="text-3xl md:text-6xl pr-5 text-offwhite font-bold justify-center">Daniel <span className="text-offwhite">Schenk</span></p>
            </div>
            <div className="max-w-2xl">
                <p className="text-xl text-greyish tracking-widest md:text-2xl leading-relaxed lg:text-4xl">
                    I am currently an undergraduate student at the {' '}
                    <span className="font-bold text-lightBlue hover:text-grayblue">
                        <a href="https://www.umich.edu" target="_blank">University of Michigan </a>
                    </span>
                    studying computer science. I'm passionate about software development 
                    and creating projects that can make a difference!
                </p>
            </div>
            <div className="text-md lg:text-lg md:flex">
               <div className="items-center justify-center pt-6 md:pt-6"> <DownloadButton buttonText="Resume"/> </div>
               <div className="items-center justify-center pt-6 md:pt-6 md:pl-12"> <GitHubButton  buttonText="GitHub"/> </div>
            </div>
        </header>
    )
}