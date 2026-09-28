import logo from "@/assets/logo.webp";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/logo2.png"
      alt="Heaven Homes & Realty"
      className={cn("h-11 w-auto object-contain sm:h-12", className)}
      width={1250}
      height={1250}
    />
  );
}
