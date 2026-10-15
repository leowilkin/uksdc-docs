import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { findVersionGroup, versionForEntry } from './shared.mjs';

export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;
  const version = versionForEntry(starlightRoute.id);
  const group = findVersionGroup(starlightRoute.sidebar, version);
  if (!group) return;
  context.locals.versionsTopicsBridge = { fullSidebar: starlightRoute.sidebar, group };
  starlightRoute.sidebar = group.entries;
});
