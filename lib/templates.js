import { multiply, add, dataTotal } from "./functions";

// For calculating the dy of ticket prizes
let lineAdded = 0;

export function objectGenerator({dy, component, template, data}) {
    let items = []
    
    // Background and title
    if(component == "bgTitle"){
        items.push({
                type : "img", //*
                property : {
                    width : "100%",
                    height : "100%",
                    left : "0px",
                    top : "0px",
                },
                link : `/posterAssets/images/backgrounds/${data.bgc}.png`, //*
                alt : "選擇之背景圖片" //*
            },
            {
                type : "shape", //*
                property : {
                    width : "100%",
                    height : "18.6px",
                    left : "0px",
                    top : "0px", 
                },
                className : " bg-[#E61A69]"
            },
            {
                type : "img", //*
                property : {
                    width : "54px",
                    height : "31px",
                    left : "2.7px",
                    top : "1px",
                },
                link : "/posterAssets/images/logo.png", //*
                alt : "NX樂園 Logo圖片" //*
            },
            {
                type : "text", //*
                property : {
                    width : "100%",
                    height : "18.6px",
                    left : 0+"px",
                    top : 0+"px", 
                },
                size : "45.384pt",
                font : "MStiffHeiHK-UltraBold",
                style : {
                    textAlign : "right",
                    color : "#FAEE00",
                },
                content : data.title, //*
            }
        )
    }
    if(component == "bgTitleBigger"){
        items.push({
                type : "img", //*
                property : {
                    width : "100%",
                    height : "100%",
                    left : "0px",
                    top : "0px",
                },
                link : `/posterAssets/images/backgrounds/${data.bgc}.png`, //*
                alt : "選擇之背景圖片" //*
            },
            {
                type : "shape", //*
                property : {
                    width : "100%",
                    height : "36.4px",
                    left : "0px",
                    top : "0px", 
                },
                className : " bg-[#E61A69]"
            },
            {
                type : "img", //*
                property : {
                    width : "104px",
                    height : "59px",
                    left : "4px",
                    top : "2px",
                },
                link : "/posterAssets/images/logo.png", //*
                alt : "NX樂園 Logo圖片" //*
            },
            {
                type : "text", //*
                property : {
                    width : "100%",
                    height : "18.6px",
                    left : 0+"px",
                    top : 0+"px", 
                },
                size : "92.6pt",
                font : "MStiffHeiHK-UltraBold",
                style : {
                    textAlign : "right",
                    color : "#FAEE00",
                },
                content : data.title, //*
            }
        )
    }
    
    // Major prizes
    if(component == "mainPrizes"){
        for (let i=0; i<=template; i++){
            let item = data.prizes[i]
            if(item.name){
                items.push(...mainPrizeTemplate({
                    template,
                    slot : i,
                    level : item?.class,
                    quantity : item?.quantity,
                    redeemPoints : item?.redeemPoints,
                    name : item?.name,
                    img : item?.img,
                }))
            }
        }
    }
    
    // Minor prizes
    if(component == "minorPrizes"){
        let minorCount = 0;
        for (let allCount=0; allCount<data.prizes.length; allCount++){
            let item = data.prizes[allCount]
            
            // Minor prizes
            if(!item.name && item.img){
                items.push(...minorPrizeTemplate({
                    dy,
                    desc : item?.desc,
                    template,
                    slot : minorCount,
                    level : item?.class,
                    quantity : item?.quantity,
                    redeemPoints : item?.redeemPoints,
                }))
                minorCount++
            }
        }
    }
    
    // Ticket prizes
    if(component == "ticketPrizes"){
        let minorCount = 0;
        for (let allCount=0; allCount<data.prizes.length; allCount++){
            let item = data.prizes[allCount]
            
            // Ticket prizes
            if(!item.name && !item.img){
                items.push(...ticketPrizeTemplate({
                    dy,
                    template,
                    desc : item?.desc,
                    slot : minorCount,
                    level : item?.class,
                    quantity : item?.quantity,
                    redeemPoints : item?.redeemPoints,
                }))
                minorCount++
            }
        }
        lineAdded=0
    }
    
    // Price tags
    if(component == "tag") {
        items = [
            {
                type: "shape",
                property : {
                    width : "44.2px",
                    height : "44.2px",
                    left : "83.8px",
                    top : "21.6px", 
                },
                style : {
                    overflow : "hidden",
                    borderRadius : "50%"
                },
                className : " bg-[#E61A69]"
            },
            {
                type : "text",
                property : {
                    width : "auto",
                    height : "auto",
                    left : "89.8px",
                    top : "24.4px",
                },
                style : {
                    textAlign : "left",
                    color : "#FAEE00"
                },
                size : "40pt",
                font : "Konshin",
                content : "一抽"
            },
            {
                type : "shape",
                property : {
                    width : "31.4px",
                    height : "0.56px",
                    left : "90.3px",
                    top : "37.3px",
                },
                className : " bg-[#FAEE00]"
            },
            {
                type : "text",
                property : {
                    width : "auto",
                    height : "auto",
                    left : "89px",
                    top : "37.8px",
                },
                style : {
                    textAlign : "left",
                    color : "#FAEE00"
                },
                size : "40.2pt",
                font : "Konshin",
                content : `${data.price}元`,
            },
            {
                type : "shape",
                property : {
                    width : "31.4px",
                    height : "0.56px",
                    left : "90.3px",
                    top : "51.5px",
                },
                className : " bg-[#FAEE00]"
            },
            {
                type : "text",
                property : {
                    width : "auto",
                    height : "auto",
                    left : "88.7px",
                    top : "53px",
                },
                style : {
                    textAlign : "left",
                    color : "#FAEE00"
                },
                size : "21.3pt",
                font : "Konshin",
                content : dataTotal(data).total,
            },
        ]
    }
    if(component == "tagBig") {
        items = [
            {
                type: "shape",
                property : {
                    width : "120px",
                    height : "120px",
                    top : "210.6px", 
                    left : "177.6px"
                },
                style : {
                    overflow : "hidden",
                    borderRadius : "50%"
                },
                className : " bg-[#E61A69]"
            },
            {
                type : "text",
                property : {
                    width : "120px",
                    height : "32px",
                    left : "197px",
                    top : "222px",
                },
                style : {
                    textAlign : "left",
                    color : "#FAEE00"
                },
                size : "110pt",
                font : "Konshin",
                content : "一抽"
            },
            {
                type : "shape",
                property : {
                    width : "85.2px",
                    height : "2.65px",
                    left : "195.5px",
                    top : "253.5px",
                },
                className : " bg-[#FAEE00]"
            },
            {
                type : "text",
                property : {
                    width : "120px",
                    height : "32px",
                    left : "189.5px",
                    top : "259px",
                },
                style : {
                    textAlign : "left",
                    color : "#FAEE00"
                },
                size : "109pt",
                font : "Konshin",
                content : `${data.price}元`,
            },
            {
                type : "shape",
                property : {
                    width : "85.2px",
                    height : "2.65px",
                    left : "195.5px",
                    top : "292.5px",
                },
                className : " bg-[#FAEE00]"
            },
            {
                type : "text",
                property : {
                    width : "120px",
                    height : "32px",
                    left : "194.5px",
                    top : "298px",
                },
                style : {
                    textAlign : "left",
                    color : "#FAEE00"
                },
                size : "55pt",
                font : "Konshin",
                content : dataTotal(data).total,
            },
        ]
    }
    
    return items;
}

























