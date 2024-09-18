import React from 'react'
import { cn } from '@/utils'
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
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void

  // additional css classes
  className?: string

  children?: React.ReactNode
}
function Button(props : ButtonProps) {
  const fontSize = props.size === 'small' ? 'text-sm' : props.size === 'medium' ? 'text-base' : 'text-lg'
  const newClassName = cn(`bg-white py-2 px-4 rounded-full hover:bg-gray-200 transition-colors ${fontSize}`, props.className)
  return (
    <button className={newClassName}
      onClick={props.onClick}
    >
      {props.label || props.children} 
    </button>
  )
}

export default Button