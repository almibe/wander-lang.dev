import { Title } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";

const Main = clientOnly(() => import("~/components/Main"));

export default function Home() {
  return (
    <main>
      <Title>wander-land.dev</Title>
      <Main />
    </main>
  );
}
