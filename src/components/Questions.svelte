<script>
    import Store from "../store/store.js"
    import Swal from 'sweetalert2'

    let words = []
	let index = 0
    let scor = 0

	Store.subscribe((data)=>{
		words = data;
	})
    $: handleClick = () => {
        index = index + 1
    }
    $: reset = () => {
        index = 0
        scor=0
    }

    const swalFunction = (option) => {
        if(option === words[index].correctOption){
            scor += 10
            Swal.fire({
                icon: 'success',
                title: 'Doğru Cevap',
                text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }else{
            scor -= 5
            Swal.fire({
                icon: 'error',
                title: 'Yanlış Cevap',
                text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }
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
    <div class="card-option" on:click={() => {swalFunction(words[index].option1)}} >
        <h5>{words[index].option1}</h5>
    </div>
</div>
<div class="col-md-6 col-lg-6">
    <div class="card-option" on:click={() => {swalFunction(words[index].option2)}} >
        <h5>{words[index].option2}</h5>
    </div>
</div>
<div class="col-md-6 col-lg-6">
    <div class="card-option" on:click={() => {swalFunction(words[index].option3)}} >
        <h5>{words[index].option3}</h5>
    </div>
</div>
<div class="col-md-6 col-lg-6">
    <div class="card-option"  on:click={() => {swalFunction(words[index].option4)}} >
        <h5>{words[index].option4} </h5>    
    </div>
</div>

<h4>Scor: {scor}</h4>
</div>
{:else}
    <h4>Puanınız: {scor}</h4>
    <h5>Oyun Bitti</h5>
    <button class="button-redirect" on:click={reset}>Yeniden Çalış</button>
{/if}


<style>
    .card-word{
        position: relative;
        width: 100%;
        height: 150px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #8D8DAA;
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
        background-color: #F56D91;
        color: white;
        border-radius: 30px;
        margin-top: 20px;
    }
    h4{
        margin-top: 20px;
    }
    h5{
        position: relative;
        justify-content: center;
        align-items: center;
        border: #F56D91;
        color: black;
    }
    .button-redirect{
        width: 200px;
        height: 50px;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 10px;
        background-color: #F56D91;
        align-items: center;
        color:white;
        justify-content: center;
        display: flex;
    }
</style>