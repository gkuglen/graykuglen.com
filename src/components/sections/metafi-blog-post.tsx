'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  tagline?: string;
  title: string;
  intro?: string;
  image?: string;
  appUrl?: string;
  children: React.ReactNode;
};

export default function MetafiBlogPost({
  tagline,
  title,
  intro,
  image,
  appUrl,
  children,
}: Props) {
  return (
    <article className="w-full">
      <section className="px-6 pt-10 lg:pt-16">
        <div className="bg-accent container px-0">
          <div className="mx-auto max-w-[992px] px-4 py-6 md:py-12">
            {/* Back button */}
            <div className="mb-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </Link>
            </div>

            {!!tagline && <span className="text-tagline">{tagline}</span>}

            <h1 className="text-foreground mt-3 text-[34px] leading-[1.2] tracking-tight lg:text-[40px]">
              {title}
            </h1>

            {intro ? (
              <p className="text-muted-foreground mt-3 max-w-[760px]">
                {intro}
              </p>
            ) : null}

            {image ? (
              <div className="mt-6">
                <div
                  className="relative mx-auto aspect-[16/9] w-full max-w-[980px] overflow-hidden rounded-xl"
                  style={{ border: '1px solid #B3B3B3' }}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width:1024px) 980px, 100vw"
                  />
                </div>

                {appUrl && (
                  <div className="mt-6 flex justify-center">
                    <a
                      href={appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center rounded-[12px] px-6 text-sm font-semibold transition-colors"
                    >
                      View App →
                    </a>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:py-16">
        <div className="container px-0">
          <div className="mx-auto max-w-[992px] px-4 py-6 md:py-12">
            <div
              className={[
                'prose max-w-none',
                'prose-headings:text-foreground prose-h2:tracking-tight prose-h3:tracking-tight',
                'prose-p:text-muted-foreground prose-li:text-muted-foreground',
                'prose-a:text-tagline hover:prose-a:opacity-80',
                'prose-hr:border-border prose-blockquote:text-muted-foreground',
                'prose-img:rounded-xl',
              ].join(' ')}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
