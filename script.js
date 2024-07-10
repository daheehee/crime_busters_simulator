
function makeNumberP() { //generates random number for samples and stores it in y
	var minNumber = 1; 
	 var maxNumber = 13; 
	 var randomnumber = Math.floor((Math.random() * maxNumber) + minNumber); 
	 localStorage.y=randomnumber; 
	 var h = document.getElementsByClassName("answer");
h[0].innerHTML = "Generated";
h[0].style.display="block";
	 setTimeout(hides, 200);
	 
}

function makeNumberL() { //generates random number for liquid and stores it in y
	var minNumber = 1; 
	 var maxNumber = 6; 
	 var randomnumber = Math.floor(Math.random() * maxNumber + minNumber);
	 localStorage.y=randomnumber+13; 
	 var h = document.getElementsByClassName("answer");
h[0].innerHTML = "Generated";
h[0].style.display="block";
	 setTimeout(hides, 200);
}

function makeNumberM() { //generates random number for metal and stores it in y
	var minNumber = 1; 
	 var maxNumber = 6;
	 var randomnumber = Math.floor(Math.random() * maxNumber + minNumber); 
	 localStorage.y=randomnumber; 
	 var h = document.getElementsByClassName("answer");
	 localStorage.y=randomnumber+19; 
h[0].innerHTML = "Generated";
h[0].style.display="block";
	 setTimeout(hides, 200);
}

function makeAnalyze() { //generates random number to pick which picture to show for analysis
	var minNumber = 1; 
	 var maxNumber = 5; 
	 var randomnumber = Math.floor(Math.random() * maxNumber + minNumber); 
	 localStorage.analyze=randomnumber; 
}

function type(){ //make sure you get redirected to the right page
	var x= localStorage.getItem("y");
	var website;
	var color;
	if (x>=20){
		website = "metal.html";
		color = "#bbebfc";
	}
	else if (x>=14){
	website = "liquid.html";
	color = "#bbfccc";
	}
	else{
	website = "powder.html";
	color = "#faebeb";
	}
	document.getElementById("type").href = website;
	document.getElementById("background").style.backgroundColor = color;
}


function fizz(){ //generates HCl results
var reactionAcid;
var x = localStorage.getItem("y");
if (x==3 || x==10|| x== 12){
reactionAcid = "https://lh3.googleusercontent.com/g9JcWi-zMbbIacD-9WCmJBSXs5wvJltC4Vnda2zjGLcf8OIMjDzDFDjbHrAMHsEwMQ2eZlhWijJKps5fgK5TZtnNg0RhBRva2VO2yu4uvCRb2Ey-g2P8h9Y1UX_3g5Fakxwc4lUY7g=w2400";
}
else if (x==23 || x==22){
reactionAcid = "https://lh3.googleusercontent.com/HyIACo_AFLhZNCfQ2xXpKeTI9wHzncTkxCnErAnK6hsQGZpUNUNp5m4XM_3f4bhLoeLXVKrw1vH_o_CjXS64rk5PkYk69YGuNAhDhdx_CRyTlgZqSoKZ5flq9jmr9yZ96sMv3SG16w=w2400"
}
else if (x==21||x==24||x==25){
reactionAcid = "https://lh3.googleusercontent.com/lRYQ_M87c_Jh2hpFRrXqXZ6BuoC1O4ihAXSUDSorB7kEurowLVLfHHQjPX-jqx93hJG3-IV5ecRMpab43vO7C1QrVCJpaw8FwUUnUgaYFxaawUUijDVZsp8qv3-K8Buc-yRXQvQq5g=w2400"
}
else if (x==20){
reactionAcid = "https://lh3.googleusercontent.com/3yvnwdM3GWXpNCO7GwV44ueaNSNDMD7UbMvLE3kMbMjsXpnIVePOkWTGjygnZy4N5UdVHMr23hWYQQT8yoD6ZTLT2gw5LXclriwnui6Kg9PSu-3dcvauhPFYQG5KCaYqVxMyF5DzUA=w2400"
}
else {
reactionAcid = "https://lh3.googleusercontent.com/IYDgpCaCUDRXAoxAAxY2tOOgV2aMG-deLSIk4E6nFKtl79EMw6bW7fFkfAig9fDfLOWf9z4OqEun8NsKZrD5qqiQ62Eh0o9WvYRIatg3SmIHXtI5mOEPlQNQLJGBUAeTLEczAu9kOA=w2400";
}
document.getElementById("acid").src= reactionAcid;
}


