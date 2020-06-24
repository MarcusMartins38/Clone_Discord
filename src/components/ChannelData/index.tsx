import React from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Marcus Martins"
          date="23/06/2020"
          content="Hoje é o meu aniversário!"
        />

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="John Doe"
            date="23/06/2020"
            content="Just Repeating the same!"
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="23/06/2020"
          content={
            <>
              <Mention>@Marcus Martins</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
