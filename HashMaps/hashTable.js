function hashTable() {
  const table = Array(16);
  let size = 0;

  function _hash(key) {
    let hash = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash = primeNumber * hash + key.charCodeAt(i);
    }
    return hash % table.length;
  }

  const tableModule = {
    set1(key, value) {
      const index = _hash(key);
      // table.insertAt(value, index);
      let node1;
      if (table[index]) {
        for (let i = 0; i < table[index].length; i++) {
          // Find the key/value pair in the chain
          if (table[index][i][0] === key) {
            table[index][i][1] = value;
            return;
          }
        }
        // not found, push a new key/value pair
        table[index].push([key, value]);
      } else {
        table[index] = [];
        table[index].push([key, value]);
      }

      size += 1;
      return node1;
    },

    // const set1 = function setKeyValuePair1(key, value) {
    //   const set = setKeyValuePair(key, value, table);
    //   return set;
    // };

    get(key) {
      const target = _hash(key);
      if (table[target]) {
        for (let i = 0; i < table.length; i++) {
          if (table[target][i][0] === key) {
            return table[target][i][1];
          }
        }
      }
      return undefined;
    },

    remove(key) {
      const index = _hash(key);

      if (table[index] && table[index].length) {
        for (let i = 0; i < table.length; i++) {
          if (table[index][i][0] === key) {
            table[index].splice(i, 1);
            size--;
            return true;
          }
        }
      } else {
        return false;
      }
    },

    display() {
      table.forEach((values, index) => {
        const chainedValues = values.map(
          ([key, value]) => `[ ${key}: ${value} ]`,
        );
        console.log(`${index}: ${chainedValues}`);
      });
    },

    // has(key){
    //   const index = _hash(key)
    //   for(let i=0; i<table.length-1; i++){
    //     // if(table[])
    //   }
    // }

    getSize() {
      return size;
    },
    getTable() {
      return table;
    },
  };
  const { set1, get, remove, getSize, display, getTable } = tableModule;

  return Object.freeze({ set1, get, remove, getSize, display, getTable });
}
