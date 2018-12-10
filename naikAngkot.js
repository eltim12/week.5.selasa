function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang[0] === undefined) {
        return []
    }

    var result = []

    var jarak = 0
    var harga = 2000

    for (i = 0; i < arrPenumpang.length; i++) {
        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }
        for (j = 0; j < rute.length; j++) {
            if (rute[j] === obj.naikDari) {
                jarak = j
            }
            if (rute[j] === obj.tujuan) {
                jarak -= j
                var itung = Math.abs(jarak)
            }
        }
        obj.bayar = itung * harga
        result.push(obj)

    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

  console.log(naikAngkot([])); //[]