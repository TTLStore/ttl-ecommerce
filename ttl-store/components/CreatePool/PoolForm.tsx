'use client'

import React, { useReducer } from 'react'
import { SectionWrapper } from '@/hoc'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { PoolSchema } from '@/schema/pool.schema'
import type { PoolZodType } from '@/schema/pool.schema'
import { toFormikValidate } from 'zod-formik-adapter'
import { MAX_POOL_MEMBERS } from '@/constants'
import axios from 'axios'
import { Service } from '@/types'
import { roundToTwo } from '@/utils'

type Action = {
  type: string;
  field: string;
  value: any;
}

function calculatePricePerUser(price: number, maxMembers: number) {
  return roundToTwo(price / maxMembers)
}

function PoolForm({ poolInfo, setIsSubmitted }: {
  poolInfo: Service,
  setIsSubmitted: (value: boolean) => void
}) {
  const initialValues: PoolZodType = {
    poolType: poolInfo.name,
    maxMembers: poolInfo.max_users,
    isOpen: true,
    isPublic: true,
    description: '',
  };

  const [state, dispatch] = useReducer(reducer, initialValues)
  function reducer(state: PoolZodType, action: Action): PoolZodType {
    switch (action.type) {
      case 'SET_FIELD_VALUE':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  }

  const handleSubmit = async (values: PoolZodType
  ) => {
    // API call to create a new pool
    let successfullyCreated = false;
    try {
      console.log('values', values);
      await axios.post('/api/pools/', values);
      successfullyCreated = true;
    } catch (error: any) {
      alert(`Error creating pool ${error}`);
      successfullyCreated = false;
    } finally {
      if (successfullyCreated) {
        setIsSubmitted(true);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-black">Share your <span 
        className="text-indigo-500">{poolInfo.name}</span> subscription
      </h1>
      <Formik
        initialValues={state}
        validate={toFormikValidate(PoolSchema)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="text-[black]">

            <div className="mb-4">
              <label htmlFor="maxMembers" className="block text-sm font-medium text-black">
                Max Members
              </label>
              <Field
                type="number"
                id="maxMembers"
                name="maxMembers"
                value={state.maxMembers}
                onChange={(e: any) => {
                  const value = parseInt(e.target.value, 10);
                  dispatch({ type: 'SET_FIELD_VALUE', field: 'maxMembers', value });
                  setFieldValue('maxMembers', value);
                }}
                min="1"
                max={MAX_POOL_MEMBERS}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="maxMembers" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-black">
                Price for the service: &nbsp;
                <span className='text-indigo-500'>
                  ${poolInfo.price}
                </span>
              </p>
              <p>
                You get from each member: &nbsp;
                <span className='text-indigo-500'>
                  ${calculatePricePerUser(poolInfo.price, state.maxMembers)}
                </span>
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="isOpen" className="block text-sm font-medium text-black">
                Open for new members
              </label>
              <Field
                type="checkbox"
                id="isOpen"
                name="isOpen"
                checked={state.isOpen}
                onChange={(e: any) => {
                  const value = e.target.checked;
                  dispatch({ type: 'SET_FIELD_VALUE', field: 'isOpen', value });
                  setFieldValue('isOpen', value);
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="isPublic" className="block text-sm font-medium text-black">
                If you want to make this pool public, check this box
              </label>
              <Field
                type="checkbox"
                id="isPublic"
                name="isPublic"
                checked={state.isPublic}
                onChange={(e: any) => {
                  const value = e.target.checked;
                  dispatch({ type: 'SET_FIELD_VALUE', field: 'isPublic', value });
                  setFieldValue('isPublic', value);
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-black">
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                value={state.description}
                onChange={(e: any) => {
                  dispatch({ type: 'SET_FIELD_VALUE', field: 'description', value: e.target.value });
                  setFieldValue('description', e.target.value);
                }}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Creating...' : 'Create Pool'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default SectionWrapper(PoolForm, 'create-pool')