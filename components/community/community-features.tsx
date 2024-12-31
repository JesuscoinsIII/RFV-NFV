import { Card } from "@/components/ui/card";
import { Vote, MessageSquare, FileText } from "lucide-react";

export function CommunityFeatures() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <Vote className="mb-4 h-8 w-8 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">Governance</h3>
            <p className="text-muted-foreground">
              Participate in platform decisions and vote on proposals
            </p>
          </Card>
          <Card className="p-6">
            <MessageSquare className="mb-4 h-8 w-8 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">Forums</h3>
            <p className="text-muted-foreground">
              Engage in discussions with other community members
            </p>
          </Card>
          <Card className="p-6">
            <FileText className="mb-4 h-8 w-8 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold">Proposals</h3>
            <p className="text-muted-foreground">
              Submit and review community improvement proposals
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}