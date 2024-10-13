"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const ClientLayout = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>nav bar</h1>
        {children}
        <h1>footer</h1>
      </QueryClientProvider>
    </>
  );
};

export default ClientLayout;
