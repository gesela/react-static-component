class SideBar extends React.Component {
    render() {
        return (
            <div className='sideBar'>
              <div className='sideBar-items'>
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
              </div>
                
            </div>
        )
    }
}
class Parts extends React.Component{
    render(){
        console.log(this.props.arr)
        return(
            <div className={this.props.stylePart}>
                {this.props.text}
                {this.props.arr.map(item=> <p>{item}</p>)}
                
            </div>
        )
    }
}
class MainPart extends React.Component {
  render() {
    return (
      <div className='mainPart'>Website Visitors
      <p>821</p>
      <MainPartInside />
      </div>
    )
  }
}
class MainPartInside extends React.Component {
    render() {
      return (
        <div className='mainPartInside'></div>
      )
    }
  }
class App extends React.Component {
    render() {
    let arr1 = ['1.281','You got 20 more reviews']
    let arr2 = ['4.6','-0.5 points from last week']
    let arr3 = ['960','122','321']
      return (
    <div className='allParts'>
       <SideBar/>
       <Parts text = 'Reviews' stylePart = 'part1' arr={arr1}/>
       <Parts text = 'Average rating' stylePart = 'part2' arr={arr2}/>
       <Parts text = 'Sentiment Analysis' stylePart = 'part3' arr={arr3}/>
       <MainPart/>
    </div>
      )
    }
  }
ReactDOM.render(
    <App/>,document.querySelector('main')
)