function water(){ //generates water results
var reactionWater;
var x = localStorage.getItem("y");
if (x==10){
reactionWater = "https://lh3.googleusercontent.com/g9JcWi-zMbbIacD-9WCmJBSXs5wvJltC4Vnda2zjGLcf8OIMjDzDFDjbHrAMHsEwMQ2eZlhWijJKps5fgK5TZtnNg0RhBRva2VO2yu4uvCRb2Ey-g2P8h9Y1UX_3g5Fakxwc4lUY7g=w2400";
}
else if (x== 3 || x== 7 || x== 13 ){
reactionWater =  "https://lh3.googleusercontent.com/4GuSleyy6v9LmKf0EWpxHN1pkglo7pZWXTYLt_8soHa74sdfW8GTqllzGbpOo5b9R6smsBlD569UgRWPgBQj390f0t7PjTPrT9r2UUNbfsJa7TB8cbcXCf-RR1REJqnu03ulbykpfA=w2400";
}
else if (x==2){
reactionWater= "https://lh3.googleusercontent.com/h2oZ-Rfc6d8YZ9BQNfEWtzW3xxd7ESAS8XMBckxpm5xEUcRNDlqhBAcj6w_-o-z1hTyY4Z0iAwnn_IFJXgrrdvposedb6Kt6J5t_oJeYGJ19jS1JbiWWP1MZrP3KJRfEZZGTWpzoZA=w2400";
}
else if (x==8){
reactionWater= "https://lh3.googleusercontent.com/IYDgpCaCUDRXAoxAAxY2tOOgV2aMG-deLSIk4E6nFKtl79EMw6bW7fFkfAig9fDfLOWf9z4OqEun8NsKZrD5qqiQ62Eh0o9WvYRIatg3SmIHXtI5mOEPlQNQLJGBUAeTLEczAu9kOA=w2400";
}
else if (x==9){
reactionWater= "https://lh3.googleusercontent.com/fElE8LK2lkGa077Q3tyIcIyhz2inJT7B8oad0QW1T9E96_OY9igUK7hSSJyV43WSENEZsZhp9keCdvkexdhSOl05XDIAem4W_vwtXDfXdo3vAi_VlHQIa1gf_2haayE7XD0UMy7AQQ=w2400";
}
else if (x==11){
reactionWater= "https://lh3.googleusercontent.com/EcuFhToH6X7xK_jR_5Qcj6LN4BUDzXhPLzZFM6IzL0EQXPrMb42dK12OjMvEeyc44Hqtacau7cn4qt3W9S8qm-M_pY_q-uHDw6TF5UoqbHyfVVeqXc-T72pgLzH5YMDjDuL3epN-zQ=w2400";
}
else if (x==25){
reactionWater = "https://lh3.googleusercontent.com/lRYQ_M87c_Jh2hpFRrXqXZ6BuoC1O4ihAXSUDSorB7kEurowLVLfHHQjPX-jqx93hJG3-IV5ecRMpab43vO7C1QrVCJpaw8FwUUnUgaYFxaawUUijDVZsp8qv3-K8Buc-yRXQvQq5g=w2400"
}
else if (x==21||x==24||x==22||x==23||x==20){
reactionWater = "https://lh3.googleusercontent.com/3yvnwdM3GWXpNCO7GwV44ueaNSNDMD7UbMvLE3kMbMjsXpnIVePOkWTGjygnZy4N5UdVHMr23hWYQQT8yoD6ZTLT2gw5LXclriwnui6Kg9PSu-3dcvauhPFYQG5KCaYqVxMyF5DzUA=w2400"
}
else {
reactionWater= "https://lh3.googleusercontent.com/8QLEfLYixqZaRptUWjB9MF3Kb5BbGU3B17f4Cj_PPBSh6G_stuK9njV0KbTjP5QFboNv9aRzbuL_DUkELKDQlLALUW_ZhDuaObIGPmfA0EU0IsX-DsLhDFxFmL3I81HgjcGeYkYx2w=w2400";
}
document.getElementById("water").src= reactionWater;
}


