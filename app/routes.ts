import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
        index("routes/home.tsx"),
        route("descripcion/:id", "routes/descripcion.tsx"),
        route("filtro", "routes/filtro.tsx"),
] satisfies RouteConfig;
