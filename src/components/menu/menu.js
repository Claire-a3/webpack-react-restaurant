import React from "react";

const Menu = () => {
  var style={
 background: url('https://digitalmarketing.blob.core.windows.net/10261/images/items/image472196.jpg')

}
  return (
    <div
      class="container"
      style={{
        background: url(
          "https://digitalmarketing.blob.core.windows.net/10261/images/items/image472196.jpg"
        ),
      }}
    >
      <h2>Menu Page</h2>
      <h3>BREAKFAST</h3>

      <table class="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Fluffy stack of buttermilk pancakes</td>
            <td>850.00</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
          </tr>
        </tbody>
      </table>

      <ol>
        <li>
          <li>Blueberry pancakes @350.00</li>
          <li>Corn flakes @ 250.00</li>
          <li>Egg with Bacon or Ham or Sausage @ 200.00</li>
        </li>
      </ol>
      <h3>LUNCH</h3>
      <ol>
        <li>Roast Beef @ 500.00</li>
        <li>Chicken Salad @ 600.00</li>
        <li>Wet fried Beef @ 750.00</li>
        <li>Fish @ 800.00</li>
        <li>Tuna Fish @ 1000.00</li>
      </ol>
      <h3>SALAD PLATES</h3>
      <ol>
        <li>Salmon salad @ 400.00</li>
        <li>Steak salad @ 450.00</li>
        <li>Broiled chicken salad @ 930.00</li>
      </ol>
      <h3>BEVERAGES</h3>
      <ol>
        <li>Milk shake @ 200.00</li>
        <li>Soda 500ml @ 300.00</li>
        <li>Bottled water 500ml @ 200.00</li>
        <li>Herbal tea</li>
        <li>Coffee</li>
      </ol>
      <h3>DINNER</h3>
      <ol>
        <li>Boiled chicken breast @ 750</li>
        <li>Shrimp @ 1700.00</li>
        <li>Baked ham @ 700.00</li>
        <li>Shis ke-bab @ 900.00</li>
      </ol>
    </div>
  );
};

export default Menu;
