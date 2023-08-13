import useSubscription from "./hooks/useSubscription.ts";

function App() {
  const { error, loading, subscriptions } = useSubscription();

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {subscriptions.map((subscription) => (
        <div key={subscription.title}>
          <p>{subscription.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
