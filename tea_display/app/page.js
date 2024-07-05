
import TeaDisplay from './dynamic_component';  
import StaticDisplay from './static_component'; 

const App = () => {
  let a = { name: "Tea", origin: "Australia", description: "Made in Australia" };
  let b = { name: "Tea1", origin: "America", description: "Made in America" };
  let c = { name: "Tea2", origin: "Africa", description: "Made in Africa" };

  let tea_list = [
    {
      name: "Green Tea",
      origin: "Chaina",
      description: "Made in Chaina"
    },
    {
      name: "Black Tea",
      origin: "India",
      description: "Made in India"
    },
    {
      name: "White Tea",
      origin: "Chaina",
      description: "Made in Chaina"
    }
  ];

  return (
    <>
      <StaticDisplay title="Welcome to Tea Display" content="Here are some tea varieties:" />
      <TeaDisplay
        name={a.name}
        origin={a.origin}
        description={a.description}
      />
      <TeaDisplay
        name={b.name}
        origin={b.origin}
        description={b.description}
      />
      <TeaDisplay
        name={c.name}
        origin={c.origin}
        description={c.description}
      />
      {tea_list.map((element) => (
        <TeaDisplay
          name={element.name}
          origin={element.origin}
          description={element.description}
        />
      ))}
    </>
  );
}
export default App;
