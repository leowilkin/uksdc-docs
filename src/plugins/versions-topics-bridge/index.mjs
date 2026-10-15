/**
 * Bridges starlight-versions and starlight-sidebar-topics.
 *
 * Both plugins replace `starlightRoute.sidebar` in route middleware, and each
 * expects the structure the other has already destroyed. This plugin runs a
 * "pre" middleware before starlight-sidebar-topics that unwraps the group for
 * the current version, and a "default" middleware (registered before
 * starlight-versions) that wraps the topic's sidebar back into the versioned
 * structure so starlight-versions finds what it expects.
 *
 * Register it BEFORE starlightSidebarTopics() and BEFORE starlightVersions().
 */
export default function versionsTopicsBridge({ versions }) {
  return {
    name: 'versions-topics-bridge',
    hooks: {
      'config:setup'({ addRouteMiddleware, addIntegration }) {
        addRouteMiddleware({ entrypoint: new URL('./pre.mjs', import.meta.url).pathname, order: 'pre' });
        addRouteMiddleware({ entrypoint: new URL('./post.mjs', import.meta.url).pathname });
        addIntegration({
          name: 'versions-topics-bridge-integration',
          hooks: {
            'astro:config:setup': ({ updateConfig }) => {
              updateConfig({
                vite: {
                  plugins: [
                    {
                      name: 'vite-plugin-versions-topics-bridge',
                      resolveId(id) {
                        if (id === 'virtual:versions-topics-bridge') return '\0' + id;
                      },
                      load(id) {
                        if (id === '\0virtual:versions-topics-bridge') {
                          return `export const versionSlugs = ${JSON.stringify(versions.map((v) => v.slug))};`;
                        }
                      },
                    },
                  ],
                },
              });
            },
          },
        });
      },
    },
  };
}
