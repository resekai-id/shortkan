import { useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const data = useSession();

  return (
    <div className="navbar bg-base bg-transparent">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Links</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavbarItem loggedIn={data.status === "authenticated"}></NavbarItem>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface NavbarItemProps {
  loggedIn: boolean;
}
const NavbarItem = ({ loggedIn }: NavbarItemProps) => {
  if (loggedIn) {
    return (
      <Link href="/dashboard">
        <a className="btn">Dashboard</a>
      </Link>
    );
  }
  return (
    <Link href="/api/auth/signin">
      <a className="btn">Sign in</a>
    </Link>
  );
};
