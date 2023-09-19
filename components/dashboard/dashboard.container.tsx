import Summary from "./summary/summary";
import Topcustomers from "./customer/top-customer";
import Recentbillings from "./billing/recent-billing";
import Topstaffs from "./staffs/top-staffs";

import styles from "./dashboard.module.scss";
import Upcomingappointments from "./vertical/appointments/upcoming-appointment";
import Upcomingbirthdays from "./vertical/birthdays/upcoming-birthdays";

export default function Dashboard() {
  return (
    <div className={`flex ${styles.dashboard} gap-[10px]`}>
      <div className="dbLeftPanel basis-9/12 flex flex-col gap-[10px]">
        <Summary />
        <div className="flex gap-[10px] basis-4/12 max-h-fit">
          <div className="basis-6/12">
            <Topcustomers />
          </div>

          <div className="basis-6/12">
            <Recentbillings />
          </div>
        </div>
        <div className="flex gap-[10px] basis-4/12 max-h-[33.33%]">
          <div className="basis-6/12">
            <Topstaffs />
          </div>
          <div className="basis-6/12">
            <Topstaffs />
          </div>
        </div>
      </div>
      <div className="dbRightPanel flex flex-col basis-3/12 gap-[10px]">
        <div className="max-h-[49%]">
          <Upcomingappointments />
        </div>
        <div className="max-h-[49%]">
          <Upcomingbirthdays />
        </div>
      </div>
    </div>
  );
}
