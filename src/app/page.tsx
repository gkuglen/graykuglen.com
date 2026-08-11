import AppsDecisionTools from '@/components/sections/apps-decision-tools';
import MetafiCta from '@/components/sections/matafi-cta';
import MetafiFaq from '@/components/sections/metafi-faq';
import MetafiFeatures from '@/components/sections/metafi-features';
import MetafiHero from '@/components/sections/metafi-hero';
import MetafiIntegrations from '@/components/sections/metafi-integrations';

export default function Home() {
  return (
    <>
      <MetafiHero />
      <MetafiFeatures />
      <AppsDecisionTools />
      <MetafiIntegrations />
      <MetafiFaq />
      <MetafiCta />
    </>
  );
}
