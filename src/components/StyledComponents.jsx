import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <STitle>-Styled Components</STitle>
      <SButton>FIGHT</SButton>
    </Container>
  );
};

//componentの形でCSSを使う
//const　〇〇 = styled.△△`  `として``内にCSSを書く
//利用する際は<div></div>や<p></p>の代わりに付けた名前で囲う
const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdef;
    color: #fff;
    cursor: pointer;
  }
`;
