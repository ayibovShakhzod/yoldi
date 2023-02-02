import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { cookies } from "src/services/cookie"
import { CookieKeys } from "src/constants"

import { AuthFooter, AuthWrapper } from "src/pages/auth/style"
import LoginForm from "src/pages/auth/form/login"
import { Text } from "@/components/Typography"

const Login = () => {
  const router = useRouter()
  const isLogin = !!cookies.get(CookieKeys.ACCESS_TOKEN)

  useEffect(() => {
    if (isLogin) {
      router.replace("/")
    }
  }, [isLogin])

  return (
    <AuthWrapper>
      <LoginForm />
      <AuthFooter>
        <Text>
          Еще нет аккаунта? <Link href="/register">Зарегистрироваться</Link>
        </Text>
      </AuthFooter>
    </AuthWrapper>
  )
}

export default Login
