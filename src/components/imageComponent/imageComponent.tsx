import Image, { ImageProps as NextImageProps } from "next/image";

interface ImageComponentProps extends NextImageProps {
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ alt, ...rest }) => {
  return (
    <Image
      style={{ height: "90%" }}
      className="object-cover w-full rounded-2xl mb-10"
      alt={alt}
      {...rest}
    />
  );
};

export default ImageComponent;