// Pass the number and data of major prizes, export obj
export function mainPrizeTemplate({
    template, slot,
    level, quantity, redeemPoints, name, img, 
    top="auto", 
    left="auto", 
    right="auto", 
    bottom="auto", 
    width=70
}){

    // 該項目是否佔據整個寬度
    let main = false;
    template%2 != 0 && slot==0 ? main = true : null;
    
     
  
    // Y + 120 for next line (Third and Fourth)
    let singleX = 104
    let MajorSlots = [
        {top: 21, left: 6}, // First
        {top: 21, left: 6 + singleX}, // Second
    ]
    
    // 2, 3, 4, 5
    if(template <=5){
        // Empty the second slot(1)
        if(template%2 != 0 && slot!=0){ slot >= 1 ? slot++ : null }
        
        // Set left and top
        if(slot >= 2){
            top = MajorSlots[0].top + 120 * Math.floor(slot/2)
        } else {
            top = MajorSlots[slot].top
        }
        left = MajorSlots[slot%2].left
    }
    
    return [
        // Item img
        {
            type : "img",
            property : {
                height : "auto",
                left : main ? `calc(50% - ${width}px / 2)` : left+17+"px",
                width : width+"px",
                top : top+"px"
            },
            link : `/posterAssets/images/products/${img}`,
            alt : name
        },
        // Badge
        {
            type : "img",
            property : {
                height : "auto",
                top : top+78+"px",
                width : 28+"px",
                left : left+"px"
            },
            link : `/posterAssets/images/badges/${level}.svg`,
            alt : `NX樂園 ${level} 賞icon`
        },
        // Ticket
        {
            type : "img",
            property : {
                height : 27.7+"px",
                top : top+79.5+"px",
                width : 47.6+"px",
                left : main ? left+singleX+48+"px" : left+48+"px"
            },
            link : `/posterAssets/images/tickets/ticketRed.svg`,
            alt : `NX樂園籤紙黏貼處圖示`
        },
        // Quanaity
        {
            type : "text", 
            property : {
                width : "auto",
                height : "16px",
                top : top+85+"px", 
                left : left+29+"px",
            },
            style : {
                color : "#FFFFFF",
            },
            shadow : "shadow",
            size : "33.703pt",
            font : "HiraKakuStd-W8",
            content : "x"+quantity, 
        },
        // Redeem points
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : top+111+"px", 
                left : left+45.5+"px",
            },
            style : {
                color : "#D71518",
            },
            shadow : "white",
            size : "17.9pt",
            font : `HiraKakuStd-W8`,
            shrink : "88%",
            content : `可換點數${redeemPoints}點`, 
        },
        // Name
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : top+60+"px", 
                left : left+"px",
            },
            style : {
                color : "#FFFFFF",
                textAlign : "right"
            },
            shadow : "black",
            size : "21.47pt",
            font : "HiraKakuStd-W8",
            content : name, 
        },
    ]
}







