import { FaArrowRight } from "react-icons/fa";


export default function AboutSection() {
    return (
        <div className="p-4 mt-20 mb-32">
            <div className="mb-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Work</h1>
                <p className="text-[#4A5565] text-base mt-4 font-normal lg:w-[549px]">
                    My professional work for high-level e-Commerce has been documented. each assignment is designed to fit the gap, both in Behavior.
                </p>
                <button className="mt-6 flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-base font-normal">Resume</span>
                    <FaArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}