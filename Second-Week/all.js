	//Task 1 Functions.................................////
	
         function display(val) 
         { 
             document.getElementById("result").value+=val 
			 return value;
         }
           
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
			 return y;
         } 
           
         function clr() 
         { 
             document.getElementById("result").value = ""
			 return value;			 
         } 
		 function abs()
		 {
			 let t1=document.getElementById("result").value
			 let y=Math.abs(t1);
			 document.getElementById("result").value=y
			 return y;
		 }
		 function sqrt()
		 {
			 let t1=document.getElementById("result").value
			 let y=Math.sqrt(t1);
			 document.getElementById("result").value=y
			 return y;
			 
		 }
		 function back()
		 {
		 var value = document.getElementById("result").value;
		 document.getElementById("result").value = value.substr(0, value.length - 1);
		 }
     
	
	//Task 2 Functions.....................................///
	
	
	function validate()
		{
		var username=document.getElementById("txt1").value;
		var phone=document.getElementById("txt2").value;
		var mail=document.getElementById("txt3").value;
		var regx= /^[a-zA-Z\-]+$/;
		var regx1=/^\d{10}$/;
		var regx2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
		if(txt1.value.trim()=="" || txt2.value.trim()=="" || txt3.value.trim()=="")
		{
			alert("Empty Field");
			return false;
		}
		if(regx.test(username))
		{
		alert("Valid username");
		document.getElementById("lbl").style.visibility="hidden";
		}
		else
		{
		alert("Invalid username");
		document.getElementById("lbl").style.visibility="visible";
		}
		if(regx1.test(phone))
		{
			alert("valid Phone number");
		}
		else
		{
			alert("Number Should be 10 digit")
		}
		if(regx2.test(mail))
		{
			alert("Valid Email ID");
		}
		else{
			alert("Must be included . and @ in mail id");
		}
		return 0;
		}
	
	
	//Task 3 Functions.....................................................////
	
	function palindrome()
	{
		var pali=document.getElementById("one").value;
		var x="";
		for(let i=pali.length-1;i>=0;i--)
		{
			x=x+pali[i];
		}
		if(one.value.trim()=="")
		{
			alert("Blank Field");
		}
		 else if(pali==x)
		{
			alert("It is a Palindrome");
			return pali + "Palindrome";
		}
		else
		{
			alert("It is not a Palindrome");
			return false;	
		}
	}

	function anagram(str1,str2)
	{
		var str1=document.getElementById("one").value;
		str1=str1.toLowerCase();
		var str2=document.getElementById("two").value;
		str2=str2.toLowerCase();
		let sum1=0;
		let sum2=0;
		for(let i=0;i<str1.length;i++)
		{
			sum1=sum1+str1.charCodeAt(i);
		}
		for(let j=0;j<str2.length;j++)
		{
			sum2=sum2+str2.charCodeAt(j);
		}
		if(one.value.trim()=="" || two.value.trim()=="")
		{
			alert("Blank Field");
		}
		else if(sum1===sum2)
		{
			alert("Anagram");
			return str1===str2 + "Anagram";
			return true;
		}
		else
		{
			alert("Not Anagram");
			return false;
		}
		return 0;
	}
	
	
	//Task 4 Functions..............................................................//
	
	
	function Random() 
	{
	return Math.floor(Math.random() * 1000)+1;
	} 
	
	function play()
	{
		var one1="Human";
		var two2="Cockroach";
		var three3="Nuclear Bomb";
		var str1=document.getElementById('one').value;
		var x=str1%3;
		document.getElementById('one').value=x;
		var str2=document.getElementById('two').value;
		var y=str2%3;
		document.getElementById('two').value=y;
		if(x==y)
		{
			alert("Tie");
			return true;
		}
		else if((x==0||y==0)&&(y==1||x==1))
		{
			alert("Human Wins");
			return true;
		}
		else if((x==1||y==1)&&(y==2||x==2))
		{
			alert("Cockroach Wins");
			return true;
		}
		else if((x==0||y==0)&&(y==2||x==2))
		{
			alert("Human Dies");
			return true;
		}
		else
		{
			alert("Try Again...!!!!");
			return false;
		}
		return 0;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	