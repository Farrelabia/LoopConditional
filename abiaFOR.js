// var jmAnkot = 10;
// var angkotBeroperasi = 6;
var jmAnkot = prompt('ada berapa jumlah angkot')
var angkotBeroperasi = prompt('Ada berapa angkot yang beroperasi')

for( var noAngkot = 1; noAngkot <= jmAnkot; noAngkot++ ) {

  if( noAngkot <= 6 && noAngkot !== 5 ){
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
  } else if( noAngkot === 8 || noAngkot == 10 || noAngkot == 5) {
    console.log('Angkot No. ' + noAngkot + ' Sedang lembur');
  } else { 
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}
// perubahan abia
