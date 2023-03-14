import Tour from './tour/Tour'
import Row from 'react-bootstrap/Row';
const data = require('../../data/db.json')

function Tours() {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {data.map((item) => {
                    return (
                        <Tour key={item.id} tour={item} />
                    )
                })}
            </Row>
        </>
    )
}
export default Tours;