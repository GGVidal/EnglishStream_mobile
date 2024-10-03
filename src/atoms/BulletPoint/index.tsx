import React from 'react';
import * as S from './styles';

const BulletPoints = () => {
  const bullets = Array(10).fill(null);

  return (
    <S.BulletContainer>
      {bullets.map((_, index) => (
        <S.Bullet key={index} dark={index < 6} />
      ))}
    </S.BulletContainer>
  );
};

export default BulletPoints;
