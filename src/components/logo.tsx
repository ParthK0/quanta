import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/logo.png"
        alt="Quanta Logo"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
}
