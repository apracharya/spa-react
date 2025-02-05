import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  User2,
  Calendar,
  Clock,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const BookingForm = () => {
  const services = [
    {
      id: "1",
      name: "Therapeutic Massage",
      value: "MASSAGE",
      duration: "60 min",
      price: "$85",
    },
    {
      id: "2",
      name: "Luxury Facial",
      value: "FACIAL",
      duration: "45 min",
      price: "$95",
    },
    {
      id: "3",
      name: "Detox Body Wrap",
      value: "BODY_WRAP",
      duration: "90 min",
      price: "$120",
    },
    {
      id: "4",
      name: "Hot Stone Therapy",
      value: "HOT_STONE",
      duration: "75 min",
      price: "$110",
    },
  ];

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hours = Math.floor(i / 2) + 8; // Start from 8:00 AM
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    specialRequest: "",
  });

  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      specialRequest: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.1.66:8080/appointment/create", formData)
      .then((response) => {
        toast.success("Appointment booked!");
        resetFormData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="spa-booking-container w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image and Title */}
        <div
          className="spa-booking-hero md:w-2/5 bg-cover bg-center relative p-8 flex items-end"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
          <div className="relative text-white">
            <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Respira Spa
            </h1>
            <p className="text-sm opacity-90">
              Experience pure bliss with our signature treatments
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:py-14 spa-booking-form md:w-3/5 md:px-8">
          <h1 className="text-center text-3xl mb-10 font-semibold">
            Book an Appointment
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="spa-input-group">
                <label className="spa-label flex items-center gap-2">
                  <User2 className="w-4 h-4 text-purple-500" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="spa-input"
                  required
                />
              </div>

              <div className="spa-input-group">
                <label className="spa-label flex items-center gap-2">
                  <User2 className="w-4 h-4 text-purple-500" />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="spa-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="spa-input-group">
                <label className="spa-label flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="spa-input"
                  required
                />
              </div>

              <div className="spa-input-group">
                <label className="spa-label flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-500" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="spa-input"
                  required
                />
              </div>
            </div>

            {/* Date Picker */}
            <div className="spa-input-group">
              <label className="spa-label flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-500" />
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="spa-input"
                required
              />
            </div>

            {/* Time Picker */}
            <div className="spa-input-group">
              <label className="spa-label flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-500" />
                Select Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="spa-input"
                required
              >
                <option value="">Select Time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Selection */}
            <div className="spa-service-selection">
              <label className="spa-label mb-4">Select Service</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service.id} className="spa-radio-card">
                    <input
                      type="radio"
                      name="service"
                      value={service.value}
                      checked={formData.service === service.value}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className="spa-radio-card-content">
                      <span className="font-medium">{service.name}</span>
                      <div className="text-sm text-gray-500">
                        <span>{service.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{service.price}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="spa-input-group">
              <label className="spa-label flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-500" />
                Special Requests
              </label>
              <textarea
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleInputChange}
                className="spa-textarea"
                rows={4}
              />
            </div>

            <button type="submit" className="spa-submit-button">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
