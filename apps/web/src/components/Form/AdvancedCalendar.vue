<script lang="ts" setup>
import { watch } from 'vue'
import {
    format,
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    subHours,
    subDays,
    subMonths,
    subYears,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
} from 'date-fns'
import { useCalendar, IDay, IUseCalendarOptions } from '@/composables/calendar'

interface ICalendarProps {
    options?: IUseCalendarOptions
    id?: string
    name?: string
    modelValue?: Date[]
    buttonProps?: any
}
const props = defineProps<ICalendarProps>()

interface ICalendarEmits {
    (e: 'update:modelValue', value: Date[]): void
    (e: 'submit', value: Date[]): void
}
const emit = defineEmits<ICalendarEmits>()

/* -------------------------------------------------------------------------- */
/*                               CALENDAR UTILS                               */
/* -------------------------------------------------------------------------- */

const { months, next, prev, select, selected, setTime, setSelected } =
    useCalendar({
        preselect: props.modelValue,
        mode: 'range',
        monthsToShow: 2,
        ...(props.options || {}),
    })
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const selectDate = (date: Date) => {
    select(date)
}
const updateTime = (position: number, time: Date) => {
    setTime(position, time)
}

watch(
    selected,
    (value) => {
        emit('update:modelValue', value)
    },
    { deep: true }
)

const submit = () => {
    emit('submit', selected.value)
}

/* -------------------------------------------------------------------------- */
/*                                   STYLING                                  */
/* -------------------------------------------------------------------------- */

const getDayClasses = (day: IDay) => {
    return {
        weekend: day.isWeekend,
        'in-range': day.isInRange,
        'start-of-range': day.isStartOfRange,
        'end-of-range': day.isEndOfRange,
        selected: day.isSelected,
        today: day.isToday,
        disabled: day.isDisabled,
        'other-month': !day.isSameMonth,
    }
}

