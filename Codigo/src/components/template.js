import styled from 'styled-components';
import { palheta } from './palheta';

export const Header1 = styled.h1`
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${() => palheta.text};
`;

const NewInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Linha = styled.div`
  height: 2px;
  max-width: 400px;
  min-width: 100px;
  border: 1px solid #f5f5f5;
  box-shadow: 10px 10px 20px #626262, -10px -10px 20px #ffffff;
`;

export function NewInputs(props) {
  return (
    <NewInputDiv>
      <Body
        style={{
          margin: '0px',
          padding: '0px 4px',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        {props.children}
      </Body>
      <Linha />
    </NewInputDiv>
  );
}

export const Header2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 23px;

  letter-spacing: -0.02em;

  color: ${() => palheta.text};
`;

export const Header3 = styled.h3``;

export const Body = styled.div`
  background-color: ${() => palheta.background};
  margin: auto;
  max-width: 600px;
  padding: 20px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${() => palheta.text};

  .PrimeiraParte .Tipography {
  }

  .PrimeiraParte .Components {
  }

  .PrimeiraParte .Label-Logo-Progress {
  }

  .Inputs {
    display: flex;
  }

  .Logo-Emoji {
    display: flex;
    align-items: center;
  }

  .Colors {
    display: flex;
    flex-wrap: wrap;
  }

  .Colors div {
    margin-right: 40px;
    margin-bottom: 40px;
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
  cursor: pointer;

  margin: 10px;

  color: ${() => palheta.text};
`;

export const Button = styled.button`
  /* Background */
  background: ${() => palheta.background};
  box-shadow: ${() => palheta.boxDropShadow};
  border-radius: 5px;
  border: none;

  margin: 10px;
  padding: 8px 8px;
  max-width: 400px;

  /* Body */
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;

  /* Text - Important */
  color: ${() => palheta.textImportant};
  :active {
    box-shadow: 2px 2px 5px #c3cad0, -2px -2px 5px #ffffff;
  }
`;

export const Emoji = styled.div`
  background: ${() => palheta.background};
  box-shadow: ${() => palheta.boxDropShadow};
  border-radius: 15px;
  width: 36px;
  height: 36px;
  margin: 10px;
  text-align: center;
  padding: 3px 3px 3px 5px;
  font-size: 20px;
`;

export const Card = styled.div`
  width: 136px;
  height: 136px;
  /* Background */
  background: ${() => palheta.background};
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

  max-width: 200px;
  min-width: 50px;

  background: ${() => palheta.background};
  box-shadow: ${() => palheta.boxInnerShadow};

  border-radius: 5px;
  /* Body */
  font-family: arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  border: none;

  color: ${() => palheta.text};
`;

export const Logo = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 0px;

  color: ${(props) => palheta.logo};
  text-shadow: -2px -2px 3px #ffff6a, 2px 2px 3px #776a22;
`;

export const BarraDeProgresso = styled.div`
  width: 241px;
  height: 30px;

  /* Rectangle 17 */
  background: linear-gradient(
    90deg,
    #72bc83 0%,
    #72bc83 ${(props) => props.valor - 0.1}%,
    #afaaaa ${(props) => props.valor}%,
    #afaaaa 107.3%
  );
  /* Drop shadow (dark) */

  box-shadow: ${() => palheta.boxDropShadow};
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
    <Body className="container" style={{ maxWidth: '1000px' }}>
      <Header1>Template</Header1>
      <div className="PrimeiraParte row">
        <div className="Tipography col-6 col-xs-6 col-sm-6 col-md-4">
          <Header2>Tipography</Header2>
          <Header1>Header 1</Header1>
          <Header2>Header 2</Header2>
          <Link>link</Link>
        </div>
        <div className="Components col-6 col-xs-6 col-sm-6 col-md-4">
          <Header2>Components</Header2>
          <Button>button</Button>
          <Card>
            <h3>Card Style</h3>
          </Card>
        </div>
        <div className="Label-Logo-Progress col-12 col-xs-12 col-sm-12 col-md-4">
          <Label>Label</Label>
          <div className="Inputs">
            <Input
              placeholder="input"
              style={{ marginLeft: '0px', width: '120px' }}
            />
            <NewInputs>Correr</NewInputs>
          </div>
          <div className="Logo-Emoji">
            <Logo>1%</Logo>
            <Emoji style={{ margin: '20px' }}>😉</Emoji>
          </div>
          <BarraDeProgresso valor={72} />
        </div>
      </div>
      <Header2>Colors</Header2>
      <div className="Colors">
        <Quadrado2 color={palheta.background} />
        <Quadrado2 color={palheta.darkShadow} />
        <Quadrado2 color={palheta.lightShadow} />
        <Quadrado2 color={palheta.textImportant} />
        <Quadrado2 color={palheta.logo} />
        <Quadrado2 color={palheta.text} />
      </div>
    </Body>
  );
}

export default Template;
