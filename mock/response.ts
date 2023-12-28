import { CustomerType, SummaryResponseType, StaffsType } from "@/types/types";

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
    gender: "Male",
    phone: 8210907970,
    visits: 10,
  },
  {
    id: 2,
    name: "Kumar Gautam",
    gender: "Male",
    phone: 8210907970,
    visits: 9,
  },
  {
    id: 3,
    name: "Navneet Dwivedi",
    gender: "Male",
    phone: 8210907970,
    visits: 8,
  },
  {
    id: 4,
    name: "Bipul Tiwari",
    gender: "Male",
    phone: 8210907970,
    visits: 7,
  },
  {
    id: 5,
    name: "Rahul Tiwari",
    gender: "Male",
    phone: 8210907970,
    visits: 6,
  },
  {
    id: 1,
    name: "Sajal Suraj",
    gender: "Male",
    phone: 8210907970,
    visits: 10,
  },
  {
    id: 2,
    name: "Kumar Gautam",
    gender: "Male",
    phone: 8210907970,
    visits: 9,
  },
  {
    id: 3,
    name: "Navneet Dwivedi",
    gender: "Male",
    phone: 8210907970,
    visits: 8,
  },
  {
    id: 4,
    name: "Bipul Tiwari",
    gender: "Male",
    phone: 8210907970,
    visits: 7,
  },
  {
    id: 5,
    name: "Rahul Tiwari",
    gender: "Male",
    phone: 8210907970,
    visits: 6,
  },
];

export const StaffsResponse: StaffsType[] = [
  {
    id: 1,
    name: "Sajal Suraj",
    gender: "Male",
    phone: 8210907970,
    services_done: 10,
  },
  {
    id: 2,
    name: "Kumar Gautam",
    gender: "Male",
    phone: 8210907970,
    services_done: 10,
  },
];
