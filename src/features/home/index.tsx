import { css } from "@emotion/react";

import Button from "~/components/ui/button";

const UiTest = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: center;
				align-items: center;
				min-height: 100vh;
			`}
		>
			<Button color="primary" size="small" onClick={() => console.log("눌렀냐")}>
				버튼
			</Button>
		</div>
	);
};

export default UiTest;
