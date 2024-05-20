import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <NavLink key={index} link={link} />
      ))}
    </div>
  );
};
export default Links;
