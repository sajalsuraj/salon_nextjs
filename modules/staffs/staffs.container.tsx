import Datatable from "@/components/common/data-table/data-table";
import { StaffsResponse } from "@/mock/response";
import Button from "@/components/common/button/button";

export default function StaffsContainer() {
  const tableHeading = [
    "ID",
    "Name",
    "Phone",
    "Gender",
    "Services done",
    "Action",
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-end">
        <Button type="primary" text="+ Add new staff" onBtnClick={() => {}} />
      </div>
      <Datatable
        cardTitle="List of Staffs"
        headings={tableHeading}
        tableData={StaffsResponse}
      />
    </div>
  );
}
