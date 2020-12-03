import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// import { Switch, Route } from 'react-router-dom';
import Service from './Service';

function Home() {
    return (
        <div>
            <Container>
                <Box my={2}>
                    {[...new Array(40)]
                        .map(
                            () => `Home Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
                <Service id="Service"/>
                
            </Container>

        </div>
    )
}

export default Home;
