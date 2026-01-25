
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Project {
    company: string;
    platform: "Mobile" | "Web";
    title: string;
    description: string;
    dotColor: string;
}

const projects: Project[] = [
    {
        company: "Ansericor",
        platform: "Mobile",
        title: "Services Catalogue",
        description: "Rewamp the Americor's credibility.",
        dotColor: "bg-red-500"
    },
    {
        company: "Huddle",
        platform: "Mobile",
        title: "Hotel Booking App",
        description: "A seamless hotel booking experience.",
        dotColor: "bg-blue-500"
    },
    {
        company: "Pluckers N Movers",
        platform: "Mobile",
        title: "Packages",
        description: "Easy-to-use packages for moving safely, flexibly.",
        dotColor: "bg-red-500"
    },
    {
        company: "Convention",
        platform: "Web",
        title: "Experience at Free Trial",
        description: "User-generated article API For adoption, including the requirements on a lean level.",
        dotColor: "bg-blue-500"
    },
    {
        company: "Microsoft",
        platform: "Web",
        title: "Request Search Experiences",
        description: "Boosted team search results, improving discoverability.",
        dotColor: "bg-green-500"
    }
];

export default function WorkSection() {
    return (
        <div className="p-4 my-20 bg-[#f9fafb] lg:px-8 py-9">
            <div className="pb-9">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Work</h1>
                <p className="text-[#4A5565] text-base mt-4 font-normal lg:w-[549px]">
                    My professional work for high-level e-Commerce has been documented. each assignment is designed to fit the gap, both in Behavior.
                </p>
                <button className="mt-6 flex items-center gap-2 px-6 py-2 border border-gray-600 rounded-full cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-base text-[#0A0A0A] font-normal">Resume</span>
                    <FaArrowRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg px-6 pt-6 pb-4 transition-shadow"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${project.dotColor}`}></span>
                                <span className="text-sm font-normal text-[#212529]">{project.company}</span>
                            </div>
                            <span className="text-sm font-normal text-[#4A5565]">{project.platform}</span>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative w-full h-52 md:h-72 lg:h-[432px] bg-gray-200 rounded-md mb-4 flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors">
                            <FiExternalLink className="w-6 h-6 text-[#99A1AF]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-[#212529] mb-2">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#4A5565] font-normal leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}