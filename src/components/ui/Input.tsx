import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  className?: string
}

export function Input({ error = false, className = '', disabled, ...props }: InputProps) {
  const baseStyles =
    'w-full h-10 px-3 py-2 text-base font-normal text-gray-900 bg-white border rounded-lg transition-colors placeholder:text-gray-400 focus:outline-none disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed'

  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-0'
    : 'border-gray-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0'

  return (
    <input
      className={`${baseStyles} ${stateStyles} ${className}`}
      disabled={disabled}
      {...props}
    />
  )
}

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  className?: string
  rows?: number
}

export function Textarea({
  error = false,
  className = '',
  disabled,
  rows = 4,
  ...props
}: TextareaProps) {
  const baseStyles =
    'w-full px-3 py-2 text-base font-normal text-gray-900 bg-white border rounded-lg transition-colors placeholder:text-gray-400 focus:outline-none resize-y disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed'

  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-0'
    : 'border-gray-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0'

  return (
    <textarea
      className={`${baseStyles} ${stateStyles} ${className}`}
      disabled={disabled}
      rows={rows}
      {...props}
    />
  )
}

export interface LabelProps {
  htmlFor?: string
  children: React.ReactNode
  required?: boolean
  className?: string
}

export function Label({ htmlFor, children, required = false, className = '' }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-900 ${className}`}>
      {children}
      {required && <span className="ml-1 text-red-600">*</span>}
    </label>
  )
}

export interface HelperTextProps {
  children: React.ReactNode
  error?: boolean
  className?: string
}

export function HelperText({ children, error = false, className = '' }: HelperTextProps) {
  const colorClass = error ? 'text-red-600' : 'text-gray-500'
  return <p className={`mt-1 text-sm ${colorClass} ${className}`}>{children}</p>
}
