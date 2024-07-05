import React from 'react';
import DynamicMenuItem from './dynamicmenu_item';
import StaticMenuItem from './staticmenu_item';
const App = () => {
  let a = { name: "Classic Cheesecake", price: 130, description: "Creamy and smooth cheesecake with a graham cracker crust, topped with a fresh berry compote." };
  let b = { name: "burger", price: 140, description: "Juicy beef patty with fresh lettuce, tomato, and cheese in a toasted bun" };
  let c = { name: "ice cream", price: 150, description: "Creamy vanilla ice cream with rich chocolate swirls and crunchy nuts" };
  
  let menu_list = [
    {
      name: "Four Cheese Pizza",
      price: 300,
      description: "A blend of mozzarella, cheddar, Parmesan, and gorgonzola cheese on a tomato sauce base with a hint of garlic."
    },
    {
      name: "Paneer Tikka Masala",
      price: 350,
      description: "Cubes of paneer cheese cooked in a rich and creamy tomato sauce with Indian spices, served with basmati rice and naan bread."
    },
    {
      name: "Caprese Salad",
      price: 450,
      description: "Slices of fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze and olive oil."
    }
  ];

  return (
    <>
      <StaticMenuItem/>
      <DynamicMenuItem
        name={a.name}
        price={a.price}
        description={a.description}
      />
      <DynamicMenuItem
        name={b.name}
        price={b.price}
        description={b.description}
      />
      <DynamicMenuItem
        name={c.name}
        price={c.price}
        description={c.description}
      />
      {menu_list.map((element) => (
        <DynamicMenuItem
          name={element.name}
          price={element.price}
          description={element.description}
        />
      ))}
    </>
  );
}
export default App;
