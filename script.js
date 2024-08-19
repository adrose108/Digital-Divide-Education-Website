/* .js files add interaction to your website */
// Fact Generator
var factBtn1 = document.getElementById("factBtn1");
var factBtn2 = document.getElementById("factBtn2");
var factBtn3 = document.getElementById("factBtn3");
var fact1 = document.getElementById("fact1");
var fact2 = document.getElementById("fact2");
var fact3 = document.getElementById("fact3");
var factCounter1 = 0;
var factCounter2 = 0;
var factCounter3 = 0;

var facts1 = [
  "In low-income families, a White child is three times as likely as an African American child to have Internet access.",
"In low-income families, a White child is four times as likely as a Hispanic child to have Internet access.",
"Minority populations who speak other languages are restricted by the dominance of English in computers.",
"Poor, older, less-educated, African American, Hispanic or Native American, and live in a rural areas",
"The ethnic group with the least access to technology is the rural Native American population."
]
var facts2 = [
  "Software is too expensive for schools to afford",
"There is a lack of computers in the classroom or computers with Internet access.",
"There is a lack of time to prepare and preview software or web sites.",
"There is a lack of training on software.",
"Too much time is needed to use technology.",
"The school’s computers are not powerful enough.",
"Technologies are not aligned with curriculum and assessment.",
"It is difficult to find software to meet student needs."

]
var facts3 = [
  "Affordable, robust broadband internet service needs to be provided",
"Internet-enabled devices that meet the needs of the user needs to be provided",
"Access to digital literacy training needs to be provided",
"Quality technical support needs to be provided",
"Applications and online content designed to enable and encourage self-sufficiency and collaboration"
]
function generateFact1() {
  factCounter1++;
  if (factCounter1 == facts1.length) {
    factCounter1 = 0;
  }
    fact1.innerHTML = facts1[factCounter1];
}
function generateFact2() {
  factCounter2++;
  if (factCounter2 == facts2.length) {
    factCounter2 = 0;
  }
    fact2.innerHTML = facts2[factCounter2];
}
function generateFact3() {
  factCounter3++;
  if (factCounter3 == facts3.length) {
    factCounter3 = 0;
  }
    fact3.innerHTML = facts3[factCounter3];
}
factBtn1.addEventListener('click', generateFact1);
factBtn2.addEventListener('click', generateFact2);
factBtn3.addEventListener('click', generateFact3);
