'use client';

import Script from 'next/script';

const MetafiCta = () => {
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
    <section
      id="metafi-cta"
      className="bg-tagline relative overflow-hidden px-6"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* dotted pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:16px_16px] [color:oklch(1_0_89.88)] opacity-30" />

      {/* centered rectangle behind text */}
      <div className="bg-tagline pointer-events-none absolute top-0 left-1/2 h-full w-[500px] -translate-x-1/2" />

      <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-primary-foreground mx-auto max-w-5xl text-4xl leading-tight font-black text-balance sm:text-5xl md:text-6xl">
          Working on a product or system that needs clarity?
        </h2>

        <p className="text-primary-foreground/80 mx-auto mt-4 max-w-2xl text-base font-normal sm:text-lg">
          Let's talk through it.
        </p>

        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={openCalendly}
            className="bg-primary-foreground text-tagline hover:bg-primary-foreground/90 h-12 w-full cursor-pointer rounded-[12px] px-6 text-sm font-semibold transition-colors sm:w-auto"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default MetafiCta;
