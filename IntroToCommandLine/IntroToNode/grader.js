var scores=[];
function average(scores){
    var total=0;
    scores.forEach(function(score){
        total+=score;
    });
    var avg=total/scores.length;
    
    return Math.round(avg);
}
console.log("Average score for Environmental Science:-");
var scores1 =[90,98,89,100,100,86,94];
console.log(average(scores1));