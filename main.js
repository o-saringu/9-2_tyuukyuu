function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	
	
	if (one.value == "calculate(10,40,100,220);"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：calculate(10, 40, 100, 220);";
	}

	if (two.value == "floatcalculate(floatx1,floaty1,floatx2,floaty2)"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：float calculate(float x1, float y1, float x2, float y2)";
	}

	if (three.value == "returnsqrt(dx*dx+dy*dy);"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：return sqrt(dx*dx + dy*dy);";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);