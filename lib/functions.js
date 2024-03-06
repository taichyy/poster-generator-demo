import { v4 as uuidv4 } from 'uuid';

// Choose which template to use automatically
export function templateSelector(data){
  
    let major=0;
    
    for(let i=0; i<data.prizes.length; i++){
        // Major prizes counting
        data.prizes[i].name && data.prizes[i].class != "LS" ? major++ : null;
    }
    
    // Return ther numbers of the major prizes
    return major
}
  
  
export function findLowestY(items) {
    
    if (items.length === 0) {
        return null; 
    } 
    
    // Find highest value using reduce()
    const maxTop = items.reduce((max, item) => {
    
        // Input check
        let itemTop = item.property.top.split("px")[0] || 0;
        let itemHeight = item.property.height.split("px")[0] || 0;
        
        if(isNaN(itemTop)){
            itemTop=0
        }
        if(isNaN(itemHeight)){
            itemHeight=0
        }
        return Math.max(max, parseInt(itemTop)+parseInt(itemHeight));
    }, Number.NEGATIVE_INFINITY);
  
    return maxTop;
}

// Add other attributes to every single items in the item[] array
export function addAttributes(items){
    for(let count=0; count<items.length; count++){
        items[count] = {
            // Append unique id
            id: uuidv4(),
            scale : 1,
            select : false,
            ...items[count]
        }
    }
    return items
}

export function reScale(obj, scale){
    
    let width = obj.property.width
    let height = obj.property.height
    
    obj.property.height = multiply(height, scale)
    obj.property.width = multiply(width, scale)
    
    return obj
}

// Multiply numbers with '%' or 'px' appended
// E.g. multiply('10%', 1.1) => 11%
export function multiply(str, scale) {

    const match = str.match(/^(\d*\.?\d+)(%|px)$/);
  
    if (str=="auto"){
        return str
    }
  
    if (match) {
        const [, number, unit] = match;
        const result = parseInt(parseFloat(number) * scale) + unit;

        return result
    }
  
    return str;
}

export function add(str, val) {

    const match = str.match(/^(\d*\.?\d+)(%|px)$/);
  
    if (str=="auto"){
        return str
    }
  
    if (match) {
        const [, number, unit] = match;
        const result = parseInt(parseFloat(number) + parseFloat(val)) + unit;

        return result
    }
  
    return str;
}

// Return total amount and price + promotion price
export function dataTotal(data){
    
    // E.g. 直接連續a抽優惠b元;c抽優惠d元
    let promotionA;
    promotionA = "直接連續"+data.promotion.map( (item, index) => {
        return chineseNum(item.quantity)+"抽優惠"+item.price+(index != data.promotion.length-1 ? ";" : "元")
    }).join('');
    
    // E.g. a(中文)抽$b元 c(中文)抽$d元
    let promotionB;
    promotionB = data.promotion.map( (item, index) => {
        return chineseNum(item.quantity)+"抽$"+item.price+(index != data.promotion.length-1 ? " " : "")
    })
    
    // E.g. 一共x抽
    let amount;
    let total
    amount = parseInt(data.prizes.reduce( (accu, current) => {
        return accu + current.quantity
    }, 0)-1)
    total = "一共"+amount+"抽"
    
    // E.g. 一共x抽
    let totalB;
    totalB = "總"+amount+"抽"
    
    
    return {
        // E.g. 直接連續a抽優惠b元;c抽優惠d元
        promotionA,
        // E.g. a(中文)抽$b元 c(中文)抽$d元
        promotionB,
        // E.g. 一共x抽
        total,
        // E.g. 總x抽
        totalB
    }
}

// Turn number into chinese character
export function chineseNum(num){
    switch (num) {
        case 1:
            return "一"
            break;
        case 2:
            return "二"
            break;
        case 3:
            return "三"
            break;
        case 4:
            return "四"
            break;
        case 5:
            return "五"
            break;
        case 6:
            return "六"
            break;
        case 7:
            return "七"
            break;
        case 8:
            return "八"
            break;
        case 9:
            return "九"
            break;
        case 10:
            return "十"
            break;
    }
}