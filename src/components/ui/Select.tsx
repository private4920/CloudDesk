import type { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  className?: string
  children: React.ReactNode
}

export function Select({ error = false, className = '', disabled, children, ...props }: SelectProps) {
  const baseStyles =
    'w-full h-10 px-3 py-2 pr-10 text-base font-normal text-gray-900 bg-white border rounded-lg transition-colors appearance-none focus:outline-none disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed'

  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-0'
    : 'border-gray-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0'

  return (
    <div className="relative">
      <select
        className={`${baseStyles} ${stateStyles} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
      {/* Chevron icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

export interface SelectOptionProps {
  value: string | number
  children: React.ReactNode
  disabled?: boolean
}

export function SelectOption({ value, children, disabled }: SelectOptionProps) {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  )
}
