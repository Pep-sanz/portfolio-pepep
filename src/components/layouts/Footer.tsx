import React from 'react';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';

const QUICK_LINKS = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
  { title: 'Dashboard', href: '/dashboard' },
];

export default function Footer() {
  return (
    <footer className="relative w-full glass-card border-t border-x-0 border-b-0 py-12 md:py-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent" />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-8 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="font-geist text-xl text-on-surface tracking-wide">Pepcode</span>
            <p className="font-inter text-body-sm text-on-surface-variant">Software Engineer</p>
            <p className="font-inter text-body-sm text-on-surface-variant/70">Bandung, Indonesia</p>
            <p className="font-inter text-body-sm text-on-surface-variant/60 mt-2">
              &copy; 2024 Pepcode. Built with Precision.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <h4 className="font-geist text-label-caps text-on-surface-variant/60 tracking-widest uppercase text-center md:text-left">
              Pages
            </h4>
            <nav className="flex flex-wrap md:flex-col gap-x-4 gap-y-1.5 justify-center md:justify-start">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <h4 className="font-geist text-label-caps text-on-surface-variant/60 tracking-widest uppercase">
              Connect
            </h4>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="https://github.com/Pep-sanz"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                <BsGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/pepep-saepul-rohman/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="mailto:pepepsr4@gmail.com"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                <BiEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[60px] bg-primary-container/10 blur-[60px] pointer-events-none" />
    </footer>
  );
}