export function minorPrizeTemplate({
    dy, slot, level, quantity, redeemPoints, desc, top=0, left = 6, 
    width=140
}){
    
    return [
        // Item img
        {
            type : "img",
            property : {
                height : "auto",
                // dy => Start of this obj template
                // slot => 0, 1, 2......
                top : dy+slot*70+"px",
                width : 80+"px",
                left : left+30+"px"
            },
            link : `/posterAssets/images/products/C1.png`,
            alt : `NX樂園 獎項示意圖`
        },
        // Badge
        {
            type : "img",
            property : {
                height : "auto",
                top : dy+slot*70+"px",
                width : 28+"px",
                left : left+"px"
            },
            link : `/posterAssets/images/badges/${level}.svg`,
            alt : `NX樂園 ${level} 賞icon`
        },
        // Ticket
        {
            type : "img",
            property : {
                height : 27.7+"px",
                top : dy+30+slot*70+"px",
                width : "auto",
                right : 3+"px"
            },
            link : `/posterAssets/images/tickets/ticket${quantity}.svg`,
            alt : `NX樂園籤紙黏貼處圖示`
        },
        // Quanaity
        {
            type : "text", 
            property : {
                width : "auto",
                height : "16px",
                top : dy+29+slot*70+"px",  
                left : left+2+"px",
            },
            style : {
                color : "#FFFFFF",
            },
            shadow : "shadow",
            size : "47.7pt",
            font : "HiraKakuStd-W8",
            content : "x"+quantity, 
        },
        // Redeem points
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : dy+15+slot*70+"px", 
                right : 5+"px",
            },
            style : {
                color : "#D71518",
            },
            shadow : "white",
            size : "18.9pt",
            font : `HiraKakuStd-W8`,
            shrink : "88%",
            content : `可換點數${redeemPoints}點`, 
        },
        // Desc
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : dy+5+slot*70+"px", 
                right : 7+"px",
            },
            style : {
                background : "#E83828",
                border : "1px solid #000",
                borderRadius : "5.45px",
                padding : "0.5px 2px 0 2px",
                color : "#FFFFFF"
            },
            size : "17.3pt",
            font : `HiraKakuStd-W8`,
            content : desc, 
        },
    ]
}

