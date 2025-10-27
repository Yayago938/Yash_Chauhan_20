const baseurl = "https://studentapi-m7a7.onrender.com";
let list;

async function start() {
    const response = await fetch(`${baseurl}/student/all`);
    const data = await response.json();
    console.log(data);

    let arr = data.students;
    list = document.querySelector(".list");

    arr.forEach(e => {
        const student = document.createElement('button');
        student.classList.add("studbtn");
        student.innerHTML = `
            <h1>${e.studentName}</h1>
            <h2>${e.year}</h2>
            <h2>${e.batch}</h2>
        `;


        student.addEventListener("click", () => {
            let details = `
                <div>Name:${e.studentName}</div>
                <div>
                    <span>Batch:${e.batch}</span>
                    <span>Year:${e.year}</span>
                </div>
                <div>Colege:${e.college}</div>
                <div>CGPA:${e.cgpa}</div>
                <div>SapId:${e.sapid}</div>
                <div>Address:${e.address}</div>
                <div>Phone No.:${e.phone}</div>

            `;
            list.innerHTML = details;


        });

        list.appendChild(student);
    });
}

start();
let get = document.querySelector(".gs");
let addBtn = document.querySelector(".add");
let update = document.querySelector(".update");
let deletebtn = document.querySelector(".delete");

async function addf() {
    let content = `
    <div> 
      <label for="sn">Enter name:</label>
      <input type="text" id="sn" placeholder="Enter a student name">
    </div>
    <div> 
      <label for="cn">Enter college name:</label>
      <input type="text" id="cn" placeholder="Enter a college name">
    </div>
    <div> 
      <label for="b">Enter batch:</label>
      <input type="text" id="b" placeholder="Enter a batch">
    </div>
    <div> 
      <label for="y">Enter year:</label>
      <input type="text" id="y" placeholder="Enter a year">
    </div>
    <div> 
      <label for="sid">Enter sapid:</label>
      <input type="text" id="sid" placeholder="Enter a sapid">
    </div>
    <div> 
      <label for="a">Enter address:</label>
      <input type="text" id="a" placeholder="Enter an address">
    </div>
    <div> 
      <label for="pn">Enter phone no.:</label>
      <input type="text" id="pn" placeholder="Enter a phone no.">
    </div>
    <div> 
      <label for="cgp">Enter CGPA:</label>
      <input type="text" id="cgp" placeholder="Enter cgpa">
    </div>
    <button id="submitStudent">Submit</button>
    `;

    let list = document.querySelector(".list");
    list.innerHTML = content;

    document.getElementById("submitStudent").addEventListener("click", async () => {
        const k = {
            studentName: document.getElementById("sn").value,
            college: document.getElementById("cn").value,
            cgpa: document.getElementById("cgp").value,
            phone: document.getElementById("pn").value,
            sapid: document.getElementById("sid").value,
            batch: document.getElementById("b").value,
            year: document.getElementById("y").value,
            address: document.getElementById("a").value
        };


        const response = await fetch(`${baseurl}/student/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(k)
        });

        if (response.ok) {
            alert("Student added successfully!");
            start(); // Refresh the list
        } else {
            alert("Failed to add student.");
        }
    });
}

async function updatef() {
    let content = `
    <div> 
      <label for="del">Enter name of student:</label>
      <input type="text" id="pn" placeholder="Enter name:">
    </div>
     <button id="submitStudent">Submit</button>`
    let list = document.querySelector(".list");
    list.innerHTML = content;


    document.getElementById("submitStudent").addEventListener("click", async () => {
        let find = document.getElementById("pn").value;
        const res = await fetch(`${baseurl}/student/all`);
        const data = await res.json();
        console.log(data);
        let arr = data.students;
        for (let i of arr) {
            if (i.studentName == find) {
                let details = `
                <div><span>Name:</span><span id="sn" contenteditable="true">${i.studentName}</span></div>
                <div>
                    <span>Batch:</span><span><span id="b" contenteditable="true">${i.batch}</span></span>
                    <span>Year:</span><span><span id="y" contenteditable="true">${i.year}</span></span>
                </div>
                <div><span>College:</span><span id="c" contenteditable="true">${i.college}</span></div>
                <div><span>CGPA:</span><span id="cgp" contenteditable="true">${i.cgpa}</span></div>
                <div><span>SapId:</span><span id="sid" contenteditable="true">${i.sapid}</span></div>
                <div><span>Address:</span><span id="a" contenteditable="true">${i.address}</span></div>
                <div><span>Phone no.:</span><span id="p" contenteditable="true">${i.phone}</span></div>
                <button id="submitS">Submit</button>
            `;
                list.innerHTML = details;
                let k;
                document.getElementById("submitS").addEventListener("click", async () => {
                    i.studentName = document.getElementById("sn").innerText;
                    i.batch = document.getElementById("b").innerText;
                    i.year = document.getElementById("y").innerText;
                    i.college = document.getElementById("c").innerText;
                    i.cgpa = document.getElementById("cgp").innerText;
                    i.sapid = document.getElementById("sid").innerText;
                    i.address = document.getElementById("a").innerText;
                    i.phone = document.getElementById("p").innerText;
                    k = i;
                    let id = i._id;
                    const response = await fetch(`${baseurl}/student/update/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(k)
                    })
                    if (response.ok) {
                        alert("Details updated successfully");
                        start();
                    }
                    else {
                        alert("Couldn't update the details");
                    }
                })

            }

        }



    })
}
async function deletef() {
    let content = `
    <div> 
      <label for="del">Enter name of student:</label>
      <input type="text" id="pn" placeholder="Enter name:">
    </div>
     <button id="submitStudent">Submit</button>`
    let list = document.querySelector(".list");
    list.innerHTML = content;
    document.getElementById("submitStudent").addEventListener("click", async () => {
        let find = document.getElementById("pn").value;
        const res = await fetch(`${baseurl}/student/all`);
        const data = await res.json();
        console.log(data);
        let arr = data.students;
        for (let i of arr) {
            let id = i._id;
            if (i.studentName == find) {
                let response = await fetch(`${baseurl}/student/delete/${id} `, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    alert("Student details deleted successfully");
                    start();
                }
                else {
                    alert("Couldn't delete student details");
                }
            }
        }


    });
}
addBtn.addEventListener("click", addf);
get.addEventListener("click", ()=>{
    list.innerHTML='';
    start();
});
update.addEventListener("click", updatef);
deletebtn.addEventListener("click", deletef);
list = document.querySelector(".list");
 document.querySelector(".s").addEventListener("click", async () => {
    let find = document.querySelector("#sb").value;
    const res = await fetch(`${baseurl}/student/all`);
    const data = await res.json();
    let arr = data.students;
    let found=false;
    for (const i of arr) {
        if (i.studentName == find) {
            let details = `
                <div>Name:${i.studentName}</div>
                <div>
                    <span>Batch:${i.batch}</span>
                    <span>Year:${i.year}</span>
                </div>
                <div>College:${i.college}</div>
                <div>CGPA:${i.cgpa}</div>
                <div>SapId:${i.sapid}</div>
                <div>Address:${i.address}</div>
                <div>Phone No.:${i.phone}</div>
                `;
            list.innerHTML = details;
            found=true;
        }
    }
    if(found!=true){
        list.innerHTML=`<div>No such student found.</div>`
    }

})
