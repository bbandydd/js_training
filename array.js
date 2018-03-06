const axios = require('axios');

const getData = () => axios.get('https://raw.githubusercontent.com/ReactMaker/api_server/master/db/album.json');

/*
    1. deep clone array
    輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。
    
    fix this bug, a should be [1,2,3]:

    var a = [1,2,3];
    var b = a;
    b.push(4);

    console.log(a); // [1,2,3,4]
*/
const func1 = (arr) => [...arr];

const a = [1,2,3];
const b = func1(a);
b.push(4);

console.log('func1', a, b);

(async () => {
    const result = await getData().then(response => response.data);

    /*
        2. 搜尋資料中id為特定的資料
    */
    const func2 = (data, id) => {
        console.log('func2', data.find(obj => obj.id === id));
    }

    func2(result, 5);

    /*
        3. 模糊搜尋title包含特定文字的資料
    */
    const func3 = (data, keyword) => {
        console.log('func3', data.filter(obj => obj.title.indexOf(keyword) >= 0));
    }
    
    func3(result, '美好');

    /*
        4. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間
    */
    const func4 = (data, newObject) => {
        console.log('func4', [
            ...data.slice(0, 10),
            newObject,
            ...data.slice(11),
        ])
    }
    
    func4(result, {id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100});

    /*
        5. 修改id為特定的資料
    */
    const func5 = (data, id, object) => {
        const index = data.findIndex(obj => obj.id === id);

        console.log('func5', [
            ...data.slice(0, index),
            {
                ...data.find(obj => obj.id === id),
                ...object
            },
            ...data.slice(index + 1)
        ])
    }

    func5(result, 3, {title: '修改title', desc: '修改desc'});

    /*
        6. 刪除特定id的資料
    */
    const func6 = (data, id) => {
        const index = data.findIndex(obj => obj.id === id);

        console.log('func6', [
            ...data.slice(0, index),
            ...data.slice(index + 1),
        ])
    }

    func6(result, 5);

    /*
        7. 依照價格排序 asc or desc
    */
    const func7 = (data, sort) => {
        console.log('func7', result.sort((a, b) => sort === 'desc' ? b.price - a.price : a.price - b.price));
    }

    func7(result, 'asc');
})();









