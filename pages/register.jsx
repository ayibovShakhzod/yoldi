import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { CookieKeys } from "src/constants"
import { cookies } from "src/services/cookie"

import RegisterForm from "src/pages/auth/form/register"
import { AuthFooter, AuthWrapper } from "src/pages/auth/style"
import { Text } from "@/components/Typography"

const Register = () => {
  const router = useRouter()
  const isLogin = !!cookies.get(CookieKeys.ACCESS_TOKEN)

  useEffect(() => {
    if (isLogin) {
      router.replace("/")
    }
  }, [isLogin])
  return (
    <AuthWrapper>
      <RegisterForm />
      <AuthFooter>
        <Text>
          Уже есть аккаунта? <Link href="/login">Войти</Link>
        </Text>
      </AuthFooter>
    </AuthWrapper>
  )
}

export default Register
