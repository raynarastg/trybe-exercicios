import { Common } from "./exercise4";

import Pizza from "./exercise3";

interface PizzaCommon extends Pizza {
  flavor: Common
};

export default PizzaCommon;