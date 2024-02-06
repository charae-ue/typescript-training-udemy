import React from 'react';

interface ChildProps {
  name: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export function Child({ name, onClick }: ChildProps) {
  return (
    <div>
      <p>Hi there! My child's name is {name}</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

// export const Child = ({ name, onClick }: ChildProps) => {
//   return (
//     <div>
//       <p>Hi there! My child's name is {name}</p>
//       <button onClick={onClick}>Click me!</button>
//     </div>
//   );
// };

// this method is great if we want to access React component property like `displayName`
export const ChildAsFc: React.FC<ChildProps> = ({ name, onClick }) => {
  return (
    <div>
      <p>Hi there! My child's name is {name}</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
