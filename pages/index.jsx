import useSWR from "swr"
import Link from "next/link"

import axiosClient from "src/services/apiService"

import { Container } from "@/components/Container"
import { Layout } from "@/components/Layout"
import { Text } from "@/components/Typography"
import { UserList } from "src/pages/home/style"
import UserItem from "src/pages/home/UserItem"

const Home = () => {
  const { data, isLoading } = useSWR("/user", axiosClient.get)
  const users = data?.data

  return (
    <Layout pt="50px">
      <Container>
        <Text type="title">Список аккаунтов</Text>
        {isLoading && "Loading..."}
        {users && (
          <UserList>
            {users.map((user) => (
              <Link href={`/user/${user.slug}`}>
                <UserItem user={user} />
              </Link>
            ))}
          </UserList>
        )}
      </Container>
    </Layout>
  )
}

export default Home
