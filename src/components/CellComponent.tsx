import { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div className={`cell ${cell.color}`}>
      {cell.figure?.logo ? (
        <img className="cell__figure" src={cell.figure.logo} alt="figure" />
      ) : null}
    </div>
  );
};

export default CellComponent;
