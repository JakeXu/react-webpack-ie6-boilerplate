import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

// import {styles} from './index.css'
// import './index.css'
// import './less.less'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}



class Content extends React.Component {
  render() {
    return <div>内容</div>
  }
}

let Web = props => (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
)
ReactDOM.render(<Web />,
  document.getElementById('app')
)
