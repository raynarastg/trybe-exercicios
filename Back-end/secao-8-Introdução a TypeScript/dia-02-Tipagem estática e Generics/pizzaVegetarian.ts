import {
  Vegetarian
} from "./exercise4";

import Pizza from "./exercise3";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;