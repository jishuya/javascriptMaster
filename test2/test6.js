fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
    return newMembers
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
     method: 'POST',
     body: JSON.stringify(newMembers)// 여기에 코드를 작성하세요.
  }))
  .then((response) => { 
     if (response.status === 200) {
       return fetch('https://learn.codeit.kr/api/members')
     } else {
       throw new Error('New members not added');
     }
   })
  .then((response) => response.json())
  .then((members) => {
     console.log(`총 직원 수: ${members.length}`);
     console.log(members);
  });fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
    return newMembers
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
     method: 'POST',
     body: JSON.stringify(newMembers)// 여기에 코드를 작성하세요.
  }))
  .then((response) => { 
     if (response.status === 200) {
       return fetch('https://learn.codeit.kr/api/members')
     } else {
       throw new Error('New members not added');
     }
   })
  .then((response) => response.json())
  .then((members) => {
     console.log(`총 직원 수: ${members.length}`);
     console.log(members);
  });fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
    return newMembers
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
     method: 'POST',
     body: JSON.stringify(newMembers)// 여기에 코드를 작성하세요.
  }))
  .then((response) => { 
     if (response.status === 200) {
       return fetch('https://learn.codeit.kr/api/members')
     } else {
       throw new Error('New members not added');
     }
   })
  .then((response) => response.json())
  .then((members) => {
     console.log(`총 직원 수: ${members.length}`);
     console.log(members);
  });fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
    return newMembers
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
     method: 'POST',
     body: JSON.stringify(newMembers)// 여기에 코드를 작성하세요.
  }))
  .then((response) => { 
     if (response.status === 200) {
       return fetch('https://learn.codeit.kr/api/members')
     } else {
       throw new Error('New members not added');
     }
   })
  .then((response) => response.json())
  .then((members) => {
     console.log(`총 직원 수: ${members.length}`);
     console.log(members);
  });



  console.clear()



// Promise 객체의 then 메소드를 제대로 이해해야 Promise Chaining을 잘 할 수 있습니다. then 메소드가 리턴한 Promise 객체가 그 콜백의 리턴값에 따라 어떻게 되는지, 이전 노트에서 배운 각각의 케이스를 코드잇 실행기에 준비해두었는데요. 지금 각 케이스별로

// Case(1) : 콜백에서 Promise 객체를 리턴
// Case(2) : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴
// Case(3) : 콜백에서 아무것도 리턴하지 않음
// Case(4) : 콜백 실행 중 에러 발생 
// Case(5) : 콜백이 실행되지 않음



fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    // return response.json(); // <- Case(1)
    //return 10; // <- Case(2)
    // <- Case(3)
    // throw new Error('failed'); // <- Case(4)
})
  .then((result) => {
    console.log(result);
  });

// 존재하지 않는 URL
/* fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json()) // <- Case(5)
  .then((result) => { }, (error) => { console.log(11111111, error) }); **/