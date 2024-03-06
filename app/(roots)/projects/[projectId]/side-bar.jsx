import { detailData } from "@/lib/data";
import { userData } from "@/lib/data";
  
const SideBar = ({className}) => {

    const data = detailData
    
    return (
    <aside className={`text-center space-y-1 ${className}`}>
        <h2 className=" text-lg font-semibold">{userData.name}</h2>
        <div className="flex justify-center w-full">
            <h3 className="font-semibold pr-1">專案編號</h3>
            <h4>{data.id}</h4>
        </div>
    </aside>
    );
}
 
export default SideBar;