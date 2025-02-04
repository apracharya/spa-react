import React from "react";
import SigninForm from "../components/SigninForm";
import Base from "../components/main/Base";

const SigninPage = () => {
  return (
    // FIXME: Navbar ma logo ayena
    // FIXME: Kina ho kai img fetch garna, SigninForm ma relative path lagya cha
    // aru thau ma root bata ko path lagya cha
    <Base>
      <div className="bg-slate-200 dark:bg-slate-700 pt-28 pb-16 px-6 md:px-12 lg:px-24 flex justify-center">
        <SigninForm />
      </div>
    </Base>
  );
};

export default SigninPage;
