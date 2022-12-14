import Head from "next/head";
import Image from "next/image";
import formImage from "../public/form.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

export default function Home() {
  // router
  const router = useRouter();

  // formik logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "uk",
      terms: "",
    },

    // validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      terms: Yup.array().required("Terms of service must be checked."),
    }),

    // submit form
    onSubmit: (values) => {
      router.push({ pathname: "/success", query: values });
    },
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center overflow-hidden">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-full sm:w-3/4 xl:w-2/3 font-latoRegular h-screen sm:h-5/6"
        >
          <div className="flex-1 text-gray-700 p-8 xl:p-20">
            <h1 className="text-3xl sm:text-xl md:text-2xl xl:text-3xl text-center sm:text-left pb-1 lg:pb-2 font-latoBold">
              Let's get started 👋
            </h1>
            <p className="text-lg sm:text-sm md:text-base xl:text-lg text-center sm:text-left text-gray-500">
              Join our E-learning platform today and unblock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6 sm:mt-3 md:mt-5 lg:mt-6">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your name"
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
                />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="gr">Germany</option>
                  <option value="nw">Norway</option>
                </select>
              </div>
              {/* Terms of services */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 sm:mt-3 xl:mt-6 rounded-lg w-full"
              >
                Start learning today!
              </button>
            </div>
          </div>
          <div className="relative flex-1 hidden sm:flex">
            <Image
              alt="form-learn"
              src={formImage}
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
