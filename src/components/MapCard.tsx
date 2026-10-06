"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import EveImage from "@/components/EveImage";
import ConfirmChip from "@/components/ConfirmChip";
import { resolveConfirm } from "@/lib/confirm";
import { site } from "@/lib/site-config";

/*
 * Contact photo card with a "Show map" click-to-load overlay: the map iframe
 * only mounts after an explicit click (consent pattern, Part 4). While the
 * maps URL is unconfirmed the button renders a CONFIRM chip.
 */
export default function MapCard({
  src,
  sizes = "(max-width: 900px) 100vw, 480px",
}: {
  src: string;
  sizes?: string;
}) {
  const [showMap, setShowMap] = useState(false);
  const maps = resolveConfirm<string>(site.mapsUrl);

  return (
    <div className="map-card">
      {showMap && maps ? (
        <iframe
          title={`Map to ${site.name}`}
          src={maps}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          <EveImage src={src} sizes={sizes} />
          {maps ? (
            <button type="button" className="map-btn" onClick={() => setShowMap(true)}>
              <MapPin size={16} strokeWidth={1.75} aria-hidden /> Show map
            </button>
          ) : (
            <ConfirmChip note="Google Maps link" />
          )}
        </>
      )}
    </div>
  );
}
