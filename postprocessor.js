const postcss = require('postcss');
const parseMediaQuery = require('css-mq-parser');

function mediaTypeIfSimpleHoverHover(atRule) {
  const mediaOrs = parseMediaQuery(atRule.params);
  if (mediaOrs.length !== 1) {
    return false;
  }

  const mediaAnds = mediaOrs[0];
  if (mediaAnds.inverse) {
    return false;
  }
  if (mediaAnds.expressions.length !== 1) {
    return false;
  }

  const mediaExpression = mediaAnds.expressions[0];
  if (
    mediaExpression.feature === 'hover' &&
    mediaExpression.value === 'hover'
  ) {
    return mediaAnds.type;
  } else {
    return undefined;
  }
}

function replaceWithItsChildren(atRule) {
  atRule.each(child => {
    atRule.before(child);
  });
  atRule.remove();
}

function prefixSelectorsWith(rule, prefix) {
  const selectorsWithWhitespace = rule.selector.split(',');

  const revisedSelectors = selectorsWithWhitespace.map(
    selectorWithWhitespace => {
      const quadruple = /^(\s*)(\S.*\S)(\s*)$/.exec(selectorWithWhitespace);
      if (quadruple === null) {
        return selectorWithWhitespace;
      }

      const prefixWhitespace = quadruple[1];
      const selector = quadruple[2];
      const suffixWhitespace = quadruple[3];

      return prefixWhitespace + prefix + ' ' + selector + suffixWhitespace;
    }
  );

  rule.selector = revisedSelectors.join(',');
}

module.exports = function(opts) {
  return postcss(css => {
    const hoverSelectorPrefix = opts.hoverSelectorPrefix;
    if (typeof hoverSelectorPrefix !== 'string') {
      throw new Error('hoverSelectorPrefix option must be a string');
    }

    css.walkAtRules('media', atRule => {
      const mediaType = mediaTypeIfSimpleHoverHover(atRule);
      switch (mediaType) {
        case 'all':
        // falls through
        case 'screen':
          atRule.walkRules(rule => {
            prefixSelectorsWith(rule, hoverSelectorPrefix);
          });
          if (mediaType === 'screen') {
            atRule.params = 'screen';
          } else {
            replaceWithItsChildren(atRule);
          }
          return;
        case 'print':
        case 'speech':
          atRule.remove();
          return;
        default:
          return;
      }
    });
  });
};
