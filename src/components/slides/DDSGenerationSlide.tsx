import { FileText, Upload, Database } from "lucide-react";
import ddsFlowImage from "@/assets/dds-flow.jpg";

export const DDSGenerationSlide = () => {
  return (
    <div className="relative w-full h-full min-h-[560px] md:min-h-[640px] bg-gradient-to-bl from-tracex-gray via-secondary to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative h-full flex items-start md:items-center justify-center px-4 sm:px-8 lg:px-16 py-10 md:py-6 xl:py-0 z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center max-w-6xl xl:max-w-7xl w-full">
          {/* Left: Flow Visualization */}
          <div className="relative order-2 md:order-1 w-full max-w-3xl xl:max-w-4xl mx-auto md:mx-0">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Step 5: Documentation</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-primary/20 animate-float bg-secondary/40">
              <img
                src={ddsFlowImage}
                alt="DDS generation and integration flow"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Flow Indicators */}
            <div className="absolute -right-6 top-1/4 hidden lg:flex flex-col gap-3">
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
          <div className="space-y-5 order-1 md:order-2 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
              Automated DDS Generation<br />
              <span className="text-gradient">ERP Sync</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Generate EUDR-compliant Due Diligence Statements (DDS) in one click — auto-upload to TRACES and integrate with internal ERP systems.
            </p>

            <div className="space-y-3 pt-3">
              <div className="p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">One-Click DDS</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Automatically generate compliant statements from verified data
                    </p>
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      <div className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium border border-primary/20">
                        EUDR Compliant
                      </div>
                      <div className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-medium border border-accent/20">
                        Auto-Generated
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-smooth group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                    <Upload className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">TRACES Integration</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Seamless upload to EU TRACES portal with validation checks
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">ERP Synchronization</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
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
