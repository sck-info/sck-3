export type Session = {
  id: string;
  name: string;
  description: string;
  formUrl: string;
  additionalInfo?: string;
  duration?: string;
  format?: string;
  mode?: string;
  category?: 'therapy' | 'consultation' | 'class' | 'workshop';
  subDetails?: string;
};
