export type SummaryType = {
  title: string;
  data: string | number;
  image: any;
};

export type SummaryResponseType = {
  [key: string]: SummaryType;
};
