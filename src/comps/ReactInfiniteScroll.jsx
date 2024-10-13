"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TodoCard from "./TodoCard";
// import TodoCard from './TodoCard';

function ReactInfiniteScroll() {
  const { ref, inView } = useInView();
  const fetchTodos = async ({ pageParam }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`
    );
    return res.json();
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const content = data?.pages.map((todos) =>
    todos.map((todo, index) => {
      if (todos.length == index + 1) {
        return <TodoCard innerRef={ref} key={todo.id} todo={todo} />;
      }
      return <TodoCard key={todo.id} todo={todo} />;
    })
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("Fire!");
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto my-12 border p-8 rounded-lg shadow">
      <h1>React Infinite Scroll</h1>
      <div className="">{content}</div>
      <button
        ref={ref}
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="bg-red-500 px-4 py-2 text-white rounded"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
      {isFetchingNextPage && <h3>Loading...</h3>}
    </div>
  );
}

export default ReactInfiniteScroll;
