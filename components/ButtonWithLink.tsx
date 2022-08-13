import Link from "next/link";

interface IProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export const ButtonWithLink = ({ text, href, onClick }: IProps) => {
  return (
    <Link href={href}>
      <button className="bg-black text-white py-2 px-4 rounded-md my-4">
        {text}
      </button>
    </Link>
  );
};
