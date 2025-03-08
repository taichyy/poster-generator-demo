"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle, Expand, Shrink } from "lucide-react";
import { useState } from "react";
import localFont from 'next/font/local'

import { cn } from "@/lib/utils";
import { clipTemplate, objectGenerator, posterBObj, posterCObj, posterDObj } from "@/lib/templates";
import { templateSelector, findLowestY, addAttributes, multiply, add, chineseNum, dataTotal } from "@/lib/functions";
import { posterBSettings, posterCSettings, posterDSettings } from "@/lib/posterSettings";
import SampleAdder from "../sample-adder";
import ObjAdjuster from "../obj-adjuster";

const fontHira = localFont({
    src: '/fonts/HiraKakuStd-W8.otf',
    display: 'swap',
})
const fontKon = localFont({
    src: '/fonts/KONSHIN.otf',
    display: 'swap',
})
const fontMSTiff = localFont({
    src: '/fonts/MStiff.otf',
    display: 'swap',
})

const Artboard = ({wpx, hpx, data, scale}) => {

    const [mounted, setMounted] = useState(false)

    const [full, setFull] = useState(false)
    const [scaleFactor, setScaleFactor] = useState(scale);
    
    // Height and width of the artboard
    const [height, setHeight] = useState(hpx)
    const [width, setWidth] = useState(wpx)
    
    // Change default artboard here (0, 1, 2, 3)
    const [artboard, setArtoard] = useState(0)
    
    const handleScaleChange = (e) => {
        const newScale = parseFloat(e.target.value);
        setScaleFactor(newScale);
    };
    
    // Select which template to use
    const template = templateSelector(data)
    
    const artBoardA = () => {
        // Background and title
        let items = objectGenerator({
            dy : 0,
            component : "bgTitle", 
            template, 
            data : data
        })
        
        // Main prizes (A, B, those prizes with names)
        items = [...items, ...objectGenerator({
            dy : 0,
            component : "mainPrizes",
            template,
            data : data
        })]
        
        // Minor prizes (C, those prizes with sample images)
        let lowestY = findLowestY(items);
        items = [...items, ...objectGenerator({
            dy : lowestY+10,
            component : "minorPrizes",
            template,
            data : data
        })]
        
        // Ticket prizes (D, E, F, those prizes with no images and names, just tickets)
        lowestY = findLowestY(items);
        items = [...items, ...objectGenerator({
            dy : lowestY,
            component : "ticketPrizes",
            data : data
        })]
        
        // Price tag
        items = [...items, ...objectGenerator({
            dy : 0,
            component : "tag", 
            template, 
            data : data
        })]
        
        // Footer
        lowestY = findLowestY(items);
        items = [...items, {
            type: 'shape',
            property: { 
                width: '100%', 
                height: '13.7px', 
                top: lowestY+10+"px", 
                left: '0px' 
            },
            className: ' bg-[#E61A69]'
        },{
            type: 'text',
            property: { 
                width: 'auto', 
                height: 'auto', 
                top: lowestY+10+"px", 
                left: '0px' 
            },
            size: "29.5pt",
            shrink: "68%",
            font : "HiraKakuStd-W8",
            fakeLeft: "-13%",
            style : {
                textAlign : "left",
                color : "#FAEE00",
                paddingTop : "3px",
            },
            content : dataTotal(data).promotionA
        },{
            type: 'text',
            property: { 
                width: 'auto', 
                height: '13.7px', 
                top: lowestY+10+"px", 
                left: '142px' 
            },
            size: "12.6pt", //If adjust, add new set at Script
            shrink: "80%",
            font : "HiraKakuStd-W8",
            style : {
                textAlign : "center",
                color : "#FAEE00",
                paddingTop : "3px",
                letterSpacing : "1.5px", //If adjust, add new set at Script
            },
            content : "獎品以實際現貨為主，\n如有疑問請先詢問再購買"
        }]        
        
        return items
    }
    
    const artBoardB = () => {
    
        // Background and title
        let items = objectGenerator({
            dy : 0,
            component : "bgTitleBigger", 
            template, 
            data : data
        })
        
        // Prizes
        let setting = posterBSettings[template];
        items = [...items, ...posterBObj(setting, data.prizes)]
        
        // Price tag
        items.push(...objectGenerator({
            dy : 0,
            component : "tagBig", 
            template, 
            data : data
        }))
        
        // Footer
        let lowestY = findLowestY(items);
        items = [...items, {
            type: 'shape',
            property: { 
                width: '100%', 
                height: '28px', 
                top: lowestY+10+"px", 
                left: '0px' 
            },
            className: ' bg-[#E61A69]'
        },{
            type: 'text',
            property: { 
                width: 'auto', 
                height: 'auto', 
                top: lowestY+13+"px", 
                left: '0px' 
            },
            size: "47.9pt", //If adjust, add new set at Script
            shrink: "85%",
            font : "HiraKakuStd-W8",
            fakeLeft: "-6%",
            style : {
                textAlign : "left",
                color : "#FAEE00",
                paddingTop : "3px",
                letterSpacing : "1px" //If adjust, add new set at Script
            },
            content : dataTotal(data).promotionA
        },{
            type: 'text',
            property: { 
                width: 'auto', 
                height: '13.7px', 
                top: lowestY+13+"px", 
                left: '312px' 
            },
            size: "19.72pt", //If adjust, add new set at Script
            font : "HiraKakuStd-W8",
            style : {
                textAlign : "center",
                color : "#FAEE00",
                paddingTop : "3px",
                letterSpacing : "2px", //If adjust, add new set at Script
            },
            content : "獎品以實際現貨為主，\n如有疑問請先詢問再購買"
        }]
        
        // console.log(JSON.stringify(addAttributes(items)))
    
        return items
    }
    
    const artBoardC = () => {
        // Background and logo
        let items = [{
            type: "img",
            property: {
                height : "100%",
                width : "100%",
                top : "0px",
                left : "0px",
            },
            link: "/posterAssets/images/backgrounds/"+data.bgc+".png",
            alt: "背景圖片"
        }]
        items = [...items, {
            type: "img",
            property: {
                height : "auto",
                width : "48.4px",
                top : "5.4px",
                left : "5px",
            },
            link: "/logo.png",
            alt: "Logo"
        }]
        
        // Amount and price + promotion
        items.push(...[
            // Amount
            {
                type : "text", //*
                property : {
                    width : "auto",
                    height : "18.6px",
                    top : 5+"px", 
                    right : "5px",
                },
                size : "35pt",
                font : "MStiffHeiHK-UltraBold",
                style : {
                    textAlign : "right",
                    color : "#FFFFFF",
                },
                content : dataTotal(data).totalB,
            },
            // Price + promotion
            {
                type : "text", //*
                property : {
                    width : "auto",
                    height : "18.6px",
                    top : 18+"px", 
                    right : "5px",
                },
                shadow : "white",
                size : "45.7pt",
                font : "MStiffHeiHK-UltraBold",
                style : {
                    textAlign : "right",
                    color : "#E4007F",
                },
                content : `1抽 $${data.price}`,
            },
            {
                type : "text", //*
                property : {
                    width : "auto",
                    height : "6.98px",
                    top : 36+"px", 
                    right : "5px",
                },
                shadow : "white",
                size : "17.8pt",
                font : "MStiffHeiHK-UltraBold",
                style : {
                    textAlign : "right",
                    color : "#E4007F",
                },
                content : dataTotal(data).promotionB
            },
            // Footer text
            {
                type : "text", //*
                property : {
                    width : "100%",
                    height : "10px",
                    top : "202px", 
                    left : "0px",
                },
                shadow : "black",
                size : "14.6pt",
                font : "MStiffHeiHK-UltraBold",
                style : {
                    textAlign : "center",
                    color : "#FFFFFF",
                },
                content : "獎項依現場獎單為主 / 實體依店內實體為主",
            },
        ])
        
        // Prizes
        let setting = posterCSettings[template];
        items = [...items, ...posterCObj(setting, data.prizes)]

        return items
    }
    
    const artBoardD = () => {
    
        let items = clipTemplate(data.bgc)
        
        // Prizes
        let setting = posterDSettings[template];
        items = [...items, ...posterDObj(setting, data.prizes)]
        
        items = [...items,
            {
                type: "img",
                property: {
                    height:  "58px",
                    width: "auto",
                    top : "133.252px",
                    left : "120px",
                },
                link: "/posterAssets/images/products/"+data.prizes[0].img,
                alt: `下方${data.prizes[0].name}`
            },
        ]
        
        return items
    }
    
    const [artboardItems, setArtoardItems] = useState([
        addAttributes(artBoardA()), 
        addAttributes(artBoardB()), 
        addAttributes(artBoardC()), 
        addAttributes(artBoardD())
    ])
    
    useEffect(() => {
        // Reset the size of the artboard
        switch (artboard) {
            case 0:
                setHeight(findLowestY(artBoardA()));
                setWidth(210);
                break;
            case 1:
                setHeight(findLowestY(artBoardB()));
                setWidth(420);
                break;
            case 2:
                setHeight(findLowestY(artBoardC()));
                setWidth(210);
                break;
            case 3:
                setHeight(findLowestY(artBoardD()));
                setWidth(210);
                break;
            default:
                break;
          }
     
    }, [artboard]);
    
    const handleClick = (id) => {
    
        const updatedArtboardItems = artboardItems[artboard].map(item => {
            if(item.link){
                if (item.link == `/posterAssets/images/backgrounds/${data.bgc}.png`){
                    return { ...item, select: false };
                }
            }
            if (item.id === id) {
                return { ...item, select: true };
            } else {
                return { ...item, select: false };
            }
        });
        
        // Update artboardItems
        setArtoardItems(prevItems => ({
            ...prevItems,
            [artboard]: updatedArtboardItems,
        }));
    }
    
    // Hydration error protection
    useEffect(()=>{
        setMounted(true)
    },[])
    
    if(!mounted){
        return null;
    }
    
    
    return (
        // Main Adobe Illustrator style artboard container
        <main
            className=" bg-[#5F5F5F] text-white flex flex-col min-h-[600px] z-10 overflow-y-scroll duration-200 transition-all"
            style={ full ? {
                position: "fixed",
                top: 0,
                left: "1%",
                width: "98%",
                height: "100%",
            }:{
                position: "relative",
            }}
        >
            {/* Control bar */}
            <div className=" flex justify-between px-4 py-3 bg-[#535353]">
                {/* Scaling control */}
                <div className=" flex justify-start space-x-3 flex-1">
                    <input
                        type="range"
                        min="1"
                        max="3"
                        step="0.1"
                        value={scaleFactor}
                        onChange={handleScaleChange}
                        className=" w-[100px]"
                    />
                    <span>
                        {parseInt(scaleFactor * 100)}%
                    </span>
                </div>
                {/* Artboard switcher */}
                <div className=" flex space-x-3 flex-1 justify-center">
                    <ArrowLeftCircle className=" cursor-pointer" onClick={()=>setArtoard(artboard == 0 ? 0 : artboard-1)} />
                    <ArrowRightCircle className=" cursor-pointer" onClick={()=>setArtoard(artboard == 2 ? 2 : artboard+1)} />
                </div>
                {/* Full screen / window control */}
                <div className="flex-1 flex justify-end">
                    {full ? (
                        <Shrink onClick={() => setFull(false)} />
                    ) : (
                        <Expand onClick={() => setFull(true)} />
                    )}
                </div>
            </div>
            {/* Main art board */}
            <div className=" flex flex-1">
                <div className=" pl-3 pr-3 pt-4 bg-[#535353] space-y-2 flex flex-col">
                    {/* Aside control bar */}
                    {/* <SampleAdder artboard={artboard} data={data} artboardItems={artboardItems} setArtoardItems={setArtoardItems} /> */}
                    <ObjAdjuster 
                        data={data} 
                        artboard={artboard} 
                        artboardItems={artboardItems} 
                        setArtoardItems={setArtoardItems} 
                        width={width} setWidth={setWidth}
                        height={height} setHeight={setHeight}
                    />
                </div>
                <div
                    className=" pointer-events-none relative block mx-auto border-[1px] border-black bg-white"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        marginTop: `${(height*scaleFactor - height)/2+10}px`,
                        marginBottom: `${(height*scaleFactor - height)/2+10}px`,
                        transform: `scale(${scaleFactor})`,
                    }}
                >
                    {/* Put items on the artboard */}
                    {artboardItems[artboard].map( (item,index) => (
                        <div 
                            key={index} 
                            className=" pointer-events-none absolute w-full h-full left-0 top-0"
                            style={{
                                zIndex : `${index}`,
                            }}
                        >
                            {item.type == "shape" ? (
                                    <div
                                        onClick={()=>handleClick(item?.id)}
                                        className={cn(
                                            " pointer-events-auto absolute box-border", 
                                            item?.className
                                        )} 
                                        style={{
                                            ...item?.property,
                                            ...item?.style,
                                            // Selected item effect
                                            ...(item?.select ? { 
                                                boxShadow: '0 0 0 1px #7FCCD8'
                                            } : {}),
                                        }}
                                    />
                                ) : item.type == "img" ? (
                                    <Image
                                        onClick={()=>handleClick(item?.id)}
                                        src={item?.link}
                                        alt={item?.alt}
                                        width={200}
                                        height={200}
                                        className={cn(
                                            " pointer-events-auto absolute flex items-center justify-center box-border",
                                            item?.className
                                        )} 
                                        style={{
                                            // Applying scale and properties
                                            ...(item?.property && Object.fromEntries(
                                                Object.entries(item.property).map( ([key, value]) => 
                                                    key == "width" ? [key, multiply(value, item?.scale)] :
                                                    key == "height" ? [key, multiply(value, item?.scale)] :
                                                    [key, value]
                                                )
                                            )),
                                            // Selected item effect
                                            ...(item?.select ? { 
                                                boxShadow: '0 0 0 1px #7FCCD8'
                                            } : {}),
                                            ...item?.style
                                        }}
                                    />
                                ) : item.type == "text" ? (
                                    <div 
                                        onClick={()=>handleClick(item?.id)}
                                        className={cn(
                                            ` pointer-events-auto absolute`, 
                                            item?.className, 
                                            item?.font == "HiraKakuStd-W8" ? fontHira.className 
                                            : item?.font == "MStiffHeiHK-UltraBold" ? fontMSTiff.className
                                            : item?.font == "Konshin" ? fontKon.className
                                            : null
                                        )} 
                                        style={{
                                            ...(item?.property && Object.fromEntries(
                                                Object.entries(item?.property).map( ([key, value]) => 
                                                    key == "top" ? [key, add(value, item?.size.split("pt")[0]*-0.08)] :
                                                    key == "left" && item?.fakeLeft ? [key, add(value, width*item?.fakeLeft.split("%")[0]/100)] :
                                                    [key, value]
                                                )
                                            )),
                                            ...(item?.style && Object.fromEntries(
                                                Object.entries(item.style).map( ([key, value]) => 
                                                    key == "width" ? [key, multiply(value, item?.scale)] :
                                                    key == "height" ? [key, multiply(value, item?.scale)] :
                                                    [key, value]
                                                )
                                            )),
                                            // Selected item effect
                                            ...(item?.select ? { 
                                                boxShadow: '0 0 0 1px #7FCCD8'
                                            } : {}),
                                            textShadow: 
                                                item?.shadow == "white" ? 
                                                    "-0.7px -0.7px 0 #fff, 0.7px -0.7px 0 #fff, -0.7px 0.7px 0 #fff, 0.7px 0.7px 0 #fff" :
                                                item?.shadow == "black" ? 
                                                    "-0.7px -0.7px 0 #000, 0.7px -0.7px 0 #000, -0.7px 0.7px 0 #000, 0.7px 0.7px 0 #000": 
                                                item?.shadow == "shadow" ?
                                                    "1px 1px 0 #000" :
                                                    "",
                                            fontSize: `${(item?.size.split("pt")[0]) * 0.3528 * item?.scale + "px"}`,
                                            lineHeight: `${(item?.size.split("pt")[0]) * 0.3528 * item?.scale * 1.2 + "px"}`, 
                                            transform: item?.shrink ? `scaleX(${item?.shrink})` : "none",
                                        }}
                                    >
                                        {item?.content.includes("\n") ? item?.content.split("\n").map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                {index < item?.content.split("\n").length - 1 && <br />}
                                            </React.Fragment>
                                        )) : item?.content}
                                    </div>
                                ) : null
                            }
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
 
export default Artboard;