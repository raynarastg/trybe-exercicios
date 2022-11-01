import { Sugar } from "./exercise4";

import Pizza from "./exercise3";

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

export default PizzaSugar;