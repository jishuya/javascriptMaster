fetch('https://')
    .then((response)=>response.json())
    .then((response)=> {
        const { interviewee } = response;
        const newMember = interviewee.filter(el => el.result === 'pass');
        return newMember
    })
    .then((newMember)=>{
        fetch('https:// ~~~~ /member', {
            method: 'POST',
            body: JSON.stringify(newMember)
        })
    })
    .then((res)=>{
        if(res.status === 200){
            return fetch('https://~~~~ /members')
        } else {
            throw new Error('members added fail')
        }
    })
    .then((res)=>{ res.json()})
    .then((res)=>{
        console.log(res)
    })