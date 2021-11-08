import DownloadIcon from "./downloadIcon";

export default function DownloadButton(props) {
    return (
        <a href="./documents/Resume-Daniel-Schenk.pdf" download="Daniel-Schenk-Resume">
            <button className="hover:bg-grayblue py-4 flex flex-row justify-center items-center rounded-md bg-lighterBlue">
                <span className="pr-2 pl-12"><DownloadIcon size={20} color="#EEFBFB" hovercolor="#EEFBFB" strokewidth="2"/></span>
                <p className="tracking-widest text-white pr-12">{props.buttonText}</p>
            </button>
        </a>
    )
}