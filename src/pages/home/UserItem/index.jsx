import Avatar from "@/components/Avatar"
import { Box } from "@/components/Box"
import { Text } from "@/components/Typography"
import { theme } from "src/styles/theme"
import { Wrapper } from "./style"

const UserItem = ({ user }) => {
  return (
    <Wrapper>
      <Box>
        <Avatar src={user?.image?.url} name={user?.name} />
      </Box>
      <Box
        ml="20px"
        width="100%"
        display="flex"
        flexDirection={["column", "row"]}
        alignItems={["self-start", "center"]}
        justifyContent="space-between"
      >
        <Text type="btn">{user?.name}</Text>
        <Text color={theme.gray}>{user?.email}</Text>
      </Box>
    </Wrapper>
  )
}

export default UserItem
