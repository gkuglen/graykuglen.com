import { GridBackground } from '../ui/grid-background';

const MetafiHero = () => {
  return (
    <section
      id="metafi-hero"
      className="bg-background border-b-border relative overflow-hidden border-b px-6 lg:px-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <GridBackground className="[background-size:calc(var(--square-size,64px))_calc(var(--square-size,64px))]" />
        <div className="from-background to-background/0 absolute inset-x-0 top-0 h-40 bg-gradient-to-b" />
        <div className="from-background/0 to-background absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b" />
      </div>

      <div className="relative container px-0 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 py-24 text-center sm:py-28 md:gap-8 md:pt-32 md:pb-28">
          <h1 className="text-4xl leading-tight font-black tracking-tight text-balance text-[#141414] sm:text-5xl md:text-[64px]">
            Product designer building data-driven applications that simplify
            complex decisions and drive measurable outcomes.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-xl md:text-lg">
            From early concepts to deployed systems across fintech, proptech,
            and enterprise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetafiHero;
