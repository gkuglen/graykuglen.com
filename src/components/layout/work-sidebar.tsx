'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { CASE_STUDIES } from '@/lib/case-studies';
import { cn } from '@/lib/utils';

type NavItem = { name: string; subtitle: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

const toItem = (s: (typeof CASE_STUDIES)[number]): NavItem => ({
  name: s.name,
  subtitle: s.navLabel,
  href: `/work/${s.slug}`,
});

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Selected work',
    items: CASE_STUDIES.filter((s) => s.group === 'work').map(toItem),
  },
  {
    label: 'Tools I’ve built',
    items: CASE_STUDIES.filter((s) => s.group === 'built').map(toItem),
  },
];

const WorkSidebar = () => {
  const pathname = usePathname();
  const asideRef = useRef<HTMLElement>(null);

  // On narrow screens the project list scrolls sideways; keep the current one in view.
  useEffect(() => {
    const active = asideRef.current?.querySelector<HTMLElement>(
      '[aria-current="page"]',
    );
    active?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [pathname]);

  return (
    <aside
      ref={asideRef}
      className="border-border w-full border-b lg:w-64 lg:shrink-0 lg:border-r lg:border-b-0"
    >
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

        {NAV_GROUPS.map((group, groupIndex) => (
          <div
            key={group.label}
            className={groupIndex > 0 ? 'mt-4 lg:mt-6' : ''}
          >
            <p className="text-muted-foreground mb-1 text-sm font-medium">
              {group.label}
            </p>

            <nav
              aria-label={group.label}
              className="-mx-1 flex gap-1 overflow-x-auto px-1 lg:flex-col lg:overflow-x-visible"
            >
              {group.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={`${group.label}-${itemIndex}`}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm transition-colors lg:flex lg:flex-col',
                      'shrink-0 lg:shrink',
                      isActive
                        ? 'bg-accent text-foreground font-medium'
                        : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                    )}
                  >
                    <span className="text-xs font-semibold tracking-wide uppercase opacity-60">
                      {item.name}
                    </span>
                    <span className="mt-0.5 block leading-snug">
                      {item.subtitle}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default WorkSidebar;
