<script>
    import Store from "../store/store.js"
    import Swal from 'sweetalert2'

let words = []
let index = 0
let inputWord = '';

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
    }

</script>

<div class="row justify-content-center d-flex">
    <div class="col-md-12 col-lg-12" >
        <div class="card-word"  >
            <h5>Çevirilecek Kelime : {words[index].questionWord}</h5>
        </div>
    </div>
    <div class="col-md-12 col-lg-12 d-flex justify-content-center" >
        <input bind:value={inputWord} type="text">
    </div>
    <button class="send-answer" on:click={()=>{checkResult() ?  Swal.fire({
        icon: 'success',
        title: 'Doğru Cevap',
        text: 'Doğru Cevap: ' + words[index].correctOption,
        }).then(function() {
            handleClick() ;
        }):  Swal.fire({
            icon: 'error',
            title: 'Yanlış Cevap',
            text: 'Doğru Cevap: ' + words[index].correctOption,
            }).then(function() {
                handleClick() ;
            });}} >Kontrol Et</button>
</div>

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
    h5{
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .send-answer{
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