"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import toast from 'react-hot-toast';
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {

    const router = useRouter()
    
    const [msg, setMsg] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const info = {
        username : "admin",
        password : "admin",
        name : "巨蛋店"
    }
    
    const isValidInput = (input) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(input);
    }
    
    // Checking
    useEffect(()=>{
    
        setMsg("")
        
        // Number & english character check
        if(!isValidInput(username) && username.length!=0) {
            toast.error("請輸入英文與數字");
            setUsername(username.slice(0, -1));
        }
        
        if(!isValidInput(password) && password.length!=0) {
            toast.error("請輸入英文與數字");
            setPassword(password.slice(0, -1));
        }
        
        
    },[username, password])
    
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        
        const in_username = e.target['username'].value.trim();
        const in_password = e.target['password'].value.trim();
        
        if(in_username.includes("GET")){
            setMsg("hell")
            return;
        }
        // Empty username
        if(in_username.length==0){
            setMsg("請輸入帳號");
            return;
        }
        // Empty password
        if(in_password.length==0){
            setMsg("請輸入密碼");
            return;
        }
        
        if( in_username == info.username && in_password == info.password){
            router.push('/projects');
        } else {
            toast.error("帳號或密碼錯誤！")
        }
        
    }
    
    return (
    <Card className="min-w-[80%] md:min-w-[550px]">
        <form onSubmit={(e)=>handleSubmitLogin(e)}>
            <div className="flex my-4 flex-col md:flex-row">
                <CardHeader className="border-r-2 px-6">
                    <CardTitle>
                        <Image
                            src="/logo.png"
                            width={150}
                            height={200}
                            alt="NX樂園Logo"
                            className="h-auto w-40 mb-3 mx-auto md:mx-0"
                            priority
                        />
                        <div className="text-center">
                            海報生成工具
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="py-0 flex items-center flex-1">
                    <div className="w-full mt-4 md:mt-0">
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">使用者名稱</Label>
                                <Input id="username" placeholder="" value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">使用者密碼</Label>
                                <Input id="password" placeholder="" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <CardDescription className="flex items-center text-red-600 font-light text-sm">
                                <X size={18} className={msg.length>0 ? "opacity-100" : "opacity-0"} />
                                {msg}
                            </CardDescription>
                         </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter className="flex justify-end">
                <Button className="w-full md:w-auto">登入</Button>
            </CardFooter>
        </form>
    </Card>
    );
}