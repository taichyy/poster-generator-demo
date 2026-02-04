import Image from 'next/image'

const Hero = () => {

    const heroData = {
        hero_label: "全新上線，免費試用中！",
        hero_title: "最優質的一番賞海報生成工具",
        hero_desc: "匯入素材，選擇版型，線上微調，即可生成一番賞海報。\n無需設計技能，輕鬆完成。",
    }

    return (
        <div className="flex-1 bg-[#f7f6fb] min-h-[50vh]">
            <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Text Content */}
                    <div>
                        {/* Top box */}
                        {/* {heroData.hero_label && (
                            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
                                <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 hover:bg-blue-800 md:text-base sm:text-sm text-xs text-white transition-all duration-150">
                                    New
                                </div>
                                <p className=' text-xs sm:text-sm'>
                                    {heroData.hero_label}
                                </p>
                            </div>
                        )} */}
                        {/* Heading */}
                        {heroData?.hero_title && (
                            <h1 data-aos="fade-up" className=" text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3.5rem] lg:leading-[3.8rem]">
                                {heroData.hero_title}
                            </h1>
                        )}
                        {/* Description */}
                        {heroData?.hero_desc && (
                            <p className="text-gray-700">
                                {heroData?.hero_desc}
                            </p>
                        )}
                        {/* Play store and App store image */}
                        <div className="flex mt-8 mb-8 items-center space-x-4">
                            
                        </div>
                    </div>
                    {/* Image Content */}
                    <div data-aos="fade-up" data-aos-delay="200" className="hidden lg:block">
                        <Image
                            src="/images/hero.png"
                            alt="hero"
                            width={700}
                            height={700}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero