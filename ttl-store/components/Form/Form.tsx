'use client';
import React, { KeyboardEvent, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { z } from "zod";
import axios from "axios";
import { withZodSchema } from 'formik-validator-zod';
const FormSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters',
  }).max(255, {
    message: 'Username must be at most 255 characters',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }).max(16, {
    message: 'Password must be at most 16 characters',
  }),
});

function MyForm() {
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      // submit the form
      event.currentTarget.submit();
    }
  }
  return (
    <div className={`flex bg-default-blur p-8 rounded-md`}>
      {
        loading && <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg text-center">
            <p className="text-lg font-bold">Logging in...</p>
          </div>
        </div>
      }
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={withZodSchema(FormSchema)}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true)
          try {
            let res : any = {};
            res.status = 200;
            if (res.status === 200) {
              alert('Login success')
            }

          } catch (error: any) {
            if (error.response) {
              alert(error.response.data)
            }
          } finally {
            setSubmitting(false)
            setLoading(false)
          }
        }}
        onKeyDown={handleKeyDown}
      >

        <Form className={``}
        >
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user name</label>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dark vander" required />
            <ErrorMessage component={'span'} className='text-[crimson]' name="username" />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            <ErrorMessage component={'span'} className='text-[crimson]' name="password" />
          </div>

          <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded hover:outline hover:shadow-sm " type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  )
}

export default MyForm