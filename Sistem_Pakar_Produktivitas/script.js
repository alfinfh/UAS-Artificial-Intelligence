function cekRule(data){

for(let r of rules){

if(
r.gejala.every(
g=>data.includes(g)
)
){
return r;
}

}

return null;

}

function kategori(k){

return{

P1:"Sangat Produktif",
P2:"Produktif",
P3:"Cukup Produktif",
P4:"Kurang Produktif",
P5:"Tidak Produktif"

}[k];

}

function deskripsi(k){

return{

P1:"Mahasiswa memiliki produktivitas sangat baik, disiplin, dan mampu mengelola waktu dengan efektif.",

P2:"Mahasiswa memiliki kebiasaan belajar yang baik dan konsisten.",

P3:"Produktivitas cukup baik namun masih dapat ditingkatkan.",

P4:"Mulai muncul hambatan dalam produktivitas belajar.",

P5:"Produktivitas rendah dan perlu perbaikan kebiasaan."

}[k];

}



const daftar=
document.getElementById(
"daftarGejala"
);

gejala.forEach(

g=>{

daftar.innerHTML+=`

<div class="item-gejala">

<label>

<input
type="checkbox"
value="${g.kode}">

<b>${g.kode}</b>

-

${g.nama}

</label>

</div>

`;

}

);



document.addEventListener(

"change",

e=>{

if(
e.target.type==="checkbox"
){

e.target
.closest(
".item-gejala"
)

.classList.toggle(

"aktif",

e.target.checked

);

}

}

);



btnAnalisis.onclick=()=>{

const hasil=
document.getElementById(
"hasil"
);



hasil.className=
"hasil-loading";



hasil.innerHTML=
"";



setTimeout(()=>{

const pilih=

[
...document.querySelectorAll(
"input:checked"
)

]

.map(
x=>x.value
);



if(
pilih.length===0
){

hasil.className=
"hasil-muncul";

hasil.innerHTML=

`

<h2>HASIL ANALISIS</h2>

<br>

Pilih minimal 1 gejala

`;

return;

}



const rule=
cekRule(
pilih
);



if(
!rule
){

hasil.className=
"hasil-muncul";

hasil.innerHTML=

`

<h2>HASIL ANALISIS</h2>

<br>

Tidak ditemukan rule yang cocok

`;

return;

}



hasil.className=

`${rule.hasil.toLowerCase()} hasil-muncul`;



hasil.innerHTML=

`

<h2>

HASIL ANALISIS

</h2>

<br>

<p>

Kategori:

<b>

${kategori(
rule.hasil
)}

</b>

</p>

<br>

<p>

Rule:

<b>

${rule.kode}

</b>

</p>

<br>

<p>

${deskripsi(
rule.hasil
)}

</p>

`;



},

3500

);

};