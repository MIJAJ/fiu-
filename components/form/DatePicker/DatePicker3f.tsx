import React, { useState } from "react";
import { InputFieldProps } from '@components/form/DatePicker/interface'
import styles from './index.module.scss'
import { DatePicker} from './DatePicker3'
import "../../../node_modules/tailwindcss/dist/tailwind.css";
import {
  Calendar as CalendarIcon,
} from 'react-feather';

const DatePicker3 = ({ label }: InputFieldProps) => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className="flex">
        <div className={styles.datepicker}>
          <DatePicker date={date} onChange={setDate}></DatePicker>
        </div>
        <div className={styles.icondatepicker}>
            <CalendarIcon size="20" color="#666" />
        </div>
      </div>
    </div>
  );
};
export default DatePicker3
