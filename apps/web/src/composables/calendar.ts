import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWeekend,
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfDay,
  subMonths,
  getHours, getMinutes,
  setHours, setMinutes,
} from "date-fns";
import { computed, ref } from "vue";

export interface IUseCalendarOptions {
  /**
   * The start month of the calendar
   */
  startMonth?: Date;
  /**
   * The number of months to show at a time
   */
  monthsToShow?: number;
  /**
   * Whether the selection is in range mode or single date mode
   */
  mode?: "single" | "range";
  /**
   * The selected date(s)
   */
  preselect?: Date[];
  /**
   * The minimum date value
   */
  minDate?: Date;
  /**
   * The maximum date value
   */
  maxDate?: Date;
}

export interface IMonth {
  name: string;
  year: number;
  month: number;
  days: IDay[];
}

export interface IDay {
  dayId: string;
  date: Date;
  isSameMonth: boolean;
  isWeekend: boolean;
  isDisabled: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isStartOfRange: boolean;
  isEndOfRange: boolean;
}

export function useCalendar({
  startMonth = new Date(),
  monthsToShow = 1,
  mode = "single",
  preselect = [],
  minDate = new Date(),
  maxDate = new Date(),
}: IUseCalendarOptions = {}) {
  /* -------------------------------------------------------------------------- */
  /*                                DATE BROWSING                               */
  /* -------------------------------------------------------------------------- */
  const start = ref<Date>(startOfMonth(startMonth));
  const next = () => {
    start.value = addMonths(start.value, 1);
  };
  const prev = () => {
    start.value = subMonths(start.value, 1);
  };
  const setMonth = (month: Date) => {
    start.value = startOfMonth(month);
  };
  /* -------------------------------------------------------------------------- */
  /*                                  SELECTION                                 */
  /* -------------------------------------------------------------------------- */
  const selected = ref<Date[]>(preselect);
  const select = (date: Date) => {
    // in 'range' mode we can select two dates
    if (mode === "range" && selected.value.length === 2) {
      selected.value = [startOfDay(date)];
    } else if (mode === "single") {
      selected.value = [startOfDay(date)];
    } else {
      selected.value = [...selected.value, startOfDay(date)].sort((a, b) => a.getTime() - b.getTime());
    }
  };
  // set selected dates
  const setSelected = (dates: Date[]) => {
    selected.value = dates;
  }
  // Set the time
  const setTime = (position: number, time: Date) => {
    if (selected.value.length > position) {
      const date = selected.value[position];
      const hours = getHours(time);
      const minutes = getMinutes(time);
      selected.value[position] = setHours(setMinutes(date, minutes), hours);
    }
  }
  /**
   * Get selection states for a date
   * @param date The date to check if it is selected or in range etc.
   * @returns The selection state of the date
   */
  const getSelectionState = (date: Date) => {
    const isSelected = selected.value.some((d) => isSameDay(date, d));
    
    const isStartOfRange =
      mode === 'range' && 
      selected.value.length >= 1 && 
      isSameDay(date, selected.value[0]);
    const isEndOfRange =
      mode === 'range' && 
      selected.value.length === 2 && 
      isSameDay(date, selected.value[1]);
    const isInRange =
      mode === 'range' && 
      selected.value.length === 2 &&
      (!isEndOfRange) && (!isStartOfRange) &&
      isAfter(date, selected.value[0]) &&
      isBefore(date, selected.value[1]);
    return { isSelected, isStartOfRange, isEndOfRange, isInRange };
  };

  /* -------------------------------------------------------------------------- */
  /*                                THE CALENDAR                                */
  /* -------------------------------------------------------------------------- */
  const months = computed(() => {
    const monthArr = [] as IMonth[];
    for (let i = 0; i < monthsToShow; i++) {
      const startDate = addMonths(start.value, i);
      const currentMonth: IMonth = {
        name: format(startDate, "MMMM"),
        month: getMonth(startDate),
        year: getYear(startDate),
        days: [],
      };
      let currentDate = startOfWeek(startDate);
      const calendarEnd = endOfWeek(endOfMonth(startDate));
      while (currentDate <= calendarEnd) {
        const day = {
          dayId: format(currentDate, "yyyy-MM-dd"),
          date: currentDate,
          isSameMonth: isSameMonth(startDate, currentDate),
          isToday: isSameDay(currentDate, new Date()),
          isWeekend: isWeekend(currentDate),
          isDisabled:
            ((minDate || selected.value[0]) && isBefore(currentDate, selected.value[0] ?? minDate)) ||
            (maxDate && isAfter(currentDate, maxDate)),
          ...getSelectionState(currentDate),
        };
        currentMonth.days.push(day);
        currentDate = addDays(currentDate, 1);
      }
      monthArr.push(currentMonth);
    }
    return monthArr;
  });

  return { months, next, prev, setMonth, select, selected, setTime, setSelected };
}
