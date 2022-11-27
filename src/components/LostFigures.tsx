import React, { FC } from 'react';

import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3 className="lost__title">{title}</h3>
      {figures.map((figure) => (
        <div className="lost__row" key={figure.id}>
          {figure.name}
          {figure.logo && (
            <img className="lost__figure" src={figure.logo} alt="figure" />
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
