"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const FlexCard = ({children, title, desc}) => {

    return (
    <div className=" px-2 box-border my-4">
    <Card className=" w-[95%] mx-auto">
        <form>
        <CardHeader className="px-3">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent className="px-3">
            <div className="grid w-full items-center gap-4">
                {children}        
            </div>
        </CardContent>
        </form>
    </Card>
    </div>
    );
}
 
export default FlexCard;