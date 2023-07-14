import produce from 'immer';
import React from 'react';

const state = {
  number: 1,
  donChangeMe: 2,
};

const nextState = produce(state, draft => {
  draft.number += 1;
});

console.log(nextState);

export default function Immer() {
  return <div>Immer</div>;
}
