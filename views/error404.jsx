const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
            <div className='errorImageDiv'>
            <img src="css/images/errorimage4.jpg" alt="Chia Fruit Shake" />
            </div>
            <div className='errorImageDiv'>
              Photo by <a href="https://unsplash.com/@itstarynnnn">Taryn Kaahanui</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
            </div>
          </main>
      </Def>
    )
}
  
module.exports = error404
