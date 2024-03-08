import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import img3 from '../../public/pic/Image.jpg';
import img4 from '../../public/pic/Images.png';
const NewResepes = () => {
    return (
        <div className="bg-[#fffaf2]  py-24 ">
            <div className="section-container flex">
                <div className=" w-[60%]  space-y-6">
                    <div className="flex items-center gap-3 ">
                        <p className="w-12 bg-gradient-to-r from-white to-secondary_color h-[2px]"></p>
                        <p><span className="text-secondary_color ">New Recipes</span></p>
                    </div>
                    <p className="font-primary text-4xl font-semibold text-primary_color">Taste Our New Recipe</p>
                    <p>Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. </p>
                    <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look
                        slightly believable.</p>
                    <div className="flex text-5xl text-secondary_color">
                        <IoArrowBackCircleOutline />
                        <IoArrowForwardCircleOutline />
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <img src={img3} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-3xl"></div>

                    </div>
                    <div className="relative text-white">
                        <img src={img4} alt="" className="w-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-3xl"></div>

                        <ul className="list-disc ps-8 absolute bottom-0 mb-7">
                            <li>Pita bread or wraps</li>
                            <li>Toppings: tomatoes, tahini sauce, etc.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NewResepes;