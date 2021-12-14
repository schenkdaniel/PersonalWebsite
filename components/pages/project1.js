import ExternalLinkIcon from "../buttons/externalLinkIcon";

export default function Project1() {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
        <div className="p-6 max-w-2xl flex flex-col items-center px-12">
            <div className="flex flex-row items-start">
                <p className="font-medium font-semibold text-lg md:text-xl text-offwhite">Simulation Players</p>
                    <a href="https://simulationplayers.vercel.app/" target="_blank">
                        <ExternalLinkIcon strokeWidth="1.5" size={15} color="#EEFBFB" hoverColor="#A0A1A1"/>
                    </a>
            </div>
            <div className="text-greyish font-light text-base md:text-large lg:text-xl leading-relaxed py-2 md:text-start px-4 flex flex-row">
                <p>In this project, I had to delve deeply into the world of NFTs and blockchain.
                     For this project, I created a website, discord, discord bots, randomized NFT Generator, minting Dapp, and smart contract.
                     <p className="text-sm md:text-base lg:text-base text-greyish pt-2">I am not able to share my code for this project due to legal reasons but email me if you would like some info!</p>
                </p>
            </div>
            <div className="md:flex text-base leading-relaxed">
                <ul className="flex list-none text-lightBlue justify-center px-2">
                        <li className="px-4">Next.js</li>
                        <li className="px-4">TailwindCSS</li>
                </ul>
                <ul className="flex list-none text-lightBlue justify-center">
                        <li className="px-4">Solidity</li>
                        <li className="px-4">Smart Contracts</li>
                </ul>
            </div>
        </div>
        <div className="pt-10 px-10">
            <img src="./images/simulationplayerssmallimg.png"/>
        </div>
        </div>
    )
}