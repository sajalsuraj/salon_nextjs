import Summary from "./summary/summary";
import Topcustomers from "./customer/top-customer";
import Recentbillings from "./billing/recent-billing";
import Topstaffs from "./staffs/top-staffs";

import styles from "./dashboard.module.scss";
import Upcomingappointments from "./vertical/appointments/upcoming-appointment";
import Upcomingbirthdays from "./vertical/birthdays/upcoming-birthdays";

export default function Dashboard() {
  return (
    <div className={`grid grid-cols-3 ${styles.dashboard} gap-4`}>
      <div className="dbLeftPanel col-span-2 grid auto-rows-auto max-h-[inherit] gap-3">
        <Summary />
        <div className="flex gap-[10px]">
          <div className="basis-6/12">
            <Topcustomers />
          </div>

          <div className="basis-6/12">
            <Recentbillings />
          </div>
        </div>
        <div className="flex min-h-min gap-[10px]">
          <div className="basis-6/12">
            <Topstaffs />
          </div>
          <div className="basis-6/12">
            <Topstaffs />
          </div>
        </div>
      </div>
      <div className="dbRightPanel grid grid-rows-2 max-h-[inherit] gap-3">
        <div className="row-span-1">
          <Upcomingappointments />
        </div>
        <div className="row-span-1">
          <Upcomingbirthdays />
        </div>
      </div>
    </div>
  );
}
