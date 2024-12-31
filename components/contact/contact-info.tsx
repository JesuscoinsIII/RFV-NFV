import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-indigo-600" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-muted-foreground">support@rfv.example.com</p>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-indigo-600" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-indigo-600" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted-foreground">
              123 Eco Street
              <br />
              Sustainable City, ST 12345
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}