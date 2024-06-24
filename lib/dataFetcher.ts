// /my-nextjs-app/lib/dataFetcher.ts
export const fetchData = async (): Promise<string> => {
  // Simulate a fetch request to an API or database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 1000);
  });
};
