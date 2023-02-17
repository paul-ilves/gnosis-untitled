import { Button, Text } from "@nextui-org/react";

export default function NewTransactionButton() {
  return (
    <Button
      rounded
      css={{
        background: "#000",
        color: "#fff",
        width: "300px",
        maxWidth: "260px",
      }}
      auto
    >
      <Text css={{ letterSpacing: "$wide" }} color="white" weight={"normal"}>
        New transaction
      </Text>
    </Button>
  );
}