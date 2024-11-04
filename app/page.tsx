import { ClientComponent } from "./clientComponent";
import { ServerSession } from "./serverComponent";

export default function MainPage() {
  return (
    <div>
      <h3>Next JS application with frontegg</h3>
      {/* @ts-expect-error Server Component for more details visit: https://github.com/vercel/next.js/issues/42292 */}
      <ServerSession />
      <ClientComponent />
    </div>
  );
}
