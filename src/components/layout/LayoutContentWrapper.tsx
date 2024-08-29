import { ReactElement } from "react"

interface LayoutContentWrapperProps {
  children: ReactElement
}

const LayoutContentWrapper: React.FC<LayoutContentWrapperProps> = ( {children} ) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default LayoutContentWrapper
