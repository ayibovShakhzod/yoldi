import { Text } from "@/components/Typography"
import { StyledInput, Wrapper } from "./style"
import useFocus from "src/hooks/useFocus"

export const NormalInput = ({ name, disabled, isError, helperText, startAdornment, endAdornment, ...otherProps }) => {
  const [inputRef, setInputFocus] = useFocus()

  const onClickWrapper = () => {
    setInputFocus()
  }

  return (
    <>
      <Wrapper onClick={onClickWrapper} isError={isError} disabled={disabled}>
        {startAdornment}
        <StyledInput disabled={disabled} ref={inputRef} id={name} {...otherProps} />
        {endAdornment}
      </Wrapper>
      {helperText && (
        <Text mb={1} type="mini">
          {helperText}
        </Text>
      )}
    </>
  )
}
