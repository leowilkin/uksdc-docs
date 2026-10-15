import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;
  const stash = context.locals.versionsTopicsBridge;
  if (!stash) return;
  starlightRoute.sidebar = stash.fullSidebar.map((item) =>
    item === stash.group ? { ...item, entries: starlightRoute.sidebar } : item,
  );
});
