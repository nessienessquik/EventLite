import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import axios from "axios";

class MainPageContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventsObject: []
    };
  }

  helloWorld = () => {
    console.log("hello world");
  }

  apiToDatabaseForAllEvents = () => {
    console.log("api endpoint hit");

    axios
      .get(`https://event-manager-2019-stage.herokuapp.com/events?show_all=1`)
      .then(res => {
        
        const apiObject = res.data;
        // this.setState({ pixObj: [] });
        this.setState({ eventsObject: [...this.state.pixObj, ...apiObject] });
        console.log(this.state.eventsObject);
      })
      .catch(function(error) {
        console.log(error);
      });
  };


    render() {
      const events = [
        {
          id: 1,
          primary: 'Brunch Party',
          secondary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat nec eros id bibendum. Fusce semper, ante eget posuere facilisis, quam ante imperdiet nunc, non imperdiet lacus sem placerat mauris.",
          person: 'header001',
        },
        {
          id: 2,
          primary: 'Birthday Bash',
          secondary: `Aenean condimentum ex arcu, et venenatis velit consectetur eget. Mauris sit amet justo varius, vestibulum mauris nec, vulputate magna. Etiam facilisis aliquet urna, in mattis felis ultricies pretium. Sed vehicula dolor et risus gravida eleifend.`,
          person: 'header002',
        },
        {
          id: 3,
          primary: 'Chili Cook-Off',
          secondary: 'Etiam facilisis aliquet urna, in mattis felis ultricies pretium. Sed vehicula dolor et risus gravida eleifend.',
          person: 'header003',
        },
        {
          id: 4,
          primary: 'Yoga!',
          secondary: 'Maecenas volutpat nec eros id bibendum. Fusce semper, ante eget posuere facilisis, quam ante imperdiet nunc, non imperdiet lacus sem placerat mauris.',
          person: 'header004',
        },
        {
          id: 5,
          primary: "Kareoke Meetup",
          secondary: 'Etiam facilisis aliquet urna, in mattis felis ultricies pretium. Sed vehicula dolor et risus gravida eleifend.',
          person: 'header005',
        },
        {
          id: 6,
          primary: 'Movie Discussion',
          secondary: `Maecenas volutpat nec eros id bibendum? Fusce semper, ante eget posuere facilisis, quam ante imperdiet nunc, non imperdiet lacus sem placerat mauris.`,
          person: 'header006',
        },
        {
          id: 7,
          primary: 'Summer BBQ',
          secondary: `Sed vehicula dolor et risus gravida eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat nec eros id bibendum. Fusce semper, ante eget posuere facilisis, quam ante imperdiet nunc, non imperdiet lacus sem placerat mauris.`,
          person: 'header001',
        },        
        {
          id: 8,
          primary: 'View More',
          secondary: `Want more events? We got em!`,
          person: 'header002',
        },
      ];
      return <Grid className="">
      
        {events.map(({ id, primary, secondary, person }) => <div className="EventPageTile" key={id}>
          <img src={require(`../images/main-events-page/${person}.jpg`)} alt={id} className='EventPageImg' />
          <h3>{primary}</h3>
          <p>{secondary}</p>
        </div>)}
      
      </Grid>;
    }
  }

export default MainPageContent;