import { BarChart3, FileCheck, Download, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import dashboardImage from "@/assets/audit-dashboard.jpg";

export const AuditDashboardSlide = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-tr from-secondary via-tracex-gray to-primary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 gradient-tech" />

      <div className="relative h-full flex items-center justify-center px-8 md:px-16 z-10">
        <div className="max-w-7xl w-full space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold text-sm">Step 6: Transparency</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Audit-Ready<br />
              <span className="text-gradient">Dashboard</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Centralize traceability, supplier profiles, and DDS data — exportable, compliant, and transparent year-round.
            </p>
          </div>

          {/* Dashboard View */}
          <div className="relative animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-2xl overflow-hidden shadow-glow border border-primary/20">
              <img
                src={dashboardImage}
                alt="Audit-ready compliance dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Key Metrics Overlays */}
            <div className="absolute -top-6 -left-6 p-6 rounded-2xl bg-primary shadow-glow border border-primary/30 animate-pulse-glow">
              <div className="text-sm text-primary-foreground/80 font-medium">Deforestation Risk</div>
              <div className="text-4xl font-bold text-primary-foreground">0<span className="text-2xl">%</span></div>
            </div>

            <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-accent shadow-accent border border-accent/30 animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
              <div className="text-sm text-accent-foreground/80 font-medium">Suppliers Verified</div>
              <div className="text-4xl font-bold text-accent-foreground">100<span className="text-2xl">%</span></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Real-Time Analytics</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Track compliance metrics across all supply chain tiers
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-smooth group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <FileCheck className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-card-foreground">Document Management</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Centralized DDS, certifications, and audit trails
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Export Ready</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                One-click reports for auditors and regulators
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-accent transition-smooth group"
            >
              Experience the TraceX Platform
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
    </div>
  );
};
