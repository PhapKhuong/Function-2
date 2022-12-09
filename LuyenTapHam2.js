function calFactorial(number)
    {
        let fac = number;
        if (number === 2) fac *= 1;
        else fac *= calFactorial (number-1);
        return fac;
    };

function displayFactorial()
    {
        let x = +document.getElementById("inputNum").value;
        document.getElementById("result3").innerText = calFactorial(x);
    };


function isNum(str)
    {
        let toNum = parseInt(str);
        if (!isNaN(toNum)) return true;
        else return false;
    };

function displayIsNum()
    {
        let w = document.getElementById("inputStr").value;
        document.getElementById("result4").innerText = isNum(w);
    };


function findMin(num1, num2, num3)
    {
        let min = num1;
        if (min > num2) min = num2;
        if (min > num3) min = num3;
        return min;
    };

function showMin()
    {
        let n1 = +prompt ("Nhập vào số thứ nhất");
        let n2 = +prompt ("Nhập vào số thứ hai");
        let n3 = +prompt ("Nhập vào số thứ ba");
        document.getElementById("result5").innerText = "Số nhỏ nhất là: " + findMin(n1, n2, n3);
    };


function isInt (number)
    {
        if (number > 0) return true;
        else return false;
    };

function displayIsInt()
    {
        let n = +document.getElementById("int").value;
        document.getElementById("result6").innerText = isInt(n);
    };



function changeLocation(arrNum)
    {
        let lastArr = [];
        lastArr[0] = arrNum[1];
        lastArr[1] = arrNum[0];
        return lastArr;
    };

function showChangeLocation()
    {
        let firstArr = [];
        firstArr[0] = +prompt("Nhập phần tử thứ 0");
        firstArr[1] = +prompt("Nhập phần tử thứ 1");
        document.getElementById("result7").innerHTML = "Số ban đầu: " + firstArr.join("; ") + "<br>" + "Sau khi sắp xếp: " + changeLocation(firstArr).join("; ")
    }



function reverseArr(arr)
    {
        return arr.reverse();
    };

function showReverseArr()
    {
        let firstNums = [];
        let n = +prompt("Nhập độ lớn của mảng");
        for (let i = 0; i < n; i++)
            {
                firstNums[i] = +prompt("Nhập phần tử thứ " + i);
            };
        document.getElementById("result81").innerText = "Mảng ban đầu: [" + firstNums.join("; ") + "]";
        document.getElementById("result82").innerText = "Mảng sau khi đảo: [" + reverseArr(firstNums).join("; ") + "]";
    };


function countApperance(arr, word)
    {
        let count = 0;
        for (let i = 0; i < arr.length; i++)
            {
                if (word === arr[i]) count += 1;
            }
        return count;
    };

function displayQuantity()
    {
        let w = prompt("Nhập vào một ký tự");
        let firstStr = [];
        let n = +prompt("Nhập vào độ lớn của mảng");
        for (let i = 0; i < n; i++)
            {
                firstStr[i] = prompt("Nhập phần tử thứ " + i);
            };
        document.getElementById("result91").innerText = "Mảng ban đầu: [" + firstStr.join("; ") + "]";
        if (countApperance(firstStr, w))
            document.getElementById("result92").innerText = "Số lần xuất hiện của " + w + " là: " + countApperance(firstStr, w);
        else
            document.getElementById("result92").innerText = "-1";
    };