const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />

                    <h3>
                        Located in {data.place.city}, {data.place.state} 
                    </h3>

                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h5>
                        serving {data.place.cuisines}
                    </h5>
                </div>
            </div> 

            <div className="row">
                <div className="col-sm-6">
                    <div>
                        <h2>Ratings:</h2>
                        <p>currently unrated</p>
                    </div>

                    <div>
                        <h2>Comments:</h2>
                        <p>currently no comments</p>
                    </div>

                    <div className="row">
                <div className="col-sm-5">
                    <h5>
                        Founded In {data.place.founded}
                    </h5>

                </div>
            </div>

                    <div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>     
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">Delete</button>
                        </form> 
                    </div>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
