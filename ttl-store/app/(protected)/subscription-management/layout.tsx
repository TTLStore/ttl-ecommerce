import React from 'react'

function SubscriptionLayout(
  {
    children
  }: {
    children: React.ReactNode
  }
) {
  return (
    <div>
      <h1 className='h1-bold-big'>Subscription Management</h1>
      {children}
    </div>
  )
}

export default SubscriptionLayout