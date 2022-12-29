import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { CloseIcon } from "../assets";
import circle from "../assets/modalIllustration/circle-check-regular.svg";
import { PrimaryButton } from "./Button";

const ModalWrapper = styled.div`
width: "300px";
height: "300px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background-color: ${(props) => props.theme.formElementBackground};
color: ${(props) => props.theme.textOnFormElementBackground};
display: "flex";
flex-direction : "column";
justify-content: "center";
align-items: "center";
position: "relative";
border-radius: 8px;
`;

const ModalHeader = styled.h3`
	font-size: ${typeScale.header3};
`;
const ModalText = styled.p`
	font-size: ${typeScale.paragraph};
	max-width: 70%;
	text-align: center;
`;

const CloseModalButton = styled.button`
cursor: pointer;
background: none;
border: none;
position: absolute;
right: 25px;
top: 25px;
width: 24px;
height; 24px;
padding: 0;

`;

export const Modal = () => {
	return (
		<ModalWrapper>
			<img
				src={circle}
				style={{ width: "24px", height: "24px" }}
				alt="check"
				aria-hidden="true"
			/>
			<ModalHeader>Action réussie</ModalHeader>
			<ModalText>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, est.
			</ModalText>
			<PrimaryButton>Lorem ipsum dolor sit amet.</PrimaryButton>
			<CloseModalButton aria-label="Close modal">
				<CloseIcon />
			</CloseModalButton>
		</ModalWrapper>
	);
};
