<script>
	import Questions from "./components/Questions.svelte"

</script>

<div class="main-card">
	<div class="row">
		<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
			<button class="test-game">Test Game</button>
		</div>
		<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
			<button class="input-game">İnput Game</button>
		</div>
	</div>
	<Questions/>	
</div>




<style>
.main-card{
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 20px;
	width: 100%;
	height: 100%;
	background-color: #fffba5;
}
.test-game{
	width: 200px;
	height: 50px;
	margin-left: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: aqua;
}
.input-game{
	width: 200px;
	height: 50px;
	margin-left: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: aqua;
}
</style>