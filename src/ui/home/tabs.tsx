import clsx from 'clsx'

import { Children, cloneElement, useCallback, useMemo, useState } from 'react'
import { useTabsContext } from './hooks/useTabxContext'
import { TabsContext, TabsContextType } from './utils/tabsContext'

function TabList({ children }: { children: React.ReactNode }) {
  const { activeTab, onChange } = useTabsContext()
  return (
    <div className="flex w-full py-4 md:pt-5">
      <div className="flex gap-4">
        {Children.map(children, (child, index) => {
          return cloneElement(child as React.ReactElement, {
            isActive: activeTab === index,
            onClick: () => onChange(index),
          })
        })}
      </div>
    </div>
  )
}

const Tab = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => NonNullable<TabsContextType['properties']>['onChange']
}) => (
  <div
    onClick={onClick}
    className={clsx(
      `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 hover:text-yellow-500 md:flex-none md:justify-start md:p-2 md:px-3`,
      {
        'bg-purple-100 text-yellow-500': isActive,
      }
    )}
  >
    {children}
  </div>
)

function TabDisplay({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>
}

function TabDisplayContent({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const { activeTab } = useTabsContext()
  return activeTab === index ? <>{children}</> : null
}

export default function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0)
  const onChange = useCallback((index: number) => setActiveTab(index), [])
  const value = useMemo(
    () => ({ properties: { activeTab, onChange } }),
    [activeTab, onChange]
  )

  // ContextにactiveTabとonChangeを詰める
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
}

Tabs.TabList = TabList
Tabs.Tab = Tab
Tabs.TabDisplay = TabDisplay
Tabs.TabDisplayContent = TabDisplayContent
