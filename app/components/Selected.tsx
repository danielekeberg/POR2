'use client';
import Link from 'next/link';
export default function SelectedWork() {
  return (
    <div id="projects" className="px-5 md:px-[15%] py-25 min-h-screen">
      <div>
        <p className="text-orange-500">SELECTED WORK</p>
        <div className="my-5">
          <h1 className="text-5xl font-extrabold">Projects that</h1>
          <h1 className="text-5xl tracking-tighter font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-teal-500 w-fit">
            push boundaries
          </h1>
        </div>
        <p className="text-neutral-400 text-xl">
          A curated selection of work that showcase my passion for creating
          exceptional digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 mt-15">
        <Link
          href="../project/csstatlab"
          className="rounded-xl overflow-hidden border group bg-neutral-900 border-neutral-600/20 hover:-translate-y-2 transition duration-300 cursor-pointer"
        >
          <img
            className="group-hover:grayscale-0 grayscale transition duration-300"
            src="../csstatlab-teaser.jpg"
          />
          <div className="p-5">
            <div className="flex items-center gap-2">
              <div className="h-[1px] bg-orange-500 w-5" />
              <p className="text-orange-500 text-sm my-2">PROJECT 01</p>
            </div>
            <h1 className="text-3xl font-extrabold group-hover:text-orange-500 transition duration-300">
              CSStatLab
            </h1>
            <p className="text-neutral-400 my-5">
              CSStatLab analyzes Counter-Strike match data to deliver advanced
              insights into player performance and aim skill
            </p>
          </div>
        </Link>
        <div className="md:p-10">
          <Link
            href="../project/hadelandgravstein"
            className="block rounded-xl overflow-hidden border border-neutral-600/20 group bg-neutral-900 hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              className="group-hover:grayscale-0 grayscale transition duration-300"
              src="../hg-teaser.jpg"
            />
            <div className="p-5">
              <div className="flex items-center gap-2">
                <div className="h-[1px] bg-orange-500 w-5" />
                <p className="text-orange-500 text-sm my-2">PROJECT 02</p>
              </div>
              <h1 className="text-3xl group font-extrabold group-hover:text-orange-500 transition duration-300">
                Hadeland Gravstein
              </h1>
              <p className="text-neutral-400 my-5">
                A website for Hadeland Gravstein showcasing gravestone products,
                options, and transparent pricing.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="../project/holidaze"
          className="rounded-xl w-250 overflow-hidden border border-neutral-600/20 group bg-neutral-900 hover:-translate-y-2 transition duration-300 cursor-pointer"
        >
          <img
            className="group-hover:grayscale-0 grayscale transition duration-300"
            src="../holidaze-teaser.jpg"
          />
          <div className="p-5">
            <div className="flex items-center gap-2">
              <div className="h-[1px] bg-orange-500 w-5" />
              <p className="text-orange-500 text-sm my-2">PROJECT 03</p>
            </div>
            <h1 className="text-3xl font-extrabold group-hover:text-orange-500 transition duration-300">
              Holidaze
            </h1>
            <p className="text-neutral-400 my-5">
              Holidaze is a booking platform that helps users discover unique
              stays through a clean and intuitive interface.
            </p>
          </div>
        </Link>
      </div>
      <div className="flex justify-center my-15">
        <Link href="../projects/" className="flex items-center gap-2 group">
          <p className="relative inline-block after:content-[''] w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full text-xl cursor-pointer">
            View all projects
          </p>
          <div className="h-8 w-8 border border-neutral-400/20 rounded-full bg-neutral-900 group-hover:bg-orange-500 flex items-center justify-center transition duration-300">
            <img src="../arrow-left.svg" className="h-5 rotate-180" />
          </div>
        </Link>
      </div>
    </div>
  );
}
