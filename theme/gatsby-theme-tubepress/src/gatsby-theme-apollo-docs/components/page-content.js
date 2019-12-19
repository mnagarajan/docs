import React from 'react';
import PageContent from 'gatsby-theme-apollo-docs/src/components/page-content';

export default (props) => {

  const finalTitle = props.headings.length > 0 ? 'On this page' : props.title;

  return <PageContent {...props} title={finalTitle} />;
};
