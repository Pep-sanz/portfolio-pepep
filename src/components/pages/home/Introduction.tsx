import TypeAnimation from '@/components/elements/TypeAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SOCIAL_MEDIA } from '@/constants/menu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

export default function Introduction() {
  return (
    <div className="flex items-center gap-10 flex-col lg:w-[75vw] dark:bg-secondary bg-white rounded-md shadow-md p-4 sm:10 lg:px-16 lg:py-6">
      <div className="flex items-start w-full">
        <Badge className="md:mb-10 w-fit space-x-2 bg-green-100 text-green-600 hover:bg-green-100">
          <GoDotFill size={20} className="animate-pulse" />
          <p>AVAILABLE FOR WORK</p>
        </Badge>
      </div>
      <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
        <div className="flex flex-col justify-center order-2 sm:order-1">
          <div className="">
            <div className="font-sora dark:text-neutral-100 flex gap-2 text-2xl font-bold lg:text-3xl">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Pepep Saepul R",
                  "Hi, I'm Software Engineer",
                ]}
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
          <p className="mt-3">
            Passionate and seasoned Software Engineer with a strong focus on
            frontend development. Proficient in TypeScript and well-versed in
            all aspects of web technologies. Collaborative team player dedicated
            to delivering efficient, scalable, and visually appealing web
            applications.
          </p>
          <div className="flex flex-col mt-8">
            <Button className="mt-4 w-fit space-x-3">
              <p>Hire Me</p>
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex justify-start md:justify-between items-center md:items-end flex-col order-1 sm:order-2">
          <Image
            src="/images/pepep-1.png"
            width={200}
            height={200}
            alt="pepep"
          />
          {/* social media */}
          <div className="flex items-center text-neutral-400 space-x-4 mt-6 md:mt-12">
            <span className="text-xl font-bold">Fine Me :</span>
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
      </div>
    </div>
  );
}
