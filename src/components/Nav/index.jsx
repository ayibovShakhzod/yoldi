import Link from "next/link"
import { Button } from "../Button"
import { Logo, Wrapper } from "./style"
import { useRouter } from "next/router"
import { Box } from "../Box"
import { cookies } from "src/services/cookie"
import { CookieKeys } from "src/constants"
import { useEffect, useState } from "react"
import axiosClient from "src/services/apiService"
import { Text } from "../Typography"
import Avatar from "../Avatar"

export const Nav = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)

  const isLogin = !!cookies.get(CookieKeys.ACCESS_TOKEN)

  useEffect(() => {
    if (isLogin) {
      axiosClient.get("/profile").then((res) => {
        setUser(res.data)
      })
    } else {
      setUser(null)
      router.push("/login")
    }
  }, [isLogin])

  return (
    <Wrapper>
      <Box display="flex">
        <Link href="/">
          <Logo alt="yoldi" priority width={80} height={50} />
        </Link>
        <Text ml="20px">
          Разрабатываем и запускаем <br /> сложные веб проекты
        </Text>
      </Box>
      {!user && router.asPath !== "/login" && (
        <Link href="login">
          <Button btn="secondary">Войти</Button>
        </Link>
      )}
      {user?.email && (
        <Link href="/user/profile">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text mr="20px">{user?.name}</Text>
            <Avatar name={user?.name} src={user?.image?.url} />
          </Box>
        </Link>
      )}
    </Wrapper>
  )
}
