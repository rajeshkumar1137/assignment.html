function calculator() {
    var note_2000 = document.getElementById('2000').value;
    var note_500 = document.getElementById('500').value;
    var note_200 = document.getElementById('200').value;
    var note_100 = document.getElementById('100').value;
    var note_50 = document.getElementById('50').value;
    var note_20 = document.getElementById('20').value;
    var note_10 = document.getElementById('10').value;
    var note_5 = document.getElementById('5').value;
    var note_2 = document.getElementById('2').value;
    var note_1 = document.getElementById('1').value;

    //2000
    var total_2000 = note_2000 * 2000;
    document.getElementById('t2000').innerHTML = total_2000;

    //500
    var total_500 = note_500 * 500;
    document.getElementById('t500').innerHTML = total_500;

    //200
    var total_200 = note_200 * 200;
    document.getElementById('t200').innerHTML = total_200;

    //100
    var total_100 = note_100 * 100;
    document.getElementById('t100').innerHTML = total_100;

    //50
    var total_50 = note_50 * 50;
    document.getElementById('t50').innerHTML = total_50;

    //20
    var total_20 = note_20 * 20;
    document.getElementById('t20').innerHTML = total_20;

    //10
    var total_10 = note_10 * 10;
    document.getElementById('t10').innerHTML = total_10;

    //5
    var total_5 = note_5 * 5;
    document.getElementById('t5').innerHTML = total_5;

    //2
    var total_2 = note_2 * 2;
    document.getElementById('t2').innerHTML = total_2;

    //1
    var total_1 = note_1 * 1;
    document.getElementById('t1').innerHTML = total_1;




    var total = +total_2000+ +total_500+ +total_200+ +total_100+ +total_50+ +total_20+ +total_10+ +total_5+ +total_2+ +total_1;
    document.getElementById('result').innerHTML = +total + "~INR";


    var total_note = +note_2000+ +note_500+ +note_200+ +note_100+ +note_50+ +note_20+ +note_10+ +note_5+ +note_2+ +note_1;

    document.getElementById('note').innerHTML = + total_note + "~NOTES";


    var num = parseInt(total);
    document.getElementById('words').innerHTML = test(num) + " Rupee Only";
}

function test(n) {
    if (n < 0)
        return false;
    single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    if (n === 0) return 'Zero'
    function translate(n) {
        word = ""
        if (n < 10) {
            word = single_digit[n] + ' '
        }
        else if (n < 20) {
            word = double_digit[n - 10] + ' '
        }
        else if (n < 100) {
            rem = translate(n % 10)
            word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem
        }
        else if (n < 1000) {
            word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100)
        }
        else if (n < 1000000) {
            word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000)
        }
        else if (n < 1000000000) {
            word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000)
        }
        else {
            word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000)
        }
        return word
    }
    result = translate(n)
    return result.trim() + ' only'
}


const copyContent = async () => {
    let cash = document.getElementById('cash').innerText
    let note = document.getElementById('note').innerText
    let word = document.getElementById('word').innerText;
    let content = `${cash}\n ${note}\n ${word}\n`
    try {
        await navigator.clipboard.writeText(content);
        alert('Content copied to clipboard');
    } catch (err) {
        alert('Failed to copy: ', err);
    }
}