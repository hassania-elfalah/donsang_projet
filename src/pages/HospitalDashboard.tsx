import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart, Search, MapPin, Phone, Mail, Filter,
  Users, Droplets, Activity, Building2, LogOut, Bell, BarChart3,
  Plus, Edit, FileText, AlertTriangle
} from "lucide-react";

import { PatientsTab } from "@/components/hospital/PatientsTab";
import { SearchTab, mockDonors } from "@/components/hospital/SearchTab";
import { StatsTab } from "@/components/hospital/StatsTab";
import { ContactsTab } from "@/components/hospital/ContactsTab";
import { AlertsTab } from "@/components/hospital/AlertsTab";

const stats = [
  { label: "Donneurs dans la région", value: "1,247", icon: Users, color: "text-primary" },
  { label: "Recherches ce mois", value: "38", icon: Search, color: "text-info" },
  { label: "Contacts établis", value: "156", icon: Phone, color: "text-success" },
  { label: "Groupes disponibles", value: "8/8", icon: Droplets, color: "text-warning" },
];

const tabs = [
  { id: "patients", label: "Gestion Patients", icon: Users },
  { id: "search", label: "Recherche donneurs", icon: Search },
  { id: "stats", label: "Statistiques", icon: BarChart3 },
  { id: "contacts", label: "Contacts récents", icon: Phone },
  { id: "alerts", label: "Alertes urgence", icon: Bell },
];

export default function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState("patients");
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showNewAlert, setShowNewAlert] = useState(false);
  const [selectedBlood, setSelectedBlood] = useState("O+");
  const [city, setCity] = useState("Casablanca");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top bar */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span>Sang<span className="text-primary">Vital</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">CHU Casablanca</span>
            <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center text-background text-sm font-bold">
              <Building2 className="h-4 w-4" />
            </div>
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="bg-card rounded-xl border border-border p-4 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          {activeTab === "patients" && <PatientsTab showAddPatient={showAddPatient} setShowAddPatient={setShowAddPatient} />}
          {activeTab === "search" && <SearchTab selectedBlood={selectedBlood} setSelectedBlood={setSelectedBlood} city={city} setCity={setCity} />}
          {activeTab === "stats" && <StatsTab />}
          {activeTab === "contacts" && <ContactsTab mockDonors={mockDonors} />}
          {activeTab === "alerts" && <AlertsTab showNewAlert={showNewAlert} setShowNewAlert={setShowNewAlert} />}
        </main>
      </div>
    </div>
  );
}
