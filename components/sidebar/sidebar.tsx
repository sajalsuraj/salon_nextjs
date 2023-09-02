import Link from "next/link";
import { AiFillPieChart } from "react-icons/ai";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={`w-full h-screen ${styles.sidebar}`}>
      <div className={`${styles.logo} p-4`}>
        <h1 className="font-large font-bold text-white">SalonX</h1>
      </div>

      <div className={styles.menuList}>
        <Link href="/">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <AiFillPieChart />
            <span>Dashboard</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
