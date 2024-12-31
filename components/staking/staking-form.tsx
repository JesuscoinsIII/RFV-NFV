"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StakingForm() {
  const [amount, setAmount] = useState("");

  return (
    <section className="py-12">
      <div className="container max-w-lg">
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stake-amount">Stake Amount</Label>
              <Input
                id="stake-amount"
                placeholder="Enter RFV amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Estimated Annual Rewards: {amount ? `${(Number(amount) * 0.154).toFixed(2)} RFV` : '0 RFV'}
              </p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Stake Tokens
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}