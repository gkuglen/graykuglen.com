import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
};

export default function PrivacyPage() {
  return (
    <section className="bg-background px-6 lg:px-0">
      <div className="container max-w-2xl py-16 sm:py-24">
        <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
          Privacy
        </h1>
        <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
          <p>
            This site uses Google Analytics to see which pages get visited. It
            sets cookies and collects standard, non-identifying usage data such
            as pages viewed, referrer, device type and approximate location. I
            don&rsquo;t sell or share it.
          </p>
          <p>
            Booking a call opens Calendly, which handles the details you enter
            under its own{' '}
            <a
              href="https://calendly.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              privacy policy
            </a>
            .
          </p>
          <p>
            To opt out of analytics, use a browser blocker or Google&rsquo;s{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              opt-out add-on
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
