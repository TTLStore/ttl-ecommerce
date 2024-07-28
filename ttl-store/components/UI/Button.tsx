import React from 'react'

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}
function Button(props : ButtonProps) {
  const fontSize = props.size === 'small' ? 'text-sm' : props.size === 'medium' ? 'text-base' : 'text-lg'

  return (
    <button className={`bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors ${fontSize}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

export default Button