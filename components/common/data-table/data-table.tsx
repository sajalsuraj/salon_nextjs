import Card from "../card/card";
import Pagination from "./pagination";
import Table from "./table";
import Searchbox from "./search-box";

interface DataTableProps {
  cardTitle: string;
  headings: string[];
  tableData: any[];
  classNames?: string;
}

export default function Datatable({
  cardTitle,
  headings,
  tableData,
  classNames = "",
}: DataTableProps) {
  return (
    <Card classNames="flex-col card-shadow">
      <div className="flex justify-between items-center">
        <h1 className="bold font-large">{cardTitle}</h1>
        <Searchbox />
      </div>

      <Table
        headings={headings}
        tableData={tableData}
        classNames={classNames}
      />
      <div className="flex justify-end">
        <Pagination />
      </div>
    </Card>
  );
}
