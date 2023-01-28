import { trpc } from "@/utils/trpc";

export default function Home() {
  const { data, isLoading, error } = trpc.users.useQuery();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      {data.users.map((user) => {
        return (
          <>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.name}</p>
          </>
        );
      })}
    </>
  );
}
