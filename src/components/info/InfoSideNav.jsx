"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Basic Info", url: "/info" },
  { name: "Skills", url: "/info/skills" },
  { name: "Projects", url: "/info/projects" },
];

export default function InfoSideNav() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className={`btn join-item font-semibold hover:app-bg-primary-dark hover:text-white duration-300 ${
            pathname == link.url ? "app-bg-primary text-white" : "text-black"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
