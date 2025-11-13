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

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

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
    <div className="relative w-full h-screen overflow-hidden bg-secondary">
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

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-smooth ${
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 text-sm font-medium text-muted-foreground">
        <span className="text-primary text-2xl font-bold">{selectedIndex + 1}</span>
        <span className="mx-1">/</span>
        <span>{scrollSnaps.length}</span>
      </div>
    </div>
  );
};
