import { Brain, BarChart3, Shield } from "lucide-react";
const riskImage = "/Risk%20Scoring%20Slide%203%20Email.png";

export const RiskScoringSlide = () => {
  return (
    <div className="relative w-full h-full min-h-[560px] md:min-h-[640px] bg-gradient-to-bl from-secondary via-tracex-gray to-secondary overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 gradient-tech" />

      <div className="relative h-full flex items-start md:items-center justify-center px-4 sm:px-8 lg:px-16 py-10 md:py-6 xl:py-0 z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center max-w-6xl xl:max-w-7xl w-full">
          {/* Left: Risk Visualization */}
          <div className="relative order-2 md:order-1 animate-float w-full max-w-3xl xl:max-w-4xl mx-auto md:mx-0" style={{ animationDelay: "0.5s" }}>
            <div className="rounded-2xl overflow-hidden shadow-accent border border-accent/20 bg-secondary/50">
              <img
                src={riskImage}
                alt="AI risk scoring visualization"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Risk Score Badge */}
            <div className="absolute -top-6 -left-6 hidden sm:block px-6 py-4 rounded-2xl bg-primary shadow-glow border border-primary/30">
              <div className="text-sm text-primary-foreground/80 font-medium">Risk Score</div>
              <div className="text-3xl font-bold text-primary-foreground">1.60<span className="text-xl"></span></div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-32 sm:h-32 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" />
          </div>

          {/* Right: Content */}
          <div className="space-y-5 order-1 md:order-2 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold text-sm">Step 2: Risk Analysis</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
              AI-Driven Risk Scoring
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leverage smart SAQs and AI-powered risk scoring aligned to EUDR standards — track compliance in real time.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Smart Questionnaires</h3>
                  <p className="text-sm text-muted-foreground">Automated EUDR-aligned assessments</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Live Compliance Tracking</h3>
                  <p className="text-sm text-muted-foreground">Real-time monitoring dashboard</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Risk Mitigation</h3>
                  <p className="text-sm text-muted-foreground">Proactive alerts and recommendations</p>
                </div>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Compliance Level</span>
                <span className="text-primary font-semibold">High Risk: 0%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-[98%] gradient-primary rounded-full animate-shimmer" 
                     style={{ backgroundSize: "200% 100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
