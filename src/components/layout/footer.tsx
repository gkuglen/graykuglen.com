'use client';

import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socials = [
  { Icon: Linkedin, href: 'https://linkedin.com' },
  { Icon: Twitter, href: 'https://twitter.com' },
];

export const Footer = () => {
  const openCalendly = () => {
    const w = window as Window & {
      Calendly?: { initPopupWidget: (opts: { url: string }) => void };
    };
    if (typeof window !== 'undefined' && w.Calendly) {
      w.Calendly.initPopupWidget({
        url: 'https://calendly.com/graykuglen/meet_gray',
      });
    }
  };

  return (
    <footer className="force-light-vars bg-primary text-primary-foreground px-2.5 lg:px-0">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="md:min-w-[140px]">
            <Link
              href="/"
              aria-label="Gray Kuglen"
              className="flex items-center gap-2"
            >
              <Image
                src="/images/layout/favicon.svg"
                alt="Gray Kuglen"
                width={28}
                height={28}
              />
              <span className="text-primary-foreground text-base font-black">
                Gray Kuglen
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:flex md:items-start md:justify-between md:gap-16">
            {/* Experience */}
            <div className="min-w-0">
              <h3 className="text-muted-foreground mb-4 text-sm leading-tight font-medium">
                Experience
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#metafi-features"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#decision-tools"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    Decision Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#metafi-faq"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="min-w-0">
              <h3 className="text-muted-foreground mb-4 text-sm leading-tight font-medium">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services#problem-framing"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    Problem Framing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#user-understanding"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    User Understanding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#design-thinking"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    Design Thinking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#systems-thinking"
                    className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                  >
                    Systems Thinking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <h3 className="text-muted-foreground mb-4 text-sm leading-tight font-medium">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={openCalendly}
                    className="text-primary-foreground/90 hover:text-primary-foreground cursor-pointer text-sm font-normal transition-colors"
                  >
                    Get In Touch
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border-border/40 mt-12 border-t" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-sm font-normal">
            © {new Date().getFullYear()} Gray Kuglen. All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
              <Link
                key={href}
                href={href}
                aria-label={href}
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
