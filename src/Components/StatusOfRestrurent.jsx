import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { ourDatailsData } from "../Data/detailsData";



const StatusOfRestrurent = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false)


    return (
        <div className="bg-[#fffaf2] ">
            <div className=" relative flex items-center section-container">
                <div className="bg-secondary_color h-[326px] absolute top-2 left-0  w-[300px] rounded-b-md flex items-center justify-center">
                    {
                        !isVideoOpen && (
                            <div onClick={() => setIsVideoOpen(true)} className="flex gap-2 items-center text-white">
                                <BsPlayCircle className="text-5xl" />
                                <p className="text-lg">Play Intro Video</p>
                            </div>
                        )
                    }
                    {
                        isVideoOpen && (

                            <iframe className="h-full w-full" src="https://www.youtube.com/embed/DoX0vOy0UMI?si=bcMw0mUhUkUEpbek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        )
                    }
                    {
                        isVideoOpen && (
                            <span className="absolute top-0 right-0 text-white" onClick={() => setIsVideoOpen(false)}><MdOutlineCancelPresentation />
                            </span>
                        )


                    }

                </div>
                <div className="w-full flex justify-end ">
                    <div className="  w-[70%] h-[246px] flex justify-around  items-center  text-center">
                        {
                            ourDatailsData.map(({ id, title, p1, p2 }) => (
                                <div key={id}>
                                    <p className="text-xl font-semibold">{title}</p>
                                    <p className={` mt-3 ${id === '2' ? 'w-[60%] mx-auto' : 'w-full '}`}>{p1 && p1}</p>
                                    <p>{p2 && p2}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusOfRestrurent;