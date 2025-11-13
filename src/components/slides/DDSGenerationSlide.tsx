import { FileText, Upload, Database } from "lucide-react";
import ddsFlowImage from "@/assets/dds-flow.jpg";

export const DDSGenerationSlide = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-bl from-tracex-gray via-secondary to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative h-full flex items-center justify-center px-8 md:px-16 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left: Flow Visualization */}
          <div className="relative order-2 md:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Step 5: Documentation</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-primary/20 animate-float">
              <img
                src={ddsFlowImage}
                alt="DDS generation and integration flow"
                className="w-full h-auto"
              />
            </div>

            {/* Flow Indicators */}
            <div className="absolute -right-6 top-1/4 flex flex-col gap-3">
              <div className="p-3 rounded-full bg-primary shadow-glow animate-pulse-glow">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent mx-auto" />
              <div className="p-3 rounded-full bg-accent shadow-accent animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
                <Upload className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary mx-auto" />
              <div className="p-3 rounded-full bg-primary shadow-glow animate-pulse-glow" style={{ animationDelay: "1s" }}>
                <Database className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 md:order-2 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Automated DDS<br />
              Generation +<br />
              <span className="text-gradient">ERP Sync</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Generate EUDR-compliant Due Diligence Statements (DDS) in one click — auto-upload to TRACES and integrate with internal ERP systems.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2">One-Click DDS</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically generate compliant statements from verified data
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        EUDR Compliant
                      </div>
                      <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                        Auto-Generated
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                    <Upload className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2">TRACES Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless upload to EU TRACES portal with validation checks
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2">ERP Synchronization</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time data sync with your existing enterprise systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
