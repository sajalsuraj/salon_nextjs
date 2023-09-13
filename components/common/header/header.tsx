import { AiOutlineBell } from "react-icons/ai";
import { PiCaretDownBold } from "react-icons/pi";
import Image from "next/image";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={`flex justify-between items-center ${styles.header}`}>
      <div className={`font-large ${styles.headerTitle}`}>Overview</div>
      <div className="flex items-center gap-[20px]">
        <AiOutlineBell />
        <div className="flex gap-[10px]">
          <div>
            <Image src="/images/avatar.svg" alt="" width={38} height={38} />
          </div>
          <div className={`flex flex-col`}>
            <div className="font-regular semibold">Kumar Gautam</div>
            <div className={`font-small ${styles.userTitle}`}>Owner</div>
          </div>
          <div className="flex items-center">
            <PiCaretDownBold />
          </div>
        </div>
      </div>
    </div>
  );
}
