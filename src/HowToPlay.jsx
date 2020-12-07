import React, {useState} from 'react'
import { Card, Container } from 'react-bootstrap'
import './styles/Custom.scss'

function HowToPlay() {


  return (
    <Container id="card-container" style={{ width: '45rem' }} fluid>
      <Card className="how-cards" border="primary">
        <Card.Header as="h3" id="match-h3">MATCH4</Card.Header>
        <Card.Body>
          <Card.Title>How to Play</Card.Title>
          <Card.Header>If you do not input any specified numbers, MyQuickPick will choose a random number from 1 to 24.</Card.Header>
          <Card.Text></Card.Text>
          <Card.Text >
            This application will take the number you input and return a random number from -4 to +4. 
            Example (input = 10) return a number from 6 thru 14.
            To view official washington lottery game rules and how to win MATCH4 click the view button.
          </Card.Text>
          <Card.Link href="https://www.walottery.com/JackpotGames/Match4.aspx" style={{ color: 'blue' }}><button>View</button></Card.Link>
        </Card.Body>
      </Card>

      <Card className="how-cards" border="info">
        <Card.Header as="h3" id="pick-h3">PICK3</Card.Header>
        <Card.Body>
          <Card.Title>How to Play</Card.Title>
          <Card.Header>If you do not input any specified numbers, MyQuickPick will choose a random number from 0 to 9.</Card.Header>
          <Card.Text></Card.Text>
          <Card.Text>
            This application will take the number you input and return a random number from -2 to +3. 
            Example (input = 5) return a number from 3 thru 8. If number is greater than 9, it will loop back over starting from 0.
            To view official washington lottery game rules and how to win PICK3 click the view button.
          </Card.Text>
          <Card.Link href="https://www.walottery.com/JackpotGames/Pick3.aspx" style={{ color: 'blue' }}><button>View</button></Card.Link>
        </Card.Body>
      </Card>

      <Card className="how-cards" border="warning">
        <Card.Header as="h3" id="keno-h3">KENO</Card.Header>
        <Card.Body>
          <Card.Title>How to Play</Card.Title>
          <Card.Header>If you do not input any specified numbers, MyQuickPick will choose a random number from 1 to 80.</Card.Header>
          <Card.Text></Card.Text>
          <Card.Text>
            This application will take the number you input and return a random number from -2 to +3. 
            Example (input = 10) return a number from 8 thru 13. To view official washington lottery game rules and how to win KENO click the view button.
          </Card.Text>
          <Card.Link href="https://www.walottery.com/JackpotGames/DailyKeno.aspx" style={{ color: 'blue' }}><button>View</button></Card.Link>
        </Card.Body>
      </Card>

      <Card className="how-cards" border="danger">
        <Card.Header as="h3" id="hit-h3">HIT5</Card.Header>
        <Card.Body>
          <Card.Title>How to Play</Card.Title>
          <Card.Header>If you do not input any specified numbers, MyQuickPick will choose a random number from 1 to 42.</Card.Header>
          <Card.Text></Card.Text>
          <Card.Text>
            This application will take the number you input and return a random number from -6 to +7. 
            Example (input = 10) return a number from 4 thru 17. To view official washington lottery game rules and how to win HIT5 click the view button.
          </Card.Text>
          <Card.Link href="https://www.walottery.com/JackpotGames/Hit5.aspx" style={{ color: 'blue' }}><button>View</button></Card.Link>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
    </Container>
  )
}

export default HowToPlay;
