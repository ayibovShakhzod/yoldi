import { Text } from "@/components/Typography"
import { StyledTextArea, Wrapper } from "./style"
import useFocus from "src/hooks/useFocus"
import { Box } from "@/components/Box"
import { InputLabel } from "../Normal/style"

export const TextArea = ({ name, disabled, isError, helperText, label, ...otherProps }) => {
  const [inputRef, setInputFocus] = useFocus()

  const onClickWrapper = () => {
    setInputFocus()
  }

  return (
    <Box display="flex" width="100%" flexDirection="column">
      {label && <InputLabel>{label}</InputLabel>}
      <Wrapper onClick={onClickWrapper} isError={isError} disabled={disabled}>
        <StyledTextArea disabled={disabled} ref={inputRef} id={name} {...otherProps} />
      </Wrapper>
      {helperText && (
        <Text mb={1} type="mini">
          {helperText}
        </Text>
      )}
    </Box>
  )
}
