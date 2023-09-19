import Layout from "../layouts/Layout.astro";

<Fragment>
<Layout>
<img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-ganadores_114360-1475.jpg?w=826&t=st=1695104905~exp=1695105505~hmac=8d22631cee3518c1e0ba68f00603a542dd90c49a201f20b6ef849728ba49d33a" />
GANASTE
<a href="/">Volver a jugar</a>

<script>
{() => {
var myCanvas = document.createElement("canvas");
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
resize: true,
useWorker: true,
});
myConfetti({
particleCount: 100,
spread: 160,
// any other options from the global
// confetti function
});
}}
</script>
</Layout>

</Fragment>;
