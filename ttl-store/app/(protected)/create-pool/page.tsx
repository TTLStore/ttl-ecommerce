import React from 'react'
import { auth } from '@/authentication/auth.config';
import { SectionWrapper } from '@/hoc';
import { Form } from '@/components/Form';
async function CreatePool() {
  const session = await auth();
  const userId = session.user.userId;
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const rawFormData = {
      poolType: formData.get('poolType'),
      maxMembers: formData.get('maxMembers'),
      createdBy: userId
    }
    console.log(rawFormData)
  
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">Create Pool</h1>
      <Form />
    </div>
  )
}

export default SectionWrapper(CreatePool, 'Create-Pool')