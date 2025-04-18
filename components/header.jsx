import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from"./header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <img src={logo.src} alt="Mobile phone with posts feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed"> Feed </Link>
          </li>
          <li>
            <Link className={classes['cta-link']} href="/new-post"> New Post </Link>
          </li>
        </ul>
      </nav> 
    </header>
  );
}
