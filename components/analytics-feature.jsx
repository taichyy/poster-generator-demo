import Image from 'next/image';
import { Check } from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import RevealStagger from './reveal-stagger';

// Layout family: split left-image / right-text (only used ONCE across the whole page)
// Previous section was bento grid — this is different

const checkpoints = [
    "支援批次匯入商品素材",
    "付費方案享無限使用次數",
    "版型客製化，精準控制每個細節",
];

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
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

                    {/* Image — left col, slightly wider */}
                    <RevealStagger delay={0}>
                        <div className="relative">
                            {/* Tinted shadow matching section bg */}
                            <div className="absolute -inset-3 bg-emerald-50 rounded-3xl opacity-60 blur-2xl" />
                            <div className="relative rounded-2xl overflow-hidden border border-zinc-100 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.1)]">
                                <Image
                                    src="https://picsum.photos/seed/design-tool-editor-canvas/700/520"
                                    alt="海報編輯器操作介面"
                                    width={700}
                                    height={520}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </RevealStagger>

                    {/* Text — right col */}
                    <RevealStagger delay={0.12}>
                        <div>
                            {/* No eyebrow here — already used 1 eyebrow in bento hero, respecting the 1-per-3-sections rule */}
                            <h2 className="text-3xl md:text-[2.4rem] font-semibold tracking-tight leading-[1.15] text-zinc-950 mb-5">
                                完全掌控
                                <br />
                                每一個排版細節
                            </h2>
                            <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-[40ch]">
                                內建強大視覺編輯器，即時預覽與精準調整，讓每張海報都符合你的品牌風格。
                            </p>

                            <ul className="flex flex-col gap-3.5 mb-10">
                                {checkpoints.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 font-medium">
                                        <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                                            <Check size={11} weight="bold" className="text-emerald-600" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/projects"
                                className="inline-flex items-center h-11 px-7 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                            >
                                前往編輯器
                            </Link>
                        </div>
                    </RevealStagger>

                </div>
            </div>
        </section>
    );
};

export default AnalyticsFeature;
