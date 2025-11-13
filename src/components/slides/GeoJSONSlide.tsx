import { useState } from "react";
import { MapPinned, CheckCircle2, Smartphone } from "lucide-react";
import geoJsonImage from "@/assets/geojson-validation.jpg";

export const GeoJSONSlide = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full bg-gradient-to-tr from-tracex-gray via-secondary to-tracex-gray overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative h-full flex items-center justify-center px-8 md:px-16 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left: Interactive Visualization */}
          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Step 3: Validation</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-primary/20 transition-smooth group-hover:scale-105 group-hover:shadow-accent">
              <img
                src={geoJsonImage}
                alt="GeoJSON plot validation"
                className={`w-full h-auto transition-smooth ${isHovered ? "opacity-100" : "opacity-90"}`}
              />
              
              {/* Interactive Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent transition-smooth ${isHovered ? "opacity-100" : "opacity-0"}`}>
                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <div className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle2 className="h-8 w-8 text-accent animate-pulse-glow" />
                    <span className="text-xl font-bold">Validation Complete</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Geometry verified. DDS-ready.</p>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 p-4 rounded-full bg-accent shadow-accent animate-float">
              <Smartphone className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              GeoJSON Capture &<br />
              <span className="text-gradient">Instant Validation</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Capture precise polygon boundaries via mobile and validate geometry instantly to prevent DDS rejection.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPinned className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2">Mobile Mapping</h3>
                    <p className="text-sm text-muted-foreground">
                      Field workers capture farm boundaries with GPS precision directly from their mobile devices
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2">Real-Time Validation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated geometry checks ensure EUDR compliance before submission
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Hint */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Hover over the image to see validation results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
