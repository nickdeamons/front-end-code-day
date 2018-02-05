const setVariable = function(varName, varValue, options) {
    options.data.root[varName] = varValue;
  };

  module.exports = setVariable;
