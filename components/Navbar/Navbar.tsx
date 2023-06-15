import Link from 'next/link';
import s from './Navbar.module.css';
import {builder} from "@builder.io/react";

// export async function getStaticProps() {
//   const links = await builder.get('navigation-links', {
//     // You can use options for queries, sorting, and targeting here
//     // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
//   }).promise();
//   // console.log("links", links);
//   return {
//     props: {
//       links: links || null,
//     },
//     revalidate: 5,
//   };
// }

const Navbar = () => {
  console.log("navbar links");
  return (
    <nav className={s.navbar}>
      {/*{links.data.links.map((link: any, index: number) => (*/}
      {/*  <Link className={s.navbar__link} key={index} href={link.data.url}>*/}
      {/*    {link.data.label}*/}
      {/*  </Link>*/}
      {/*))}*/}
      <Link href="/" className={s.navbar__link}>Home</Link>
      <Link href="/home-example" className={s.navbar__link}>Home Example</Link>
      {/*<Link href="/dep-dir" className={s.navbar__link}>Dept/Dir</Link>*/}
      <Link href="/conditions" className={s.navbar__link}>Conditions</Link>
      <Link href="/about" className={s.navbar__link}>About</Link>
    </nav>
  );
};

export default Navbar;
