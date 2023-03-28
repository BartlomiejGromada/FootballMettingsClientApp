import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

interface Props {
  children: React.ReactNode;
}

function ReactQueryProvider({ children }: Props) {
  const dev = import.meta.env.DEV;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {dev && <ReactQueryDevtools position="bottom-right" />}
    </QueryClientProvider>
  );
}

export { ReactQueryProvider };