function iodine(){ //generates iodine results
var reactionIodine;
var x = localStorage.getItem("y");
if (x==7 || x==8){
reactionIodine = "https://lh3.googleusercontent.com/8VoaGAQoM3cfgR8SCO2z7_dEFgltBuRkiMNtmH4jZwbuWlsH3ES6cKeq_rTvaGOBwfmBHiPSkXKbn69B2gvCVjMttRN8T27jJRZV2J--cnBu1xV_B7Wu6NhBbFs6nFwbu5H1Fde1mQ=w2400";
}
else if (x==4){
reactionIodine ="https://lh3.googleusercontent.com/8QLEfLYixqZaRptUWjB9MF3Kb5BbGU3B17f4Cj_PPBSh6G_stuK9njV0KbTjP5QFboNv9aRzbuL_DUkELKDQlLALUW_ZhDuaObIGPmfA0EU0IsX-DsLhDFxFmL3I81HgjcGeYkYx2w=w2400";
}
else if (x==15){
reactionIodine = "https://lh3.googleusercontent.com/E8lW1SoIgGu62krcAR_uMGh0QyHTNAiKsBn30oN0PfuJgwBjYIwVcS3XB1-7s1RqQpn-0AvZBlPx4azFlf9J7KJ9IbRWlNLAiwLiqIds8_TIepFCfRJ-1nePl0M8nBZV3tGmBBhejw=w2400";
}
else {
reactionIodine = "https://lh3.googleusercontent.com/agA-72E-oiUtW6HdDE0qdceCztJtVBFLmV3qQz3No4pADcb12HQAtxcXNpsSzAMssbHcyFdbKbtfslW_Znofv9B4zZxGLPL5y7E5iK49DdCw70tVAzhl6jaHuIhoSMTOKcC4m8Uqpg=w2400";
}
document.getElementById("iodine").src= reactionIodine;
}


function magnetic(){
var reactionMagnet;
var x= localStorage.getItem("y");
if (x==24){
reactionMagnet = "magnetic";
}
else {
reactionMagnet = "not magnetic";
}
document.getElementById("magnet").innerHTML = reactionMagnet;
}


function ph(){ //generate ph paper
var reactionph;
var x = localStorage.getItem("y");
if ( x==8 || x==12){
reactionph = "https://lh3.googleusercontent.com/0HyGDWRkYWzBqUXYw8bm1xoHgN64ZCvZobYpVvot6WIx28nlekzUkhl1hycPzaBxnzhweGXvpkaj3Sc1gWxzO2W3m8xb9HwImpdCh4rP8lYLwkjeehyxRjoEAH3uQm6jvRgufu2MwQ=w2400";
}
else if (x==5 || x==6 || x==11||x==14||x==15){
reactionph = "https://lh3.googleusercontent.com/i2qO3bCWItc_4b9Yldo9rboDa2MTF94nWp1FDb2ihti39aLpEij5F3twLTkVvvf9r4actI4qf7DAgVkS1ZLYfDArhUfmEEz1bld145e_bBt2ZQMjfYBjMWWJ9kH7yiXQrz5glUTvew=w2400";
}
else if (x==4||x==17||x==16){
reactionph = "https://lh3.googleusercontent.com/KQc50J1It5eCDVE63zaXoaUNouLlAkIp-66YLFZ3ItgxXNTsIhjA1gGC8MDwlYKERZAgBl9NBlhkcCjIHj152KV3i4pr6YH8CNG6xCPleCKBEkQZlnHGxmL1dtjMVesYlJtFqfEcRA=w2400"
}
else if (x==18){
reactionph = "https://lh3.googleusercontent.com/SuGAJDXtQP5EM_hV2re5WrLdn4tPd0x6OnpCeT14zic3pLiEPFY1kXLF2luUZPD0Q02qsHOaqr-XgxT_dh9PSuVYVeoOoqY5yaWY39iZqY2wE0XGpgjx9npNCk9Wy5Q0ZHZ1hkIDsQ=w2400"
}
else {
reactionph = "https://lh3.googleusercontent.com/IitHSE5sRVPZeIC24v8XuriU7rJtxbdhI-mOD9HMtU-lTloO-SwGWCRWH4noubhWsRZXwoZVwKZCx0bPnTOZw_Cuuu4vsAf3OOaXLEUnU5cVyFlAEMQzEhZxtqTNR4KmPYTbYhlCKg=w2400";
}
document.getElementById("ph").src= reactionph;
}


