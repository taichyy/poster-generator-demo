import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Check } from "@phosphor-icons/react/dist/ssr";

import RevealStagger from './reveal-stagger';

const AnalyticsFeature = async () => {
    const t = await getTranslations('analyticsFeature');
    const locale = await getLocale();
    const checkpoints = [t('check0'), t('check1'), t('check2')];

    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

                    <RevealStagger delay={0}>
                        <div className="relative">
                            <div className="absolute -inset-3 bg-red-50 rounded-3xl opacity-60 blur-2xl" />
                            <div className="relative rounded-2xl overflow-hidden border border-zinc-100 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.1)]">
                                <img
                                    src="/details.png"
                                    alt="poster editor interface"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </RevealStagger>

                    <RevealStagger delay={0.12}>
                        <div>
                            <h2 className="text-3xl md:text-[2.4rem] font-semibold tracking-tight leading-[1.15] text-zinc-950 mb-5 whitespace-pre-line">
                                {t('heading')}
                            </h2>
                            <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-[40ch]">
                                {t('desc')}
                            </p>
                            <ul className="flex flex-col gap-3.5 mb-10">
                                {checkpoints.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 font-medium">
                                        <span className="mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                                            <Check size={11} weight="bold" className="text-red-600" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`/${locale}/projects`}
                                className="inline-flex items-center h-11 px-7 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                            >
                                {t('cta')}
                            </Link>
                        </div>
                    </RevealStagger>

                </div>
            </div>
        </section>
    );
};

export default AnalyticsFeature;
