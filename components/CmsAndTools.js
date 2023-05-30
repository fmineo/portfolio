import Image from "next/image";
import React from "react";

function CmsAndTools() {
    const tools = [
        {
            name: "Magento",
            logo: "/images/logos/MAGENTO.svg",
        },
        {
            name: "WordPress",
            logo: "/images/logos/WORDPRESS.svg",
        },
        {
            name: "PrestaShop",
            logo: "/images/logos/PRESTASHOP.svg",
        },
        {
            name: "Git",
            logo: "/images/logos/GIT.svg",
        },
        {
            name: "Docker",
            logo: "/images/logos/DOCKER.svg",
        },
        {
            name: "VSCode",
            logo: "/images/logos/VSCODE.svg",
        },
        {
            name: "Less",
            logo: "/images/logos/LESS.svg",
        },
        {
            name: "Sass",
            logo: "/images/logos/SASS.svg",
        },
        {
            name: "Webpack",
            logo: "/images/logos/WEBPACK.svg",
        },
        {
            name: "Babel",
            logo: "/images/logos/BABEL.svg",
        },
        {
            name: "NPM",
            logo: "/images/logos/NPM.svg",
        },
        {
            name: "NodeJS",
            logo: "/images/logos/NODEJS.svg",
        },
        {
            name: "TypeScript",
            logo: "/images/logos/TYPESCRIPT.svg",
        },
        {
            name: "cPanel",
            logo: "/images/logos/CPANEL.svg",
        },
        {
            name: "Apache",
            logo: "/images/logos/APACHE.svg",
        },
        {
            name: "NGINX",
            logo: "/images/logos/NGINX.svg",
        },
        {
            name: "Vite",
            logo: "/images/logos/VITE.svg",
        },
        {
            name: "VueJS",
            logo: "/images/logos/VUE.svg",
        },
    ];

    return (
        <div className="m-3 mb-16">
            <h4 className="text-center text-lg font-semibold mb-4">
                CMS, Strumenti e varie
            </h4>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 md:gap-4 lg:grid-cols-6 lg:gap-5">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="border h-24 rounded-lg py-2 px-3 text-center text-sm shadow-lg flex flex-col justify-around transition-all duration-300 hover:scale-110 dark:bg-neutral-200 dark:text-neutral-600 dark:font-medium"
                    >
                        <div className="image-container">
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                // fill
                                width={100}
                                height={100}
                                className="image max-h-6"
                            />
                        </div>
                        {tool.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CmsAndTools;
