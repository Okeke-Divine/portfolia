import config from "@/data/config.json"

export default function ApplicationNavbar() {
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
        </div>
        <div className="navbar-center font-bold uppercase">
            {config.app_name}
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
