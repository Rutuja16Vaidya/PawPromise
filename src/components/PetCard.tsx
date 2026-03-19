import { Button } from "@/components/ui/button";

interface PetCardProps {
  name: string;
  breed: string;
  image: string;
  species: string;
}

const PetCard = ({ name, breed, image, species }: PetCardProps) => (
  <div className="bg-card border-2 border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="aspect-square bg-secondary flex items-center justify-center p-4">
      <img src={image} alt={name} className="h-full w-full object-contain" />
    </div>
    <div className="p-4 flex flex-col gap-1 flex-1">
      <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
      <p className="text-muted-foreground text-sm">Breed: {breed}</p>
      <p className="text-muted-foreground text-sm capitalize">Species: {species}</p>
      <Button className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold">
        Adopt Me 🐾
      </Button>
    </div>
  </div>
);

export default PetCard;
