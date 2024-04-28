import { BoxProps, Text, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type ModalMenuButtonProps = BoxProps & {};

const ModalMenuButton = ({ ...rest }: ModalMenuButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button fullWidth h={30} onClick={open} {...rest}>
        Меню
      </Button>

      <Modal opened={opened} onClose={close} title="Authentication">
        <Text>Тест</Text>
      </Modal>
    </>
  );
};

export default ModalMenuButton;
