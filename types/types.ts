export type SummaryType = {
  title: string;
  data: string | number;
  image: any;
};

export type SummaryResponseType = {
  [key: string]: SummaryType;
};

export type CustomerType = {
  id: number | string;
  name: string;
  phone: number;
  visits: number;
  gender: string;
};

export type StaffsType = {
  id: number | string;
  name: string;
  phone: number;
  services_done: number;
  gender: string;
};