export function ticketPrizeTemplate({
    dy, slot, level, quantity, redeemPoints, desc, top=0, left = 6, 
    width=140
}){

    // Ticket objs, multiple.
    let items = []
    
    // Height settings
    let ticketHeight = 27.7
    let ticketY = dy+30+slot*70;
    
    // Badges
    items.push({
        type : "img",
        property : {
            height : "auto",
            top : dy+slot*70+lineAdded*ticketHeight+"px",
            width : 28+"px",
            left : left+"px"
        },
        link : `/posterAssets/images/badges/${level}.svg`,
        alt : `NX樂園 ${level} 賞icon`
    })
    
    // Quantity
    items.push({
        type : "text", 
        property : {
            width : "auto",
            height : "16px",
            top : dy+29+slot*70+lineAdded*ticketHeight+"px",  
            left : left+"px",
        },
        style : {
            color : "#FFFFFF",
        },
        shadow : "shadow",
        size : "35pt",
        font : "HiraKakuStd-W8",
        content : "x"+quantity, 
    },
    // Redeem points
    {
        type : "text", 
        property : {
            width : "auto",
            height : "auto",
            top : dy+8+slot*70+lineAdded*ticketHeight+"px", 
            right : 5+"px",
        },
        style : {
            color : "#D71518",
        },
        shadow : "white",
        size : "21pt",
        font : `HiraKakuStd-W8`,
        shrink : "88%",
        content : `可換點數${redeemPoints}點`, 
    },
    // Desc
    {
        type : "text", 
        property : {
            width : "auto",
            height : "10.9px",
            top : dy+10+slot*70+lineAdded*ticketHeight+"px", 
            left : 44+"px",
        },
        style : {
            background : "#E83828",
            border : "1px solid #000",
            borderRadius : "5.45px",
            padding : "0.5px 2px 0 2px",
            color : "#FFFFFF"
        },
        size : "18pt",
        font : `HiraKakuStd-W8`,
        content : desc, 
    })
    
    // Tickets
    while(quantity > 10){
        // Add ticket 10
        items.push({
            type : "img",
            property : {
                height : ticketHeight+"px",
                top : ticketY+lineAdded*ticketHeight+"px",
                width : "auto",
                left : left+33+"px"
            },
            link : `/posterAssets/images/tickets/ticket10.svg`,
            alt : `NX樂園籤紙黏貼處圖示 - 10張`
        })

        // Set dy for next line
        lineAdded++
        quantity = quantity - 10
    }
    // Add last tickets
    if(quantity>0){
        items.push({
            type : "img",
            property : {
                height : ticketHeight+"px",
                top : ticketY+lineAdded*ticketHeight+"px",
                width : "auto",
                left : left+33+"px"
            },
            link : `/posterAssets/images/tickets/ticket${quantity}.svg`,
            alt : `NX樂園籤紙黏貼處圖示 - ${quantity}張`
        })
    }
    

    return [
        // Badge + Ticket
        ...items,
        // Quanaity
        // Redeem points
        // Desc
    ]

}

export function clipTemplate(bgcId){
    const w = "135px"
    const h = "113px"
    
    return [
        // Bgc
        {
            type:"img",
            property: {
                height : h,
                width : w,
                top : "18.748px",
                left : "37.5px"
            },
            link: `/posterAssets/images/backgrounds/${bgcId}.png`,
            className: `w-[${w}] h-[${h}]`,
            style:{
                WebkitMaskImage: "url('/posterAssets/images/backgrounds/posterDBgShape.svg')",
                WebkitMaskPosition: "center center",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat"
            }
        },
        // Logo
        {
            type: "img",
            property: {
                height : "auto",
                width : "20px",
                top : "39px",
                left : "40px",
            },
            link: "/logo.png",
            alt: "NX樂園Logo"
        },
        // Second bgc
        {
            type:"img",
            property: {
                width : "135px",
                height : "58px ",
                top : "133.252px",
                left : "37.5px"
            },
            alt: "下方背景圖片",
            link: `/posterAssets/images/backgrounds/${bgcId}.png`,
        },
        // Second bgc mask
        {
            type:"img",
            property: {
                width : "86.07px",
                height : "58px ",
                top : "133.252px",
                left : "37.5px"
            },
            alt: "下方星空圖片",
            link: `/posterAssets/images/posterDSky.png`,
        },
    ]
}

