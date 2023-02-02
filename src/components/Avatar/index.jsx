import Image from "next/image"
import { Wrapper } from "./style"

const Avatar = ({ name = "Yoldi", src = "", size = "small", ...otherProps }) => {
  return (
    <Wrapper size={size} {...otherProps}>
      {src ? <img src={src} alt={name} /> : name.charAt(0)}
    </Wrapper>
  )
}

export default Avatar
