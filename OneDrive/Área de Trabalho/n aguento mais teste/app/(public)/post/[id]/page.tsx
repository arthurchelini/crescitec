interface PostPageProps {
  params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
  return <div>Post detalhado ID: {params.id}</div>;
}