export function posterBObj(setting, data){

    let items = []

    // Main prizes
    for(let i=0; i<setting.length-1;i++){
        items.push(
            // Images
            {
                type: "img",
                property: {
                    height:  setting[i].width.split("px")[0] > setting[i].height.split("px")[0] ? setting[i].height : "auto",
                    width: setting[i].height.split("px")[0] > setting[i].width.split("px")[0] ? multiply(setting[i].width, 0.8) : "auto",
                    top : setting[i].top,
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.2)
                },
                link: "/posterAssets/images/products/"+data[i].img,
                alt: "一番賞公仔產品圖片"
            },
            // Badges
            {
                type: "img",
                property: {
                    height: "auto",
                    width: "46px",
                    top : add(setting[i].top, 20),
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.07)
                },
                link: "/posterAssets/images/badges/"+data[i].class+".svg",
                alt: `${data[i].class}賞分級圖片`
            },
            // Quanaities
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "16px",
                    top : add(setting[i].top, 53), 
                    left : add(setting[i].left, 45),
                },
                style : {
                    color : "#FFFFFF",
                },
                shadow : "shadow",
                size : "58pt",
                font : "HiraKakuStd-W8",
                content : "x"+data[i].quantity, 
            },
            // Redeem points
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "auto",
                    // 微調
                    top : add(setting[i].top, setting[i].height.split("px")[0]), 
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.08),
                },
                style : {
                    color : "#D71518",
                },
                shadow : "white",
                size : "30pt",
                font : `HiraKakuStd-W8`,
                shrink : "88%",
                content : `可換點數${data[i].redeemPoints}點`, 
            },
            // Names
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "auto",
                    top : add(add(setting[i].top, setting[i].height.split("px")[0]), -33), 
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.1),
                },
                style : {
                    color : "#FFFFFF"
                },
                shadow : "black",
                size : "38.7pt",
                font : "HiraKakuStd-W8",
                content : data[i].name, 
            },
        )
    }
    // Last prize only
    let LSSetting = setting[setting.length-1]
    items = [...items, ...[
        // Images
        {
            type: "img",
            property: {
                height:  LSSetting.width.split("px")[0] > LSSetting.height.split("px")[0] ? LSSetting.height : "auto",
                width: LSSetting.height.split("px")[0] > LSSetting.width.split("px")[0] ? multiply(LSSetting.width, 0.8) : "auto",
                top : LSSetting.top,
                left : LSSetting.left
            },
            link: "/posterAssets/images/products/"+data[data.length-1].img,
            alt: "一番賞公仔產品圖片"
        },
        // Badges
        {
            type: "img",
            property: {
                height: "auto",
                width: "135px",
                top : add(LSSetting.top, LSSetting.height.split("px")[0]-35),
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.07)
            },
            link: "/posterAssets/images/badges/"+data[data.length-1].class+".svg",
            alt: "LS賞分級圖片"
        },
        // Redeem points
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : add(LSSetting.top, LSSetting.height.split("px")[0]-10), 
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.08),
            },
            style : {
                color : "#D71518",
            },
            shadow : "white",
            size : "30pt",
            font : `HiraKakuStd-W8`,
            shrink : "88%",
            content : `可換點數${data[data.length-1].redeemPoints}點`, 
        },
        // Names
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : add(add(LSSetting.top, LSSetting.height.split("px")[0]), -55), 
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.1),
            },
            shadow : "black",
            size : "38.7pt",
            font : "HiraKakuStd-W8",
            content : data[data.length-1].name, 
        },
    ]]
    
    return items
}

