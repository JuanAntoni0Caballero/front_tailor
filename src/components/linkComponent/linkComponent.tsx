import Link from "next/link";

interface LinkComponentProps {
  title: string;
  href: string;
  text: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ title, href, text }) => {
  return (
    <div className="text-white">
      {title}
      <Link href={href}>
        <span>{text}</span>
      </Link>
      .
    </div>
  );
};

export default LinkComponent;
