"use client";
import { Container } from "./assets";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

export const RegisterContent = () => {
  const [isContinue, setIsContinue] = useState(false);
  const [mailConfig, setMailConfig] = useState(false);
  const registerForm = useFormik({
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
    registerForm.submitCount > 0 && registerForm.errors[field];
  return (
    <Container>
      <div className="w-full md:w-[557px] mx-auto px-4 md:px-0 py-10 md:py-16">
        <form onSubmit={registerForm.handleSubmit} className="flex flex-col gap-6">
          {/* Title */}
          <label className="text-base md:text-lg text-[#0B0B0B]">Нэвтрэх</label>

          {/* Email */}
          <div className="space-y-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="И-мэйл хаягаа оруулна уу"
              className="w-full px-4 py-3 border rounded-xl text-sm"
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
              value={registerForm.values.email}
            />
            {showError("email") ? (
              <label className="text-red-600 text-xs text-left">
                *{registerForm.errors.email}
              </label>
            ) : null}
          </div>

          {/* Continue Button */}
          <button
            onClick={() =>
              !registerForm.errors["email"] && registerForm.submitCount > 0
                ? setIsContinue(true)
                : null
            }
            type="submit"
            className="rounded-xl flex items-center justify-center gap-3 bg-[#0B1673] md:bg-[#002672] text-white px-4 py-3"
          >
            Үргэжлүүлэх
            <IoArrowForwardOutline className="w-5 h-5" />
          </button>

          {/* New user link */}
          <div className="text-center space-x-2">
            <span>Шинэ хэрэглэгч</span>
            <Link href="/register" className="text-[#FF0000] text-sm underline underline-offset-2">
              Бүртгүүлэх
            </Link>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-300">ЭСВЭЛ</div>

          {/* Social buttons */}
          <div className="flex flex-col gap-4">
            <button type="button" className="bg-[#4285F4] items-center justify-center gap-4 flex py-3 rounded-xl text-white">
              <FaFacebook className="w-6 h-6" />
              Facebook -ээр нэвтрэх
            </button>
            <button type="button" className="border border-black flex items-center justify-center gap-4 py-3 rounded-xl">
              <FcGoogle className="w-6 h-6" />
              Gmail -ээр нэвтрэх
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
