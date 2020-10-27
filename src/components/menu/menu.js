import React from "react";

const Menu = () => {
  var style = {};

  return (
    <div class="container menu-back">
      <div className="blur">
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
              <td>Blueberry pancakes</td>
              <td>350.00</td>
            </tr>
            <tr>
              <td>Corn flakes</td>
              <td>250.00</td>
            </tr>
            <tr>
              <td>Egg with Bacon or Ham or Sausage</td>
              <td>200.00</td>
            </tr>
          </tbody>

          <h3>LUNCH</h3>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Roast Beef</td>
              <td>500.00</td>
            </tr>
            <tr>
              <td>Chicken Salad</td>
              <td>650.00</td>
            </tr>
            <tr>
              <td>Wet fried Beef</td>
              <td>750.00</td>
            </tr>
            <tr>
              <td>Fish</td>
              <td>800.00</td>
            </tr>
            <tr>
              <td>Tuna Fish</td>
              <td>1000.00</td>
            </tr>
          </tbody>

          <h3>SALAD PLATES</h3>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salmon salad</td>
              <td> 400.00</td>
            </tr>
            <tr>
              <td>Steak salad</td>
              <td> 450.00</td>
            </tr>
            <tr>
              <td>Broiled chicken salad </td>
              <td>930.00</td>
            </tr>
          </tbody>
          <h3>BEVERAGES</h3>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Milk shake</td>
              <td>200.00</td>
            </tr>
            <tr>
              <td>Soda 500ml </td>
              <td>300.00</td>
            </tr>
            <tr>
              <td>Bottled water 500ml </td>
              <td>200.00</td>
            </tr>
            <tr>
              <td>Herbal tea</td>
              <td>320.00</td>
            </tr>
            <tr>
              <td>Coffee</td>
              <td>400.00</td>
            </tr>
          </tbody>
          <h3>DINNER</h3>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boiled chicken breast</td>
              <td> 750</td>
            </tr>
            <tr>
              <td>Shrimp </td>
              <td> 1700.00</td>
            </tr>
            <tr>
              <td>Baked ham </td>
              <td> 700.00</td>
            </tr>
            <tr>
              <td>Shis ke-bab </td>
              <td>530.oo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
