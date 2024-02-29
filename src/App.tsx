import React from 'react';

interface HeaderProps {
  myKey: number;
  text: string;
}

// 👇️ rename key to myKey
const Header: React.FunctionComponent<HeaderProps> = ({
  myKey,
  text,
}) => {
  console.log(myKey);
  return <h2>{text}</h2>;
};

const App = () => {
  const arr = ['Austria', 'Belgium', 'Canada'];

  return (
    <div>
      {arr.map((element, key) => {
        return <Header text={element} key={key} myKey={key} />;
      })}
    </div>
  );
};

export default App;
