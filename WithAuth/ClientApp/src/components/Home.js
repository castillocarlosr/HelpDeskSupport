import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Welcome to the HelpDesk Support Ticketing Web Application</h1>
            <p>Please excuse the construction as I, Carlos Castillo am currently the only one building this web application.</p>
            <p>I have great hopes on this project and expect this HelpDesk to be awesome.</p>
            <strike>
                <p>Last update December 10, 2019</p>
            </strike>
            <p>UPDATE:  might need to scrap this and rework on it again.  Dont want to lost the commits though.
                </p>
            <p>Last looked at Jan. 27, 2020</p>
            <p>WOW it's been a while since I worked on this app.</p>
            <hr />
            <br />
            <br />
            <br />
            <br />

            <h6>Below are some reference documents for now.</h6>
            
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
