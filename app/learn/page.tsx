import { SiteHeader } from "@/components/site-header";
import { LearnHero } from "@/components/learn/learn-hero";
import { LearnResources } from "@/components/learn/learn-resources";
import { LearnFaq } from "@/components/learn/learn-faq";

export default function LearnPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <LearnHero />
        <LearnResources />
        <LearnFaq />
      </main>
    </div>
  );
}