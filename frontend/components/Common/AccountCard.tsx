import React, { useContext } from "react";
import { Card, Grid, Spacer, Text } from "@nextui-org/react";
import LinkAndCopy from "@/components/Common/LinkAndCopy";
import getLittleAddress from "@/libs/getLittleAdrress";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { AppContext } from "@/store/AppContext";

const AccountCard = ({ address }: { address: string }) => {
  const { network } = useContext(AppContext);
  const shortName = network.shortName;

  return (
    <Card variant="bordered" css={{ mw: "260px" }}>
      <Card.Body>
        <Grid.Container
          direction="flex"
          wrap="no-wrap"
          alignItems="space-between"
        >
          <Grid.Container>
            <Jazzicon diameter={30} seed={jsNumberForAddress(address)} />
            <Text>
              <b>&nbsp; {shortName}:</b> {getLittleAddress(address)}
            </Text>
          </Grid.Container>
          <LinkAndCopy address={address} />
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default AccountCard;
