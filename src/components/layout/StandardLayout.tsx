import LayoutHeader from "./LayoutHeader"
import LayoutFooter from "./LayoutFooter"
import LayoutContentWrapper from "./LayoutContentWrapper"
import { ReactElement } from "react"


interface StandardLayoutProps {
    children: ReactElement
}

const StandardLayout: React.FC<StandardLayoutProps> = ( {children} ) => {
  return (
      <div>
          <LayoutHeader />
          <LayoutContentWrapper>
              {children}
          </LayoutContentWrapper>
          <LayoutFooter />
    </div>
  )
}

export default StandardLayout
