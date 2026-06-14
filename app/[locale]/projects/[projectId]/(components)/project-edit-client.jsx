"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeftCircle, Pencil } from "lucide-react";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { detailData } from "@/lib/data";
import Artboard from "@/components/ui/artboard";
import FlexCard from "@/components/ui/flex-card";
import ImgPicker from "@/components/ui/img-picker";
import BasicTextBox from "@/components/ui/basic-text-box";

const ProjectEditClient = ({ labels, locale }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(detailData);
    const [bgc, setBgc] = useState(data.bgc);

    useEffect(() => {
        setData(prev => ({ ...prev, bgc }));
    }, [bgc]);

    return (
        <div className="h-full px-2 py-6 flex-1">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20} className="hidden md:flex min-w-[200px] max-w-[20%] pt-2 justify-center">
                    <div>
                        <Link href={`/${locale}/projects`} aria-label={labels.backToProjects}>
                            <ArrowLeftCircle className="ml-4 mb-2" size={36} />
                        </Link>

                        {/* Project ID sidebar */}
                        <aside className="text-center space-y-1">
                            <div className="flex justify-center w-full">
                                <h3 className="font-semibold pr-1">{labels.projectName}</h3>
                                <h4>{data.id}</h4>
                            </div>
                        </aside>

                        <FlexCard title={labels.bgTitle} desc={labels.bgDesc}>
                            <div className="relative" onClick={() => setOpen(true)}>
                                <Image
                                    src={`/posterAssets/images/backgrounds/${bgc}.png`}
                                    alt={labels.bgAlt}
                                    width={100}
                                    height={50}
                                    className="w-full h-auto aspect-video"
                                />
                                <div className=" cursor-pointer absolute w-full h-full flex items-center justify-center inset-0 bg-black/40 opacity-0 hover:opacity-40 duration-150">
                                    <Pencil className="text-white" size={32} />
                                </div>
                            </div>
                        </FlexCard>

                        <FlexCard title={labels.basicInfo}>
                            <BasicTextBox title={labels.projectName}    text={data.projectName} />
                            <BasicTextBox title={labels.posterTitle}    text={data.name} />
                            <BasicTextBox title={labels.posterHeading}  text={data.title} />
                            <BasicTextBox title={labels.pricePerDraw}   text={data.price} />
                            <BasicTextBox title={labels.bundlePrice}    text={
                                data.promotion.map((p, i) => (
                                    <div key={i}>
                                        {p.quantity < 10 ? ` ${p.quantity}` : p.quantity}{labels.draws} {p.price}{labels.currency}
                                    </div>
                                ))
                            } />
                        </FlexCard>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle className="hidden md:flex" />
                <ResizablePanel defaultSize={80} className="ml-2 w-full md:w-auto">
                    <Artboard wpx="210" hpx="800" data={data} scale="1.5" />
                </ResizablePanel>
            </ResizablePanelGroup>
            <ImgPicker open={open} setOpen={setOpen} bgc={bgc} setBgc={setBgc} />
        </div>
    );
}

export default ProjectEditClient;
