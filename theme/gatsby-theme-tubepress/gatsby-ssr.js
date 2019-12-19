// replace inline css/scss with links
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {

  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const unfiltered = getHeadComponents(),
    filtered = unfiltered.filter((el) => !(el.type === 'link' && el.props.rel === 'icon' && /apollographql\.com/.test(el.props.href)));

  filtered.forEach((el) => {

    if (el.type === 'style' && Object.prototype.hasOwnProperty.call(el.props, 'data-href')) {

      el.type = 'link';
      el.props.href = el.props['data-href'];
      el.props.rel = 'stylesheet';
      el.props.type = 'text/css';

      delete el.props['data-href'];
      delete el.props['dangerouslySetInnerHTML'];
    }
  });

  replaceHeadComponents(filtered);
};
