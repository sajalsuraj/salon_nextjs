interface TablecardProps {
  headings: string[];
  tableData: any[];
  classNames: string;
}

export default function Table(props: TablecardProps) {
  return (
    <>
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
          <tbody>
            {props.tableData.map((data, idx) => (
              <tr className="border-b" key={idx}>
                {Object.keys(data).map((key, tdIdx) => (
                  <td className="py-2.5" key={tdIdx}>
                    {data[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
