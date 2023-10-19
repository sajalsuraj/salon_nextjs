import Datatable from "@/components/common/data-table/data-table";
import { CustomerResponse } from "@/mock/response";
import Button from "@/components/common/button/button";

export default function ClientsContainer() {
  const tableHeading = ["ID", "Name", "Phone", "Gender", "Visits", "Action"];
  return (
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-end">
        <Button type="primary" text="+ Add new client" onBtnClick={() => {}} />
        </div>
        <Datatable
          cardTitle="List of Clients"
          headings={tableHeading}
          tableData={CustomerResponse}
        />
      </div>
  );
}
