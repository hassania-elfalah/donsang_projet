import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, Phone, Mail } from "lucide-react";

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

export const mockDonors = [
  { name: "Ahmed Bouzid", age: 28, blood: "O+", city: "Casablanca", distance: "2.3 km", phone: "+212 600 111 222", verified: true },
  { name: "Fatima Zahra", age: 35, blood: "O+", city: "Casablanca", distance: "4.1 km", phone: "+212 600 333 444", verified: true },
  { name: "Youssef Amrani", age: 42, blood: "O+", city: "Mohammedia", distance: "12 km", phone: "+212 600 555 666", verified: false },
  { name: "Salma Idrissi", age: 24, blood: "O+", city: "Casablanca", distance: "5.8 km", phone: "+212 600 777 888", verified: true },
  { name: "Karim Tazi", age: 31, blood: "O+", city: "Casablanca", distance: "8.2 km", phone: "+212 600 999 000", verified: true },
];

export function SearchTab({ selectedBlood, setSelectedBlood, city, setCity }: any) {
  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Recherche de donneurs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Groupe sanguin</label>
            <select
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={selectedBlood}
              onChange={(e) => setSelectedBlood(e.target.value)}
            >
              {bloodGroups.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Ville</label>
            <Input className="mt-1" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Distance max</label>
            <select className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>5 km</option>
              <option>10 km</option>
              <option defaultValue="20 km">20 km</option>
              <option>50 km</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button variant="hero" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">
            {mockDonors.length} donneurs {selectedBlood} trouvés
          </h3>
          <span className="text-sm text-muted-foreground">Triés par distance</span>
        </div>
        <div className="space-y-3">
          {mockDonors.map((donor, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-lg">
                  {donor.blood}
                </div>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {donor.name}
                    {donor.verified && (
                      <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">Vérifié</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-3 mt-1">
                    <span>{donor.age} ans</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {donor.city} • {donor.distance}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="hero" size="sm">
                  <Phone className="h-4 w-4 mr-1" />
                  Contacter
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
