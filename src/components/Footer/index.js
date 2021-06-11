import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {FooterWrap, FooterContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterLinksContainer, FooterLink, SocialIcons, SocialLogo, SocialMediaWrap, SocialIconLink, WebsiteRights, SocialMedia} from "./FooterElements";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">Our Goal</FooterLink>
                                <FooterLink to="/">What We Do</FooterLink>
                                <FooterLink to="/">Business Partner</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Join Us</FooterLink>
                                <FooterLink to="/">Business Advise</FooterLink>
                                <FooterLink to="/">General Inquiry</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}> InstaTrade </SocialLogo>
                            <WebsiteRights>InstaTrade {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
