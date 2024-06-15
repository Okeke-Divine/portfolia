import Link from "next/link";

export const metadata = {
  title: "404 Not Found",
};
const NotFound = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div>
          <div className="font-bold text-4xl text-center">
            We've lost this page
          </div>
          <p className="text-center">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center mt-2">
            <Link href=".." className="btn btn-ghost">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
