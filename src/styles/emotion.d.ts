import "@emotion/react";

import {
	BackgroundColorType,
	ButtonColorType,
	ColorType,
	FontSizeType,
	FontColorType,
	BorderColorType,
} from "./theme";

declare module "@emotion/react" {
	export interface Theme {
		colors: ColorType;
		backgroundColors: BackgroundColorType;
		borderColors: BorderColorType;
		fontSizes: FontSizeType;
		fontColors: FontColorType;
		buttonColors: ButtonColorType;
	}
}
