import useSubcription from "./hooks/useSubcription.ts";

function App() {
  const { error, loading, subscriptions } = useSubcription();

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {subscriptions.map((subcriptions) => (
        <div key={subcriptions.title}>
          <p>{subcriptions.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
