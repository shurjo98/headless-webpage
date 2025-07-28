import { features } from "../../data/features.ts";

export const handler = {
  GET() {
    return Response.json(features);
  },
};
