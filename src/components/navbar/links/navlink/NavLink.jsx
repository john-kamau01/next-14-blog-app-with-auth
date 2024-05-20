"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navlink.module.css";

const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.navlink} ${pathname === link.path && styles.active}`}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
