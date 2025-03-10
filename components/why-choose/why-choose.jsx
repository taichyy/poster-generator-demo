import WhyChooseCard from './why-choose-card'

const WhyChoose = () => {
    const whyChooseData = [
        {
            why_image: "/images/i1.png",
            why_title: "免費試用",
            why_desc: "Tell us your Apple ID email address so we could send you a TestFlight invitation directly.",
            why_link_text: "快速註冊"
        },
        {
            why_image: "/images/i2.png",
            why_title: "快速生成",
            why_desc: "Tell us your Apple ID email address so we could send you a TestFlight invitation directly.",
            why_link_text: "功能簡介"
        },
        {
            why_image: "/images/i3.png",
            why_title: "機密保護",
            why_desc: "Tell us your Apple ID email address so we could send you a TestFlight invitation directly.",
            why_link_text: "快速試用"
        },
        {
            why_image: "/images/i4.png",
            why_title: "客製調整",
            why_desc: "Tell us your Apple ID email address so we could send you a TestFlight invitation directly.",
            why_link_text: "編輯模擬"
        }
    ]
    
    return (
        <div className="pt-16 pb-16">
            <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
                功能亮點
            </h1>
            <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {whyChooseData.map((why, index) => (
                    <div key={index} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={index * 100}>
                        <WhyChooseCard
                            image={why.why_image}
                            title={why.why_title}
                            desc={why.why_desc}
                            linkText={why.why_link_text}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose