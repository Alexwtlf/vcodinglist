import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function Logo({ size = 28, className, alt = "VcodingList", priority }: LogoProps) {
  return (
    <Image
      src="/vcodinglist-logo.svg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={["shrink-0", className].filter(Boolean).join(" ")}
    />
  );
}

