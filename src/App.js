import React from 'react';
import { Anchor, Box, Grommet, Header, Nav, Footer, Text, Clock, RangeInput } from "grommet";

const theme = {
  global: {
    font: {
      family: 'Work Sans',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box height="100vh">
        <TopNav />
        <NumberStation />
        <BotNav />
      </Box>
    </Grommet>
  );
}

class TopNav extends React.Component
{
  render() {
    return(
      <Header background="light-4" pad="medium" id="header" height="10%">
        <Box direction="row" align="center" gap="medium">
          <Anchor href="https://github.com/dcruzships" target="_blank"></Anchor>
          <Anchor color="black" href="https://github.com/dcruzships" target="_blank">
            number_station
          </Anchor>
        </Box>

        <Nav direction="row">
          <Clock type="digital" />
        </Nav>
      </Header>
    )
  }
}

class NumberStation extends React.Component
{
  render() {
    return(
      <Box height="80%" align="center" justify="center">
        <Box border={{ color: 'light-1', size: 'small' }} height="medium" width="medium" align="center" justify="center">
          <Text size="xxlarge">1</Text>
        </Box>
      </Box>
    )
  }
}

class BotNav extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      audio: null,
      value: 0
    };
  }

  render()
  {
    return(
      <Footer background="light-4" pad="medium" height="10%">
        <SimpleRangeInput />
        <Text>Copyright Captain Brando! 2020</Text>
        <Anchor label="Home" />
      </Footer>
    )
  }
}

const SimpleRangeInput = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <Box align="center" pad="small">
      <RangeInput value={value} onChange={onChange} />
    </Box>
  );
};

export default App;
