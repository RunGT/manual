import React from "react";
import {
  HelpSectionWrapper,
  NumberOverlay,
  ImageContainer,
  TextContent,
  Label,
  Heading,
  BodyCopy,
  SubHeading,
} from "./styles";
import Image from "next/image";

export default function HairLoss() {
  return (
    <>
      <SubHeading>What we can help with</SubHeading>
      <HelpSectionWrapper>
        <ImageContainer>
          {/* TODO: Image should sit above the number */}
          <Image
            src="/images/landing/hairloss.png"
            alt="Back of head with hair loss"
            fill
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>
        <TextContent>
          {/* TODO: Change font to match the design */}
          <NumberOverlay>01</NumberOverlay>
          <Label>Hair Loss</Label>
          <Heading>
            Hair loss needn&apos;t be irreversible. We can help!
          </Heading>
          <BodyCopy>
            We&apos;re working around the clock to bring you a holistic approach
            to your wellness. From top to bottom, inside and out.
          </BodyCopy>
        </TextContent>
      </HelpSectionWrapper>
    </>
  );
}
