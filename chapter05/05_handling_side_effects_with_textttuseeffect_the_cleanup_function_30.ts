// Snippet 30 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: The Cleanup Function
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 248)
// Language: typescript
// Description: useEffect(() => {
// 
// Assume props.id, setLoading, setError are defined
useEffect(() => {
  // Create an AbortController for this fetch request
  const controller = new AbortController();
  const signal = controller.signal;

  setLoading(true);
  fetch(`api/data?id=${props.id}`, { signal }) // Pass signal to fetch
    .then(res => res.json())
    .then(data => { /* Set data */ console.log('Data fetched for id:', props.id); })
    .catch(err => {
      if (err.name === 'AbortError') {
        // Ignore abort errors, they are expected during cleanup
        console.log('Fetch aborted for id:', props.id);
      } else {
        // Handle other fetch errors
        setError(/* ... */);
        console.error('Fetch error:', err);
      }
    })
    .finally(() => setLoading(false));

  // Cleanup function: abort the fetch request
  return () => {
    controller.abort();
    console.log("Aborted previous fetch for id:", props.id);
  };
}, [props.id]); // Dependency: Re-fetch and abort previous if id changes