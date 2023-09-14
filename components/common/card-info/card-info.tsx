import Image from "next/image";
import { SummaryType } from "@/types/types";

interface CardInfoProps {
  data: SummaryType;
}

export default function Cardinfo() {
    return (
        <div className={`flex gap-[10px]`}>
          <div>
            <Image src="/images/avatar.svg" alt="" width={60} height={60} />
          </div>
          <div>
            <div className="bold">Sajal Suraj</div>
            <div className="font-small">Hair cut and Hair stylist</div>
            <div className="font-small">Services done: 20 | Estt. earning: 2000</div>
          </div>
        </div>
      );
}