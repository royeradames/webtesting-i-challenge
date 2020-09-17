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
  
  item.enchancement > 16 ? item.enchanecment -= 1 : null


  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {

  if (item.enchancement > 0) {
    item = {
      ...item,
      name: `[+${item.enchancement}] ${item.name}`
    }
  } 
  console.log(item)
  return { ...item };
}
