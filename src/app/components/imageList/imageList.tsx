import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  hideOnSmallScreen: boolean;
}

interface ImageListProps {
  images: ImageProps[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => (
  <>
    {images.map((image, index) => (
      <Image
        key={index}
        className={`${index % 2 === 0 ? "transform -rotate-6" : ""} pt-4 ${
          image.hideOnSmallScreen ? "hidden sm:block" : ""
        }`}
        src={image.src}
        alt={image.alt}
        width={200}
        height={37}
        priority
      />
    ))}
  </>
);

export default ImageList;
