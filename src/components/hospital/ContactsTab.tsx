import { Button } from "@/components/ui/button";

export function ContactsTab({ mockDonors }: any) {
  return (
    <div className="bg-card rounded-xl border border-border divide-y divide-border">
      <div className="p-4 font-semibold">Contacts récents</div>
      {mockDonors.slice(0, 3).map((d: any, i: number) => (
        <div key={i} className="p-4 flex items-center justify-between">
          <div>
            <div className="font-medium">{d.name}</div>
            <div className="text-sm text-muted-foreground">{d.blood} • Contacté le {["01/04/2026", "28/03/2026", "25/03/2026"][i]}</div>
          </div>
          <Button variant="outline" size="sm">Recontacter</Button>
        </div>
      ))}
    </div>
  );
}
