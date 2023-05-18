
// console.log("TCS Interview Criteria : ");
var interviewTcs = function(gradScore, hscScore, sscScore, candidateName){
var result = gradScore>=70  || hscScore>=80  || sscScore>90 ? `Congrats ${candidateName} You are eligiable for TCS interview` : `Unfortunatly ${candidateName} you are not eligiable for TCS interview `;
console.log(`${result}`);
}
interviewTcs(80, 86, 90, "Gopal");
interviewTcs(70, 65, 55, "Abhishek");
interviewTcs(60, 79, 88, "Lokesh");