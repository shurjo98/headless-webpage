import { MiddlewareHandlerContext } from "$fresh/server.ts";

const disabled = new Set<string>([
  "/pricing/configurator",
  "/docs",
  "/blog",
  "/platform",
  "/case-studies",
  '/API_Status'  
]);

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const url = new URL(req.url);
  if (disabled.has(url.pathname)) {
    return Response.redirect(new URL("/coming-soon", url), 307); // temporary
  }
  return await ctx.next();
}
