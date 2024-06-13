"use client";

import Link from "next/link";

const links = [
  { name: "Basic Info", url: "/info" },
  { name: "Skills", url: "/info/skills" },
  { name: "Projects", url: "/info/projects" },
];

export default function InfoSideNav() {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className={`btn join-item font-semibold hover:app-bg-primary-dark app-bg-primary text-white`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
