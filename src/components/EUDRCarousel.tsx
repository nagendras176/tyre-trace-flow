import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { HeroSlide } from "./slides/HeroSlide";
import { SupplierOnboardingSlide } from "./slides/SupplierOnboardingSlide";
import { RiskScoringSlide } from "./slides/RiskScoringSlide";
import { GeoJSONSlide } from "./slides/GeoJSONSlide";
import { SatelliteSlide } from "./slides/SatelliteSlide";
import { DDSGenerationSlide } from "./slides/DDSGenerationSlide";
import { AuditDashboardSlide } from "./slides/AuditDashboardSlide";

export const EUDRCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-screen min-h-[560px] md:min-h-[650px] overflow-y-auto md:overflow-hidden bg-secondary">
      {/* Carousel Container */}
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          <div className="flex-[0_0_100%] min-w-0">
            <HeroSlide />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <SupplierOnboardingSlide />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <RiskScoringSlide />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <GeoJSONSlide />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <SatelliteSlide />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <DDSGenerationSlide />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <AuditDashboardSlide />
          </div>
        </div>
      </div>

      {/* Side Navigation Controls */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-3 sm:left-4 md:left-6 top-auto md:top-1/2 bottom-6 md:bottom-auto -translate-y-0 md:-translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth z-20 shadow-glow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        className="absolute right-3 sm:right-4 md:right-6 top-auto md:top-1/2 bottom-6 md:bottom-auto -translate-y-0 md:-translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth z-20 shadow-glow"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 text-xs sm:text-sm font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/10">
        <span className="text-primary text-xl sm:text-2xl font-bold">{selectedIndex + 1}</span>
        <span className="mx-1">/</span>
        <span>{scrollSnaps.length}</span>
      </div>
    </div>
  );
};
