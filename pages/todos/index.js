import { useState } from "react";
import { useRouter } from "next/router";

const Todos = ({ todos }) => {
  const [completedTodo, setCompletedTodo] = useState(todos);
  const routes = useRouter();
  const completedTodos = async () => {
    const res = await fetch("http://localhost:4000/todos?completed=true");
    const data = await res.json();
    setCompletedTodo(data);
    routes.push("/todos?completed=true", undefined, { shallow: true });
  };
  //   console.log(completedTodo);
  return (
    <>
      <button onClick={completedTodos}>Completed todos is here</button>
      
      <hr />
      {completedTodo.map((todo) => {
        return (
          <div key={todos.id}>
            <h3>
              id:{todo.id} title:{todo.title} || Work:{todo?.completed}
            </h3>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default Todos;
export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  const { completed } = query;
  const queryStrings = completed ? "completed=true" : "";
  const res = await fetch(`http://localhost:4000/todos?${queryStrings}`);
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}
