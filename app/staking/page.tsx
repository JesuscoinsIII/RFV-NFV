import { SiteHeader } from "@/components/site-header";
import { StakingHero } from "@/components/staking/staking-hero";
import { StakingStats } from "@/components/staking/staking-stats";
import { StakingForm } from "@/components/staking/staking-form";

export default function StakingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <StakingHero />
        <StakingStats />
        <StakingForm />
      </main>
    </div>
  );
}