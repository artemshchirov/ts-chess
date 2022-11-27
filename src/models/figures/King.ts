import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

import blackLogo from '../../assets/king-black.svg'
import whiteLogo from '../../assets/king-white.svg'


export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if ((target.y === this.cell.y + 1 || target.y === this.cell.y || target.y === this.cell.y - 1) 
      && (target.x === this.cell.x + 1 || target.x === this.cell.x || target.x === this.cell.x - 1)) {
      return true;
    }

    return false;
  }
}