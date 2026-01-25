"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Logo from "../reuseable/logo";


export default function Footer() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
    };

    // data of all footer sections
    const FooterCard = ({ data }: { data: { title: string, data: { id: number, title: string, href: string }[], isEmail: boolean } }) => {
        return (
            <div>
                <h3 className="text-2xl font-medium uppercase text-black opacity-[0.7] mb-6">
                    {data?.title}
                </h3>
                <div className="space-y-3">
                    {data?.data?.map((nav, index) => (
                        <div key={index}>
                            <Link
                                href={nav?.href || "#"}
                                className="hover:underline transition-all !font-normal text-black md:text-lg"
                            >
                                {nav?.title}
                            </Link>
                        </div>
                    ))}
                    {data?.isEmail && <div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center gap-0 relative">
                                <span className="absolute left-3 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.1816 3.5H6.68164C4.4725 3.5 2.68164 5.29086 2.68164 7.5V16.5C2.68164 18.7091 4.4725 20.5 6.68164 20.5H17.1816C19.3908 20.5 21.1816 18.7091 21.1816 16.5V7.5C21.1816 5.29086 19.3908 3.5 17.1816 3.5Z" stroke="#DDE1EB" strokeWidth="1.5" />
                                        <path d="M2.72852 7.58984L9.93352 11.7198C10.5373 12.0702 11.223 12.2547 11.921 12.2547C12.6191 12.2547 13.3047 12.0702 13.9085 11.7198L21.1335 7.58984" stroke="#DDE1EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <input
                                    className="flex lg:w-[263px] bg-transparent placeholder:text-sm md:placeholder:text-base pl-10 p-[12px_16px] flex-col items-start gap-2 rounded-l-lg border-t border-b border-l font-normal text-[#838383] border-[#2563EB] focus:outline-none"
                                    placeholder="Enter your email address"
                                    name="email"
                                    required

                                />
                                <button className="flex md:w-[64px] p-[12px_8px] flex-col justify-center items-center gap-2 rounded-r-lg border-t border-r border-b border-[#2563EB] bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#020A1B]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.5622 2.43744L10.6403 13.3593M2.4897 9.37213L21.2397 2.27572C21.3073 2.24985 21.381 2.24412 21.4518 2.25922C21.5227 2.27432 21.5876 2.3096 21.6388 2.36081C21.69 2.41202 21.7253 2.47696 21.7404 2.54779C21.7555 2.61861 21.7498 2.6923 21.7239 2.75994L14.6275 21.5099C14.5993 21.5811 14.5499 21.642 14.4861 21.6843C14.4222 21.7266 14.347 21.7484 14.2704 21.7467C14.1938 21.7449 14.1196 21.7198 14.0578 21.6746C13.9959 21.6294 13.9494 21.5664 13.9244 21.494L10.765 13.7085C10.7282 13.5982 10.6662 13.498 10.5839 13.4157C10.5017 13.3335 10.4014 13.2715 10.2911 13.2346L2.50563 10.0781C2.43229 10.0537 2.36828 10.0072 2.32236 9.94501C2.27645 9.88283 2.25086 9.80798 2.24912 9.73071C2.24737 9.65343 2.26955 9.5775 2.31262 9.51332C2.35568 9.44913 2.41753 9.39982 2.4897 9.37213Z" stroke="#DDE1EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>}
                </div>
            </div>
        );
    };
    const footerData = [
        {
            id: 1,
            title: "company",
            data: [
                { id: 1, title: "About us", href: "#about-us" },
                { id: 2, title: "Pricing", href: "#pricing" },
                { id: 3, title: "Blog", href: "#blog" },
                { id: 4, title: "Contact", href: "#contact" },
            ],
        },
        {
            id: 2,
            title: "Features",
            data: [
                { id: 1, title: "Tracking & Analytics", href: "#tracking-and-analysis" },
                { id: 2, title: "Automation", href: "#automation" },
                { id: 3, title: "Anti - Fraud", href: "#anti-fraud" },
                { id: 4, title: "Personalized", href: "#personalized" },
            ],
        },
        {
            id: 2,
            title: "Others",
            data: [
                { id: 1, title: "Terms and Conditions", href: "/terms-and-conditions" },
                { id: 2, title: "Privacy Policy", href: "/privacy-policy" },
                { id: 3, title: "Cookie Policy", href: "#cookie-policy" },
            ],
            isEmail: true,
        },
    ];

    // for logo icons
    const iconsData = [
        { id: 1, icon: <FaLinkedinIn size={16} />, href: "#linkedin" },
        { id: 2, icon: <FaXTwitter size={16} />, href: "#twitter" },
        { id: 3, icon: <FaFacebookF size={16} />, href: "#facebook" },
        { id: 4, icon: <FaInstagram size={16} />, href: "#instagram" },
    ];

    return (
        <div className=" relative">

            <div className="container mx-auto p-4">
                <div className=" w-full h-auto min-h-[394px] lg:pt-[80px] pt-10">
                    <div className="flex items-center md:items-start justify-between flex-col lg:flex-row gap-10">
                        {/* logo  */}
                        <div className="lg:w-[380px] flex flex-col items-center justify-center md:items-start">
                            <div className="">
                                {/* <Logo /> */}
                                <Logo isScroll={false} />
                            </div>
                            <p className="mt-6 text-center md:text-start text-lg text-black opacity-[0.7] capitalize md:w-2/3 lg:w-80">
                                Helping brands grow with precision and trust—join the companies that rely on us every day.
                            </p>
                            <div className="flex items-center justify-start gap-5 mt-6">
                                {
                                    iconsData?.map((icon) => (
                                        <Link key={icon?.id} href={icon?.href} className="p-1 bg-white rounded-full text-black flex items-center justify-center gap-6 h-6 w-6 hover:bg-blue-500 transition-all">
                                            {icon?.icon}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Footer Links */}
                        <div className="flex md:flex-1 items-center justify-center text-center md:text-start md:justify-between flex-col md:flex-row  md:flex-wrap lg:gap-10 gap-5">
                            {footerData.map((item, index) => (
                                <FooterCard key={index} data={item as { title: string, data: { id: number, title: string, href: string }[], isEmail: boolean }} />
                            ))}
                        </div>
                    </div>
                    {/* hr under section  */}
                    <div className="mt-8">
                        <hr className="bg-[#DDE1EB] opacity-[0.5]" />
                        <div className="w-full py-4 text-center">
                            <p className="text-sm font-normal text-black opacity-[0.7] text-center">
                                <span className="pr-1 text-lg">&copy;</span>
                                2024 ARTIFIEX. All Rights Reserved. Product of <Link href="#">artifiex</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}