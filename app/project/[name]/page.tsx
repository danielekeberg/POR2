'use client';
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import data from "@/app/data/data.json";
import { useState, useEffect } from "react";
import Link from "next/link";

type Project = {
    id: number;
    name: string;
    desc: string;
    github: string;
    live: string;
    slug: string;
    category: string;
    duration: string;
    tech: any;
    img: string;
    description: string;
}

export default function Project() {
    const params = useParams();
    const name = params.name as string;
    const [project, setProject] = useState<Project | null>(null)
    useEffect(() => {
        const filter = (data as Project[]).find(n => n.slug === name);
        setProject(filter ?? null);
    }, [])
    return(
        <>
            <Header />
            <div className="px-5 md:px-[15%] py-25 md:py-35">
                <Link href="../projects/" className="flex gap-2 items-center text-neutral-400 group cursor-pointer">
                    <img src="../arrow-left.svg" className="h-5 group-hover:-translate-x-1 transition duration-300" />
                    <p className="group-hover:text-[#eae8e0]">Back to projects</p>
                </Link>
                <p className="text-orange-500 mt-10 mb-5">{project?.category}</p>
                <h1 className="text-5xl md:text-8xl font-bold my-5">{project?.name}</h1>
                <p className="text-neutral-400 my-10">{project?.desc}</p>
                <div className="grid grid-cols-1 md:flex gap-5 items-center text-sm">
                    <div className="flex flex-col gap-3">
                        <p className="text-neutral-400">DURATION</p>
                        <p className="py-1">{project?.duration}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-neutral-400">TECHNOLOGIES</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
                            {project?.tech.map((t:any, i:any) => (
                                <p key={i} className="bg-neutral-900 text-center py-1 px-3 rounded-full border border-neutral-400/10 hover:border-orange-500 cursor-pointer transition duration-300">{t}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-10 rounded-xl overflow-hidden border border-neutral-400/20">
                    <img src={project?.img} />
                </div>
                <div className="bg-[#eae8e0] py-[5%] px-[15%] border border-neutral-400/10 text-[#0a0a0a]">
                    <h1 className="text-3xl font-bold mb-10">Project Overview</h1>
                    <p>{project?.description}</p>
                </div>
                <div className="mt-15 md:my-15">
                    <h1 className="text-center text-4xl font-bold">Want to see it live?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:flex gap-5 md:gap-10 justify-between md:justify-center my-5">
                    <Link target="_blank" href={`${project?.live}`} className="flex group justify-center items-center border border-orange-500 gap-2 bg-orange-500 px-2 md:px-8 py-5 text-neutral-900 font-bold rounded-full hover:scale-110 cursor-pointer transition hover:shadow-lg shadow-orange-500/15">
                        <p>View Live Project</p>
                        <img className="h-5 group-hover:-translate-y-1 transition duration-300" src="../external.svg" />
                    </Link>
                    <Link target="_blank" href={`${project?.github}`} className="bg-neutral-900 border border-neutral-400/20 px-2 md:px-8 py-5 text-[#eae8e0] font-bold rounded-full hover:scale-110 cursor-pointer transition hover:shadow-lg shadow-neutral-500/15">Github</Link>
                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}