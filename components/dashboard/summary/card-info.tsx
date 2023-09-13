import Image from "next/image";
import { SummaryType } from "@/types/types";

interface CardInfoProps {
  data: SummaryType;
}

export default function Cardinfo({ data }: CardInfoProps) {
  return (
    <div className={`flex gap-[10px]`}>
      <div>
        <Image src="/images/avatar.svg" alt="" width={50} height={50} />
      </div>
      <div>
        <div>{data.title}</div>
        <div className="bold font-large">{data.data}</div>
      </div>
    </div>
  );
}
