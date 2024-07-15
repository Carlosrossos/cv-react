import Link from "next/link";
import styles from "../styles/modules/Navigation.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.mainInfos}>
        <img src="./media/PhotoCB.jpeg" alt="photo-profil" />
        <h3>Charles Bréton</h3>
      </div>
      <div className={styles.navLinks}>
        <ul className={styles.list}>
          <li className={styles.listElements}>
            <Link href="/contact">Go to contact</Link>
          </li>
          <li>
            <Link href="/">Go to Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Go to portfolio</Link>
          </li>
          <li>
            <Link href="/skills">Go to skills</Link>
          </li>
        </ul>
      </div>

      <div className={styles.socialNetworks}>
        <div>LinkedIn</div>
        <div>GitHub</div>
        <div>Twitter</div>
      </div>
    </div>
  );
}

export default Home;
