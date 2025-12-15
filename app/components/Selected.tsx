'use client';
import Link from "next/link";
export default function SelectedWork() {
    return(
        <div id="projects" className="px-5 md:px-[15%] py-25 min-h-screen">
            <div>
                <p className="text-orange-500">SELECTED WORK</p>
                <div className="my-5">
                    <h1 className="text-5xl font-extrabold">Projects that</h1>
                    <h1 className="text-5xl tracking-tighter font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-teal-500 w-fit">push boundaries</h1>
                </div>
                <p className="text-neutral-400 text-xl">A curated selection of work that showcase my passion for creating exceptional digital experiences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 mt-15">
                <Link href="../project/luxelot" className="rounded-xl overflow-hidden border group bg-neutral-900 border-neutral-600/20 hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <img className="group-hover:grayscale-0 grayscale transition duration-300" src="../luxelot-teaser.jpg" />
                    <div className="p-5">
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] bg-orange-500 w-5" />
                            <p className="text-orange-500 text-sm my-2">PROJECT 01</p>
                        </div>
                        <h1 className="text-3xl font-extrabold group-hover:text-orange-500 transition duration-300">LuxeLot</h1>
                        <p className="text-neutral-400 my-5">LuxeLot is a front-end auction marketplace featuring user authentication, live bidding, and listing management, designed to deliver a smooth and intuitive user experience.</p>
                    </div>
                </Link>
                <div className="md:p-10">
                    <Link href="../project/corely" className="block rounded-xl overflow-hidden border border-neutral-600/20 group bg-neutral-900 hover:-translate-y-2 transition duration-300 cursor-pointer">
                        <img className="group-hover:grayscale-0 grayscale transition duration-300" src="../corely-teaser.jpg" />
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <div className="h-[1px] bg-orange-500 w-5" />
                                <p className="text-orange-500 text-sm my-2">PROJECT 02</p>
                            </div>
                            <h1 className="text-3xl group font-extrabold group-hover:text-orange-500 transition duration-300">Corely</h1>
                            <p className="text-neutral-400 my-5">Corely is a modern e-commerce platform focused on showcasing products with a clean interface, intuitive navigation, and a smooth shopping experience.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Link href="../project/danbook" className="rounded-xl w-250 overflow-hidden border border-neutral-600/20 group bg-neutral-900 hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <img className="group-hover:grayscale-0 grayscale transition duration-300" src="../danbook-teaser.png" />
                    <div className="p-5">
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] bg-orange-500 w-5" />
                            <p className="text-orange-500 text-sm my-2">PROJECT 03</p>
                        </div>
                        <h1 className="text-3xl font-extrabold group-hover:text-orange-500 transition duration-300">DanBook</h1>
                        <p className="text-neutral-400 my-5">DanBook is a social blogging platform where users can create posts, interact with others, and manage their personal profiles in a modern, dark-themed interface.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}