import { Box } from "../Box"
import { Text } from "../Typography"
import { LoadingIcon, StyledButton } from "./style"

export const Button = ({ children, label, btn = "primary", loadingLabel, onClick, isLoading, ...otherProps }) => (
  <StyledButton btn={btn} onClick={(e) => !isLoading && onClick && onClick(e)} {...otherProps}>
    {isLoading ? (
      <Box display="flex" alignItems="center">
        <LoadingIcon />
        <Text type="btn">{loadingLabel && <Box ml={1}>{loadingLabel}</Box>}</Text>
      </Box>
    ) : (
      <Text type="btn">{children || label}</Text>
    )}
  </StyledButton>
)
