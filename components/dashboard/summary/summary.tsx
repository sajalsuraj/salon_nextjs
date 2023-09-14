import Card from "./../../common/card/card";
import SummaryCardinfo from "./summary-card-info";
import Cardaction from "../../common/card-action/card-action";

/** Importing mocks for temporary development */
import { SummaryResponse } from "@/mock/response";
import { useState } from "react";

export default function Summary() {
  const [summaryData] = useState(SummaryResponse);

  return (
    <div className="summary flex flex-col basis-3/12">
      <div className="summary-top flex mb-[10px]">
        <div className="basis-8/12 flex gap-[10px] flex-wrap">
          <Card classNames="basis-[48%]">
            <SummaryCardinfo data={summaryData.clients} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[48%]">
            <SummaryCardinfo data={summaryData.services} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[48%]">
            <SummaryCardinfo data={summaryData.staffs} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[48%]">
            <SummaryCardinfo data={summaryData.appointments} />
            <Cardaction />
          </Card>
        </div>

        <div className="basis-4/12">
          <Card>
            <></>
          </Card>
        </div>
      </div>
      <div className="summary-below flex gap-[10px]">
        <Card classNames="basis-[33%]">
          <SummaryCardinfo data={summaryData.income} />
          <Cardaction />
        </Card>

        <Card classNames="basis-[33%]">
          <SummaryCardinfo data={summaryData.products} />
          <Cardaction />
        </Card>

        <Card classNames="basis-[33%]">
          <SummaryCardinfo data={summaryData.enquiry} />
          <Cardaction />
        </Card>
      </div>
    </div>
  );
}