export function posterCObj(setting, data){

    let items = []

    // Main prizes
    for(let i=0; i<setting.length-1;i++){
        items.push(
            // Images
            {
                type: "img",
                property: {
                    height:  setting[i].width.split("px")[0] > setting[i].height.split("px")[0] ? setting[i].height : "auto",
                    width: setting[i].height.split("px")[0] > setting[i].width.split("px")[0] ? multiply(setting[i].width, 0.8) : "auto",
                    top : setting[i].top,
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.2)
                },
                link: "/posterAssets/images/products/"+data[i].img,
                alt: "一番賞公仔產品圖片"
            },
            // Names
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "auto",
                    top : add(add(setting[i].top, setting[i].height.split("px")[0]), -30), 
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.1),
                },
                shadow : "black",
                size : "27pt",
                font : "HiraKakuStd-W8",
                content : data[i].name, 
            },
        )
    }
    // Last prize only
    let LSSetting = setting[setting.length-1]
    items = [...items, ...[
        // Images
        {
            type: "img",
            property: {
                height:  LSSetting.width.split("px")[0] > LSSetting.height.split("px")[0] ? LSSetting.height : "auto",
                width: LSSetting.height.split("px")[0] > LSSetting.width.split("px")[0] ? multiply(LSSetting.width, 0.8) : "auto",
                top : LSSetting.top,
                left : LSSetting.left
            },
            link: "/posterAssets/images/products/"+data[data.length-1].img,
            alt: "一番賞公仔產品圖片"
        },
        // Badges
        {
            type: "img",
            property: {
                height: "auto",
                width: "23px",
                top : add(LSSetting.top, LSSetting.height.split("px")[0]-35),
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.07)
            },
            link: "/posterAssets/images/badges/LSCircle.svg",
            alt: "LS賞分級圖片（圓形)"
        },
        // Names
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : add(LSSetting.top, LSSetting.height.split("px")[0]), 
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.1),
            },
            shadow : "shadow",
            size : "24pt",
            font : "HiraKakuStd-W8",
            content : data[data.length-1].name, 
        },
    ]]
    
    return items
}

export function posterDObj(setting, data){

    let items = []

    // Main prizes
    for(let i=0; i<setting.length-1;i++){
        items.push(
            // Images
            {
                type: "img",
                property: {
                    height:  setting[i].width.split("px")[0] > setting[i].height.split("px")[0] ? setting[i].height : "auto",
                    width: setting[i].height.split("px")[0] > setting[i].width.split("px")[0] ? multiply(setting[i].width, 0.8) : "auto",
                    top : setting[i].top,
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.2)
                },
                link: "/posterAssets/images/products/"+data[i].img,
                alt: `${data[i]?.name}`
            },
            // Names
            {
                type : "text", 
                property : {
                    width : "auto",
                    height : "auto",
                    top : add(add(setting[i].top, setting[i].height.split("px")[0]), -30), 
                    left : add(setting[i].left, setting[i].width.split("px")[0]*0.1),
                },
                shadow : "black",
                size : "19pt",
                font : "HiraKakuStd-W8",
                content : data[i].name, 
            },
        )
    }
    // Last prize only
    let LSSetting = setting[setting.length-1]
    items = [...items, ...[
        // Images
        {
            type: "img",
            property: {
                height:  LSSetting.width.split("px")[0] > LSSetting.height.split("px")[0] ? LSSetting.height : "auto",
                width: LSSetting.height.split("px")[0] > LSSetting.width.split("px")[0] ? multiply(LSSetting.width, 0.8) : "auto",
                top : LSSetting.top,
                left : LSSetting.left
            },
            link: "/posterAssets/images/products/"+data[data.length-1].img,
            alt: "一番賞公仔產品圖片"
        },
        // Badges
        {
            type: "img",
            property: {
                height: "auto",
                width: "16px",
                top : add(LSSetting.top, LSSetting.height.split("px")[0]-35),
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.07)
            },
            link: "/posterAssets/images/badges/LSCircle.svg",
            alt: "LS賞分級圖片"
        },
        // Names
        {
            type : "text", 
            property : {
                width : "auto",
                height : "auto",
                top : add(LSSetting.top, LSSetting.height.split("px")[0]), 
                left : add(LSSetting.left, LSSetting.width.split("px")[0]*0.1),
            },
            shadow : "shadow",
            size : "13.5pt",
            font : "HiraKakuStd-W8",
            content : data[data.length-1].name, 
        },
    ]]
    
    return items
}