var survivors = 22;
var availableWorkers = survivors;

$('.topNav').html(survivors + " Survivors");
//resources
//currentVal-
var morale = [50, "Morale"];
var food = [100, "Food", 0, 0];
var scrapmetal = [0, "Scrap"];
var health = [80, "Health"];


var resources = [food, scrapmetal, morale, health];

var scavangers = [0, 0.2];
var foragers = [0, 0.9];
var farmers = [0, 0.2];
var repairs = [0, 3.2];
var doctors = [0, 0.4];

var workers = [scavangers, foragers, farmers, repairs, doctors]




//Functions that effect resources

//Fucntions for adding and minusing workers to duties
function adWorker(parm) {
    if (availableWorkers > 0) {
        var currentTotal = workers[parm][0];
        workers[parm][0] = currentTotal + 1;
        availableWorkers = availableWorkers - 1;
        console.log(availableWorkers);
        console.log('Working ' + currentTotal);

    }

}

function minusWorker(parm) {

    var currentTotal = workers[parm][0];
    workers[parm][0] = currentTotal - 1;
    availableWorkers = availableWorkers + 1;
    console.log(availableWorkers)
    console.log('Working ' + currentTotal);



}


//TEST FUNCTION FOR AUTO ADDING RESPOURCES

//FOOD

//foodout

setInterval(function () {

    var foodUse = 0.7;
    var foodout = parseInt(survivors * foodUse);
    food[0] = food[0] - foodout;
    resources[0][2]=foodout;
    rundisplay();
}, 1000);

//foodin

setInterval(function () {

    var foodFarms = workers[2][0] * workers[2][1];
    var foodScav = workers[0][0] * workers[0][1];
    var foodForag = workers[1][0] * workers[1][1];
    var totalFoodIn = (foodFarms + foodForag + foodScav)
    resources[0][0] = resources[0][0] + parseInt(totalFoodIn);
    console.log("Total Food in " + totalFoodIn);
        resources[0][1]=totalFoodIn;

    rundisplay();
}, 1000);

///FOOD TOTAL


//SCRAP
//ScrapIn



//DISPLAY///////////////////////////////////////////////////

function rundisplay() {
    for (i = 0; i < resources.length; i++) {
       var totalfoodrate= resources[i][2] - resources[i][1]
        var selector = i;
        $("#disp_tblname" + selector).html(resources[i][1]);
        $("#disp_tblrate" + selector).html(resources[0][1]-resources[0][2]);
        $("#disp_tblowned" + selector).html(resources[i][0]);

    }
}


$(document).ready(function () {
    $("button .btn-even").attr("width", "500px");

});
/*//AD NETWORK

// select the right Ad Id according to platform
    var admobid = "pub-5220528240734098";
    if( /(android)/i.test(navigator.userAgent) ) { // for android
        admobid = {
            banner: 'ca-app-pub-5220528240734098/8681234220', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-5220528240734098/748370262'
        };
    } 
// preppare and load ad resource in background, e.g. at begining of game level
if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );


var ad1 = "<a href='http://trkur4.com/69233/19174?&i=162439' ><img src='http://pixxur.com/69233/162439-500x500.jpg' /></a>";
var ad2 = "<a href='http://trkur4.com/69233/19174?&i=162468' ><img src='http://pixxur.com/69233/162468-480x700.jpg' /></a>";
var ad3 = "<a href='http://trkur4.com/69233/19167?&i=162226' ><img src='http://pixxur.com/69233/162226-1024x500.png' /></a>";
var ad4 = "<a href='http://trkur3.com/69233/18354?&i=147999' ><img src='http://pixxur.com/69233/147999-320x480.jpg' /></a>";
var ad5 = "<a href='http://trkur3.com/69233/18354?&i=147994' ><img src='http://pixxur.com/69233/147994-320x480.jpg' /></a>";
function randomAd(){
    var advertStatics=[ad1,ad2,ad3,ad4,ad5];
var adrand=chance.integer({min: 0, max: 4});
var displayAd=advertStatics[adrand];
$('#adverts').html(displayAd);


}
$(document).ready(function(){
    
   var adddd=AdMob.createBanner( {
    adId: admobid.banner, 
    position: AdMob.AD_POSITION.TOP_CENTER, 
    autoShow: true } ) ;
  $("#adMob").html(adddd);
});


function checkMorale(){

if(AdMob) AdMob.showInterstitial();
};*/