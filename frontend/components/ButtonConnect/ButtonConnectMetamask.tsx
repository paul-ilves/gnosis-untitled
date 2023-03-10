import { Button, Text } from "@nextui-org/react";
import React from "react";

const ButtonConnectMetamask = ({
  handleClickConnect,
}: {
  handleClickConnect: () => void;
}) => {
  return (
    <Button size="lg" flat color={"#000"} onPress={handleClickConnect}>
      <Text color="error">Connect Metamask</Text>
    </Button>
  );
};

export default ButtonConnectMetamask;
