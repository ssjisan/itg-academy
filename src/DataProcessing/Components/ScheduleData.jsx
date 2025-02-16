import dayjs from "dayjs";
import { useState } from "react";

export default function ScheduleData() {
  const [scheduleErrorAlert, setScheduleErrorAlert] = useState(false);
  const [scheduleSuccessAlert, setScheduleSuccessAlert] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setScheduleErrorAlert(false);
    setScheduleSuccessAlert(false);
  };
  // Back Button
  const handleBack = () => {
    // Remove the date and time slot data
    setMeetingData({
      ...meetingData,
      date: "",
      timeSlot: "",
    });
  };

  // Calender Data
  const isDisabled = (date) => {
    const today = new Date();
    const day = date.day();
    const isWeekend = day === 6 || day === 5;
    const isToday = date.isSame(today, "day");
    return isWeekend || isToday;
  };
  const lastDay = dayjs().endOf("month");

  const [meetingData, setMeetingData] = useState({
    date: "",
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
    brief: "",
  });

  const handleDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).format("DD MMMM YYYY");
    setMeetingData({ ...meetingData, date: formattedDate });
  };

  // Time Slot

  const handleSlotSelect = (slot) => {
    setMeetingData({ ...meetingData, timeSlot: slot });
  };

  // Form
  const handleMeetingFormField = (e) => {
    const { id, value } = e.target;
    setMeetingData({ ...meetingData, [id]: value });
  };

  const handleMeetingRequestSubmit = async (e) => {
    e.preventDefault();
    const { date, timeSlot, name, email, phone, brief } = meetingData;

    if (!name || !email || !phone) {
      setScheduleErrorAlert(true);
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, timeSlot, name, email, phone, brief }),
    };
    const res = await fetch(
      "https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/MeetingResuest.json",
      options
    );
    if (res.ok) {
      setMeetingData({
        date: "",
        timeSlot: "",
        name: "",
        email: "",
        phone: "",
        brief: "",
      });
      setTimeout(() => {
        window.history.back(); // Go back in history after 5 seconds
      }, 2000);
      setScheduleSuccessAlert(true);
    } else {
      setScheduleErrorAlert(true);
    }
  };
  return {
    isDisabled,
    handleDateChange,
    lastDay,
    handleSlotSelect,
    meetingData,
    handleMeetingFormField,
    handleMeetingRequestSubmit,
    handleBack,
    scheduleErrorAlert,
    scheduleSuccessAlert,
    handleAlertClose,
  };
}
