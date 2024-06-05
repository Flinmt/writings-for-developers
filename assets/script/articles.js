let htmlSection = []
const articles = document.getElementById('articles')

for (let index = 0; index < 9; index++) {
    htmlSection.push(`
                <div class="item">
                    <div class="img-container">
                        <img src="./assets/img/picture-svgrepo-com.svg" alt="img">
                    </div>
                    <h3 class="title">Title</h3>
                    <div class="article-text">
                        <p>
                            GitHub actions provide a really powerful way to integrate continuous integration and delivery
                            into your applications.
                        </p>
                    </div>
                    <div class="info">
                        <p>Month 01, 20XX</p>
                    </div>
                </div>
            `)
}

articles.innerHTML += htmlSection.join('');