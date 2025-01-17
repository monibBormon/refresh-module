import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, getBase64, IsEmpty } from "../helper/helper";
import { register } from "../apiRequest/api";
import { apiRequest, registerOne } from "../apiRequest/apiNew";
const RegisterForm = () => {
  let navigate = useNavigate();
  let { emailRef, passwordRef, firstNameRef, lastNameRef, phoneRef } = useRef();
  let [image, setImage] = useState("");

  let getImage = async (file) => {
    let result = await getBase64(file.target.files[0]);
    setImage(result);
  };

  let submitData = async () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let phone = phoneRef.value;
    let img = image;

    if (IsEmpty(email)) {
      ErrorToast("Email is required.");
    } else if (IsEmpty(password)) {
      ErrorToast("Password is required.");
    } else if (IsEmpty(firstName)) {
      ErrorToast("First Name is required.");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name is required.");
    } else if (IsEmpty(phone)) {
      ErrorToast("Phone is required.");
    } else if (IsEmpty(img)) {
      ErrorToast("Image is required.");
    } else {
      let reqBody = { email, password, firstName, lastName, phone, img };
      let result = await register(reqBody);

      console.log(result);

      // await registerOne(reqBody);
      // await apiRequest("/register", reqBody);

      if (result === true) {
        emailRef.value = "";
        passwordRef.value = "";
        firstNameRef.value = "";
        lastNameRef.value = "";
        phoneRef.value = "";
      }

      if (result) {
        // window.location.href = "/";
        navigate("/login");
      }
    }
  };

  return (
    <section className='bg-gray-100 min-h-screen flex justify-center items-center'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div>
                <label
                  className='font-semibold text-sm text-gray-600 pb-1 block'
                  htmlFor='fullname'
                >
                  Email
                </label>
                <input
                  ref={(input) => (emailRef = input)}
                  className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                  type='email'
                />
              </div>
              <div>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  Password
                </label>
                <input
                  ref={(input) => (passwordRef = input)}
                  className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                  type='password'
                />
              </div>
              <div>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  First Name
                </label>
                <input
                  ref={(input) => (firstNameRef = input)}
                  className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                  type='text'
                />
              </div>
              <div>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  Last Name
                </label>
                <input
                  ref={(input) => (lastNameRef = input)}
                  className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                  type='text'
                />
              </div>
              <div>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  Phone
                </label>
                <input
                  ref={(input) => (phoneRef = input)}
                  className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                  type='text'
                />
              </div>
              <div>
                <label className='font-semibold text-sm text-gray-600 pb-1 block'>
                  Image
                </label>
                <input
                  onChange={getImage}
                  className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
                  type='file'
                />
              </div>
            </div>

            <div className='mt-5'>
              <button
                onClick={submitData}
                className='py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
              >
                Register
              </button>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4' />
              <Link
                to='/login'
                className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'
                href='#'
              >
                have an account? Log in
              </Link>
              <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
