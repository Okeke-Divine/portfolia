import { getCurrentSession } from "@/utils/session";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Builder"
}

const PortfolioBuilder = async () => {
  const session = await getCurrentSession();
  return (
    <>
    test
    </>
  );
};

export default PortfolioBuilder;
