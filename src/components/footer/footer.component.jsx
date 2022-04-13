import React from 'react';
import './footer.styles.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__box footer__box--1">
					<div className="footer__brand">
						<img
							src="https://wealthdesk.in/wp-content/uploads/2021/09/landing-logo.svg"
							alt="Logo"
							className="nav__logo"
						/>
					</div>
					<div className="footer__subtext">
						WealthDesk is a platform that lets you invest in systenatuc, modern
						investment, products called WealthBaskets
					</div>
					<div className="footer__subtext">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci alias a
						ullam quasi rerum doloremque corporis repellendus ipsa in impedit!
					</div>
				</div>
				<div className="footer__box">
					<div className="footer__subhead">Contact</div>
					<div className="footer__subtext">
						Wing A, 305 3rd floor, Rustomjee Central Park, Andheri Kurla Road, Opp
						Kanakia Wall Street, Andheri East, Mumbai 400059
					</div>
					<div className="footer__subtext">supportwealthdesk.com</div>
					<div className="footer__subtext">+91 8588008835</div>
				</div>
				<div className="footer__box">
					<div className="footer__subhead">Links</div>
					<div className="footer__subtext">FAQs</div>
					<div className="footer__subtext">Help & Support</div>
					<div className="footer__subtext">Terms & Conditions</div>
					<div className="footer__subtext">Privacy Policy</div>
					<div className="footer__subtext">Disclosure</div>
				</div>
				<div className="footer__box">
					<div className="footer__subhead">Find Us On</div>
					<div className="footer__subtext">Facebook</div>
					<div className="footer__subtext">Instagram</div>
					<div className="footer__subtext">Twitter</div>
					<div className="footer__subtext">Youtube</div>
					<div className="footer__subtext">Whatsapp</div>
					<div className="footer__subtext">LinkedIn</div>
				</div>
			</div>
			<div className="footer__subs">
				&copy; 2021 Wealth Technology & Services Private Limited. CIN: U74999MH2016PTC281896
			</div>
		</div>
	);
};

export default Footer;
