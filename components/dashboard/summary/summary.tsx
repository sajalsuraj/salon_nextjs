import Card from "./../../common/card/card";
import Cardinfo from "./card-info";
import Cardaction from "./card-action";

/** Importing mocks */
import { SummaryResponse } from "@/mock/response";
import { useState } from "react";

export default function Summary() {
  const [summaryData] = useState(SummaryResponse);

  return (
    <div className="summary flex flex-col">
      <div className="summary-top flex mb-[20px]">
        <div className="basis-8/12 flex gap-[16px] flex-wrap">
          <Card classNames="basis-[48%]">
            <Cardinfo data={summaryData.clients} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[48%]">
            <Cardinfo data={summaryData.services} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[48%]">
            <Cardinfo data={summaryData.staffs} />
            <Cardaction />
          </Card>
          <Card classNames="basis-[48%]">
            <Cardinfo data={summaryData.appointments} />
            <Cardaction />
          </Card>
        </div>

        <div className="basis-4/12">
          <Card>
            <></>
          </Card>
        </div>
      </div>
      <div className="summary-below flex gap-[16px]">
        <Card classNames="basis-[32%]">
          <Cardinfo data={summaryData.income} />
          <Cardaction />
        </Card>

        <Card classNames="basis-[32%]">
          <Cardinfo data={summaryData.products} />
          <Cardaction />
        </Card>

        <Card classNames="basis-[32%]">
          <Cardinfo data={summaryData.enquiry} />
          <Cardaction />
        </Card>
      </div>
    </div>
  );
}
