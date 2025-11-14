export interface TabItem {
  id: string
  label: string
  count?: number
}

export interface TabsProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  className?: string
}

export function Tabs({ items, activeId, onChange, className = '' }: TabsProps) {
  return (
    <div className={`inline-flex items-center gap-1 rounded-lg bg-gray-100 p-1 ${className}`}>
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`
              rounded-md px-3 py-1.5 text-sm font-medium transition-all
              focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0
              ${
                isActive
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
            type="button"
          >
            {item.label}
            {item.count !== undefined && (
              <span
                className={`ml-1.5 ${isActive ? 'text-gray-600' : 'text-gray-500'}`}
              >
                ({item.count})
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export interface UnderlineTabItem {
  id: string
  label: string
}

export interface UnderlineTabsProps {
  items: UnderlineTabItem[]
  activeId: string
  onChange: (id: string) => void
  className?: string
}

export function UnderlineTabs({ items, activeId, onChange, className = '' }: UnderlineTabsProps) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="-mb-px flex gap-8" aria-label="Tabs">
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`
                whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition-colors
                focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
                ${
                  isActive
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900'
                }
              `}
              type="button"
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
