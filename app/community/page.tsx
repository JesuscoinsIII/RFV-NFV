import { SiteHeader } from "@/components/site-header";
import { CommunityHero } from "@/components/community/community-hero";
import { CommunityFeatures } from "@/components/community/community-features";

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <CommunityHero />
        <CommunityFeatures />
      </main>
    </div>
  );
}