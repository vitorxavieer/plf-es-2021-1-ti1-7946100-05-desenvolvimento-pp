import styled from 'styled-components';
import { palheta } from './palheta';

export const Header1 = styled.h1`
  /* Header 1 */
  display: flex;

  margin-top: 0px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  /* identical to box height */
  letter-spacing: -0.02em;

  color: #000000;
`;

const NewInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Linha = styled.div`
  height: 2px;
  width: 100px;
  border: 1px solid #f5f5f5;
  box-shadow: 10px 10px 20px #626262, -10px -10px 20px #ffffff;
`;

export function NewInputs(props) {
  return (
    <NewInputDiv>
      <Body style={{ margin: '0px', padding: '0px 4px' }}>
        {props.children}
      </Body>
      <Linha />
    </NewInputDiv>
  );
}

export const Header2 = styled.p`
  /* Header 2 */

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  letter-spacing: -0.02em;

  color: #000000;
`;

export const Body = styled.div`
  background-color: ${() => palheta.background};
  margin: auto;
  max-width: 600px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${() => palheta.text};

  .PrimeiraParte {
    display: flex;
    flex-wrap: wrap;
  }

  .PrimeiraParte .Tipography {
    flex: 1 1 150px; /*  Stretching: */
    flex: 0 1 150px; /*  No stretching: */
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .PrimeiraParte .Components {
    flex: 1 1 150px; /*  Stretching: */
    flex: 0 1 150px; /*  No stretching: */
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .PrimeiraParte .Label-Logo-Progress {
    flex: 1 1 150px; /*  Stretching: */
    flex: 0 1 150px; /*  No stretching: */
    margin-right: 30%;
    margin-bottom: 20px;
  }

  .Colors {
    display: flex;
    flex-wrap: wrap;
  }

  .Colors div {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  margin-right: 16px;

  color: #000000;
`;

export const Button = styled.button`
  /* Background */
  background: ${(props) => palheta.background};
  /* Drop shadow (dark) */
  box-shadow: 5px 5px 10px #c3cad0, -5px -5px 10px #ffffff;
  border-radius: 5px;
  border: none;

  margin: 10px;

  /* Body */
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;

  /* Text - Important */
  color: #cd8f32;
  padding: 8px 1rem;
`;

export const Card = styled.div`
  width: 136px;
  height: 136px;
  /* Background */
  background: ${(props) => palheta.background};
  display: grid;
  place-items: center;

  /* Drop shadow (dark) */

  box-shadow: 5px 5px 10px #c3cad0, -5px -5px 10px #ffffff;
  border-radius: 10px;

  /* Text Styles */
  color: ${() => palheta.text};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

export const Label = styled.label`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: -0.02em;

  color: rgba(0, 0, 0, 0.65);
`;

export const Input = styled.input`
  margin: 10px;
  padding: 5px 10px;

  background: ${(props) => palheta.background};
  box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px #c3cad0;

  border-radius: 5px;
  /* Body */
  font-family: arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  border: none;

  color: #001f3f;
`;

export const Logo = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #995c01;
`;

export const BarraDeProgresso = styled.div`
  width: 241px;
  height: 41px;

  /* Rectangle 17 */
  background: linear-gradient(
    90deg,
    #72bc83 0%,
    #72bc83 ${(props) => props.valor - 0.1}%,
    #afaaaa ${(props) => props.valor}%,
    #afaaaa 107.3%
  );
  /* Drop shadow (dark) */

  box-shadow: 5px 5px 10px #c3cad0, -5px -5px 10px #ffffff;
  border-radius: 5px;
`;

const Quadrado2 = styled.div`
  /* Rectangle 18 */

  width: 80px;
  height: 80px;

  /* Dark shadow */

  background: ${(props) => props.color};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`;

function Template() {
  return (
    <Body>
      <Header1>Template</Header1>
      <div className="PrimeiraParte">
        <div className="Tipography">
          <Header2>Tipography</Header2>
          <Header1>Header 1</Header1>
          <Header2>Header 2</Header2>
          <Link>link</Link>
        </div>
        <div className="Components">
          <Header2>Components</Header2>
          <Button>button</Button>
          <Card>
            <h3>Card Style</h3>
          </Card>
        </div>
        <div className="Label-Logo-Progress">
          <Label>Label</Label>
          <Input placeholder="input" />
          <Logo>Logo</Logo>
          <BarraDeProgresso valor={32} />
        </div>
      </div>
      <Header2>Colors</Header2>
      <div className="Colors">
        <Quadrado2 color={palheta.background} />
        <Quadrado2 color={palheta.darkShadow} />
        <Quadrado2 color={palheta.text} />
        <Quadrado2 color={palheta.lightShadow} />
      </div>
    </Body>
  );
}

export default Template;
