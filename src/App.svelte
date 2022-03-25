<script>
	import Card from "./components/Card.svelte"
	let word = {
		questionWord:"Hello",
		option1: "Selam",
		option2: "Naber",
		option3: "Nasılsın",
		option4:"Merhaba",
		correctOption: "Merhaba"
	};
</script>
 

	<div class="row">
		<div class="col-md-12 col-lg-12" >
			<Card word={word.questionWord} />
		</div>
		<div class="col-md-6 col-lg-6">
			<Card word={word.option1}/>
		</div>
		<div class="col-md-6 col-lg-6">
			<Card word={word.option2}/>
		</div>
		<div class="col-md-6 col-lg-6">
			<Card word={word.option3}/>
		</div>
		<div class="col-md-6 col-lg-6">
			<Card word={word.option4}/>
		</div>
	</div>



<style>

</style>