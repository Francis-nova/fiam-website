/** Renders schema.org structured data. Accepts one object or several. */
export function JsonLd({ data }: { data: object | object[] }) {
  // Escape "<" so content can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
