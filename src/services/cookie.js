import CookieProvider from "js-cookie"

export const cookies = CookieProvider
export const cookieConfig = () => {
  const date = new Date()
  date.setTime(date.getTime() + 11 * 60 * 60 * 1000)
  const isLocal = process.env.NODE_ENV !== "production"
  return {
    path: "/",
    domain: isLocal ? "localhost" : "",
    expires: date,
    sameSite: "Strict",
    secure: !isLocal,
  }
}
