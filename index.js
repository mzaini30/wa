tinggi = () => {
 document.querySelector(".tinggi").style.height = window.innerHeight - 240 + "px"
}
tinggi()
window.addEventListener("resize", tinggi)
app = new Vue({
 el: ".vue",
 data: {
  wa: "",
  pesan: ""
 },
 methods: {
  olah_pesan(x){
   return encodeURIComponent(x)
  }
 }
})