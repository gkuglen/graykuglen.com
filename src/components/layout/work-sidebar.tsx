'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type NavItem = { name: string; subtitle: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Example Work',
    items: [
      {
        name: 'Get Rent Ready',
        subtitle: 'Rental Performance & Asset Value',
        href: '/work/get-real-ready',
      },
      {
        name: 'Azibo',
        subtitle: 'Property Insurance for Landlords',
        href: '/work/azibo-insurance',
      },
      {
        name: 'Azibo',
        subtitle: 'Rental Application Process',
        href: '/work/azibo-rentals',
      },
      {
        name: 'Kaiser Permanente',
        subtitle: 'Home-Based Healthcare',
        href: '/work/kaiser',
      },
      { name: 'Amazon', subtitle: 'Virtual Try-On', href: '/work/amazon' },
      {
        name: 'YOSS / Adecco',
        subtitle: 'Freelance Marketplace Research',
        href: '/work/yoss-adecco',
      },
    ],
  },
  {
    label: 'Recent Apps',
    items: [
      {
        name: 'Generations in Color',
        subtitle: 'Community Public Art',
        href: '/work/generations-in-color',
      },
      {
        name: 'Property Deal Sheet',
        subtitle: 'Property Investment Analysis',
        href: '/work/property-deal-sheet',
      },
      {
        name: 'Get Rent Ready',
        subtitle: 'Rental Market Analysis',
        href: '/work/get-real-ready',
      },
      {
        name: 'Property Development',
        subtitle: 'Development Feasibility',
        href: '/work/property-development',
      },
    ],
  },
];

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

        {NAV_GROUPS.map((group, groupIndex) => (
          <div key={group.label} className={groupIndex > 0 ? 'mt-6' : ''}>
            <p className="text-muted-foreground mb-1 hidden text-xs font-semibold tracking-widest uppercase lg:block">
              {group.label}
            </p>

            <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-x-visible">
              {group.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={`${group.label}-${itemIndex}`}
                    href={item.href}
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
                    <span className="mt-0.5 hidden leading-snug lg:block">
                      {item.subtitle}
                    </span>
                    <span className="block lg:hidden">{item.subtitle}</span>
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
