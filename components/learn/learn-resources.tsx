import { Card } from "@/components/ui/card";
import { BookOpen, Video, FileText } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of RFV tokens and staking",
    href: "/learn/getting-started",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step guides on using the platform",
    href: "/learn/tutorials",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed technical documentation",
    href: "/learn/docs",
  },
];

export function LearnResources() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.href}>
              <Card className="h-full p-6 transition-colors hover:bg-accent">
                <resource.icon className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">{resource.title}</h3>
                <p className="text-muted-foreground">{resource.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}