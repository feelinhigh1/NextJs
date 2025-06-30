import React from "react";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (slug && slug.length === 2) {
    return (
      <div>
        Viewing docs for feature <strong>{slug[0]}</strong> and concept{" "}
        <strong>{slug[1]}</strong>
      </div>
    );
  } else if (slug && slug.length === 1) {
    return (
      <div>
        Viewing docs for feature <strong>{slug[0]}</strong>
      </div>
    );
  }
  return <div>Viewing all docs</div>;
}
