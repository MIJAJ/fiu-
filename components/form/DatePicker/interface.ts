import { FieldInputProps } from 'formik'

export type InputFieldAcceptProps = {
  name: string;
  label: string;
}

export interface InputFieldProps extends FieldInputProps<string> {
  label: string
}

/*export interface SpanishMonth {
  name: string;
  shortName: string;
  spanishCalendarMonthNumber: number;
}

export interface DatePickerReducerState {
  isOpen: boolean;
  date: string;
  displayDate: string;
  month: number;
  year: number;
  daysInMonthArr: number[];
  blankDaysArr: number[];
}

export interface SpanishCalendarDay {
  name: string;
  shortName: string;
  spanishCalendarWeekdayNumber: number;
}*/

export interface DatePickerProps {
  date: Date;
  onChange: (date: Date) => void;
}

export interface CalendarProps {
  style: React.CSSProperties;
  placement: string;
  ref: React.Ref<HTMLDivElement>;
}

export interface MonthYear {
  month: number;
  year: number;
}

export interface DatepickerContextType {
  date: Date | null;
  visible: MonthYear;
  view: ViewState;
  nextMonth: () => void;
  prevMonth: () => void;
  nextYear: () => void;
  prevYear: () => void;
  nextDecade: () => void;
  prevDecade: () => void;
  selectMonth: (m: number) => void;
  selectYear: (y: number) => void;
  selectDate: (d: number) => void;
  viewMonths: () => void;
  viewYears: () => void;
  isVisible: boolean;
  showCalendar: () => void;
  toggleCalendar: () => void;
  isSelectedDate: (d: number) => boolean;
}