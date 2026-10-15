import { versionSlugs } from 'virtual:versions-topics-bridge';

export function versionForEntry(id) {
  return versionSlugs.find((slug) => id === slug || id.startsWith(slug + '/'));
}

export function findVersionGroup(sidebar, version) {
  return sidebar.find((item) =>
    item.type === 'group' && (version ? item.label === version : String(item.label).startsWith('Symbol(StarlightVersions')),
  );
}
