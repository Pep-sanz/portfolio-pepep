import Image from "@/components/elements/Image";
import TypeAnimation from "@/components/elements/TypeAnimation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Introduction() {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between flex-col md:flex-row items-center gap-6 dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <div className="space-y-6 ">
        <div className="space-y-3">
          <div className="font-sora dark:text-neutral-100 flex gap-2 text-2xl font-bold lg:text-3xl">
            <TypeAnimation
              sequence={["Hi, I'm Pepep Saepul R", "Hi, I'm Software Engineer"]}
              delay={3000}
            />
          </div>
          <ul className="ml-5 mt-2 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-8">
            <li>Remote/office workers</li>
            <li>
              Based in Bandung <span className="ml-1">🇮🇩</span>
            </li>
          </ul>
        </div>
        <p className="max-w-lg">
          I am a software engineer specializing in frontend development for both
          mobile and web platforms. I focus on building fast, responsive, and
          user-centered interfaces using modern frameworks and best UI/UX
          practices. With strong problem-solving skills and attention to detail,
          I aim to deliver clean, intuitive, and scalable products that are easy
          to maintain.
        </p>
        <Button
          onClick={() => router.push("/about")}
          className="w-fit space-x-3"
        >
          <p>About Me</p>
          <FaArrowRight />
        </Button>
      </div>
      <Image
        src={`/Images/pepep-2.png`}
        width={200}
        height={300}
        alt="pepep"
        className="rounded-lg"
      />
      {/*<div className="">
        <div className="flex justify-start md:justify-between items-center md:items-end flex-col order-1 sm:order-2">
         <div className="flex items-center text-neutral-400 space-x-4">
          <span className="font-bold">Fine Me :</span>
          <div className="flex items-center gap-6">
            {SOCIAL_MEDIA.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div> 
        </div> 
      </div>*/}
    </div>
  );
}
