import Tablecard from "@/components/common/table-card/table-card";
import { CustomerResponse } from "@/mock/response";

export default function Recentbillings() {
  const tableHeading = ["ID", "Name", "Services", "Price"];
  return (
    <Tablecard
      cardTitle="Recent Bills"
      headings={tableHeading}
      tableData={CustomerResponse}
    />
  );
}
