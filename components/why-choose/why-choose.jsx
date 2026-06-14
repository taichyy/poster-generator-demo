import Image from "next/image";
import { Lightning, ShieldCheck, SlidersHorizontal, Timer } from "@phosphor-icons/react/dist/ssr";
import RevealStagger from "../reveal-stagger";

// Asymmetric bento: hero tile (col-span-2) + 3 smaller tiles
// Hero tile has a real image background, 3 tiles have distinct tints — no white-on-white

const BentoHero = () => (
    <div className="relative col-span-2 rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 group">
        <Image
            src="https://picsum.photos/seed/poster-print-shop-workspace/1200/700"
            alt="一番賞海報生成流程示意"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 66vw"
        />
        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
        <div className="relative z-10">
            <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
                核心流程
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-snug">
                三步驟完成
                <br />
                專業海報輸出
            </h3>
            <p className="mt-2 text-sm text-zinc-300 max-w-[38ch]">
                匯入素材 → 選擇版型 → 微調輸出。全程線上完成，不需安裝任何軟體。
            </p>
        </div>
    </div>
);

const tiles = [
    {
        icon: Timer,
        title: "30 秒出稿",
        desc: "智慧版型引擎自動排版，選好素材即可輸出。",
        bg: "bg-zinc-900",
        iconBg: "bg-emerald-400/10 text-emerald-400",
    },
    {
        icon: ShieldCheck,
        title: "資料安全隔離",
        desc: "所有素材加密存儲，嚴格存取控制。",
        bg: "bg-emerald-950/60",
        iconBg: "bg-emerald-400/10 text-emerald-400",
    },
    {
        icon: SlidersHorizontal,
        title: "逐項精細控制",
        desc: "字體、色彩、位置全部可調，所見即所得。",
        bg: "bg-zinc-900",
        iconBg: "bg-emerald-400/10 text-emerald-400",
    },
];

const WhyChoose = () => {
    return (
        <section id="features" className="py-28 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <RevealStagger>
                    {/* Section header - stacked, no eyebrow here (hero already used one) */}
                    <div className="mb-14">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                            功能亮點
                        </h2>
                        <p className="mt-3 text-zinc-400 text-base max-w-[42ch] leading-relaxed">
                            從素材到完稿，四項核心功能讓海報製作回歸本質。
                        </p>
                    </div>
                </RevealStagger>

                {/* Bento: md grid 3 cols — first item spans 2, then 3 smaller */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <RevealStagger delay={0.1}>
                        <BentoHero />
                    </RevealStagger>

                    {tiles.map((tile, i) => {
                        const Icon = tile.icon;
                        return (
                            <RevealStagger key={i} delay={0.15 + i * 0.07}>
                                <div
                                    className={`${tile.bg} rounded-2xl p-7 border border-white/[0.06] flex flex-col gap-4 hover:border-white/10 transition-colors duration-200 min-h-[200px]`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tile.iconBg}`}>
                                        <Icon size={18} weight="duotone" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-white tracking-tight mb-1.5">
                                            {tile.title}
                                        </h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed">
                                            {tile.desc}
                                        </p>
                                    </div>
                                </div>
                            </RevealStagger>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
