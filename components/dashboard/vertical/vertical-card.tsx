
import Card from "@/components/common/card/card";


interface VerticalCardProps {
    cardTitle: string;
    children: React.ReactNode;
}

export default function VerticalCard(props: VerticalCardProps) {
  return (
    <Card classNames="flex-col max-h-full card-shadow">
      <h1 className="bold font-large">{props.cardTitle}</h1>
      <div className="overflow-y-auto flex flex-col gap-[10px]">
        {props.children}
      </div>
    </Card>
  );
}