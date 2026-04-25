'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CASE_STUDIES } from '@/lib/case-studies';
import { cn } from '@/lib/utils';

const WorkSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="border-border w-full border-b lg:w-64 lg:shrink-0 lg:border-r lg:border-b-0">
      <div className="p-4 lg:p-6">
        {/* Back link */}
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground mb-5 flex items-center gap-1.5 text-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>

        <p className="text-muted-foreground mb-1 hidden text-xs font-semibold tracking-widest uppercase lg:block">
          Case Studies
        </p>

        <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-x-visible">
          {CASE_STUDIES.map((study) => {
            const isActive = pathname === `/work/${study.slug}`;
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm transition-colors lg:flex lg:flex-col',
                  'shrink-0 lg:shrink',
                  isActive
                    ? 'bg-accent text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                )}
              >
                <span className="text-xs font-semibold tracking-wide uppercase opacity-60">
                  {study.eyebrow}
                </span>
                <span className="mt-0.5 hidden leading-snug lg:block">
                  {study.title}
                </span>
                <span className="block lg:hidden">{study.company}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default WorkSidebar;
