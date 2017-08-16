a = [2,3,3,4]
b = []
a.forEach(function(e) {
  if (!b.includes(e)) {
    b.push(e)
}});
console.log(b);
