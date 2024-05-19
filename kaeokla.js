function carbonRuduction(){
var cup = document.getElementById("cup").value;
var tree = document.getElementById("tree").value;
var treePerCup = document.getElementById("treePerCup").value;
var treePerRai = document.getElementById("treePerRai").value;
var area = document.getElementById("area").value;
var survival = document.getElementById("survival").value;

var cr = "";
if(tree=="sak" && area=="much"){cr=2.16;}
else if(tree=="yuka" && area=="much"){cr=6.09;}
else if(tree=="thepha" && area=="much"){cr=6.09;}
else if(tree=="narong" && area=="much"){cr=4.4;}
else if(tree=="yak" && area=="much"){cr=6.49;}

else if(tree=="sak" && area=="moderate"){cr=1.72;}
else if(tree=="yuka" && area=="moderate"){cr=4.77;}
else if(tree=="thepha" && area=="moderate"){cr=4.4;}
else if(tree=="narong" && area=="moderate"){cr=3.48;}
else if(tree=="yak" && area=="moderate"){cr=4.8;}

else if(tree=="sak" && area=="less"){cr=1.36;}
else if(tree=="yuka" && area=="less"){cr=3.15;}
else if(tree=="thepha" && area=="less"){cr=4.00;}
else if(tree=="narong" && area=="less"){cr=2.27;}
else if(tree=="yak" && area=="less"){cr=0.77;}


else{cr=0;}

var weightOfCup = 0.012;
var emissionFactor = 3.54;
var result0 = cup * 12 * treePerCup * survival/100 * 1/ treePerRai  * cr;
var result = result0.toLocaleString(undefined, {
  minimumFractionDigits: 2,
    maximumFractionDigits: 2
	});
var burningFraction = 0.078;	
var reduction0 = cup * 12 * burningFraction * weightOfCup * emissionFactor/1000;
var reduction = reduction0.toLocaleString(undefined, {
  minimumFractionDigits: 4,
    maximumFractionDigits: 4
	});
	
var report = "มีศักยภาพดูดกลับคาร์บอนไดออกไซด์ " + result + " ตันคาร์บอนไดออกไซด์เทียบเท่า/ปี และลดการปลดปล่อย " + reduction + " ตันคาร์บอนไดออกไซด์เทียบเท่า/ปี";
if(cup==""){alert("โปรดกรอกจำนวนแก้วพลาสติก");}
else if(tree==""){alert("โปรดเลือกชนิดไม้");}
else if(treePerCup==""){alert("โปรดกรอกจำนวนต้นต่อแก้ว");}
else if(treePerRai==""){alert("โปรดกรอกจำนวนต้นต่อไร่");}
else if(area==""){alert("โปรดเลือกความเหมาะสมของพื้นที่เพาะปลูก");}
else if(survival==""){alert("โปรดกรอกร้อยละของอัตรารอด");}
else{alert(report);
		document.getElementById("output").innerHTML="<textarea id='output2' style='width:100%;font-size:22px;'></textarea><br><div style='font-size:22px'><i class='fa fa-clone' onclick='copyText()'></i></div>";
		document.getElementById("output2").value = report;
		setHeight();
}
}

function copyText() {
  const element = document.querySelector('#output2');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("copied!");
   element.setSelectionRange(0, 0);
}

function setHeight(){
	document.getElementById('output2').style.height = document.getElementById('output2').scrollHeight + 'px';
}
