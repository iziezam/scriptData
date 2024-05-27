import { db } from "common";
import moment from "moment";


let jsonData={
    "itemList":[
       {
          "id":"1",
          "item_cat":"Vegetable",
          "item_name":"Tomato",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-02-30T09:16:01"
       },
       {
          "id":"2",
          "item_cat":"Vegetable",
          "item_name":"Onion",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-06-30T09:16:01"
       },
       {
          "id":"3",
          "item_cat":"Vegetable",
          "item_name":"Cucumber",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-03-30T09:16:01"
       },
       {
          "id":"4",
          "item_cat":"Vegetable",
          "item_name":"Brocolli",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       },
       {
          "id":"5",
          "item_cat":"Vegetable",
          "item_name":"Bell Pepper",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-10-30T09:16:01"
       },
       {
          "id":"6",
          "item_cat":"Vegetable",
          "item_name":"Chili",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"7",
          "item_cat":"Vegetable",
          "item_name":"Celery",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-09-30T09:16:01"
       },
       {
          "id":"8",
          "item_cat":"Vegetable",
          "item_name":"Potato",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-11-30T09:16:01"
       },
       {
          "id":"9",
          "item_cat":"Fruit",
          "item_name":"Orange",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"10",
          "item_cat":"Fruit",
          "item_name":"Apple",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-10-30T09:16:01"
       },
       {
          "id":"11",
          "item_cat":"Fruit",
          "item_name":"Pear",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"12",
          "item_cat":"Fruit",
          "item_name":"Watermelon",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-10-30T09:16:01"
       },
       {
          "id":"13",
          "item_cat":"Fruit",
          "item_name":"Plum",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"14",
          "item_cat":"Fruit",
          "item_name":"Lemon",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"15",
          "item_cat":"Fruit",
          "item_name":"Peach",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       },
       {
          "id":"16",
          "item_cat":"Fruit",
          "item_name":"Cherry",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-03-30T09:16:01"
       },
       {
          "id":"17",
          "item_cat":"Fruit",
          "item_name":"Grapes",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       },
       {
          "id":"18",
          "item_cat":"Seafood",
          "item_name":"Crab",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-03-30T09:16:01"
       },
       {
          "id":"19",
          "item_cat":"Seafood",
          "item_name":"Shrimp",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-03-30T09:16:01"
       },
       {
          "id":"20",
          "item_cat":"Seafood",
          "item_name":"Lobster",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-03-30T09:16:01"
       },
       {
          "id":"21",
          "item_cat":"Seafood",
          "item_name":"Oyster",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-10-30T09:16:01"
       },
       {
          "id":"22",
          "item_cat":"Seafood",
          "item_name":"Squid",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-11-30T09:16:01"
       },
       {
          "id":"23",
          "item_cat":"Seafood",
          "item_name":"Bass",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-02-30T09:16:01"
       },
       {
          "id":"24",
          "item_cat":"Seafood",
          "item_name":"Salmon",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       },
       {
          "id":"25",
          "item_cat":"Seafood",
          "item_name":"Tuna",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       },
       {
          "id":"26",
          "item_cat":"Meat",
          "item_name":"Lamb Chop",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"27",
          "item_cat":"Meat",
          "item_name":"Sirloin",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-12-30T09:16:01"
       },
       {
          "id":"28",
          "item_cat":"Meat",
          "item_name":"Dice Beef",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-03-30T09:16:01"
       },
       {
          "id":"29",
          "item_cat":"Meat",
          "item_name":"Chicken",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2023-02-30T09:16:01"
       },
       {
          "id":"30",
          "item_cat":"Meat",
          "item_name":"Salami",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       },
       {
          "id":"31",
          "item_cat":"Meat",
          "item_name":"Sausages",
          "item_desc":"Vitamin and Mineral",
          "item_url_image":"",
          "expiry_date":"2025-01-30T09:16:01"
       }
    ]
 }

 export const JsonDataImport = async (param: any,dataSame:any,t:any) => {
    const funcName = "JsonDataImport ";
  let sql:any;
  let ListData = jsonData.itemList;
  // sql=`CREATE TABLE myapps (
  //     id INTEGER PRIMARY KEY,
  //     item_cat varchar NOT NULL,
  //     item_name varchar NOT NULL,
  //   item_desc varchar NOT NULL,
  //   item_url_image varchar NOT null,
  //   expired_date timestamp
  //   );`


  try {
    let result:any;
    for (let i=0; i < ListData.length; i++) {
      let dateString = ListData[i].expiry_date;
      let dateresult = Date.parse(dateString);
      // let date=moment(dateresult).utc().format('YYYY-MM-DD','h:mm:ss a')
      let date= moment(dateresult).format('YYYY-MM-DD, h:mm:ss');
      console.log("DBG:" + date)

      let url:any;
      if(ListData[i].item_url_image == null || ''){
        url='NULL';
      }else{
        url=ListData[i].item_url_image;
      }
      
      sql =`INSERT INTO myapps
      (id, item_cat, item_name, item_desc, item_url_image, expired_date)
      VALUES(
        ${ListData[i].id}
        ,'${ListData[i].item_cat}',
        '${ListData[i].item_name}',
        '${ListData[i].item_desc}', 
        '${url}', 
        '${date}'
      ) RETURNING id;`

      console.log(`DBG:SQL: ` + sql);
     result = await db.query(sql);
     console.log(`DBG:SQL: ` + JSON.stringify(result));
    }

  } catch (err) {
   console.log(`(${funcName}) : - ERROR [${err}]`);
    return { rv: -2, rs: err, rows: 0 };
  }
  };

