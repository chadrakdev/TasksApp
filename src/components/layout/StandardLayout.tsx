import LayoutHeader from "./LayoutHeader"
import LayoutFooter from "./LayoutFooter"
import LayoutContentWrapper from "./LayoutContentWrapper"
import { ReactElement } from "react"
import { Box } from "@mui/material"

interface StandardLayoutProps {
  children: ReactElement;
}

const StandardLayout: React.FC<StandardLayoutProps> = ( {children} ) => {
  return (
      <Box sx={{ maxWidth: '1280px', textAlign: 'center'  }}>
          <LayoutHeader />
          <LayoutContentWrapper>
              {children}
          </LayoutContentWrapper>
          <LayoutFooter />
    </Box>
  )
}

export default StandardLayout
