import React from 'react';
import {
  HelpSectionWrapper,
  NumberOverlay,
  ImageContainer,
  TextContent,
  Label,
  Heading,
  BodyCopy,
} from "./styles";
import Image from 'next/image';

export default function ErecetileDysfunctionSection() {
  return (
         <HelpSectionWrapper>
          
           <TextContent>
             {/* TODO: Change font to match the design and responsive text designs */}
             <NumberOverlay $left='26px'>02</NumberOverlay>
             <Label>Erecetile dysfunction</Label>
             <Heading>
             Erections can be a tricky thing. But no need to feel down!
             </Heading>
             <BodyCopy>
              We&apos;re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
             </BodyCopy>
           </TextContent>
            <ImageContainer>
             {/* TODO: Image should sit above the number */}
             <Image
               src="/images/landing/erectiledysfunctionphoto.png"
               alt="Back of head with hair loss"
               fill
               style={{ objectFit: "cover" }}
             />
           </ImageContainer>
         </HelpSectionWrapper>
  )
}