function pick(){ //generates picture for analysis
var sample;
var x = localStorage.getItem("y");
var z =  localStorage.getItem("analyze");
switch (x) {
  case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMRfzs9eZHOhEW1XqhuTNLZnftA-8B7bJQ4xvpOmVXQNkKfQl1BGteLe8jHyAjZE2bw6yygCa2IorFK_lmzvGc7KFAKPF1VHGnQ4RqmzGt_sZEpTA4=w2400";
    break;
  case "2":
  switch (z){
  	case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMEdA_UiWWULRlfINE426-ePqqk7JsknNsd-l4jEdgmCe3lcNBZjfjuyHkv4b8XU6v3gHPC4V5bGeGWyC_-qLe65pJWdvImbd5NItZbWudRAgpCUQw=w2400";
    break;
    case "2":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPEG9KTHPY075o8bYH9ypmgWb83fwb5uzFYOXvwbidmE-hgqB4lLSW_foJgPpE990fGbhyycyMfSIlSDIowKmiPR6sG35mpIaGdqB6fl3JIJWmn0ls=w2400";
    break;
    case "3":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPlN1OTQdB_M-2CzFo2twEItKUCCNUZrwlNL8UFRZJEFPTWsLWlcL7sQR48zBALW2hLmf4sF88GN14CJczx7xOYETJQvcZKVB8OOKY95D-D5MgXhu0=w2400";
    break;
    case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMXBICvBE_nYW92LB74gSztrXdJZb9F_IiHWa_lZT4VcODfvaAiXCluwxveC6Av_Mgnh5rwq-HPrXXmlOfVVwLSH8Na7hhQzhcQ-jZsi-GfigxIB0U=w2400";
    break;
    case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPEG9KTHPY075o8bYH9ypmgWb83fwb5uzFYOXvwbidmE-hgqB4lLSW_foJgPpE990fGbhyycyMfSIlSDIowKmiPR6sG35mpIaGdqB6fl3JIJWmn0ls=w2400";
	break;
	}
    break;
  case "3":
  	switch (z){
  	case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNtqjNdcbQRStM5NqgAPRK-TjzHJ1lLvUvvIlauc6Z87eQ5MRx-9YDJCSazn3F59UpdUCKXISLgwj62w_3bY-xzl6fc8o0S2QE_QZ-eQUQFJuSwFWk=w2400";
    break;
    case "2":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPGhqiEtTItbzf3xdQRPvp--3CPZ7yO0MP7clkONhUPHsHiRD4UzeYkGIgfWeZbKlZpcmQ5v9yaXzKfykwcZUaB3JYREJ05z2qzAdSucck1_GraxHM=w2400";
    break;
    case "3":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNiOq2RTvYp2TaObIeY2UOwIfbkcykRxeNivQlod8Y-mzLAoDWJbw-ASELVJdMOUyUaCMW31MNzkOV_TPs7Tql1ifbwmfBevWPZpcN8KEZyNdEJNUo=w2400";
    break;
    case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNX-bMsb8L_LSK7gvprAe7PtOtI1Q-ryk7mjHE6hHe4l-sMMZTuLePW-DRKosaENaFau32b96VD3GzpAGmoMFgQTwddL5DBPcEvjO-psGkV9vYNf5k=w2400";
    break;
    case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMuWSZw0q4N2FQ6Xux6vI0Z_wpQVnVnStH6Jk9a84DuGO04eFqZeORYCFHelXsw5ncD30o591E5rTWU0bXp-pUHi5mmZrxwpzZvKwMPYW-zX8lYV-g=w2400";
    break;
    }
    break;
  case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNTVWsykUayc4Zfs7fDBG_PFAIMxZo29y9F1A5VyFXaJ1JL_2mVKa-RfF0azTjhnvMnqvDOywKhnJz4Ds95mcfPunL3hTmAKPEm-9aD1tKMN-heDKo=w2400";
    break;
  case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPP7qcqIni_X6WtJgdzxVQdUVF4HPn0nGZRjRdy57UvK1mV3JFE-oRLr_a5UTZW6KzyL3NMk7oDqYxgzAhIIc8OmVYGSpXJAvbRb6PJpqVKe2Vj1rM=w2400";
    break;
  case  "6":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMzyk80HQ3DY4FKcfrdv-EikgHgA5FfMtYDYvyCCQQe_bsxuUSJAAIk-PPTLT0RcCuZTxg16DuPrDHT7XR3QRLj675Iv0p7ulQHI1yFTuLJYSy9DIQ=w2400";
    break;
     case "7":
     switch (z){
  	case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPPUqbsVFkaRPg9cvPMrypmuKF5vWwuHPjIvFdNAojy4wjr13MeBxtkKA7kiAwanMpDRFaL8cGt68AI4vbT9XnP7LQlxhMmKoYVrehE7bHw3U1l6XU=w2400";
    break;
    case "2":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNuDDaXHKxchd3Xsme3HZ8Yt4tljR61ygtpFJIcyhFbeD3ptupwTtCt4eQGRF3j4k18GuHmlWyirjsJiRH1-OTHHBYPnkpZv2Q8l40i2TTQVn3VczE=w2400";
    break;
    case "3":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMMBx5bFKJ6SAGXuwcfi8nzDvYD9ozfGDN9ff6XlKtW-upJxbpDoGX0a87hdLmeKJVRocV9OMrPtQkUgL7uoax6N__54LKfAJ5UW7NyV-e9erdgTJ4=w2400";
    break;
    case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNNqXEUIfCO0UyxMEF_krE7x5oyHxU1TVrNR4R_tHKIdovQegSgUm5C7ar-myMtKOO_1VQPDLObDfwmdleehYpCWyrAiJq8E9bRkCwGvcUSg3tk0TQ=w2400";
    break;
    case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczP89p0opHRY3QadpuJynGy8ZOdERRxaIReJrhcjdfBYGCtvrS14rdZoxDccgq8YmlDGeMXAOQ7YyIH9TCDv-ehEHWyL05mPfhmGNC52DwQXB7Gbfqc=w2400";
    break;
    }

    break;
     case "8":
     switch (z){
  	case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMV2S31pBsKuiAvh6UjwQh1tBvcRo0XDFZgj9JjXuO9PpCtDPDi3Tv-R1HEP9KctdVMLUzvQU1kIn5bXhvWKZvHGWxxDHTWsS483nsiiwsJAsbM7xQ=w2400";
    break;
    case "2":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNq38GMx9KczvsSDBv-ZnKpFUzU3QNsIj22RBKwat1J6aF69S9McQ1ZkgzYnZiCV8PWNmXurq1lhTpvC8VgVWa74KmJQodI1KqqMZLc1PPvhLdnGsA=w2400";
    break;
    case "3":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNA8t45zWIIZ1bQvx8kWx_f6ATxMFAJVDFoD8Dfu6nhYvLr4PsBHSUzAVdTgSDQRKsn4bqIw3sOtTOuCXWW-xuFAOqVhiwbteli5BMguSguTnIp89U=w2400";
    break;
    case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNA8t45zWIIZ1bQvx8kWx_f6ATxMFAJVDFoD8Dfu6nhYvLr4PsBHSUzAVdTgSDQRKsn4bqIw3sOtTOuCXWW-xuFAOqVhiwbteli5BMguSguTnIp89U=w2400";
    break;
    case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMV2S31pBsKuiAvh6UjwQh1tBvcRo0XDFZgj9JjXuO9PpCtDPDi3Tv-R1HEP9KctdVMLUzvQU1kIn5bXhvWKZvHGWxxDHTWsS483nsiiwsJAsbM7xQ=w2400";
    break;
    }
    break;
     case "9":
     switch (z){
  	case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMZsB6hnJeZwdsPdTNpxekk-VDFwJzqdCEQ75fZN-Zrm_JVEjUz8WhXOdkUfxhdr_Q6ejMeSwZmYkjEZOS9Zv3E7TWFbCKpKn_wOqCrHHHMTV78rx8=w2400";
    break;
    case "2":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPKQNqeDQfBRtuazYN6xqoOUwX97xUVY6E7pL-1azSHVkEKaiThuLZLJqBxQypZdSbpRasm_72F7AWdLmv9u_Re7mUiEIoN8qX3qSq0lbyocn-7PgY=w2400";
    break;
    case "3":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPNOuceSaw5mboekMxrH7odjHEtk6taq0yyKntWWTMw8S8tj8vCce0VAB1fvXYmJW5T_75eQ-3ulwCWAv_35_1uDsyyqzWv210WMjAG_iqKAYXRWKs=w2400";
    break;
    case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOexcrRQILzLeAMWQ1YCmmm4xY3ekTPfFSuX3W0nmyyZ7ckFZHK_2IF-4lObZITl3L8bo6ehGXulFsYkI1dSwcE8ZzuQwaj0rRMtNay_dETamHu_bk=w2400";
    break;
    case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPKQNqeDQfBRtuazYN6xqoOUwX97xUVY6E7pL-1azSHVkEKaiThuLZLJqBxQypZdSbpRasm_72F7AWdLmv9u_Re7mUiEIoN8qX3qSq0lbyocn-7PgY=w2400";
    break;
    }
    break;
     case "10":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMcgnzdSAbYeFQcxFGzt5e58coS7pJ2Qpy0pF4gVziqm9z79m21FdUXhUplbBxe_sN0zTWg_ptalCgo2mFqwz-2usUdWqWWqsJlOCzG5-As--I3Xgw=w2400";
    break;
     case "11":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOllgm2PO9b2T__t4rD4wo3qbKfYaMcVOqQ125r_kAdpE1McDmmPlTHYdOtPayeA2NWp8AadUNK59s0yrAlbHvzxUBOAnX4LMKvlPo2MBqFXidp3eg=w2400";
    break;
     case "12":
     switch (z){
  	case "1":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOKs0BfmTF_lsNeIYaTScKx-hhSMvitgdQtYcTAi-ooAgG3wtKrXPckAIh1sOAj99U4evy9lcfT3JssomefgMArUr2aTB2d8kN1FevnIng0QsI5jYU=w2400";
    break;
    case "2":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMq-RIe01T6Ju5dz2rPnG9q6-fqWMaMfVAqffHAB1K7CdUVTiQgK2NTvoj9H9dxqlB64M81zZmNCJgistK7roXL-vBO29hTeiQTs0kxTGHnOEbc0kE=w2400";
    break;
    case "3":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOZmXxOhVaKB-_HRtG7TtHF5RqXWdTUmaxN67KsC5V_e_KG6G5mcIO2SIbhc9ZRBhRIFF9YlS96BQemrGf8Y6hiSIIC8wz14DtVxwXHNq968ktNNRQ=w2400";
    break;
    case "4":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNLg7SL7C0joIML6cvae5DQx0_3KXZ9LeVXcwrQXDvPcGAIX5ZmnZwLjrRED3DAqvYsH3cHJzb7Cz92fNWppk7c1P2F4rDC88ms3blcc382GdvelKE=w2400";
    break;
    case "5":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczO3k60LfZvuLaGRR2I79FkWbhXj0CAZjo05dK9HjrOb2Dvdik5OZ319jiPIJpdh2o2ejje3gpfNqVKKsHx-cVPuQyayL-P9NyTvhxe3GqqrAE4FETM=w2400";
    break;
    }
    break;
     case "13":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczMlutpfIGu4rAzAaEyG5avZ_skQnF3tnExmX1GKg-VmiFkQEqtOZzwhI0bEO4BvBcPGIIFSbZFrO6GBhLX1i1s_ITwzHAx-COS5obuF2PPeMPvKHxA=w2400";
    break;
    case "14":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczP5w5CMOlDR_cyfomISQf0cMEaKcoJTpK5iZPc6qk9mgwPe_IqRgA-91s5vcLuW31Uvu81uFraCf2vYALS5RIdZ1aJhlRDbWxqdkJhEQx8xhd_eL78=w2400";
    break;
    case "15":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczP5w5CMOlDR_cyfomISQf0cMEaKcoJTpK5iZPc6qk9mgwPe_IqRgA-91s5vcLuW31Uvu81uFraCf2vYALS5RIdZ1aJhlRDbWxqdkJhEQx8xhd_eL78=w2400";
    break;
    case "16":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczP5w5CMOlDR_cyfomISQf0cMEaKcoJTpK5iZPc6qk9mgwPe_IqRgA-91s5vcLuW31Uvu81uFraCf2vYALS5RIdZ1aJhlRDbWxqdkJhEQx8xhd_eL78=w2400";
    break;
    case "17":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOzPc6XZT_QH4Q3LYvsCqzn39hdweI-PTp6r4dcP_LLn39uvcaURhaATVZXr-A6-oOqRvQFTtlTyYpUyEhPEQGimP2N6tzmAdTUTkudI2h8Q5VzSsE=w2400";
    break;
    case "18":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczP5w5CMOlDR_cyfomISQf0cMEaKcoJTpK5iZPc6qk9mgwPe_IqRgA-91s5vcLuW31Uvu81uFraCf2vYALS5RIdZ1aJhlRDbWxqdkJhEQx8xhd_eL78=w2400";
    break;
    case "19":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczP5w5CMOlDR_cyfomISQf0cMEaKcoJTpK5iZPc6qk9mgwPe_IqRgA-91s5vcLuW31Uvu81uFraCf2vYALS5RIdZ1aJhlRDbWxqdkJhEQx8xhd_eL78=w2400";
    break;
    case "20":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczPhtVcbT3JGQEnu-nKdLzAwxwpF8LOpY4f0ksMMJsR4PklbTVVeu9xdZHQF_dpPjZwrJhsRt_BuBbwUqc8wPAqaUHF4kJyOpgdwsi1iVn5zFReeL8Y=w2400";
    break;
    case "21":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOcx4GYFYW4c-HyQHLwbutdy04A7q79-rkjoRPQR4krEtqUh04mfXnOlOxaRdcOm6mg8c6rG1H8yb_nTJ3CQ7bU_sEEtOCvPpUrQidYAMgi0tXJ8F4=w2400";
    break;
    case "22":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNEa7SVZIU84Y2NQuXcQfoPByE4a9nH6P_ApnkHEIw2CiH43ruChpqOBLe1UkyF4Q8Ef-BzVEYx30uN1VyP2DnqS4hJb4128PTfQ1Vo_8XUJA6j6Y0=w2400";
    break;
    case "23":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczOTyE9ZhdQi9GZQO66szfJVFXu883suJZRzBZJzZ-GFLn-gytSespqTNrN0aoA5U_Z3qMzzCNtXeRoWIqbA5UV58xMPrTqK6xsemKtXXvd101DuRFI=w2400";
    break;
    case "24":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczM-mfFylO0a7HcWnpLGxrwIUTFF5rrH-O9SNq1mlr9juNAJk0HDQsbfAFTfrHo4b95Vuo9WXWA28dHAPYFbdyPnX_uU48hOmXUsJfTrKKw9-mTXtL0=w2400";
    break;
    case "25":
    sample = "https://lh3.googleusercontent.com/pw/AP1GczNOwXAWYHCaLpbJzLmpkw8YwDk9_tcs13KvhHgv8rC6UkFHdaCz_fe1nVwSJHkkf3l0jjNsopKJ5yZJL6rDKCZIV7YVy3aGCyMO9pt9wdJaBaUrImw=w2400";
    break;
    
}
document.getElementById("demo").src = sample;

}



