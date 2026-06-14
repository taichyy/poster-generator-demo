import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import HeroMotion from './hero-motion';

const Hero = () => {
    return (
        <section className="min-h-[100dvh] bg-zinc-950 flex items-center relative overflow-hidden">
            {/* Subtle mesh gradient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 60% 0%, rgba(52,211,153,0.09) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 40% at 100% 100%, rgba(52,211,153,0.05) 0%, transparent 60%)
                    `
                }}
            />

            <div className="max-w-7xl mx-auto px-6 w-full pt-20 pb-16 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

                    {/* Left: Copy — asymmetric, left-aligned, no center bias */}
                    <HeroMotion>
                        {/* NO eyebrow - respecting eyebrow restraint rule */}

                        <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.08] text-white">
                            海報生成，
                            <br />
                            <em className="not-italic text-emerald-400">分鐘內</em>完稿
                        </h1>

                        <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-[42ch]">
                            匯入素材、選版型、線上微調，輸出印刷級一番賞海報。無需設計技能。
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-3 mt-10">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold hover:bg-emerald-300 active:scale-[0.98] transition-all duration-200"
                            >
                                免費開始使用
                                <ArrowRight size={15} weight="bold" />
                            </Link>
                            <Link
                                href="#features"
                                className="inline-flex items-center h-12 px-6 rounded-full text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all duration-200"
                            >
                                功能介紹
                            </Link>
                        </div>
                    </HeroMotion>

                    {/* Right: Real product image */}
                    <div className="hidden lg:block relative">
                        {/* Glow behind */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-10 rounded-3xl opacity-30"
                            style={{ background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.2), transparent 70%)' }}
                        />
                        <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                            <Image
                                src="https://picsum.photos/seed/poster-editor-tool-ui/800/560"
                                alt="海報生成工具操作介面預覽"
                                width={800}
                                height={560}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Inner refraction border */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 40%)',
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
