import { useState } from "react";
import { Search } from "lucide-react";
import PetCard from "@/components/PetCard";
import heroPets from "@/assets/hero-pets.png";
import cat1 from "@/assets/cat1.png";
import dog1 from "@/assets/dog1.png";
import cat2 from "@/assets/cat2.png";
import dog2 from "@/assets/dog2.png";

const pets = [
  { id: 1, name: "Whiskers", breed: "Orange Tabby", species: "cat", image: cat1 },
  { id: 2, name: "Buddy", breed: "Golden Retriever", species: "dog", image: dog1 },
  { id: 3, name: "Mittens", breed: "Tuxedo Cat", species: "cat", image: cat2 },
  { id: 4, name: "Snowball", breed: "Bichon Frise", species: "dog", image: dog2 },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("all");

  const filtered = pets.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpecies = species === "all" || p.species === species;
    return matchesSearch && matchesSpecies;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Find Your New<br />Best Friend
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto md:mx-0">
              Every pet deserves a loving home. Browse our adorable animals waiting to meet you!
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src={heroPets} alt="Cute dog and cat" className="w-64 md:w-80 animate-bounce-gentle" />
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-card rounded-lg shadow-lg p-4 flex flex-col sm:flex-row gap-3 items-center border border-border">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 w-full bg-secondary rounded-md px-4 py-2 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Species</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
          </select>
          <button className="bg-primary text-primary-foreground rounded-md px-5 py-2 flex items-center gap-2 font-display font-semibold hover:bg-primary/90 transition-colors">
            <Search className="h-4 w-4" /> Search
          </button>
        </div>
      </section>

      {/* Pet grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((pet, i) => (
            <div key={pet.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <PetCard {...pet} />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8 font-display text-xl">No pets found 😿</p>
        )}
      </section>
    </div>
  );
};

export default Index;
