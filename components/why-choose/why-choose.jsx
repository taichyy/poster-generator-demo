import WhyChooseCard from './why-choose-card'

const WhyChoose = () => {

    const whtChooseTitle = "功能亮點";
    const whyChooseData = [
        // {
        //     why_image: "/images/i1.png",
        //     why_title: "免費試用",
        //     why_desc: "Tell us your Apple ID email address so we could send you a TestFlight invitation directly.",
        //     why_link_text: "快速註冊"
        // },
        {
            why_image: "/images/i2.png",
            why_title: "快速生成",
            why_desc: "快速生成高品質海報，節省您的時間和精力。",
            why_link_text: "功能簡介"
        },
        {
            why_image: "/images/i3.png",
            why_title: "機密保護",
            why_desc: "我們尊重您的隱私。您的設計和資料永遠不會在未經您同意的情況下被儲存或分享。",
            why_link_text: "快速使用"
        },
        {
            why_image: "/images/i4.png",
            why_title: "客製調整",
            why_desc: "使用我們易於使用的編輯工具來自訂您的海報，讓它真正屬於您。",
            why_link_text: "編輯模擬"
        }
    ]
    
    return (
        <div className="pt-16 pb-16">
            <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
                {whtChooseTitle}
            </h1>
            <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {whyChooseData.map((why, index) => (
                    <div key={index} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={index * 100}>
                        <WhyChooseCard
                            image={why.why_image}
                            title={why.why_title}
                            desc={why.why_desc}
                            // linkText={why.why_link_text}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose