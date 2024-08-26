"use client";
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { Container } from "./assets";
import { FcGoogle } from "react-icons/fc";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Link from "next/link";

export const LoginContent = () => {
  const [isContinue, setIsContinue] = useState(false);
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup.string().email().required("И-мэйл хаягаа оруулна уу"),
      password: yup.string().required("Нууц үгээ оруулна уу"),
    }),
  });
  const showError = (field) =>
    loginForm.submitCount > 0 && loginForm.errors[field];
  return (
    <Container>
      <div className="flex w-[557px] m-auto bg-green-200 justify-center items-center">
        <div className="flex flex-col">
          <label htmlFor="">Нэвтрэх</label>
          <input type="text" className="px-4 w-[300px]" placeholder="И-мэйл хаягаа оруулна уу" />
        </div>
        <div className="flex flex-col w-96 m-auto my-48 gap-8">
          <form onSubmit={loginForm.handleSubmit} action="">
            <div className="flex flex-col gap-4">
              <label htmlFor="">Нэвтрэх</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="И-мэйл хаягаа оруулна уу"
                className="w-full px-4 py-3 border rounded-xl text-sm"
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                value={loginForm.values.email}
              />
              {showError("email") ? (
                <label className="text-red-600 text-left">
                  {loginForm.errors.email}
                </label>
              ) : null}
              {isContinue ? (
                <>
                  <label htmlFor="">Нууц үг</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Нууц үгээ оруулна уу"
                    className="w-full px-4 py-3 border rounded-xl text-sm"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.password}
                  />
                  <div className="text-end text-sm">
                    Нууц үгээ мартсан бол{" "}
                    <button className="text-[#001ED3]">энд дарна</button> уу
                  </div>
                </>
              ) : null}
              <button
                onClick={() =>
                  !loginForm.errors["email"] && loginForm.submitCount > 0
                    ? setIsContinue(true)
                    : null
                }
                type="submit"
                className="rounded-xl flex items-center justify-center gap-3 bg-[#002672] text-white px-4 py-3"
              >
                {isContinue ? "Нэвтрэх" : "Үргэжлүүлэх"}
                <IoArrowForwardOutline className="w-5 h-5" />
              </button>
              {!isContinue ? (
                <div className="text-center space-x-2">
                  <label htmlFor="">Шинэ хэрэглэгч </label>
                  <Link href="/register">
                    <button className="text-[#FF0000] text-sm underline underline-offset-2">
                      Бүртгүүлэх
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </form>
          {!isContinue ? (
            <div className="flex flex-col text-center gap-4">
              <h2 className="text-gray-300">ЭСВЭЛ</h2>
              <button className="bg-[#4285F4] items-center justify-center gap-4 flex py-3 rounded-xl text-white">
                <FaFacebook className="w-6 h-6" />
                Facebook -ээр нэвтрэх
              </button>
              <button className="border border-black flex items-center justify-center gap-4 py-3 rounded-xl">
                <FcGoogle className="w-6 h-6" />
                Gmail -ээр нэвтрэх
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};
