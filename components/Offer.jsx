import Link from 'next/link';
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import RevealStagger from './reveal-stagger';

const stats = [
    { num: "1,247", label: "活躍用戶" },
    { num: "18,392", label: "已生成海報" },
    { num: "99.7%", label: "服務可用率" },
    { num: "< 31 秒", label: "平均出稿時間" },
];

const Offer = () => {
    
    const offerData = {
        offer_title: "此為 DEMO 版本網頁，僅供展示使用",
        offer_desc: "已移除後端生成、資料庫串接，僅提供前端介面展示。",
        offer_btn_text: "前往展示頁",
        offet_btn_link: "/projects",
        offer_bottom_text: "無須個人資訊"
    }

    return (
        <section className="bg-zinc-950 py-28 relative overflow-hidden">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Centered, single-column — different from every other section on the page */}
                <RevealStagger>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white mb-5">
                            14 天，免費體驗
                            <br />
                            <span className="text-emerald-400">完整功能</span>
                        </h2>
                        <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[36ch] mx-auto">
                            無需信用卡。試用期結束後自動轉為免費方案，不會無故扣款。
                        </p>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold hover:bg-emerald-300 active:scale-[0.98] transition-all duration-200"
                        >
                            開始免費試用
                            <ArrowRight size={15} weight="bold" />
                        </Link>
                        <p className="mt-4 text-zinc-600 text-xs">
                            無需信用卡 · 隨時可取消
                        </p>
                    </div>
                </RevealStagger>

                {/* Stats row — separated by horizontal rule */}
                {/* <div className="border-t border-zinc-800 pt-14">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <RevealStagger key={i} delay={i * 0.07}>
                                <div className="text-center md:text-left">
                                    <p className="font-mono text-3xl md:text-4xl font-semibold text-white tracking-tight">
                                        {stat.num}
                                    </p>
                                    <p className="mt-1.5 text-sm text-zinc-500">
                                        {stat.label}
                                    </p>
                                </div>
                            </RevealStagger>
                        ))}
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default Offer;
