import { SiteHeader } from "@/components/site-header";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <div className="container py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
    </div>
  );
}