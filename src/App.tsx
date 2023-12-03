import DashBoard from './dashboard'
import ProductGalleryContainer from './product-gallery/container'
import ProductListContainer from './product-list/container'
import Tabs from './ui/home/tabs'

export default function App() {
  const tabs = [
    { id: 0, name: 'Dashboard', icon: '🏠', content: <DashBoard /> },
    {
      id: 1,
      name: 'Product List',
      icon: '📝',
      content: <ProductListContainer />,
    },
    {
      id: 2,
      name: 'Product Gallery',
      icon: '🏛️',
      content: <ProductGalleryContainer />,
    },
  ]
  return (
    <Tabs>
      <Tabs.TabList>
        {tabs.map((tab) => {
          return (
            <Tabs.Tab key={tab.id}>
              {tab.icon}
              <p className="hidden md:block">{tab.name}</p>
            </Tabs.Tab>
          )
        })}
      </Tabs.TabList>
      <Tabs.TabDisplay>
        {tabs.map((tab) => {
          return (
            <Tabs.TabDisplayContent key={tab.id} index={tab.id}>
              {tab.content}
            </Tabs.TabDisplayContent>
          )
        })}
      </Tabs.TabDisplay>
    </Tabs>
  )
}
