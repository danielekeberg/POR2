'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back from "@/app/components/Back";
import { useEffect, useState } from "react";
import data from "@/app/data/data.json";
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

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        setProjects(data);
    }, [projects])
    return(
        <>
            <Header />
                <div className="px-5 md:px-[15%] py-35">
                    <div className="w-2/3">
                        <Back />
                        <p className="text-orange-500 mt-10 mb-5">ALL PROJECTS</p>
                        <div className="flex gap-2 my-10">
                            <h1 className="text-4xl md:text-5xl font-extrabold">My</h1>
                            <h1 className="text-4xl md:text-5xl tracking-tighter font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-teal-500 w-fit">Work</h1>
                        </div>
                        <p className="text-neutral-400 text-xl">A comprehensive collection of projects showcasing my journey in frontend development, from responsive web apps to interactive experiences.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-10">
                        {projects.map((p, i) => (
                            <Link href={`../project/${p.slug}`} key={i} className="rounded-xl bg-neutral-900 border border-neutral-400/20 hover:-translate-y-2 transition duration-300 cursor-pointer group overflow-hidden">
                                <img src={p.img} />
                                <div className="p-5 text-sm">
                                    <div className="text-orange-500 flex items-center gap-2">
                                        <div className="h-[1px] w-10 bg-orange-500" />
                                        <p>PROJECT {String(p.id).padStart(2, '0')}</p>
                                    </div>
                                    <h3 className="text-2xl font-bold group-hover:text-orange-500 transition duration-300">{p.name}</h3>
                                    <p className="text-neutral-400">{p.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            <Footer />
        </>
    )
}