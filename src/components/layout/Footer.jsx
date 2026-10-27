import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white border-t border-gray-200 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600">
                    © {currentYear} Firstki Aditya Fernanda. All rights reserved.
                </p>
                <p className="text-sm text-gray-500">
                    Designed & built with care.
                </p>
            </div>
        </footer>
    );
}

export default Footer;