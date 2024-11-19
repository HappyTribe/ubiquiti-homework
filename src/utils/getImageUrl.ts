export default function getImageUrl(params: {
  id: string;
  default: string;
  size?: number;
}) {
  return `https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2F${
    params.id
  }%2Fdefault%2F${params.default}.png&w=${String(params.size ?? 640)}&q=75`;
}
