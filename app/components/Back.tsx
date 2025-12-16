import Link from "next/link";
export default function Back() {
    return(
        <Link href="../" className="flex gap-2 items-center text-neutral-400 group cursor-pointer">
            <img src="../arrow-left.svg" className="h-5 group-hover:-translate-x-1 transition duration-300" />
            <p className="group-hover:text-[#eae8e0]">Back to home</p>
        </Link>
    )
}