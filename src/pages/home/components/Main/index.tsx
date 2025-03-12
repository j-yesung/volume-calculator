import * as S from "./style";

const Main = () => {
	return (
		<S.MainWrapper>
			<S.TitleContainer>
				<S.Title>풍천진양상재</S.Title>
				<S.Title>업무 시스템</S.Title>
				<S.Subtitle>오늘 하루도 화이팅입니다!</S.Subtitle>
			</S.TitleContainer>

			<S.LoginForm>
				<S.ButtonContainer>
					<S.CodeInput placeholder="개인 코드를 입력해주세요." />
					<S.ConfirmButton>확인</S.ConfirmButton>
				</S.ButtonContainer>
				<S.CheckboxContainer>
					<input type="checkbox" id="saveId" />
					<label htmlFor="saveId">아이디 저장하기</label>
				</S.CheckboxContainer>
			</S.LoginForm>
		</S.MainWrapper>
	);
};

export default Main;
