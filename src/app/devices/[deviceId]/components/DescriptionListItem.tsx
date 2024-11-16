export default function DescriptionListItem(props: {
  hide?: boolean;
  title: string;
  value: React.ReactNode;
}) {
  if (props.hide) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-x-2 h-8 text-sm">
      <dt className="text-black/85">{props.title}</dt>
      <dd className="text-black/45">{props.value}</dd>
    </div>
  );
}
