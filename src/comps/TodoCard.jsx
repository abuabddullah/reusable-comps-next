
"use client";
const TodoCard = ({ todo, innerRef, ...props }) => {
  return (
    <p className="" key={todo.id} ref={innerRef} {...props}>
      {todo.title}
    </p>
  );
};

export default TodoCard;
