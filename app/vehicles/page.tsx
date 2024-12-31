import { SiteHeader } from "@/components/site-header";
import { VehicleList } from "@/components/vehicles/vehicle-list";
import { VehicleHero } from "@/components/vehicles/vehicle-hero";

export default function VehiclesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <VehicleHero />
        <VehicleList />
      </main>
    </div>
  );
}