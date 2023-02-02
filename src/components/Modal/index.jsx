import { Wrapper, BgOverlay, Content } from "./style"

const Modal = ({ onClose, children }) => {
  return (
    <Wrapper>
      <BgOverlay onClick={onClose} />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Modal
