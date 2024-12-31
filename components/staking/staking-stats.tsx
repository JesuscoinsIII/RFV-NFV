import { Card } from "@/components/ui/card";
import { Coins, Users, TreePine } from "lucide-react";

export function StakingStats() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Coins className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">1.2M RFV</p>
                <p className="text-sm text-muted-foreground">Total Staked</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">5,234</p>
                <p className="text-sm text-muted-foreground">Active Stakers</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <TreePine className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">15.4%</p>
                <p className="text-sm text-muted-foreground">APY</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}