function answer(){ //generates answer based on storage of y
var sample;
var x= localStorage.getItem("y");
switch (x) {
  case "1":
    sample = "Sodium Acetate";
    break;
  case "2":
    sample = "Sand";
    break;
  case "3":
    sample = "Calcium Carbonate";
    break;
  case "4":
    sample = "Vitamin C";
    break;
  case "5":
    sample = "Salt";
    break;
  case  "6":
    sample = "Sugar";
    break;
     case "7":
    sample = "Flour";
    break;
     case "8":
    sample = "Cornstarch";
    break;
     case "9":
    sample = "Gelatin";
    break;
     case "10":
    sample = "Alka-Seltzer";
    break;
     case "11":
    sample = "Yeast";
    break;
     case "12":
    sample = "Baking Soda";
    break;
     case "13":
    sample = "Calcium Sulfate";
    break;
     case "14":
    sample = "Water";
    break;
     case "15":
    sample = "Hydrogen Peroxide";
    break;
    case "16":
    sample = "Vinegar";
    break;
    case "17":
    sample = "Lemon Juice";
    break;
    case "18":
    sample = "Ammonia";
    break;
    case "19":
    sample = "Rubbing Alcohol";
    break;
    case "20":
    sample = "Copper";
    break;
    case "21":
    sample = "Zinc";
    break;
    case "22":
    sample = "Tin";
    break;
    case "23":
    sample = "Aluminum";
    break;
    case "24":
    sample = "Iron";
    break;
    case "25":
    sample = "Magnesium";
    
}

var h = document.getElementsByClassName("answer");
h[0].innerHTML = "This is " + sample + "!";
h[0].style.display="block";
	 setTimeout(hides, 800);
}



