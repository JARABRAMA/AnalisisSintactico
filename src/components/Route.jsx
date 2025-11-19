import { useRoute } from "../hooks/useRoute.jsx";

export function Route({ path, component: Component }) {
  const { currentPath } = useRoute();

  if (currentPath !== path) return null;

  return <Component />;
}
