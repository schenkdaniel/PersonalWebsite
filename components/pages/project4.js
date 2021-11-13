import ExternalLinkIcon from "../buttons/externalLinkIcon";

export default function Project4() {
    return (
        <div className="flex flex-col items-center mt-5">
            <div className="p-6 max-w-2xl">
                <div className="flex flex-row items-start px-4">
                    <p className="font-medium font-semibold text-lg md:text-xl text-offwhite">Office Hours Queue</p>
                </div>
                <div className="text-greyish font-light text-base md:text-large lg:text-xl leading-relaxed py-2 md:text-start px-4 flex flex-row">
                    <p>An office hours queue where users can be pushed on and popped off the queue using personally implemented linked lists. (Run on a Python server)
                        <p className="text-sm md:text-base lg:text-base text-greyish pt-2">I am not able to share my code for this project due to academic integrity issues, but email me if you would like some info!</p>
                    </p>
                </div>
                <div className="md:flex text-base leading-relaxed">
                    <ul className="flex list-none text-lightBlue justify-center px-2">
                            <li className="px-4">C++</li>
                            <li className="px-4">Python</li>
                    </ul>
                    <ul className="flex list-none text-lightBlue justify-center">
                            <li className="px-4">Linked Lists</li>
                            <li className="px-4">Web Backend</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}