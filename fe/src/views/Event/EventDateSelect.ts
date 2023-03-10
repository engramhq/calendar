import {
  addLocalTimeToDate,
  addMinutesToDate,
  convertMidnightUTCToLocalDay,
  formatDateTimeInputValue,
  formatSplitDate,
} from '../../utils/dateHelpers';
import { Div, Input, Label } from '../../components/elements';
import { byId } from '../../utils/DOMutils';
import { inputStyles } from '../../../public/css/componentStyles';
import { flexAlignItemsCenter } from '../../utils/styles';

export function EventDateSelect(
  event: IEvent,
  onEventStateChange: (eventState: Partial<IEvent>) => void
) {
  const el = Div({
    styles: {
      ...flexAlignItemsCenter,
      padding: '12px',
    },
  });

  const datesContainer = Div({
    styles: { marginRight: event.allDay ? '' : 'auto' },
  });
  datesContainer.appendChild(
    event.allDay ? newStartDateInput() : newStartTimeInput()
  );

  const toLabel = Label({
    attr: { innerText: 'to' },
    styles: {
      marginRight: '8px',
    },
  });
  if (!event.allDay) {
    datesContainer.appendChild(toLabel);
    datesContainer.appendChild(endTimeInput());
  }

  const allDayContainer = Div({ styles: { ...flexAlignItemsCenter } });
  const allDayInput = Input({
    attr: {
      type: 'checkbox',
      checked: event.allDay,
      onchange: onAllDayChange,
    },
    selectors: {
      id: 'allDay',
    },
  });
  allDayContainer.appendChild(allDayInput);

  const allDayLabel = Label({
    attr: { innerText: 'All day', for: 'allDay' },
    styles: { marginLeft: '4px' },
  });
  allDayContainer.appendChild(allDayLabel);

  function dateTimeString() {
    return formatDateTimeInputValue(event.start);
  }

  function newStartTimeInput() {
    return Input({
      selectors: { id: 'start' },
      attr: {
        type: 'datetime-local',
        value: event.start ? dateTimeString() : undefined,
        required: true,
        onchange: (e) => {
          const selectedValue = (e.target as HTMLInputElement).value;
          let newStartDate = new Date(selectedValue);

          const endDateTime = byId('end') as HTMLInputElement;
          const newEndDate = addMinutesToDate(newStartDate, 30);

          const endDateTimeString = formatDateTimeInputValue(newEndDate);
          endDateTime.value = endDateTimeString;

          onEventStateChange({
            start: newStartDate,
            end: newEndDate,
          });
        },
      },
      styles: {
        ...inputStyles,
        marginRight: '8px',
      },
    });
  }

  function newStartDateInput() {
    return Input({
      selectors: { id: 'start' },
      attr: {
        type: 'date',
        value: formatSplitDate(
          convertMidnightUTCToLocalDay(event.start),
          '-',
          'yyyy-mm-dd'
        ),
        required: true,
        onchange: (e) => {
          const selectedValue = (e.target as HTMLInputElement).value;
          let newStartDate = new Date(selectedValue);
          newStartDate.setUTCHours(0, 0, 0, 0);

          onEventStateChange({
            start: newStartDate,
            end: undefined,
          });
        },
      },
      styles: {
        ...inputStyles,
        marginRight: '8px',
      },
    });
  }

  function endTimeInput() {
    return Input({
      attr: {
        type: 'datetime-local',
        value: event.end ? formatDateTimeInputValue(event.end) : '',
        required: true,
        onchange: (e) => {
          onEventStateChange({
            end: new Date((e.target as HTMLInputElement).value),
          });
        },
      },
      styles: {
        ...inputStyles,
        marginRight: '8px',
      },
      selectors: { id: 'end' },
    });
  }

  function onAllDayChange(e: Event) {
    const isChecked = (e.target as HTMLInputElement).checked;

    const dateInput = byId('start') as HTMLInputElement;
    const endDatetimeInput = byId('end') as HTMLInputElement;

    if (isChecked) {
      datesContainer.removeChild(dateInput);
      datesContainer.removeChild(toLabel);
      datesContainer.removeChild(endDatetimeInput);

      const copiedDate = new Date(event.start.getTime());
      copiedDate.setHours(0, 0, 0, 0);

      onEventStateChange({
        start: copiedDate,
        allDay: isChecked,
        end: isChecked ? undefined : event.end,
      });
      datesContainer.style.marginRight = '0';
      datesContainer.prepend(newStartDateInput());
    } else {
      const currentDate = convertMidnightUTCToLocalDay(event.start);
      const selectedDateWithCurrentTime = addLocalTimeToDate(currentDate);

      datesContainer.removeChild(dateInput);
      datesContainer.prepend(endTimeInput());
      datesContainer.prepend(toLabel);

      onEventStateChange({
        start: selectedDateWithCurrentTime,
        allDay: isChecked,
        end: undefined,
      });

      datesContainer.style.marginRight = 'auto';
      datesContainer.prepend(newStartTimeInput());
    }
  }

  el.appendChild(datesContainer);
  el.appendChild(allDayContainer);
  return el;
}
