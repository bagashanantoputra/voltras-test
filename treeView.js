function treeViewBuilder(list) {
    // Initialize an empty object
    let tree = {};

    // Loop through each string in the list.
    for (let i = 0; i < list.length; i++) {
      let path = list[i].split("-");
      let node = tree;
      for (let j = 0; j < path.length; j++) {
        if (!node[path[j]]) {
          node[path[j]] = {};
        }
        node = node[path[j]];
      }
    }
    function printTree(node, level) {
      let indent = " ".repeat(level * 2);
      for (let key in node) {
        console.log(indent + key);
        printTree(node[key], level + 1);
      }
    }
    printTree(tree, 0);
  }
  
  let arg1 = [
    "A-B-C",
    "A-B-G",
    "A-B-H",
    "A-C-D",
    "A-C-K-L",
    "A-C-K-M",
    "A-E-F",
    "A-E-I",
    "A-E-J",
  ];
  treeViewBuilder(arg1);
  
  let arg2 = [
    "FLIGHT-REPORT-DOMESTIC",
    "HOTEL-REPORT-DOMESTIC",
    "FLIGHT-REPORT-INTERNATIONAL",
    "HOTEL-REPORT-INTERNATIONAL",
    "HOTEL-BOOKING-CONFIRMED",
    "HOTEL-BOOKING-CANCELED",
    "HOTEL-LIST",
    "VOLTRAS-BOD",
    "VOLTRAS-HR",
    "VOLTRAS-ITDEV-FRONT END-JUNIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-FRONT END-SENIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-BACK END-JUNIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-BACK END-SENIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-IT OPS",
  ];
  treeViewBuilder(arg2);
  