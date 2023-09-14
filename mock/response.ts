import { CustomerType, SummaryResponseType } from "@/types/types";

export const SummaryResponse: SummaryResponseType = {
  clients: {
    title: "Clients",
    data: "1000",
    image: "",
  },
  services: {
    title: "Services",
    data: "20",
    image: "",
  },
  staffs: {
    title: "Staffs",
    data: "20",
    image: "",
  },
  appointments: {
    title: "Appointments",
    data: "200",
    image: "",
  },
  income: {
    title: "Total Income",
    data: "20000",
    image: "",
  },
  products: {
    title: "Products Sold",
    data: "200",
    image: "",
  },
  enquiry: {
    title: "Enquiries",
    data: "200",
    image: "",
  },
};

export const CustomerResponse: CustomerType[] = [
  {
    id: 1,
    name: "Sajal Suraj",
    phone: 8210907970,
    visits: 10,
  },
  {
    id: 2,
    name: "Kumar Gautam",
    phone: 8210907970,
    visits: 9,
  },
  {
    id: 3,
    name: "Navneet Dwivedi",
    phone: 8210907970,
    visits: 8,
  },
  {
    id: 4,
    name: "Bipul Tiwari",
    phone: 8210907970,
    visits: 7,
  },
  {
    id: 5,
    name: "Rahul Tiwari",
    phone: 8210907970,
    visits: 6,
  },
];
