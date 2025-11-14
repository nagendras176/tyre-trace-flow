import { MapPin, Users, FileCheck } from "lucide-react";

const supplierOnboardingImage = "/SupplierOnboarding123.png";

export const SupplierOnboardingSlide = () => {
  return (
    <div className="relative w-full h-full min-h-[560px] md:min-h-[640px] bg-gradient-to-br from-secondary via-secondary to-tracex-gray overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative h-full flex items-center justify-center px-4 sm:px-8 lg:px-16 py-10 md:py-6 xl:py-0 z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center max-w-6xl xl:max-w-7xl w-full">
          {/* Left: Content */}
          <div className="space-y-6 animate-slide-up text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Step 1: Onboarding</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
              Automated Supplier Onboarding
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Digitally onboard suppliers with GPS-verified plots, KYC documentation, and certification records — all in one platform.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">GPS-Verified Plots</h3>
                  <p className="text-sm text-muted-foreground">Precise geolocation mapping</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Digital Profiles</h3>
                  <p className="text-sm text-muted-foreground">Complete supplier information</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Auto Data Sync</h3>
                  <p className="text-sm text-muted-foreground">Real-time certification updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-float w-full max-w-4xl xl:max-w-5xl mx-auto md:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-glow border border-primary/20 aspect-[907/387] bg-secondary/50">
              <img
                src={supplierOnboardingImage}
                alt="Supplier onboarding dashboard"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
