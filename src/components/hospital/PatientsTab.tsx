import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, FileText, Edit } from "lucide-react";

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

const mockPatients = [
  { id: "P001", name: "Ahmed Bouzid", age: 45, blood: "A+", date: "12/04/2026", hasDossier: true },
  { id: "P002", name: "Sara Alami", age: 32, blood: "O−", date: "10/04/2026", hasDossier: false },
  { id: "P003", name: "Mohamed Rami", age: 58, blood: "B+", date: "09/04/2026", hasDossier: true },
];

export function PatientsTab({ showAddPatient, setShowAddPatient }: any) {
  const [showOtherDisease, setShowOtherDisease] = useState(false);
  return (
    <div className="space-y-6 animate-reveal">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">Dossiers Patients</h3>
        <Button variant="hero" size="sm" onClick={() => setShowAddPatient(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Patient
        </Button>
      </div>

      {showAddPatient && (
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <h4 className="font-semibold mb-4">Ajouter un nouveau patient</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm text-muted-foreground">Nom complet</label>
              <Input placeholder="Nom du patient" className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">CIN / ID</label>
              <Input placeholder="Numéro d'identité" className="mt-1" />
            </div>
             <div>
              <label className="text-sm text-muted-foreground">Date de naissance</label>
              <Input placeholder="Date de naissance" className="mt-1" />
            </div>
             <div>
              <label className="text-sm text-muted-foreground">Adresse</label>
              <Input placeholder="Adresse" className="mt-1" />
            </div>
             <div>
              <label className="text-sm text-muted-foreground">Poids</label>
              <Input placeholder="Poids" className="mt-1" />
            </div>
             <div>
              <label className="text-sm text-muted-foreground">Taille</label>
              <Input placeholder="Taille" className="mt-1" />
            </div>

             <div className="md:col-span-3">
              <label className="text-sm font-semibold text-muted-foreground mb-3 block">Maladies chroniques</label>
              <div className="flex flex-wrap gap-5 mb-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" /> Diabète 
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" /> Maladie cardiaque 
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" /> Hypertension
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" /> Asthme
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                    checked={showOtherDisease}
                    onChange={(e) => setShowOtherDisease(e.target.checked)}
                  /> 
                  Autre
                </label>
              </div>
              {showOtherDisease && (
                <div className="mt-3 animate-reveal">
                  <textarea 
                    placeholder="Veuillez préciser la ou les maladies ici..." 
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    rows={2} 
                  />
                </div>
              )}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Groupe sanguin</label>
              <select className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Sélectionner</option>
                {bloodGroups.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowAddPatient(false)}>Annuler</Button>
            <Button variant="hero" size="sm" onClick={() => setShowAddPatient(false)}>Créer le dossier</Button>
          </div>
        </div>
      )}

      <div className="bg-card rounded-xl border border-border divide-y divide-border shadow-sm">
        <div className="grid grid-cols-12 gap-4 p-4 font-semibold bg-muted/30 rounded-t-xl text-sm">
          <div className="col-span-2">ID</div>
          <div className="col-span-3">Nom Patient</div>
          <div className="col-span-2">Groupe</div>
          <div className="col-span-2">Date d'admission</div>
          <div className="col-span-3 text-right">Actions</div>
        </div>
        {mockPatients.map((p) => (
          <div key={p.id} className="grid grid-cols-12 gap-4 p-4 items-center text-sm hover:bg-muted/50 transition-colors">
            <div className="col-span-2 font-mono text-muted-foreground">{p.id}</div>
            <div className="col-span-3 font-medium">{p.name}</div>
            <div className="col-span-2">
              <span className="bg-accent text-primary px-3 py-1 rounded-full font-bold text-xs shadow-sm">
                {p.blood}
              </span>
            </div>
            <div className="col-span-2 text-muted-foreground">{p.date}</div>
            <div className="col-span-3 flex justify-end gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <FileText className="h-3.5 w-3.5 mr-1.5" />
                {p.hasDossier ? "Voir Dossier" : "Créer Dossier"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
