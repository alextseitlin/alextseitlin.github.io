import { MY_NAME } from "@/lib/constants";
import Container from "@/app/_components/container";

const skills = [
  "JavaScript and Typescript",
  "Tailwind",
  "Figma",
  "nextjs",
  "NodeJS",
  "Shopify",
  "Redux",
  "Zustand",
  "Express",
  "NestJS",
];

export function Intro() {
  return (
    <Container>
      <section className="flex-col flex md:justify-between py-20 mb-20">
        <p className="text-2xl mb-10">Hi, my name is Alex and I am</p>
        <h1 className="md:leading-[4.7rem] font-bold tracking-tighter md:pr-8 xl:w-10/12 flex gap-5 flex-wrap items-baseline">
          <span className="text-5xl md:text-8xl">Passionate</span>
          <span className="text-5xl md:text-8xl text-slate-800">
            {" "}
            about building
          </span>
          <span className="text-5xl md:text-8xl text-green-400"> awesome</span>
          <span className="text-5xl md:text-8xl"> Frontend</span>
        </h1>
        <p className="md:w-7/12 border border-t border-b-0 border-l-0 border-r-0 pt-10 mt-10">
          I have been doing web design and UI/UX for 20 years and frontend for
          15 years. I used and worked with almost anything out there but I am
          most passionate working with Nextjs,Tailwind and Figma. I am
          comfortable working with:
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {skills.map((skill) => (
            <span className="bg-slate-200 px-2 py-1 rounded">{skill}</span>
          ))}
        </div>
      </section>
    </Container>
  );
}
