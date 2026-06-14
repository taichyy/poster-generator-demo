"use client"

import { useState, useRef } from "react";
import { Hand, ArrowBigRight, AlignLeft, AlignRight, ImageIcon, ALargeSmall, Shapes } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import ObjAdjusterInput from "./ui/obj-adjuster-input";
import { useI18n } from "@/hooks/use-i18n";

// ScrollArea shimmed with a plain div
const ScrollArea = ({ className, children }) => (
    <div className={`overflow-y-auto ${className ?? ""}`}>{children}</div>
);

const ObjAdjuster = ({
    artboard, data, artboardItems, setArtboardItems,
    height, setHeight, width, setWidth
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const scrollAreaRef = useRef(null);
    const itemRefsMap = useRef({});
    const selectedItemId = useRef(null);
    const t = useI18n();

    const handleSelectClick = (id) => {
        selectedItemId.current = id;
        
        // 使用 map 遍歷 artboardItems 並修改指定 id 的元素的 select 屬性
        const updatedArtboardItems = artboardItems[artboard].map(item => {
            if (item.id === id) {
                return { ...item, select: true };
            } else {
                return { ...item, select: false };
            }
        });

        // Update artboardItems
        setArtboardItems(prevItems => ({
            ...prevItems,
            [artboard]: updatedArtboardItems,
        }));

        // Auto-scroll to selected item
        setTimeout(() => {
            if (itemRefsMap.current[id]) {
                itemRefsMap.current[id].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 0);
    }

    const handleChange = (id, key, value) => {

        const updatedArtboardItems = artboardItems[artboard].map(item => {
            if (key == "scale") {
                if (item.id === id) {
                    return { ...item, [key]: value };
                } else {
                    return item;
                }
            } else if (key === "left" || key === "top" || key === "right") {
                if (item.id === id) {
                    return { ...item, property: { ...item.property, [key]: value } };
                } else {
                    return item;
                }
            } else if (key == "styleTextAlign") {
                if (item.id === id) {
                    item.style.textAlign = value
                    return item
                } else {
                    return item;
                }
            } else {
                return item;
            }
        });

        // Update artboardItems
        setArtboardItems(prevItems => ({
            ...prevItems,
            [artboard]: updatedArtboardItems,
        }));

    }

    return (
        <Sheet className="bg-transparent" open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={() => {
                setIsOpen(true);
            }}>
                <Hand className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>{t('editor.elementAdjustment')}</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <ScrollArea className="p-4 border rounded-md w-[350px] h-[95%]">
                    <div className="cursor-pointer">
                        <div>{t('editor.workspace')}</div>
                        <div className="mx-1 mb-2">
                            <div className="space-y-1">
                                <div className="flex space-x-3">
                                    <span className="flex justify-center items-center whitespace-nowrap">
                                        <ArrowBigRight />
                                        {t('editor.width')}
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder={t('editor.workspaceWidth')}
                                        defaultValue={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                    />
                                    <div className="flex justify-center items-center">
                                        {t('editor.unit')}
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <span className="flex justify-center items-center whitespace-nowrap">
                                        <ArrowBigRight />
                                        {t('editor.height')}
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder={t('editor.workspaceHeight')}
                                        defaultValue={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                    <div className="flex justify-center items-center">
                                        {t('editor.unit')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Separator className="my-5" />
                    </div>

                    {/* 
                    I assume the first item of the items[] is always the background image;
                    hence, I didn't render the first item,
                    if is some cases the first item isn't the background image,
                    modify the code here.
                */}
                    {artboardItems[artboard].map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => { if (el) itemRefsMap.current[item.id] = el; }}
                            onClick={() => handleSelectClick(item.id)}
                            className="cursor-pointer"
                            style={{
                                backgroundColor: item?.select == true ? "rgba(0,0,0,0.2)" : ""
                            }}
                        >
                            <div className="flex">
                                {
                                    index == 0 ? "" :
                                        item?.type == "img" ? (<><ImageIcon className="mr-1" />{item?.alt}</>) :
                                            item?.type == "text" ? (<><ALargeSmall className="mr-1" />{item?.content}</>) :
                                                item?.type == "shape" ? (<><Shapes className="mr-1" />{item?.className}</>) :
                                                    null
                                }
                            </div>
                            <div className="mx-1 mb-2">
                                <div className="space-y-1">
                                    {
                                        index == 0
                                            ? ""
                                            : item?.type == "img" ? (
                                                <>
                                                    <ObjAdjusterInput
                                                        text={t('editor.scale')}
                                                        append={t('editor.scaleUnit')}
                                                        placeholder={t('editor.scaleRatio')}
                                                        onChange={(e) => handleChange(item?.id, "scale", e.target.value)}
                                                        defaultValue={item?.scale}
                                                    />
                                                    {item?.property?.left ? (
                                                        <ObjAdjusterInput
                                                            text={t('editor.xAxisPositioning')}
                                                            append={t('editor.unit')}
                                                            placeholder={t('editor.unitMm')}
                                                            onChange={(e) => handleChange(item?.id, "left", e.target.value + "px")}
                                                            defaultValue={item?.property?.left.split("px")[0]}
                                                        />
                                                    ) : (
                                                        <ObjAdjusterInput
                                                            text={t('editor.xAxisPositioningRight')}
                                                            append={t('editor.unit')}
                                                            placeholder={t('editor.unitMmFromRight')}
                                                            onChange={(e) => handleChange(item?.id, "right", e.target.value + "px")}
                                                            defaultValue={item?.property?.right.split("px")[0]}
                                                        />
                                                    )}
                                                    <ObjAdjusterInput
                                                        text={t('editor.yAxisPositioning')}
                                                        append={t('editor.unit')}
                                                        placeholder={t('editor.unitMm')}
                                                        onChange={(e) => handleChange(item?.id, "top", e.target.value + "px")}
                                                        defaultValue={item?.property?.top.split("px")[0]}
                                                    />
                                                </>
                                            ) :
                                                item?.type == "text" ? (
                                                    // text
                                                    <>
                                                        <ObjAdjusterInput
                                                            text={t('editor.scale')}
                                                            append={t('editor.scaleUnit')}
                                                            placeholder={t('editor.scaleRatio')}
                                                            onChange={(e) => handleChange(item?.id, "scale", e.target.value)}
                                                            defaultValue={item?.scale}
                                                        />
                                                        {item?.property?.left ? (
                                                            <ObjAdjusterInput
                                                                text={t('editor.xAxisPositioning')}
                                                                append={t('editor.unit')}
                                                                placeholder={t('editor.unitMm')}
                                                                onChange={(e) => handleChange(item?.id, "left", e.target.value + "px")}
                                                                defaultValue={item?.property?.left.split("px")[0]}
                                                            />
                                                        ) : (
                                                            <ObjAdjusterInput
                                                                text={t('editor.xAxisPositioningRight')}
                                                                append={t('editor.unit')}
                                                                placeholder={t('editor.unitMmFromRight')}
                                                                onChange={(e) => handleChange(item?.id, "right", e.target.value + "px")}
                                                                defaultValue={item?.property?.right.split("px")[0]}
                                                            />
                                                        )}
                                                        <ObjAdjusterInput
                                                            text={t('editor.yAxisPositioning')}
                                                            append={t('editor.unit')}
                                                            placeholder={t('editor.unitMm')}
                                                            onChange={(e) => handleChange(item?.id, "top", e.target.value + "px")}
                                                            defaultValue={item?.property?.top.split("px")[0]}
                                                        />
                                                        {item?.style?.textAlign && (
                                                            <ObjAdjusterInput
                                                                text={t('editor.textAlignment')}
                                                                append=""
                                                                placeholder={t('editor.leftRight')}
                                                                defaultValue={item?.style?.textAlign}
                                                            >
                                                                <AlignLeft onClick={(e) => handleChange(item?.id, "styleTextAlign", "left")} />
                                                                <AlignRight onClick={(e) => handleChange(item?.id, "styleTextAlign", "right")} />
                                                            </ObjAdjusterInput>
                                                        )}
                                                    </>
                                                ) :
                                                    item?.type == "shape" ? (
                                                        // shape
                                                        <>
                                                            {item?.property?.left ? (
                                                                <ObjAdjusterInput
                                                                    text={t('editor.xAxisPositioning')}
                                                                    append={t('editor.unit')}
                                                                    placeholder={t('editor.unitMm')}
                                                                    onChange={(e) => handleChange(item?.id, "left", e.target.value + "px")}
                                                                    defaultValue={item?.property?.left.split("px")[0]}
                                                                />
                                                            ) : (
                                                                <ObjAdjusterInput
                                                                    text={t('editor.xAxisPositioningRight')}
                                                                    append={t('editor.unit')}
                                                                    placeholder={t('editor.unitMmFromRight')}
                                                                    onChange={(e) => handleChange(item?.id, "right", e.target.value + "px")}
                                                                    defaultValue={item?.property?.right.split("px")[0]}
                                                                />
                                                            )}
                                                            <ObjAdjusterInput
                                                                text={t('editor.yAxisPositioning')}
                                                                append={t('editor.unit')}
                                                                placeholder={t('editor.unitMm')}
                                                                onChange={(e) => handleChange(item?.id, "top", e.target.value + "px")}
                                                                defaultValue={item?.property?.top.split("px")[0]}
                                                            />
                                                        </>
                                                    ) : null
                                    }
                                </div>
                            </div>
                            {index == 0 ? "" : <Separator className="my-5" />}
                        </div>
                    ))}
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

export default ObjAdjuster;