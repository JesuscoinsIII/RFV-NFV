import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Eco Sprinter 2024",
    image: "https://images.unsplash.com/photo-1624885754728-80973f29b6da",
    description: "Fully equipped sustainable van with solar panels",
    pricePerDay: "150 RFV",
  },
  {
    id: 2,
    name: "Green Explorer",
    image: "https://images.unsplash.com/photo-1626056087728-05c3d180911a",
    description: "Off-grid capable with water recycling system",
    pricePerDay: "180 RFV",
  },
];

export function VehicleList() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{vehicle.name}</h3>
                <p className="mb-4 text-muted-foreground">{vehicle.description}</p>
                <p className="mb-4 font-medium">{vehicle.pricePerDay} / day</p>
                <Button className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}