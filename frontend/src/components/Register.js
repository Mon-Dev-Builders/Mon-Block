"use client";
import { Container } from "./assets";
import { IoArrowForwardOutline } from "react-icons/io5";
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
      <div className="flex flex-col w-96 m-auto my-48 gap-8">
        <form onSubmit={registerForm.handleSubmit} action="">
          <div className="flex flex-col gap-6">
            {isContinue ? (
              <div className="space-y-2">
                <label htmlFor="">Нууц үг</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Нууц үгээ оруулна уу"
                  className="w-full px-4 py-3 border rounded-xl text-sm"
                  onChange={registerForm.handleChange}
                  onBlur={registerForm.handleBlur}
                  value={registerForm.values.password}
                />
                {showError("email") ? (
                  <label className="text-red-600 text-xs text-left">
                    *{registerForm.errors.password}
                  </label>
                ) : null}
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label htmlFor="">Бүртгүүлэх</label>
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
                {mailConfig ? (
                  <div className="space-y-2">
                    <label htmlFor="">
                      И-мэйл хаягт ирсэн кодыг оруулна уу
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Нууц үгээ оруулна уу"
                      className="w-full px-4 py-3 border rounded-xl text-sm"
                    />
                    <div className="text-end text-sm">
                      Дахин илгээх бол{" "}
                      <button className="text-[#001ED3]">энд дарна</button> уу
                    </div>
                  </div>
                ) : null}
              </>
            )}

            <button
              onClick={() =>{!registerForm.errors["email"] && registerForm.submitCount > 0
                ? setMailConfig(true)
                : null
            
            }}
              type="submit"
              className="rounded-xl flex items-center justify-center gap-3 bg-[#002672] text-white px-4 py-3"
            >
              {mailConfig && isContinue ? "Бүртгүүлэх" : "Үргэжлүүлэх"}
              <IoArrowForwardOutline className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
