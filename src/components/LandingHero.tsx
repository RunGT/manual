import React from 'react'
import {
  CTAButton,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroSubheading,
  Logo,
  LogoWrapper,
} from "./LandingHero.styles";

export default function LandingHero() {
  return (
    <HeroContainer role="banner" aria-label="Landing hero section">
      <LogoWrapper>
        <Logo src="/logos/manual/symbol.svg" alt="Manual logo" />
      </LogoWrapper>
      <HeroContent>
        <HeroHeading>
          Be good
          <br />
          to yourself
        </HeroHeading>
        <HeroSubheading>
          We&apos;re working around the clock to bring you a holistic approach
          to your wellness. From top to bottom, inside and out.
        </HeroSubheading>
        <CTAButton>Take the quiz</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
}
