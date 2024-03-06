"use client"
import { Check, PlusCircle, X, XCircle, ZoomIn } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { addAttributes } from "@/lib/functions";
  

const SampleAdder = ({artboard, data, artboardItems, setArtboardItems}) => {
    
    // Prizes to add
    let prizes = []
    for(let prize of data.prizes){
        if(!prize.name){
            prizes.push(prize.class)
        }
    }
    
    // CDEF, which prize chose
    const [select, setSelect] = useState(prizes[0])
    const [imgSelect, setImgSelect] = useState("")
    const [fullView, setFullView] = useState(false)
    
    const sampleImagesRoute = "/posterAssets/images/samples/"
    const sampleImages = [
        "blindBoxes.png",
        "fourPeople.png",
        "sixPeople.png",
        "TowelsPlatesCups.png",
        "PlatesFoldersPaper.png"
    ]
    
    const addItem = (top=0, left=0) => {
        // Get obj data from prop hooks 
        let items = [...artboardItems]
        items[artboard].push(...addAttributes([
            // Main image
            {
                type: 'img',
                property: { 
                    width: '130px', 
                    height: 'auto', 
                    top: top+'px', 
                    left: left+'px' 
                },
                link: sampleImagesRoute+imgSelect,
                alt: `${select}賞示意圖`
            },
            // Badge
            {
                type: "img",
                property: {
                    width: "46px",
                    height: "auto",
                    top: top+53+"px",
                    left: left+3+"px"
                },
                link: `/posterAssets/images/badges/${select}.svg`,
                alt: `${select}賞分級圖片`
            },
            // Quanaity
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "16px",
                    top : top+70+"px", 
                    left : left+50+"px",
                },
                style : {
                    color : "#FFFFFF",
                },
                size : "50pt",
                font : "HiraKakuStd-W8",
                content : "x"+data.prizes.find(item => item.class == select).quantity, 
            },
            // Redeem points
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "auto",
                    top : top+90+"px", 
                    left : 60+"px",
                },
                style : {
                    color : "#D71518",
                },
                size : "22pt",
                font : `HiraKakuStd-W8`,
                content : `可換點數${data.prizes.find(item => item.class == select).redeemPoints}點`, 
            },
            // Desc
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "10.9px",
                    top : top+100+"px",  
                    left : 44+"px",
                },
                style : {
                    background : "#E83828",
                    border : "1px solid #000",
                    borderRadius : "5.45px", //Half of height
                    padding : "0.5px 2px 0 2px",
                    color : "#FFFFFF"
                },
                size : "18pt",
                font : `HiraKakuStd-W8`,
                content : `${data.prizes.find(item => item.class == select).desc}`, 
            }
        ]))
        // Update via useState function
        setArtboardItems(items)
    }
    
    return (
    <AlertDialog>
        <AlertDialogTrigger>
            <PlusCircle className="cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle className="flex justify-between items-center">
                    新增獎項示意圖
                    <AlertDialogCancel className="border-none hover:bg-inherit hover:text-red-900">
                        <X />
                    </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription>
                    請手動選擇對應獎項等級的圖片並新增。
                </AlertDialogDescription>
            </AlertDialogHeader>
            <div>
                <div>
                    {prizes.map( (level, index) => (
                        <Badge 
                            variant="outline" 
                            className="cursor-pointer mr-2" 
                            key={index}
                            onClick={()=>setSelect(level)}
                            style={
                                select == level ? {
                                    background : "#000",
                                    color : "#FFF"
                                } : {
                                    background : "#FFF"
                                }
                            }
                        >
                            {level}
                        </Badge>
                    ))}
                </div>
                <div className=" w-[80%] mx-auto">
                    <Carousel className="py-4">
                        <CarouselContent>
                            {sampleImages.map( (img) => (
                                <CarouselItem key={img} className=" group aspect-video flex items-center basis-1/2 relative">
                                    <Image
                                        src={sampleImagesRoute+img}
                                        alt={`獎項示意圖 - ${img}`}
                                        width={200}
                                        height={150}
                                        className=" w-full h-auto"
                                        onClick={()=>setImgSelect(img)}
                                    />
                                    {/* Selected tick */}
                                    <div 
                                        className="absolute pointer-events-none w-full h-full top-0 left-0 flex items-center justify-center duration-150"
                                        style={ imgSelect == img ? {
                                            opacity : "100"
                                        }: {
                                            opacity : "0"
                                        }}
                                    >
                                        <div className="absolute bg-white group-hover:opacity-30 duration-150 opacity-80 w-full h-full top-0 left-0" />
                                        <Check size={100} className=" group-hover:opacity-30 duration-150 z-10 text-red-800"/>
                                    </div>
                                    {/* Zoom-in btn */}
                                    <div className="group cursor-pointer absolute bottom-0 right-0 bg-white">
                                        <ZoomIn className="group-hover:text-red-800 duration-150" onClick={()=>setFullView(sampleImagesRoute+img)} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            { fullView ? (
                <div className="absolute top-0 left-0 w-full h-full bg-white z-50">
                    <XCircle className="ml-auto mt-2 mr-2 cursor-pointer" onClick={()=>setFullView("")} />
                    <Image
                        src={fullView}
                        width={500}
                        height={300}
                        alt="全螢幕預覽之示意圖片"
                        className=" w-[80%] mx-auto h-auto"
                    />
                </div>
            ) : (
                <></>
            )}
            <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction
                    disabled={!select || !imgSelect} 
                    onClick={()=>addItem()}
                >
                    新增
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    );
}
 
export default SampleAdder;