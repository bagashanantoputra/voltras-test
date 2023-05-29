function filterList(list) {
    const filtered = {};
    for (const item of list) {
      const key = `${item.type}-${item.name}`;
      if (!filtered[key] || item.price < filtered[key].price) {
        filtered[key] = item;
      }
    }
    
    //Convert the 'filtered' object to an array
    return Object.values(filtered);
  }

  const arg1 = [	
	{
		"type"	: "Pen",
		"name"	: "Snowman",
		"price"	: 10000
	},
	{
		"type"	: "Ruler",
		"name"	: "Butterfly",
		"price"	: 5000
	},
	{
		"type"	: "Pen",
		"name"	: "Snowman",
		"price"	: 12000
	},
	{
		"type"	: "Eraser",
		"name"	: "Kenko",
		"price"	: 12000
	},
	{
		"type"	: "Pen",
		"name"	: "Kenko",
		"price"	: 10000
	},
	{
		"type"	: "Eraser",
		"name"	: "Kenko",
		"price"	: 9000
	},
	{
		"type"	: "Eraser",
		"name"	: "Snowman",
		"price"	: 2000
	},
	{
		"type"	: "Ruler",
		"name"	: "Snowman",
		"price"	: 10000
	}
];

  
  const test = filterList(arg1);
  console.log(test);
  