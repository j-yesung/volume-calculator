import "@emotion/react";

import { BackgroundColorType, ButtonColorType, ColorType, FontSizeType } from "./theme";

declare module "@emotion/react" {
	export interface Theme {
		colors: ColorType;
		backgroundColors: BackgroundColorType;
		fontSizes: FontSizeType;
		buttonColors: ButtonColorType;
	}
}
