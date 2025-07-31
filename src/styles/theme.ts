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
	primary: "#f8f9fa",
	secondary: "#e9ecef",
	tertiary: "#dee2e6",
	inverseWhite: "#ffffff",
	inverseBlack: "#000000",
	disabled: "#D8D8D8",
};

const borderColors = {
	primary: "#1967DB",
	secondary: "#D1D5DB",
	tertiary: "#E5E7EB",
	quaternary: "#ced4da",
	disabled: "#D8D8D8",
	error: "#dc3545",
};

const fontSizes = {
	small: "1rem",
	medium: "1.5rem",
	large: "2rem",
};

const fontColors = {
	primary: "#212529",
	secondary: "#6c757d",
	tertiary: "#adb5bd",
	quaternary: "#ced4da",
	disabled: "#6c757d",
};

const buttonColors = {
	primary: "#0B203B",
	secondary: "#3498db",
	warning: "#f1c40f",
	danger: "#e74c3c",
	success: "#27ae60",
};

export type ColorType = typeof colors;

export type BackgroundColorType = typeof backgroundColors;

export type BorderColorType = typeof borderColors;

export type FontSizeType = typeof fontSizes;

export type ButtonColorType = typeof buttonColors;

export type FontColorType = typeof fontColors;

export const theme: Theme = {
	colors,
	backgroundColors,
	borderColors,
	fontSizes,
	fontColors,
	buttonColors,
};