/* -------------------------------------------------------------------------- */
/*                                 SHORTHANDS                                 */
/* -------------------------------------------------------------------------- */
const shortHands = [
    {
        name: 'Today',
        value: [startOfDay(new Date()), endOfDay(new Date())],
    },
    {
        name: 'Last 24 hours',
        value: [subHours(new Date(), 24), new Date()],
    },
    {
        name: 'This week',
        value: [startOfWeek(new Date()), endOfWeek(new Date())],
    },
    {
        name: 'Last 7 days',
        value: [subDays(new Date(), 7), new Date()],
    },
    {
        name: 'This month',
        value: [startOfMonth(new Date()), endOfMonth(new Date())],
    },
    {
        name: 'Last 30 days',
        value: [subDays(new Date(), 30), new Date()],
    },
    {
        name: 'Last 3 Months',
        value: [subMonths(new Date(), 3), new Date()],
    },
    {
        name: 'Last 6 Months',
        value: [subMonths(new Date(), 6), new Date()],
    },
    {
        name: 'Last 9 Months',
        value: [subMonths(new Date(), 9), new Date()],
    },
    {
        name: 'This year',
        value: [startOfYear(new Date()), endOfYear(new Date())],
    },
    {
        name: 'Last 12 months',
        value: [subMonths(new Date(), 12), new Date()],
    },
    {
        name: 'Last year',
        value: [subYears(new Date(), 1), new Date()],
    },
]
</script>
<template>
    <div :id="id" :name="name" class="calendar-container">
        <div :id="`${id}-title`" :name="`${name}-title`" class="calendar-title">
            Calendar
        </div>
        <div class="flex space-x-4 flex-1">
            <div
                v-if="props.options?.mode !== 'single'"
                :id="`${id}-shorthands`"
                :name="`${name}-shorthands`"
                class="calendar-shorthands"
            >
                <div
                    @click="setSelected(shortHand.value)"
                    v-for="shortHand in shortHands"
                    class="calendar-shorthand"
                >
                    {{ shortHand.name }}
                </div>
            </div>
            <div class="space-y-4">
                <div class="flex items-center space-x-4">
                    <template
                        v-for="(_, idx) in Array.from({
                            length: props.options?.monthsToShow ?? 2,
                        })"
                    >
                        <FormTextInput
                            :id="`${id}-date-${idx}`"
                            :name="`${name}-date-${idx}`"
                            :modelValue="
                                selected?.[idx]
                                    ? format(selected[idx], 'dd MMM yyyy')
                                    : ''
                            "
                            class="flex-1 w-0"
                            :readonly="true"
                        >
                            <template #left>
                                <div
                                    text-xl
                                    text-primary
                                    i-mdi:calendar-month
                                />
                            </template>
                        </FormTextInput>
                        <FormTimeInput
                            :disabled="
                                selected.length <
                                (props.options?.mode === 'single' ? 1 : 2)
                            "
                            :modelValue="selected?.[idx]"
                            @update:modelValue="updateTime(idx, $event)"
                            :id="`${id}-start-time`"
                            :name="`${name}-end-time`"
                        />
                    </template>
                </div>
                <div
                    :id="`${id}-calendar`"
                    :name="`${name}-calendar`"
                    class="calendar"
                >
                    <div v-for="(month, midx) in months" class="calendar-month">
                        <div
                            :id="`${id}-calendar-header`"
                            :name="`${name}-calendar-header`"
                            class="calendar-header"
                        >
                            <button
                                v-bind="buttonProps"
                                v-if="midx === 0"
                                class="calendar-header-icon"
                                :id="`${id}-calendar-header-prev`"
                                :name="`${name}-calendar-header-prev`"
                                @click="prev"
                            >
                                <div text-xl text-primary i-mdi:chevron-left />
                            </button>
                            <button
                                v-bind="buttonProps"
                                class="calendar-header-item"
                                :id="`${id}-calendar-header-item`"
                                :name="`${name}-calendar-header-item`"
                            >
                                {{ month.name }} {{ month.year }}
                            </button>
                            <button
                                v-bind="buttonProps"
                                v-if="
                                    midx ===
                                    (props.options?.monthsToShow ?? 1) - 1
                                "
                                class="calendar-header-icon"
                                :id="`${id}-calendar-header-next`"
                                :name="`${name}-calendar-header-next`"
                                @click="next"
                            >
                                <div text-xl text-primary i-mdi:chevron-right />
                            </button>
                        </div>
                        <div
                            class="calendar-week-days"
                            :id="`${id}-calendar-week-days`"
                            :name="`${name}-calendar-week-days`"
                        >
                            <div
                                :id="`${id}-calendar-week-day-${day}`"
                                :name="`${name}-calendar-week-day-${day}`"
                                class="calendar-week-day"
                                v-for="day in weekDays"
                            >
                                {{ day }}
                            </div>
                        </div>
                        <div
                            :id="`${id}-calendar-days`"
                            :name="`${name}-calendar-days`"
                            class="calendar-days"
                        >
                            <div
                                :id="`${id}-calendar-day-${day.dayId}`"
                                :name="`${name}-calendar-day-${day.dayId}`"
                                :class="getDayClasses(day)"
                                class="calendar-day"
                                v-for="day in month.days"
                            >
                                <button
                                    v-bind="buttonProps"
                                    @click="selectDate(day.date)"
                                    :id="`${id}-calendar-day-${day.dayId}-text`"
                                    :name="`${name}-calendar-day-${day.dayId}-text`"
                                    class="calendar-day-text"
                                >
                                    {{ format(day.date, 'dd') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end flex-none">
            <Button
                :id="`${id}-submit`"
                :name="`${name}-submit`"
                @click="submit"
                class="flex-none"
                :disabled="selected.length === 0"
            >
                Submit
            </Button>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.calendar-container {
    @apply bg-gray-100 dark:bg-gray-700 space-y-3 p-4 rounded-lg flex flex-col;
}

.calendar-title {
    @apply pb-2 text-sm font-semibold relative flex-none;
    @apply text-gray-700 dark:text-gray-100;
}

.calendar-title::after {
    content: '';
    height: 3px;
    @apply absolute block bottom-0 rounded-full w-16;
    @apply bg-sky-500;
}

.calendar-shorthands {
    @apply flex-none rounded p-2;
    @apply bg-gray-200 dark:bg-gray-800;
}

.calendar-shorthand {
    @apply text-xs p-1 font-medium cursor-pointer;
    @apply text-gray-700 dark:text-gray-300;
}

.calendar {
    @apply flex space-x-4;
}

.calendar .calendar-month {
    @apply rounded-lg bg-gray-200 dark:bg-gray-800;
    width: 376px;
}

.calendar-header {
    @apply flex space-x-1 items-center;
    @apply p-1;
}

.calendar-header .calendar-header-item {
    @apply text-xs font-semibold py-1 px-2 text-center flex-1 rounded;
    @apply text-gray-600 hover:bg-gray-300;
    @apply dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-50;
}

.calendar-header .calendar-header-icon {
    @apply flex-none w-5 h-5 p-1 rounded;
    @apply fill-gray-600 hover:bg-gray-300;
    @apply dark:fill-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-50;
}

.calendar-week-days {
    @apply grid grid-cols-7 border-b;
    @apply border-gray-300 border-opacity-30;
    @apply dark:border-gray-700;
}

.calendar-week-days .calendar-week-day {
    @apply font-bold uppercase tracking-widest p-2 text-center;
    @apply text-gray-500;
    font-size: 0.6rem;
}

.calendar-days {
    @apply grid grid-cols-7;
}

.calendar-days .calendar-day {
    @apply flex items-center justify-center p-1 relative;
}

.calendar-day-text {
    @apply text-xs flex items-center justify-center p-2 w-8 h-8 cursor-pointer rounded-full;
    @apply text-gray-700 hover:bg-gray-300;
    @apply dark:text-gray-100 dark:hover:bg-gray-900;
}

.other-month .calendar-day-text {
    @apply text-gray-400 dark:text-gray-600;
}

.today .calendar-day-text {
    @apply font-bold border border-gray-400 dark:border-gray-600;
}

.in-range .calendar-day-text {
    @apply font-bold text-gray-800 dark:text-gray-100 relative z-10;
}

.end-of-range .calendar-day-text {
    @apply font-bold text-gray-800 dark:text-gray-100 relative z-10;
}

.calendar-day-text {
    @apply font-bold text-gray-800 dark:text-gray-100 relative z-10;
}

.start-of-range .calendar-day-text {
    @apply bg-gray-400 dark:bg-gray-600;
}

.end-of-range .calendar-day-text {
    @apply bg-gray-400 dark:bg-gray-600;
}

.selected .calendar-day-text {
    @apply bg-gray-400 dark:bg-gray-600;
}

.in-range:not(.start-of-range)::before {
    content: '';
    z-index: 0;
    height: calc(100% - 8px);
    @apply absolute block left-0 w-1/2 top-1;
    @apply bg-gray-500 bg-opacity-30;
}

.end-of-range:not(.start-of-range)::before {
    content: '';
    z-index: 0;
    height: calc(100% - 8px);
    @apply absolute block left-0 w-1/2 top-1;
    @apply bg-gray-500 bg-opacity-30;
}

.in-range:not(.end-of-range)::after {
    content: '';
    z-index: 0;
    height: calc(100% - 8px);
    @apply absolute block right-0 w-1/2 top-1;
    @apply bg-gray-500 bg-opacity-30;
}

.start-of-range:not(.end-of-range)::after {
    content: '';
    z-index: 0;
    height: calc(100% - 8px);
    @apply absolute block right-0 w-1/2 top-1;
    @apply bg-gray-500 bg-opacity-30;
}
</style>
