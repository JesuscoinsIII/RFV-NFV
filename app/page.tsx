import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { ArrowRight, Leaf, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                Empowering Regenerative Finance for a Sustainable Future
              </h1>
              <p className="mb-8 text-xl">
                Join the revolution in sustainable finance and eco-tourism
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Core Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                    <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sustainable Staking</h3>
                <p className="text-muted-foreground">
                  Stake RFV tokens to earn rewards while supporting eco-friendly initiatives
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Built on blockchain technology ensuring transparency and security
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Community Driven</h3>
                <p className="text-muted-foreground">
                  Join a community of environmentally conscious investors
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}