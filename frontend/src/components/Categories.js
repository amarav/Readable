import React from 'react'
import { getCategories } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)

  React.useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="w3-row-padding w3-container w3-round w3-margin">
      <br />
      <div className="w3-col m4">Categories:&nbsp; &nbsp;
     <div>
          <div>
            <Button>
              <Link className="w3-button w3-block w3-theme-l1 w3-left-align" to='/'>All</Link>
            </Button> &nbsp;
          {categories && categories.map((category, index) => (
              <Button key={index}>
                <Link className="w3-button w3-block w3-theme-l1 w3-left-align" to={`/${category.path}`}>{category.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories