'use client';

import { Minus, Plus } from 'lucide-react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

type QA = { question: string; answer: string };

const FAQS: QA[] = [
  {
    question: 'What types of problems do you work on?',
    answer:
      "I focus on complex problems where user behavior, business outcomes, and systems need to align—often in areas like real estate, finance, marketplaces, and healthcare. These are typically problems that don't have clear definitions upfront and require both framing and execution.",
  },
  {
    question: 'How do you approach product design?',
    answer:
      'I start by framing the problem clearly, then work to understand user behavior and business constraints. From there, I design solutions that connect directly to measurable outcomes—often simplifying complex systems into clear, actionable decisions.',
  },
  {
    question: 'Do you design or build products?',
    answer:
      'Both. I design and build data-driven applications to test ideas, validate assumptions, and explore product opportunities end-to-end. This helps move from concept to something real much faster.',
  },
  {
    question: 'What makes your approach different?',
    answer:
      "I focus on connecting systems—not just designing interfaces. Whether it's financial workflows, marketplaces, or physical assets like real estate, I look at how decisions are made and design tools that make those decisions clearer and more effective.",
  },
  {
    question: 'How does your real estate experience influence your work?',
    answer:
      'Being a long-time investor and operator shapes how I think about products. I tend to focus on practical outcomes—cash flow, efficiency, and long-term value—and apply that same mindset when designing digital products.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'Success is measured by outcomes—improvements in revenue, efficiency, adoption, or clarity in decision-making. The goal is not just to design something usable, but something that meaningfully improves performance.',
  },
  {
    question: 'What are you currently focused on?',
    answer:
      "I'm actively designing and building tools that explore how data, design, and systems thinking can improve decision-making—particularly in real estate and investment-related products.",
  },
];

function FaqItem({
  id,
  qa,
  open,
  onToggle,
}: {
  id: string;
  qa: QA;
  open: boolean;
  onToggle: (id: string) => void;
}) {
  const regionId = `${id}-region`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>(open ? 'auto' : 0);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      const h = contentRef.current.scrollHeight;
      setHeight(h);
    } else {
      const current = wrapperRef.current?.offsetHeight ?? 0;
      setHeight(current);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [open, qa.answer]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onEnd = () => {
      if (open) setHeight('auto');
    };
    el.addEventListener('transitionend', onEnd);
    return () => el.removeEventListener('transitionend', onEnd);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (!contentRef.current) return;
      if (open) {
        const h = contentRef.current.scrollHeight;
        if (height !== 'auto') setHeight(h);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open, height]);

  return (
    <div
      className={[
        'bg-card rounded-[16px] border px-4 py-2 sm:px-6 sm:py-4',
        'border-border shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]',
      ].join(' ')}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => onToggle(id)}
        className={[
          'group flex w-full items-center justify-between gap-4 text-left',
          'text-foreground text-xl leading-tight font-medium sm:text-2xl',
          'hover:no-underline',
          'py-1 sm:py-2',
        ].join(' ')}
      >
        <span className="pr-2">{qa.question}</span>
        <span
          className={[
            'flex size-6 items-center justify-center rounded-[6px] border',
            open
              ? 'border-tagline bg-tagline/10 text-tagline'
              : 'border-border text-muted-foreground',
          ].join(' ')}
          aria-hidden
        >
          {open ? (
            <Minus className="size-3" strokeWidth={2} />
          ) : (
            <Plus className="size-3" strokeWidth={2} />
          )}
        </span>
      </button>

      <div
        id={regionId}
        role="region"
        aria-hidden={!open}
        ref={wrapperRef}
        style={{ height, transition: 'height 200ms ease' }}
        className="overflow-hidden"
      >
        <div
          ref={contentRef}
          className="text-muted-foreground mt-2 text-sm font-normal whitespace-pre-wrap sm:text-base"
        >
          {qa.answer}
        </div>
      </div>
    </div>
  );
}

export default function MetafiFaq() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleToggle = (id: string) =>
    setValue((curr) => (curr === id ? undefined : id));

  return (
    <section id="metafi-faq" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 lg:py-28">
        <p className="text-tagline mb-4 text-center text-sm leading-tight font-normal sm:text-base">
          FAQ
        </p>

        <h2 className="text-foreground mx-auto mb-4 max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="text-muted-foreground mx-auto max-w-2xl text-center text-base font-normal sm:text-lg">
          Common questions about how I work and what I focus on.
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:mt-14">
          {FAQS.map((qa, i) => {
            const id = `item-${i + 1}`;
            const open = value === id;
            return (
              <FaqItem
                key={id}
                id={id}
                qa={qa}
                open={open}
                onToggle={handleToggle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
