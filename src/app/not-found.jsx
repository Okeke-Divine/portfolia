export const metadata = {
  title: "404 Not Found",
};
const NotFound = () => {
  return (
    <>
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div>
        <div className="font-bold text-3xl text-center">
          We've lost this page
        </div>
        <p className="text-center">
          Sorry, the page you're looking for doesn't  exist or has been moved.
        </p>
      </div>
    </div>
    </>
  );
};

export default NotFound;
