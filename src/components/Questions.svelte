<script>
    import Store from "../store/store.js"
    import Swal from 'sweetalert2'

    let words = []
	let index = 0

	Store.subscribe((data)=>{
		words = data;
	})
    $: handleClick = () => {
        index = index + 1
    }
    $: reset = () => {
        index = 0
    }
</script>




{#if index !== words.length}
<div class="row">
    <div class="col-md-12 col-lg-12" >
        <div class="card-word"  >
            <h5>Çevirilecek Kelime : {words[index].questionWord}</h5>
        </div>
    </div>
   
<div class="col-md-6 col-lg-6">
    <div class="card-option" on:click={() => {
         
        if(words[index].option1 === words[index].correctOption){
            Swal.fire({
            icon: 'success',
            title: 'Doğru Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Yanlış Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
           
        }
        }} >
        <h5>{words[index].option1}</h5>
    </div>
</div>
<div class="col-md-6 col-lg-6">
    <div class="card-option" on:click={() => {

        if(words[index].option2 === words[index].correctOption){
            Swal.fire({
            icon: 'success',
            title: 'Doğru Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
            
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Yanlış Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
        }} >
        <h5>{words[index].option2}</h5>
    </div>
</div>
<div class="col-md-6 col-lg-6">
    <div class="card-option" on:click={() => {

        if(words[index].option3 === words[index].correctOption){
            Swal.fire({
            icon: 'success',
            title: 'Doğru Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Yanlış Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
        }} >
        <h5>{words[index].option3}</h5>
    </div>
</div>
<div class="col-md-6 col-lg-6">
    <div class="card-option"  on:click={() => {
        
        if(words[index].option4 === words[index].correctOption){
            Swal.fire({
            icon: 'success',
            title: 'Doğru Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Yanlış Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
        }} >
        <h5>{words[index].option4} </h5>
        
    </div>
</div>

</div>
{:else}
    <h5>Başka Soru Bulunmamaktadır.</h5>
    <button on:click={reset}>Yeniden Çalış</button>
{/if}


<style>
    .card-word{
        position: relative;
        width: 100%;
        height: 150px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #042940;
        color: white;
        border-radius: 30px;
        margin-top: 20px;
    }
    .card-option{
        position: relative;
        width: 100%;
        height: 70px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #005C53;
        color: white;
        border-radius: 30px;
        margin-top: 20px;
    }
    h5{
        position: relative;
        justify-content: center;
        align-items: center;
    }
</style>