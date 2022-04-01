<script>
	import Questions from "./components/Questions.svelte"
	import FillBlank from "./components/FillBlank.svelte"

	let test = true
	let color1 = "#F56D91"
	let color2 = "#F7F5F2"
	$: handleClickTrue = () =>{
		test = true
		color1 = "#F56D91"
		color2 = "#F7F5F2"
	}
	$: handleClickFalse = () =>{
		test = false
		color1 = "#F7F5F2"
		color2 = "#F56D91"
	}
</script>


<div class="main-card">
	<div class="row">
		<div class="col-6 col-lg-6 change-button">
			<button class="test-game" style="--theme-color:{color1}" on:click={handleClickTrue()}>Test Game</button>
		</div>
		<div class="col-6 change-button">
			<button class="input-game" style="--theme-color:{color2}" on:click={handleClickFalse()}>İnput Game</button>
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
	margin-right: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: var(--theme-color);

}
.input-game{
	width: 200px;
	height: 50px;
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: var(--theme-color);

}
.change-button{
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
}
</style>