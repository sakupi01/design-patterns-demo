import { assertNonNullable } from '@/libs/assert'
import { useContext } from 'react'
import { TabsContext } from '../utils/tabsContext'

export const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error(
      `Tabs compound components cannot be rendered outside the Tabs component`
    )
  }
  assertNonNullable(context.properties)
  return context.properties
}
