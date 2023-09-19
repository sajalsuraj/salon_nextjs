import Link from "next/link";
import { AiFillPieChart } from "react-icons/ai";
import { BsCalendarPlusFill } from "react-icons/bs";
import { PiUsersFourFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdInventory } from "react-icons/md";
import { FaScissors } from "react-icons/fa6";
import { BsCashStack } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
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
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <BsCalendarPlusFill />
            <span>Appointments</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <PiUsersFourFill />
            <span>Clients</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <FaUserTie />
            <span>Staffs</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <BsFillTelephoneInboundFill />
            <span>Enquiries</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <MdInventory />
            <span>Inventory</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <FaScissors />
            <span>Services</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <BsCashStack />
            <span>Billings</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <BiSolidReport />
            <span>Reports</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <MdRateReview />
            <span>Reviews</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <RiUserSettingsFill />
            <span>Users</span>
          </div>
        </Link>
        <Link href="">
          <div className={`${styles.menuItem} flex items-center gap-[5px]`}>
            <AiFillSetting />
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
