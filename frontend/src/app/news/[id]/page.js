import ClientNewsDetail from "./ClientNewsDetail";

export default function NewsDetailPage({ params }) {
  return <ClientNewsDetail id={params.id} />;
}
