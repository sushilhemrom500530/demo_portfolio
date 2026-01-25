
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function AboutPage() {
    const experiences = [
        {
            company: "Spark Tech Agency",
            position: "Jr. UX UI Designer",
            duration: "May 25-present",
            description: "Designing complete product experiences for mobile and web, collaborating with managers, marketers, and developers to deliver user-focused solutions across industries."
        },
        {
            company: "Spark Tech Agency",
            position: "UX UI Designer Intern",
            duration: "May 25-present",
            description: "Designing complete product experiences for mobile and web, collaborating with managers, marketers, and developers to deliver user-focused solutions across industries."
        }
    ];

    return (
        <div className="w-full mt-[88px]">
            {/* Hero Section with Background Image */}
            <div className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-start px-4 md:px-8 lg:px-16 py-24 md:py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)'
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8">
                        Hi, I am Tamim
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl font-normal mb-4 leading-relaxed">
                        I'm a passionate Product Designer with expertise in creating delightful user experiences. My work focuses on simplifying complex problems and crafting intuitive interfaces that users love.
                    </p>
                    <p className="text-base md:text-lg lg:text-xl font-normal leading-relaxed">
                        With experience working with companies like Microsoft, Americor, and various startups, I've helped teams create products that make a real difference in people's lives.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
                <div className="container mx-auto max-w-7xl">
                    {/* Experience Section */}
                    <div className="mb-20 md:mb-32">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Side - Title and Button */}
                            <div className="lg:w-1/3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                                    Experience
                                </h2>
                                <button className="flex items-center gap-2 px-6 py-3 border border-[#60A5FA] text-[#60A5FA] rounded-md bg-white hover:bg-[#60A5FA] hover:text-white transition-colors">
                                    <span className="text-base font-normal">Resume</span>
                                    <span className="text-base font-normal">+</span>
                                </button>
                            </div>

                            {/* Right Side - Experience Entries */}
                            <div className="lg:w-2/3 space-y-10 md:space-y-12">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8">
                                        <div className="md:w-2/5">
                                            <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                                                {exp.company}
                                            </h3>
                                            <p className="text-base text-black mb-1 font-normal">
                                                {exp.position}
                                            </p>
                                            <p className="text-sm md:text-base text-black font-normal">
                                                {exp.duration}
                                            </p>
                                        </div>
                                        <div className="md:w-3/5">
                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mb-20 md:mb-32">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Side - Title */}
                            <div className="lg:w-1/3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                                    Education
                                </h2>
                            </div>

                            {/* Right Side - Education Entry */}
                            <div className="lg:w-2/3">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg md:text-xl font-bold text-black">
                                        Dhaka College
                                    </h3>
                                    <p className="text-base text-black">
                                        2021-2026
                                    </p>
                                    <p className="text-base text-black">
                                        Honor's in Statistics - Major User Research
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-12">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors"
                                >
                                    <FiExternalLink className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}