'use client';
import Link from "next/link";
import Fade from "@/app/components/FadeAnimation/Fade";
export default function Hero() {
    const scrollIntoView = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
    return(
        <div className="h-screen relative flex justify-center items-center" style={{ backgroundImage: "url('../hero.jpg')"}}>
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </div>
            <Fade dir='up'>
                <div className="z-99">
                    <div className="flex justify-center">
                        <div title="I'm available!" className="bg-neutral-900 px-4 text-sm text-neutral-300 py-2 rounded-xl border border-neutral-600 flex items-center gap-2">
                            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                            <p className="text-neutral-400">Frontend Developer</p>
                        </div>
                    </div>
                    <div className="text-center my-10">
                        <h1 className="text-5xl md:text-9xl tracking-tighter font-extrabold">Crafting Digital</h1>
                        <h1 className="text-5xl md:text-9xl tracking-tighter font-extrabold text-center bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-teal-500">Experiences</h1>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-neutral-400 text-xl px-5 md:px-0 md:w-150 text-center">I design and build interfaces that feel intuitive, look stunning, and push the boundaries of what's possible on the web.</p>
                    </div>
                    <div className="flex gap-5 md:gap-10 justify-center my-10">
                        <button onClick={scrollIntoView} className="flex group items-center gap-2 bg-orange-500 px-8 py-5 text-neutral-900 font-bold rounded-full hover:scale-110 cursor-pointer transition hover:shadow-lg shadow-orange-500/15">
                            <p>View My Work</p>
                            <img className="h-5 group-hover:translate-y-1 transition duration-300" src="../arrow-down.svg" />
                        </button>
                        <Link href="../about/" className="bg-neutral-900 border border-neutral-400/10 px-8 py-5 text-[#eae8e0] font-bold rounded-full hover:scale-110 cursor-pointer transition hover:shadow-lg shadow-neutral-500/15">About Me</Link>
                    </div>
                </div>
            </Fade>
        </div>
    )
}