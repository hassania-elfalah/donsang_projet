export function StatsTab() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="font-semibold mb-6">Statistiques des donneurs par groupe sanguin</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { group: "O+", count: 423, pct: 34 },
          { group: "A+", count: 312, pct: 25 },
          { group: "B+", count: 187, pct: 15 },
          { group: "AB+", count: 98, pct: 8 },
          { group: "O−", count: 87, pct: 7 },
          { group: "A−", count: 62, pct: 5 },
          { group: "B−", count: 49, pct: 4 },
          { group: "AB−", count: 29, pct: 2 },
        ].map((item) => (
          <div key={item.group} className="text-center p-4 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-primary">{item.group}</div>
            <div className="text-lg font-semibold mt-1">{item.count}</div>
            <div className="text-xs text-muted-foreground">{item.pct}% du total</div>
            <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full hero-gradient rounded-full" style={{ width: `${item.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
