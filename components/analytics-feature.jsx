import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeature = () => {
    
    const AFData = {
        af_upper_text: "一份資料，多個版型",
        af_title: "只需上傳一次資料，即可生成多種不同版型的海報",
        af_desc: "利用我們的海報生成工具，您只需上傳一次資料，系統便會自動為您生成多種不同版型的海報，節省您的時間和精力。無論是促銷活動、產品展示還是活動宣傳，我們都能幫助您快速創建出專業且吸引人的海報設計。",
        af_items: [
            { item_text: "線上調整" },
            { item_text: "快速生成 .ai 檔案" },
            { item_text: "支援線上編輯調整" },  
        ],
        af_explore_text: "探索更多",
    }
    return (
        <div className="pt-24 pb-16">
            {/* Define grid */}
            <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Image Content */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <Image
                        src="/images/a.jpg"
                        alt="Analytics"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
                {/* Text Content */}
                <div className="p-6">
                    <h1 className="text-base font-semibold text-orange-500">
                        {AFData.af_upper_text}
                    </h1>
                    <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        {AFData.af_title}
                    </h1>
                    <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
                        {AFData.af_desc}
                    </p>
                    <ul className="mt-7 space-y-2 text-gray-800 ">
                        {AFData.af_items.map((item, index) => (
                            <li key={index} className="flex items-center font-semibold">
                                <FaCheckCircle className="text-green-500 mr-2" />   
                                {item.item_text}
                            </li>       
                        ))}
                    </ul>
                    <Link href="/projects">
                        <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white">
                            {AFData.af_explore_text} &rarr;
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsFeature