import React from "react";
import {
  HelpSectionWrapper,
  NumberOverlay,
  ImageContainer,
  TextContent,
  Label,
  Heading,
  BodyCopy,
} from "./styles";
import Image from "next/image";

export default function HairLoss() {
  return (
    <HelpSectionWrapper>
      <ImageContainer>
        <Image
          src="/images/landing/hairloss.png"
          alt="Back of head with hair loss"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      <TextContent>
        <NumberOverlay>01</NumberOverlay>
        <Label>Hair Loss</Label>
        <Heading>Hair loss needn&apos;t be irreversible. We can help!</Heading>
        <BodyCopy>
          We&apos;re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
        </BodyCopy>
      </TextContent>
    </HelpSectionWrapper>
  );
}
