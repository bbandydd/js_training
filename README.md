# JS題目

## String & Number (Completed)

```
1. 一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。

    範例： 

    ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。

2. 將一個字串反轉後回傳。

    範例： s= "hello", return "olleh"

3. 給兩個字串s與t，回傳t是否為s的重組字

    範例： 

    s = "anagram", t = "nagaram" 回傳true  
    s = "rat", t = "car" 回傳false

4. 給一個英文字串，將裡面的母音字母反轉。

    範例1: 

    Given s = "hello", return "holle".

    範例2： 

    Given s = "leetcode", return "leotcede".

    注意： y不算在母音字母中。

5. 給二進制字串，將其換算成對應的十進制數字，需自己寫function

    範例：

    輸入：'11000000' 輸出：192

6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。

    範例：

    輸入：65 輸出：'01000001'

7. 將一個數字每個位數相加，直到剩個位數為止。

    範例：

    num = 38，則 3+8 = 11，1+1 = 2, 2是個位數，回傳2。

8. 反轉一個int整數。

    範例：

    x = 123 , return 321 x = -123 , return -321
```

## Array (Completed)

```
1. deep clone array
  輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。
  
    fix this bug, a should be [1,2,3]:

    var a = [1,2,3];
    var b = a;
    b.push(4);

    console.log(a); // [1,2,3,4]
```

- [範例陣列](https://raw.githubusercontent.com/ReactMaker/api_server/master/db/album.json)
- 用 fetch 取得陣列到程式中

```
2. 搜尋資料中id為特定的資料

範例：

    輸入：5
    輸出：{
            "id": 5,
            "img": "https://unsplash.it/300/300?image=868",
            "title": "城市幻影2",
            "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
            "price": 300
        }


3. 模糊搜尋title包含特定文字的資料

    範例：

    輸入：美好
    輸出：{
            "id": 1,
            "img": "https://unsplash.it/300/300?image=946",
            "title": "美好時光1",
            "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
            "price": 200,
            "discount": true
        },
        {
            "id": 2,
            "img": "https://unsplash.it/300/300?image=944",
            "title": "美好時光2",
            "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
            "price": 300
        },
        {
            "id": 3,
            "img": "https://unsplash.it/300/300?image=882",
            "title": "美好時光3",
            "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
            "price": 400
        }

    
4. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間

    範例：

    輸入：{id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100}
    輸出：
    ...
    {id: 10, img: 'xxx', title: 'xxx', desc: 'xxx', price: 800},
    {id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100},
    {id: 11, img: 'xxx', title: 'xxx', desc: 'xxx', price: 2659},
...

5. 修改id為特定的資料

    範例：

    輸入：3, {title: '修改title', desc: '修改desc'}
    輸出：
    ...
    {
            "id": 3,
            "img": "https://unsplash.it/300/300?image=882",
            "title": "修改title",
            "desc": "修改desc",
            "price": 400
        },

...

6. 刪除特定id的資料

    輸入 5 輸出已經刪除完 id 為 5 的陣列

7. 依照價格排序

    輸入 desc or asc
    輸出價格對應排序的陣列
```

## Object & Regexp

```
1. deep clone object
  輸入物件，輸出一個深層複製的物件。兩者記憶體位置不能一樣。
  
    fix this bug, a.text should be 'aaa':

    var a = {text: 'aaa'};
    var b = a;
    b.text = 'bbb';

    console.log(a.text); // 'bbb'

2. add a format prototype to Date
  為 Date 新增一個原型方法為 format，可以執行 new Date().format('YYYY-MM-DD')
  
    範例：
    輸入：new Date().format('YYYY-MM-DD')
    輸出：'2018-02-25'

3. class constructor for Person

    範例：
    輸入：
    var john = new Person('john', 18);
    john.sayhi(); // "hi I'm john, 18 years old"

    var hyman = new Person('hyman', 25);
    hyman.sayhi(); // "hi I'm hyman, 25 years old"

4. regexp replace all

    範例：
    輸入： 'abacadaeaf', 'a', '123'
    輸出： '123b123c123d123e123f'

5. regexp condition match email format

    範例：
    'wistron@wistron.com' return true
    'wistron.com' return false
```