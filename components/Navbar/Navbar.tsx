import Link from 'next/link';
import s from './Navbar.module.css';
import {builder} from "@builder.io/react";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/" className={s.navbar__link}>Home</Link>
      <Link href="/home-example" className={s.navbar__link}>Home Example</Link>
      <Link href="/conditions-example" className={s.navbar__link}>Conditions</Link>
      <Link href="/about" className={s.navbar__link}>About</Link>
    </nav>
  );
};

export default Navbar;
