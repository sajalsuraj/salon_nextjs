import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from './data-table.module.scss';
export default function Pagination() {
  return (
    <div className="flex items-center">
      <AiOutlineLeft />
      <div>
        <input className={styles.pageNumber} type="number" value={1} /> / 20
      </div>
      <AiOutlineRight />
    </div>
  );
}
