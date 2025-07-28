import { packages } from "../../data/packages.ts";

export const handler = {
  GET() {
    return Response.json(packages);
  },
};
