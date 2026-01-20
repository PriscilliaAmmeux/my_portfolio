import Image from "next/image";

export default function Stickers() {
  return (
    <Image
      src="/Stickers.webp"
      alt="Ensemble de stickers Pixelia&Co"
      className="mx-auto mt-10 animate-wave-gentle"
      width={500}
      height={500}
    />
  );
}
