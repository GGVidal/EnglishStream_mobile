import React from 'react';
import * as S from './styles';

type BulletPointsProps = {
  quantity: number;
  icon?: React.ReactNode;
};

const BulletPoints: React.FC<BulletPointsProps> = ({ quantity, icon }) => {
  const bullets = Array(10).fill(null);

  return (
    <S.BulletContainer>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {bullets.map((_, index) => (
        <S.Bullet key={index} dark={index < quantity} />
      ))}
    </S.BulletContainer>
  );
};

export default BulletPoints;
