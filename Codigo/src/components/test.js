import { useState, useEffect } from 'react';
// import firebase from "firebase/app"
import styled from 'styled-components';

const TestStyled = styled.div`
  background-color: red;
  height: 20px;
  width: 20px;
`;

function testFunction() {
  /*
  return firebase
    .firestore()
    .collection("cities")
    .doc("LA")
    .set({
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    })
    .then(() => {
      console.log("Document successfully written!")
    })
    .catch(error => {
      console.error("Error writing document: ", error)
    })
    */
}

function Test() {
  const [test, setTest] = useState(0);
  const [testInput, setTestInput] = useState('');

  console.log('test');

  useEffect(() => {
    console.log('test0');
  }, []);

  return (
    <div>
      <div onClick={() => setTest(test + 1)}>Test {test}</div>
      <input
        type="test"
        placeholder="Type something..."
        /* onChange={(e) => setTestInput(e.eventPhase.target)} */
      />
      <button onClick={() => testFunction()}>Save doc</button>
      <TestStyled />
    </div>
  );
}

export default Test;
