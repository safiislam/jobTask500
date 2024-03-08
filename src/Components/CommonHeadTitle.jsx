
const CommonHeadTitle = ({ title1, title, discription }) => {
    return (
        <div className="w-[50%] mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3 text-secondary_color ">
                <p className="w-12 bg-gradient-to-r from-white to-secondary_color h-[2px]"></p>
                <p><span className=" ">{title1}</span></p>
                <p className="w-12 bg-gradient-to-r from-secondary_color to-white h-[2px]"></p>
            </div>
            <p className="text-4xl font-normal font-primary text-primary_color">{title}</p>
            {
                discription && <div key={'1'}>{discription}</div>
            }

        </div>
    );
};

export default CommonHeadTitle;