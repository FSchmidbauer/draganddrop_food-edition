import styled from 'styled-components';
import { useState } from 'react';

export default function App() {
  const food = [
    { name: 'Schweinebraten', id: 1 },
    {
      name: 'Käsespätzle',
      id: 2,
    },
  ];
  const [newBoxes, setNewBoxes] = useState([]);
  console.log(newBoxes);

  function handleDrag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function handleDrop(event) {
    event.preventDefault();
    const newBox = event.dataTransfer.getData('text');
    setNewBoxes(...newBoxes, newBox);
  }

  return (
    <>
      <div>
        <Header>
          <h1>Food Edition</h1>
        </Header>
        <WordBox>
          {food.map((meal) => (
            <span
              draggable={true}
              onDragOver={(event) => event.preventDefault()}
              onDragStart={handleDrag}
            >
              {meal.name}
            </span>
          ))}
          {/* <span
            draggable={true}
            id="1"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Schweinebraten
          </span>
          <span
            draggable={true}
            id="2"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Schinkennudeln
          </span>
          <span
            draggable={true}
            id="3"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Leberkäse
          </span>
          <span
            draggable={true}
            id="4"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Meeresfrüchte
          </span>
          <span
            draggable={true}
            id="5"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Kaiserschmarrn
          </span>
          <span
            draggable={true}
            id="6"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Käsespätzle
          </span>
          <span
            draggable={true}
            id="7"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Char Kway Teow
          </span>
          <span
            draggable={true}
            id="8"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Nasi Goreng
          </span>
          <span
            draggable={true}
            id="9"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Saté
          </span>
          <span
            draggable={true}
            id="10"
            onDragOver={(event) => event.preventDefault()}
            onDragStart={handleDrag}
          >
            Gyros mit Pommes
          </span> */}
        </WordBox>
        <Wrapper>
          <FloBox>
            <span onDrop={handleDrop}>
              {newBoxes.map((newBox) => (
                <span>{newBox}</span>
              ))}
            </span>
            <span onDrop={handleDrop}>2</span>
            <span onDrop={handleDrop}>3</span>
            <span onDrop={handleDrop}>4</span>
            <span onDrop={handleDrop}>5</span>
          </FloBox>
          <ShaBox>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </ShaBox>
        </Wrapper>
        <Footer />
      </div>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
`;

const WordBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  background-color: hotpink;
  place-items: center;
  margin: 1rem;
  padding: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 0.5rem;
    cursor: pointer;
    height: 3.5rem;
    width: 10rem;

    :nth-child(even) {
      background-color: violet;
      color: white;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const FloBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  place-items: center;
  background-color: green;
  margin: 1rem;
  padding: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    border: 0.1rem dashed grey;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 0.5rem;
    cursor: pointer;
    height: 3.5rem;
    width: 10rem;
  }
`;

const ShaBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  place-items: center;
  background-color: orange;
  margin: 1rem;
  padding: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    border: 0.1rem dashed grey;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 0.5rem;
    cursor: pointer;
    height: 3.5rem;
    width: 10rem;
  }
`;

const Footer = styled.footer``;
