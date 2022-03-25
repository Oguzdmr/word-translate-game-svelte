<script>
    export let word
</script>


<div class="card-word">
    <h5>{word}</h5>
</div>

<style>
    .card-word{
        position: relative;
        width: 100%;
        height: 150px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: purple;
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