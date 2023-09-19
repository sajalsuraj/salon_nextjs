import Card from "../card/card";

interface TablecardProps {
  cardTitle: string;
  headings: string[];
  tableData: any[];
  classNames: string;
}

export default function Tablecard(props: TablecardProps) {
  return (
    <Card classNames="flex-col card-shadow">
      <h1 className="bold font-large">{props.cardTitle}</h1>
      <div className={`${props.classNames}`}>
        <table className="table-auto w-full">
          <thead>
            <tr className="border-t border-b">
              {props.headings.map((title) => (
                <th className="text-left semibold py-2">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.tableData.map((data) => (
              <tr className="border-b">
                {Object.keys(data).map((key) => (
                  <td className="py-2.5">{data[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
