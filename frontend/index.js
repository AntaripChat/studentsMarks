fetch('http://localhost:3000/api/marks').then((data)=>{
    return data.json();
}).then((data)=>{
    // console.log(data);
    document.getElementById('marks').innerHTML = data[1].studentName;

    let data1 = "";
    data.map((value)=>{
        data1+= `
        <h1>${value.schoolName}</h1>
        <p>${value.studentName}</p>
        <p>${value.rollNumber}</p>
        <p>${value.marks.firstLanguage}</P>
        `
    })
    document.getElementById('marks').innerHTML = data1;
})