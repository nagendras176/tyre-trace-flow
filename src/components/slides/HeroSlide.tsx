import heroImage from "@/assets/hero-tyre-forest.jpg";

export const HeroSlide = () => {
  return (
    <div className="relative w-full h-full min-h-[560px] md:min-h-[640px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tyre texture merging with forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-8 py-12 md:py-0 text-center z-10">
        <div className="max-w-5xl space-y-5 sm:space-y-6 animate-slide-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
            <span className="text-gradient">Deforestation-Free Tyres:</span>
            <br />
            <span className="text-primary-foreground">The EUDR Journey</span>
            <br />
            <span className="text-accent">with TraceX</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Empowering exporters to digitize, verify, and prove deforestation-free sourcing.
          </p>

          {/* Animated Glow Line */}
          <div className="w-64 h-1 mx-auto gradient-primary rounded-full animate-pulse-glow" />

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Transform complex EUDR compliance into an automated, transparent workflow
          </p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </div>
  );
};
