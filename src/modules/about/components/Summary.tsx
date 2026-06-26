import Tooltip from "@/components/elements/Tooltip";
import { summaryMock } from "@/constants/summary";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified as VerifiedIcon } from "react-icons/md";

export default function Summary() {
  return (
    <div className="relative py-6 md:py-8">
      <div className="space-y-6">
        <div>
          <h2 className="font-geist text-headline-lg text-on-surface">
            About
          </h2>
          <p className="font-inter text-body-sm text-on-surface-variant mt-1">
            A short story of me
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="space-y-4 flex flex-col items-center w-full lg:w-auto flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <div className="rounded-2xl overflow-hidden relative z-10">
                <Image
                  src="/Images/pepep-1.png"
                  width={250}
                  height={200}
                  alt="profile"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <h2 className="font-geist text-headline-lg-mobile text-on-surface whitespace-nowrap">
                  Pepep Saepul Rohman
                </h2>
                <Tooltip title="Verified">
                  <VerifiedIcon size={18} className="text-primary" />
                </Tooltip>
              </div>
              <Link
                href="/"
                className="font-geist text-mono text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                @pepCode
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 font-inter text-body-md text-on-surface-variant leading-relaxed">
            <p>{summaryMock.paragraphOne}</p>
            <p>{summaryMock.paragraphTwo}</p>
            <p>{summaryMock.paragraphThree}</p>
            <p>{summaryMock.paragraphFour}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
