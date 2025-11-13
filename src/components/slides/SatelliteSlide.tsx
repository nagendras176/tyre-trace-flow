import { Satellite, Layers, AlertTriangle } from "lucide-react";
import satelliteImage from "@/assets/satellite-analysis.jpg";

export const SatelliteSlide = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-secondary via-tracex-gray to-secondary overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 gradient-tech" />

      <div className="relative h-full flex items-center justify-center px-8 md:px-16 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left: Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold text-sm">Step 4: Monitoring</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Satellite-Backed<br />
              <span className="text-gradient">Geolocation</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Automatically detect deforestation or land-use change using JRC & Hansen satellite datasets, ensuring zero-risk sourcing.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <Satellite className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground">Multi-Source Data</h3>
                  <p className="text-sm text-muted-foreground">JRC & Hansen satellite integration</p>
                  <div className="mt-2 flex gap-2">
                    <span className="px-2 py-1 rounded text-xs bg-accent/10 text-accent border border-accent/20">JRC</span>
                    <span className="px-2 py-1 rounded text-xs bg-accent/10 text-accent border border-accent/20">Hansen</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground">AI Detection Layers</h3>
                  <p className="text-sm text-muted-foreground">Real-time forest cover analysis</p>
                  <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-smooth">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground">Change Detection</h3>
                  <p className="text-sm text-muted-foreground">Instant alerts for land-use changes</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary">0%</div>
                <div className="text-sm text-muted-foreground">Deforestation Detected</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Coverage Verified</div>
              </div>
            </div>
          </div>

          {/* Right: Satellite Visualization */}
          <div className="relative animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-2xl overflow-hidden shadow-accent border border-accent/20">
              <img
                src={satelliteImage}
                alt="Satellite analysis layers"
                className="w-full h-auto"
              />
            </div>

            {/* Zoom Indicator */}
            <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-secondary/90 backdrop-blur-sm border border-primary/20 shadow-glow">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">Multi-Layer View</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
