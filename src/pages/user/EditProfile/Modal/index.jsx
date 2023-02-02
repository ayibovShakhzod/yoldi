import { Box } from "@/components/Box"
import Modal from "@/components/Modal"
import EditForm from "../Form"

const { Text } = require("@/components/Typography")

const EditProfileModal = ({ onClose, user }) => {
  return (
    <Modal onClose={onClose}>
      <Box display="flex" flexDirection="column" width="100%">
        <Text type="title">Редактировать профиль</Text>
        <EditForm onCancel={onClose} user={user} />
      </Box>
    </Modal>
  )
}

export default EditProfileModal
