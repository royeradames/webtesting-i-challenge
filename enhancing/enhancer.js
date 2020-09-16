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
  item.durability < 15 ? item.durability -= 5 : item.durability -= 10
  
  item.enchancement < 15 ? item.enchancement -= 5 : item.enchancement -= 10


  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
