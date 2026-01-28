import { Link } from "../i18n/navigation";
import { SelectLanguaje } from "./SelectLanguaje";

export const Header = () => {
  return (
    <header className="container px-4 mx-auto mb-7 flex justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-xl font-medium hover:underline hover:font-bold"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-xl font-medium hover:underline hover:font-bold"
        >
          About
        </Link>
      </div>
      <SelectLanguaje />
    </header>
  );
};
