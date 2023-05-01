// Student average challenge

let activities = [
    ['David',80],
    ['Vinoth',77],
    ['Divya',88],
    ['Ishitha',95],
    ['Thomas',68]
];

let avgMark = 0;

for (let i = 0; i < activities.length; i++) {
    
    avgMark += activities[i][1];
    
    let avg = (avgMark / activities.length);
}
console.log("Average grade: " + avg);

if (avg < 60){
    console.log("Grade: F");
    
}else if(avg < 70){
    console.log("Grade: D");
    
}else if(avg < 80){
    console.log("Grade: C");
    
}else if(avg < 90){
    console.log("Grade: B");
    
}else if(avg < 100){
    console.log("Grade: A");
}
