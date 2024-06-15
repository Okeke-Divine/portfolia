"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ComingSoonComponent from "../shared/ComingSoonComponent";

const links = [
  { name: "Basic Info", url: "/info", shipped: true },
  { name: "Social", url: "/info/social", shipped: true },
  { name: "Skills", url: "/info/skills", shipped: true },
  { name: "Projects", url: "/info/projects", shipped: true },
  { name: "Experience", url: "/info/experience", shipped: false },
  { name: "Education", url: "/info/education", shipped: false },
  { name: "Language", url: "/info/language", shipped: false },
  { name: "Certificates", url: "/info/certificates", shipped: false },
  { name: "Awards", url: "/info/awards", shipped: false },
];

export default function InfoSideNav() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          disabled={!link.shipped}
          href={link.shipped ? link.url : "#"}
          className={`btn join-item font-semibold hover:app-bg-primary-dark hover:text-white duration-300 ${
            pathname == link.url ? "app-bg-primary text-white" : "text-black"
          }`}
        >
          {link.name}
          {!link.shipped ? (
            <>
              <ComingSoonComponent />
            </>
          ) : (
            ""
          )}
        </Link>
      ))}
    </>
  );
}
