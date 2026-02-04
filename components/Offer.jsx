import Link from "next/link"

const Offer = () => {
    
    const offerData = {
        offer_title: "此為 DEMO 版本網頁，僅供展示使用",
        offer_desc: "已移除後端生成、資料庫串接，僅提供前端介面展示。",
        offer_btn_text: "前往展示頁",
        offet_btn_link: "/projects",
        offer_bottom_text: "無須個人資訊"
    }

    return (
        <div className="flex items-center justify-center pt-24 pb-24 mb-20 bg-black">
            <div className="text-center px-6 ">
                <h2 className=" text-white text-2xl md:text-3xl font-semibold mb-4">
                    {offerData.offer_title}
                </h2>
                <p className="text-gray-400 mb-8">
                    {offerData.offer_desc}
                </p>
                <Link href={offerData.offet_btn_link}>
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-600">
                        {offerData.offer_btn_text}
                    </button>
                </Link> 
                <p className="text-gray-400">
                    {offerData.offer_bottom_text}
                </p>
            </div>
        </div>
    )
}

export default Offer