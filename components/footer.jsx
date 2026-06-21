import { getTranslations } from 'next-intl/server';

const Footer = async () => {
    const t = await getTranslations('footer');
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo-white.png" alt="一番賞海報生成器" className="h-7 w-auto object-contain" />
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-[26ch]">{t('tagline')}</p>
                    </div>
                </div>
                <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-400">&copy; {year} {t('copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
