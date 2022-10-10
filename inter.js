const interDB = [
    {
        "IntersectionSeq": 1,
        "ZoneSeq": 1,
        "IntersectionID": "101",
        "IntersectionName": '지수교차로',
        "nodeID": 1111111,
        "IntersectionLocation" : "??"
    },
    {
        "IntersectionSeq": 2,
        "ZoneSeq": 1,
        "IntersectionID": "102",
        "IntersectionName": '유빈교차로',
        "nodeID": 2222222,
        "IntersectionLocation" : "??"
    }, 
    {
        "IntersectionSeq": 3,
        "ZoneSeq": 1,
        "IntersectionID": "103",
        "IntersectionName": '진원교차로',
        "nodeID": 3333333,
        "IntersectionLocation" : "??"
    }, 
];






const aveDB = [
        {
            "AvenueSeq": 1,
            "IntersectionSeq": 1,
            "AvenueID": "1",
            "AvenueName": '1-1접근로',
            "DirectionType": 4,
            "StaticDirection" : 2,
            "AvenueLocation" : "??",
            "LinkId" : 1111111,
            "Degree" : 0 
        },
        {
            "AvenueSeq": 2,
            "IntersectionSeq": 1,
            "AvenueID": "2",
            "AvenueName": '1-2접근로',
            "DirectionType": 7,
            "StaticDirection" : 5,
            "AvenueLocation" : "??",
            "LinkId" : 222222,
            "Degree" : 0 
        },
        {
            "AvenueSeq": 3,
            "IntersectionSeq": 1,
            "AvenueID": "3",
            "AvenueName": "1-3접근로",
            "DirectionType": 6,
            "StaticDirection" : 8,
            "AvenueLocation" : "??",
            "LinkId" : 3333333,
            "Degree" : 0 
        },
        {
            "AvenueSeq": 4,
            "IntersectionSeq": 1,
            "AvenueID": "4",
            "AvenueName": '1-4접근로',
            "DirectionType": 1,
            "StaticDirection" : 3,
            "AvenueLocation" : "??",
            "LinkId" : 4444444,
            "Degree" : 0 
        },
        {
            "AvenueSeq": 4,
            // "IntersectionSeq": 1,
            "AvenueID": "4",
            "AvenueName": '1-4접근로',
            "DirectionType": 1,
            "StaticDirection" : 3,
            "AvenueLocation" : "??",
            "LinkId" : 4444444,
            "Degree" : 0 
        },
        
  ];


  // set 으로 만들기 
const intersection = new Map();
    interDB.forEach((inter)=>{
    intersection.set(inter.IntersectionSeq, inter)
})


/**
 * Map 접근로 생성, 접근로 kye 생성(1-1)
 */
const avenue = new Map();
aveDB.forEach((ave)=>{
    // const key = ave?.IntersectionSeq ? `${ave.IntersectionSeq}-${ave.AvenueSeq}` : ave.AvenueSeq
    avenue.set(key, ave)
})



// 전체 교차로 리스트 생성하기
const intersectionList = interDB;

intersectionList.forEach((inter)=>{
    if(!inter.Avenue) inter.Avenue = []

    const ave = avenue.get() || ''
    inter.Avenue.push(ave)

})

// console.log(2222, intersectionList)