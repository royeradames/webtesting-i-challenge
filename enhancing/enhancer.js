module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  item = {
    ...item,
    enchancement: item.enchancement + 1
  }
  item.enchancement > 20 ? item.enchancement = 20 : null

  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
