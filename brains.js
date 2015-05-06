
var survivors = 20;

$('.topNav').html(survivors + " Survivors");
//resources
//currentVal-
var morale=[50];
var food=[10,25];
var scrapmetal=[0];
var health=[100];


var resources=[morale, food, scrapmetal,health];



//Functions that effect resources

//food


//AD NETWORK

// select the right Ad Id according to platform
    var admobid = {pub-5220528240734098};
    if( /(android)/i.test(navigator.userAgent) ) { // for android
        admobid = {
            banner: 'ca-app-pub-5220528240734098/7483702620', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/yyy'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    } else { // for windows phone
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
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

function checkMorale(){

if(AdMob) AdMob.showInterstitial();
};