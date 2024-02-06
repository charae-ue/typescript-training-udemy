import React from 'react';

const EventComponent: React.FC = () => {
  // type annotation if we don't use inline for event handler. Type is required here
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div className="drag-box" draggable onDragStart={onDragStart}>
        Drag Me, Hey!
      </div>
    </div>
  );
};

export default EventComponent;
