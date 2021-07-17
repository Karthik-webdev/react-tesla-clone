import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>

<Section title='Model S' description='Order Online for Touchless Delivery'
backgroundImg='model-s.jpg'
LeftBtnText='Custom order'
rightBtnText='Exsisting inventory'/>
<Section title='Model Y' description='Order Online for Touchless Delivery'
backgroundImg='model-y.jpg'
LeftBtnText='Custom order'
rightBtnText='Exsisting inventory'/>
<Section title='Model X' description='Order Online for Touchless Delivery'
backgroundImg='model-x.jpg'
LeftBtnText='Custom order'
rightBtnText='Exsisting inventory'/>
<Section title='Lowest Cost Solar Panel in America'
description='Money-back guarentee'
backgroundImg='solar-panel.jpg'
LeftBtnText='Order now'
rightBtnText='learn more'/>
<Section title='Accessories'
description=''
backgroundImg='accessories.jpg'
LeftBtnText='Shop now'/>

        </Container>
    )
}

export default Home
const Container = styled.div`
height:100vh;
`
