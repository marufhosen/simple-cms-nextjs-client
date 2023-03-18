import Image from "next/image";

const CustomImage = ({ src, className, alt }) => {
  return (
    <Image src={src} height={200} width={200} className={className} alt={alt} />
  );
};

export default CustomImage;
