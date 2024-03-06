import Navbar from "@/components/ui/navbar";

const ProjectsLayout = ({children}) => {
    return (
    <div className="h-full flex flex-col">
        <Navbar />
        {children}
    </div>
    );
}
 
export default ProjectsLayout;