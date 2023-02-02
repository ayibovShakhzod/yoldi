import Avatar from "@/components/Avatar"
import { Box } from "@/components/Box"
import { Text } from "@/components/Typography"
import { theme } from "src/styles/theme"
import { Wrapper, Name } from "./style"

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
        flexWrap="wrap"
        alignItems={["self-start", "center"]}
        justifyContent="space-between"
      >
        <Name type="btn">{user?.name}</Name>
        <Name color={theme.gray}>{user?.email}</Name>
      </Box>
    </Wrapper>
  )
}

export default UserItem
