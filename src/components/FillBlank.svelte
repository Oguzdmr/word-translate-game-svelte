<script>
    import Store from "../store/store.js"
    import Swal from 'sweetalert2'

let words = []
let index = 0
let inputWord = '';
let scor = 0;

function checkResult(){
    return words[index].correctOption === inputWord
}

Store.subscribe((data)=>{
		words = data;
	})
    $: handleClick = () => {
        inputWord = '';
        index = index + 1
    }
    $: reset = () => {
        index = 0
        scor=0
    }

    $: swalFunction = () => {
        if(checkResult()){
            scor +=10;
            Swal.fire({
                icon: 'success',
                title: 'Doğru Cevap',
                text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            })
        }else{
            scor -=5;
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
<div class="row justify-content-center d-flex">
    <div class="col-md-12 col-lg-12" >
        <div class="card-word"  >
            <h5>Çevirilecek Kelime : {words[index].questionWord}</h5>
        </div>
    </div>
    <div class="col-md-12 col-lg-12 d-flex justify-content-center" >
        <input bind:value={inputWord} type="text">
    </div>
    <button class="button-redirect" on:click={()=>swalFunction()} >Kontrol Et</button>
    <br>
    <h4>Scor: {scor}</h4>
</div>
{:else}
    <h4>Puanınız: {scor}</h4>
    <h5>Oyun Bitti</h5>
    <button class="button-redirect" on:click={reset}>Yeniden Çalış</button>
{/if}

<style>

    /*BE8C63*/
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
    input{
        width: 70%;
        height:50px;
        margin-top: 20px;
        text-align: center;
        border-radius: 15px;
        color: black;
        background-color: white;
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