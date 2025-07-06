import { Theme } from "@emotion/react";

const colors = {
	base: "#ffffff",
	primary: "#2ecc71",
	secondary: "#3498db",
	warning: "#f1c40f",
	danger: "#e74c3c",
	success: "#27ae60",
};

const backgroundColors = {
	base: "#4285f4",
};

const fontSizes = {
	small: "1rem",
	medium: "1.5rem",
	large: "2rem",
};

const buttonColors = {
	primary: "#1967DB",
	secondary: "#3498db",
	warning: "#f1c40f",
	danger: "#e74c3c",
	success: "#27ae60",
};

export type ColorType = typeof colors;

export type BackgroundColorType = typeof backgroundColors;

export type FontSizeType = typeof fontSizes;

export type ButtonColorType = typeof buttonColors;

export const theme: Theme = {
	colors,
	backgroundColors,
	fontSizes,
	buttonColors,
};
