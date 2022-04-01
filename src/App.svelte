<script>
	import Questions from "./components/Questions.svelte"
	import FillBlank from "./components/FillBlank.svelte"

	let test = true

	$: handleClickTrue = () =>{
		test = true
	}
	$: handleClickFalse = () =>{
		test = false
	}
</script>

<div class="main-card">
	<div class="row">
		<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex change-button">
			<button class="test-game" on:click={handleClickTrue()}>Test Game</button>
		</div>
		<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex">
			<button class="input-game" on:click={handleClickFalse()}>İnput Game</button>
		</div>
	</div>
	{#if test}
	<Questions/>	
	{:else}
	<FillBlank/>
	{/if}
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
	background-color: #DFDFDE;
}
.test-game{
	width: 200px;
	height: 50px;
	margin-left: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: #F7F5F2;
}
.input-game{
	width: 200px;
	height: 50px;
	margin-left: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: #F7F5F2;
}
.change-button{
	justify-content: center;
	align-items: center;
	display: flex;
}
</style>