
import PhotoAlbum from "react-photo-album";
import { categoriesDatas } from "../Data/categoryData";
import CommonHeadTitle from "./CommonHeadTitle";
import { imageDatas } from "../Data/imageData";

const ImageGellary = () => {
    return (
        <div className="section-container">
            <div className="mx-auto">
                <CommonHeadTitle title={'Our Chefs New Creations'} title1={'Showcase'} discription={`Behold the extraordinary creations born from the synergy of our users' ingenuity and the transformative power of AI, a testament to boundless innovation.`} />
            </div>
            <div className="flex justify-around w-[70%] mx-auto mt-8">
                {
                    categoriesDatas.map(({ id, title }) => (
                        <p className={`${id === "1" && 'border-2 border-secondary_color text-secondary_color px-4 py-1 rounded-full '}`} key={id}>
                            {title}
                        </p>
                    ))
                }
            </div>
            <div className="mt-8">
                <PhotoAlbum layout="rows" photos={imageDatas} />
            </div>
        </div>
    );
};

export default ImageGellary;