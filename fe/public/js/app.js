"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/fakeData/fakeData.ts
  var users = {
    ab: "Adam",
    ac: "Anthony",
    ew: "Emily",
    iv: "Iyris",
    kk: "Keon",
    km: "Kieran",
    lp: "Lucas"
  };
  var mettingsObject = [
    {
      id: "1",
      title: "Stand up",
      description: "this is stand up",
      start: new Date("2023-01-10T17:30:06.000Z"),
      end: new Date("2023-01-10T18:00:06.000Z"),
      allDay: false,
      users: Object.keys(users)
    },
    {
      id: "2",
      title: "Iyris/Adam",
      description: "meeting",
      start: new Date("2023-01-10T19:00:06.000Z"),
      end: new Date("2023-01-10T19:30:06.000Z"),
      allDay: false,
      users: ["ab", "iv"]
    },
    {
      id: "3",
      title: "Iyris VS Kieran",
      description: "meeting",
      start: new Date("2023-01-10T21:00:06.000Z"),
      end: new Date("2023-01-10T21:30:06.000Z"),
      allDay: false,
      users: ["km", "iv"]
    },
    {
      id: "4",
      title: "Iyris/Emily",
      description: "meeting",
      start: new Date("2023-01-10T23:30:06.000Z"),
      end: new Date("2023-01-11T00:00:06.000Z"),
      allDay: false,
      users: ["ew", "iv"]
    },
    {
      id: "5",
      title: "PJs day",
      description: "yay",
      start: new Date("2023-01-10T15:50:00.000Z"),
      allDay: true,
      users: Object.keys(users)
    },
    {
      id: "6",
      title: "Stand up on the eleventh",
      description: "this is stand up",
      start: new Date("2023-01-11T17:30:06.000Z"),
      end: new Date("2023-01-11T18:00:06.000Z"),
      allDay: false,
      users: Object.keys(users)
    },
    {
      id: "7",
      title: "Iyris/Adam on the eleventh",
      description: "meeting",
      start: new Date("2023-01-11T19:00:06.000Z"),
      end: new Date("2023-01-11T19:30:06.000Z"),
      allDay: false,
      users: ["ab", "iv"]
    },
    {
      id: "8",
      title: "Iyris VS Kieran on the eleventh",
      description: "meeting",
      start: new Date("2023-01-11T21:00:06.000Z"),
      end: new Date("2023-01-11T21:30:06.000Z"),
      allDay: false,
      users: ["km", "iv"]
    },
    {
      id: "9",
      title: "Iyris/Emily on the eleventh",
      description: "meeting",
      start: new Date("2023-01-11T23:30:06.000Z"),
      end: new Date("2023-01-12T00:00:06.000Z"),
      allDay: false,
      users: ["ew", "iv"]
    },
    {
      id: "10",
      title: "PJs day again on the eleventh",
      description: "yay",
      start: new Date("2023-01-11T15:50:00.000Z"),
      allDay: true,
      users: Object.keys(users)
    },
    {
      id: "11",
      title: "Stand up on the 14",
      description: "this is stand up",
      start: new Date("2023-01-14T17:30:06.000Z"),
      end: new Date("2023-01-14T18:00:06.000Z"),
      allDay: false,
      users: Object.keys(users)
    },
    {
      id: "12",
      title: "Iyris/Adam on the 14",
      description: "meeting",
      start: new Date("2023-01-14T19:00:06.000Z"),
      end: new Date("2023-01-14T19:30:06.000Z"),
      allDay: false,
      users: ["ab", "iv"]
    },
    {
      id: "13",
      title: "Iyris VS Kieran on the 14",
      description: "meeting",
      start: new Date("2023-01-14T21:00:06.000Z"),
      end: new Date("2023-01-14T21:30:06.000Z"),
      allDay: false,
      users: ["km", "iv"]
    },
    {
      id: "14",
      title: "Iyris/Emily on the 14",
      description: "meeting",
      start: new Date("2023-01-14T23:30:06.000Z"),
      end: new Date("2023-01-15T00:00:06.000Z"),
      allDay: false,
      users: ["ew", "iv"]
    },
    {
      id: "15",
      title: "PJs day again on the 13",
      description: "yay",
      start: new Date("2023-01-13T15:50:00.000Z"),
      allDay: true,
      users: Object.keys(users)
    }
  ];

  // src/apis/EventApi.ts
  var getEventById = (eventId) => mettingsObject.find((event) => eventId === event._id);
  var createEvent = (event) => {
    fetch(`/api/events`, {
      body: JSON.stringify(event),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  var getEventsForDay = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    fetch(`api/events?start=${newDate.toISOString()}`, {});
  };

  // src/utils/DOMutils.ts
  function setStyle(el, styles) {
    for (const key of Object.keys(styles)) {
      const elementKey = key;
      const stylesKey = styles[key];
      if (stylesKey)
        el.style[elementKey] = stylesKey;
    }
  }
  function onClick(el, handler) {
    return el.addEventListener("click", handler, true);
  }

  // src/components/elements/Element.ts
  function Element(props) {
    const el = document.createElement(props.tag);
    if (!(props == null ? void 0 : props.selectors) && !(props == null ? void 0 : props.attr) && !(props == null ? void 0 : props.styles)) {
      return el;
    }
    const { selectors, attr, styles } = props;
    if (selectors) {
      for (const selector in selectors) {
        const attr2 = selectors[selector];
        attr2 && el.setAttribute(selector, attr2);
      }
    }
    if (attr) {
      Object.keys(attr).forEach((key) => {
        el[key] = attr[key];
      });
    }
    if (styles) {
      setStyle(el, styles);
    }
    return el;
  }

  // src/components/elements/Div.ts
  function Div(props) {
    return Element(__spreadValues({
      tag: "div"
    }, props));
  }

  // src/utils/HistoryUtils.ts
  function setURL(url) {
    history.pushState({}, "", url);
    window.dispatchEvent(new Event("popstate"));
  }

  // src/components/elements/Button.ts
  function Button(props) {
    return Element(__spreadValues({
      tag: "button"
    }, props));
  }

  // src/components/elements/Input/Input.ts
  function Input(props) {
    return Element(__spreadValues({
      tag: "input"
    }, props));
  }

  // src/components/elements/Textarea.ts
  function Textarea(props) {
    return Element(__spreadValues({
      tag: "textarea"
    }, props));
  }

  // src/utils/styles.ts
  var basics = {
    whiteColor: "#fff"
  };
  var fonts = {
    regular: "Outfit"
  };
  var flexAlignItemsCenter = {
    display: "flex",
    alignItems: "center"
  };

  // src/components/MultiSelect.ts
  function MultiSelect(optionEntries, onChange) {
    const selectEl = document.createElement("select");
    setStyle(selectEl, {
      minHeight: "228px",
      minWidth: "100px",
      fontSize: "14px"
    });
    selectEl.multiple = true;
    selectEl.required = true;
    optionEntries.forEach(([key, value]) => {
      const option = document.createElement("option");
      option.value = key;
      option.innerText = value;
      option.style.padding = "8px";
      option.onchange = onChange;
      selectEl.appendChild(option);
    });
    return selectEl;
  }

  // src/components/elements/Label.ts
  function Label(props) {
    return Element(__spreadValues({
      tag: "label"
    }, props));
  }

  // src/components/elements/Header.ts
  function Header(props) {
    const headerEl = document.createElement(props.headerType);
    headerEl.innerText = props.text;
    if (props.styles) {
      setStyle(headerEl, props.styles);
    }
    return headerEl;
  }

  // src/utils/dateHelpers.ts
  var timeOptions = {
    hour: "numeric",
    minute: "numeric"
  };
  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var dateTimeOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timeZoneName: "short"
  };
  var formatDateTime = (locales, options, time) => {
    return new Intl.DateTimeFormat(locales, options).format(time);
  };
  var formatSplitDate = (date, divider, format) => {
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const twoDigitsMonth = month[1] ? month : `0${month}`;
    const day = date.getDate();
    const twoDigitsDay = day.toString()[1] ? day : `0${day}`;
    const dateFormatting = {
      yyyy: fullYear,
      mm: twoDigitsMonth,
      dd: twoDigitsDay
    };
    const dateFormat = format.split("-");
    const first = dateFormatting[dateFormat[0]];
    const second = dateFormatting[dateFormat[1]];
    const third = dateFormatting[dateFormat[2]];
    const dateString = `${first}${divider}${second}${divider}${third}`;
    return dateString;
  };
  var formatDateTimeInputValue = (date) => {
    const dateString = formatSplitDate(new Date(), "-", "yyyy-mm-dd");
    const hours = date.getHours();
    const twoDigitsHours = hours.toString()[1] ? hours : `0${hours}`;
    const minutes = date.getMinutes();
    const twoDigitsMinutes = minutes.toString()[1] ? minutes : `0${minutes}`;
    const dateTimeString = `${dateString}T${twoDigitsHours}:${twoDigitsMinutes}`;
    return dateTimeString;
  };

  // src/views/AddEvent/EventDateSelect.ts
  function DateSelect(eventState2, onEventStateChange) {
    const dateContainer = Div({ styles: { padding: "12px" } });
    const startTimeInputEl = (type, value) => Input({
      selectors: { id: "start" },
      attr: {
        type,
        value,
        required: true,
        onchange: (e) => {
          onEventStateChange({
            start: new Date(e.target.value)
          });
        }
      },
      styles: {
        marginRight: "12px"
      }
    });
    const dateTimeString = formatDateTimeInputValue(eventState2.start);
    const startTimeInput = startTimeInputEl("datetime-local", dateTimeString);
    dateContainer.appendChild(startTimeInput);
    const toLabel = Label({
      attr: { innerText: "to" },
      styles: {
        marginRight: "12px"
      }
    });
    dateContainer.appendChild(toLabel);
    const endTimeInput = Input({
      attr: {
        type: "datetime-local",
        required: true,
        onchange: (e) => {
          onEventStateChange({
            end: new Date(e.target.value)
          });
        }
      },
      styles: {
        marginRight: "12px"
      }
    });
    dateContainer.appendChild(endTimeInput);
    const allDayInput = Input({
      attr: {
        type: "checkbox",
        checked: eventState2.allDay,
        onchange: (e) => {
          const isChecked = e.target.checked;
          onEventStateChange({
            allDay: isChecked,
            end: isChecked ? void 0 : eventState2.end
          });
          const dateInput = document.getElementById("start");
          if (!dateInput) {
            return;
          }
          if (isChecked) {
            dateContainer.removeChild(dateInput);
            dateContainer.removeChild(toLabel);
            dateContainer.removeChild(endTimeInput);
            const dateString = formatSplitDate(
              eventState2.start,
              "-",
              "yyyy-mm-dd"
            );
            const startDate = startTimeInputEl("date", dateString);
            dateContainer.prepend(startDate);
          } else {
            dateContainer.removeChild(dateInput);
            dateContainer.prepend(endTimeInput);
            dateContainer.prepend(toLabel);
            dateContainer.prepend(startTimeInput);
          }
        }
      },
      selectors: {
        id: "allDay"
      }
    });
    dateContainer.appendChild(allDayInput);
    const allDayLabel = Label({
      attr: { innerText: "All day", for: "allDay" }
    });
    dateContainer.appendChild(allDayLabel);
    return dateContainer;
  }

  // src/views/AddEvent/AddEvent.ts
  var eventState = {
    title: "",
    description: "",
    start: new Date(),
    allDay: false,
    users: []
  };
  function setEventState(newValue) {
    const modifiedEvent = __spreadValues(__spreadValues({}, eventState), newValue);
    return modifiedEvent;
  }
  function AddEvent() {
    const form = document.createElement("form");
    const addEventHeader = Header({ text: "Add event", headerType: "h3" });
    form.appendChild(addEventHeader);
    const titleContainer = Div({ styles: { padding: "12px" } });
    const titleInput = Input({
      attr: {
        name: "title",
        value: eventState["title"],
        onchange: (e) => {
          setEventState({ title: e.target.value });
        },
        placeholder: "Title",
        required: true
      }
    });
    titleContainer.appendChild(titleInput);
    form.appendChild(titleContainer);
    const descriptionContainer = Div({
      styles: { padding: "12px", display: "flex", flexDirection: "column" }
    });
    const descriptionLabel = Label({ attr: { innerText: "Description" } });
    const descriptionInput = Textarea({
      attr: {
        name: "description",
        value: eventState["description"],
        onchange: (e) => {
          setEventState({
            description: e.target.value
          });
        },
        placeholder: "Write something..."
      }
    });
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);
    form.appendChild(descriptionContainer);
    const dateContainer = DateSelect(eventState, setEventState);
    form.appendChild(dateContainer);
    const guestsContainer = Div({
      styles: { display: "flex", padding: "12px" }
    });
    const guestsLabel = Label({
      attr: { innerText: "Guests" },
      styles: {
        marginRight: "12px"
      }
    });
    guestsContainer.appendChild(guestsLabel);
    const usersKeyValuePairs = Object.entries(users);
    const usersSelectEl = MultiSelect(
      usersKeyValuePairs,
      () => onUsersSelectChange(usersSelectEl.selectedOptions)
    );
    guestsContainer.appendChild(usersSelectEl);
    form.appendChild(guestsContainer);
    const guestsLabelInfo = Label({
      attr: {
        innerText: "* Hold down the control (ctrl) button to select multiple options. For Mac: Hold down the command button to select multiple options."
      },
      styles: {
        padding: "12px"
      }
    });
    form.append(guestsLabelInfo);
    const buttons = Div({
      styles: { display: "flex", justifyContent: "flex-end", marginTop: "24px" }
    });
    const buttonStyles = {
      borderRadius: "4px",
      padding: "8px 12px",
      fontSize: "14px",
      border: "none",
      background: "#79B2AF",
      color: basics.whiteColor,
      minWidth: "100px",
      minHeight: "36px",
      fontFamily: fonts.regular,
      letterSpacing: "1",
      marginLeft: "24px",
      cursor: "pointer"
    };
    const cancelButton = Button({
      attr: {
        textContent: "Cancel"
      }
    });
    onClick(cancelButton, () => setURL(`/`));
    setStyle(cancelButton, buttonStyles);
    const saveButton = Button({
      attr: {
        textContent: "Save",
        type: "submit"
      }
    });
    setStyle(saveButton, buttonStyles);
    buttons.appendChild(cancelButton);
    buttons.appendChild(saveButton);
    form.appendChild(buttons);
    form.onsubmit = (e) => {
      e.preventDefault();
      let start = eventState.start;
      if (eventState.allDay) {
        const midnightDate = new Date(eventState.start).setUTCHours(0, 0, 0, 0);
        start = new Date(midnightDate);
        delete eventState.end;
      }
      eventState = __spreadProps(__spreadValues({}, eventState), { start });
      console.log("new event submitted", eventState);
      createEvent(eventState);
      setURL(`/`);
    };
    return form;
  }
  function onUsersSelectChange(selectedOptions) {
    var _a;
    const selectedUsersKeys = (_a = Array.from(selectedOptions)) == null ? void 0 : _a.map((selectedUser) => {
      return selectedUser.value;
    });
    setEventState({ users: selectedUsersKeys });
  }

  // src/components/elements/Span.ts
  function Span(attributes) {
    const span = document.createElement("span");
    for (const attribute in attributes) {
      const attr = attributes[attribute];
      attr && span.setAttribute(attribute, attr);
    }
    return span;
  }

  // src/views/Day/Day.ts
  function Day(date) {
    let today = date ? new Date(date) : new Date();
    const el = Div();
    const datesHeader = Div({
      styles: __spreadProps(__spreadValues({}, flexAlignItemsCenter), {
        justifyContent: "space-between",
        margin: "12px 20px"
      })
    });
    const title = Header({
      text: new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(today)
      ),
      headerType: "h1"
    });
    setStyle(title, {
      padding: "12px",
      margin: "12px 20px"
    });
    const prevDay = Button({
      attr: {
        textContent: "prev",
        onclick: () => goToSelectedDayView(today, "previous")
      }
    });
    const nextDay = Button({
      attr: {
        textContent: "next",
        onclick: () => goToSelectedDayView(today, "next")
      }
    });
    datesHeader.appendChild(prevDay);
    datesHeader.appendChild(title);
    datesHeader.appendChild(nextDay);
    el.appendChild(datesHeader);
    const meetingsList = Div();
    const init = () => __async(this, null, function* () {
      const events = yield getEventsForDay(today);
      return events;
    });
    init();
    const todaysEvents = mettingsObject.filter((meeting) => {
      const eventDate = new Date(meeting.start);
      const inputDate = eventDate.toISOString().split("T")[0];
      const todaysDate = new Date(today).toISOString().split("T")[0];
      return inputDate == todaysDate;
    });
    if (todaysEvents.length) {
      todaysEvents.sort(
        (date1, date2) => date1.start.valueOf() - date2.start.valueOf()
      );
      todaysEvents.forEach((meeting) => {
        if (meeting.allDay) {
          const allDayEventStyles = {
            borderRadius: "4px",
            padding: "12px",
            margin: "12px 20px",
            width: "auto",
            backgroundColor: "papayawhip",
            cursor: "pointer"
          };
          const allDayEvents = createEventCard(
            meeting,
            allDayEventStyles,
            () => goToEventPage(meeting.id)
          );
          el.appendChild(allDayEvents);
        }
        if (meeting.start && meeting.end) {
          const meetingContainer = Div({
            styles: __spreadValues({
              borderRadius: "4px",
              margin: "12px 20px",
              gridGap: "20px"
            }, flexAlignItemsCenter)
          });
          const times = Div({
            styles: {
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "auto",
              maxWidth: "160px",
              width: "100%"
            }
          });
          const start = Span();
          start.innerText = `${formatDateTime(
            "en-CA",
            timeOptions,
            meeting.start
          )} - `;
          times.appendChild(start);
          const end = Span();
          end.innerText = ` ${formatDateTime("en-CA", timeOptions, meeting.end)}`;
          times.appendChild(end);
          meetingContainer.appendChild(times);
          const eventStyles = {
            borderRadius: "4px",
            padding: "12px",
            width: "100%",
            backgroundColor: "#d2e7de",
            cursor: "pointer"
          };
          const event = createEventCard(
            meeting,
            eventStyles,
            () => goToEventPage(meeting.id)
          );
          meetingContainer.appendChild(event);
          meetingsList.appendChild(meetingContainer);
        }
      });
      el.appendChild(meetingsList);
    } else {
      const noEventsLabel = Div({
        attr: { innerText: "No events today" },
        styles: { margin: "12px 20px" }
      });
      el.appendChild(noEventsLabel);
    }
    return el;
  }
  function createEventCard(meeting, styles, callback) {
    const event = Div({ styles });
    const title = Header({ text: meeting.title, headerType: "h3" });
    event.appendChild(title);
    if (meeting.description) {
      const description = Div({ attr: { innerText: meeting.description } });
      event.appendChild(description);
    }
    onClick(event, callback);
    return event;
  }
  function goToEventPage(eventId) {
    setURL(`/events/${eventId}`);
  }
  function goToSelectedDayView(currentDayView, direction) {
    const moveDay = direction === "previous" ? currentDayView.getDate() - 1 : currentDayView.getDate() + 1;
    const previousDay = currentDayView.setDate(moveDay);
    currentDayView = new Date(previousDay);
    const dateString = formatSplitDate(currentDayView, "/", "yyyy-mm-dd");
    setURL(`/day/${dateString}`);
  }

  // src/components/elements/Input/CheckboxInput.ts
  function CheckboxInput(props) {
    const input = document.createElement("input");
    input.type = "checkbox";
    if (props) {
      Object.keys(props).forEach((key) => {
        const propsKey = key;
        input[propsKey] = props[propsKey];
      });
    }
    return input;
  }

  // src/views/EditEvent/EditEvent.ts
  function EditEvent(event) {
    let formValues = event;
    const form = document.createElement("form");
    const eventCard = Div({
      styles: {
        backgroundColor: "papayawhip",
        borderRadius: "4px",
        padding: "12px"
      }
    });
    const title = Input({
      attr: {
        value: event.title,
        name: "title",
        onchange: (e) => onFormValueChange("title", e.target.value)
      }
    });
    eventCard.appendChild(title);
    if (event.description) {
      const descriptionContainer = Div({
        styles: { display: "flex", padding: "4px 8px" }
      });
      const descriptionLabel = Div({ attr: { innerText: "Description:" } });
      const descriptionInput = Textarea({
        innerText: event.description,
        onchange: (e) => onFormValueChange(
          "description",
          e.target.value
        )
      });
      descriptionContainer.appendChild(descriptionLabel);
      descriptionContainer.appendChild(descriptionInput);
      eventCard.appendChild(descriptionContainer);
    }
    const dates = Div({ styles: { display: "flex", padding: "4px 8px" } });
    if (event.allDay) {
      const day = Div();
      day.innerText = formatDateTime("en-CA", dateOptions, event.start);
      dates.appendChild(day);
    } else {
      const times = Div({ styles: { display: "flex" } });
      const startDateInput = Input({
        attr: {
          value: `${formatDateTime("en-CA", dateOptions, event.start)}`,
          onchange: (e) => onFormValueChange("start", e.target.value)
        }
      });
      times.appendChild(startDateInput);
      const startTimeInput = Input({
        attr: {
          value: `${formatDateTime("en-CA", timeOptions, event.start)}`,
          onchange: (e) => onFormValueChange("start", e.target.value)
        }
      });
      times.appendChild(startTimeInput);
      const to = Div({ attr: { innerText: "to" } });
      times.appendChild(to);
      const endDateInput = Input({
        attr: {
          value: `${formatDateTime("en-CA", dateOptions, event.end)}`,
          onchange: (e) => onFormValueChange("end", e.target.value)
        }
      });
      times.appendChild(endDateInput);
      const endTimeInput = Input({
        attr: {
          value: `${formatDateTime("en-CA", timeOptions, event.end)}`,
          onchange: (e) => onFormValueChange("end", e.target.value)
        }
      });
      times.appendChild(endTimeInput);
      dates.appendChild(times);
    }
    const allDayContainer = Div({
      styles: { display: "flex", padding: "4px 8px" }
    });
    const allDayInput = CheckboxInput({
      id: `allDay_${event.id}`,
      checked: !!event.allDay,
      onchange: () => console.log("Changed")
    });
    allDayContainer.appendChild(allDayInput);
    const allDayLabel = document.createElement("label");
    allDayLabel.htmlFor = `allDay_${event.id}`;
    allDayLabel.innerText = "All day";
    allDayContainer.appendChild(allDayLabel);
    dates.appendChild(allDayContainer);
    eventCard.appendChild(dates);
    const guestsContainer = Div({
      styles: { display: "flex", padding: "4px 8px" }
    });
    const guestsLabel = document.createElement("label");
    guestsLabel.innerText = "Guests:";
    guestsContainer.appendChild(guestsLabel);
    eventCard.appendChild(guestsContainer);
    const submit = Div({
      styles: { display: "flex", justifyContent: "flex-end", marginTop: "24px" }
    });
    const buttonStyles = {
      borderRadius: "4px",
      padding: "8px 12px",
      fontSize: "14px",
      border: "none",
      background: "#79B2AF",
      color: basics.whiteColor,
      minWidth: "100px",
      minHeight: "36px",
      fontFamily: fonts.regular,
      letterSpacing: "1",
      marginLeft: "24px",
      cursor: "pointer"
    };
    const cancelButton = Button({
      text: "Cancel"
    });
    onClick(cancelButton, () => setURL(`/events/${event.id}`));
    setStyle(cancelButton, buttonStyles);
    const saveButton = Button({
      text: "Save"
    });
    setStyle(saveButton, buttonStyles);
    onClick(saveButton, (e) => {
      e.preventDefault();
      console.log("fv", formValues);
    });
    submit.append(cancelButton);
    submit.append(saveButton);
    form.append(eventCard);
    form.append(submit);
    function onFormValueChange(name, value) {
      formValues = __spreadProps(__spreadValues({}, formValues), {
        [name]: value
      });
    }
    return form;
  }

  // src/views/Event/Event.ts
  function Event2(event) {
    const el = Div({ styles: { padding: "12px" } });
    const title = Header({
      text: event.title,
      headerType: "h3",
      styles: { padding: "4px 0" }
    });
    el.appendChild(title);
    if (event.description) {
      const description = Div({ styles: { padding: "4px 0" } });
      description.innerText = event.description;
      el.appendChild(description);
    }
    if (event.allDay) {
      const day = Div({ styles: { padding: "4px 0" } });
      day.innerText = `${formatDateTime("en-CA", dateOptions, event.start)}`;
      el.appendChild(day);
    }
    if (event.start && event.end) {
      const start = Div({
        attr: {
          innerText: `Start: ${formatDateTime(
            "en-CA",
            dateTimeOptions,
            event.start
          )}`
        },
        styles: { padding: "4px 0" }
      });
      el.appendChild(start);
      const end = Div({ styles: { padding: "4px 0" } });
      end.innerHTML = `End: ${formatDateTime(
        "en-CA",
        dateTimeOptions,
        event.end
      )}`;
      el.appendChild(end);
    }
    const guestsIinnerText = "Guests: " + event.users.map((user) => users[user]).join(", ");
    const guests = Div({
      attr: { innerText: guestsIinnerText },
      styles: { padding: "4px 0" }
    });
    el.appendChild(guests);
    return el;
  }

  // src/views/Header/Header.ts
  var headerTopLeftButton = {
    home: "",
    day: "Go to today",
    edit: "< Back",
    //hide edit until I get back to edit event view
    event: "< Back",
    new: "Home"
  };
  function Header2(view) {
    var _a;
    const isHome = view === "home";
    const isEvent = view === "event";
    const isEditEvent = view === "edit";
    const newEvent = view === "new";
    const windowPath = window.location.pathname;
    const pathSplit = windowPath.split("/");
    const eventId = (_a = pathSplit[pathSplit.length - 1]) == null ? void 0 : _a.toString();
    const el = Div({
      styles: __spreadProps(__spreadValues({
        height: "80px",
        backgroundColor: basics.whiteColor,
        boxShadow: "0px 4px 4px rgba(238, 238, 238, 0.25)",
        margin: "12px 20px"
      }, flexAlignItemsCenter), {
        justifyContent: "space-between"
      })
    });
    const onLeftButtonClick = isEvent ? () => history.back() : () => setURL(`/`);
    const leftButton = Button({
      attr: {
        textContent: headerTopLeftButton[view],
        onclick: (e) => {
          e.preventDefault();
          onLeftButtonClick();
        }
      }
    });
    !isHome && el.append(leftButton);
    if (!isEditEvent && !newEvent) {
      const rightButton = Button({
        attr: {
          textContent: "Add Event",
          onclick: (e) => {
            e.preventDefault();
            setURL("/new");
          }
        },
        styles: {
          marginLeft: "auto"
        }
      });
      el.append(rightButton);
    }
    return el;
  }

  // src/views/Router.ts
  function Router() {
    const router = Div();
    setStyle(router, {
      flexGrow: "1"
    });
    function init() {
      handleRouteUpdated();
    }
    window.addEventListener("popstate", handleRouteUpdated);
    function handleRouteUpdated() {
      var _a;
      router.innerHTML = "";
      const path = window.location.pathname;
      const isHome = path === "/";
      const addNewEventPath = path === "/new";
      const isDay = path.includes("day");
      let eventObject;
      let eventsDate = new Date().toDateString();
      if (!isHome && !addNewEventPath && !isDay) {
        const pathSplit = path.split("/");
        const eventId = (_a = pathSplit[pathSplit.length - 1]) == null ? void 0 : _a.toString();
        eventObject = getEventById(eventId);
        if (!eventObject) {
          setURL("/");
        }
      }
      if (isDay) {
        const splitDate = path.split("/");
        const fullYear = splitDate[2];
        const month = splitDate[3];
        const day = splitDate[4];
        eventsDate = isDay ? `/day/${fullYear}/${month}/${day}` : "/";
      }
      switch (path) {
        case "/":
          router.append(Header2("home"));
          router.append(Day());
          break;
        case eventsDate:
          router.append(Header2("day"));
          router.append(Day(eventsDate));
          break;
        case `/events/${eventObject == null ? void 0 : eventObject.id}`:
          if (eventObject) {
            router.append(Header2("event"));
            router.append(Event2(eventObject));
          }
          break;
        case `/edit/events/${eventObject == null ? void 0 : eventObject.id}`:
          if (eventObject) {
            router.append(Header2("edit"));
            router.append(EditEvent(eventObject));
          }
          break;
        case `/new`:
          console.log("passing as new");
          router.append(Header2("new"));
          router.append(AddEvent());
          break;
        default:
          break;
      }
    }
    init();
    return router;
  }

  // src/app.ts
  function run() {
    return __async(this, null, function* () {
      const root = document.getElementById("root");
      if (root) {
        const router = Router();
        root.append(router);
      }
    });
  }
  run();
})();
