import Link from 'next/link';
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, getLocale } from 'next-intl/server';

import RevealStagger from './reveal-stagger';

const Offer = async () => {
    const t = await getTranslations('offer');
    const locale = await getLocale();

    return (
        <section className="bg-zinc-950 py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="max-w-7xl mx-auto px-6">
                <RevealStagger>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white mb-5">
                            {t('title')}
                            <br />
                            <span className="text-red-500">{t('titleHighlight')}</span>
                        </h2>
                        <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[36ch] mx-auto">
                            {t('desc')}
                        </p>
                        <Link
                            href={`/${locale}/projects`}
                            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-500 active:scale-[0.98] transition-all duration-200"
                        >
                            {t('cta')}
                            <ArrowRight size={15} weight="bold" />
                        </Link>
                        <p className="mt-4 text-zinc-600 text-xs">{t('footnote')}</p>
                    </div>
                </RevealStagger>
            </div>
        </section>
    );
};

export default Offer;