function check(){ //checks guess
var sample;
var x= localStorage.getItem("y");
switch (x) {
  case "1":
    sample = "Sodium Acetate";
    break;
  case "2":
    sample = "Sand";
    break;
  case "3":
    sample = "Calcium Carbonate";
    break;
  case "4":
    sample = "Vitamin C";
    break;
  case "5":
    sample = "Salt";
    break;
  case  "6":
    sample = "Sugar";
    break;
     case "7":
    sample = "Flour";
    break;
     case "8":
    sample = "Cornstarch";
    break;
     case "9":
    sample = "Gelatin";
    break;
     case "10":
    sample = "Alka-Seltzer";
    break;
     case "11":
    sample = "Yeast";
    break;
     case "12":
    sample = "Baking Soda";
    break;
     case "13":
    sample = "Calcium Sulfate";
    break;
     case "14":
    sample = "Water";
    break;
     case "15":
    sample = "Hydrogen Peroxide";
    break;
    case "16":
    sample = "Vinegar";
    break;
    case "17":
    sample = "Lemon Juice";
    break;
    case "18":
    sample = "Ammonia";
    break;
    case "19":
    sample = "Rubbing Alcohol";
    break;
    case "20":
    sample = "Copper";
    break;
    case "21":
    sample = "Zinc";
    break;
    case "22":
    sample = "Tin";
    break;
    case "23":
    sample = "Aluminum";
    break;
    case "24":
    sample = "Iron";
    break;
    case "25":
    sample = "Magnesium";
    
}

var h = document.getElementById("guess").value;
if (sample==h){
var g = document.getElementsByClassName("guess");
g[0].innerHTML = "Right answer!";
g[0].style.display="block";
	 setTimeout(hides, 800);
}
else{
var g = document.getElementsByClassName("guess");
g[0].innerHTML = "Try again!";
g[0].style.display="block";
	 setTimeout(hides, 800);
}
}


