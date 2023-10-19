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
              {props.headings.map((title, idx) => (
                <th className="text-left semibold py-2" key={idx}>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {props.tableData.map((data, idx) => {
              if (idx < 5)
                return (
                  <tr className="border-b" key={idx}>
                    {Object.keys(data).map((key, tdIdx) => {
                      return (
                        <td className="py-2.5" key={tdIdx}>
                          {data[key]}
                        </td>
                      );
                    })}
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
