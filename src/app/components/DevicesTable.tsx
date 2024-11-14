export default async function DevicesTable() {
  const result = await fetch(
    "https://static.ui.com/fingerprint/ui/public.json"
  ).then((res) => res.json());

  console.log(result);

  return <div>TABLE {JSON.stringify(result, null, 2)}</div>;
}
