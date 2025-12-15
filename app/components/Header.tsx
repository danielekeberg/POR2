'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
    return(
        <div className={`px-5 md:px-[15%] transition duration-300 py-7 flex items-center justify-between fixed z-99999 top-0 w-full ${scrolled ? "bg-neutral-950/80 backdrop-blur-md" : "bg-transparent"}`}>
            <div>
                <Link href="../" className="text-2xl font-bold cursor-pointer">daniel<span className="text-orange-500">.</span></Link>
            </div>
            <nav className="flex gap-8 text-neutral-400">
                <Link href="../" className="relative inline-block after:content-[''] w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-[#eae8e0] cursor-pointer">WORK</Link>
                <Link href="../about/" className="relative inline-block after:content-[''] w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-[#eae8e0] cursor-pointer">ABOUT</Link>
            </nav>
            <Link href="../about/" className="bg-orange-500 px-5 py-2 text-slate-900 font-bold rounded-full cursor-pointer">Let's talk</Link>
        </div>
    )
}