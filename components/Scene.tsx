import Image from "next/image";

export function Scene({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`scene ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 980px) 100vw, 80vw"
        priority={priority}
      />
    </figure>
  );
}
