const hasOwnProp = (object, key) => Object.prototype.hasOwnProperty.call(object, key),

  pageFilter = (p, guide, nodes) => {

    let keep = p.path.startsWith(`/${guide}/`);

    if (guide === null) {

      /** a path like /pro/ could be a bogus, so we have to make sure that pro/index.md* doesn't exist **/

      const [, slug] = p.path.split('/'),
        re = new RegExp(`^${slug}/index.mdx?$`);

      keep = p.path.match(/\//g).length === 2 && nodes.every((node) => !re.test(node.relativePath));
    }

    return keep;
  },

  sectionMapper = (section, guide, nodes) => ({
    ...section,
    pages: section.pages.filter((page) => pageFilter(page, guide, nodes)),
  });

exports.onCreatePage = ({
  page, getNode, actions, getNodes,
}) => {

  if (!hasOwnProp(page, 'context') || !hasOwnProp(page.context, 'sidebarContents') || hasOwnProp(page, 'tubepress')) {

    return;
  }

  const node = getNode(page.context.id);

  if (!node || !hasOwnProp(node, 'relativePath')) {

    return;
  }

  actions.deletePage(page);

  /* take the first segment of the node's relative path. this will be "pro" or "wix" or something similar */
  const split  = node.relativePath.split('/'),
    slashCount = split.length - 1,
    guide      = slashCount > 0 ? split[0] : null,
    nodes      = getNodes();

  page.context.sidebarContents = page.context.sidebarContents

    // keep only relevant docs
    .map((section) => sectionMapper(section, guide, nodes))

    // and ditch any sections without any pages
    .filter((section) => section.pages && section.pages.length > 0);

  page.context.tubePressDocsCategory = guide;

  actions.createPage(page);
};
