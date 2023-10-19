import VerticalCard from "../vertical-card";
import Cardaction from "@/components/common/card-action/card-action";
import Cardinfo from "@/components/common/card-info/card-info";
import Card from "@/components/common/card/card";
import styles from "../vertical-card.module.scss";

export default function Upcomingappointments() {
  return (
    <VerticalCard cardTitle="Upcoming appointments">
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
        <Card classNames={`${styles.themeBg}`}>
          <Cardinfo />
          <Cardaction />
        </Card>
        <Card classNames={`${styles.themeBg}`}>
          <Cardinfo />
          <Cardaction />
        </Card>
      </div>
    </VerticalCard>
  );
}
