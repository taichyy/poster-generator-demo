const WhyChooseCard = ({ image, title, desc, linkText }) => {
    return (
        <div>
            <img
                src={image}
                alt={title}
                className="object-contain mx-auto"
            />
            <h1 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800 capitalize ">
                {title}
            </h1>
            <p className="text-gray-600 text-center font-medium text-sm mb-7">
                {desc}
            </p>
            {/* <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
                {linkText} &#8594;
            </p> */}
        </div>
    )
}

export default WhyChooseCard