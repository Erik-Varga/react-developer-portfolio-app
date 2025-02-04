import React from 'react'
import Img from '../assets/ev_icon_pic.jpg';
import ResumePDF from '../assets/files/ErikVargaResume2024.pdf';
import { FaRegFilePdf } from 'react-icons/fa6';

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ErikVargaResume2024.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div name="resume" className="w-full text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="py-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-700">
                        Resume
                    </p>
                </div>
                <a
                    href="/ErikVargaResume2024.pdf"
                    download="Erik-Varga-Resume-PDF"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className='p-2 border border-gray-500 rounded'>Download Erik Varga Resume PDF</button>
                </a>
                <div className="flex flex-col md:flex-row items-center justify-center bg-primary pt-5 text-black">
                    <div className="bg-white p-10 h-auto rounded-sm">

                        <h1 className="font-bold text-2xl">Erik Varga</h1>
                        <div>305 Partridge Lane, Longwood, FL 32779</div>
                        <div>321-945-1678</div>
                        <div><a href="mailto:erikjvarga@gmail.com">erikjvarga@gmail.com</a></div>
                        <div><a href="https://github.com/Erik-Varga" target='_blank'>https://github.com/Erik-Varga</a></div>

                        <div className="mt-4 font-bold">Market Research Data & Analytics Developer</div>
                        <div>Experienced Developer/Analyst with a strong focus on data analytics and application development. Over 30 years of experience transforming complex datasets into actionable business insights. Proven ability to drive process improvements and enhance data-driven decision-making within enterprise environments.</div>

                        <div className="mt-4 font-bold">Core Competencies</div>
                        <ul className="list-disc ml-5">
                            <li>Data Analytics & BI Tools: Power BI, IBM SPSS Statistics, SQL, Access, Excel</li>
                            <li>ETL & Data Integration: SQL, Python, .NET, Snap Survey Pro/Web Host</li>
                            <li>Development & Programming: React, JavaScript, Firebase, Tailwind, HTML, CSS</li>
                            <li>Systems & Platforms: Windows Server, Small Business Server, Remote Access, Android OS, Git</li>
                            <li>Project Management & Collaboration: Microsoft Office, Teams</li>
                        </ul>
                        <div className="mt-4 font-bold">Professional Experience</div>
                        <div>Data Analyst, Survey Programmer, Network Administrator</div>
                        <div>Varga Market Research Services, Orlando, FL</div>
                        <div>1990 – 2021</div>
                        <div className="mt-4">Led end-to-end data management and survey programming for a market research firm specializing in Central Florida’s tourism industry, with a focus on delivering high-quality, actionable data to clients.</div>
                        <ul className="list-disc ml-5">
                            <li>Developed and Deployed Survey Solutions: Created and managed survey applications for desktop, web, and mobile platforms, enabling efficient data collection and integration into enterprise systems. These solutions supported large-scale data initiatives across diverse client projects.</li>
                            <li>Data Management & Reporting: Processed extensive data sets, leveraging SQL and SPSS to conduct in-depth statistical analyses and create detailed reports. Delivered insights that informed strategic decisions for high-profile clients such as Walt Disney World Company and ESPN Wide World of Sports.</li>
                            <li>Optimized ETL Processes: Streamlined data extraction, transformation, and loading processes by implementing automated workflows, which enhanced data accuracy and reduced processing time. Improved overall data flow by integrating ETL tools into existing infrastructures.</li>
                            <li>Developed BI Dashboards: Utilized Power BI to design and deploy dashboards that provided real-time analytics and visualizations, facilitating better data-driven decisions for clients.</li>
                            <li>Network Administration & Data Security: Maintained the integrity and security of client data through effective management of Windows Server Active Directory, including user credentials and system backups. Ensured compliance with industry standards for data protection.</li>
                            <li>Enhanced Client Engagement: Developed custom web portals for focus group recruitment and CATI research, resulting in improved client satisfaction and increased project success rates.</li>
                        </ul>
                        <div className="mt-4"><span className='font-bold'>Key Clients:</span> Walt Disney World Company, ESPN Wide World of Sports, General Motors, Lynx, YMCA, Expressway Authority (E-Pass), Orlando Int'l Airport, Kissimmee CVB, Brevard Space Coast, AAA, Fun Spot, Zora! Festival, Club Med, and various Central Florida Vacation Resort destinations.</div>
                        <div className="mt-4"><span className='font-bold'>Personal Interests:</span> Active in Scouting, drumming, biking, and cooking.</div>

                        <div>
                            <button className='mt-3 text-sm font-bold flex items-center gap-2 mb-5 p-3 border-2 rounded w-auto hover:bg-gray-100 hover:text-slate-800'>Download
                                <a href={ResumePDF} download="ErikVargaResume2024" target='_blank'>
                                    <div className='text-3xl'><FaRegFilePdf /></div>
                                </a>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Resume