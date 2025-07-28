import Login from "../../components/login";
import * as S from "./style";

const Main = () => {
	return (
		<S.Container>
			<S.Title>자재소요계산기</S.Title>
			<Login />
			<S.Caption>
				<p>(주)풍천진양상재</p>
				<p>TEAM 몽키 3인조</p>
			</S.Caption>
		</S.Container>
	);
};

export default Main;
