import React, { useContext } from "react";
import { Modal, Text, Row, Card } from "@nextui-org/react";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { jsNumberForAddress } from "react-jazzicon";
import ButtonDisconnectMetamask from "../ButtonConnect/ButtonDisconnectMetamask";
import { AppContext } from "@/store/AppContext";
import LinkAndCopy from "../Common/LinkAndCopy";

const ModalDisconnect = ({
  handleDisconnectMetamaskClick,
  account,
  networkName,
}: {
  handleDisconnectMetamaskClick: () => void;
  account: string;
  networkName: string ;
}) => {

  const {network} = useContext(AppContext);

  return (
    <div>
      <Modal.Header>
        <Row justify="center" align="center">
          <Jazzicon diameter={50} seed={jsNumberForAddress(`${account}`)} />
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Card variant="bordered">
          <Card.Body css={{ padding: "$2" }}>
            <Row justify='space-between'>
            <Text size={"$sm"}>
              {`${network.shortName}: ` +
                account?.toString().slice(0, 10) +
                "..." +
                account?.toString().slice(38)}
            </Text>
            <LinkAndCopy address={account} />
            </Row>
          </Card.Body>
        </Card>
        <Row justify="flex-start" align="center">
          <Text size="$xs" css={{ color: "#868686", textAlign: "left" }}>
            Wallet: Metamask <br />
            Connected network: {networkName}
          </Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row justify="center" align="center">
          <ButtonDisconnectMetamask
            handleClickDisconnect={handleDisconnectMetamaskClick}
          />
        </Row>
      </Modal.Footer>
    </div>
  );
};

export default ModalDisconnect;
