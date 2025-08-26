class MyClass {
  // 인스턴스 변수
  // public: 클래스 내, 외부 어디서든 접근 가능
  name;
  // private: 클래스 내부에서만 접근 가능
  #age;
  // protected: 나와 그리고 상속관계에서 자식 클래스들은 접근이 가능
  _addr;
  // 클래스 정적 변수
  static gender = 'M';

  // 생성자 메소드
  // `new` 키워드로 객체를 인스턴스화 할 때 딱 한번 실행되는 메소드
  constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr = addr
  }

  // getter / setter
  // 메소드지만 사용할 때 프로퍼티 사용 하듯이 동작한다.
  // get: private 상태에서 값을 출력하고 싶을 때
  get age() {
    return this.#age;
  }
  // set: private 상태에서 값을 변경하고 싶을 때
  set age(age) {
    this.#age = age;
  }

  // 인스턴스 메소드
  add(a, b) {
    return a + b;
  }
}

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.age);
myClass.age = 40;
console.log(myClass.age);
console.log(myClass2.name);