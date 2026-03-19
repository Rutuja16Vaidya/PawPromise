import { Heart, Shield, Users } from "lucide-react";
import heroPets from "@/assets/hero-pets.png";

const values = [
  { icon: Heart, title: "Compassion", desc: "Every animal deserves love and care. We treat each pet as family." },
  { icon: Shield, title: "Trust", desc: "We ensure safe, verified adoptions with thorough screening processes." },
  { icon: Users, title: "Community", desc: "Building a network of pet lovers who support each other." },
];

const About = () => (
  <div>
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">About PawPromise</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PawPromise is a pet adoption platform dedicated to connecting loving families with animals in need. 
            Founded with a simple mission — every pet deserves a forever home — we work with shelters and rescue 
            organizations to make the adoption process joyful and seamless.
          </p>
        </div>
        <img src={heroPets} alt="Our pets" className="w-56 md:w-72" />
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <h2 className="font-display text-3xl font-bold text-center text-foreground mb-10">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div key={v.title} className="bg-card border border-border rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <v.icon className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
