import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
 
	<Box>
	<h1 style={{ color: "black",
				textAlign: "center",
				marginTop: "-50px",
        marginBottom:'20px' }}>
          UpgradeYourSkills
		
	</h1>
  <hr></hr>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink>More information</FooterLink>
		
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
		
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
		
		</Column>
		<Column>
    <Heading>Social Media</Heading>
   
        <a className=" facebook h-50 w-50" style={{marginLeft:'2em',color:'black',marginTop:'1em'}} href="https://www.facebook.com/"><FaFacebook size="3.5em"  /></a>
     
        
      
        
        <a className="intagram" style={{marginLeft:'2em', color:'black',marginTop:'3em'}} href="#"><FaInstagram size="3.5em" /></a>

        
        
			
		
			
		</Column>
		</Row>
  
      

	</Container>
	</Box>
);
};
export default Footer;

