import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  margin: 10px 0px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.Button``;

export default () => {
  const [conta, setConta] = React.useState('');
  const [gorjeta, setGorjeta] = React.useState(0);
  const [pct, setPct] = React.useState(5);

  React.useEffect(() => {
    calc();
  }, [pct, conta]);

  const calc = () => {
    let numericConta = parseFloat(conta);

    if (numericConta) {
      setGorjeta(numericConta * (pct / 100));
    } else {
      alert('Digite o valor da conta!');
    }
  };

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={conta}
        onChangeText={n => setConta(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)} />
      </PctArea>

      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />
      {gorjeta > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(conta).toFixed(2)}</ResultItem>
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {parseFloat(gorjeta).toFixed(2)} ({pct}%)
          </ResultItem>
          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {parseFloat(+conta + gorjeta).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
