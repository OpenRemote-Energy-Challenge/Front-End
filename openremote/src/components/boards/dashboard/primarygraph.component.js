import React, {useState} from 'react';
//import { LineChart } from '@rsuite/charts';

const PrimaryGraphComponent = () => {
    const [ loading, setLoading ] = useState(true);
    const data = [["00:00", Math.random()], ["01:00", Math.random()], ["02:00", Math.random()], ["03:00", Math.random()], ["04:00", Math.random()]];

    return (
        <div>
            <p>Chart needs to come here but it doesn't want to work...</p>
            {/*<LineChart name="Primary" data={data} loading={loading} />*/}
        </div>

    )
}

export default PrimaryGraphComponent;