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
  SocialIcon,
} from "./Footer.styles";

export default function Footer() {

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/MenofManual",
      icon: "/logos/brand/facebook.svg",
    },
    {
      name: "Google",
      href: "https://www.google.com/search?q=manual+health",
      icon: "/logos/brand/google.svg",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/MenofManual",
      icon: "/logos/brand/twitter.svg",
    },
  ];

  return (
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
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Manual on ${name}`}
                >
                  <SocialIcon src={icon} alt={`${name} icon`} />
                </a>
              ))}
            </SocialIcons>
          </FooterColumn>
        </FooterColumns>
      </FooterTop>
      <FooterDivider />
      <FooterBottom>
        <FooterNote>© 2021 Manual. All rights reserved</FooterNote>
      </FooterBottom>
    </FooterWrapper>
  );
}
