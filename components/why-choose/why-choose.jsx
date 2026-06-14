import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ShieldCheck, SlidersHorizontal, Timer } from "@phosphor-icons/react/dist/ssr";

import RevealStagger from "../reveal-stagger";

const tileIcons = [Timer, ShieldCheck, SlidersHorizontal];
const tileBgs   = ["bg-zinc-900", "bg-emerald-950/60", "bg-zinc-900"];

const WhyChoose = async () => {
    const t = await getTranslations('whyChoose');

    const tiles = [0, 1, 2].map((i) => ({
        Icon: tileIcons[i],
        title: t(`tile${i}Title`),
        desc:  t(`tile${i}Desc`),
        bg:    tileBgs[i],
    }));

    return (
        <section id="features" className="py-28 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <RevealStagger>
                    <div className="mb-14">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                            {t('sectionTitle')}
                        </h2>
                        <p className="mt-3 text-zinc-400 text-base max-w-[42ch] leading-relaxed">
                            {t('sectionDesc')}
                        </p>
                    </div>
                </RevealStagger>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Bento hero — col-span-2 */}
                    <RevealStagger delay={0.1}>
                        <div className="relative col-span-2 rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 group">
                            <Image
                                src="https://picsum.photos/seed/poster-print-shop-workspace/1200/700"
                                alt="poster generation flow"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
                            <div className="relative z-10">
                                <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
                                    {t('bentoEyebrow')}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-snug whitespace-pre-line">
                                    {t('bentoTitle')}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-300 max-w-[38ch]">
                                    {t('bentoDesc')}
                                </p>
                            </div>
                        </div>
                    </RevealStagger>

                    {tiles.map(({ Icon, title, desc, bg }, i) => (
                        <RevealStagger key={i} delay={0.15 + i * 0.07}>
                            <div className={`${bg} rounded-2xl p-7 border border-white/[0.06] flex flex-col gap-4 hover:border-white/10 transition-colors duration-200 min-h-[200px]`}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-400/10 text-emerald-400">
                                    <Icon size={18} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-white tracking-tight mb-1.5">{title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        </RevealStagger>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
