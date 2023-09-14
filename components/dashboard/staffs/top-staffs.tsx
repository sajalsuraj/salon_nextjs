import Cardaction from "@/components/common/card-action/card-action";
import Cardinfo from "@/components/common/card-info/card-info";
import Card from "@/components/common/card/card";
import styles from "./top-staffs.module.scss";

export default function Topstaffs() {
  return (
    <Card classNames="flex-col max-h-full">
      <h1 className="bold font-large">Top performing staffs</h1>
      <div className="overflow-y-auto flex flex-col gap-[10px]">
        <Card classNames={`${styles.themeBg}`}>
          <Cardinfo />
          <Cardaction />
        </Card>
        <Card classNames={`${styles.themeBg}`}>
          <Cardinfo />
          <Cardaction />
        </Card>
        <Card classNames={`${styles.themeBg}`}>
          <Cardinfo />
          <Cardaction />
        </Card>
      </div>
    </Card>
  );
}
