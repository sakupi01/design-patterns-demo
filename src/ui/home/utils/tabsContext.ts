import { createContext } from 'react'

export type TabsContextType = {
  properties?: {
    activeTab: number
    onChange: (index: number) => void
  }
}
export const TabsContext = createContext<TabsContextType>({})
