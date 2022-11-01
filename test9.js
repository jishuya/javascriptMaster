// 클래스: 추상화, 캡슐화, 상속, 다형성

/**
 * 클래스란 
 * 현실 또 가는 가상세계에 존재하는 것을 
 * 프로그램 상에서 쓸 수 있도록 설계하는 것을 말한다.
 * 외부에서 클래스의 내부를 모르더라도 공개된 
 * 프로퍼티와 메소드를 잘 쓸 수 있도록 정의를 잘 해야한다.
 */

/** 캡슐화
 * 캡슐화는 감싸는거 밖에서 바로 접근하지 못하게 한다
 * 가져다가 쓰는건 get 
 * sodyddmf rhclsmsrjt set을 사용한다 
 * 외부에서 함부로 접근하면 안되는 프로퍼티나 메소드는 get이나 set을 사용해서 캡슐화한다.
 * 
 */

/**
 * 상속
 * 부모의 클래스를 자식클래스가 물려 받는 것
 */

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    buy(item){
        console.log(`${this.name} bought ${item}`);
    }
    get email(){
        return this._email
    }

    set email(address){
        if(address.includes('@')){
            this._email = address;
        } else {
            throw new Error('Invalid email address')
        }
    }
}

class PremiumUser extends User{
    constructor(name, email, lever){
        super(name, email);
        this.level = lever;
    }

    streamMusicForFree(){
        console.log(`Free music streaming for ${this.name}`)
    }
}

const Puser1 = new PremiumUser('gu', 'gu@naver.com', 1);
const Puser2 = new PremiumUser('gufu', 'gufu@naver.com', 2);
const Puser3 = new PremiumUser('gusy', 'gusy@naver.com', 3);

const user1 = new User('jishu', 'macbook@naver.com');
const user2 = new User('hhhh', 'macbogg@naver.com');
const user3 = new User('gg', 'ttt@naver.com');
// user.email = 'shu@naver.com'
// console.log(user.email)
// user.buy('macbook');
// user.email = 'shushu';

const users = [user1, Puser1, user2, Puser2, user3, Puser3];

const item = {
    name: '스웨터',
    price: 30000,
  };

users.forEach((user) => {
    user.buy(item);
  });

