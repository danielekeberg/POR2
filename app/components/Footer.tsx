import Link from "next/link";
export default function Footer() {
    const now = new Date();
    const year = now.getFullYear();
    return(
        <div className="px-5 md:px-[15%] border-t border-neutral-400/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:py-15">
                <div className="md:w-100">
                    <h1 className="text-2xl font-bold mb-4">daniel<span className="text-orange-500">.</span></h1>
                    <p className="text-neutral-400">Frontend developer crafting beautiful digital experiences with code and creativity.</p>
                </div>
                <div>
                    <h1 className="text-sm font-bold mb-5">NAVIGATION</h1>
                    <nav className="text-neutral-400 flex flex-col gap-2">
                        <Link href="../" className="relative inline-block after:content-[''] w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500 cursor-pointer">Home</Link>
                        <Link href="../about/" className="relative inline-block after:content-[''] w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500 cursor-pointer">About</Link>
                    </nav>
                </div>
                <div>
                    <h1 className="text-sm font-bold">GET IN TOUCH</h1>
                    <p className="my-5">danieleke@live.no</p>
                    <div className="flex gap-5">
                        <Link className="h-10 w-10 rounded-full bg-neutral-900 cursor-pointer hover:scale-110 hover:border-orange-500 border border-neutral-400/10 transition duration-300" href="https://github.com/danielekeberg" target="_blank"><img src="../github.svg" className="p-2" /></Link>
                        <Link className="h-10 w-10 rounded-full bg-neutral-900 cursor-pointer hover:scale-110 hover:border-orange-500 border border-neutral-400/10 transition duration-300" href="https://www.linkedin.com/in/daniel-lehre-ekeberg-04a7b1178/" target="_bank"><img src="../linkedin.svg" className="p-2" /></Link>
                    </div>
                </div>
            </div>
            <div className="py-10 border-t border-neutral-400/10">
                <p className="text-neutral-400 text-right md:text-left text-xs">&copy; {year} Daniel Ekeberg. All rights reserved.</p>
            </div>
        </div>
    )
}