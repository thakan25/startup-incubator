import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Image } from 'semantic-ui-react'
const Headers = () => {
    let linkStyle = {border:'1px solid orange', padding: '1em', borderRadius:'5px', margin: '0.7em'};

    return (
        <div style={{ border: '1px solid black', backgroundColor: 'lightblue' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src='Images/icon.jpg' style={{ width: '120px', margin: '0 2rem' }} />
                    </Grid.Column>
                    <Grid.Column style={{ marginRight: '2rem' }} width={13} verticalAlign='middle' textAlign='right'>
                        <Link to = {'signup'} style = {linkStyle} class = 'link-1'>SignUp</Link>
                        <Link to = {'login'} style = {linkStyle} class = 'link-1'>Login</Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Headers;