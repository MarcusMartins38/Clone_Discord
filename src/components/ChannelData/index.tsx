import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Marcus Martins"
          date="24/06/2020"
          content="Hoje to brabão nas gameplay!"
        />

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="John Doe"
            date="24/06/2020"
            content="Just Repeating the same!"
          />
        ))}

        <ChannelMessage
          author="Guilherme Rodz"
          date="24/06/2020"
          content={
            <>
              <Mention>@Marcus Martins</Mention>, então me carrega no LoL por
              favor?
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
