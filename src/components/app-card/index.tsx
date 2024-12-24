import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  name: string;
  index: number;
}

export function AppCard({ name, index }: Props) {
  const mozillaUrl = `https://developer.mozilla.org/ja/docs/Web/HTML/Element/${name}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{index}. {`<${name}>`}</CardTitle>
      </CardHeader>
      <CardContent>
        <a
          href={mozillaUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Learn more about the {`<${name}>`} element on MDN.
        </a>
      </CardContent>
    </Card>
  );
}
