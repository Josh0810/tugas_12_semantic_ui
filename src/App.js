import {
  Segment,
  Image,
  Grid,
  Button,
  Header,
  Form,
  Checkbox,
  Input,
} from "semantic-ui-react";

function App() {
  return (
    <div className="App" style={{marginTop: "10%"}}>
      <Grid textAlign="center" container>
        <Grid.Column width={7}>
          <Header as={"h2"} color="teal">
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
            Member Login
          </Header>
          <Segment stacked>
            <Form>
              <Form.Field>
                <Input
                type="email"
                  placeholder="E-mail address"
                  icon="user"
                  iconPosition="left"
                />
              </Form.Field>
              <Form.Field>
                <Input type="password" placeholder="Password" icon="lock" iconPosition="left" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button fluid color="teal" type="submit">LOGIN</Button>
            </Form>
          </Segment>
          <Segment secondary><b>Tidak Punya Akun? Silahkan</b> <a href="https://niomic.com/registration" rel="noreferrer" target="_blank">Register</a></Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
