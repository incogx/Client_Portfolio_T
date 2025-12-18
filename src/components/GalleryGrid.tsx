// src/components/GalleryGrid.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryGridProps {
  images: string[];
  autoplayInterval?: number; // ms
}

export default function GalleryGrid({ images, autoplayInterval = 3000 }: GalleryGridProps) {
  const base = images || [];
  const n = base.length;
  if (n === 0) {
    return <div className="py-20 text-center text-slate-500">No images to display</div>;
  }

  // triple-clone for infinite feel
  const ext = [...base, ...base, ...base];
  const start = n;
  const [position, setPosition] = useState(start);
  const isDragging = useRef(false);
  const autoplayRef = useRef<number | null>(null);

  // measurement state
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [slideSize, setSlideSize] = useState({ width: 0, gap: 18 });
  const [measuring, setMeasuring] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // modal state for full-image view
  const [modalImage, setModalImage] = useState<string | null>(null);

  // measure slide width & gap
  useEffect(() => {
    const measure = () => {
      try {
        if (!trackRef.current) return;
        const children = Array.from(trackRef.current.children) as HTMLElement[];
        if (children.length < 2) return;
        const first = children[0].getBoundingClientRect();
        const second = children[1].getBoundingClientRect();
        const w = Math.round(first.width);
        const gap = Math.max(0, Math.round(second.left - first.left - w));
        setSlideSize({ width: w, gap });
        setMeasuring(false);
      } catch (e) {
        console.warn("GalleryGrid: measurement failed", e);
        setMeasuring(false);
      }
    };

    measure();
    const t = window.setTimeout(measure, 450);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [images]);

  // block body scroll while modal open
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalImage]);

  // resolve src
  const resolveSrc = (image: string) => {
    if (!image) return "/media/placeholder-image.png";
    if (/^(https?:)?\/\//i.test(image) || image.startsWith("/")) return encodeURI(image);
    return encodeURI(`/media/${image}`);
  };

  // navigation and snap-back to middle block
  const moveTo = (pos: number) => {
    setPosition(pos);
    window.setTimeout(() => {
      if (pos >= start + n) {
        const mapped = start + (pos - (start + n));
        setPosition(mapped);
      } else if (pos < start) {
        const mapped = start + ((pos - start + n) % n);
        setPosition(mapped);
      }
    }, 520);
  };
  const prev = () => moveTo(position - 1);
  const next = () => moveTo(position + 1);

  // autoplay (pause on drag or hover)
  useEffect(() => {
    if (n <= 1) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      if (!isDragging.current && !isHovered) next();
    }, autoplayInterval);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [position, slideSize.width, autoplayInterval, n, isHovered]);

  // keyboard nav + modal close (Esc)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, n]);

  // drag handlers
  const handleDragStart = () => {
    isDragging.current = true;
    setIsHovered(true);
  };
  const handleDragEnd = (_: any, info: PanInfo) => {
    isDragging.current = false;
    setIsHovered(false);
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;
    if (velocityX < -300 || offsetX < -80) {
      next();
      return;
    }
    if (velocityX > 300 || offsetX > 80) {
      prev();
      return;
    }
    moveTo(position);
  };

  // compute precise translate so focused item is centered
  const computeTranslate = () => {
    try {
      if (trackRef.current) {
        const container = trackRef.current.parentElement; // centered viewport container
        const slideEl = trackRef.current.querySelector<HTMLElement>(`[data-slide-index="${position}"]`);

        if (container && slideEl) {
          const containerRect = container.getBoundingClientRect();
          const trackRect = trackRef.current.getBoundingClientRect();
          const slideRect = slideEl.getBoundingClientRect();

          // slide center relative to track left
          const slideCenterRelToTrack = (slideRect.left - trackRect.left) + slideRect.width / 2;
          // container center relative to its left
          const containerCenter = containerRect.width / 2;

          // translate to align slide center to container center
          return containerCenter - slideCenterRelToTrack;
        }
      }
    } catch (e) {
      // ignore and fallback
    }

    // fallback: pixel math if measured
    if (slideSize.width > 0) {
      const step = slideSize.width + slideSize.gap;
      const containerWidth = trackRef.current?.parentElement?.getBoundingClientRect().width || window.innerWidth;
      const viewportCenterOffset = containerWidth / 2 - slideSize.width / 2;
      return -position * step + viewportCenterOffset;
    }

    // final fallback: safe vw-estimate
    const vwStepPercent = 12;
    const w = window.innerWidth;
    return -position * (w * (vwStepPercent / 100)) + (w / 2 - (w * (vwStepPercent / 100)) / 2);
  };

  const translateX = computeTranslate();

  // focus clicked ext index (map to nearest middle-block equivalent)
  const focusExtIndex = (extIndex: number) => {
    const rel = (extIndex % n + n) % n;
    const candidate = start + rel;
    const altA = candidate - n;
    const altB = candidate + n;
    const best = [altA, candidate, altB].reduce((p, c) => (Math.abs(c - position) < Math.abs(p - position) ? c : p), candidate);
    moveTo(best);
  };

  const visualDiff = (imgIndex: number) => {
    const focusBase = ((position % n) + n) % n;
    let diff = imgIndex - focusBase;
    if (diff > Math.floor(n / 2)) diff -= n;
    if (diff < -Math.floor(n / 2)) diff += n;
    return diff;
  };

  // modal open helpers
  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative">
          {/* arrows */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white/95 hover:bg-white shadow-md"
            style={{ transform: "translateY(-50%)" }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            aria-label="Next"
            onClick={next}
            className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white/95 hover:bg-white shadow-md"
            style={{ transform: "translateY(-50%)" }}
          >
            <ChevronRight size={18} />
          </button>

          {/* loader while measuring */}
          {measuring && (
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full border-4 border-white/30 border-t-white animate-spin" />
            </div>
          )}

          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ x: translateX as any }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex items-center gap-3 sm:gap-4 py-6 sm:py-8 px-2 sm:px-4 will-change-transform select-none"
            style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
          >
            {ext.map((img, i) => {
              const imageIndex = ((i % n) + n) % n;
              const diff = visualDiff(imageIndex);
              const abs = Math.abs(diff);
              const isCenter = diff === 0 && i >= start && i < start + n;
              const isNeighbor = abs === 1;

              // premium visuals
              const scale = isCenter ? 1.14 : isNeighbor ? 0.98 : 0.86;
              const opacity = isCenter ? 1 : isNeighbor ? 0.82 : 0.54;
              const rotate = diff * -3; // subtle tilt
              const zIndex = isCenter ? 50 : isNeighbor ? 40 : 30;

              const widthStyle = isCenter ? "clamp(240px,68vw,760px)" : isNeighbor ? "clamp(200px,52vw,460px)" : "clamp(160px,42vw,320px)";
              const heightStyle = isCenter ? "clamp(180px,50vw,480px)" : isNeighbor ? "clamp(150px,40vw,340px)" : "clamp(120px,32vw,260px)";

              const src = resolveSrc(img);

              return (
                <motion.div
                  key={`${img}-${i}`}
                  data-slide-index={i}
                  layout
                  initial={false}
                  animate={{ opacity, scale, rotate }}
                  transition={{ type: "spring", stiffness: 160, damping: 24 }}
                  style={{ zIndex, width: widthStyle, height: heightStyle }}
                  onClick={() => focusExtIndex(i)}
                  onDoubleClick={() => openModal(src)}
                  className="relative flex-shrink-0 cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-slate-100"
                >
                  <img
                    src={src}
                    alt={`Gallery ${imageIndex + 1}`}
                    className="w-full h-full object-cover object-center block"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/media/placeholder-image.png";
                      console.warn("GalleryGrid: image failed to load:", src);
                    }}
                  />

                  {/* subtle label */}
                  <div className="absolute left-3 bottom-3 bg-white/85 text-xs text-slate-700 px-2 py-1 rounded-md shadow-sm">
                    <span className="font-mono truncate max-w-[10rem] block">{`/media/${img}`}</span>
                  </div>

                  {/* hover play hint for accessibility */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {isCenter && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {base.map((_, i) => (
            <button
              key={i}
              onClick={() => moveTo(start + i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                ((position - start + n) % n) === i ? "bg-charcoal" : "bg-charcoal/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen modal for image */}
      {modalImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* modal card */}
          <motion.div
            initial={{ scale: 0.98, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            className="relative z-60 max-w-[92vw] max-h-[92vh] w-full mx-4 rounded-2xl overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close image"
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/90 hover:bg-white shadow"
            >
              <X size={18} />
            </button>

            <div className="w-full h-full flex items-center justify-center bg-[#f7f6f4] p-6">
              <img
                src={modalImage}
                alt="Full view"
                className="max-w-full max-h-[88vh] object-contain rounded-md"
                loading="eager"
              />
            </div>

            {/* caption row */}
            <div className="px-6 py-3 bg-white/90 border-t">
              <div className="text-xs text-slate-600 font-mono truncate">{modalImage}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
