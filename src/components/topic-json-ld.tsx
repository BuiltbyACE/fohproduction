import { topicSchema } from "@/lib/schema";

export default function TopicJsonLd({ path }: { path: string }) {
  const schema = topicSchema(path);
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\u003c"),
      }}
    />
  );
}