function smell(){ //generates answer based on storage of y
var scent;
var x= localStorage.getItem("y");
switch (x) {
  case "1":
    scent = " ";
    break;
  case "2":
    scent = " ";
    break;
  case "3":
    scent = "   ";
    break;
  case "4":
    scent = "  ";
    break;
  case "5":
    scent = " ";
    break;
  case  "6":
    scent = " ";
    break;
     case "7":
    scent = " ";
    break;
     case "8":
    scent = " ";
    break;
     case "9":
    scent = "";
    break;
     case "10":
    scent = " ";
    break;
     case "11":
    scent = " ";
    break;
     case "12":
    scent = "";
    break;
     case "13":
    scent = " ";
    break;
     case "14":
    scent = "Smells like nothing.";
    break;
     case "15":
    scent = "Smells like nothing.";
    break;
    case "16":
    scent = "Smells stinky.";
    break;
    case "17":
    scent = "Smells like citrus.";
    break;
    case "18":
    scent = "Smells intense and like urine?";
    break;
    case "19":
    scent = "Smells sweet and intense.";
    break;
    case "20":
    scent = " ";
    break;
    case "21":
    scent = " ";
    break;
    case "22":
    scent = " ";
    break;
    case "23":
    scent = " ";
    break;
    case "24":
    scent = " ";
    break;
    case "25":
    scent = "";
    
}
var smelly = document.getElementsByClassName("smells");
smelly[0].innerHTML = scent;
smelly[0].style.display="block";
}

function hides() {
var h = document.getElementsByClassName("answer");
var g = document.getElementsByClassName("guess");
h[0].style.display="none";
g[0].style.display="none";
}

let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

startBtn.addEventListener('click', function () { 
	timer = true; 
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 

function startTime() { 
	localStorage.hr=0;
	localStorage.min=0; 
	localStorage.sec=0; 
	localStorage.count=0; 
}


function initilizeTime() {  
var hour = localStorage.getItem("hr");
var minute = localStorage.getItem("min");
var second = localStorage.getItem("sec");
var count = localStorage.getItem("count");
	stopWatch(count, second, minute, hour);
}

function stopWatch(count, second, minute, hour) { 
	if (true) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 
		
		localStorage.hr= hour;
		localStorage.min= minute; 
		localStorage.sec= second; 
		localStorage.count= count;

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 
		 
		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 
		setTimeout(function() { stopWatch(count, second, minute, hour);}, 10); 
	}
}

