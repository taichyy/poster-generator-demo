import { Store } from "lucide-react";

import { Input } from "@/components/ui/input";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { data } from "@/lib/data";
import { userData } from "@/lib/data";

const ProjectsPage = () => {
    
    return (
    <main>
        <div className="max-w-[95%] mx-auto mt-5">
            <h2 className="flex items-center ml-2 md:ml-0">
                <Store className="inline mr-1" />
                <span className="text-slate-800 font-semibold text-xl">
                    {userData.name}
                </span>
            </h2>
            <DataTable columns={columns} data={data} />
        </div>
    </main>
    );
}
 
export default ProjectsPage;