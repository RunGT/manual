import React from "react";
import {
  FooterWrapper,
  FooterTop,
  FooterLogo,
  FooterColumns,
  FooterColumn,
  FooterHeading,
  FooterLink,
  FooterBottom,
  FooterDivider,
  FooterNote,
  SocialIcons,
  SocialIcon
} from "./Footer.styles";

export default function Footer() {
  return (

    // TODO: Responsive text sizing also, stack and center element when on mobile and relevant breakpoints
    <FooterWrapper>
      <FooterTop>
        <FooterLogo src="/logos/manual/symbol.svg" alt="Manual logo" />
        <FooterColumns>
          <FooterColumn>
            <FooterHeading>Product</FooterHeading>
            <FooterLink href="#">Popular</FooterLink>
            <FooterLink href="#">Trending</FooterLink>
            <FooterLink href="#">Guided</FooterLink>
            <FooterLink href="#">Products</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Company</FooterHeading>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Strategy</FooterLink>
            <FooterLink href="#">About</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Info</FooterHeading>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Customer Service</FooterLink>
            <FooterLink href="#">Get started</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Follow Us</FooterHeading>
            <SocialIcons>
              <SocialIcon src="/logos/brand/facebook.svg" alt="Facebook" />
              <SocialIcon src="/logos/brand/google.svg" alt="Google" />
              <SocialIcon src="/logos/brand/twitter.svg" alt="Twitter" />
            </SocialIcons>
          </FooterColumn>
        </FooterColumns>
      </FooterTop>
      <FooterDivider />
      <FooterBottom>
        <FooterNote>© 2021 Manual. All rights reserved
        </FooterNote>
      </FooterBottom>
    </FooterWrapper>
  );
}
