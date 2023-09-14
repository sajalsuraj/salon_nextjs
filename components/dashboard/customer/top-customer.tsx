import Tablecard from "@/components/common/table-card/table-card";
import { CustomerResponse } from "@/mock/response";

interface TopCustomerProps {
  classNames: string;
}

export default function Topcustomers() {
  const tableHeading = ["ID", "Name", "Phone", "Visits"];
  return (
    <Tablecard
      classNames="max-h-full overflow-y-auto"
      cardTitle="Top Customers"
      headings={tableHeading}
      tableData={CustomerResponse}
    />
  );
}
