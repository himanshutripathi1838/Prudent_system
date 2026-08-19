import { useState } from "react";
import logoAsset from "@/assets/prudent-logo.png.asset.json";
import { Cpu } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <span className="flex items-center gap-2.5">
      {!imgError ? (
        <img
          src="/prudent-logo.png"
          alt="Prudent Systems logo"
          className="h-9 w-auto object-contain"
          width={36}
          height={36}
          onError={(e) => {
            if (e.currentTarget.src.includes("prudent-logo.png")) {
              e.currentTarget.src = logoAsset.url;
            } else {
              setImgError(true);
            }
          }}
        />
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
          <Cpu className="h-5 w-5" />
        </div>
      )}
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-tight">Prudent Systems</span>
        {!compact ? (
          <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
            IoT · AI/ML · Industry 4.0
          </span>
        ) : null}
      </span>
    </span>
  );
}
