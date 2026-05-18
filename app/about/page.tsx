import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Back from '@/app/components/Back';
export default function About() {
  return (
    <>
      <Header />
      <div className="px-5 md:px-[15%] my-35">
        <div className="md:w-2/3">
          <Back />
          <p className="text-orange-500 mt-10 mb-5">ABOUT ME</p>
          <div className="my-5">
            <h1 className="text-4xl md:text-5xl tracking-tighter font-extrabold">
              Frontend developer with a
            </h1>
            <h1 className="text-4xl md:text-5xl tracking-tighter font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-teal-500 w-fit">
              passion for craft
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-neutral-400 text-xl">
              I'm a frontend developer who cares deeply about crafting intuitive
              and engaging user experiences. I enjoy bridging the gap between
              design and development, making sure every detail feels intentional
              - from layout and typography to performance and interaction.
            </p>
            <p className="text-neutral-400 text-xl">
              I work extensively with React, PHP, API integrations, databases,
              and cloud platforms such as Azure, with a strong focus on building
              responsive, maintainable, and user-friendly applications.
            </p>
            <p className="text-neutral-400 text-xl">
              I'm driven by curiosity and continuous learning, and I enjoy
              refining my skills by building real-world projects and
              experimenting with new technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="flex gap-5 items-center bg-neutral-900 p-5 rounded rounded-xl border border-neutral-500/10">
              <div className="bg-orange-500/10 h-15 w-15 flex items-center justify-center rounded-full">
                <img src="../location.svg" className="h-8" />
              </div>
              <div>
                <h5>Based in</h5>
                <p className="text-neutral-400">Hønefoss, Norway</p>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-neutral-900 p-5 rounded rounded-xl border border-neutral-500/10">
              <div className="bg-teal-500/10 h-15 w-15 flex items-center justify-center rounded-full">
                <img src="../mail.svg" className="h-8" />
              </div>
              <div>
                <h5>Contact</h5>
                <p className="text-orange-500">danieleke@live.no</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#eae8e0] py-[5%] px-[15%] text-[#0a0a0a]">
          <h1 className="text-3xl font-bold mb-10">Skills & Technologies</h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ">
            <div>
              <p className="text-xl font-bold">Frontend</p>
              <ul className="list-disc marker:text-orange-500 pl-5 text-neutral-700">
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>REST API Integration</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold">Backend</p>
              <ul className="list-disc marker:text-orange-500 pl-5 text-neutral-700">
                <li>PHP</li>
                <li>REST APIs</li>
                <li>Azure</li>
                <li>MySQL</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold">CMS & Platforms</p>
              <ul className="list-disc marker:text-orange-500 pl-5 text-neutral-700">
                <li>MODX</li>
                <li>Decap CMS</li>
                <li>Vercel</li>
                <li>Netlify</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold">Design</p>
              <ul className="list-disc marker:text-orange-500 pl-5 text-neutral-700">
                <li>Figma</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold">Tools & Workflow</p>
              <ul className="list-disc marker:text-orange-500 pl-5 text-neutral-700">
                <li>Git & GitHub</li>
                <li>VSCode</li>
                <li>Chrome DevTools</li>
                <li>FileZilla</li>
                <li>HeidiSQL</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
