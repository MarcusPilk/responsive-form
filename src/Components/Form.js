import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>Username</InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
            />
          </InputGroup>

          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon2'>Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type='password'
              placeholder='Password'
              aria-label='Password'
              aria-describedby='basic-addon2'
            />
          </InputGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Forms;
