import Card from "../../../components/common/card/card";
import SummaryCardinfo from "./summary-card-info";
import Cardaction from "../../../components/common/card-action/card-action";

/** Importing mocks for temporary development */
import { SummaryResponse } from "@/mock/response";
import { useState } from "react";

export default function Summary() {
  const [summaryData] = useState(SummaryResponse);

  return (
    <div className="summary flex flex-col gap-[10px]">
      <div className="summary-top flex gap-[10px]">
        <div className="basis-8/12 flex gap-[10px] flex-wrap">
          <Card classNames="basis-[49%] card-shadow">
            <SummaryCardinfo data={summaryData.clients} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[49%] card-shadow">
            <SummaryCardinfo data={summaryData.services} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[49%] card-shadow">
            <SummaryCardinfo data={summaryData.staffs} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[49%] card-shadow">
            <SummaryCardinfo data={summaryData.appointments} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[49%] card-shadow">
            <SummaryCardinfo data={summaryData.income} />
            <Cardaction />
          </Card>

          <Card classNames="basis-[49%] card-shadow">
            <SummaryCardinfo data={summaryData.products} />
            <Cardaction />
          </Card>
        </div>

        <div className="basis-4/12 flex flex-col justify-between">
          <Card classNames="card-shadow">
            <></>
          </Card>
          <Card classNames="card-shadow">
            <SummaryCardinfo data={summaryData.enquiry} />
            <Cardaction />
          </Card>
        </div>
      </div>
    </div>
  );
}
