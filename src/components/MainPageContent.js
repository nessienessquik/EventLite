import React from 'react';
import Grid from '@material-ui/core/Grid';
import image01 from '../images/main-events-page/header001.jpg';

class MainPageContent extends React.Component {
    render() {
      const events = [
        {
          id: 1,
          primary: 'Brunch this week?',
          secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
          person: 'header001',
        },
        {
          id: 2,
          primary: 'Birthday Gift',
          secondary: `Do you have a suggestion for a good present for John on his work
            anniversary. I am really confused & would love your thoughts on it.`,
          person: 'header002',
        },
        {
          id: 3,
          primary: 'Recipe to try',
          secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
          person: 'header003',
        },
        {
          id: 4,
          primary: 'Yes!',
          secondary: 'I have the tickets to the ReactConf for this year.',
          person: 'header004',
        },
        {
          id: 5,
          primary: "Doctor's Appointment",
          secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
          person: 'header005',
        },
        {
          id: 6,
          primary: 'Discussion',
          secondary: `Menus that are generated by the bottom app bar (such as a bottom
            navigation drawer or overflow menu) open as bottom sheets at a higher elevation
            than the bar.`,
          person: 'header006',
        },
        {
          id: 7,
          primary: 'Summer BBQ',
          secondary: `Who wants to have a cookout this weekend? I just got some furniture
            for my backyard and would love to fire up the grill.`,
          person: 'header001',
        },
      ];
      return <Grid className="">
      
        {events.map(({ id, primary, secondary, person }) => <div className="EventPageTile">
          <img src={require(`../images/main-events-page/${person}.jpg`)} alt={id} key={id} className='EventPageImg' />
          <h3>{primary}</h3>
          <p>{secondary}</p>
        </div>)}
      
      </Grid>;
    }
  }

export default MainPageContent;
