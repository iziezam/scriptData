"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDataImport = void 0;
var common_1 = require("common");
var moment_1 = __importDefault(require("moment"));
var jsonData = {
    "itemList": [
        {
            "id": "1",
            "item_cat": "Vegetable",
            "item_name": "Tomato",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-02-30T09:16:01"
        },
        {
            "id": "2",
            "item_cat": "Vegetable",
            "item_name": "Onion",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-06-30T09:16:01"
        },
        {
            "id": "3",
            "item_cat": "Vegetable",
            "item_name": "Cucumber",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-03-30T09:16:01"
        },
        {
            "id": "4",
            "item_cat": "Vegetable",
            "item_name": "Brocolli",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        },
        {
            "id": "5",
            "item_cat": "Vegetable",
            "item_name": "Bell Pepper",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-10-30T09:16:01"
        },
        {
            "id": "6",
            "item_cat": "Vegetable",
            "item_name": "Chili",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "7",
            "item_cat": "Vegetable",
            "item_name": "Celery",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-09-30T09:16:01"
        },
        {
            "id": "8",
            "item_cat": "Vegetable",
            "item_name": "Potato",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-11-30T09:16:01"
        },
        {
            "id": "9",
            "item_cat": "Fruit",
            "item_name": "Orange",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "10",
            "item_cat": "Fruit",
            "item_name": "Apple",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-10-30T09:16:01"
        },
        {
            "id": "11",
            "item_cat": "Fruit",
            "item_name": "Pear",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "12",
            "item_cat": "Fruit",
            "item_name": "Watermelon",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-10-30T09:16:01"
        },
        {
            "id": "13",
            "item_cat": "Fruit",
            "item_name": "Plum",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "14",
            "item_cat": "Fruit",
            "item_name": "Lemon",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "15",
            "item_cat": "Fruit",
            "item_name": "Peach",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        },
        {
            "id": "16",
            "item_cat": "Fruit",
            "item_name": "Cherry",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-03-30T09:16:01"
        },
        {
            "id": "17",
            "item_cat": "Fruit",
            "item_name": "Grapes",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        },
        {
            "id": "18",
            "item_cat": "Seafood",
            "item_name": "Crab",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-03-30T09:16:01"
        },
        {
            "id": "19",
            "item_cat": "Seafood",
            "item_name": "Shrimp",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-03-30T09:16:01"
        },
        {
            "id": "20",
            "item_cat": "Seafood",
            "item_name": "Lobster",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-03-30T09:16:01"
        },
        {
            "id": "21",
            "item_cat": "Seafood",
            "item_name": "Oyster",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-10-30T09:16:01"
        },
        {
            "id": "22",
            "item_cat": "Seafood",
            "item_name": "Squid",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-11-30T09:16:01"
        },
        {
            "id": "23",
            "item_cat": "Seafood",
            "item_name": "Bass",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-02-30T09:16:01"
        },
        {
            "id": "24",
            "item_cat": "Seafood",
            "item_name": "Salmon",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        },
        {
            "id": "25",
            "item_cat": "Seafood",
            "item_name": "Tuna",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        },
        {
            "id": "26",
            "item_cat": "Meat",
            "item_name": "Lamb Chop",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "27",
            "item_cat": "Meat",
            "item_name": "Sirloin",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-12-30T09:16:01"
        },
        {
            "id": "28",
            "item_cat": "Meat",
            "item_name": "Dice Beef",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-03-30T09:16:01"
        },
        {
            "id": "29",
            "item_cat": "Meat",
            "item_name": "Chicken",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2023-02-30T09:16:01"
        },
        {
            "id": "30",
            "item_cat": "Meat",
            "item_name": "Salami",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        },
        {
            "id": "31",
            "item_cat": "Meat",
            "item_name": "Sausages",
            "item_desc": "Vitamin and Mineral",
            "item_url_image": "",
            "expiry_date": "2025-01-30T09:16:01"
        }
    ]
};
var JsonDataImport = function (param, dataSame, t) { return __awaiter(void 0, void 0, void 0, function () {
    var funcName, sql, ListData, result, i, dateString, dateresult, date, url, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                funcName = "JsonDataImport ";
                ListData = jsonData.itemList;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                result = void 0;
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < ListData.length)) return [3, 5];
                dateString = ListData[i].expiry_date;
                dateresult = Date.parse(dateString);
                date = (0, moment_1.default)(dateresult).format('YYYY-MM-DD, h:mm:ss');
                console.log("DBG:" + date);
                url = void 0;
                if (ListData[i].item_url_image == null || '') {
                    url = 'NULL';
                }
                else {
                    url = ListData[i].item_url_image;
                }
                sql = "INSERT INTO myapps\n      (id, item_cat, item_name, item_desc, item_url_image, expired_date)\n      VALUES(\n        ".concat(ListData[i].id, "\n        ,'").concat(ListData[i].item_cat, "',\n        '").concat(ListData[i].item_name, "',\n        '").concat(ListData[i].item_desc, "', \n        '").concat(url, "', \n        '").concat(date, "'\n      ) RETURNING id;");
                console.log("DBG:SQL: " + sql);
                return [4, common_1.db.query(sql)];
            case 3:
                result = _a.sent();
                console.log("DBG:SQL: " + JSON.stringify(result));
                _a.label = 4;
            case 4:
                i++;
                return [3, 2];
            case 5: return [3, 7];
            case 6:
                err_1 = _a.sent();
                console.log("(".concat(funcName, ") : - ERROR [").concat(err_1, "]"));
                return [2, { rv: -2, rs: err_1, rows: 0 }];
            case 7: return [2];
        }
    });
}); };
exports.JsonDataImport = JsonDataImport;
