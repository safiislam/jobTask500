
const CommonButton = ({text}) => {
    return (
        <button className="px-6 py-2 transition-all duration-300 rounded-md hover:bg-secondary_color hover:text-white text-secondary_color border-2 border-secondary_color">
            {text}
        </button>
    );
};

export default CommonButton;