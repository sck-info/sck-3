export type Session = {
  /* unique identifier for every session type (e.g., cst, music-therapy) */
  id: string;

  /* display name of every session */
  name: string;

  /* description displayed below the name */
  description: string;

  /* registration url gforms */
  formUrl: string;

  /* extra info in read more */
  additionalInfo?: string;

  /* 60min */
  duration?: string;

  /* 1-on-1 or group */
  format?: string;

  /* In-person or Online */
  mode?: string;

  /* Section category for tabs filtering */
  category?: 'therapy' | 'consultation' | 'class' | 'workshop';

  /* Custom details such as Level options or class frequency */
  subDetails?: string;
};
