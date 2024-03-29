import React from 'react';

export default function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};
