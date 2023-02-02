import Avatar from "@/components/Avatar"
import { Banner } from "@/components/Banner"
import { Box } from "@/components/Box"
import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Layout } from "@/components/Layout"
import { Text } from "@/components/Typography"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { UserInfoBox } from "src/pages/user/style"
import axiosClient from "src/services/apiService"
import useSWR from "swr"

import { ReactComponent as PenIcon } from "src/assets/icons/pen.svg"
import { ReactComponent as SignOutIcon } from "src/assets/icons/sign-out.svg"
import { theme } from "src/styles/theme"
import { cookies } from "src/services/cookie"
import { CookieKeys } from "src/constants"
import EditProfileModal from "src/pages/user/EditProfile/Modal"

const User = () => {
  const router = useRouter()
  const { slug } = router.query

  const isOwner = slug === "profile"
  const url = isOwner ? "/profile" : `/user/${slug}`

  const { data, error, isLoading } = useSWR(slug ? url : null, axiosClient.get)
  const user = data?.data

  const [isOpenEditModal, setIsOpenEditModal] = useState(false)

  const closeEditModal = () => {
    setIsOpenEditModal(false)
    router.replace({
      pathname: "/user/[slug]",
      query: { slug: "profile" },
    })
  }

  const openEditModal = () => {
    setIsOpenEditModal(true)
    router.push({
      pathname: "/user/[slug]",
      query: { slug: "profile", edit: "open" },
    })
  }

  useEffect(() => {
    if (router.query.edit) {
      setIsOpenEditModal(true)
    } else {
      setIsOpenEditModal(false)
    }
  }, [router])

  useEffect(() => {
    if (error) {
      router.push("/")
    }
  }, [error])

  const logOut = () => {
    cookies.remove(CookieKeys.ACCESS_TOKEN)
    router.replace("/")
  }

  return (
    <Layout>
      <Banner src={user?.cover?.url} />
      <Container>
        <UserInfoBox>
          <Avatar name={user?.name} src={user?.image?.url} size="large" />
          {isLoading && "Loading..."}
          <Box
            mt="35px"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            alignItems="self-start"
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column" width="100%" maxWidth="600px">
              <Text type="title">{user?.name}</Text>
              <Text mt="10px" color={theme.gray}>
                {user?.email}
              </Text>
            </Box>
            {isOwner && (
              <Button mt={["10px", "10px", "10px", "0"]} btn="secondary" onClick={openEditModal}>
                <Box display="flex">
                  <Box width="25px" height="25px" mr="10px">
                    <PenIcon />
                  </Box>
                  Редактировать
                </Box>
              </Button>
            )}
          </Box>
          {user?.description && (
            <Box display="flex" flexDirection="column" maxWidth="600px" mt="30px">
              <Text>{user?.description}</Text>
            </Box>
          )}
          {isOwner && (
            <Button mt="60px" btn="secondary" padding="7px 22px" onClick={logOut}>
              <Box display="flex">
                <Box width="25px" height="25px" mr="10px">
                  <SignOutIcon />
                </Box>
                Выйти
              </Box>
            </Button>
          )}
        </UserInfoBox>
      </Container>
      {isOpenEditModal && isOwner && <EditProfileModal onClose={closeEditModal} user={user} />}
    </Layout>
  )
}

export default User
