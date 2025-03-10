import { detailData } from "@/lib/data";

const SideBar = ({ className }) => {
    const data = detailData
    
    const userData = {
        user_name : "一番くじ"
    }

    return (
        <aside className={`text-center space-y-1 ${className}`}>
            <div className="flex justify-center w-full">
                <h3 className="font-semibold pr-1">專案編號</h3>
                <h4>{data.id}</h4>
            </div>
        </aside>
    );
}

export default SideBar;