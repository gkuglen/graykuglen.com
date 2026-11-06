import Clients from '@/components/sections/clients';
import ContactCta from '@/components/sections/contact-cta';
import Hero from '@/components/sections/hero';
import SelectedWork from '@/components/sections/selected-work';
import ToolsBuilt from '@/components/sections/tools-built';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ToolsBuilt />
      <Clients />
      <ContactCta />
    </>
  );
}
