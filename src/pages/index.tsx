import Image from "next/image";
import { Inter } from "next/font/google";
import type { info } from "../Types/info";

const inter = Inter({ subsets: ["latin"] });
const myInfo: info = {
  name: "Walter White",
  nationality: "American",
  dateOfIssue: "March 07",
  Authority: "USA",
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <article className="bg-amber-100 min-w  px-16  border-2  shadow-xl border-black rounded-md">
        <h1 className="py-6 text-center text-4xl font-bold tracking-widest ">
          UNITED STATES
        </h1>
        <section className="flex grid items-center grid-cols-3 gap-10">
          <div className="grid place-items w-max px-8">
          <Image
            src="/WW.png"
            width={200}
            height={200}
            alt="Heisenberg"
            className="h-72 w-52 rounded-md my-4 "
          />
          </div>
          
          <div className="flex flex-col ml-6">
            <h3 className="text-3xl m-0">{myInfo.name}</h3>
            <p className="">Name</p>
            <h3 className="text-3xl m-0 pt-4">{myInfo.nationality}</h3>
            <p>Nationality</p>
            <h3 className="text-3xl m-0 pt-4">{myInfo.dateOfIssue}</h3>
            <p>Date of issue</p>
            <h3 className="text-3xl m-0 pt-4">{myInfo.Authority}</h3>
            <p>Authority</p>
            
          </div>
        </section>

      </article>
    </main>
  );
}
