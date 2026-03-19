import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Have questions about adoption? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Contact Information</h2>
            {[
              { icon: Mail, label: "hello@pawpromise.com" },
              { icon: Phone, label: "+1 (555) 123-4567" },
              { icon: MapPin, label: "123 Pet Lane, Animal City, AC 12345" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <p className="font-display text-2xl font-bold text-primary">Thank you! 🐾</p>
                <p className="text-muted-foreground mt-2">We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Name</label>
                  <input required className="w-full bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
                  <input required type="email" className="w-full bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Message</label>
                  <textarea required rows={4} className="w-full bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <Button type="submit" className="w-full font-display font-semibold">Send Message 🐾</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
