import Image from "next/image";

interface ImageProps {
  alt: string;
  src: string;
  width: number | string;
  height: number | string;
}
const ImageComponent: React.FC<ImageProps> = ({ alt, src, width, height }) => {
  return (
    <Image alt={alt} src={src} width={Number(width)} height={Number(height)} />
  );
};
export default ImageComponent;
