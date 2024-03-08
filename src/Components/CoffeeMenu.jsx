import { menuData } from "../Data/menudata";
import CommonButton from "./Btn/CommonButton";
import CommonHeadTitle from "./CommonHeadTitle";

const CoffeeMenu = () => {

    return (
        <div className="section-container ">
            <div className="flex justify-center">
                <CommonHeadTitle title1={"Coffee Menu"} title={'Unlocklive Coffee Menu'} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  my-16">
                {
                    menuData.map(({id,imgUrl,title,discription,price})=>(
                        <div className="text-primary_color flex py-4 px-4 border border-gray_color rounded-md items-center justify-center" key={id}>
                            <div>
                                <img className="h-[70px] w-[70px] border-2 border-dashed border-secondary_color p-1 rounded-full " src={imgUrl} alt="" />
                            </div>
                            <div className="w-[60%] ms-4">
                                <h1 className="text-xl font-primary font-semibold">{title}</h1>
                                <p>{discription}</p>
                            </div>
                            <div className="text-gray_color">
                                ................................
                            </div>
                            <div className={`border border-dashed border-secondary_color p-4 inline-block  rounded-full ${id=== "1" && "bg-secondary_color text-white p-4"  } `}>
                                <span className="text-lg font-semibold ">${price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center ">
                <CommonButton text={'View All Menu'} />
            </div>
        </div>
    );
};

export default CoffeeMenu;