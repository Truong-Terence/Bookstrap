fetch("data.json")
.then(function(response) {
    return response.json()
})
.then(function(products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out += `
        <div class="col">
            <a href='${product.view}'>
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src='${product.image}' class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">'${product.title}'</h5>
                            <p class="card-text">'${product.content}'</p>
                            <p class="card-text"><small class="text-muted">- '${product.author}'</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `
    }
    placeholder.innerHTML = out;
})