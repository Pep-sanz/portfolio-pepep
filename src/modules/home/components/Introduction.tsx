import Image from '@/components/elements/Image';
import TypeAnimation from '@/components/elements/TypeAnimation';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function Introduction() {
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
            <li>Remote worker</li>
            <li>
              Based in Bandung <span className="ml-1">🇮🇩</span>
            </li>
          </ul>
        </div>
        <p className="max-w-md">
          Passionate and seasoned Software Engineer with a strong focus on
          frontend development. Proficient in TypeScript and well-versed in all
          aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web
          applications.
        </p>
        <Button className="w-fit space-x-3">
          <p>About Me</p>
          <FaArrowRight />
        </Button>
      </div>
      <Image
        src="/images/pepep-1.png"
        width={200}
        height={300}
        alt="pepep"
        // className="order-1 md:order-2"
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
