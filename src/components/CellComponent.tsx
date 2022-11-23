import { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, onClick }) => {
  return (
    <div
      className={[
        'cell',
        cell.color,
        selected ? 'selected' : '',
        cell.available && cell.figure ? 'attack' : '',
      ].join(' ')}
      onClick={() => onClick(cell)}
    >
      {cell.available && !cell.figure ? <div className="available" /> : null}
      {cell.figure?.logo ? (
        <img className="cell__figure" src={cell.figure.logo} alt="figure" />
      ) : null}
    </div>
  );
};

export default CellComponent;
