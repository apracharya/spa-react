import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Base from "../components/main/Base";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  return (
    <Base>
      <div className="pt-28 pb-16 px-6 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-purple-50 to-rose-50 px-6 flex items-center justify-center">
        <BookingForm />
      </div>
    </Base>
  );
};

export default BookingPage;
