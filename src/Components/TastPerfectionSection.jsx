import { smallCardData } from "../Data/smallCardData";
import CommonButton from "./Btn/CommonButton";
import img from '../../public/Layer 1 5.jpg';


const TastPerfectionSection = () => {
    return (
        <div className=" mt-48 text-primary_color grid grid-cols-2 ">
            <div className="space-y-4">
                <div className="flex items-center gap-3 ">
                    <p className="w-12 bg-gradient-to-r from-white to-secondary_color h-[2px]"></p>
                    <p><span className=" ">Why Choose Us</span></p>
                </div>
                <p className="font-primary text-4xl font-semibold">Choosing Unlocklive, A Taste of Perfection</p>
                <p className="text-base">Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
                <div className="">
                    <div className="flex justify-between py-8">
                        {
                            smallCardData.map(({ id, title, number }) => (
                                <div key={id}>
                                    <div className="border w-[180px] py-5 rounded-md flex justify-center items-center text-center h-[100px] border-black">
                                        <div>
                                            <p className="text-[40px] font-primary font-normal">{number}+ </p>
                                            <p className="text-xl">{title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <p>Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.</p>
                    </div>
                    <div className="mt-10">
                        <CommonButton text={"Explore Our Menus"} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <div className="h-[500px] w-[464px] ">
                    <img className="h-full w-full" src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default TastPerfectionSection;