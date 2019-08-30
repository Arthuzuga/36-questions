import React, { useState } from 'react';
import styled from 'styled-components';

import {
  phase1,
  phase2,
  phase3,
} from './questions';

const Container = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: seashell;
  background-color: cornflowerblue;
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Question = styled.h1`
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 786px){
  font-size: 48px;
    
  }
`;

const NextButton = styled.button`
    font-size: 16px;
    background-color: rgba(100, 149, 237, 0.4);
    color: seashell;
    border-radius: 32px;
    padding: 0.5rem;
    border: 2px solid seashell;
    font-weight: 600;
`;

const generateQuestion = () => {
  let step1 = phase1;
  let step2 = phase2;
  let step3 = phase3;

  if (step1.length >= 1) {
    const randomIndex = Math.floor(Math.random() * step1.length -1 ) + 1;
    console.log("Step1: ", randomIndex);
    const question = step1[randomIndex]
    step1.splice(randomIndex, 1)
    return question
  } else if (step2.length >= 1) {
    const randomIndex = Math.floor(Math.random() * step2.length -1 ) + 1;
    console.log("Step2: ", randomIndex);
    const question = step2[randomIndex]
    step2.splice(randomIndex, 1)
    return question
  } else if (step3.length >= 1){
    const randomIndex = Math.floor(Math.random() * step3.length -1 ) + 1;
    console.log("Step3: ", randomIndex);
    const question = step3[randomIndex]
    step3.splice(randomIndex, 1)
    return question
  }

  return 'Obrigado por compartilharem um pouquinho de vocês, aproveitem a noite!'
}

const App = () => { 
  const [question, setNextQuestion] = useState('36 perguntas sobre nós');

  return (
    <Container >
      {
        question !== 'Gran Finale!' 
        ? (
        <Content>
          <div/>
          <Question>{question}</Question>
          {
            question !== '36 perguntas sobre nós'
            ? <NextButton onClick={() => {
                question !== 'Obrigado por compartilharem um pouquinho de vocês, aproveitem a noite!'  
                  ? setNextQuestion(generateQuestion()) 
                  : setNextQuestion('Gran Finale!')
              }}>Próxima Pergunta</NextButton>
            : <NextButton onClick={() => setNextQuestion(generateQuestion())}>Vamos começar!</NextButton>
          }
        </Content>
        ) : (
          <Content>
          <Question>Agora é hora de se conhecer sem palavras</Question>
          <Question>Hora de olhar nos olhos um do outro pro 2 minutos</Question>
          <NextButton onClick={() => window.location.reload()}>Jogar novamente!</NextButton>
        </Content>
        )

      }
    </Container>
  );
}

export default App;
