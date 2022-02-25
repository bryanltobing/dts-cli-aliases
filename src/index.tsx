import * as React from 'react';
import { foo } from '@Components/foo';
import { FooInterface } from '@Components/foo.interface';

console.log(foo);

// Delete me
export const Thing = () => {
  return <div>Welcome to your first test package.</div>;
};

export const FooComponent = (props: FooInterface) => {
  return <div>FooComponent</div>;
};
