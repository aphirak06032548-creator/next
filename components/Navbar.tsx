// rafce

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-3 shadow-md">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/info">Info</Link>
          <Link href="/book">Book</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;