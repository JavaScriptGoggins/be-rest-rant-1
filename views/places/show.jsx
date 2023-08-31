const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <p className="text-center"><h2>Cuisines</h2>{data.place.cuisines}</p>
            <img src={data.place.pic} alt={data.place.name} />
            <p className="text-center"><h2>Located in</h2>{data.place.city}, {data.place.state}</p>
            <div>
                <h2>Ratings:</h2>
                <p>currently unrated</p>
            </div>
            <div>
                <h2>Comments:</h2>
                <p>currently no comments</p>
            </div>
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
            </form> 
 
            </div>
          </main>
        </Def>
    )
}

module.exports = show

