import Link from "next/link";

interface LinkComponentProps {
  title: string;
  href: string;
  text: string;
  className: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  title,
  href,
  text,
  className,
}) => {
  return (
    <div className="text-white mt-6">
      {title}
      <Link href={href}>
        <span
          className={className || "no-underline border-b border-blue text-blue"}
        >
          {text}
        </span>
      </Link>
      .
    </div>
  );
};

export default LinkComponent;
