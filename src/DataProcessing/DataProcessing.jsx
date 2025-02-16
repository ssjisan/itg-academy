import { createContext } from "react";
import PropTypes from "prop-types";
import MobileDrawer from "./Components/MobileDrawer";
import Testimonial from "./Components/Testimonial";
import ScrollTop from "./Components/ScrollTop";
import ContactUs from "./Components/ContactUs";
import ImageLoader from "./Components/ImageLoader";
import ScheduleData from "./Components/ScheduleData";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const { toggleDrawer, open, handleDrawerClose } = MobileDrawer();
  const { sliderRef, nextSlide, prevSlide } = Testimonial();
  const { goToTop } = ScrollTop();
  const {
    formData,
    handleChange,
    handleServices,
    handleBudget,
    handleSubmit,
    openErrorAlert,
    handleClose,
    openSuccessAlert,
    handleSubServices,
  } = ContactUs();
  const { handleLoad, loaded } = ImageLoader();
  const {
    showConfirmation,
    isDisabled,
    handleDateChange,
    lastDay,
    openScheduleDrawer,
    handleScheduleDrawerOpen,
    handleScheduleDrawerClose,
    handleSlotSelect,
    selectedSlot,
    meetingData,
    handleMeetingFormField,
    handleMeetingRequestSubmit,
    handleBack,
    scheduleErrorAlert,
    scheduleSuccessAlert,
    handleAlertClose,
  } = ScheduleData();
  return (
    <DataContext.Provider
      value={{
        // Drawer for mobile
        toggleDrawer,
        open,
        handleDrawerClose,
        // Testimonial Controller
        sliderRef,
        nextSlide,
        prevSlide,
        // Scroll Top
        goToTop,
        // Contact Us Form Data
        formData,
        handleChange,
        handleServices,
        handleBudget,
        handleSubmit,
        openErrorAlert,
        handleClose,
        openSuccessAlert,
        handleSubServices,
        // Image Loader
        handleLoad,
        loaded,
        // Schedule Modal Data
        isDisabled,
        handleDateChange,
        lastDay,
        handleSlotSelect,
        selectedSlot,
        meetingData,
        handleMeetingFormField,
        handleMeetingRequestSubmit,
        showConfirmation,
        openScheduleDrawer,
        handleScheduleDrawerOpen,
        handleScheduleDrawerClose,
        handleBack,
        scheduleErrorAlert,
        scheduleSuccessAlert,
        handleAlertClose,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
};
