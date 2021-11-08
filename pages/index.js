import Head from 'next/head'
import Intro from '../components/pages/intro'
import About from '../components/pages/about'
import LinkedinIcon from '../components/buttons/linkedinIcon'
import EmailIcon from '../components/buttons/emailIcon'
import GitHubIcon from '../components/buttons/githubIcon'
import DownloadIcon from '../components/buttons/downloadIcon'

export default function Home() {
  return (
    <div className="bg-darkBlue">
      <Head>
        <title>Daniel Schenk</title>
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"/>
        <link rel="manifest" href="images/site.webmanifest"/>
      </Head>
      <div className="pr-2 pt-2 bg-darkBlue pb-12 md:pb-2">
            <div className="flex flex-row justify-end items-end space-x-2">
                <a href="https://opensea.io/collection/simulationplayers" target="_blank">
                <GitHubIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
                </a>
                <a href="https://discord.gg/c59gnvF35M" target="_blank">
                <LinkedinIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
                </a>
                <a href="https://www.instagram.com/leollii" target="_blank">
                <DownloadIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
                </a>
                <a href="https://twitter.com/simplayersnft" target="_blank">
                <EmailIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
                </a>
            </div>
      </div>
      <Intro/>
      <div className="mb-12 mx-12 my-5"><About/></div>

      <footer className="w-full py-10 flex flex-col justify-center items-center bg-darkBlue">
        <div className="flex flex-row justify-end items-end space-x-2 my-2">
            <a href="https://opensea.io/collection/simulationplayers" target="_blank">
              <GitHubIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
            </a>
            <a href="https://discord.gg/c59gnvF35M" target="_blank">
              <LinkedinIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
            </a>
            <a href="https://www.instagram.com/leollii" target="_blank">
              <DownloadIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
            </a>
            <a href="mailto:schenkd@umich.edu" target="_blank">
              <EmailIcon size={44} color="#4DA8DA" hoverColor="#425664" strokeWidth="1.5" />
            </a>
          </div>
        <p className="text-offwhite">Built & designed by Daniel Schenk</p>
      </footer>
    </div>
  )
}
