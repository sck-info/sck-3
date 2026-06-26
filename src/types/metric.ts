export type Metric = {
  id: string;

  value: number;

  /* + or suffix labels */
  suffix?: string;

  /* People touched, Countries reached */
  label: string;

  /* If the value should be animated as a decimal (e.g. 1.5) */
  isDecimal?: boolean;
};
