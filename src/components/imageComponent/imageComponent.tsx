import Image, { ImageProps as NextImageProps } from "next/image";

interface ImageComponentProps extends NextImageProps {
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ alt, ...rest }) => {
  return <Image className="object-cover w-full h-full" alt={alt} {...rest} />;
};

export default ImageComponent;
