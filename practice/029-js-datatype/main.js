// 
var a = {
    a1: [
      'a', 'b', { v: 666 }
    ]
  }
  
  console.log(a.a1[2].v);
  
  var b = [
    1, 3, 'a', {
      b2: {
        a: 1,
        v: 7,
        c: [{z: 666}]
      }
    }
  ]

  console.log(b[3].b2.c[0].z);
  
  
  var c = {
    a: {
      u: 1,
      d: {
        o: {
          z: { 1: 2, y: [1, 2] }
        },
        p: {
          yo: [3, 5, 666]
        }
      }
    }
  }
  
console.log(c.a.d.p.yo[2]);


  var d = [
    [1, 3, 'abc'],
    [
      'muhaha',
      { d: 1, v: ['a', 'b', { z: 666 }] }
    ]
  ]

  console.log(d[1][1].v[2].z);
  
  
  var e = {
    a: [3, {
      b: 1,
      v: [1, 3, {
        p: 666
      }]
    }, 9]
  }

console.log(e.a[1].v[2].p)

/* 打印出“我叫王花花，我今年18岁了” */

var person = {
  name: '王花花',
  age: 18,
}

var a = '我叫' + person.name + '，我今年' + person.age + '岁了';
console.log(a);

/* 打印出“我叫李拴蛋，我老婆叫王花花，今年18岁了” */

var person1 = {
  name: '李拴蛋',
  wife: {
    name: '王花花',
    age: 18
  }
}

var b = '我叫' + person1.name + '，我老婆叫' + person1.wife.name + '，今年' + person1.wife.age + '岁了';
console.log(b);


/* 打印出“我叫李拴蛋，我老婆一共有200块” */

var person2 = {
  name: '李拴蛋',
  wife: {
    name: '王花花',
    age: 18,
    huabei: 1000,
    balance: 1200
  },
}

var yue = person2.wife.balance - person2.wife.huabei;
var c = '我叫' + person2.name + '，我老婆一共有' + yue + '块';
console.log(c);

/* 打印出“我叫李拴蛋，我丈人有3个朋友” */

var person3 = {
  name: '李拴蛋',
  wife: {
    name: '王花花',
    dad: {
      friends: ['王一','王二','李三']
    }
  },
}

var d = '我叫' + person3.name + '，我丈人有' + person3.wife.dad.friends.length + '个朋友';
console.log(d);

/* 打印出“我叫李拴蛋，我丈人的第一个朋友叫王一，第三个朋友叫李三” */

var person4 = {
  name: '李拴蛋',
  wife: {
    name: '王花花',
    dad: {
      friends: [{
        name: '王一',
        children: 1,
        averageScore: 44
      }, {
        name: '王二',
        children: 3,
        averageScore: 98        
      } ,{
        name:'李三',
        children: 5,
        averageScore: 87        
      }]
    }
  },
}

var friend1 = person4.wife.dad.friends[0].name
var friend3 = person4.wife.dad.friends[2].name
var e = '我叫' + person4.name + '，我丈人的第一个朋友叫' + friend1 + '，第三个朋友叫' + friend3;
console.log(e);

/* 打印出“我叫李拴蛋，我丈人朋友们的孩子们的平均分是85.888888888” */

var person5 = {
  name: '李拴蛋',
  wife: {
    name: '王花花',
    dad: {
      friends: [{
        name: '王一',
        children: 1,
        averageScore: 44
      }, {
        name: '王二',
        children: 3,
        averageScore: 98        
      } ,{
        name:'李三',
        children: 5,
        averageScore: 87        
      }]
    }
  },
}

var ave = (person5.wife.dad.friends[0].averageScore+person5.wife.dad.friends[1].averageScore+person5.wife.dad.friends[2].averageScore)/person5.wife.dad.friends.length;
var f = '我叫' + person5.name + '，我丈人朋友们的孩子们的平均分是' + ave;
console.log(f);
