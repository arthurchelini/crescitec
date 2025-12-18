interface PerfilPageProps {
  params: { id: string };
}

export default function PerfilPage({ params }: PerfilPageProps) {
  return <div>Perfil de {params.id}</div>;
}
