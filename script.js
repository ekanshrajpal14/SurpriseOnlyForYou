var arr = [{ Name: "ekansh", appoint: [{ date: "05/09/2024", time: "1430" }] },
{ Name: "viraj", appoint: [{ date: "05/09/2024", time: "1230" }] },
    // { Name: "sahil", appoint: ["10:00", "01:05"] },
]

var inputs = { patient: "user", choice: "viraj", date: "05/09/2024", time: "1129" };

arr.forEach(function(dets){
    if(inputs.choice == ""){
        arr.forEach(function(elem){
            elem.appoint.forEach(function(w){

                if(w.date == inputs.date){
                    if(inputs.time == w.time ){
                        console.log("Time already booked");
                    }
                    else{
                        var b = Number(w.time) - Number(inputs.time);
                        if(b > 30 ){
                            console.log("Time slot available",elem.Name);
                        }
                        else{
                            console.log("Slot not available");

                        }
                    }
                }
            })  
        })
    }
    if(dets.Name == inputs.choice){
        // console.log(dets);
        dets.appoint.forEach(function(el){

            if(el.time == inputs.time  ){
                console.log("Time already booked");
            }
            else{

                var a = Number(el.time) - Number(inputs.time);
                if(a > 30 ){
                    console.log("booked successfully",dets.Name);
                    var obj = { date: "05/09/2024", time: "1129" };
                    dets.appoint.push(obj);
                    console.log(dets.appoint);
                    
                    
                }
                else{
                    console.log("Slot not available for this doc",dets.Name);
                }

            }
        })
    }

})

console.log(arr);



let a = new Date();


console.log(a.toISOString());
var newDateObj = new Date(a.getTime() + 30 * 6000);
// console.log(newDateObj-a)



// let firstdate = new Date("2025-09-05")
// let secdate = new Date("2025-09-05")


// const firstTime = firstdate.getTime()+(30*6000);
// const secTime = secdate.getTime();
// const diffTime = Math.abs(firstTime - secTime);
// console.log(diffTime);


// console.log(firstTime);
// console.log(secTime);


// if (firstTime < secTime) {
//     console.log('firstDate is earlier than secondDate');
// } else if (firstTime > secTime) {
//     console.log('firstDate is later than secondDate');
// } else {
//     console.log('firstDate are  secondDate');
// }
// console.log(new Date(1757032200000).toLocaleTimeString());

// // console.log(a.toDateString());

// // const date1 = new Date('2024-09-05');
// const date2 = new Date('2024-09-05');
// console.log(date1.getTime());
// let bbb = a.getTime("11:29")
// console.log();

// const timeDifference = date2.getTime() - date1.getTime(); // Difference in milliseconds

// const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

// console.log(daysDifference); // 5


// console.log(new Date('2017-09-28T22:59:02.448804522Z').valueOf())

// const currentTime = new Date().getDate()
// console.log(currentTime);

// const expiryTime = new Date('2016-09-29T22:59:02.448804522Z').getTime()+3000;
// var bb =expiryTime.toLocaleString()
// console.log(expiryTime);

// if (currentTime < expiryTime) {
//     console.log('not expired')
// }
// else{
//     console.log("exp");
    
// }


