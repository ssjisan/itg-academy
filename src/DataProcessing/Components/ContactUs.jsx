// import { Alert } from "@mui/material";
import { useState } from "react";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    service: "",
    subService: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    projectBrief: "",
  });
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenErrorAlert(false);
    setOpenSuccessAlert(false);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleServices = (title) => {
    setFormData({ ...formData, service: title });
  };
  const handleSubServices = (title) => {
    setFormData({ ...formData, subService: title });
  };
  const handleBudget = (data) => {
    setFormData({ ...formData, budget: data });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      service,
      subService,
      budget,
      name,
      email,
      phone,
      company,
      position,
      projectBrief,
    } = formData;

    if (!name || !email || !phone) {
      setOpenErrorAlert(true);
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service,
        subService,
        budget,
        name,
        email,
        phone,
        company,
        position,
        projectBrief,
      }),
    };
    const res = await fetch(
      "https://insighttechbd-2c31b-default-rtdb.firebaseio.com/ClientRequest.json",
      options
    );
    if (res) {
      setOpenSuccessAlert(true);
      setFormData({
        service: "",
        subService: "",
        budget: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        projectBrief: "",
      });
    } else {
      setOpenErrorAlert(true);
    }
  };
  // console.log(formData);
  return {
    formData,
    handleChange,
    handleServices,
    handleBudget,
    handleSubmit,
    openErrorAlert,
    handleClose,
    openSuccessAlert,
    handleSubServices,
  };
}
