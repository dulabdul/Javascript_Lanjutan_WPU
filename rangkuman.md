# Javascript Lanjutan Web Programming Unpas

## Javascript Modern

Creation Phase adalah tahap pembentukan yang terjadi di lingkup Global, Javascript akan mencari variabel atau function pada pertama kali, jika ditemukan variabel maka akan di set terlebih dahulu dengan nama undefined, jika ada function akan diisi dengan function itu sendiri, konsep ini disebut juga dengan Hoisting, yaitu menaikan code keatas.

---

### Scope

Lingkup untuk mengecek sebuah variabel dari variabel terdekat dari local baru ke window

### Closure

*"Closure merupakan kombinasi antara function dan lingkungan leksikal(Lexical Scope) di dalam function tersebut."*

***-MDN***

*"Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi."*

***-w3school***

*"Closure adalah sebuah function yang dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan."*

***-Code Fellow***

*"Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain."*

***-Techsith***

---

```javascript
function init(){
    let nama = 'Abdul'; //local variable
    function tampilNama(){ // inner function(closure*)
        console.log(nama);// akses ke parent variable
    }
    tampilNama();
}
init();
```
### Kenapa menggunakan closure?

*"Untuk membuat Function Factories."*

***-MDN***

*"Untuk private method."*

***-MDN***

### Arrow Function

*"Bentuk lain yang lebihr ringkas dari Function Expression"*

***-MDN***

### Higher Order Function

*"Function yang beroperasi pada function yang lain, baik itu digunakan dalam argument, maupun sebagai return value"*

***-https://eloquentjavascript.net***

*"Javascript memperlakukan function sebagai object"*

***-sitepoint.com***

```javascript
const kerjakanTugas(Higher Order Function n  ) = (matakuliah, selesai(callback)) => {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`)
    selesai();
}

const selesai = () => {
    alert('Selesai Mengerjakan Tugas!')
}

kerjakanTugas('Matematika', selesai);
```

### Template Literals

*"Template literal adalah String Literal yang memungkinkan adanya Expression di dalamnnya."*

***-MDN***

* Menggunakan `` back tick
* Multi-line string
* Embedded Expression
* HTML Fragments
* Expression interpolation
* Tag Template

```javascript
`string text`
`string text baris 1
string text baris 2
string text baris 3` // multi-line string

`string text ${expression} string text` // embedded expression

tag ` string text ${expression} string text` // tag template

```

### Tagged Template

*"Bentuk yang lebih kompleks dari Template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function."*

***-MDN***

#### Penggunaan Tagged Template

* Escaping HTML Tags
* Highlighter
* Translation & Internationalization
* Styled Components

### Destructuring Assignment

 *"Expression pada javascript yang membuat kita dapat **'membongkar'** nilai dari **'array'** atau properti dari **object** kedalam **variable** yang terpisah "*

 ***-MDN***

 ```javascript
 // Array
const coba = ['satu', 'dua', 'tiga'];

const [a,b,c] = coba;
console.log(a);
console.log(b);
console.log(c);

// Object
const mhs = {
    nama : 'Abdul Rahman',
    umur : 33,
    email: 'dulabdol1331@gmail.com'
};

const [nama, umur, email] = mhs;

console.log(nama);
 ```

### Looping Baru

* for..of
* for..in

#### for..of

*"Creates a loop iterating over **iterable objet** "*

***-MDN***

##### Iterable Object

* String
* Array
* Arguments/NodeList
* TypedArray
* Map
* Set
* User-defined iterables

##### for..in

*"Creates a loop only iterating over **enuramble**. "*

***-MDN***

### Spread Operator

***"Memecah(expad/unpack) iterab;es menjadi single element"***

***-MDN***

### Rest Parameter

***"Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array"***

***-MDN***

### Asynchronous Javascript

* Callback
* Promise
* Ajax
* Async & Await

#### Javascript
***"Is **single-threaded**, **non-blocking**, **asynchronous** and **concurrent language**"***

***-http://latenflip.com/***

##### Thread

***"Urutan eksekusi kode yang dapat dilakukan secara bebas/independent satu sama lain"***

### Kesimpulan
* *Single vs Multi Thread*
 * Lingkungan Eksekusi 'task'
* *Blocking vs non-blocking*
 * Teknik 'ngoding' (IO related)'
* *Synchronous vs Asynchronous*
 * Teknik 'ngoding' (HTTP request Related)
* *Concurrent vs Parallel*
 * Lingkungan Eksekusi 'task'

***"Don't Block the event loop"***

### Callback

***"Function yang dikirimkan sebagai parameter pada function yang lain"***

***-MDN***

### Fetch()

***"Sebuah method pada API Javascript untuk mengambil **resource** dari jaringan dan mengembalikan **promise** yang selesai(**fullfied**) ketika ada **response** yang tersedia.***

***-MDN***

```javascript
fetch(resource, init); // init => konfigurasi tambahan
```

#### resource
* *URL*
    * alamat dari sumber yang kita akan ambil
* *Request Object*
    * Representasi permintaan sumber

#### init(optional)
    Konfigurasi tambahan pada sebuah request berbentuk object
* *method*
* *headers*
* *body*
* *mode*
* *cache*
* *referrer*
* *referrerPolicy*
* *integrity*
* *keepalive*
* *signal*

#### response (property)

* *headers*
* *ok*
* *redirected*
* *status*
* *statusText*
* *type*
* *url*
* *body*

#### response (method)

* *clone()*
* *error()*
* *redirect()*
* *blob()*
* *formData()*
* *json()*
* *text()*

# Async Await

## Asyncronous Function

***"Sebuah function yang bekerja secara asyncronous (melalui event loop), yang menghasilkan(implisit) promise sebagao return value-nya, tapi cara penulisan code-nya menggunakan penulisan syncronous(standard). Sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara ekskusi fungsinya sambil menunggu promise-nya selesai."***

***-MDN***