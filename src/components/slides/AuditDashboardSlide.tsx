import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
const dashboardImage = "/Dashboard7thSlide.png";

export const AuditDashboardSlide = () => {
  return (
    <div className="relative w-full h-full min-h-[560px] md:min-h-[640px] bg-gradient-to-tr from-secondary via-tracex-gray to-primary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 gradient-tech" />

      <div className="relative h-full flex items-start md:items-center justify-center px-4 sm:px-8 lg:px-16 py-10 md:py-6 xl:py-0 z-10">
        <div className="max-w-4xl xl:max-w-5xl w-full space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold text-sm">Step 6: Transparency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
              Audit-Ready<br />
              <span className="text-gradient">Dashboard</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Centralize traceability, supplier profiles, and DDS data — exportable, compliant, and transparent year-round.
            </p>
          </div>

          {/* Dashboard View */}
          <div className="relative animate-float w-full max-w-4xl xl:max-w-[950px] mx-auto" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-2xl overflow-hidden shadow-glow border border-primary/20 bg-secondary/50">
              <img
                src={dashboardImage}
                alt="Audit-ready compliance dashboard"
                className="object-contain"
                loading="lazy"
              />
            </div>

            {/* Key Metrics Overlays */}
            <div className="absolute -top-6 -left-6 hidden sm:flex flex-col gap-1 p-4 rounded-2xl bg-primary shadow-glow border border-primary/30 animate-pulse-glow text-center min-w-[120px]">
              <div className="text-sm text-primary-foreground/80 font-medium">Deforestation Risk</div>
              <div className="text-3xl font-bold text-primary-foreground">0<span className="text-xl">%</span></div>
            </div>

            <div className="absolute -top-6 -right-6 hidden sm:flex flex-col gap-1 p-4 rounded-2xl bg-accent shadow-accent border border-accent/30 animate-pulse-glow text-center" style={{ animationDelay: "0.5s" }}>
              <div className="text-sm text-accent-foreground/80 font-medium whitespace-nowrap">Suppliers Verified</div>
              <div className="text-3xl font-bold text-accent-foreground">100<span className="text-xl">%</span></div>
            </div>
          </div>

          
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
    </div>
  );
};
