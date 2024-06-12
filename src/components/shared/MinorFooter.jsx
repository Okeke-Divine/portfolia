import Link from "next/link";

const MinorFooter = () => {
  return (
    <>
      <div className="footer p-5 md:p-10 bg-base-300">
        <div className="w-full">
          <div className="w-full text-center text-[18px] font-semibold">
            A product of{" "}
            <Link href={"#"} className="app-text-primary font-bold">
              Skiyen
            </Link>
          </div>
          <div className="w-full text-center  text-[18px] font-semibold">
            Built by{" "}
            <Link
              href={""}
              target="_blank"
              className="app-text-primary font-bold"
            >
              Dev Divine
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinorFooter;
