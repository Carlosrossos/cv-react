import Link from "next/link";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/contact">Go to contact</Link></li>
        <li><Link href="/">Go to Home</Link></li>
        <li><Link href="/portfolio">Go to portfolio</Link></li>
        <li><Link href="/skills">Go to skills</Link></li>
      </ul>
    </div>
  );
}

export default Home;
