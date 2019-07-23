import React from "react";
import { MDBBtn } from 'mdbreact';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css'
import { EmojiIcon,AddIcon,IconButton,TextComposer,SendButton,TextInput,Avatar,Row,ThemeProvider,Message,MessageMedia,MessageText,MessageList,MessageGroup,MessageTitle,MessageButtons,MessageButton } from '@livechat/ui-kit'



const Main_page = ({logout}) =>{
    return(<div id="h">
        <div id="head"><h1>Cross Fire</h1>
        <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  id="headbtn"
                  onClick={logout}
                >
                 Log Out
                </MDBBtn>
        </div>

        

        {/* <div class="row" id="chat-box">
            <div class="col-md-7 colum c1">
                    Conversation
            </div>
            
            <div class="col-md-4 offset-md-1 colum c2">Logged In Users</div>
        </div>

<div class="input-group mb-3" id="input">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Send</span>
  </div>
    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
  </div> */}

<ThemeProvider >
<div style={{ maxWidth: '80%', height: 400 }} id="theme">
  

      <Message authorName="Jon">
        <MessageText>Hello! I am John!</MessageText>
      </Message>
      <Row reverse>
        <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
        <Message isOwn deliveryStatus="seen">
          <MessageText>Hi!</MessageText>
        </Message>
      </Row>
      <Message authorName="Jon">
        <MessageText>Hello! I am Sena!</MessageText>
      </Message>
      <Row reverse>
        <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
        <Message isOwn deliveryStatus="seen">
          <MessageText>Hi!</MessageText>
        </Message>
      </Row>
      

</div>

<TextComposer defaultValue="Hello, can you help me?">
  <Row align="center">
    <IconButton fit>
      <AddIcon />
    </IconButton>
    <TextInput fill />
    <SendButton fit />
  </Row>

  <Row verticalAlign="center" justify="right">
    <IconButton fit>
      <EmojiIcon />
    </IconButton>
  </Row>
</TextComposer>
</ThemeProvider>


    </div>);
}
export default Main_page;