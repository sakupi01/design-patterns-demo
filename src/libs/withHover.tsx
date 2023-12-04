import { ComponentType, useState } from 'react'

export function withHover<P>(Component: ComponentType<P>) {
  return ({ data }: { data: P }) => {
    const [hovering, setHovering] = useState(false)

    const handleHover = (isHovering: boolean) => {
      setHovering(isHovering)
    }

    return (
      <div
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        className="relative"
      >
        {hovering && (
          <div className="absolute rounded-md bg-purple-100 p-3 mt-2">
            Do you want me?😘
          </div>
        )}
        <Component {...data} hovering={hovering} handleHover={handleHover} />
      </div>
    )
  }
}
