import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function dateFormatter(text){
  let split = text.split('T')
  
  // Date
  split[0] = split[0].replaceAll('-','/')
  // Time
  split[1] = split[1].slice(0, -5)
  
  return split[0]+"　"+split[1]
}

export function statusFormatter(num){
  if(num == 0){
    return "未生成"
  } else if(num == 1){
    return "正在生成"
  } else if(num == 2){
    return "已生成"
  } else if(num == 3){
    return "已送出"
  }
}




