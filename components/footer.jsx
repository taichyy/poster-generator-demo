import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaClock, FaDribbble, FaEnvelope, FaFacebook, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const footerContent = [
        {
            title: "About Us",
            list: ["Support center", "Customer Support", "About Us", "CopyRight", "Popular Campaign"],
        },
        {
            title: "Information",
            list: ["Return Policy", "Privacy Policy", "Terms & Conditions", "Site Map", "Store Hours"],
        },
        {
            title: "Contact Info",
            list: [
                {
                    icon: <FaMapMarkedAlt />,
                    text: "Amsterdam, Netherlands",
                },
                {
                    icon: <FaPhoneAlt />,
                    text: "+01 23454 65456",
                },
                {
                    icon: <FaClock />,
                    text: "7 Days - 8am - 10am",
                },
                {
                    icon: <FaEnvelope />,
                    text: "info.example@gmail.com",
                },
            ],
        },
    ]
    
    return (
        <div className="bg-white py-10 ">
            <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold">
                            <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
                        </h1>
                        <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
                            This is just some sample text, please generate your own text.
                            Come on give me more, code pilot.
                        </p>
                    </div>
                    {/* About and links */}
                    {footerContent.map((content, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {content.title}
                            </h3>
                            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                                {content.list.map((item, index) => (
                                    <li key={index} className={typeof item == "object" ? "flex items-center" : ""}>
                                        {typeof item == "object" ? (
                                            <Fragment>
                                                <span className="mr-2">
                                                    {item.icon}
                                                </span>
                                                {item.text}
                                            </Fragment>
                                        ) : item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Bottom Section */}
                <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p className="text-center md:text-left">
                        Copyright &copy; 2024 Taichee, co., Ltd. All Rights Reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span>Social: </span>
                        <Link href="#" className="text-gray-500 hover:text-gray-800">
                            <FaFacebook />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-800">
                            <FaTwitter />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-800">
                            <FaDribbble />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer